import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiskScreeningResultPage } from './risk-screening-result.page';

const routes: Routes = [
  {
    path: '',
    component: RiskScreeningResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiskScreeningResultPageRoutingModule {}
