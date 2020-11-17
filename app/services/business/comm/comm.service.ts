import { Injectable } from '@angular/core';
import { ActionSheetController, AlertController, MenuController, ModalController, NavController, PopoverController, ToastController } from '@ionic/angular';
import { HttpService } from '../../utils/http-service/http.service';
import { ThsLocationService } from '../../utils/ths-location/ths-location.service';
declare let navigator;

@Injectable({
  providedIn: 'root'
})
export class CommService {
  private backButtonPressed = false;
  public toast = null;
  constructor(
    public alertCtrl: AlertController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public popoverCtrl: PopoverController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private http: HttpService, // 接口转换服务
    private thsLocationService: ThsLocationService, // 定位
  ) { }

  /**
   * 获取下拉菜单中的字典项
   * @param params 请求参数 FACILITIES 污水处理设施 FM_CROPSTYPE 农作物类型 TEN_TYPE 文件库类型 TEN_LEVEL 文件库级别
   * @param isShowing 是否显示加载动画
   * @param callback 回调函数
   */
  getMenu(params: {[key: string]: string}, isShowing: boolean, callback: (res: {[key: string]: {[item: string]: unknown}[]}) =>void): void {
    this.http.getData('getMenu', params, isShowing, callback);
  }

  /**
   * 获取监督管理历史数据
   * @param params 请求参数
   * @param isShowing 是否显示加载动画
   * @param callback 回调函数，返回列表数据
   */
  getSupervisionHistoryList(params: {[key: string]: any }, isShowing: boolean, callback: (res: {[key: string]: {[item: string]: any}[]}) =>void): void {
    this.http.getData('getSupervisionHistoryList', params, isShowing, callback);
  }

  /**
   * 改变相关业务的收藏状态
   * @param params 请求参数 模块code、 业务code、 是否被收藏、登录账号
   * @param isShowing 是否显示加载动画
   * @param callback 回调函数，返回业务收藏状态是否改变
   */
  postIsCollection(params: {[key: string]: any}, isShowing: boolean, callback: (res: {[key: string]: {[item: string]: unknown}[]}) =>void): void {
    this.http.postData('postIsCollection', params, isShowing, callback);
  }

  /**
   * 上报监督管理数据
   * @param params 请求参数
   * @param isShowing 是否显示加载动画
   * @param callback 回调函数，返回是否上报成功的状态
   */
  reportSupervisonInfo(params: {[key: string]: any}, isShowing: boolean, callback: (res: {[key: string]: {[item: string]: unknown}}) =>void): void {
    this.http.postData('reportSupervisonInfo', params, isShowing, callback);
  }

  /**
   * 获取用户当前定位信息
   */
  getUserLocation(callback: (res: {[key: string]: any}) =>void): void {
    // 获取用户定位点
    const res = {
     longitude: 110.110,
     latitude: 27.5000
    }
    callback(res);
    // this.thsLocationService.startLocation().then(res => {
    //   callback(res)
    // })
  }

  /**
   * 判断是否有弹出层，有则关闭，没有则最小化应用
   */
  async androidBackButtonHandle(cangoBack: boolean, isLogin: boolean): Promise<any> {
    const alert = await this.alertCtrl.getTop();
    if (alert) {
      alert.dismiss();
      return;
    }
    const action = await this.actionSheetCtrl.getTop();
    if (action) {
      action.dismiss();
      return;
    }
    const popover = await this.popoverCtrl.getTop();
    if (popover) {
      popover.dismiss();
      return;
    }
    const modal = await this.modalCtrl.getTop();
    if (modal) {
      modal.dismiss();
      return;
    }
    const isOpen = await this.menuCtrl.isOpen();
    if (isOpen) {
      this.menuCtrl.close();
      return;
    }
    if (cangoBack) {
      this.navCtrl.pop();
    } else {
      this.showExit(isLogin);
    }
  }

  /**
   * app最小化的方法
   */
  showExit(isLogin: boolean): void {
    // 如果为true，退出
    if (this.backButtonPressed || isLogin) {
      this.backButtonPressed = false;
      // this.appMinimize.minimize();
      navigator.app.exitApp(); // 退出app
    } else {
      // 第一次按，弹出Toast
      this.thsToast('再按一次退出应用');
      // 标记为true
      this.backButtonPressed = true;
      // 两秒后标记为false，如果退出的话，就不会执行了
      setTimeout(() => this.backButtonPressed = false, 2000);
    }
  }

  /**
   * toast提示框
   * @param txt 提示文字
   * @param position 位置
   */
  async thsToast(txt: string, position?): Promise<any> {
    if (this.toast) {
      this.toast.dismiss();
      this.toast = null;
    }
    this.toast = await this.toastCtrl.create({
      message: txt,
      duration: 2000,
      position: position ? position : 'bottom',
    });
    this.toast.present();
  }
}
