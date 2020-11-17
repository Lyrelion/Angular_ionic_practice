import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeyIndustryPage } from './key-industry.page';

const routes: Routes = [
  {
    path: '',
    component: KeyIndustryPage
  },
  {
    path: 'key-industry-detail',
    loadChildren: () => import('./key-industry-detail/key-industry-detail.module').then( m => m.KeyIndustryDetailPageModule)
  },
  {
    path: 'key-industry-list',
    loadChildren: () => import('./key-industry-list/key-industry-list.module').then( m => m.KeyIndustryListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeyIndustryPageRoutingModule {}
