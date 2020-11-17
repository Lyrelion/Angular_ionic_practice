import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeyIndustryService } from 'src/app/services/business/key-industry/key-industry.service';

/**
 * 地块基本信息页面
 */
@Component({
  selector: 'app-land-info',
  templateUrl: './land-info.page.html',
  styleUrls: ['./land-info.page.scss'],
})
export class LandInfoPage implements OnInit {
  // 详细信息的中文名称和对应的code，code为接口请求的字段名
  public landUserList = [
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
      label: '单位名称',
      code: 'UNITNAME',
      type: 'text'
    },
    {
      label: '统一社会信用代码',
      code: 'CREDITCODE',
      type: 'text'
    },
    {
      label: '法定代表人',
      code: 'REPRESENTATIVE',
      type: 'text'
    },{
      label: '计划单位所在地',
      code: 'PLANAREANAME',
      type: 'text'
    },
    {
      label: '实际单位所在地',
      code: 'REGIONNAME',
      type: 'text'
    },
    {
      label: '计划正门经度',
      code: 'PLANENLONGITUDE',
      type: 'text'
    },
    {
      label: '计划正门纬度',
      code: 'PLANENLATITUDE',
      type: 'text'
    },
    {
      label: '实际正门经度',
      code: 'ENLONGITUDE',
      type: 'text'
    },
    {
      label: '实际正门纬度',
      code: 'ENLATITUDE',
      type: 'text'
    },
    {
      label: '地块占地面积(m2)',
      code: 'LANDAREA',
      type: 'text'
    },
    {
      label: '联系人姓名',
      code: 'RELATIONNAME',
      type: 'text'
    },
    {
      label: '联系电话',
      code: 'PHONENO',
      type: 'text'
    },
    {
      label: '行业类别',
      code: 'CLASSIFYNAME',
      type: 'text'
    },
    {
      label: '登记注册类型',
      code: 'REGISTERNAME',
      type: 'text'
    },
    {
      label: '企业规模',
      code: 'CODE_SCALE',
      type: 'text'
    },
    {
      label: '成立时间',
      code: 'ESTABLISH_DATE',
      type: 'text'
    },
    {
      label: '最新改扩建时间',
      code: 'MAXEXTENSION_DATE',
      type: 'text'
    },
    {
      label: '地块是否位于工业园区或集聚区',
      code: 'CODDE_ISINDUSTRIALAREA',
      type: 'text'
    },
    {
      label: '调查单位',
      code: 'LOOKUNITNAME',
      type: 'text'
    },
    {
      label: '调查小组',
      code: 'LOOKGROUPNAME',
      type: 'text'
    },
  ];
  // 地块基本信息内容
  public pageData = {};
  // 主键id
  private id = '';
  constructor(
    private keyIndustryService: KeyIndustryService, // 重点行业企业service
    private activatedRoute: ActivatedRoute, // 路由参数
  ) { }

  ngOnInit() {
    // 获取主键id
    this.id = this.getRouterParams('id');
    // 获取地块基本信息
    this.getLandInfo();
  }

  /**
   * 获取地块信息详情
   */
  getLandInfo(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    }
    // 请求接口
    this.keyIndustryService.getLandInfo(params, true, res => {
      // 获取接口信息
      this.pageData = res.data;
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
