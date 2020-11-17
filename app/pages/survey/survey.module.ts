import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyPageRoutingModule } from './survey-routing.module';

import { SurveyPage } from './survey.page';
import { ThsListPieChartModule } from '../../components/ths-list-pie-chart/ths-list-pie-chart.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyPageRoutingModule,
    ThsListPieChartModule
  ],
  declarations: [SurveyPage]
})
export class SurveyPageModule {}
