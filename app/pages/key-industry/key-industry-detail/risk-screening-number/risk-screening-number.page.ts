import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeyIndustryService } from 'src/app/services/business/key-industry/key-industry.service';

/**
 * 风险筛查分数页面
 */
@Component({
  selector: 'app-risk-screening-number',
  templateUrl: './risk-screening-number.page.html',
  styleUrls: ['./risk-screening-number.page.scss'],
})
export class RiskScreeningNumberPage implements OnInit {
  // 风险筛查分数（一级分数）页面名称和接口返回值字段对应
  public firstList = [
    {
      label: '土壤得分',
      code: 'SOIL_SCORE',
      type: 'text'
    },
    {
      label: '地下水得分',
      code: 'WETER_SCORE',
      type: 'text'
    },
    {
      label: '土壤确定性得分',
      code: 'SOIL_DETERMINE_SCORE',
      type: 'text'
    },
    {
      label: '地下水确定性得分',
      code: 'WETER_DETERMINE_SCORE',
      type: 'text'
    },
    {
      label: '确定性(%)',
      code: 'DETERMINE',
      type: 'text'
    },
    {
      label: '分值',
      code: 'TARGET_SCORE',
      type: 'text'
    },
    {
      label: '等级',
      code: 'OPTION_LEVEL',
      type: 'text'
    },
  ]
  // 风险筛查分数（土壤二级，三级分数）列表对应字段
  public soliList = [
    {
      label: '环境风险管理水平',
      code: 'SOIL_LEAKAGE_RISK',
      type: 'text'
    },
    {
      label: '泄漏物环境风险（Tm）',
      code: 'SOIL_TM',
      type: 'text'
    },
    {
      label: '废水环境风险（Tw）',
      code: 'SOIL_WATER_TW',
      type: 'text'
    },
    {
      label: '废气环境风险（Tg）',
      code: 'SOIL_TG',
      type: 'text'
    },
    {
      label: '固体废物环境风险（Tsw）',
      code: 'SOIL_TSW',
      type: 'text'
    },
    {
      label: '企业环境违法行为次数',
      code: 'SOIL_ILLEGAL_NUMBER',
      type: 'text'
    },
    {
      label: '地块污染现状',
      code: 'SOIL_POLLUTION_STATUS',
      type: 'text'
    },
    {
      label: '土壤可能受污染程度',
      code: 'SOIL_POLLUTION',
      type: 'text'
    },
    {
      label: '重点区域面积（A）',
      code: 'SOIL_KEY_AREA',
      type: 'text'
    },

    {
      label: '生产经营活动时间（tp）',
      code: 'SOIL_OPERATING_TIME',
      type: 'text'
    },
    {
      label: '污染物对人体健康的危害效应（T）',
      code: 'SOIL_HEALTH_HAZARD',
      type: 'text'
    },
    {
      label: '污染物中是否含有持久性有机污染物',
      code: 'SOIL_ORGANIC_POLLUTANTS',
      type: 'text'
    },
    {
      label: '土壤污染物迁移途径',
      code: 'SOIL_MOVE_ROUTE',
      type: 'text'
    },
    {
      label: '重点区域地表覆盖情况',
      code: 'SOIL_SURFACE_COVERAGE',
      type: 'text'
    },
    {
      label: '地下防渗措施',
      code: 'SOIL_SEEPAGE_MEASURE',
      type: 'text'
    },
    {
      label: '包气带土壤渗透性',
      code: 'SOIL_VADOSE_ZONE',
      type: 'text'
    },
    {
      label: '污染物挥发性',
      code: 'SOIL_POLLUTANTS_VOLATILITY',
      type: 'text'
    },
    {
      label: '污染物迁移性（M）',
      code: 'SOIL_POLLUTANTS_MOVE',
      type: 'text'
    },
    {
      label: '年降水量（P）',
      code: 'SOIL_RAINFALL',
      type: 'text'
    },
    {
      label: '土壤污染受体',
      code: 'SOIL_POLLUTION_RECEPTOR',
      type: 'text'
    },
    {
      label: '地块中职工的人数（W）',
      code: 'SOIL_WORKERS_NUMBER',
      type: 'text'
    },
    {
      label: '地块周边500米内的人口数量（R）',
      code: 'SOIL_POPULATION_NUMBER',
      type: 'text'
    },
    {
      label: '重点区域离最近敏感目标的距离（Ds）',
      code: 'SOIL_SENSITIVE_TARGET',
      type: 'text'
    },
  ]
  // 风险筛查分数（地下水二级，三级分数）列表对应字段
  public waterList = [
    {
      label: '环境风险管理水平',
      code: 'SOIL_LEAKAGE_RISK',
      type: 'text'
    },
    {
      label: '废水环境风险（Tw）',
      code: 'SOIL_WASTE_WATER_RISK',
      type: 'text'
    },
    {
      label: '固体废物环境风险（Tsw）',
      code: 'SOIL_SOLID_WASTE_RISK',
      type: 'text'
    },
    {
      label: '废气环境风险（Tg）',
      code: 'SOIL_TG',
      type: 'text'
    },
    {
      label: '固体废物环境风险（Tsw）',
      code: 'SOIL_TSW',
      type: 'text'
    },
    {
      label: '企业环境违法行为次数',
      code: 'SOIL_ILLEGAL_NUMBER',
      type: 'text'
    },
    {
      label: '地块污染现状',
      code: 'SOIL_POLLUTION_STATUS',
      type: 'text'
    },
    {
      label: '地下水可能受污染程度',
      code: 'SOIL_KEY_AREA',
      type: 'text'
    },
    {
      label: '生产经营活动时间（tp）',
      code: 'SOIL_OPERATING_TIME',
      type: 'text'
    },
    {
      label: '污染物对人体健康的危害效应（T）',
      code: 'SOIL_HEALTH_HAZARD',
      type: 'text'
    },
    {
      label: '污染物中是否含持久性有机污染物',
      code: 'SOIL_ORGANIC_POLLUTANTS',
      type: 'text'
    },
    {
      label: '地下水污染物迁移途径',
      code: 'SOIL_MOVE_ROUTE',
      type: 'text'
    },
    {
      label: '地下防渗措施',
      code: 'SOIL_SEEPAGE_MEASURE',
      type: 'text'
    },
    {
      label: '地下水埋深（GD）',
      code: 'DEPTH',
      type: 'text'
    },
    {
      label: '包气带土壤渗透性',
      code: 'SOIL_VADOSE_ZONE',
      type: 'text'
    },
    {
      label: '饱和带土壤渗透性',
      code: 'SOIL_PERMEABILITY',
      type: 'text'
    },
    {
      label: '污染物挥发性',
      code: 'SOIL_POLLUTANTS_VOLATILITY',
      type: 'text'
    },
    {
      label: '污染物迁移性（M）',
      code: 'SOIL_POLLUTANTS_MOVE',
      type: 'text'
    },
    {
      label: '年降水量（P）',
      code: 'SOIL_RAINFALL',
      type: 'text'
    },
    {
      label: '地下水污染受体',
      code: 'SOIL_CONTAMINATION',
      type: 'text'
    },
    {
      label: '地下水及邻近区域地表水用途',
      code: 'WATER_SURFACE_WATER_USE',
      type: 'text'
    },
    {
      label: '地块周边500米内的人口数量（R）',
      code: 'SOIL_POPULATION_NUMBER',
      type: 'text'
    },
    {
      label: '重点区域离最近饮用水井或地表水体的距离（Dgw）',
      code: 'SOIL_SENSITIVE_TARGET',
      type: 'text'
    },
  ]
  // 风险筛查分数（一级分数）详情
  public firstData = {};
  // 风险筛查分数（土壤二级，三级分数）详细信息
  public soliData = {};
  // 风险筛查分数（地下水二级，三级分数）
  public waterData = {};
  // 企业code
  private id = '';
  constructor(
    private keyIndustryService: KeyIndustryService, // 重点行业企业service
    private activatedRoute: ActivatedRoute, // 路由参数
  ) { }

  ngOnInit() {
    // 获取主键id
    this.id = this.getRouterParams('id');
    // 获取一级指标得分和风险关注度划分
    this.getRiskScreeningNumberFirst();
    // 获取土壤二级、三级指标得分
    this.getRiskScreeningNumberSoli();
    // 获取地下水二级、三级指标得分
    this.getRiskScreeningNumberGroundWater();

  }

  /**
   * 获取风险筛查分数（一级分数）
   */
  getRiskScreeningNumberFirst(): void {
    // 接口请求参数
    const params = {
      ENTERID: this.id, // 企业code
    };
    // 接口请求
    this.keyIndustryService.getRiskScreeningNumberFirst(params, false, res => {
      // 风险筛查一级分数
      this.firstData = res.data;
    })
  }

  /**
   * 获取风险筛查分数（土壤二级，三级分数）
   */
  getRiskScreeningNumberSoli(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    };
    // 接口请求
    this.keyIndustryService.getRiskScreeningNumberSoli(params, false, res => {
      // 土壤分数
      this.soliData = res.data;
    })
  }

  /**
   * 获取风险筛查分数（地下水二级，三级分数）
   */
  getRiskScreeningNumberGroundWater(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    };
    // 接口请求
    this.keyIndustryService.getRiskScreeningNumberGroundWater(params, false, res => {
      // 地下水分数
      this.waterData = res.data;
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
