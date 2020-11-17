import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 *  事件管理，替代之前的Events订阅事件
 */
export class EventsMangerService {
  // 地图搜索事件
  private mapSearchSubject = new Subject<unknown>();

  constructor() { }

  /**
   * 发布待办列表更新事件
   * @param data 传递的数据
   */
  publishMapSearchUpdate<T>(data: T) {
    this.mapSearchSubject.next(data);
  }

  /**
   * 获取待办列表Observable，用于监听待办列表更新事件
   */
  getMapSearchObservable(): Subject<unknown> {
    return this.mapSearchSubject;
  }

}
