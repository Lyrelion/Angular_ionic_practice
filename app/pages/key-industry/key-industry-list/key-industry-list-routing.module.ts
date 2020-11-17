import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeyIndustryListPage } from './key-industry-list.page';

const routes: Routes = [
  {
    path: '',
    component: KeyIndustryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeyIndustryListPageRoutingModule {}
