import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaterSourcePage } from './water-source.page';

const routes: Routes = [
  {
    path: '',
    component: WaterSourcePage
  },
  {
    path: 'site-super',
    loadChildren: () => import('./site-super/site-super.module').then( m => m.SiteSuperPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaterSourcePageRoutingModule {}
