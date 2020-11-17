import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteSuperPage } from './site-super.page';

const routes: Routes = [
  {
    path: '',
    component: SiteSuperPage
  },
  {
    path: 'site-super-detail',
    loadChildren: () => import('./site-super-detail/site-super-detail.module').then( m => m.SiteSuperDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteSuperPageRoutingModule {}
