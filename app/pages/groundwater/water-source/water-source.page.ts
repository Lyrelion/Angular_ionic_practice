import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GroundWaterService} from '../../../services/business/ground-water/ground-water.service';

@Component({
  selector: 'app-water-source',
  templateUrl: './water-source.page.html',
  styleUrls: ['./water-source.page.scss'],
})
export class WaterSourcePage implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private groundWaterService: GroundWaterService
  ) { }
  // 详细信息的中文名称和对应的code
  public landUserList = [
    {
      label: '水源名称',
      code: 'SOURCE_NAME',
      type: 'text'
    },
    {
      label: '行政区域',
      code: 'REGION_NAME',
      type: 'text'
    },
    {
      label: '地址',
      code: 'ADDRESS',
      type: 'text'
    },
    {
      label: '中心纬度',
      code: 'LONGITUDE',
      type: 'text'
    },
    {
      label: '中心经度',
      code: 'LATITUDE',
      type: 'text'
    },{
      label: '服务人口（万人）',
      code: 'SERVICE_POPULATION',
      type: 'text'
    },
    {
      label: '供水规模（千吨/日）',
      code: 'WATER_SCALE',
      type: 'text'
    },
    {
      label: '水源级别',
      code: 'HEADWATERS_LEVEL',
      type: 'img' // 内容是图片
    },
    {
      label: '水源规模',
      code: 'HEADWATERS_SCALE',
      type: 'text'
    },
    {
      label: '是否完成保护区划定',
      code: 'IS_DEMARCATING',
      type: 'text'
    },
    {
      label: '一级保护区面积（m2）',
      code: 'FIRST_AREA',
      type: 'text'
    },
    {
      label: '二级保护区面积（m2）',
      code: 'SECOND_AREA',
      type: 'text'
    },
    {
      label: '准保护区面积（m2）',
      code: 'PREPARE_AREA',
      type: 'text'
    },
    {
      label: '含水层类型',
      code: 'AQUIFER_TYPE',
      type: 'text'
    },
    {
      label: '地下水力类型',
      code: 'UNDERGROUND_WATER_TYPE',
      type: 'text'
    },
    {
      label: '主要补给途径和来源',
      code: 'SUPPLY_WAY',
      type: 'text'
    },
    {
      label: '目的含水层水位埋深',
      code: 'BURIAL_DEPTH',
      type: 'text'
    },
    {
      label: '保护区内环境状况',
      code: 'ENVIRONMENTAL_CONDITIONS',
      type: 'text'
    },
    {
      label: '年降水量（mm）',
      code: 'AMOUNT_OF_PRECIPITATION',
      type: 'text'
    },
    {
      label: '监测井数量（个）',
      code: 'num',
      type: 'text'
    }
  ];

  // 監測井信息
  public monitorInfoName = [
    {
      label: '站点（监测井）名称',
      code: 'MONITORING_NAME',
      type: 'text'
    },
    {
      label: '监测井编号',
      code: 'MONITORING_NUMBER',
      type: 'text'
    },
    {
      label: '地下水监测井位置（纬度）',
      code: 'MONITORING_LATITUDE',
      type: 'text'
    },
    {
      label: '地下水监测井位置（经度）',
      code: 'MONITORING_LONGITUDE',
      type: 'text'
    },
    {
      label: '与水源位置关系',
      code: 'POSITIONAL_RELATIONSHIP',
      type: 'text'
    },{
      label: '监测井级别',
      code: 'MONITORING_LEVEL',
      type: 'text'
    },
    {
      label: '监测井类型',
      code: 'MONITORING_TYPE',
      type: 'text'
    },
    {
      label: '监测井性质',
      code: 'MONITORING_NATURE',
      type: 'img' // 内容是图片
    },
    {
      label: '所处水文地质单元',
      code: 'HEADWATERS_SCALE',
      type: 'text'
    },
    {
      label: '地下水监测井结构类型',
      code: 'MONITORING_STRUCTURE_TYPE',
      type: 'text'
    },
    {
      label: '是否为国家地下水监测工程点位',
      code: 'IS_MONITORING_POINT',
      type: 'text'
    },
    {
      label: '监测井状况',
      code: 'MONITORING_STATUS',
      type: 'text'
    },
    {
      label: '成井深度(m)',
      code: 'MONITORING_DEPTH',
      type: 'text'
    },
    {
      label: '成井时间',
      code: 'BUILD_TIME',
      type: 'text'
    },
    {
      label: '保护设施',
      code: 'PROTECT_FACILITIES',
      type: 'text'
    },
    {
      label: '管理机构',
      code: 'SUPPLY_WAY',
      type: 'text'
    },
    {
      label: '是否具备监测条件',
      code: 'BURIAL_DEPTH',
      type: 'text'
    },
    {
      label: '监测手段',
      code: 'MONITORING_METHOD',
      type: 'text'
    },
    {
      label: '监测指标数量（个）',
      code: 'AMOUNT_OF_PRECIPITATION',
      type: 'text'
    },
    {
      label: '监测频次',
      code: 'MONITORING_FREQUENCY',
      type: 'text'
    },
    {
      label: '监测机构',
      code: 'REGULATORY_AGENCY',
      type: 'text'
    },
    {
      label: '执行标准',
      code: 'num',
      type: 'text'
    },
    {
      label: '考核点位情况',
      code: 'num',
      type: 'text'
    }
  ];

  // 基本信息
  public basicInfoName = [
    {
      label: '站点名称',
      code: 'SITE_NAME',
      type: 'text'
    },
    {
      label: '编号',
      code: 'SITE_CODE',
      type: 'text'
    },
    {
      label: '行政区域',
      code: 'REGION_NAME',
      type: 'text'
    },
    {
      label: '详细地址',
      code: 'ADDRESS',
      type: 'text'
    },
    {
      label: '地理坐标（经度）',
      code: 'LONGITUDE',
      type: 'text'
    },{
      label: '地理坐标（纬度）',
      code: 'LATITUDE',
      type: 'text'
    },
    {
      label: '所属部门',
      code: 'DEPARTMENT',
      type: 'text'
    },
    {
      label: '是否为国家地下水监测工程点位',
      code: 'IS_MONITORING_POINT',
      type: 'img' // 内容是图片
    },
    {
      label: '水文地质单元名称',
      code: 'UNIT_NAME',
      type: 'text'
    },
    {
      label: '水文地质单元类型',
      code: 'UNIT_TYPE',
      type: 'text'
    },
    {
      label: '含水层类型',
      code: 'AQUIFER_TYPE',
      type: 'text'
    },
    {
      label: '主要补给途径（来源）',
      code: 'SOURCE_SUPPLY',
      type: 'text'
    },
    {
      label: '地下水力类型',
      code: 'REGIONAL_TYPE',
      type: 'text'
    },
    {
      label: '成井深度',
      code: 'REGIONAL_DEPTH',
      type: 'text'
    },
    {
      label: '成井时间',
      code: 'BUILD_TIME',
      type: 'text'
    },
    {
      label: '监测井级别',
      code: 'MONITORING_LEVEL',
      type: 'text'
    },
    {
      label: '监测井性质',
      code: 'MONITORING_NATURE',
      type: 'text'
    },
    {
      label: '监测手段',
      code: 'MONITORING_METHOD',
      type: 'text'
    },
    {
      label: '钻井结构类型',
      code: 'MONITORING_STRUCTURE_TYPE',
      type: 'text'
    },
    {
      label: '监测井结构',
      code: 'MONITORING_TYPE',
      type: 'text'
    },
    {
      label: '监测井类型',
      code: 'REGULATORY_AGENCY',
      type: 'text'
    },
    {
      label: '监测井(点)周边环境状况',
      code: 'MONITORING_CONDITION',
      type: 'text'
    },
    {
      label: '监测井状况',
      code: 'MONITORING_STATUS',
      type: 'text'
    },
    {
      label: '监测机构',
      code: 'MONITORING_AGENCY',
      type: 'text'
    },
    {
      label: '保护设施',
      code: 'PROTECT_FACILITIES',
      type: 'text'
    },
    {
      label: '监测频次',
      code: 'MONITORING_FREQUENCY',
      type: 'text'
    },
    {
      label: '是否具备监测条件',
      code: 'IS_HAVEORNO',
      type: 'text'
    },
    {
      label: '考核点位情况',
      code: 'REASON',
      type: 'text'
    }
  ];

  // 污染源信息
  public polluInfoName = [
    {
      label: '关联污染源/园区名称',
      code: 'POLLUTION_SOURCE_NAME',
      type: 'text'
    },
    {
      label: '行政区域',
      code: 'REGION_NAME',
      type: 'text'
    },
    {
      label: '详细地址',
      code: 'ADDRESS',
      type: 'text'
    },
    {
      label: '中心纬度',
      code: 'LATITUDE',
      type: 'text'
    },
    {
      label: '中心经度',
      code: 'LONGITUDE',
      type: 'text'
    },{
      label: '污染源/园区占地面积（m2）',
      code: 'FLOOR_SPACE',
      type: 'text'
    },
    {
      label: '园区级别',
      code: 'INFORMATION_LEVEL',
      type: 'text'
    },
    {
      label: '成立时间',
      code: 'ESTABLISHMENT_TIME',
      type: 'img' // 内容是图片
    },
    {
      label: '行业类别（主要）',
      code: 'INDUSTRY_CATEGORY',
      type: 'text'
    },
    {
      label: '地下水重点污染企业数量',
      code: 'ENTERPRISE_QUANTITY',
      type: 'text'
    },
    {
      label: '水文地质单元名称',
      code: 'UNIT_NAME',
      type: 'text'
    },
    {
      label: '地下水含水层类型',
      code: 'AQUIFER_TYPE',
      type: 'text'
    },
    {
      label: '地下水埋深区间（m）',
      code: 'BURIED_DEPTH_INTERVAL',
      type: 'text'
    },
    {
      label: '所在区域地下水用途',
      code: 'GROUNDWATER_USE',
      type: 'text'
    },
    {
      label: '园区及周边地下水监测井数量',
      code: 'MONITORING_QUANTITY',
      type: 'text'
    },
    {
      label: '主要补给途径(来源)',
      code: 'SOURCE_SUPPLY',
      type: 'text'
    }
  ];

  // 污染源--监测井信息
  public polluMonName = [
    {
      label: '站点（监测井）名称',
      code: 'MONITORING_NAME',
      type: 'text'
    },
    {
      label: '监测井编号',
      code: 'MONITORING_NUMBER',
      type: 'text'
    },
    {
      label: '地下水监测井位置（纬度）',
      code: 'MONITORING_LATITUDE',
      type: 'text'
    },
    {
      label: '地下水监测井位置（经度）',
      code: 'MONITORING_LONGITUDE',
      type: 'text'
    },
    {
      label: '是否为国家地下水监测工程点位',
      code: 'IS_MONITORING_POINT',
      type: 'text'
    },{
      label: '与园区/污染源位置关系',
      code: 'POSITIONAL_RELATIONSHIP',
      type: 'text'
    },
    {
      label: '监测井性质',
      code: 'MONITORING_NATURE',
      type: 'text'
    },
    {
      label: '监测井级别',
      code: 'MONITORING_LEVEL',
      type: 'img' // 内容是图片
    },
    {
      label: '监测井类型',
      code: 'MONITORING_TYPE',
      type: 'text'
    },
    {
      label: '监测井结构类型',
      code: 'MONITORING_STRUCTURE_TYPE',
      type: 'text'
    },
    {
      label: '监测井结构',
      code: 'MONITORING_STRUCTURE',
      type: 'text'
    },
    {
      label: '监测井状况',
      code: 'MONITORING_STATUS',
      type: 'text'
    },
    {
      label: '成井深度(m)',
      code: 'MONITORING_DEPTH',
      type: 'text'
    },
    {
      label: '成井时间',
      code: 'GROUNDWATER_USE',
      type: 'text'
    },
    {
      label: '监测手段',
      code: 'MONITORING_METHOD',
      type: 'text'
    },
    {
      label: '保护设施',
      code: 'PROTECT_FACILITIES',
      type: 'text'
    },
    {
      label: '监测井(点)周边环境状况',
      code: 'MONITORING_CONDITION',
      type: 'text'
    },
    {
      label: '监测频次',
      code: 'MONITORING_FREQUENCY',
      type: 'text'
    },
    {
      label: '管理机构',
      code: 'REGULATORY_AGENCY',
      type: 'text'
    },
    {
      label: '是否具备监测条件',
      code: 'IS_HAVEORNO',
      type: 'text'
    },
    {
      label: '考核点位情况',
      code: 'REASON',
      type: 'text'
    }
  ];
  // 详细信息内容
  public pageData = {
    // ACQUISITIONDATE: '2020-10-27',
    // CONTACT: '1',
    // CREDIT_CODE: '92120116MA06AFM830',
    // ENTERNAME: '自然人，政府）',
    // ISCURRENT: '1',
    // LEGALPERSON: '5',
    // PHONE: ['assets/img/jb.png','assets/img/jb.png','assets/img/jb.png','assets/img/jb.png',],
    // PROPORTION: '5',
    // RIGHTPERSONTYPE: '3',
    // RIGHTPERSONTYPE_CN: '政府',
  }

  // 监测井信息val值
  public pageDataMon = {};
  // 详情页标题
  public title: '';

  /**
   * 跳转到现场监测列表页面
   */
  goSuperList() {
    this.router.navigate(['groundwater/water-source/site-super'])
  }

  ngOnInit() {
    // 接收列表页传过来的参数code和title
    this.activatedRoute.queryParams.subscribe((data: Params) => {
      // 判断一下传过来的code,根据code不同调用相应接口
      if(true) {
        this.getDetailFocus('focus', true);
      }
      // if(true) { 
      //   this.getDetailPolluSource('pollu', true);
      // }
      // if(true) { 
      //   this.getDetailPolluSource('pollu', true);
      // }
    })
  }

  /**
   * 获取地下水详情--- 集中式地下水型饮用水源检测
   * @param code 业务code
   * @param showLoading 是否显示加载icon
   */
  getDetailFocus(code, showLoading) {
    const params = {
      BASIC_ID: code
    };
    this.groundWaterService.getDetailFocus(params, showLoading, (res)=>{
      console.log(res);
      if(res.data && res.data.length>0) {
        console.log(res.data);
        this.pageData = res.data;
        this.pageDataMon = res.data.dataList[0];
      }
    });
  }

  /**
   * 获取地下水详情--- 污染源地下水详情
   * @param code 业务code
   * @param showLoading 是否显示加载icon
   */
  getDetailPolluSource(code, showLoading) {
    const params = {
      BASIC_ID: code
    };
    this.groundWaterService.getDetailFocus(params, showLoading, (res)=>{
      console.log(res);
    });
  }

  /**
   * 获取地下水详情--- 污染源地下水详情
   * @param code 业务code
   * @param showLoading 是否显示加载icon
   */
  getDetailArea(code, showLoading) {
    const params = {
      BASIC_ID: code
    };
    this.groundWaterService.getDetailFocus(params, showLoading, (res)=>{
      console.log(res);
    });
  }

}
