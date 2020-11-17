/**
 * 带环饼图列表组件
 * 描述：含义内环、外环，无标签，右侧显示列表
 * 作者：吴俊
 * 时间：2020年7月8日
 */

import { Component, OnInit, Input, OnChanges, AfterViewInit  } from '@angular/core';
import * as echarts from 'echarts';

interface PieData {
  data: {name: string, value: number, label?: string}[]; // 数据
  title: string;          // 标题：默认 '总数+单位'
  unit: string|boolean;   // 单位：标签值单位（标签值类型为百分比时，单位无效）
  colorList: string[];    // 饼图单位数组
  inner: boolean;         // 是否显示内环
  innerColor: string;     // 内环颜色
  outer: boolean;         // 是否显示外环
  outerColor: string;     // 外环颜色
  subtitle: string;       // 子标题
  labelShow: string;      // 标签值显示类型：origin原数据，percent百分比
  labelAdj: string;       // 标签值修饰：(), [], {}, none  显示类型为percent时有效
}

@Component({
  selector: 'ths-list-pie-chart',
  templateUrl: './ths-list-pie-chart.component.html',
  styleUrls: ['./ths-list-pie-chart.component.scss'],
})
export class ThsListPieChartComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() data: {name: string, value: number, label?: string}[]; // 数据
  @Input() title: string;            // 标题
  @Input() colorList: string[]; // 饼图颜色数组
  @Input() inner = true;             // 是否显示内环
  @Input() innerColor = '#EEF5FF';   // 内环颜色
  @Input() outer = true;             // 是否显示外环
  @Input() outerColor = '#B2B2B2';   // 外环颜色
  @Input() subtitle: string;              // 子标题
  @Input() labelShow = 'origin';          // 标签值显示类型：origin原数据，percent百分比
  @Input() labelAdj = '()';               // 标签值修饰：(), [], {}, none
  @Input() unit: string|boolean = false;  // 单位：标签值单位（标签值类型为百分比时，单位无效）

  // echart实例
  public myChart: any;

  // 每个图表的id，用于区分重复使用的图表组件
  public chartId: string;

  // 组件内使用的数据
  public pieData: PieData;

  // 饼图颜色默认列表
  public defaultColorList = ['#36C977', '#FFCC37', '#F65546', '#00A2FF', '#4B79FF', '#A56FFF'];

  constructor() {
    this.chartId = this.getUuid();
  }

  /**
   *  传入数据后触发(触发一次)
   */
  ngOnInit() {
    this.pieData = {
      data: this.data,
      title: this.subtitle ? this.title + '<br />' + this.subtitle : this.title,
      colorList: this.colorList || this.defaultColorList,
      unit: 'percent' === this.labelShow ? '%' : this.unit,
      inner: this.inner,
      outer: this.outer,
      innerColor: this.innerColor,
      outerColor: this.outerColor,
      subtitle: this.subtitle,
      labelShow: this.labelShow,
      labelAdj: this.labelAdj,
    };
  }

  /**
   *  组件html页面渲染完成后触发(触发一次)
   */
  ngAfterViewInit() {
      setTimeout(() => {
        const Echarts = echarts as any;
        const container = document.getElementById(this.chartId);
        this.myChart = Echarts.init(container);
        this.myChart.resize();
        this.renderChart(this.pieData);
      }, 1200);
  }

  /**
   *  数据改变时触发(第一次传入数据时在ngOnInit之前触发)
   */
  ngOnChanges(changes: any): void {
    if (changes && changes.data && !changes.data.firstChange || (changes && changes.title && !changes.title.firstChange)) {
      this.pieData = {
        ...this.pieData,
        data: changes.data.currentValue,
        title: this.subtitle ? this.title + '<br />' + this.subtitle : this.title,
      };
    }
    if (this.myChart) {
      this.renderChart(this.pieData);
    }
  }

  /**
   * 渲染图表
   * @param pieData 图表数据
   */
  renderChart(pieData: PieData) {
    // 处理列表显示
    const valueSum = this.getValueSum(pieData.data);
    pieData.data.map(item => {
      let lable = item.value + '';
      if ('percent' === pieData.labelShow) {
        if (valueSum === 0) {
          lable = this.formatAdj(pieData.labelAdj, 0 + '%');
        } else {
          lable = this.formatAdj(pieData.labelAdj, parseFloat((Number(item.value) / valueSum * 100).toFixed(2) + '') + '%');
        }
      }
      item.label = lable;
    });

    // 配置项
    const option: any = {
      grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          containLabel: true
      },
      color: pieData.colorList,
      series: [
        {
          name: '数据',
          type: 'pie',
          radius: [39.2, 52],
          // clockwise: false, // 逆时针
          hoverAnimation: false,
          data: pieData.data,
          label: { show: false },
          labelLine: { show: false },
          // itemStyle: {
          //   borderColor: '#fff',
          //   borderWidth: 1
          // }
        }
      ]
    };

    // 给饼图加外环
    if (pieData.inner) {
      option.series.push({
        z: 3,
        silent: true,
        name: '内部阴影 ',
        type: 'pie',
        radius: [32, 39.2],
        center: ['50%', '50%'],
        itemStyle: {
          color: pieData.innerColor
        },
        labelLine: { show: false },
        data: [100],
      });
    }
    // 给饼图加内环
    if (pieData.outer) {
      option.series.push({
        z: 0,
        silent: true,
        name: '外环',
        type: 'pie',
        radius: [58, 59],
        center: ['50%', '50%'],
        itemStyle: {
          color: pieData.outerColor,
          opacity: 0.5,
        },
        labelLine: { show: false },
        data: [100],
      });
    }

    this.myChart.setOption(option);
  }

  /**
   *  获取动态uid
   */
  getUuid(): string {
    const s = [];
    const hexDigits = '0123456789ABCDEF';
    for (let i = 0; i < 32; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    const uuid = s.join('');
    return uuid;
  }

  /**
   * 计算数据总和
   * @param data 传入数据
   * @returns 数据和
   */
  getValueSum(data: Array<any>): number {
    let num = 0;
    data.forEach(item => {
      num += Number(item.value);
    });
    return num;
  }

  /**
   * 给值加上括号
   * @param adj 修饰符
   * @param str 需要修饰文字
   * @returns 修饰好的
   */
  formatAdj(adj: string, str: string): string {
    if ('none' === adj || !str) {
      return str;
    } else if ('()' === adj) {
      return `(${str})`;
    } else if ('{}' === adj) {
      return `{${str}}`;
    } else if ('[]' === adj) {
      return `[${str}]`;
    }
  }
}
