import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeyIndustryService } from 'src/app/services/business/key-industry/key-industry.service';

/**
 * 空间信息及资料图片页面
 */
@Component({
  selector: 'app-space-files',
  templateUrl: './space-files.page.html',
  styleUrls: ['./space-files.page.scss'],
})
export class SpaceFilesPage implements OnInit {
  // 基本信息页面名称和接口请求返回字段对应关系
  public baseInfoList = [
    {
      label: '正门图片',
      code: 'ZMFILEIDS',
      type: 'img'
    },
    {
      label: '污染痕迹照片',
      code: 'WRHJFILIDS',
      type: 'img'
    },
    {
      label: '表信息说明照片',
      code: 'TBXXSMFILIDS',
      type: 'img'
    },
    {
      label: '填表单位承诺书照片',
      code: 'TBDWCNSFILIDS',
      type: 'img'
    },
    {
      label: '重点区域照片',
      code: 'ZDQYFILIDS',
      type: 'img'
    },
    {
      label: '地块使用权人承诺书照片',
      code: 'DKSYQRCNSFILIDS',
      type: 'img'
    },
    {
      label: '人员访谈表照片',
      code: 'RYFTBFILIDS',
      type: 'img'
    },
  ];
  // 页面信息
  public baseData = {
    ZMFILEIDS: [], // 正门图片
    WRHJFILIDS: [], // 污染痕迹照片
    TBXXSMFILIDS: [], // 表信息说明照片
    TBDWCNSFILIDS: [], // 填表单位承诺书照片
    ZDQYFILIDS: [], // 重点区域照片
    DKSYQRCNSFILIDS: [], // 地块使用权人承诺书照片
    RYFTBFILIDS: [], // 人员访谈表照片
  };
  // 企业主键id
  private id = '';
  constructor(
    private keyIndustryService: KeyIndustryService, // 重点行业企业service
    private activatedRoute: ActivatedRoute, // 路由参数
  ) { }

  ngOnInit() {
    // 获取企业主键id
    this.id = this.getRouterParams('id');
    // 获取空间信息及资料图片
    this.getSpaceFiles();
  }

  /**
   * 获取空间信息及资料图片
   */
  getSpaceFiles(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    };
    // 请求接口
    this.keyIndustryService.getSpaceFiles(params, true, res => {
      // 将获取到的图片字符串都转化为数组
      this.baseData.ZMFILEIDS = res.data.ZMFILEIDS.split(',');
      this.baseData.WRHJFILIDS = res.data.WRHJFILIDS.split(',');
      this.baseData.TBXXSMFILIDS = res.data.TBXXSMFILIDS.split(',');
      this.baseData.TBDWCNSFILIDS = res.data.TBDWCNSFILIDS.split(',');
      this.baseData.ZDQYFILIDS = res.data.ZDQYFILIDS.split(',');
      this.baseData.DKSYQRCNSFILIDS = res.data.DKSYQRCNSFILIDS.split(',');
      this.baseData.RYFTBFILIDS = res.data.RYFTBFILIDS.split(',');
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
