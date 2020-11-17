import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-ths-enlarge-image',
  templateUrl: './ths-enlarge-image.component.html',
  styleUrls: ['./ths-enlarge-image.component.scss'],
})
export class ThsEnlargeImageComponent implements OnInit {

  @Input() photos: any; // 图片数组
  @Input() initialSlide = 0; // 初始显示的图片的索引

  pictures = []; // 存放图片
  slideOpts = {   // 滑动配置
    initialSlide: 0,
    speed: 400,
    observer: true, // 修改swiper自己或子元素时，自动初始化swiper
    observeParents: true // 修改swiper的父元素时，自动初始化swiper
  };
  maxHeight: number; // 屏幕宽度
  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
    this.pictures = this.navParams.data.photos;
    this.slideOpts.initialSlide = this.navParams.data.initialSlide;
    this.maxHeight = window.innerHeight - 100;
  }

  ngOnInit() { }
  /**
   * 关闭当前页面
   */
  close() {
    this.modalCtrl.dismiss();
  }

}
