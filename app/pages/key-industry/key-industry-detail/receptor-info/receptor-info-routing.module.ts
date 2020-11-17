import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptorInfoPage } from './receptor-info.page';

const routes: Routes = [
  {
    path: '',
    component: ReceptorInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceptorInfoPageRoutingModule {}
