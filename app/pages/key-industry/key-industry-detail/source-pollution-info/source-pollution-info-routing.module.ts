import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SourcePollutionInfoPage } from './source-pollution-info.page';

const routes: Routes = [
  {
    path: '',
    component: SourcePollutionInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SourcePollutionInfoPageRoutingModule {}
