import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, IonRouterOutlet, IonSearchbar, PickerController, Platform } from '@ionic/angular';
import { CameraService } from 'src/app/services/camera/camera.service';
import { FilePath } from '@ionic-native/file-path/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FileTransferService } from 'src/app/services/utils/file-transfer/file-transfer.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { HttpUtilsService } from 'src/app/services/utils/http-utils/http-utils.service';
import { CommService } from 'src/app/services/business/comm/comm.service';

/**
 * 监督管理填报、查看页面
 */
@Component({
  selector: 'app-supervision',
  templateUrl: './supervision.page.html',
  styleUrls: ['./supervision.page.scss'],
})
export class SupervisionPage implements OnInit {
  @ViewChild(IonSearchbar, { static: true }) ionSearchbar: IonSearchbar;
  // 填报内容
  public reportParams = {
    LOGIN_NAME: '', // 用户账号
    SUPERVISIONTITLE: '', // 任务名称
    SUPERVISIONUNIT: '', // 单位
    SUPERVISIONTIME: '', // 检查时间
    SUPERVISIONREMARK: '', // 检查建议
    SUPERVISIONFJ: '', // 图片id
    CREATE_USER: '张三', // 上报人
    CREATE_DATE: '', // 上报时间
    isLocation: true, // 是否记录位置
    LON: 0, // 经度
    LAT: 0, // 纬度
    TYPE: '', // 模块code
    PKID: '', // 业务id
  }
  // 页面元素
  public pages = {
    isSubmit: false, // 是否是已经提交的
    isImgs: false, // 是否存在附件
    title: '', // 页面标题
    imgMaxNumber: 7, // 最大图片个数
    isLocation: true, // 是否开启位置信息
    reportTime: '', // 上报时间
    imgsUrl: [], // 图片路径
    videoUrl: [], // 视频路径
  }
  // 上传图片数组
  public photoShowList = [];
  // 上传视频数组
  public videoShowList = [];
  // 上传文件数组
  public attachmentShowList = [];
  // 上传失败
  public uploadFailed = '上传失败';
  // 提示信息
  public tip = {
    submitTip: '正在上传文件，请稍等！',
    contentTip: '内容不能为空',
    wait: '等待数据请求,请稍后重试',
    tooBig: '文件太大，请重新选择'
  };
  // 已上传文件个数
  public isSubmit = 0;
  // 附件
  private annexId = '';
  constructor(
    private router: Router, // 路由
    private configService: ConfigService, // 基本配置信息
    private activatedRoute: ActivatedRoute, // 获取路由参数
    private cameraService: CameraService, // 引入拍照服务
    private platform: Platform, // 平台
    private filePath: FilePath, // 文件上传
    private change: ChangeDetectorRef,
    private webView: WebView,
    private actionSheetCtrl: ActionSheetController,
    private pickerController: PickerController,
    private sanitizer: DomSanitizer,
    private fileTransferService: FileTransferService,
    private config: ConfigService,
    private httpUtilsService: HttpUtilsService,
    private commService: CommService, // 公共接口
    private ionRouterOutlet: IonRouterOutlet, // 路由历史记录
  ) { }

  ngOnInit() {
    // 获取用户账号
    this.reportParams.LOGIN_NAME = this.config.loginInfo.loginName;
    // 获取当前最新时间
    this.reportParams.CREATE_DATE = this.writeCurrentDate();
    // 页面元素是否可以编辑，路由传递参数，look只能查看
    this.pages.isSubmit = this.getRouterParams('type') === 'look' ? true : false;
    // 获取企业的title
    this.pages.title = this.getRouterParams('title');
    // 是查看页面的时候，获取已填报的内容
    if (this.pages.isSubmit) {
      // 获取页面数据
      this.getReportData();
    }
  }

  /**
   * 获取已填写的数据
   */
  getReportData(): void {
    // 监督检查上报数据，通过路由从上一个页面获取
    const temp = JSON.parse(this.getRouterParams('item'));
    // 将数据展示到页面上
    this.reportParams.SUPERVISIONTITLE = temp.SUPERVISIONTITLE;
    this.reportParams.SUPERVISIONTIME = temp.SUPERVISIONTIME;
    this.reportParams.SUPERVISIONUNIT = temp.SUPERVISIONUNIT;
    this.reportParams.SUPERVISIONREMARK = temp.SUPERVISIONREMARK;
    this.reportParams.SUPERVISIONFJ = temp.SUPERVISIONFJ;
    this.reportParams.CREATE_USER = temp.CREATE_USER;
    this.reportParams.CREATE_DATE = temp.CREATE_DATE;
    // 获取附件展示路径
    this.getFileUrl();
  }

  /**
   * 选择时间
   */
  selectDate(item: { [key: string]: any }): void {
    this.reportParams.SUPERVISIONTIME = item.detail.value.slice(0, 10);
  }

  /**
   * 拍摄或者选择
   */
  reportImg(): void {
    this.pages.isImgs = true;
    this.takePhotosOrVideo('Img');
  }

