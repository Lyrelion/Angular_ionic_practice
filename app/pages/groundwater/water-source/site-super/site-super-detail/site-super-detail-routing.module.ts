import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteSuperDetailPage } from './site-super-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SiteSuperDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteSuperDetailPageRoutingModule {}
