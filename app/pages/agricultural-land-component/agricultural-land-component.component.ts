import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { AgriculturalLandService } from 'src/app/services/business/agricultural-land/agricultural-land.service';
import { CommService } from 'src/app/services/business/comm/comm.service';

/**
 * 农用地列表组件
 */
@Component({
  selector: 'app-agricultural-land-component',
  templateUrl: './agricultural-land-component.component.html',
  styleUrls: ['./agricultural-land-component.component.scss'],
})
export class AgriculturalLandComponentComponent implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  @Input() param: {[key: string]: any}; // 请求参数

  // 页面元素信息
  public page = {
    listInfoCode: { // 数据对应字典表
      title: 'LANDNAME',
      isCollect: 'isCollect',
      addressInfo: 'addressInfo',
      range: 'range',
      location: 'location',
      otherInfo: 'otherInfo',
      name: 'name',
      value: 'value'
    },
    // 列表信息
    listInfo: []
  };
  public isInit = true;
  constructor(
    private commService: CommService, // 公共接口
    private agriculturalLandService: AgriculturalLandService, // 农用地接口service
    private router: Router, // 路由
  ) { }

  ngOnInit(): void {
    // 获取农用地列表
    this.getKeyIndustryList();
    this.isInit = false;
  }
  /**
   * 组件传值有更新的时候执行
   * @param changes 组件传值更新
   */
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(): void {
    if (!this.isInit) {
      // 初始化上拉刷新
      this.infiniteScroll.disabled = false;
      // 列表初始化
      this.page.listInfo = [];
      // 参数有变化之后，再次执行获取农用地列表数据函数
      this.getKeyIndustryList();
    }
  }

  /**
   * 获取农用地列表
   */
  getKeyIndustryList(e?): void {
    // 请求参数
    const params = {
      LOGINNAME: this.param.LOGINNAME, // 用户名
      REGION_CODE: this.param.REGION_CODE, // 行政区code
      TREE_CODE: this.param.TREE_CODE, // 农作物类型
      LONGITUDE: this.param.LONGITUDE, // 经度
      LATITUDE: this.param.LATITUDE, // 纬度
      KEYWORD: this.param.KEYWORD, // 搜索关键字
      IS_COLLECTION: this.param.IS_COLLECTION, // 是否只展示被收藏的企业
      pagesNum: this.param.pages, // 页码
      pageSize: this.param.pageSize, // 每页数量
    };

    // 接口数据
    this.agriculturalLandService.getKeyIndustryList(params, res => {
      // 将数据异常的情况分离出来
      if (res.data && res.data.length > 0) {
        // 按照列表组件需要的格式，重新生成数据
        for (const iterator of res.data) {
          iterator.isCollect = false, // 是否已经被收藏
          iterator.isShowCollect = true, // 是否显示收藏按钮
          iterator.isNavigation = true, // 是否有导航按钮
          iterator.otherInfo = []; // 详细信息
          iterator.addressInfo = {}; // 地址信息
          iterator.otherInfo.push(
            {
              name: '农作物类型',
              value: iterator.FM_CROPSTYPE
            },
            {
              name: '地块面积',
              value: iterator.LANDAREA
            },
          )
          iterator.addressInfo.range = iterator.DISTANCE;
          iterator.addressInfo.location = iterator.REGION_NAME;
          if (iterator.IS_COLLECTION === 1) {
            iterator.isCollect = true; // 是否已经被收藏
          }
          this.page.listInfo.push(iterator)
        }
        // 上拉加载的时候，没有数据的时候，禁止上拉加载更多
        if (e && res.data.length < this.param.pageSize) {
          e.target.disabled = true;
        }
      }
      // 结束加载事件
      if (e) {
        e.target.complete();
      }
    })
  }

  /**
   * 收藏按钮被点击事件
   * @param item 需要操作元素的序号
   */
  getCollect(item: number): void {
    // 改变收藏状态
    this.page.listInfo[item].isCollect = !this.page.listInfo[item].isCollect;
    // 请求参数
    const param = {
      type: 'nongyongdi', // 模块
      PKID: this.page.listInfo[item].FARMLAND_ID, // 农用地code
      cdflag: this.page.listInfo[item].isCollect?1:0, // 收藏状态
      LOGIN_NAME: this.param.LOGINNAME, //  用户账号
    }
    this.commService.postIsCollection(param, true, res => {
      console.log('收藏');
    })
  }

  /**
   * 导航事件
   * @param item 需要操作元素的序号
   */
  getNavigation(item: number): void {
    console.log('开启导航功能',item);
  }

  /**
   * 列表点击事件
   * @param item 被点击的元素信息
   */
  getItemClick(item: {[fileName: string]: string}): void {
    console.log('点击列表，准备跳转', item);
    this.router.navigate(['agricultural-land/agricultural-land-detail-list',{title: item.LANDNAME, id: item.FARMLAND_ID, item: JSON.stringify(item)}])
  }

  /**
   * 下拉刷新事件
   * @param e 下拉刷新内容
   */
  doRefresh(e): void {
    // 重新获取用户定位信息
    this.getUserLocation();
    // 初始化上拉刷新
    this.infiniteScroll.disabled = false;
    // 请求参数初始化
    this.param.pages = 1;
    this.page.listInfo = [];
    // 请求接口
    this.getKeyIndustryList(e);
  }

  /**
   * 上拉加载更多事件
   * @param e 加载
   */
  loadData(e: {[key: string]: any}): void {
    this.param.pages++;
    this.getKeyIndustryList(e);
  }

  /**
   * 获取用户当前定位信息
   */
  getUserLocation(): void {
    this.commService.getUserLocation( res => {
      this.param.LONGITUDE = res.longitude;
      this.param.LATITUDE =  res.latitude;
      console.log( this.param.LONGITUDE, this.param.LATITUDE);
    })
  }
}
