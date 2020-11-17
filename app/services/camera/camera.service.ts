import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular'; // 引入loading
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'; // 相机
import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus/ngx'; // 视频
import { ConfigService } from '../config/config.service';
declare let VideoTrimmingEditor; // 视频压缩
declare let window; // 播放视频
// declare let window;
@Injectable({
  providedIn: 'root'
})
export class CameraService {
  private actionSheet: any;
  constructor(
    private camera: Camera,
    private videoCapturePlus: VideoCapturePlus,
    private config: ConfigService,
    public actionSheetController: ActionSheetController
  ) { }

  /**
   * 选择图片获取方式
   */
  async selectPic(callback, type) {
    let buttons = [];
    if (type === 'Img') {
      buttons = [
        {
          text: '拍摄照片',
          handler: () => {
            this.actionSheet.dismiss();
            this.choiceImg(1, imgUrl => {
              callback(imgUrl, 'Img');
            });
          }
        },
        {
          text: '拍摄视频',
          handler: () => {
            this.actionSheet.dismiss();
            this.choiceVideo(imgUrl => {
              callback(imgUrl, 'Video');
            });
          }
        },
        {
          text: '选择照片',
          handler: () => {
            this.actionSheet.dismiss();
            this.choiceImg(2, imgUrl => {
              callback(imgUrl, 'Img');
            });
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => { }
        }
      ];
    } else if (type === 'Video') {
      buttons = [
        {
          text: '拍摄视频',
          handler: () => {
            this.actionSheet.dismiss();
            this.choiceVideo(imgUrl => {
              callback(imgUrl);
            });
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => { }
        }
      ];
    }
    this.actionSheet = await this.actionSheetController.create({
      buttons,
    });
    await this.actionSheet.present();
  }

  /**
   * 调相机或相册选照片的操作
   * @param type 图片来源
   * @param callback 回调函数
   */
  choiceImg(type, callback) {
    const options: CameraOptions = {
      quality: 50,
      sourceType: type,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      allowEdit: false // 是否允许编辑
    };
    this.camera.getPicture(options).then(
      imageData => {
        callback(imageData);
      }
    ).catch((err) => {
      console.log('错误了，没有上传保存', err);
    });
  }

  /**
   * 录制视频
   * @param type 视频来源
   * @param callback 回调函数
   */
  choiceVideo(callback) {
    const options: VideoCapturePlusOptions = {
      limit: 1,
      duration: 300,
      highquality: true,
    };
    this.videoCapturePlus.captureVideo(options).then(
      (mediafile: MediaFile[]) => {
        this.videoCaptureSuccess(mediafile, callback);
        // callback(mediafile);
      },
      err => console.log('错误了，没有上传保存', err));
  }

  /**
   * 压缩视频
   * @param mediaFiles 待压缩的视频文件
   */
  videoCaptureSuccess(mediafile, callback) {
    VideoTrimmingEditor.open(
      {
        input_path: mediafile[0].fullPath,
        video_max_time: 15,
      },
      (result) => {
        callback(result.output_path);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /**
   * 播放视频
   * @param url 播放视频的路径
   */
  play(videoUrl) {
    window.plugins.streamingMedia.playVideo(videoUrl);
  }

}
