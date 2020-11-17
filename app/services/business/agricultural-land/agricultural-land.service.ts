import { Injectable } from '@angular/core';
import { HttpService } from '../../utils/http-service/http.service';

/**
 * 农用地service
 */
@Injectable({
  providedIn: 'root'
})
export class AgriculturalLandService {

  constructor(
    private http: HttpService, // 接口转换服务
  ) { }

  /**
   * 获取农用地列表数据
   * @param params 必传
   * @param callback 回掉函数
   */
  getKeyIndustryList(params: {[key: string]: any}, callback: (res: {[key: string]: {[item: string]: any}[]}) =>void): void {
    this.http.getData('getList', params, true, callback);
  }

  /**
   * 获取农用地列表数据
   * @param params 请求参数 -- 地块id
   * @param showLoading 是否显示加载动画
   * @param callback 回掉函数
   */
  getDetailsData(params: {[key: string]: any}, showLoading: boolean, callback: (res: {[key: string]: {[item: string]: any}[]}) =>void): void {
    this.http.getData('getDetailsData', params, showLoading, callback);
  }
}
