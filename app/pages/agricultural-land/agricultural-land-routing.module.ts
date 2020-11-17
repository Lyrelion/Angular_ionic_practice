import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgriculturalLandPage } from './agricultural-land.page';

const routes: Routes = [
  {
    path: '',
    component: AgriculturalLandPage
  },
  {
    path: 'agricultural-land-detail-list',
    loadChildren: () => import('./agricultural-land-detail-list/agricultural-land-detail-list.module').then( m => m.AgriculturalLandDetailListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgriculturalLandPageRoutingModule {}
