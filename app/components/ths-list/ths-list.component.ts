import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ths-list',
  templateUrl: './ths-list.component.html',
  styleUrls: ['./ths-list.component.scss'],
})
export class ThsListComponent implements OnInit {
  /**
   * 列表数据
   * @param items 对象的数组
   */
  @Input()
  pageInfo: { [key: string]: unknown }[];

  /**
   * 列表字段对应字段
   * @param items 对象的数组
   */
  @Input()
  listCode: { [key: string]: string };

  /**
   *  收藏点击的事件
   * @param item 被点击的列表序号
   */
  @Output()
  getCollect = new EventEmitter<object>();

  /**
   *  点击导航事件
   * @param item 被点击的列表序号
   */
  @Output()
  getNavigation = new EventEmitter<object>();

  /**
   *  点击列表事件
   * @param item 被点击的列表序号
   */
  @Output()
  getItemClick = new EventEmitter<object>();
  constructor() { }

  ngOnInit() { }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes) {
    console.log(changes);
  }

/**
 * 点击收藏按钮事件
 * @param item 被点击的列表信息
 */
  toggleCollect(item, $event) {
    // 阻止事件捕获，只有被点击对象是img的时候，触发收藏点击事件
    if ($event.srcElement.tagName !== 'IMG') {
      return;
    }
    this.getCollect.emit(item);
  }

  /**
   * 导航点击事件
   * @param item 被点击的列表序号
   * @param $event 点击事件
   */
  clickNavigation(item, $event) {
    // 阻止事件捕获，只有被点击对象是button的时候，触发导航点击事件
    if ($event.srcElement.tagName !== 'ION-BUTTON') {
      return;
    }
    this.getNavigation.emit(item);
  }

  /**
   * 列表点击事件
   * @param item 被点击的列表序号
   */
  clickItem(item, $event):void {
    // 阻止事件捕获，只有被点击对象不是收藏，导航之后，然后在执行点击事件
    if ($event.srcElement.tagName === 'IMG' || $event.srcElement.tagName === 'ION-BUTTON') {
      return;
    }
    this.getItemClick.emit(item);
  }
}
