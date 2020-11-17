import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { MapService } from 'src/app/services/business/map/map.service';
import { ConfigService } from 'src/app/services/config/config.service';
/**
 * 我的周边
 */
@Component({
  selector: 'app-around',
  templateUrl: './around.page.html',
  styleUrls: ['./around.page.scss'],
})
export class AroundPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonContent, { static: true }) content:IonContent;
  // 组建下拉框菜单选项
  public selectionList = [
    {
      name: '点位类型',
      type: '3',
      selectionName: 'name',
      dropDownContentList: [],
      selection: '0',
      width: '50%'
    },
    {
      name: '距离',
      type: '1',
      selectionName: 'name',
      dropDownContentList: [
        {
          name: '50m',
          code: ''
        },
        {
          name: '100m',
          code: '1'
        },
        {
          name: '150m',
          code: '0'
        },
        {
          name: '200m',
          code: '0'
        },
        {
          name: '250m',
          code: '0'
        },
      ],
      selection: '1',
      width: '50%'
    }
  ];
  private lang = '100m';
  public page = {
    listInfo: [],
    title: '', // 周边地址名称
  }
  public param = {
    LOGIN_NAME: '',
    LONGITUDE: '',
    LATITUDE: '',
    CODE: '',
    DISTANCE: '',
    pagesNum: 1,
    pageSize: 20
  }
  constructor(
    private mapService: MapService, // 地图接口服务
    private configService: ConfigService, // 基础配置服务
    private activatedRoute: ActivatedRoute, // 路由
  ) { }

  ngOnInit() {
    // 获取用户基本信息
    this.param.LOGIN_NAME = this.configService.loginInfo.loginName;
    this.param.LONGITUDE = this.getRouterParams('lon');
    this.param.LATITUDE = this.getRouterParams('lat');
    this.page.title = this.getRouterParams('title');
    // 获取我的周边信息
    this.getAroundInfo();
    // 获取附近行政区名称
    // this.getAroundName();
    // 获取点位类型
    this.getSelectType();
  }

  /**
   * 获取点位周围信息
   */
  getAroundInfo(e?): void {
    // 请求接口
    const param = {
      LOGIN_NAME: this.param.LOGIN_NAME,
      LONGITUDE: this.param.LONGITUDE,
      LATITUDE: this.param.LATITUDE,
      CODE: this.param.CODE,
      DISTANCE: this.param.DISTANCE,
      pagesNum: this.param.pagesNum,
      pageSize: this.param.pageSize
    }
    // 请求接口
    this.mapService.getAroundInfo(param, true, res => {
      if (res && res.data && res.data.length > 0) {
        this.page.listInfo.push(...res.data);
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
   * 获取地图上点位的筛选类型数据
   */
  getSelectType(): void {
    // 请求参数
    const param = {
      LOGIN_NAME: this.param.LOGIN_NAME
    }
    // 接口请求
    this.mapService.getMapType(param, false, res => {
      // 将点位类型的code保存到筛选条件数组中
      if (res && res.data) {
        // 循环接口获取到的点位类型
        for (const item of res.data) {
          // 将点位类型重新封装为符合要求的数组
          const obj = {
            name: item.NAME,
            code: item.CODE
          }
          this.selectionList[0].dropDownContentList.push(obj);
        }
      }
    })
  }

  /**
   * 跳转到列表详情页面
   * @param item 点击的数据详细信息
   */
  toDetails(item: {[key: string]: string}): void {
    this.mapService.toModelPage(item.TYPE, item.CODE, item.NAME);
  }

  /**
   * 选中下拉款展示的条件之后
   * @param selectionInfo 当前选中的信息
   */
  ionChangeArea(selectionInfo: any): void {
    console.log(selectionInfo);
    if (selectionInfo[1] === 1) { // 距离
      this.param.DISTANCE = selectionInfo[0].code;
    } else if (selectionInfo[1] === 0) { // 点位类型
      this.param.CODE = selectionInfo[0];
    }
    // 可以加载更多
    this.infiniteScroll.disabled = false;
    // 页面滚到顶部
    this.content.scrollToTop(0);
    // 页码初始化
    this.param.pagesNum = 1;
    // 列表初始化
    this.page.listInfo = [];
    this.getAroundInfo();
    // // 可以加载更多
    // this.infiniteScroll.disabled = false;
  }

  /**
   * 下拉刷新事件
   * @param e 下拉刷新内容
   */
  doRefresh(e): void {
    // 可以加载更多
    this.infiniteScroll.disabled = false;
    // 页码初始化
    this.param.pagesNum = 1;
    // 列表数据清空
    this.page.listInfo = [];
    // 重新请求
    this.getAroundInfo(e);
  }

  /**
   * 上拉加载更多事件
   * @param e 加载
   */
  loadData(e): void {
    // 页码初始化
    this.param.pagesNum++;
    // 重新请求
    this.getAroundInfo(e);
  }

  /**
   * 获取上一个页面的参数
   * @param param 路由传递参数的字段名
   */
  getRouterParams(param: string): string {
    return  this.activatedRoute.snapshot.paramMap.get(param);
  }
}
