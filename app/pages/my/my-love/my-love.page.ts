import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyService} from '../../../services/business/my/my.service';

@Component({
  selector: 'app-my-love',
  templateUrl: './my-love.page.html',
  styleUrls: ['./my-love.page.scss'],
})
export class MyLovePage implements OnInit {
  // 页面tab切换
  public titleArr = [{
    code: '1',
    name: '重点行业企业'
  },{
    code: '2',
    name: '建设用地'
  },{
    code: '3',
    name: '畜禽养殖'
  },{
    code: '4',
    name: '污水处理设施'
  }];
  public titleChecked = ''; // 标题选中的项
  public showContent = 'total'; // 显示的内容
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
        isNavigation: true, // 是否有导航按钮
        // titleIcon: 'assets/img/rw.png',
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
        isCollect: true, // 是否已经被收藏
        isShowCollect: true, // 是否显示收藏按钮
        isNavigation: true, // 是否有导航按钮
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
        isCollect: true, // 是否已经被收藏
        isShowCollect: true, // 是否显示收藏按钮
        isNavigation: true, // 是否有导航按钮
        title: '江西省恒生制衣有限公司',
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
  

  constructor(
    private router: Router,
    private myService: MyService
  ) { }

  ngOnInit() {
  }

  /**
   * tab标题切换
   */
  changeTitle(code, index) {
    this.titleChecked = code;
    // 点击tab切换，显示对应内容
    this.showContent = index === 0 ? 'total' : 'collect';
    // this.currChecked.emit(this.titleArr[index]);
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
    console.log('点击列表，准备跳转', item);
    this.router.navigate(['key-industry/key-industry-list'])
  }

  getMyLoveList() {
    const params = {};
    this.myService.getMyLoveList(params, true, (res)=>{
      console.log(res);
    });
  }

}
