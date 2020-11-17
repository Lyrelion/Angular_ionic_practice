import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ThsListPieChartComponent } from './ths-list-pie-chart.component';

@NgModule({
  declarations: [ThsListPieChartComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [ThsListPieChartComponent]
})
export class ThsListPieChartModule { }
