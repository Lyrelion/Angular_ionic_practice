import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-site-super',
  templateUrl: './site-super.page.html',
  styleUrls: ['./site-super.page.scss'],
})
export class SiteSuperPage implements OnInit {
  public page = {
    listInfoCode: { // 数据对应字典表
      title: 'title',
      isCollect: 'isCollect',
      addressInfo: 'addressInfo',
      range: 'range',
      location: 'location',
      otherInfo: 'otherInfo',
      name: 'name',
      value: 'value'
    },
    listInfo: [
      {
        title: '江西省恒生制衣有限公司',
        isCollect: true, // 是否已经被收藏
        isShowCollect: true, // 是否显示收藏按钮
        addressInfo: {
          range: '100',
          location: '北京市昌平区沙河镇'
        },
        otherInfo: [
          {
            name: '行业类别',
            value: '你瞅瞅，你这写的都是啥你瞅瞅，你这写的都是啥你瞅瞅，你这写的都是啥你瞅瞅，你这写的都是啥你瞅瞅，你这写的都是啥你瞅瞅，你这写的都是啥'
          },
          {
            name: '行业类别2',
            value: '你瞅瞅，你这写的都是啥'
          },
          {
            name: '行业类别3',
            value: '你瞅瞅，你这写的都是啥'
          },
        ]
      },
      {
        title: '江西省恒生制衣有限公司',
        isCollect: false, // 是否已经被收藏
        isShowCollect: true, // 是否显示收藏按钮
        addressInfo: {
          range: '100',
          location: '北京市昌平区沙河镇'
        },
        otherInfo: [
          {
            name: '行业类别',
            value: '你瞅瞅，你这写的都是啥'
          },
          {
            name: '行业类别2',
            value: '你瞅瞅，你这写的都是啥'
          },
          {
            name: '行业类别3',
            value: '你瞅瞅，你这写的都是啥'
          },
        ]
      },
      {
        title: '江西省恒生制衣有限公司',
        isCollect: false, // 是否已经被收藏
        isShowCollect: true, // 是否显示收藏按钮
        addressInfo: {
          range: '100',
          location: '北京市昌平区沙河镇'
        },
        otherInfo: [
          {
            name: '行业类别',
            value: '你瞅瞅，你这写的都是啥'
          },
          {
            name: '行业类别2',
            value: '你瞅瞅，你这写的都是啥'
          },
          {
            name: '行业类别3',
            value: '你瞅瞅，你这写的都是啥'
          },
        ]
      }
    ]
  }
  public keywords = ''; // 搜索关键词

  

  constructor(
    private router: Router
  ) { }



  ngOnInit() {
  }

  /**
   * 收藏按钮被点击事件
   * @param item 需要操作元素的序号
   */
  getCollect(item) {
    console.log('收藏点击事件',item);
    this.page.listInfo[item].isCollect = !this.page.listInfo[item].isCollect;
  }

  /**
   * 导航事件
   * @param item 需要操作元素的序号
   */
  getNavigation(item) {
    console.log('开启导航功能',item);
  }

  /**
   * 列表点击事件
   * @param item 需要操作列表的序号
   */
  getItemClick(item) {
    this.router.navigate(['groundwater/water-source/site-super/site-super-detail'], { queryParams: { type: 'dataEcho'}});
  }

  /**
   * 取消搜索
   */
  searchCancel() {
    console.log('取消搜索');
  }

  /**
   * 搜索
   */
  search() {
    console.log('搜索');
  }

  /**
   * 跳转到添加任务页面
   */
  goAddTask() {
    this.router.navigate(['groundwater/water-source/site-super/site-super-detail'], {queryParams: {type: 'dataAdd'}});
  }
}
