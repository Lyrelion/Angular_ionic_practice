import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeyIndustryService } from 'src/app/services/business/key-industry/key-industry.service';

/**
 * 布点信息页面
 */
@Component({
  selector: 'app-samplepoint-info',
  templateUrl: './samplepoint-info.page.html',
  styleUrls: ['./samplepoint-info.page.scss'],
})
export class SamplepointInfoPage implements OnInit {
  // 疑似污染区域页面名称和接口返回字段对应关系
  public pollutionList = [
    {
      label: '编号',
      code: 'suspectedPollutionCode',
      type: 'text'
    },
    {
      label: '位置',
      code: 'position',
      type: 'text'
    },
    {
      label: '经度',
      code: 'longitude',
      type: 'text'
    },
    {
      label: '纬度',
      code: 'latitude',
      type: 'text'
    },
    {
      label: '点位类型',
      code: 'pointType',
      type: 'text'
    },
    {
      label: '所属布点区域',
      code: 'exit2',
      type: 'text'
    },
    {
      label: '计划钻探深度（米）',
      code: 'plannedDrillingDepth',
      type: 'text'
    },
    {
      label: '测试项目',
      code: 'testItems',
      type: 'text'
    },
  ];
  // 采样点位页面名称和接口返回字段对应关系
  public pointList = [
    {
      label: '编号',
      code: 'distributionAreaCode',
      type: 'text'
    },
    {
      label: '位置',
      code: 'position',
      type: 'text'
    },
    {
      label: '经度',
      code: 'longitude',
      type: 'text'
    },
    {
      label: '纬度',
      code: 'latitude',
      type: 'text'
    },
    {
      label: '点位类型',
      code: 'pointType',
      type: 'text'
    },
    {
      label: '所属布点区域',
      code: 'exit2',
      type: 'text'
    },
    {
      label: '计划钻探深度（米）',
      code: 'plannedDrillingDepth',
      type: 'text'
    },
    {
      label: '测试项目',
      code: 'testItems',
      type: 'text'
    },
  ];
  // 审核详情页面名称和接口返回字段对应关系
  public detailList = [
    {
      label: '审核人',
      code: 'HANDLEUSERNAME',
      type: 'text'
    },
    {
      label: '审核时间',
      code: 'HANDLETIME',
      type: 'text'
    },
    {
      label: '审核意见',
      code: 'SUGGEST',
      type: 'text'
    },
    {
      label: '审核类型',
      code: 'CODE_OPERATETYPE',
      type: 'text'
    },
    {
      label: '审核状态',
      code: 'CODE_FLOWSTATUS',
      type: 'text'
    },
    {
      label: '审核阶段',
      code: 'STAGE',
      type: 'text'
    },
    {
      label: '审核附件',
      code: 'FILESID',
      type: 'text'
    },
  ];
  // 疑似污染区域详情
  public pollutionData = [];
  // 采样点位详情
  public pointData = [];
  // 审核详情详情
  public detailData = [];
  // 企业主键id
  private id = '';
  constructor(
    private keyIndustryService: KeyIndustryService, // 重点行业企业service
    private activatedRoute: ActivatedRoute, // 路由参数
  ) { }

  ngOnInit() {
    // 获取企业主键id
    this.id = this.getRouterParams('id');
    // 获取疑似污染区域信息
    this.getDistributionInfo();
    // 获取布点信息和审核详情
    this.getSamplingInfo();
  }

  /**
   * 获取疑似污染区域信息
   */
  getDistributionInfo(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    };
    // 接口请求
    this.keyIndustryService.getDistributionInfo(params, true, res => {
      // 疑似污染区域信息
      this.pollutionData = res.data;
    })
  }

  /**
   * 获取布点信息和审核详情
   */
  getSamplingInfo(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    };
    // 接口请求
    this.keyIndustryService.getSamplingInfo(params, true, res => {
      // 布点信息和审核详情信息，数组第一项为布点信息，第二项为审核详情信息
      this.pointData = res.data;
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
