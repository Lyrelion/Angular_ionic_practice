import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ThsEnlargeImageComponent } from './ths-enlarge-image.component';

@NgModule({
  declarations: [ThsEnlargeImageComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [ThsEnlargeImageComponent],
  entryComponents: [ThsEnlargeImageComponent]
})
export class ThsEnlargeImageModule { }
