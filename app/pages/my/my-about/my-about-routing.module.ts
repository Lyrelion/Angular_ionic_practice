import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAboutPage } from './my-about.page';

const routes: Routes = [
  {
    path: '',
    component: MyAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAboutPageRoutingModule {}
