import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeyIndustryService } from 'src/app/services/business/key-industry/key-industry.service';
/**
 * 环境监测和调查评估信息页面
 */
@Component({
  selector: 'app-enviroment-investigation',
  templateUrl: './enviroment-investigation.page.html',
  styleUrls: ['./enviroment-investigation.page.scss'],
})
export class EnviromentInvestigationPage implements OnInit {
  // 环境监测和调查评估信息字段
  public dataList = [
    {
      label: '调查时间',
      code: 'TRJC002',
      type: 'text'
    },
    {
      label: '土壤环境调查监测工作',
      code: 'TRJC001',
      type: 'text'
    },
    {
      label: '是否检出污染物超标',
      code: 'TRJC003',
      type: 'text'
    },
    {
      label: '来源',
      code: 'TRJC004',
      type: 'text'
    },
  ];
  // 土壤监测数据详细信息
  public solidInfo = [];
  // 地下水监测数据详细信息
  public waterInfo = [];
  // 企业主键id
  private id = '';
  constructor(
    private keyIndustryService: KeyIndustryService, // 重点行业企业service
    private activatedRoute: ActivatedRoute, // 路由参数
  ) { }

  ngOnInit() {
    // 获取企业主键id
    this.id = this.getRouterParams('id');
    // 获取页面详细信息
    this.getEnviromentAndInvestigation();
  }

  /**
   * 获取环境监测和调查评估信息
   */
  getEnviromentAndInvestigation(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    };
    // 请求接口
    this.keyIndustryService.getEnviromentAndInvestigation(params, true, res => {
      // 环境监测
      this.solidInfo = res.data[0];
      // 调查评估信息
      this.waterInfo = res.data[1];
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
