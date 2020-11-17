import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviromentInvestigationPage } from './enviroment-investigation.page';

const routes: Routes = [
  {
    path: '',
    component: EnviromentInvestigationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviromentInvestigationPageRoutingModule {}
