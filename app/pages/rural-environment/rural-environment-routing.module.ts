import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RuralEnvironmentPage } from './rural-environment.page';

const routes: Routes = [
  {
    path: '',
    component: RuralEnvironmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RuralEnvironmentPageRoutingModule {}
