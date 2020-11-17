import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeyIndustryService } from 'src/app/services/business/key-industry/key-industry.service';

@Component({
  selector: 'app-land-history-info',
  templateUrl: './land-history-info.page.html',
  styleUrls: ['./land-history-info.page.scss'],
})
export class LandHistoryInfoPage implements OnInit {
  // 详细信息的中文名称和对应的code，code为接口返回的字段名
  public landUserList = [
    {
      label: '起始时间',
      code: 'STARTTIME',
      type: 'text'
    },
    {
      label: '结束时间',
      code: 'ENDTIME',
      type: 'text'
    },
    {
      label: '行业门类',
      code: 'TRADENAME',
      type: 'text'
    },
    {
      label: '行业大类',
      code: 'TRADENAME',
      type: 'text'
    },
    {
      label: '土地用途',
      code: 'CODE_USETYPE',
      type: 'text'
    },
  ];
  // 详细信息内容
  public pageData = [];
  // 主键id
  private id = '';
  constructor(
    private keyIndustryService: KeyIndustryService, // 重点行业企业service
    private activatedRoute: ActivatedRoute, // 路由参数
  ) { }

  ngOnInit() {
    // 获取上一个页面的id
    this.id = this.getRouterParams('id');
    // 获取地块利用历史
    this.getLandHistoryInfo();
  }

  /**
   * 获取地块历史利用信息
   */
  getLandHistoryInfo(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    };
    // 地块利用历史接口请求
    this.keyIndustryService.getLandHistoryInfo(params, true, res => {
      // 地块利用历史
      this.pageData = res.data;
    })
  }

  /**
   * 获取上一个页面的参数
   * @param param 路由传递过来的key
   */
  getRouterParams(param: string): string {
    return  this.activatedRoute.snapshot.paramMap.get(param);
  }
}
