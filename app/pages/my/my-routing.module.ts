import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPage } from './my.page';

const routes: Routes = [
  {
    path: '',
    component: MyPage
  },
  {
    path: 'my-love',
    loadChildren: () => import('./my-love/my-love.module').then( m => m.MyLovePageModule)
  },
  {
    path: 'my-about',
    loadChildren: () => import('./my-about/my-about.module').then( m => m.MyAboutPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPageRoutingModule {}
