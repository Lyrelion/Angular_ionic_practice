import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeyIndustryDetailPage } from './key-industry-detail.page';

const routes: Routes = [
  {
    path: '',
    component: KeyIndustryDetailPage
  },
  // 地块基础信息
  {
    path: 'land-info',
    loadChildren: () => import('./land-info/land-info.module').then( m => m.LandInfoPageModule)
  },
  // 地块历史利用信息
  {
    path: 'land-history-info',
    loadChildren: () => import('./land-history-info/land-history-info.module').then( m => m.LandHistoryInfoPageModule)
  },
  // 污染源信息页面
  {
    path: 'source-pollution-info',
    loadChildren: () => import('./source-pollution-info/source-pollution-info.module').then( m => m.SourcePollutionInfoPageModule)
  },
  // 迁移途径信息
  {
    path: 'route-info',
    loadChildren: () => import('./route-info/route-info.module').then( m => m.RouteInfoPageModule)
  },
  // 敏感受体详细信息
  {
    path: 'receptor-info',
    loadChildren: () => import('./receptor-info/receptor-info.module').then( m => m.ReceptorInfoPageModule)
  },
  // 环境监测和调查评估信息
  {
    path: 'enviroment-investigation',
    loadChildren: () => import('./enviroment-investigation/enviroment-investigation.module').then( m => m.EnviromentInvestigationPageModule)
  },
  // 空间信息及资料图片
  {
    path: 'space-files',
    loadChildren: () => import('./space-files/space-files.module').then( m => m.SpaceFilesPageModule)
  },
  // 风险筛查结果
  {
    path: 'risk-screening-result',
    loadChildren: () => import('./risk-screening-result/risk-screening-result.module').then( m => m.RiskScreeningResultPageModule)
  },
  // 风险筛查分数
  {
    path: 'risk-screening-number',
    loadChildren: () => import('./risk-screening-number/risk-screening-number.module').then( m => m.RiskScreeningNumberPageModule)
  },
  // 风险筛查纠偏信息
  {
    path: 'distribution-info',
    loadChildren: () => import('./distribution-info/distribution-info.module').then( m => m.DistributionInfoPageModule)
  },
  // 布点信息
  {
    path: 'samplepoint-info',
    loadChildren: () => import('./samplepoint-info/samplepoint-info.module').then( m => m.SamplepointInfoPageModule)
  },
  // 采样信息
  {
    path: 'element-info',
    loadChildren: () => import('./element-info/element-info.module').then( m => m.ElementInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeyIndustryDetailPageRoutingModule {}
