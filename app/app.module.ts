import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // 引入http接口方法
import { HttpInterceptorProvider } from './services/utils/http-interceptor/http-interceptor.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Sim } from '@ionic-native/sim/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Camera } from '@ionic-native/camera/ngx'; // 相机
import { ThsMapService } from './services/utils/ths-map/ths-map.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { VideoCapturePlus } from '@ionic-native/video-capture-plus/ngx';

@NgModule({
  declarations: [ AppComponent ],
  entryComponents: [],
  imports: [ BrowserModule, IonicModule.forRoot({ mode: 'ios' }), AppRoutingModule, HttpClientModule ],
  providers: [
    ThsMapService,
    StatusBar,
    SplashScreen,
    HttpInterceptorProvider,
    AppVersion,
    Device,
    Sim,
    Network,
    Geolocation,
    InAppBrowser,
    FileTransfer,
    File,
    FileOpener,
    FilePath,
    WebView,
    Camera,
    Base64,
    Base64ToGallery,
    VideoCapturePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
