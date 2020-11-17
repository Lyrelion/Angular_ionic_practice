import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

/**
 * 我的页面
 */
@Component({
  selector: 'app-my',
  templateUrl: './my.page.html',
  styleUrls: ['./my.page.scss'],
})
export class MyPage implements OnInit {

  public listInfo = [
    {
      iconUrl: 'assets/img/my-love.png',
      name: '我的收藏',
      router: 'my/my-love',
    },
    {
      iconUrl: 'assets/img/my-about.png',
      name: '关于',
      router: 'my/my-about',
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * 列表点击事件
   * @param item 列表信息
   */
  itemClick(item) {
    console.log('被点击的列表', item);
    this.router.navigate([item.router])
  }

}
