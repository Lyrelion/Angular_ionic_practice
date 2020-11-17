import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstructionLandPage } from './construction-land.page';

const routes: Routes = [
  {
    path: '',
    component: ConstructionLandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstructionLandPageRoutingModule {}
