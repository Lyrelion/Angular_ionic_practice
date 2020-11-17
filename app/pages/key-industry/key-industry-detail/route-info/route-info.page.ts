import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeyIndustryService } from 'src/app/services/business/key-industry/key-industry.service';

/**
 * 迁移途径信息页面
 */
@Component({
  selector: 'app-route-info',
  templateUrl: './route-info.page.html',
  styleUrls: ['./route-info.page.scss'],
})
export class RouteInfoPage implements OnInit {
  // 土壤途径页面信息名称对应接口请求返回值字段名
  public soilList = [
    {
      label: '是否有杂填土等人工填土层',
      code: 'TRTJ001',
      type: 'text'
    },
  ]
  // 包气带土层性质页面信息名称对应接口请求返回值字段名
  public gasList = {
    title: ['序号', '包气带土层性质'], // 表头
    name: 'name',
    num: 'value'
  }
  // 地下水途径页面信息名称对应接口请求返回值字段名
  public waterList = [
    {
      label: '地下水埋深（m）',
      code: 'DXSTJ001',
      type: 'text'
    },
    {
      label: '饱和带渗透性',
      code: 'DXSTJ002',
      type: 'text'
    },
    {
      label: '地块所在区域是否属于喀斯特地貌',
      code: 'DXSTJ003',
      type: 'text'
    },
    {
      label: '年降雨量（mm）',
      code: 'DXSTJ004',
      type: 'text'
    },
  ]
  // 迁移途径信息（土壤途径和地下水途径信息）
  public routeInfoData = {};
  // 包气带土层性质详细信息
  public gasData = [];
  // 企业主键id
  private id = '';
  constructor(
    private keyIndustryService: KeyIndustryService, // 重点行业企业service
    private activatedRoute: ActivatedRoute, // 路由参数
  ) { }

  ngOnInit() {
    // 获取企业主键id
    this.id = this.getRouterParams('id');
    // 获取迁移途径信息
    this.getRouteInfo();
  }

  /**
   * 获取迁移途径信息
   */
  getRouteInfo(): void {
    // 接口请求参数
    const params = {
      ENTERID: this.id
    };
    // 接口请求
    this.keyIndustryService.getRouteInfo(params, true, res => {
      // 土壤途径和地下水途径信息
      this.routeInfoData = res.data;
      // 包气带土层性质详细信息，将字符串转化为数组
      if ( res.data.CODE_BQDTCXZ) {
        // 临时数组
        const temp = res.data.CODE_BQDTCXZ.split(',');
        temp.forEach((element,i) => {
          // 循环保存到新数组中
          this.gasData.push({name: i, value: element})
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