  /**
   * 提交填报的内容
   * @param type 提交类型 1 暂存 2 提交
   */
  report(type: string): any {
    // 如果开启了位置信息，就将用户的定位信息保存到参数中
    if (this.reportParams.isLocation) {
      // 定位
      this.getUserLocation();
    } else {
      // 将定位信息初始化为0
      this.reportParams.LON = 0;
      this.reportParams.LAT = 0;
    }
    // 对必填项进行验证
    if (this.reportParams.SUPERVISIONTITLE === '' ||
      this.reportParams.SUPERVISIONUNIT === '' ||
      this.reportParams.SUPERVISIONTIME === '' ||
      this.reportParams.SUPERVISIONREMARK === ''
    ) {
      if (this.reportParams.SUPERVISIONTITLE === '') {
        this.httpUtilsService.thsToast('监督管理任务名称不能为空');
        return false;
      }
      if (this.reportParams.SUPERVISIONUNIT === '') {
        this.httpUtilsService.thsToast('监督管理单位不能为空');
        return false;
      }
      if (this.reportParams.SUPERVISIONTIME === '') {
        this.httpUtilsService.thsToast('监督管理时间不能为空');
        return false;
      }
      if (this.reportParams.SUPERVISIONREMARK === '') {
        this.httpUtilsService.thsToast('监督管理意见不能为空');
        return false;
      }
      if (this.reportParams.SUPERVISIONFJ === '') {
        this.httpUtilsService.thsToast('监督管理附件不能为空');
        return false;
      }
    }
    // 拼接附件字符串
    this.getFileIds();
    // 填报参数
    const params = {
      LOGIN_NAME: this.reportParams.LOGIN_NAME, // 账号
      SUPERVISIONTITLE: this.reportParams.SUPERVISIONTITLE, // 监督管理任务名称
      SUPERVISIONUNIT: this.reportParams.SUPERVISIONUNIT, // 监督管理任务单位
      SUPERVISIONTIME: this.reportParams.SUPERVISIONTIME, // 监督管理任务时间
      SUPERVISIONREMARK: this.reportParams.SUPERVISIONREMARK, // 监督管理意见
      SUPERVISIONFJ: this.reportParams.SUPERVISIONFJ, // 监督管理附件
      CREATE_USER: this.reportParams.CREATE_USER, // 上报人
      CREATE_DATE: this.reportParams.CREATE_DATE, // 上报时间
      LON: this.reportParams.LON, // 用户经度
      LAT: this.reportParams.LAT, // 用户纬度
      SAVE_TYPE: type, // 提交类型
      TYPE: this.reportParams.TYPE, // 模块code
      PKID: this.reportParams.PKID, // 业务id
    };

    // 请求接口
    this.commService.reportSupervisonInfo(params, true, res => {
      if (res.data.result === 1) {
        this.commService.thsToast('填报成功');
        // 上报成功之后，返回到查询页面
        this.ionRouterOutlet.pop();
        return;
      }
      // 提示信息
      this.commService.thsToast('上报失败');
    })
  }

  /**
   * 获取上一个页面的参数
   * @param param 参数名称
   * @param type 操作类型   add 新增 look 查看 temp 暂存
   * @param item 页面元素内容
   * @param title 页面title
   */
  getRouterParams(param: string): string {
    return this.activatedRoute.snapshot.paramMap.get(param);
  }

  /**
   * 获取附件展示路径
   */
  getFileUrl(): void {
    if( this.reportParams.SUPERVISIONFJ !== '') { // 图片
      // 将图片id字符串分隔为数组
      const fileList = this.reportParams.SUPERVISIONFJ.split(',');
      for (const file of fileList) {
        // 图片展示路径
        const fileUrl = this.configService.downFiles + file;
        // 将图片地址封装到对象中，页面展示的时候使用disPlay属性
        const imgUrl = {
          disPlay: fileUrl, // 展示路径
          id: file, // 上报的时候需要用id
        }
        // 添加到图片数组中
        this.photoShowList.push(imgUrl);
      }
    }
    // 视频文件
  }

  /**
   * 拼接附件ids
   */
  getFileIds(): void {
    if (this.photoShowList.length !== 0) {
      // 需要上传的图片的id数组
      const imgIds = [];
      for (const file of this.photoShowList) {
        imgIds.push(file.id);
      }
      // 将图片id数组转化为字符串
      this.reportParams.SUPERVISIONFJ = imgIds.join(',');
    }
  }

  /**
   * 拍摄或选择照片
   * @param type Img:图片；Video视频
   */
  takePhotosOrVideo(type: string): void {
    this.cameraService.selectPic(async (imgOrVideoUrl: string, fileType: string) => {
      if (this.platform.is('android')) {
        try {
          imgOrVideoUrl = await this.filePath.resolveNativePath(imgOrVideoUrl);
        } catch (error) {
        }
      }
      this.uploadFile(imgOrVideoUrl, fileType);
    }, type);
  }

