import { Component, OnInit, ViewChild } from '@angular/core';
import { LibraryService } from 'src/app/services/business/library/library.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

/**
 * 文件库页面
 */
@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true })
  infiniteScroll: IonInfiniteScroll;
  // @ViewChild(IonContent, { static: true }) content: IonContent;

  // 组建下拉框菜单选项
  public selectionList = [
    {
      name: '类型',
      type: '1', // 1 单选 2 多级联动
      selectionName: 'name',
      dropDownContentList: [
        {
          name: '全部',
          code: ''
        },
        {
          name: '一级',
          code: '001'
        },
        {
          name: '二级',
          code: '002'
        },
        {
          name: '三级',
          code: '003'
        }
      ],
      selection: '',
      width: '50%'
    },
    {
      name: '级别',
      type: '1',
      selectionName: 'name',
      dropDownContentList: [
        {
          name: '全部',
          code: ''
        },
        {
          name: '国家级',
          code: '001'
        },
        {
          name: '省级',
          code: '002'
        },
        {
          name: '市级',
          code: '003'
        }
      ],
      selection: '',
      width: '50%'
    }
  ];
  public showContent = 'total'; // 显示的内容
  public fileList = []; // 文件列表数据
  public fileType = []; // 文件类型数据
  public fileLevel = []; // 文件级别数据

  // 文件库列表请求参数
  public fileListParams = {
    LOGIN_NAME: this.configService.loginInfo.loginName,
    TYPE: '',
    LEVEL: '',
    pageSize: 10, // 页码
    pageNum: 1 // 每页的数量
  }; 
  

  constructor(
    private libraryService: LibraryService,
    private configService: ConfigService,
    private router: Router
  ) { }

  ngOnInit() {

    // 获取文件库列表数据
    this.getFileLiarbryList('', true);

    // 获取文件类型数据
    this.getFileType();

    // 获取文件级别数据
    this.getFileLevel();
  }

  /**
   * 获取文件库列表数据
   * @param event 上拉，下拉事件
   * @param showLoading 显示加载样式
   */
  getFileLiarbryList(event, showLoading: boolean) {
    this.libraryService.getFileLiarbryList(this.fileListParams, showLoading, (res)=>{
      if(event) {
        event.target.complete(); // 关闭加载事件
      }
      if(res.data && res.data.length>0) {
        // 如果是上拉加载
        if(event.type === 'ionInfinite') {
          this.fileList = this.fileList.concat(res.data);
        } else {
          this.fileList = res.data;
        }

        // 如果是最后一页
        if(this.fileListParams.pageSize > res.data.length) {
          console.log('最后一页');
          this.infiniteScroll.disabled = true;
        }
      }
    });
  }

  /**
   * 获取文件类型
   */
  getFileType() {
    const params = {
      LOGIN_NAME: this.configService.loginInfo.loginName,
      TREE_CODE: 'TEN_TYPE'
    };
    this.libraryService.getFileType(params, true, (res)=>{
      if(res.data && res.data.length>0) {
        this.fileType = res.data;
      }
    });
  }

  /**
   * 获取文件级别
   */
  getFileLevel() {
    const params = {
      LOGIN_NAME: this.configService.loginInfo.loginName,
      TREE_CODE: 'TEN_LEVEL'
    };
    this.libraryService.getFileLevel(params, true, (res)=>{
      if(res.data && res.data.length>0) {
        this.fileLevel = res.data;
      }
      console.log(res);
    });
  }

  /**
   * 选中下拉款展示的条件之后
   * @param selectionInfo 当前选中的信息
   */
  ionChangeArea(selectionInfo) {
    const { code } = selectionInfo[0];
    const selectItem = selectionInfo[1]; // 0类型 1 级别

    // 点击类型或级别选项后，1.改变请求接口的参数，2.请求接口
    if(selectItem === 0 && code) { // 点击的是类型选项
      this.fileListParams.TYPE = code;
    } 
    if(selectItem === 1 && code) { // 点击的是级别选项
      this.fileListParams.LEVEL = code;
    }
    this.getFileLiarbryList('', true);
  }

  /**
   * 确认时间
   * @param timeSolt 时间段
   */
  confirmTime(timeSolt) {
    console.log(timeSolt);
  }

  /**
   * 下拉刷新事件
   * @param e 下拉刷新内容
   */
  doRefresh(e) {
    this.infiniteScroll.disabled = false;
    this.fileListParams.pageNum = 1;
    this.getFileLiarbryList(e, true);

  }

  /**
   * 上拉加载更多事件
   * @param e 加载
   */
  loadData(e) {
    this.fileListParams.pageNum++;
    this.getFileLiarbryList(e, true);
  }

  /**
   * 点击后跳转到文件库详情页
   * @param item 文件列表项
   */
  goDetailPage(item) {
    const navigationExtras: NavigationExtras = {
      state: {
        item
      }
    };
    this.router.navigate(['library/library-detail'], navigationExtras)
  }
}
