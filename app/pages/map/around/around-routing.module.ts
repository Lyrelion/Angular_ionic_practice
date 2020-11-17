import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AroundPage } from './around.page';

const routes: Routes = [
  {
    path: '',
    component: AroundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AroundPageRoutingModule {}
