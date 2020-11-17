import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiskScreeningNumberPage } from './risk-screening-number.page';

const routes: Routes = [
  {
    path: '',
    component: RiskScreeningNumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiskScreeningNumberPageRoutingModule {}
