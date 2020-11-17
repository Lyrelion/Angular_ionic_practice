import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceFilesPage } from './space-files.page';

const routes: Routes = [
  {
    path: '',
    component: SpaceFilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceFilesPageRoutingModule {}
