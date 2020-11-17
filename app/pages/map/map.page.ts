import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommService } from 'src/app/services/business/comm/comm.service';
import { MapService } from 'src/app/services/business/map/map.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { EventsMangerService } from 'src/app/services/utils/events-manger/events-manger.service';
import { ThsMapService } from 'src/app/services/utils/ths-map/ths-map.service';

/**
 * 地图页面
 */
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  /** 多级联动数据 -start */
  // 点位详细信息是否展示
  public isShowDetail = false;
  // public provinceArr = []; // 省级数组
  public cityArr = []; // 市州数组
  public countryArr = []; // 县数据
  public currentIndex = 1; // 当前点击的列
  // 当前选中的省份
  public currentProvince = {
    text: '',
    value: '',
    children: []
  };
  // 当前选中的市级
  public currentCity = {
    text: '',
    value: '',
    children: []
  };
  // 当前选中的县级
  public currentCountry = {
    text: '',
    value: '',
    children: []
  };
  // 是否选择了第一项
  public provietSelect = false;
  /** 多级联动数据 -end */

  // 页面元素
  public pages = {
    title: '全省', // 地图显示数据行政区
    isSelect: false, // 筛选功能是否展开
    isLegend: true, // 图例是否显示
    selectType: [ // 筛选条件
      {
        name: '重点行业企业',
        code: '',
        icon: 'assets/img/map-zdhyqy.png',
        isSelected: false,
      },
      {
        name: '建设用地',
        code: '11111',
        icon: 'assets/img/list-cyxx.png',
        isSelected: false,
      },
      {
        name: '地下水',
        code: '11111',
        icon: 'assets/img/list-jdgl.png',
        isSelected: false,
      },
      {
        name: '农用地',
        code: '11111',
        icon: 'assets/img/list-wryxx.png',
        isSelected: false,
      },
      {
        name: '农村污染处理设施',
        code: '11111',
        icon: 'assets/img/map-zdhyqy.png',
        isSelected: false,
      },
      {
        name: '农村生活垃圾处理',
        code: '11111',
        icon: 'assets/img/map-zdhyqy.png',
        isSelected: false,
      },
      {
        name: '农村饮用水水源地',
        code: '11111',
        icon: 'assets/img/map-zdhyqy.png',
        isSelected: false,
      },
      {
        name: '畜禽养殖',
        code: '11111',
        icon: 'assets/img/map-zdhyqy.png',
        isSelected: false,
      },
      {
        name: '农村黑臭水体',
        code: '11111',
        icon: 'assets/img/map-zdhyqy.png',
        isSelected: false,
      },
    ],
    showLegend: [], // 图例显示
    // 点位弹框的信息
    popUpInfo: {
      name: '--', // 点位名称
      distance: '0', // 距离
      address: '--', // 地址
      lon: 0, // 经度
      lat: 0, // 纬度
      code: '', // 点位code
      type: '', // 点位类型
    },
    // 行政区切换
    dropDownContentList: [
      {
        value: '360000',
        text: '全省',
        children: [
          {
            value: '360100',
            text: '南昌市',
          },
          {
            value: '360400',
            text: '九江市',
          },
          {
            value: '360500',
            text: '新余市',
            children: [
              {
                value: '360727',
                text: '赣州市',
              }
            ]
          },
          {
            value: '360600',
            text: '鹰潭市',
            children: []
          },
          {
            value: '360700',
            text: '赣州市',
            children: []
          },
          {
            value: '360800',
            text: '吉安市',
            children: []
          },
        ]
      }
    ]
  }
  // 地图展示相关信息
  public mapInfo = {
    // 地图对象
    mapView: null,
    // 图层信息
    layer: {
      // 地图渲染面图层
      cityLayer: {
        name: 'cityLayer',
        value: null
      },
      // 用户所在位置坐标
      userLayer: {
        name: 'userLayer',
        value: null
      },
      // 点位数据图层
      pointLayer: {
        name: 'pointLayer',
        value: null,
        picWidth: 25,
        picHeight: 25,
        offsetX: 0,
        offsetY: 0,
        wkid: 4326,
      }
    }
  }
  // 请求参数
  private param = {
    LOGIN_NAME: '', // 用户账号
    REGION_CODE: '', // 行政区code
    KEYWORD: '', // 关键字
    LONGITUDE: 0, // 经度
    LATITUDE: 0, // 纬度
    CODE: '', // 点位类型
    pagesNum: 1, // 页码
    pageSize: 9999, // 每页数量
  }
  constructor(
    private router: Router, // 路由
    private mapService: MapService, // 地图接口服务
    private thsMapService: ThsMapService, // 地图
    private eventsMangerService: EventsMangerService, // 页面监听事件
    private activatedRoute: ActivatedRoute, // 路由参数
    private configService: ConfigService, // 用户基本配置
    private commService: CommService, // 公共接口 -- 定位接口
  ) { }

  ngOnInit() {
    // 获取用户基本信息
    this.param.LOGIN_NAME = this.configService.loginInfo.loginName;
    // 用户所属行政区
    this.param.REGION_CODE = this.configService.loginInfo.regionCode;
    // 获取用户定位信息
    this.getUserLocation();
    // 获取地图点位类型的code
    this.getSelectType();
    // 监听搜搜页面传回来的值
    this.eventsMangerService.getMapSearchObservable().subscribe(res => {
      // 将所有的筛选条件清空
      this.pages.selectType.forEach(
        (Element, index) => {
          this.pages.selectType[index].isSelected = false;
        }
      )
      // 重新渲染图例
      this.showLegend();
      // 搜索点位进行打点
      this.putSearchPoint(res);
    })
    // 强制放到最后去执行
    setTimeout(() => {
      console.log(this.pages.selectType[0].code);
      // 初始化地图点位
      this.initSelect(this.getRouterParams('model'));
    }, 1000)
  }

  /**
   * 地图加载完毕
   * @param map 事件对象
   */
  onMapLoaded(map: any): void {
    // 地图
    this.mapInfo.mapView = map;
    // 创建地图所需要的的图层
    this.setMapLayer().then(
      () => {
        // 渲染默认区域地图样式,默认展示全省的数据，
        this.getCityJSON(this.param.REGION_CODE, 'assets/data/provice.json');
        setTimeout(() => {
          // 用户点位打点
          this.putUserPoint();
          // 地图点位打点
          this.putPoint();
        }, 1000)
      }
    );
    // 注册地图元素点击事件
    this.mapClick();
  }

  /**
   * 改变筛选条件的选中状态
   * @param index 选中的筛选条件序号
   */
  selectClick(index: number): void {
    // 切换当前筛选条件的选中状态
    this.pages.selectType[index].isSelected = !this.pages.selectType[index].isSelected;
    // 动态渲染图例显示
    this.showLegend();
    // 地图打点
    this.putPoint();
  }

  /**
   * 图例 展示/ 隐藏
   */
  toggleLegend(): void {
    // 在图例内容不为空的时候，进行图例的展开，收起
    if (this.pages.showLegend.length !== 0){
      this.pages.isLegend = !this.pages.isLegend;
    }
  }

  /**
   * 筛选信息 展示/ 隐藏
   */
  toggleSelect(): void {
    this.pages.isSelect = !this.pages.isSelect;
  }

  /**
   * 需要展示的图例
   */
  showLegend(): void {
    // 可显示的点位类型数组
    const codeArray = [];
    // 每次调用前，清空图例列表
    this.pages.showLegend = [];
    // 循环所有的筛选条件，将选中的条件加到图例中
    for (const item of this.pages.selectType) {
      const legend = {}; // 临时存储
      if (item.isSelected) {
        // tslint:disable-next-line:no-string-literal
        legend['name'] = item.name; // 图例名称
        // tslint:disable-next-line:no-string-literal
        legend['icon'] = item.icon; // 图例icon
        this.pages.showLegend.push(legend);
        codeArray.push(item.code);
      }
    }
    // 当没有选中的条件的时候，图例默认是可以打开的
    this.pages.showLegend.length === 0 ? this.pages.isLegend = true : this.pages.isLegend = this.pages.isLegend;
    // 赋值点位类型筛选条件
    this.param.CODE = codeArray.join(',');
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
          // 将点位类型的code保存到selectType[]中
          this.pages.selectType.forEach((el, i) => {
            // 根据点位类型的名称来判断
            if (el.name === item.NAME) {
              this.pages.selectType[i].code = item.CODE;
            }
          })
        }
      }
    })
  }

  /**
   * 进入地图时，初始化显示的点位类型
   * @param type 点位类型名称
   */
  initSelect(type: string): void {
    if (type === '' || type === null) { // 为空的时候，所有的筛选条件全部选中。直接进入地图模块
      this.pages.selectType.forEach(
        (Element, index) => {
          this.pages.selectType[index].isSelected = true;
        }
      )
    } else { // 从其他模块中进去地图后，默认只筛选当前模块的点位
      this.pages.selectType.forEach(
        (element, index) => {
          if (element.name === type) {
            this.pages.selectType[index].isSelected = true;
          }
        }
      )
    }
    // 重新渲染图例
    this.showLegend();
  }

  /**
   * 跳转到搜索页面
   */
  toSearch(): void {
    this.router.navigate(['map/search']);
  }

  /**
   * 定位到用户所在位置
   */
  toUserLocation(): void {
    // 获取最新定位
    this.getUserLocation();
    // 地图上打点用户坐标
    this.putUserPoint();
    // 定位到用户坐标点
    this.thsMapService.centerAndZoom(this.mapInfo.mapView, this.param.LONGITUDE, this.param.LATITUDE);
  }

  /**
   * 地图数据初始化
   */
  init(): void {
    this.param.REGION_CODE = this.configService.loginInfo.regionCode;
    // 初始化地图点位
    this.initSelect(this.getRouterParams('model'));
    // 地图点位，重新打点
    this.putPoint();
  }

  /**
   * 跳转到我的周边页面
   */
  toAround(): void {
    // 获取当前位置周围信息
    this.getAroundInfo();
  }

  /**
   * 跳转到点位周边信息页面
   */
  toAroundInfo(item): void {
    this.router.navigate(['map/around', { lon: item.lon, lat: item.lat, title: item.name }])
  }

  /**
   * 跳转到点位详细信息页面
   * @param item 点位信息
   */
  toDetailsInfo(item): void {
    this.mapService.toModelPage(item.type, item.code, item.name);
  }

  /**
   * 跳转到导航
   * @param item 点位信息
   */
  toNavigation(item: { [key: string]: string }): void {
    console.log('跳转导航');
  }

  /**
   * 渲染地图选中行政区颜色
   * @param cityCode 行政区编号
   */
  getCityJSON(cityCode: string, jsonUrl: string): void {
    this.mapService.getCityJSON(jsonUrl,
      (res) => {
        // 渲染当前行政区的范围
        this.thsMapService.setMapProvinceface(this.mapInfo.mapView, this.mapInfo.layer.cityLayer.value, res, cityCode)
      }
    )
  }

  /**
   * 用户地理位置坐标进行打点
   */
  putUserPoint(): void {
    if (this.mapInfo.mapView) {
      this.clearLayer(this.mapInfo.layer.userLayer.name);
    }
    // 用户位置打点
    this.thsMapService.addMarker(this.param.LONGITUDE, this.param.LATITUDE, this.mapInfo.layer.userLayer.value, 'assets/img/user.svg');
  }

  /**
   * 搜索点位进行打点
   * @param item 搜索点位的信息
   */
  putSearchPoint(item: { [key: string]: any }): void {
    // 每次打点之前都要先清除图层上的点
    this.clearLayer(this.mapInfo.layer.pointLayer.name);
    // 地图重新定位中心点
    this.thsMapService.centerAndZoom(this.mapInfo.mapView, item.LONGITUDE, item.LATITUDE);
    // 地图点位打点
    this.thsMapService.addMarker(
      item.LONGITUDE, item.LATITUDE, this.mapInfo.layer.pointLayer.value, 'assets/img/user.svg',
      this.mapInfo.layer.pointLayer.picWidth, this.mapInfo.layer.pointLayer.picHeight,
      this.mapInfo.layer.pointLayer.offsetX, this.mapInfo.layer.pointLayer.offsetY,
      this.mapInfo.layer.pointLayer.wkid, item
    );
    // 展示弹框
    this.isShowDetail = true;
    // 关闭图例显示
    this.pages.isLegend = false;
    // 将点位信息写入到弹框中
    this.pages.popUpInfo.name = item.NAME;
    this.pages.popUpInfo.lon = item.LONGITUDE;
    this.pages.popUpInfo.lat = item.LATITUDE;
    this.pages.popUpInfo.distance = item.DISTANCE;
    this.pages.popUpInfo.address = item.ADDRESS;
    this.pages.popUpInfo.code = item.CODE;
    this.pages.popUpInfo.type = item.graphic.attributes.TYPE;
  }

  /**
   * 地图点位数据进行打点
   */
  putPoint(): void {
    // 地图在打点之前要先清除之前的点位数据
    if (this.mapInfo.mapView) {
      this.clearLayer(this.mapInfo.layer.pointLayer.name);
    }
    // 请求参数
    const param = {
      LOGIN_NAME: this.param.LOGIN_NAME, // 用户账号
      REGION_CODE: this.param.REGION_CODE, // 行政区code
      KEYWORD: this.param.KEYWORD, // 关键字
      LONGITUDE: this.param.LONGITUDE, // 经度
      LATITUDE: this.param.LATITUDE, // 纬度
      CODE: this.param.CODE, // 点位类型
      pagesNum: this.param.pagesNum, // 页码
      pageSize: this.param.pageSize, // 每页数量
    }
    // 请求接口
    this.mapService.getMapPoint(param, true, res => {
      if (res && res.data && res.data.length > 0) {
        // 计算大致经纬度范围
        let minX = 0;
        let maxX = 0;
        let minY = 0;
        let maxY = 0;
        for (const point of res.data) {
          let imgUrl = ''; // 点位类型图标
          for (const type of this.pages.selectType) {
            if (type.name.includes(point.TYPE)) {
              imgUrl = type.icon;
            }
          }
          if (point.LONGITUDE && point.LATITUDE) {  // 只计算正常的数据点位，如果有不正产的点位不在计算之内
            // 每次打点前进行地图区域范围更新
            if (minX === 0 || point.LONGITUDE < minX) {
              minX = point.LONGITUDE;
            }
            if (maxX === 0 || point.LONGITUDE > maxX) {
              maxX = point.LONGITUDE;
            }
            if (minY === 0 || point.LATITUDE < minY) {
              minY = point.LATITUDE;
            }
            if (maxY === 0 || point.LATITUDE > maxY) {
              maxY = point.LATITUDE;
            }
            // 地图点位打点
            this.thsMapService.addMarker(
              point.LONGITUDE, point.LATITUDE, this.mapInfo.layer.pointLayer.value, imgUrl,
              this.mapInfo.layer.pointLayer.picWidth, this.mapInfo.layer.pointLayer.picHeight,
              this.mapInfo.layer.pointLayer.offsetX, this.mapInfo.layer.pointLayer.offsetY,
              this.mapInfo.layer.pointLayer.wkid, point
            );
          }
        }
        // 根据地图点位确定大致地图范围
        this.thsMapService.setExtent(this.mapInfo.mapView, minX, minY, maxX, maxY, 4326);
      }
    })

  }

  /**
   * 地图图层点击事件
   */
  mapClick(): void {
    // 当点击非污染源的地方时，隐藏污染源点位提示框
    this.mapInfo.mapView.on('click', (item) => {
      // 点击的是污染源点位的时候显示弹框
      if (item.graphic && item.graphic.attributes && (item.graphic._graphicsLayer.id === this.mapInfo.layer.pointLayer.name)) {
        // 展示弹框
        this.isShowDetail = true;
        // 隐藏图例
        this.pages.isLegend = false;
        // 将点位信息写入到弹框中
        this.pages.popUpInfo.name = item.graphic.attributes.NAME;
        this.pages.popUpInfo.lon = item.graphic.attributes.LONGITUDE;
        this.pages.popUpInfo.lat = item.graphic.attributes.LATITUDE;
        this.pages.popUpInfo.distance = item.graphic.attributes.DISTANCE;
        this.pages.popUpInfo.address = item.graphic.attributes.ADDRESS;
        this.pages.popUpInfo.code = item.graphic.attributes.CODE;
        this.pages.popUpInfo.type = item.graphic.attributes.TYPE;
        // 将点击的点位定位到中心位置
        this.thsMapService.centerAndZoom(this.mapInfo.mapView, this.pages.popUpInfo.lon, this.pages.popUpInfo.lat)
        return;
      }
      // 隐藏弹框
      this.isShowDetail = false;
      // }
    })
  }

  /**
   * 点击顶部行政区事件
   */
  openPicker(): void {
    // 展示行政区多选组件
    this.provietSelect = true;
  }

  /**
   * 创建地图所需要的图层
   */
  async setMapLayer(): Promise<any> {
    //  地图县级边界图层
    this.mapInfo.layer.cityLayer.value = await this.thsMapService.addGraphicsLayer(this.mapInfo.mapView, this.mapInfo.layer.cityLayer.name);
    // 用户地理位置图标
    this.mapInfo.layer.userLayer.value = await this.thsMapService.addGraphicsLayer(this.mapInfo.mapView, this.mapInfo.layer.userLayer.name);
    // 地图点位数据
    this.mapInfo.layer.pointLayer.value = await this.thsMapService.addGraphicsLayer(this.mapInfo.mapView, this.mapInfo.layer.pointLayer.name);
  }

  /**
   * 移除图层中的所有图形
   * @param layerName: 图层名称
   */
  clearLayer(layerName: string): void {
    // 移除图层数据
    this.thsMapService.clearLayer(this.mapInfo.mapView, layerName);
  }

  /*********************多级联动 -star */
  /**
   * 第一级列表数据点击
   * @param item 第一级数据
   */
  selectProvince(item: { [key: string]: any }): void {
    // this.currentProvince = item;
    this.currentProvince.text = item.text;
    this.currentProvince.value = item.value;
    this.currentProvince.children = item.children
    if (item.children.length !== 0) {
      ++this.currentIndex;
    }
    this.cityArr = item.children;
    // console.log(this.cityArr);
  }

  /**
   * 第二级列表数据点击
   */
  selectCity(item: { [key: string]: any }): void {
    // this.currentCity = item;
    this.currentCity.text = item.text;
    this.currentCity.value = item.value;
    this.currentCity.children = item.children
    if (item.children.length !== 0) {
      ++this.currentIndex;
    }
    this.countryArr = item.children;
  }

  /**
   * 第三级列表数据点击
   */
  selectCountry(item: { [key: string]: any }): void {
    // this.currentCountry = item;
    this.currentCountry.text = item.text;
    this.currentCountry.value = item.value;
    this.currentCountry.children = item.children
  }

  /**
   * 点击省份
   */
  clickProvince(): void {
    this.currentCity = {
      text: '',
      value: '',
      children: []
    }; // 当前选中的市级
    this.currentCountry = {
      text: '',
      value: '',
      children: []
    }; // 当前选中的县级
    this.currentIndex = 1;
  }

  /**
   * 点击市州
   */
  clickCity(): void {
    this.currentCountry = {
      text: '',
      value: '',
      children: []
    }; // 当前选中的县级
    this.currentIndex = 2;
  }

  /**
   * 点击区县
   */
  clickCountry(): void {
    this.currentIndex = 3;
  }

  /**
   * 点击确定
   */
  selectRegionOk(): void {
    const currentSelectData = {
      message: '已选择值',
      provinceName: this.currentProvince.text,
      provinceCode: this.currentProvince.value,
      cityName: this.currentCity.text,
      cityCode: this.currentCity.value,
      countryName: this.currentCountry.text,
      countryCode: this.currentCountry.value
    };
    this.provietSelect = false;
    const citeName = this.getRegionSelectInfo(currentSelectData); // 值的返回形式处理
    //  重新渲染地图数据
    this.param.REGION_CODE = citeName.code;
    this.putPoint();
    if (citeName.countryName !== '') {
      this.pages.title = citeName.countryName;
      // 渲染默认区域地图样式
      this.getCityJSON(citeName.countryCode, 'assets/data/county.json');
      return;
    }
    if (citeName.cityName !== '') {
      this.pages.title = citeName.cityName;
      // 渲染默认区域地图样式
      this.getCityJSON(citeName.cityCode, 'assets/data/city.json');
      return;
    }
    if (citeName.provinceName !== '') {
      this.pages.title = citeName.provinceName;
      // 渲染默认区域地图样式
      this.getCityJSON(citeName.provinceCode, 'assets/data/provice.json');
      return;
    }

  }

  /**
   * 点击取消
   */
  closeComponent(): void {
    const closeData = {
      message: '取消选择'
    };
    this.provietSelect = false;
  }

  /**
   * 返回最后我们需要的最后一级的值
   * @param data 获取到的三级值
   */
  getRegionSelectInfo(data: { [key: string]: string }): { [key: string]: string } {
    let infoTmp = {};
    if (data.countryName) { // 区县有值
      infoTmp = {
        name: data.countryName,
        code: data.countryCode
      }
    } else {
      if (data.cityName) { // 市有值
        infoTmp = {
          name: data.cityName,
          code: data.cityCode
        }
        // this.selectInfoArr[this.selectionIndex] = infoTmp;
      } else {
        if (data.provinceName) { // 省有值
          infoTmp = {
            name: data.provinceName,
            code: data.provinceCode
          }
          // this.selectInfoArr[this.selectionIndex] = infoTmp;
        } else {
          infoTmp = {
            name: '',
            code: ''
          }
        }
      }
    }

    const selectData = Object.assign(data, infoTmp);
    console.log(selectData);
    return selectData;
  }

  /*********************多级联动 -end */
  /**
   * 获取上一个页面的参数
   * @param param 路由传递参数的字段名
   */
  getRouterParams(param: string): string {
    return this.activatedRoute.snapshot.paramMap.get(param);
  }

  /**
   * 跳转到对应类型的数据详情页面
   * @param type 对应类型的名称
   * @param id 数据的id
   * @param title 跳转页面之后的题目
   */
  toModelPage(type: string, id: string, title: string): void {
    // 跳转路由
    let routeUrl = '';
    // 传递参数
    let query = {};
    switch (type) {
      case '重点行业企业':
        routeUrl = 'key-industry/key-industry-list';
        query = {
          id,
          title
        }
        break;
      case '建设用地':
        routeUrl = 'agricultural-land/agricultural-land-detail-list';
        query = {
          id,
          title
        }
        break;
      case '地下水':
        routeUrl = 'agricultural-land/agricultural-land-detail-list';
        query = {
          id,
          title
        }
        break;
      case '农用地':
        routeUrl = 'agricultural-land/agricultural-land-detail-list';
        query = {
          id,
          title
        }
        break;
      case '农村污染处理设施':
        routeUrl = 'agricultural-land/agricultural-land-detail-list';
        query = {
          id,
          title
        }
        break;
      case '农村生活垃圾处理':
        routeUrl = 'agricultural-land/agricultural-land-detail-list';
        query = {
          id,
          title
        }
        break;
      case '农村饮用水水源地':
        routeUrl = 'agricultural-land/agricultural-land-detail-list';
        query = {
          id,
          title
        }
        break;
      case '畜禽养殖':
        routeUrl = 'agricultural-land/agricultural-land-detail-list';
        query = {
          id,
          title
        }
        break;
      case '农村黑臭水体':
        routeUrl = 'agricultural-land/agricultural-land-detail-list';
        query = {
          id,
          title
        }
        break;
    }
    // 路由跳转
    this.router.navigate([routeUrl, query]);
  }

  /**
   * 获取用户当前定位信息
   */
  getUserLocation(): void {
    this.commService.getUserLocation(res => {
      // 获取用户经纬度
      this.param.LONGITUDE = res.longitude;
      this.param.LATITUDE = res.latitude;
    })
  }

  /**
   * 获取点位周边地址名称
   */
  getAroundInfo(): void {
    // 请求参数
    const param = {
      ak: this.configService.baiduAK,
      location: `${this.param.LONGITUDE},${this.param.LATITUDE}`,
    };
    // 请求接口
    this.mapService.getAroundName(param, false, res => {
      // 跳转到我的周边页面
      this.router.navigate(['map/around', { lon: this.param.LONGITUDE, lat: this.param.LATITUDE, title: res.roads.name}])
    })
  }
}
