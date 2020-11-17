import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ThsEnlargeImageComponent } from 'src/app/components/ths-enlarge-image/ths-enlarge-image.component';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.scss'],
})
export class BaseInfoComponent implements OnInit {  // 下拉框的菜单选项
  @Input() keyList: any; // 列表字段
  @Input() contentInfo: any; // 列表内容
  @Input() isLine: boolean; // 是否有边界
  @Input() tableList: any; // 表格 表头
  @Input() tableData: any; // 表格内容
  @Input() isTable: boolean; // 是否是表格
  @Input() isBottomLine: boolean; // 是否有底部的线
  constructor(
    public modalCtrl: ModalController,
  ) {

  }

  ngOnInit() {
    // console.log(this.keyList);
    // console.log(this.contentInfo);
  }

  /**
   * 点击按钮
   */
  clickBtn(item) {
    console.log('点击按钮');
    console.log(item);
    if(!item){
      return;
    }
  }

  /**
   * 定位
   */
  location() {
    console.log('定位');
  }
  /**
   * 放大图片
   * @param idx 当前点击图片的索引
   */
  async enlargeImage(idx, imgList) {
    const modal = await this.modalCtrl.create({
      component: ThsEnlargeImageComponent,
      componentProps: {
        photos: imgList,
        initialSlide: idx
      },
      cssClass: 'enlarge-image-modal'
    });
    await modal.present();
  }



}
