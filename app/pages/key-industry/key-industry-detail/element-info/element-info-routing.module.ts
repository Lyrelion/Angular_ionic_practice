import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementInfoPage } from './element-info.page';

const routes: Routes = [
  {
    path: '',
    component: ElementInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementInfoPageRoutingModule {}
