import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 * 首页页面
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // 首页页面跳转模块相应的信息
  private moduleRouter = {
    survey: {
      name: '概况', // 模块名称
      route: 'survey' // 模块路由
    },
    keyIndustry: {
      name: '重点行业企业',
      route: 'key-industry'
    },
    constructionLand: {
      name: '建设用地',
      route: 'construction-land'
    },
    agriculturalLand: {
      name: '农用地',
      route: 'agricultural-land'
    },
    ruralEnvironment: {
      name: '农村环境',
      route: 'rural-environment'
    },
    groundwater: {
      name: '地下水',
      route: 'groundwater'
    },
    library: {
      name: '文件库',
      route: 'library'
    },
    my: {
      name: '我的',
      route: 'my'
    },
    map: {
      name: '地图',
      route: 'map'
    }
  }
  constructor(
    private router: Router, // 路由
  ) { }

  ngOnInit() {
  }
  /**
   * 跳转到对应的页面
   * @param name 点击模块的名称
   */
  toModule(name) {
    // 页面跳转，通过模块名称来查询对应的路由
    this.router.navigate([this.moduleRouter[name].route]);
  }

}
