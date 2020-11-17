import { Injectable } from '@angular/core';
import { HttpService } from '../../utils/http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class GroundWaterService {

  constructor(
    private http: HttpService
  ) { }

  /**
   * 获取地下水列表
   * @param params 必传
   * @param callback 回掉函数
   */
  getGroundWaterList(params: { [key: string]: any },
    showloading: boolean,
    callback): void {
    this.http.getData('getGroundWaterList', params, showloading, callback);
  }

  /**
   * 获取地下水类型数据
   * @param params 必传
   * @param callback 回掉函数
   */
  getGroundWaterType(params: { [key: string]: any },
    showloading: boolean,
    callback): void {
    this.http.getData('getGroundWaterType', params, showloading, callback);
  }

  /**
   * 获取地下水详情--- 集中式地下水型饮用水源检测
   * @param params 必传
   * @param callback 回掉函数
   */
  getDetailFocus(params: { [key: string]: any },
    showloading: boolean,
    callback): void {
    this.http.getData('getDetailFocus', params, showloading, callback);
  }

  /**
   * 获取地下水详情--- 污染源地下水详情
   * @param params 必传
   * @param callback 回掉函数
   */
  getDetailPolluSource(params: { [key: string]: any },
    showloading: boolean,
    callback): void {
    this.http.getData('getDetailPolluSource', params, showloading, callback);
  }

  /**
   * 获取地下水详情--- 区域地下水详情
   * @param params 必传
   * @param callback 回掉函数
   */
  getDetailArea(params: { [key: string]: any },
    showloading: boolean,
    callback): void {
    this.http.getData('getDetailArea', params, showloading, callback);
  }
}
