import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * 农村环境页面
 */
@Component({
  selector: 'app-rural-environment',
  templateUrl: './rural-environment.page.html',
  styleUrls: ['./rural-environment.page.scss'],
})
export class RuralEnvironmentPage implements OnInit {
  // 其他列表信息
  public listInfo = [
    {
      iconUrl: 'assets/img/rural-nchj.png',
      name: '农村污水处理设施',
      router: 'key-industry/key-industry-detail/land-info',
    },
    {
      iconUrl: 'assets/img/rural-shlj.png',
      name: '农村生活垃圾处理',
      router: 'key-industry/key-industry-detail/land-history-info',
    },
    {
      iconUrl: 'assets/img/rural-cqyz.png',
      name: '畜禽养殖',
      router: 'key-industry/key-industry-detail/source-pollution-info',
    },
    {
      iconUrl: 'assets/img/rural-yys.png',
      name: '农村饮用水保护',
      router: 'key-industry/key-industry-detail/route-info',
    },
    {
      iconUrl: 'assets/img/rural-hcst.png',
      name: '农村黑臭水体',
      router: 'key-industry/key-industry-detail/receptor-info',
    }
  ];
  constructor(
    private router: Router, // 路由
  ) { }

  ngOnInit() {
  }

  /**
   * 列表点击事件
   * @param item 列表信息
   */
  itemClick(item: {[key: string]: string}): void {
    /**
     * 路由跳转，根据列表信息来进行跳转
     * @param id 监督管理历史数据
     * @param title 企业名称
     */
    this.router.navigate([item.router])
  }
}
