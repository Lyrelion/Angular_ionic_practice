import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeyIndustryService } from 'src/app/services/business/key-industry/key-industry.service';

/**
 * 风险筛查结果页面
 */
@Component({
  selector: 'app-risk-screening-result',
  templateUrl: './risk-screening-result.page.html',
  styleUrls: ['./risk-screening-result.page.scss'],
})
export class RiskScreeningResultPage implements OnInit {
  // 企业信息页面名称和接口返回参数的字段对应
  public companyList = [
    {
      label: '地块编码',
      code: 'LANDCODE',
      type: 'text'
    },
    {
      label: '地块名称',
      code: 'LANDNAME',
      type: 'text'
    },
    {
      label: '企业名称',
      code: 'ENTER_NAME',
      type: 'text'
    },
    {
      label: '地块地址',
      code: 'LANDNAME',
      type: 'text'
    },
    {
      label: '行业类别',
      code: 'NAME_TRADETYPE',
      type: 'text'
    },
    {
      label: '企业类型',
      code: 'CODE_ENTERTYPE',
      type: 'text'
    },
  ]
  // 筛查结果页面信息名称和接口返回参数的字段对应
  public resulrList = [
    {
      label: '土壤得分',
      code: 'SOILSCORE',
      type: 'text'
    },
    {
      label: '地下水得分',
      code: 'WATERSCORE',
      type: 'text'
    },
    {
      label: '土壤确定性得分',
      code: 'SOILSURESCORE',
      type: 'text'
    },
    {
      label: '地下水确定性得分',
      code: 'WATERSURESCORE',
      type: 'text'
    },
    {
      label: '确定性',
      code: 'RISKSURE',
      type: 'text'
    },
    {
      label: '分值',
      code: 'RISKSUMSCORE',
      type: 'text'
    },
    {
      label: '等级',
      code: 'RISKGRADE',
      type: 'text'
    },
  ]
  // 风险筛查结果信息
  public riskResultData = {};
  // 企业主键id
  private id = '';
  constructor(
    private keyIndustryService: KeyIndustryService, // 重点行业企业service
    private activatedRoute: ActivatedRoute, // 路由参数
  ) { }

  ngOnInit() {
    // 获取企业主键id
    this.id = this.getRouterParams('id');
    // 获取风险筛查结果信息
    this.getRiskScreeningResult();
  }
  getRiskScreeningResult(): void {
    // 接口请求参数
    const params = {
      ENTERID: this.id
    };
    // 接口请求
    this.keyIndustryService.getRiskScreeningResult(params, true, res => {
      // 风险筛查结果信息
      this.riskResultData = res.data;
    })
  }

  /**
   * 获取上一个页面的参数
   * @param param 路由传递参数的字段名
   */
  getRouterParams(param: string): string {
    return  this.activatedRoute.snapshot.paramMap.get(param);
  }
}
