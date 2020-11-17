import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ths-list-details',
  templateUrl: './ths-list-details.component.html',
  styleUrls: ['./ths-list-details.component.scss'],
})
export class ThsListDetailsComponent implements OnInit {
  /**
   * 列表数据
   * @param items 对象的数组
   */
  @Input()
  listInfo: {[key: string]: string}[];
  /**
   * 列表顶部数据
   * @param items 数据对象
   */
  @Input()
  topInfo: {[key: string]: string};

  @Output()
  itemClick= new EventEmitter<object>();

  constructor() { }

  ngOnInit() {}

  /**
   * 列表点击事件
   * @param item 被点击的列表详情
   */
  listClick(item: {[key: string]: string}): void {
    this.itemClick.emit(item);
  }
}
