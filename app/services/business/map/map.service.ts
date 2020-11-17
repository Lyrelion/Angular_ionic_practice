import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../config/config.service';
import { HttpService } from '../../utils/http-service/http.service';
import { HttpUtilsService } from '../../utils/http-utils/http-utils.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(
    public configService: ConfigService,
    public httpUtilsService: HttpUtilsService,
    private http: HttpService, // 接口转换服务
    private router: Router, // 路由
  ) { }

  /**
   * 获取选中的行政区的边界数据
   * @param jsonUrl 文件地址
   * @param callback 回调函数
   */
  getCityJSON(jsonUrl: string, callback: (res: { [key: string]: { [item: string]: unknown }[] }) => void): void {
    this.httpUtilsService.get(jsonUrl, {}, false, callback);
  }

  /**
   * 获取地图点位相关数据
   * @param params 请求参数
   * @param isShowing 是否显示加载动画
   * @param callback 回调函数
   */
  getMapPoint(params: {[key: string]: any}, isShowing: boolean, callback: (res: {[key: string]: {[item: string]: any}[]}) =>void): void {
    this.http.getData('getMapPoint', params, isShowing, callback);
  }

  /**
   * 获取地图点位类型
   * @param params 请求参数
   * @param isShowing 是否显示加载动画
   * @param callback 回调函数
   */
  getMapType(params: {[key: string]: any}, isShowing: boolean, callback: (res: {[key: string]: {[item: string]: any}[]}) =>void): void {
    this.http.getData('getMapType', params, isShowing, callback);
  }

  /**
   * 获取我的周边的信息
   * @param params 请求参数
   * @param isShowing 是否显示加载动画
   * @param callback 回调函数
   */
  getAroundInfo(params: {[key: string]: any}, isShowing: boolean, callback: (res: any) =>void): void {
    this.http.getData('getAroundInfo', params, isShowing, callback);
  }

  /**
   * 获取我的周边的信息
   * @param params 请求参数
   * @param isShowing 是否显示加载动画
   * @param callback 回调函数
   */
  getAroundName(params: {[key: string]: any}, isShowing: boolean, callback: (res: any) =>void): void {
    this.httpUtilsService.get(this.configService.baiduLocation, params, isShowing, callback);
  }

  /**
   * 跳转到对应类型的数据详情页面
   * @param type 对应类型的名称
   * @param id 数据的id
   */
  toModelPage(type: string, id: string, title): void {
    let routeUrl = '';
    let query = {};
    switch (type) {
      case '重点行业企业':
        routeUrl = 'key-industry/key-industry-list';
        query = {
          id,
          title
        }
        break;
      case '建设用地':
        routeUrl = 'agricultural-land/agricultural-land-detail-list';
        query = {
          id,
          title
        }
        break;
      case '地下水':
        routeUrl = 'agricultural-land/agricultural-land-detail-list';
        query = {
          id,
          title
        }
        break;
      case '农用地':
        routeUrl = 'agricultural-land/agricultural-land-detail-list';
        query = {
          id,
          title
        }
        break;
      case '农村污染处理设施':
        routeUrl = 'agricultural-land/agricultural-land-detail-list';
        query = {
          id,
          title
        }
        break;
      case '农村生活垃圾处理':
        routeUrl = 'agricultural-land/agricultural-land-detail-list';
        query = {
          id,
          title
        }
        break;
      case '农村饮用水水源地':
        routeUrl = 'agricultural-land/agricultural-land-detail-list';
        query = {
          id,
          title
        }
        break;
      case '畜禽养殖':
        routeUrl = 'agricultural-land/agricultural-land-detail-list';
        query = {
          id,
          title
        }
        break;
      case '农村黑臭水体':
        routeUrl = 'agricultural-land/agricultural-land-detail-list';
        query = {
          id,
          title
        }
        break;
    }
    this.router.navigate([routeUrl, query]);
  }

}
