import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { GroundWaterService } from '../../services/business/ground-water/ground-water.service';
import { ConfigService } from '../../services/config/config.service';
import { IonInfiniteScroll } from '@ionic/angular';

/**
 * 地下水页面
 */
@Component({
  selector: 'app-groundwater',
  templateUrl: './groundwater.page.html',
  styleUrls: ['./groundwater.page.scss'],
})
export class GroundwaterPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true })
  infiniteScroll: IonInfiniteScroll;

  public titleArr = [{
    code: '1',
    name: '全部'
  }, {
    code: '2',
    name: '收藏'
  }];
  public titleChecked = ''; // 标题选中的项
  public showContent = 'total'; // 显示的内容
  public keywords = ''; // 搜索关键词
  public pageNum = 1; // 当前页页码
  public pageSize = 10; // 每页展示数据项条数
  public params = {
    loginName: this.configService.loginInfo.loginName,
    REGION_CODE: '',
    REGION_NAME: '',
    TREE_CODE: '',
    KEYWORD: '',
    LONGITUDE: '',
    LATITUDE: '',
    IS_COLLECTION: '',
    pageNum: 1,
    pageSize: 10
  }; // 地下水列表请求参数

  // 组建下拉框菜单选项
  public selectionList = [
    {
      name: '地市',
      type: '1', // 2 多级联动  1 单选
      dropDownContentList: [
        {
          name: '全部',
          code: ''
        },
        {
          name: '南昌市',
          code: '1'
        },
        {
          name: '九江市',
          code: '2'
        }
      ],
      selection: '',
      width: '20%'
    },
    {
      name: '区县',
      type: '1',
      selectionName: 'name',
      dropDownContentList: [
        {
          name: '全部',
          code: ''
        },
        {
          name: '西华县',
          code: '1'
        },
        {
          name: '淮阳县',
          code: '2'
        }
      ],
      selection: '',
      width: '20%'
    },
    {
      name: '类型',
      type: '1',
      selectionName: 'name',
      dropDownContentList: [
        // {
        //   name: '全部',
        //   code: ''
        // },
        // {
        //   name: '是',
        //   code: '1'
        // },
        // {
        //   name: '否',
        //   code: '0'
        // }
      ],
      selection: '',
      width: '20%'
    },
    {
      name: '水质类别',
      type: '1',
      selectionName: 'name',
      dropDownContentList: [
        //   {
        //     name: '全部',
        //     code: ''
        //   },
        //   {
        //     name: 'I',
        //     code: '0'
        //   },
        //   {
        //     name: 'II',
        //     code: '1'
        //   },
        //   {
        //     name: 'III',
        //     code: '2'
        //   },
        //   {
        //     name: 'IV',
        //     code: '3'
        //   },
        //   {
        //     name: 'IV',
        //     code: '4'
        //   }
      ],
      selection: '',
      width: '20%'
    }
  ];

  // 地表水列表内容
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
      // {
      //   title: '江西省恒生制衣有限公司',
      //   isCollect: true, // 是否已经被收藏
      //   isShowCollect: true, // 是否显示收藏按钮
      //   addressInfo: {
      //     range: '100',
      //     location: '北京市昌平区沙河镇'
      //   },
      //   otherInfo: [
      //     {
      //       name: '行业类别',
      //       value: '你瞅瞅，你这写的都是啥你瞅瞅，你这写的都是啥你瞅瞅，你这写的都是啥你瞅瞅，你这写的都是啥你瞅瞅，你这写的都是啥你瞅瞅，你这写的都是啥'
      //     },
      //     {
      //       name: '行业类别2',
      //       value: '你瞅瞅，你这写的都是啥'
      //     },
      //     {
      //       name: '行业类别3',
      //       value: '你瞅瞅，你这写的都是啥'
      //     },
      //   ]
      // },
      // {
      //   title: '江西省恒生制衣有限公司',
      //   isCollect: false, // 是否已经被收藏
      //   isShowCollect: true, // 是否显示收藏按钮
      //   addressInfo: {
      //     range: '100',
      //     location: '北京市昌平区沙河镇'
      //   },
      //   otherInfo: [
      //     {
      //       name: '行业类别',
      //       value: '你瞅瞅，你这写的都是啥'
      //     },
      //     {
      //       name: '行业类别2',
      //       value: '你瞅瞅，你这写的都是啥'
      //     },
      //     {
      //       name: '行业类别3',
      //       value: '你瞅瞅，你这写的都是啥'
      //     },
      //   ]
      // },
      // {
      //   title: '江西省恒生制衣有限公司',
      //   isCollect: false, // 是否已经被收藏
      //   isShowCollect: true, // 是否显示收藏按钮
      //   addressInfo: {
      //     range: '100',
      //     location: '北京市昌平区沙河镇'
      //   },
      //   otherInfo: [
      //     {
      //       name: '行业类别',
      //       value: '你瞅瞅，你这写的都是啥'
      //     },
      //     {
      //       name: '行业类别2',
      //       value: '你瞅瞅，你这写的都是啥'
      //     },
      //     {
      //       name: '行业类别3',
      //       value: '你瞅瞅，你这写的都是啥'
      //     },
      //   ]
      // }
    ]
  }

  // 首页页面跳转模块相应的信息
  private moduleRouter = {
    survey: {
      name: '概况', // 模块名称
      route: 'survey' // 模块路由
    },
    keyIndustry: {
      name: '重点行业企业',
      route: 'key-industry'
    },
    constructionLand: {
      name: '建设用地',
      route: 'construction-land'
    },
    agriculturalLand: {
      name: '农用地',
      route: 'agricultural-land'
    },
    ruralEnvironment: {
      name: '农村环境',
      route: 'rural-environment'
    },
    groundwater: {
      name: '地下水',
      route: 'groundwater'
    },
    library: {
      name: '文件库',
      route: 'library'
    },
    my: {
      name: '我的',
      route: 'my'
    },
    map: {
      name: '地图',
      route: 'map'
    }
  }

  constructor(
    private router: Router,
    private groundWaterService: GroundWaterService,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.titleChecked = this.titleArr[0].code;
    // 获取地下水列表
    this.getGroundWaterList('', true);
    // 地下水水质类别数据
    this.getGroundWaterLevel();
    // 地下水类型数据
    this.getGroundWaterType();
  }

  /**
   * 标题切换
   * @param code 标题选中的项
   * @param index 点击tab切换的索引
   */
  changeTitle(code: string, index: number): void {
    this.titleChecked = code;
    // 点击tab切换，显示对应内容
    this.showContent = index === 0 ? 'total' : 'collect';
    // this.currChecked.emit(this.titleArr[index]);
  }

  /**
   * 选中下拉款展示的条件之后
   * @param selectionInfo 当前选中的信息
   */
  ionChangeArea(selectionInfo: any[]): void {
    console.log(selectionInfo);
    // 改变地下水列表的请求参数，重新调用请求接口
    if (selectionInfo[1] === 0) { // 地市
      this.params.REGION_CODE = selectionInfo[0].code;
    } else if (selectionInfo[1] === 1) { // 区县
      this.params.REGION_NAME = selectionInfo[0].code;
    } else if (selectionInfo[1] === 2) { // 类型
      this.params.TREE_CODE = selectionInfo[0].code;
    } else if (selectionInfo[1] === 3) { // 水质类别
      this.params.TREE_CODE = selectionInfo[0].code;
    }
    // 重新调用地下水列表接口
    this.getGroundWaterList('', true); // 此时需要要pageNum设为1吗
  }

  /**
   * 确认时间
   * @param timeSolt 时间段
   */
  confirmTime(timeSolt) {
    console.log(timeSolt);
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
   * 收藏按钮被点击事件
   * @param item 需要操作元素的序号
   */
  getCollect(item) {
    console.log('收藏点击事件', item);
    this.page.listInfo[item].isCollect = !this.page.listInfo[item].isCollect;
  }

  /**
   * 导航事件
   * @param item 需要操作元素的序号
   */
  getNavigation(item) {
    console.log('开启导航功能', item);
  }

  /**
   * 列表点击事件
   * @param item 需要操作列表的序号
   */
  getItemClick(item) {
    this.router.navigate(['groundwater/water-source'], {queryParams: {title: item.title, code: item.code}});
  }

  /**
   * 跳转到对应的页面
   * @param name 点击模块的名称
   */
  toModule(name) {
    // 页面跳转，通过模块名称来查询对应的路由
    this.router.navigate([this.moduleRouter[name].route]);
  }

  /**
   * 获取地下水列表数据
   */
  getGroundWaterList(e, showLoading) {
    this.groundWaterService.getGroundWaterList(this.params, showLoading, (res) => {
      if (e) {
        e.target.complete();
      }
      if (res && res.data) {
        const infoList = [];
        for (const item of res.data) {
          const infoItem = {
            title: item.SOURCE_NAME,
            code: item['业务code'],
            isCollect: item.IS_COLLECTION,
            isShowCollect: true, // 是否显示收藏按钮
            addressInfo: {
              range: item.DISTANCE,
              location: item.REGION_NAME
            },
            otherInfo: [
              {
                name: '点位类型',
                value: item.pointType
              },
              {
                name: '水质类别',
                value: item.CATEGORY
              }
            ]

          };
          infoList.push(infoItem);
        }

        if (e.type === 'ionInfinite') { // 下拉加载
          this.page.listInfo = this.page.listInfo.concat(infoList);
        } else {
          this.page.listInfo = infoList;
        }

        // 如果是最后一页
        if (this.params.pageSize > res.data.length) {
          this.infiniteScroll.disabled = true;
        }
      }
    });
  }

  /**
   * 下拉刷新
   * @param e 下拉事件对象
   */
  doRefresh(e) {
    this.params.pageNum = 1;
    this.infiniteScroll.disabled = false;
    this.getGroundWaterList(e, true);
  }

  /**
   * 上拉加载
   * @param e 上拉加载对象
   */
  loadData(e) {
    console.log('上拉加载');
    this.params.pageNum++;
    this.getGroundWaterList(e, true);
  }

  /**
   * 把接口获取的下拉框数据，转换字段名为{ name: '', code: ''}的形式
   * @param dataArr 需要转换的数组
   */
  transferFieldName(dataArr: { [key: string]: string }[]): any[] {
    const dropDownContentList = [];
    // 遍历数据，换成name和code的字段名
    for (const item of dataArr) {
      const typeItem = {
        name: item.DICTIONARY_NAME,
        code: item.DICTIONARY_CODE
      }
      dropDownContentList.push(typeItem);
    }
    return dropDownContentList;
  }

  /**
   * 获取地下水水质类别
   */
  getGroundWaterLevel() {
    const params = {
      TREE_CODE: 'CATEGORY'
    };
    this.groundWaterService.getGroundWaterType(params, true, (res) => {
      if (res.data && res.data.length > 0) {
        // 把数据转化为{ name: '', code: ''}的形式
        const dropDownContentList = this.transferFieldName(res.data);
        // 下拉框中增加一个选择提示字段
        dropDownContentList.unshift({ name: '全部', code: '' });
        // 把转换后的数据赋值给下拉相应数据字段
        this.selectionList[3].dropDownContentList = dropDownContentList;
      }
    });
  }

  /**
   * 获取地下水类型
   */
  getGroundWaterType() {
    const params = {
      TREE_CODE: 'FACILITIES'
    };
    this.groundWaterService.getGroundWaterType(params, true, (res) => {
      if (res.data && res.data.length > 0) {
        // 把数据转化为{ name: '', code: ''}的形式
        const dropDownContentList = this.transferFieldName(res.data);
        // 下拉框中增加一个选择提示字段
        dropDownContentList.unshift({ name: '全部', code: '' });
        // 把转换后的数据赋值给下拉相应数据字段
        this.selectionList[2].dropDownContentList = dropDownContentList;
      }
    });
  }





}
