import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BaseInfoComponent } from './base-info.component';
import { ThsEnlargeImageModule } from '../ths-enlarge-image/ths-enlarge-image.module';

@NgModule({
    declarations: [BaseInfoComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ThsEnlargeImageModule, // 图片放大查看
    ],
    exports: [BaseInfoComponent]
})
export class BaseInfoModule {
}