import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // 进入系统之后，默认显示到首页
    pathMatch: 'full'
  },
  // 默认页面
  {
    path: 'app',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  // 登录页面
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  // 首页
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  // 概况
  {
    path: 'survey',
    loadChildren: () => import('./pages/survey/survey.module').then( m => m.SurveyPageModule)
  },
  // 重点行业企业
  {
    path: 'key-industry',
    loadChildren: () => import('./pages/key-industry/key-industry.module').then( m => m.KeyIndustryPageModule)
  },
  // 建设用地
  {
    path: 'construction-land',
    loadChildren: () => import('./pages/construction-land/construction-land.module').then( m => m.ConstructionLandPageModule)
  },
  // 农用地
  {
    path: 'agricultural-land',
    loadChildren: () => import('./pages/agricultural-land/agricultural-land.module').then( m => m.AgriculturalLandPageModule)
  },
  // 农村环境
  {
    path: 'rural-environment',
    loadChildren: () => import('./pages/rural-environment/rural-environment.module').then( m => m.RuralEnvironmentPageModule)
  },
  // 地下水
  {
    path: 'groundwater',
    loadChildren: () => import('./pages/groundwater/groundwater.module').then( m => m.GroundwaterPageModule)
  },
  // 文件库
  {
    path: 'library',
    loadChildren: () => import('./pages/library/library.module').then( m => m.LibraryPageModule)
  },
  // 我的
  {
    path: 'my',
    loadChildren: () => import('./pages/my/my.module').then( m => m.MyPageModule)
  },
  // 地图
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  // 监督管理上传、查看页面
  {
    path: 'supervision',
    loadChildren: () => import('./pages/supervision/supervision.module').then( m => m.SupervisionPageModule)
  },
  {
    path: 'supervision-list',
    loadChildren: () => import('./pages/supervision/supervision-list/supervision-list.module').then( m => m.SupervisionListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