  /**
   * 播放视频
   * @param url 视频播放路径
   */
  playVideo(url: string): void {
    this.cameraService.play(url)
  }

  /**
   * 上传文件
   * @param fileUrl 本地路径
   * @param type Img:图片，Video视频，Attachment附件
   */
  uploadFile(fileUrl, type) {
    // alert(fileUrl);
    // 获取文件名称
    const pathArr = fileUrl.split('/');
    const fileName = `${new Date().getTime()}${pathArr[pathArr.length - 1]}`;
    const showUrl = {
      displayUrl: this.sanitizer.bypassSecurityTrustResourceUrl(this.webView.convertFileSrc(fileUrl)),
      id: '',
      name: fileName,
      path: '',
      isSpeed: true,
      processNum: '上传0%'
    };
    // alert(showUrl.displayUrl);
    if (type === 'Img') {
      this.photoShowList.push(showUrl);
    } else if (type === 'Video') {
      this.videoShowList.push(showUrl);
    } else if (type === 'Attachment') {
      this.attachmentShowList.push(showUrl);
    } else {
      return;
    }
    this.isSubmit++;
    this.change.detectChanges();
    // 接口参数
    const types = type === 'Img' ? 'pic' : type === 'Video' ? 'video' : type === 'Attachment' ? 'attachment' : '';
    let listType = '';
    if (type === 'Img') {
      listType = 'photo';
    } else if (type === 'Video') {
      listType = 'video';
    } else if (type === 'Attachment') {
      listType = 'attachment';
    }
    const fileObj = this[`${listType}ShowList`][this[`${listType}ShowList`].length - 1];
    this.sendFileToServe(fileUrl, fileName, types, fileObj);
  }

  /**
   * 调用服务，上传文件
   * @param fileUrl 文件本地地址
   * @param fileName 文件名字
   * @param types 上传的类型
   * @param fileObj 保存当前上传文件的信息
   */
  private sendFileToServe(fileUrl: any, fileName: string, types: string, fileObj: any) {
    this.fileTransferService.fileUpload(this.config.rap2Host + this.config.fileUploadUrl, fileUrl, {
      fileKey: 'fileKey',
      annexId: this.annexId,
      fileName,
      type: types
    }, (data) => {
      let res;
      // 参数
      if (data && data.responseCode === 200) {
        res = JSON.parse(data.response);
      } else {
        fileObj.processNum = this.uploadFailed;
        this.isSubmit--;
        this.httpUtilsService.thsToast(this.uploadFailed);
      }
      if (res && res.state === '1') {
        this.isSubmit--;
        // 接口返回的fileID和path进行赋值
        fileObj.id = res.ret.fileID;
        fileObj.path = res.ret.path;
        fileObj.isSpeed = false;
        this.change.detectChanges();
      } else {
        fileObj.processNum = this.uploadFailed;
        this.isSubmit--;
        this.httpUtilsService.thsToast(this.uploadFailed);
      }
    }, (event: ProgressEvent) => {
      if (event.loaded === 0 || Math.ceil(event.loaded / event.total * 100) === 100) {
        fileObj.processNum = '上传' + (event.loaded / event.total * 100).toFixed(0) + '%';
      } else {
        fileObj.processNum = '上传' + (event.loaded / event.total * 100).toFixed(1) + '%';
      }
      this.change.detectChanges();
    });
  }

  /**
   * 获取用户当前定位信息
   */
  getUserLocation(): void {
    this.commService.getUserLocation(res => {
      console.log(res);
      this.reportParams.LON = res.longitude;
      this.reportParams.LAT  = res.latitude;
    })
  }

  /**
   * 获取当前时间
   */
  writeCurrentDate(): string {
    const now = new Date();
    const year = now.getFullYear(); // 得到年份
    let month = now.getMonth(); // 得到月份
    const date = now.getDate(); // 得到日期
    const day = now.getDay(); // 得到周几
    const hour = now.getHours(); // 得到小时
    const minu = now.getMinutes(); // 得到分钟
    const sec = now.getSeconds(); // 得到秒
    const MS = now.getMilliseconds(); // 获取毫秒
    let smonth, sdate, shour, sminu, sMS, ssec;
    month = month + 1;
    smonth = month;
    sdate = date;
    shour = hour;
    sminu = minu;
    ssec = sec;
    sMS = MS;
    if (month < 10) smonth = `0${month}`;
    if (date < 10) sdate = '0' + date;
    if (hour < 10) shour = '0' + hour;
    if (minu < 10) sminu = '0' + minu;
    if (sec < 10) ssec = '0' + sec;
    if (MS < 100) sMS = '0' + MS;
    let time = '';
    // time = year + '年' + month + '月' + date + '日' + ' ' + hour + ':' + minu + ':' + sec;
    time = year + '-' + smonth + '-' + sdate + ' ' + shour + ':' + sminu + ':' + ssec;
    return time;
  }

}
