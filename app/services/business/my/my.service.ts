import { Injectable } from '@angular/core';
import { HttpService } from '../../utils/http-service/http.service';


@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(
    private http: HttpService
  ) { }

  /**
   * 获取我的收藏--重点行业企业列表
   * @param params 必传
   * @param isShowing 是否显示加载动画
   * @param callback 回掉函数
   */
  getMyLoveList(params, isShowing, callback) {
    this.http.getData('getMyLoveList', params, isShowing, callback);
  }
}
