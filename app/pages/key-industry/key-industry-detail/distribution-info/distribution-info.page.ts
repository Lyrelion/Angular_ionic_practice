import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeyIndustryService } from 'src/app/services/business/key-industry/key-industry.service';
/**
 * 风险筛查纠偏信息页面
 */
@Component({
  selector: 'app-distribution-info',
  templateUrl: './distribution-info.page.html',
  styleUrls: ['./distribution-info.page.scss'],
})
export class DistributionInfoPage implements OnInit {
  // 风险筛查纠偏信息字段列表
  public distributionList = [
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
      label: '纠偏前关注度水平',
      code: 'OLD_CONCERN_LEVEL',
      type: 'text'
    },
    {
      label: '企业类型',
      code: 'MODULE_TYPE',
      type: 'text'
    },
    {
      label: '偏差存疑类型',
      code: 'FIND_DEVIATIONS',
      type: 'text'
    },
    {
      label: '偏差存疑核实说明',
      code: 'FIND_DEVIATIONS_EXPLAIN',
      type: 'text'
    },
    {
      label: '偏差类型',
      code: 'TYPE',
      type: 'text'
    },
    {
      label: '纠偏方式',
      code: 'RECTIFY_MODE',
      type: 'text'
    },
    {
      label: '纠偏后关注度水平',
      code: 'NEW_CONCERN_LEVEL',
      type: 'text'
    },
    {
      label: '备注',
      code: 'REMARKS',
      type: 'text'
    },
    {
      label: '创建时间',
      code: 'CREATE_TIME',
      type: 'text'
    },
    {
      label: '纠偏人',
      code: 'CREATE_USER',
      type: 'text'
    },
    {
      label: '纠偏级别',
      code: 'USER_LEVEL',
      type: 'text'
    },
  ]
  // 风险筛查纠偏信息内容
  public distributionData = {};
  private id = '';
  constructor(
    private keyIndustryService: KeyIndustryService, // 重点行业企业service
    private activatedRoute: ActivatedRoute, // 路由参数
  ) { }

  ngOnInit() {
    // 获取企业主键id
    this.id = this.getRouterParams('id');
    // 获取风险筛查纠偏信息
    this.getRiskScreeningReviseInfo();
  }

  /**
   * 获取风险筛查纠偏信息
   */
  getRiskScreeningReviseInfo(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    };
    // 请求接口
    this.keyIndustryService.getRiskScreeningReviseInfo(params, true, res => {
      // 风险筛查纠偏信息内容
      this.distributionData = res.data;

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
