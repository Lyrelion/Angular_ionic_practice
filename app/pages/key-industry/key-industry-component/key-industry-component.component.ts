import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { KeyIndustryService } from 'src/app/services/business/key-industry/key-industry.service';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-key-industry-component',
  templateUrl: './key-industry-component.component.html',
  styleUrls: ['./key-industry-component.component.scss'],
})
export class KeyIndustryComponentComponent implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  @Input() params: {[key: string]: any}; // 请求参数

  // 页面列表数据，中文和接口返回的数据字段的对应关系
  public page = {
    listInfoCode: { // 数据对应字典表
      title: 'DICTIONARY_NAME',
      isCollect: 'isCollect',
      addressInfo: 'addressInfo',
      range: 'range',
      location: 'location',
      otherInfo: 'otherInfo',
      name: 'name',
      value: 'value'
    },
    listInfo: []
  }
  // 组建下拉框菜单选项
  public selectionList = [
    {
      name: '行政区',
      type: '2', //  1 单选 2 多级联动 3 多选
      dropDownContentList: [],
      selection: '0',
      width: '50%'
    },
    {
      name: '行业',
      type: '3',
      selectionName: 'name',
      dropDownContentList: [],
      selection: '1',
      width: '50%'
    },
  ];
  public isInit = true; // 是否是第一次加载
  constructor(
    private router: Router, // 路由
    private keyIndustryService: KeyIndustryService, // 重点行业企业service
    private configService: ConfigService, // 基础配置
  ) { }

  ngOnInit() {
    this.isInit = false;
    // 初始化时，获取企业信息
    this.getKeyIndustryList();
  }

  /**
   * 组件传值有更新的时候执行
   * @param changes 组件传值更新
   */
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(): void {
    if (!this.isInit) {
      // 初始化上拉刷新
      this.infiniteScroll.disabled = false;
      // 列表初始化
      this.page.listInfo = [];
      // 参数有变化之后，再次执行获取农用地列表数据函数
      this.getKeyIndustryList();
    }
  }

  /**
   * 获取重点行业企业列表
   * @param e 加载事件
   */
  getKeyIndustryList(e?: any): void {
    // 请求参数
    const params = {
      LOGINNAME: this.params.LOGINNAME, // 用户账号
      REGIONCODE: this.params.REGIONCODE, // 行政区code
      REGIONNAME: this.params.REGIONNAME, // 行政区name
      NAME_TRADETYPE: this.params.NAME_TRADETYPE, // 行业code
      LONGITUDE: this.params.LONGITUDE, // 经度
      LATITUDE: this.params.LATITUDE, // 纬度
      IS_COLLECTION: this.params.IS_COLLECTION, // 是否展示收藏列表
      KEYWORD: this.params.KEYWORD, // 搜索关键字
      pagesNum: this.params.pages, // 页码
      pageSize: this.params.pageSize, // 每页数量
    }
    // 请求接口
    this.keyIndustryService.getKeyIndustryList(params, true, res => {
      // 排除异常数据
      if (res.data && res.data.length > 0) {
        // 对接口返回的数据，进行重新的封装
        for (const iterator of res.data) {
          iterator.isCollect = true, // 是否已经被收藏
          iterator.isShowCollect = true, // 是否显示收藏按钮
          iterator.isNavigation = true, // 是否有导航按钮
          iterator.otherInfo = []; // 详细信息
          iterator.addressInfo = {}; // 地址信息
          iterator.otherInfo.push(
            {
              name: '行业类别',
              value: iterator.NAME_TRADETYPE
            },
            {
              name: '监督重点',
              value: iterator.SUPERVISE_POINT
            },
            {
              name: '现场监察',
              value: iterator.SUPERVISE_NUM
            }
          )
          // 企业的地址信息
          iterator.addressInfo.range = iterator.DISTANCE;
          iterator.addressInfo.location = iterator.LAND_REGIONNAME;
          // 企业的收藏状态
          if (iterator.IS_COLLECTION === 0) {
            iterator.isCollect = false
          }
          // 重新保存到数据中
          this.page.listInfo.push(iterator)
        }
        // 数据加载完成之后，禁止加载更多数据
        if (e && res.data.length < this.params.pageSize) {
          e.target.disabled = true;
        }
      }
      // 结束加载事件
      if(e) {
        e.target.complete();
      }
    })
  }

  /**
   * 收藏按钮被点击事件
   * @param item 需要操作元素的序号
   */
  getCollect(item: number): void {
    console.log('收藏点击事件',item);
    // 改变企业的收藏状态
    this.page.listInfo[item].isCollect = !this.page.listInfo[item].isCollect;
  }

  /**
   * 导航事件
   * @param item 被点击列表数据
   */
  getNavigation(item: {[key: string]: string}): void {
    console.log('开启导航功能',item);
  }

  /**
   * 列表点击事件
   * @param item 被点击列表数据
   */
  getItemClick(item: {[key: string]: string}): void {
    // 路由跳转，跳转到企业详情页面，参数为企业的code
    this.router.navigate(['key-industry/key-industry-list', {id: item.DICTIONARY_CODE, title: item.DICTIONARY_NAME}])
  }

  /**
   * 下拉刷新事件
   * @param e 下拉刷新内容
   */
  doRefresh(e): void {
    this.infiniteScroll.disabled = false;
    this.params.pages = 1;
    this.page.listInfo = [];
    this.getKeyIndustryList(e);
  }

  /**
   * 上拉加载更多事件
   * @param e 加载
   */
  loadData(e: any) {
    // 请求参数 -- 页码 ++
    this.params.pages++;
    // 重新请求
    this.getKeyIndustryList(e);
  }
}
