import { KeyedWrite } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRouterOutlet, IonSearchbar } from '@ionic/angular';
import { MapService } from 'src/app/services/business/map/map.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { EventsMangerService } from 'src/app/services/utils/events-manger/events-manger.service';
/**
 * 搜索页面
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
@ViewChild(IonSearchbar, { static: true }) ionSearchbar: IonSearchbar;
  // 页面所需要的元素
  public pages = {
    // 搜索历史记录
    location: [
    ],
    // 是否有搜索内容
    isSearch: false,
    // 搜索关键字
    keyword: '',
    // 按照关键字搜索的内容
    keywordSearch:[],
  }
  // 请求参数
  private param = {
    LOGIN_NAME: '', // 用户账号
    REGION_CODE: '', // 行政区code
    KEYWORD: '', // 关键字
    LONGITUDE: '', // 经度
    LATITUDE: '', // 纬度
    CODE: '', // 点位类型
    pagesNum: 1, // 页码
    pageSize: 10, // 每页数量
  }
  constructor(
    private ionRouterOutlet: IonRouterOutlet, // 路由历史记录
    private eventsMangerService: EventsMangerService, // 页面监听事件
    private mapService: MapService, // 地图接口服务
    private configService: ConfigService, // 基础配置服务
  ) { }

  ngOnInit(): void {
    // 自动获取搜索框
    this.ionViewDidEnter();
    // 获取搜索历史数据
    if (localStorage.getItem(this.configService.loginInfo.loginName)) {
      const hestory = JSON.parse(localStorage.getItem(this.configService.loginInfo.loginName));
      this.pages.location= hestory;
    }
  }

  /**
   * 取消事件，返回到上一级页面
   */
  searchCancel(): void {
    this.ionRouterOutlet.pop();
  }

  /**
   * 按照关键字搜索
   */
  search(): void {
    if (this.pages.keyword === '') {
      this.pages.isSearch = false;
      return;
    }
    this.param.KEYWORD = this.pages.keyword;
    this.getSearchData();
    this.pages.isSearch = true;
  }


  /**
   * 地图点位数据获取
   */
  getSearchData(): void{
    // 请求参数
    const param = {
      LOGIN_NAME: this.param.LOGIN_NAME, // 用户账号
      REGION_CODE: this.param.REGION_CODE, // 行政区code
      KEYWORD: this.param.KEYWORD, // 关键字
      LONGITUDE: this.param.LONGITUDE, // 经度
      LATITUDE: this.param.LATITUDE, // 纬度
      CODE: this.param.CODE, // 点位类型
      pagesNum: this.param.pagesNum, // 页码
      pageSize: this.param.pageSize, // 每页数量
    }
    // 请求接口
    this.mapService.getMapPoint( param, true, res => {
      if ( res && res.data && res.data.length > 0) {
        this.pages.keywordSearch = res.data;
      }
    })

  }

  /**
   * 存储点击的点位
   * @param item 点击的点位
   */
  toDetails(item: {[key: string]: string}): void {
    this.eventsMangerService.publishMapSearchUpdate(item);
    this.pages.location = []; // 搜索历史
    if (localStorage.getItem(this.configService.loginInfo.loginName)) { // 已经存在搜索历史
      // 获取app缓存的历史数据
      this.pages.location = JSON.parse(localStorage.getItem(this.configService.loginInfo.loginName));
      let hestoryString = '';
      this.pages.location.unshift(item);
      // 截取十条数据
      for( let i = 0; i < this.pages.location.length; i++) {
        if (i < 10) {
          hestoryString += JSON.stringify(this.pages.location[i]);
        }
      }
      this.pages.location = this.pages.location.slice(0, 10);
      // 重新存储搜索历史数据
      localStorage.setItem(this.configService.loginInfo.loginName, '');
      localStorage.setItem(this.configService.loginInfo.loginName, JSON.stringify(this.pages.location));

    } else { // app无搜索历史数据
      localStorage.setItem(this.configService.loginInfo.loginName, JSON.stringify([{
        NAME: item.NAME,
        ADDRESS: item.ADDRESS
      }]));
      // 将当前数据保存到搜素历史中
      this.pages.location.unshift(item);
    }
    // 返回到地图页面
    this.ionRouterOutlet.pop();
  }

  /**
   * 下拉刷新事件
   * @param e 下拉刷新内容
   */
  doRefresh(e: any): void {
    console.log('下拉刷新');
    setTimeout(() => {
      // 加载完成
      console.log('Async operation has ended');
      e.target.complete();
    }, 2000);
  }

  /**
   * 上拉加载更多事件
   * @param e 加载
   */
  loadData(e: any): void {
    console.log('上拉加载更多');
    setTimeout(() => {
      console.log('Done');
      this.pages.location.push(this.pages.location[2])
      e.target.complete();
      // e.target.disabled = false;
    }, 500);
  }

  /**
   * 进入页面获取搜索框的焦点
   */
  ionViewDidEnter(): void {
    setTimeout(() => {
      // 给ion-Searchbar组件的输入框设置焦点
      this.ionSearchbar.setFocus();
    });
  }
}
