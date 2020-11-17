import { Injectable } from '@angular/core';
import { HttpUtilsService } from '../http-utils/http-utils.service';
import { ConfigService } from '../../config/config.service';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpUtil: HttpUtilsService,
    private config: ConfigService,
  ) { }


  /**
   * POST请求
   * @param apiName config中定义的接口的名称
   * @param params 接口参数
   * @param showloading 是否转圈
   * @param cb 回调函数
   */
  postData(apiName: string, params: { [propsKey: string]: string }, showloading: boolean, cb) {
    if (!this.config.interfaces[apiName]) {
      throw new Error('未找到接口！');
      return;
    }

    let hostUrl: string;

    if (this.config.interfaces[apiName].openRap2 && this.config.interfaces[apiName].mockApi && this.config.rap2Host) {
      hostUrl = this.config.rap2Host + this.config.interfaces[apiName].mockApi;
    } else if (!this.config.interfaces[apiName].openRap2 && this.config.interfaces[apiName].serviceApi && this.config.serviceHost) {
      params.interfaceId = this.config.interfaces[apiName].serviceApi;
      hostUrl = this.config.serviceHost;
    } else if (!this.config.interfaces[apiName].openRap2 && this.config.interfaces[apiName].api && this.config.host) {
      hostUrl = this.config.host + this.config.interfaces[apiName].api;
    }

    this.httpUtil.post(hostUrl, params, showloading, cb);
  }

  /**
   * GET请求
   * @param apiName config中定义的接口的名称
   * @param params 接口参数
   * @param showloading 是否转圈
   * @param cb 回调函数
   */
  getData(apiName: string, params: { [propsKey: string]: string }, showloading: boolean, cb) {
    if (!this.config.interfaces[apiName]) {
      throw new Error('未找到接口！');
      return;
    }

    let hostUrl: string;

    if (this.config.interfaces[apiName].openRap2 && this.config.interfaces[apiName].mockApi && this.config.rap2Host) {
      hostUrl = this.config.rap2Host + this.config.interfaces[apiName].mockApi;
    } else if (!this.config.interfaces[apiName].openRap2 && this.config.interfaces[apiName].serviceApi && this.config.serviceHost) {
      params.interfaceId = this.config.interfaces[apiName].serviceApi;
      hostUrl = this.config.serviceHost;
    } else if (!this.config.interfaces[apiName].openRap2 && this.config.interfaces[apiName].api && this.config.host) {
      hostUrl = this.config.host + this.config.interfaces[apiName].api;
    }

    this.httpUtil.get(hostUrl, params, showloading, cb);
  }
}
