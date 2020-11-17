import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgriculturalLandService } from 'src/app/services/business/agricultural-land/agricultural-land.service';
/**
 * 农用地详情页面
 */
@Component({
  selector: 'app-agricultural-land-detail-list',
  templateUrl: './agricultural-land-detail-list.page.html',
  styleUrls: ['./agricultural-land-detail-list.page.scss'],
})
export class AgriculturalLandDetailListPage implements OnInit {
  // 列表数据
  public topInfo = {
    iconUrl: 'assets/img/list-jdgl.png', // 图标
    name: '监督管理', // 名称
    router: 'supervision/supervision-list', // l路由
  }
  // 页面元素
  public page = {
    title: '', // 标题
    id: '', // 地块id
  }
  // 详细信息的中文名称和对应的code
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
      label: '行政区域',
      code: 'REGION_NAME',
      type: 'text'
    },
    {
      label: '地块面积',
      code: 'LANDAREA',
      type: 'text'
    },
    {
      label: '环境质量类别',
      code: 'FM_ENVTYPE',
      type: 'text'
    },{
      label: '农作物类型',
      code: 'FM_CROPSTYPE',
      type: 'text'
    },
    {
      label: '污染类型',
      code: 'FM_POLLTYPE',
      type: 'text'
    },
  ];
  // 详细信息内容
  public pageData = {}
  constructor(
    private router: Router, // 路由
    private activatedRoute: ActivatedRoute, // 获取路由参数
    private agriculturalLandService: AgriculturalLandService, // 农用地接口service
  ) { }

  ngOnInit() {
    // 获取传递过来的参数
    this.page.title = this.getRouterParams('title');
    // 获取页面数据
    // this.pageData = JSON.parse(this.getRouterParams('item'));
    this.getDetailsData(this.getRouterParams('id'));
    // 获取地块id
    this.page.id = this.getRouterParams('id');
  }
  /**
   * 列表点击事件
   * @param item 列表信息
   */
  itemClick(item: {[key: string]: string}): void {
    // 路由跳转，将地块的id传递过去
    this.router.navigate([item.router, {id: this.page.id, title:  this.page.title}])
  }
  /**
   * 获取路由传递过来的值
   */
  getRouterParams(param: string): string {
    return  this.activatedRoute.snapshot.paramMap.get(param);
  }

  /**
   * 获取地块的详细信息
   * @param FARMLAND_ID 地块id
   */
  getDetailsData(FARMLAND_ID) {
    const param = {
      FARMLAND_ID
    }
    this.agriculturalLandService.getDetailsData(param, true, res => {
      this.pageData = res.data;
    })
  }
}
