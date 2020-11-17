import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DeviceInfoService } from './services/utils/device-info/device-info.service';
import { ConfigService } from './services/config/config.service';
// import { JPush } from '@jiguang-ionic/jpush/ngx';
import { AppUpdateService } from './services/utils/app-update/app-update.service';
import { Router } from '@angular/router';
import { CommService } from './services/business/comm/comm.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public configService: ConfigService,
    public deviceInfoService: DeviceInfoService,
    public appUpdateService: AppUpdateService,
    private router: Router, // 路由
    private comm: CommService, // 公共服务
    // public jpush: JPush
  ) {
    this.initializeApp();
    // 监听返回键
    this.registerBackButtonAction();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.splashScreen.hide();

      // 检测app版本是否有更新
      this.appUpdateService.checkVersion();

      // 调用信息集成方法
      this.deviceInfoService.sendDeviceInfo();
    });
  }

  /**
   * 监听返回键
   */
  registerBackButtonAction(): void {
    const tabsFeatrue = 'app';
    const loginUrl = '/login';
    let cangoBack = true;
    this.platform.backButton.subscribeWithPriority(9999, () => {
      if (this.router.url.indexOf(tabsFeatrue) !== -1 || this.router.url === loginUrl) {
        cangoBack = false;
      } else {
        cangoBack = true;
      }
      this.comm.androidBackButtonHandle(cangoBack, this.router.url === loginUrl);
    });
  }
}
