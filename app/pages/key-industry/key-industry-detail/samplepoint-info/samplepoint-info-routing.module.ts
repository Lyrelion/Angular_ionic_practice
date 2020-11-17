import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplepointInfoPage } from './samplepoint-info.page';

const routes: Routes = [
  {
    path: '',
    component: SamplepointInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplepointInfoPageRoutingModule {}
