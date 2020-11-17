import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyLovePage } from './my-love.page';

const routes: Routes = [
  {
    path: '',
    component: MyLovePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyLovePageRoutingModule {}
