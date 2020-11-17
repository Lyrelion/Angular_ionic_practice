import { Injectable } from '@angular/core';
import { HttpService } from '../../utils/http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(
    private http: HttpService // 接口转换服务
  ) { }

  /**
   * 获取文件库列表数据
   * @param params 必传
   * @param isShowing 是否显示加载动画
   * @param callback 回掉函数
   */
  getFileLiarbryList(params, isShowing, callback) {
    this.http.getData('getFileLiarbryList', params, isShowing, callback);
  }

  /**
   * 获取文件类型数据
   * @param params 必传
   * @param isShowing 是否显示加载动画
   * @param callback 回掉函数
   */
  getFileType(params, isShowing, callback) {
    this.http.getData('getFileType', params, isShowing, callback);
  }

  /**
   * 获取文件级别数据
   * @param params 必传
   * @param isShowing 是否显示加载动画
   * @param callback 回掉函数
   */
  getFileLevel(params, isShowing, callback) {
    this.http.getData('getFileLevel', params, isShowing, callback);
  }
}
