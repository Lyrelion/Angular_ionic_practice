import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandInfoPage } from './land-info.page';

const routes: Routes = [
  {
    path: '',
    component: LandInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandInfoPageRoutingModule {}
