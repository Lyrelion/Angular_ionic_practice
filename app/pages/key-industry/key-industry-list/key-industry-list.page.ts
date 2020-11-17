import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-key-industry-list',
  templateUrl: './key-industry-list.page.html',
  styleUrls: ['./key-industry-list.page.scss'],
})
export class KeyIndustryListPage implements OnInit {
  // 监督管理信息
  public topInfo = {
    iconUrl: 'assets/img/list-jdgl.png',
    name: '监督管理',
    router: 'supervision/supervision-list',
  }
  // 其他列表信息
  public listInfo = [
    {
      iconUrl: 'assets/img/list-dkjbxx.png',
      name: '地块基本信息',
      router: 'key-industry/key-industry-detail/land-info',
    },
    {
      iconUrl: 'assets/img/list-dklyls.png',
      name: '地块利用历史',
      router: 'key-industry/key-industry-detail/land-history-info',
    },
    {
      iconUrl: 'assets/img/list-wryxx.png',
      name: '污染源信息',
      router: 'key-industry/key-industry-detail/source-pollution-info',
    },
    {
      iconUrl: 'assets/img/list-qytjxx.png',
      name: '迁移途径信息',
      router: 'key-industry/key-industry-detail/route-info',
    },
    {
      iconUrl: 'assets/img/list-mgstxx.png',
      name: '敏感受体信息',
      router: 'key-industry/key-industry-detail/receptor-info',
    },
    {
      iconUrl: 'assets/img/list-hjjc-dcpg.png',
      name: '环境监测和调查评估信息',
      router: 'key-industry/key-industry-detail/enviroment-investigation',
    },
    {
      iconUrl: 'assets/img/list-kj-zltp.png',
      name: '空间信息及资料图片',
      router: 'key-industry/key-industry-detail/space-files',
    },
    {
      iconUrl: 'assets/img/list-fxscjg.png',
      name: '风险筛查结果',
      router: 'key-industry/key-industry-detail/risk-screening-result',
    },
    {
      iconUrl: 'assets/img/list-fxscfs.png',
      name: '风险筛查分数',
      router: 'key-industry/key-industry-detail/risk-screening-number',
    },
    {
      iconUrl: 'assets/img/list-fxscjpxx.png',
      name: '风险筛查纠偏信息',
      router: 'key-industry/key-industry-detail/distribution-info',
    },
    {
      iconUrl: 'assets/img/list-bdxx.png',
      name: '布点信息',
      router: 'key-industry/key-industry-detail/samplepoint-info',
    },
    {
      iconUrl: 'assets/img/list-cyxx.png',
      name: '采样信息',
      router: 'key-industry/key-industry-detail/element-info',
    },
  ];
  // 主键
  private id = '';
  public page = {
    title: '', // 企业名称
  }
  constructor(
    private router: Router, // 路由
    private activatedRoute: ActivatedRoute, // 获取路由参数
  ) { }

  ngOnInit(): void {
    // 接受上一个页面传递的参数
    this.id = this.getRouterParams('id');
    // console.log(this.getRouterParams('id'));
    // 获取企业名称
    this.page.title = this.getRouterParams('title');
  }

  /**
   * 列表点击事件
   * @param item 列表信息
   */
  itemClick(item: {[key: string]: string}): void {
    /**
     * 路由跳转，根据列表信息来进行跳转
     * @param id 监督管理历史数据
     * @param title 企业名称
     */
    this.router.navigate([item.router, {id: this.id, title: this.page.title}])
  }

  /**
   * 获取上一个页面的参数
   * @param param 参数名称
   * @param item 页面元素内容
   * @param title 页面title
   */
  getRouterParams(param: string): string {
    return  this.activatedRoute.snapshot.paramMap.get(param);
  }

}
