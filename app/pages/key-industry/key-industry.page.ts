import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { KeyIndustryService } from 'src/app/services/business/key-industry/key-industry.service';
import { ConfigService } from 'src/app/services/config/config.service';

/**
 * 重点行业企业页面
 */
@Component({
  selector: 'app-key-industry',
  templateUrl: './key-industry.page.html',
  styleUrls: ['./key-industry.page.scss'],
})
export class KeyIndustryPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonContent, { static: true }) content:IonContent;
  // 头部tab切换数据
  public titleArr = [{
    code: 0,
    name: '全部'
  },{
    code: 1,
    name: '收藏'
  }];
  // 标题选中的项，默认选中第一个tab
  public titleChecked = 0;
  // 显示的内容
  public showContent = 'total';
  // 搜索关键词
  public keywords = '';
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
  // 接口请求参数
  public params = {
    LOGINNAME: '', // 用户账号
    REGIONCODE: '', // 行政区code
    REGIONNAME: '', // 行政区name
    NAME_TRADETYPE: '', // 行业code
    LONGITUDE: 0, // 经度
    LATITUDE: 0, // 纬度
    IS_COLLECTION: 0, // 是否展示收藏列表
    pages: 1, // 页码
    pageSize: 10, // 每页数量
    KEYWORD: '', // 搜索关键字
  }
  constructor(
    private router: Router, // 路由
    private keyIndustryService: KeyIndustryService, // 重点行业企业service
    private configService: ConfigService, // 基础配置
  ) { }

  ngOnInit() {
    // 获取用户账号
    this.params.LOGINNAME = this.configService.loginInfo.loginName;
    // 模拟数据 -- 行政区域的数据
    this.selectionList[0].dropDownContentList = [
      {
        value: '',
        text: '全部',
        children: [
          {
            value: 'dsds',
            text: 'zuihou',
          },
          {
            value: '1',
            text: '最后',
          },
          {
            value: '2',
            text: '22222',
            children: [
              {
                value: '333',
                text: '1111',
              }
            ]
          },
          {
            value: '3',
            text: '呀呀呀呀呀呀',
            children: []
          },
          {
            value: '4',
            text: '呀呀呀呀呀呀',
            children: []
          },
          {
            value: '5',
            text: '呀呀呀呀呀呀',
            children: []
          },
        ]
      }
    ]
    // 模拟数据 -- 行业数据
    this.selectionList[1].dropDownContentList = [
      {
        value: '',
        name: '全部',
        isClick: false,
      },{
        value: '2',
        name: '2',
        isClick: false,
      },{
        value: '3',
        name: '3',
        isClick: false,
      },{
        value: '4',
        name: '4',
        isClick: false,
      },{
        value: '5',
        name: '5',
        isClick: false,
      },{
        value: '6',
        name: '6',
        isClick: false,
      },
    ]
  }

  /**
   * 选中下拉款展示的条件之后
   * @param selectionInfo 当前选中的信息，第一项为选中的内容，第二项为点击的下拉菜单
   */
  ionChangeArea(selectionInfo:any[]): void {
    if (selectionInfo[1] === 0) { // 行政区域
      // 请求参数 -- 行政区名称
      this.params.REGIONNAME = selectionInfo[0].name;
      // 请求参数 -- 行政区code
      this.params.REGIONCODE = selectionInfo[0].code;
    } else if (selectionInfo[1] === 1){ // 行业
      // 请求参数 -- 行业code
      this.params.NAME_TRADETYPE = selectionInfo[0];
    }
    // 页面滚动条到顶部
    this.content.scrollToTop(0);
    // 初始化页码
    this.params.pages = 1;
    // 初始化列表数据
    this.page.listInfo = [];
   // 重新生成请求参数对象，这样子组件可以检测到数据的更新
   this.params = Object.assign({}, this.params);
  }

  /**
   * 标题切换
   * @param code 标题code
   * @param index 被点击的标题序号
   */
  changeTitle(code: number, index: number): void {
    // 选中辩题对应的code
    this.titleChecked = code;
    // 点击tab切换，显示对应内容
    this.showContent = index === 0 ? 'total' : 'collect';
    // 改变搜索条件 0 搜索全部  1 搜索收藏企业
    this.params.IS_COLLECTION = code;
    // 页码初始化
    this.params.pages = 1;
    // 页面滚动条到顶部
    this.content.scrollToTop(0);
    // 列表数据初始化
    this.page.listInfo = [];
    // 重新生成请求参数对象，这样子组件可以检测到数据的更新
    this.params = Object.assign({}, this.params);
  }

  /**
   * 取消搜索
   */
  searchCancel(): void {
    // 清除搜索关键字
    this.keywords = '';
  }

  /**
   * 搜索
   */
  search(): void {
    // 页面滚动条到顶部
    this.content.scrollToTop(0);
    // 请求参数-- 搜索关键字
    this.params.KEYWORD = this.keywords;
    // 请求参数 -- 页码 初始化
    this.params.pages = 1;
    // 页面数据初始化
    this.page.listInfo = [];
    // 重新生成请求参数对象，这样子组件可以检测到数据的更新
    this.params = Object.assign({}, this.params);
  }

  /**
   * 跳转到地图页面
   * @param name 点击模块的名称
   */
  toModule(name) {
    // 页面跳转，通过模块名称来查询对应的路由
    this.router.navigate(['map', {model: '重点行业企业'}]);
  }
}
