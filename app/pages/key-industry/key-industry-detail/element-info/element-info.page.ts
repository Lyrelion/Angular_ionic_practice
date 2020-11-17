import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeyIndustryService } from 'src/app/services/business/key-industry/key-industry.service';

/**
 * 采样信息页面
 */
@Component({
  selector: 'app-element-info',
  templateUrl: './element-info.page.html',
  styleUrls: ['./element-info.page.scss'],
})
export class ElementInfoPage implements OnInit {
  // 样点信息列表字段
  public pointList = [
  ];
  // 退样列表字段
  public refuseList = [
    {
      label: '样点编码',
      code: 'NODE_ID',
      type: 'text'
    },
    {
      label: '样品编码',
      code: 'SPECIMEN_CODE',
      type: 'text'
    },
    {
      label: '样品二次编码',
      code: 'RELATION_TWO_CODE',
      type: 'text'
    },
    {
      label: '测试实验室',
      code: 'LAB_NAME',
      type: 'text'
    },
    {
      label: '测试项目',
      code: 'TEST_TYPE',
      type: 'text'
    },
    {
      label: '样品采集时间',
      code: 'LAB_TEST_TIME',
      type: 'text'
    },
    {
      label: '采样单位送样时间',
      code: 'SHIPPING_TIME',
      type: 'text'
    },
    {
      label: '运送方法',
      code: 'SHIPPING_METHOD',
      type: 'text'
    },
    {
      label: '实验室收样时间',
      code: 'LAB_REC_TIME',
      type: 'text'
    },
    {
      label: '质量问题',
      code: 'REVIEW_REASON',
      type: 'text'
    },
  ];
  // 进度审核列表字段
  public progressList = [
    {
      label: '样点编码',
      code: 'NODE_ID',
      type: 'text'
    },
    {
      label: '经度',
      code: 'LONGITUDE',
      type: 'text'
    },
    {
      label: '纬度',
      code: 'LATITUDE',
      type: 'text'
    },
    {
      label: '位置',
      code: 'SAMPLING_POSITION',
      type: 'text'
    },
    {
      label: '测试项目',
      code: 'TEST_PROJECT',
      type: 'text'
    },
    {
      label: '采样小组',
      code: 'GROUP_ID',
      type: 'text'
    },
    {
      label: '操作',
      code: 'OPERATION_STATE',
      type: 'text'
    },
  ];
  // 现场检查进度列表字段
  public inspectList = [
    {
      label: '样点编码',
      code: 'NODE_ID',
      type: 'text'
    },
    {
      label: '环节1质控结果',
      code: 'STAGE1',
      type: 'text'
    },
    {
      label: '环节2质控结果',
      code: 'STAGE2',
      type: 'text'
    },
    {
      label: '环节3质控结果',
      code: 'STAGE3',
      type: 'text'
    },
    {
      label: '环节4质控结果',
      code: 'STAGE4',
      type: 'text'
    },
    {
      label: '环节5质控结果',
      code: 'STAGE5',
      type: 'text'
    },
    {
      label: '环节6质控结果',
      code: 'STAGE6',
      type: 'text'
    },
  ];
  // 样点详情内容
  public pointData = [];
  // 退样信息内容
  public refuseData = {};
  // 进度审核内容
  public processData = {};
  // 现场检查进度内容
  public insoectData = {};
  // 企业主键id
  private id = '';
  constructor(
    private keyIndustryService: KeyIndustryService, // 重点行业企业service
    private activatedRoute: ActivatedRoute, // 路由参数
  ) { }

  ngOnInit() {
    // 获取企业主键id
    this.id = this.getRouterParams('id');
    // 获取采样阶段退样信息
    this.getRefuseInfo();
    // 获取进度审核信息
    this.getProgressInfo();
    // 获取现场检查信息
    this.getInspectInfo();
  }

  /**
   * 获取采样阶段退样信息
   */
  getRefuseInfo(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    };
    // 请求接口
    this.keyIndustryService.getRefuseInfo(params, true, res => {
      // 风险筛查纠偏信息内容
      this.refuseData = res.data;

    })
  }

  /**
   * 获取资料审核进度信息
   */
  getProgressInfo(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    };
    // 请求接口
    this.keyIndustryService.getProgressInfo(params, true, res => {
      // 风险筛查纠偏信息内容
      this.processData = res.data;

    })
  }

  /**
   * 获取现场监察信息
   */
  getInspectInfo(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    };
    // 请求接口
    this.keyIndustryService.getInspectInfo(params, true, res => {
      // 风险筛查纠偏信息内容
      this.insoectData = res.data;
    })
  }

  /**
   * 获取上一个页面的参数
   * @param param 路由传递过来的key
   */
  getRouterParams(param: string): string {
    return  this.activatedRoute.snapshot.paramMap.get(param);
  }
}
