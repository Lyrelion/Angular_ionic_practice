import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandHistoryInfoPage } from './land-history-info.page';

const routes: Routes = [
  {
    path: '',
    component: LandHistoryInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandHistoryInfoPageRoutingModule {}
