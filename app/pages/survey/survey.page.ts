import { Component, OnInit } from '@angular/core';
/**
 * 概况页面
 */
@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit {

  // 数据列表3
  public dataList3: any[];
  // 地下水饼图颜色数组
  public colorList: any[] = ['red','red','red','red','red'];
  // 土壤饼图颜色数组
  public soilColorList: any[] = ['#FFBF4C', '#A673E3', '#80C01C', '#00AFF2', '#2BC38A'];
  // 污染地块饼图颜色数组
  public landColorList: any[] = ['#FFBF4C', '#FFBF4C', '#FFBF4C', '#FFBF4C', '#FFBF4C'];
  // 农村环境治理项目饼图颜色数组
  public environColorList: any[] = ['#FFBF4C', '#A673E3', '#80C01C', '#00AFF2'];

  constructor() { }

  ngOnInit() {

    // 地下水饼图数据
    this.dataList3 = [
      {name: 'I类', value: 10},
      {name: 'II类', value: 30},
      {name: 'III类', value: 13},
      {name: 'IV类', value: 7},
      {name: 'V类', value: 17},
    ];

    // 地下水饼图颜色数组
    this.colorList = ['#7BDAFF', '#00AFF2', '#80C01C', '#F4D000', '#F7A318'];
  
    
  }
  /**
   * 下拉刷新事件
   * @param e 下拉刷新内容
   */
  doRefresh(e) {
    console.log('下拉刷新');
    setTimeout(() => {
      // 加载完成
      console.log('Async operation has ended');
      e.target.complete();
    }, 2000);
  }

}
