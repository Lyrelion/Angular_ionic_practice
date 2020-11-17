import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library-detail',
  templateUrl: './library-detail.page.html',
  styleUrls: ['./library-detail.page.scss'],
})
export class LibraryDetailPage implements OnInit {

  public showInfo: {[fieldName: string]: any} = {}; // 文件库详情内容

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const state = this.router.getCurrentNavigation().extras.state;
    if(state) {
      const { item } = state; 
      this.showInfo = item;
      console.log(this.showInfo);
    }
    
  }

  /**
   * 获取附件
   */
  getFile() {
    console.log('获取附件');
  }

}
