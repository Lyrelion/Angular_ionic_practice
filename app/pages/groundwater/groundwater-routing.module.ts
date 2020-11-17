import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroundwaterPage } from './groundwater.page';

const routes: Routes = [
  {
    path: '',
    component: GroundwaterPage
  },
  {
    path: 'water-source',
    loadChildren: () => import('./water-source/water-source.module').then( m => m.WaterSourcePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroundwaterPageRoutingModule {}
