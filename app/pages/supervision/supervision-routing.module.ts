import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisionPage } from './supervision.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisionPage
  },
  {
    path: 'supervision-list',
    loadChildren: () => import('./supervision-list/supervision-list.module').then( m => m.SupervisionListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisionPageRoutingModule {}
