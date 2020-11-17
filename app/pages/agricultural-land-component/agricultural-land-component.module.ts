import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgriculturalLandComponentComponent } from './agricultural-land-component.component';
import { ThsListComponentModule } from 'src/app/components/ths-list/ths-list.module';
import { DropDwonSelectionModule } from 'src/app/components/drop-dwon-selection/drop-down-selection.module';

@NgModule({
    declarations: [AgriculturalLandComponentComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ThsListComponentModule, // 列表
        DropDwonSelectionModule, // 下拉菜单选择
    ],
    exports: [AgriculturalLandComponentComponent]
})
export class AgriculturalLandComponentModule {
}