import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { CommService } from 'src/app/services/business/comm/comm.service';

@Component({
  selector: 'app-supervision-list',
  templateUrl: './supervision-list.page.html',
  styleUrls: ['./supervision-list.page.scss'],
})
export class SupervisionListPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonContent, { static: true }) content:IonContent;
  // 页面数据
  public page = {
    listInfoCode: { // 数据对应字典表
      title: 'SUPERVISIONTITLE',
      isCollect: 'isCollect',
      otherInfo: 'otherInfo',
      name: 'name',
      value: 'value'
    },
    // 搜索关键字
    keywords: '',
    // 页面名称
    title: '',
    // 列表数据
    listInfo: []
  }
  // 请求参数
  private param = {
    modelCode: '', // 模块code
    id: '', // 主键
    keyWord: '', // 搜索关键字
    pageNUm: 1, // 页码
    pageSize: 10, // 每页数量
  }
  constructor(
    private router: Router,  // 路由
    private activatedRoute: ActivatedRoute, // 获取路由参数
    private commService: CommService, // 公共接口service
  ) { }

  ngOnInit() {
    // 获取模块code
    this.param.modelCode = this.getRouterParams('code');
    // 获取企业code
    this.param.id = this.getRouterParams('id');
    // 获取企业名称
    this.page.title = this.getRouterParams('title');
    // 获取监督管理历史数据
    this.getSupervisionHistoryList();
  }

  /**
   * 添加监督管理
   */
  add(): void {
    // 跳转到上报页面
    this.router.navigate(['supervision', {type: 'add', title: this.page.title}])
  }

  /**
   * 获取监督管理历史数据
   */
  getSupervisionHistoryList(e?): void {
    // 请求参数
    const param = {
      TYPE: this.param.modelCode, // 模块code
      PKID: this.param.id, // 主键id
      KEYWORD: this.param.keyWord, // 搜索关键字
      pagesNum: this.param.pageNUm, // 页码
      pageSize: this.param.pageSize // 每页数量
    }
    // 请求接口
    this.commService.getSupervisionHistoryList(param, true, res => {
      if (res.data && res.data.length > 0) {
        for (const iterator of res.data) {
          iterator.titleIcon = 'assets/img/rw.png', // 小图标
          iterator.isShowCollect = false, // 是否显示收藏按钮
          iterator.isNavigation = false, // 是否有导航按钮
          iterator.otherInfo = []; // 详细信息
          iterator.otherInfo.push(
            {
              name: '监督管理时间',
              value: iterator.SUPERVISIONTIME
            },
            {
              name: '监督管理单位',
              value: iterator.SUPERVISIONUNIT
            },
          )
          // 重新保存到数据中
          this.page.listInfo.push(iterator)
        }
        // 数据加载完成之后，禁止加载更多数据
        if (e && res.data.length < this.param.pageSize) {
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
   * 列表点击事件
   * @param item 被点击的数据
   */
  getItemClick(item: {[key: string]: any}): void {
    // 跳转到填报详情页面
    this.router.navigate(['supervision',{type: 'look', title: this.page.title,  item: JSON.stringify(item)}])
  }

  /**
   * 下拉刷新事件
   * @param e 下拉刷新内容
   */
  doRefresh(e: any): void {
    // 初始化上拉刷新属性
    this.infiniteScroll.disabled = false;
    // 初始化页码
    this.param.pageNUm = 1;
    // 初始化列表
    this.page.listInfo = [];
    // 获取列表数据
    this.getSupervisionHistoryList(e);
  }

  /**
   * 上拉加载更多事件
   * @param e 加载
   */
  loadData(e: any): void {
    // 请求参数 -- 页码 ++
    this.param.pageNUm++;
    // 加载更多
    this.getSupervisionHistoryList(e);
  }

  /**
   * 获取路由传递过来的值
   */
  getRouterParams(param: string): string {
    return  this.activatedRoute.snapshot.paramMap.get(param);
  }

  /**
   * 取消搜索
   */
  searchCancel(): void {
    // 清除搜索关键字
    this.page.keywords = '';
  }

  /**
   * 搜索
   */
  search(): void {
    // 页面滚动条到顶部
    this.content.scrollToTop(0);
    // 页码初始化
    this.param.pageNUm = 1;
    // 列表数据初始化
    this.page.listInfo = [];
    // 请求列表数据
    this.getSupervisionHistoryList();
  }
}
