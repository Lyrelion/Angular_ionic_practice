import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgriculturalLandDetailListPage } from './agricultural-land-detail-list.page';

const routes: Routes = [
  {
    path: '',
    component: AgriculturalLandDetailListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgriculturalLandDetailListPageRoutingModule {}
