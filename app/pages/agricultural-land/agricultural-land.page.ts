import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { AgriculturalLandService } from 'src/app/services/business/agricultural-land/agricultural-land.service';
import { CommService } from 'src/app/services/business/comm/comm.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { ThsLocationService } from 'src/app/services/utils/ths-location/ths-location.service';

/**
 * 农用地页面
 */
@Component({
  selector: 'app-agricultural-land',
  templateUrl: './agricultural-land.page.html',
  styleUrls: ['./agricultural-land.page.scss'],
})
export class AgriculturalLandPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonContent, { static: true }) content:IonContent;
  // 顶部模块切换
  public titleArr = [{
    code: 0,
    name: '全部'
  },{
    code: 1,
    name: '收藏'
  }];
  public titleChecked = 0; // 标题选中的项
  public showContent = 'total'; // 显示的内容
  public keywords = ''; // 搜索关键词

  // 组建下拉框菜单选项
  public selectionList = [
    {
      name: '区域',
      type: '2', // 2 多级联动  1 单选 3 多选
      dropDownContentList: [],
      selection: '0',
      width: '50%'
    },
    {
      name: '农作物类型',
      type: '3',
      selectionName: 'name',
      dropDownContentList: [],
      selection: '1',
      width: '50%'
    },
  ];
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
  // 请求参数
  public param = {
    LOGINNAME: '', // 用户名
    REGION_CODE: '', // 行政区code
    TREE_CODE: '', // 农作物类型
    LONGITUDE: 0, // 经度
    LATITUDE: 0, // 纬度
    KEYWORD: '', // 搜索关键字
    IS_COLLECTION: 0, // 是否只展示被收藏的企业
    pages: 1, // 页码
    pageSize: 10, // 每页数量
  };
  constructor(
    private commService: CommService, // 公共接口
    private agriculturalLandService: AgriculturalLandService, // 农用地接口service
    private router: Router, // 路由
    private configService: ConfigService, // 基本配置
  ) { }

  ngOnInit(): void {
    // 获取用户基本信息
    this.param.LOGINNAME = this.configService.loginInfo.loginName;
    // 获取用户定位信息
    this.getUserLocation();
    // 获取农作物类型
    this.getCropsType();
  }

  /**
   * 获取农作物类型
   */
  getCropsType(): void {
    // 请求参数，农作物类型
    const params = {
      TREE_CODE: 'FM_CROPSTYPE'
    }
    // 请求接口
    this.commService.getMenu(params, false, res => {
      if (res.data && res.data.length > 0) {
        // 将所有的字典项存到数组中
        for (const item of res.data) {
          const temp = {
            name: item.DICTIONARY_NAME,
            code: item.DICTIONARY_CODE
          }
          this.selectionList[1].dropDownContentList.push(temp);
        }
        // 添加全部的选项
        this.selectionList[1].dropDownContentList.unshift({name: '全部',code: ''});
      }
    })
  }

  /**
   * 标题切换
   * @param code 当前点击的tab的code
   * @param index 当前被点击tab的序号
   */
  changeTitle(code: number, index: number): void {
    this.titleChecked = code;
    // 点击tab切换，显示对应内容
    this.showContent = index === 0 ? 'total' : 'collect';
    // 查询条件页码初始化
    this.param.pages = 1;
    this.page.listInfo = [];
    // 页面滚动条到顶部
    this.content.scrollToTop(0);
    // 加载收藏或者全部的数据
    this.param.IS_COLLECTION = code;
    // 重新生成请求参数对象，这样子组件可以检测到数据的更新
    this.param = Object.assign({}, this.param);
  }

  /**
   * 选中下拉款展示的条件之后
   * @param selectionInfo 当前选中的信息,数组第二项为下拉菜单的序号
   */
  ionChangeArea(selectionInfo: any[]): void{
    if (selectionInfo[1] === 1) { // 行业
      this.param.TREE_CODE = selectionInfo[0];
    }
    // 页面滚动条到顶部
    this.content.scrollToTop(0);
    // 查询条件页码初始化
    this.param.pages = 1;
    // 重新生成请求参数对象，这样子组件可以检测到数据的更新
    this.param = Object.assign({}, this.param);
  }

  /**
   * 取消搜索
   */
  searchCancel(): void {
    console.log('取消搜索');
  }

  /**
   * 搜索
   */
  search(): void {
    // 搜索关键字
    this.param.KEYWORD = this.keywords;
    this.param.pages = 1;
    this.page.listInfo = [];
    // 页面滚动条到顶部
    this.content.scrollToTop(0);
    // 重新生成请求参数对象，这样子组件可以检测到数据的更新
    this.param = Object.assign({}, this.param);
  }

  /**
   * 跳转到地图页面
   */
  toMap() {
    // 页面跳转，通过模块名称来查询对应的路由
    this.router.navigate(['map', {model: '农用地'}]);
  }

  /**
   * 获取用户当前定位信息
   */
  getUserLocation() {
    this.commService.getUserLocation( res => {
      this.param.LONGITUDE = res.longitude;
      this.param.LATITUDE =  res.latitude;
      console.log( this.param.LONGITUDE, this.param.LATITUDE);
    })
  }

}
