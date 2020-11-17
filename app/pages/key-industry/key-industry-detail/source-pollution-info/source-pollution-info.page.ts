import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeyIndustryService } from 'src/app/services/business/key-industry/key-industry.service';

/**
 * 污染源信息页面
 */
@Component({
  selector: 'app-source-pollution-info',
  templateUrl: './source-pollution-info.page.html',
  styleUrls: ['./source-pollution-info.page.scss'],
})
export class SourcePollutionInfoPage implements OnInit {
  // 基本信息页面名称和接口请求返回字段对应关系
  public baseInfoList = [
    {
      label: '企业地块内部存在以下设施或区域',
      code: 'BAS001',
      type: 'text'
    },
    {
      label: '平面布置图',
      code: 'BAS002',
      type: 'text'
    },
    {
      label: '主要产品清单',
      code: 'BAS003',
      type: 'text'
    },
    {
      label: '主要原辅材料清单',
      code: 'BAS004',
      type: 'text'
    },
    {
      label: '主要生产工艺流程图',
      code: 'BAS005',
      type: 'text'
    },
  ];
  // 生产信息页面名称和接口请求返回字段对应关系
  public productionInfoList = [
    {
      label: '企业是否开展过清洁生产审核',
      code: 'SC001',
      type: 'text'
    },
    {
      label: '企业是否开展过清洁生产审核',
      code: 'SC002',
      type: 'text'
    },
    {
      label: '来源',
      code: 'SC003',
      type: 'text'
    },
  ]
  // 危险化学品页面名称和接口请求返回字段对应关系
  public chemicalsList = {
    title: ['危险化学品名称', '产量或使用量（吨）'],
    name: 'POLLUTENAME',
    num: 'POLLUTEVALUE'
  }
  // 废气页面名称和接口请求返回字段对应关系
  public wastegasList = [
    {
      label: '是否排放废气',
      code: 'FQ001',
      type: 'text'
    },
    {
      label: '是否有废气治理设施',
      code: 'FQ003',
      type: 'text'
    },
    {
      label: '是否有废气在线监测装置',
      code: 'FQ004',
      type: 'text'
    },
    {
      label: '来源',
      code: 'FQ002',
      type: 'text'
    },
  ]
  // 废气污染物页面名称和接口请求返回字段对应关系
  public wastegasThingList = {
    title: ['序号', '废气污染物名称'], // 表头名称
    name: 'name',
    num: 'value'
  }
  // 废水污染物页面名称和接口请求返回字段对应关系
  public wasteWaterList = [
    {
      label: '是否产生工业废水',
      code: 'FQ005',
      type: 'text'
    },
    {
      label: '厂区内是否有废水治理设施',
      code: 'FEISHUI',
      type: 'text'
    },
    {
      label: '是否有废水在线监测装置',
      code: 'JIANCHE',
      type: 'text'
    },
    {
      label: '来源',
      code: 'FS001',
      type: 'text'
    },
  ]
  // 废水污染物页面名称和接口请求返回字段对应关系
  public wasteWaterThingList = {
    title: ['序号', '废水污染物名称'], // 表头名称
    name: 'name',
    num: 'value'
  }
  // 固体废物信息页面名称和接口请求返回字段对应关系
  public wasteSolidList = [
    {
      label: '是否产生一般工业固体废物',
      code: 'GF001',
      type: 'text'
    },
    {
      label: '厂区内是否有一般工业固废贮存区',
      code: 'GF002',
      type: 'text'
    },
    {
      label: '一般工业固废年贮存量（吨）',
      code: 'GF003',
      type: 'text'
    },
    {
      label: '一般工业固废贮存区地面硬化、顶棚覆盖、围堰围墙、雨水收集及导排等设施是否具备',
      code: 'GF004',
      type: 'text'
    },
    {
      label: '是否产生危险废物',
      code: 'WF001',
      type: 'text'
    },
    {
      label: '危险废物年产生量（吨）',
      code: 'WF002',
      type: 'text'
    },
    {
      label: '危险废物贮存场所“三防”（防渗漏、防雨淋、防流失）措施是否齐全',
      code: 'WF003',
      type: 'text'
    },
    {
      label: '该企业产生的危险废物是否存在自行利用处置',
      code: 'WF004',
      type: 'text'
    },
  ];
  // 地块综合信息页面名称和接口请求返回字段对应关系
  public allLandList = [
    {
      label: '生产区面积（㎡)',
      code: 'DKZHQK001',
      type: 'text'
    },
    {
      label: '储存区面积（㎡）',
      code: 'DKZHQK002',
      type: 'text'
    },
    {
      label: '废水治理区面积（㎡）',
      code: 'DKZHQK003',
      type: 'text'
    },
    {
      label: '固废贮存或处置区面积（㎡）',
      code: 'DKZHQK004',
      type: 'text'
    },
    {
      label: '重点区域总面积（㎡）',
      code: 'DKZHQK005',
      type: 'text'
    },
    {
      label: '重点区域地表（除绿化带外）是否存在未硬化地面',
      code: 'DKZHQK006',
      type: 'text'
    },
    {
      label: '重点区域地表（除绿化带外）是否存在未硬化地面',
      code: 'DKZHQK007',
      type: 'text'
    },
    {
      label: '厂区内是否存在无硬化或防渗的工业废水排放沟渠、渗坑、水塘',
      code: 'DKZHQK008',
      type: 'text'
    },
    {
      label: '厂区内是否有产品、原辅材料、油品的地下储罐或输送管线',
      code: 'DKZHQK009',
      type: 'text'
    },
    {
      label: '厂区内是否有工业废水的地下输送管线或储存池',
      code: 'DKZHQK010',
      type: 'text'
    },
    {
      label: '厂区内地下储罐、管线、储水池等设施是否有防渗措施',
      code: 'DKZHQK011',
      type: 'text'
    },
    {
      label: '该企业是否发生过化学品泄漏或环境污染事故',
      code: 'DKZHQK012',
      type: 'text'
    },
    {
      label: '该企业近3年内是否曾因废气 、废水、固体废物造成的环境问题被举报或投诉',
      code: 'DKZHQK013',
      type: 'text'
    },
    {
      label: '该企业近3年内是否有废气 、废水、固体废物相关的环境违法行为',
      code: 'DKZHQK014',
      type: 'text'
    },
    {
      label: '该地块土壤是否存在以下情况',
      code: 'DKZHQK015',
      type: 'text'
    },
    {
      label: '该地块地下水是否存在以下情况',
      code: 'DKZHQK016',
      type: 'text'
    },
    {
      label: '地块是否存在特征污染物',
      code: 'BAS006',
      type: 'text'
    },
  ]
  // 特征污染物页面名称和接口请求返回字段对应关系
  public pollutionList = {
    title: ['序号', '特征污染物名称'],
    name: 'name',
    num: 'value'
  }
  // 详细信息内容
  public baseInfoData = {};
  // 危险化学品详细信息
  public chemicalsData = [];
  // 废气
  public wastegasInfo = {};
  // 废气污染物
  public wastegasThing = [];
  // 废水
  public wasteWaterInfo = {};
  // 废水污染物
  public wasteWaterThing = [];
  // 固体废物信息
  public wasteSolidData = {};
  // 地块综合详详细信息
  public allLandData = {};
  // 特征污染物
  public pollutionData = [];
  // 企业主键id
  private id = '';
  constructor(
    private keyIndustryService: KeyIndustryService, // 重点行业企业service
    private activatedRoute: ActivatedRoute, // 路由参数
  ) { }

  ngOnInit() {
    // 获取页面主键id
    this.id = this.getRouterParams('id');
    // 基本信息和详细信息
    this.getBaseInfoAndProductInfo();
    // 危险化学品
    this.getChemicalsInfo();
    // 废气
    this.getWastegas();
    // 废水
    this.getWasteWater();
    // 固体废物详细信息
    this.getWasteSolid();
    // 地块综合信息
    this.getSourcePollutionOfLandInfo();

  }

  /**
   * 获取污染源信息的基本信息
   */
  getBaseInfoAndProductInfo(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    };
    // 接口请求
    this.keyIndustryService.getBaseInfoAndProductInfo(params, false, res => {
      // 获取基本信息
      this.baseInfoData = res.data
    })
  }

  /**
   * 获取危险化学品信息
   */
  getChemicalsInfo(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    }
    // 请求接口
    this.keyIndustryService.getChemicalsInfo(params, false, res => {
      // 获取化学危险品信息
      this.chemicalsData = res.data;
    })
  }

  /**
   * 获取废气相关信息
   */
  getWastegas(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    }
    // 请求接口
    this.keyIndustryService.getWastegas(params, false, res => {
      // 废气详细信息
      this.wastegasInfo = res.data;
      // 废气污染物,将字符串转化为数组
      if ( res.data.POLLUTENAME) {
        const temp = res.data.POLLUTENAME.split(',');
        temp.forEach((element,i) => {
          this.wastegasThing.push({name: i, value: element})
        });
      }
    })
  }

  /**
   * 获取废水相关信息
   */
  getWasteWater(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    }
    // 请求接口
    this.keyIndustryService.getWasteWater(params, false, res => {
      // 废水详细信息
      this.wasteWaterInfo = res.data;
      // 废水污染物,将字符串转化为数组
      if ( res.data.POLLUTENAME) {
        const temp = res.data.POLLUTENAME.split(',');
        temp.forEach((element,i) => {
          this.wasteWaterThing.push({name: i, value: element})
        });
      }
    })
  }

  /**
   * 获取固体废物详细信息
   */
  getWasteSolid(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    }
    // 请求接口
    this.keyIndustryService.getWasteSolid(params, false, res => {
      // 固体废物详细信息
      this.wasteSolidData = res.data;
    })
  }

  /**
   * 获取地块综合信息
   */
  getSourcePollutionOfLandInfo(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    }
    // 请求接口
    this.keyIndustryService.getSourcePollutionOfLandInfo(params, false, res => {
      // 地块综合详细信息
      this.allLandData = res.data;
      // 获取特征污染物,将字符串转化为数组
      if ( res.data.POLLUTENAME) {
        const temp = res.data.POLLUTENAME.split(',');
        temp.forEach((element,i) => {
          this.pollutionData.push({name: i, value: element})
        });
      }
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
