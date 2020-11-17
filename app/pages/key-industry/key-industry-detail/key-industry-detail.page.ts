import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-industry-detail',
  templateUrl: './key-industry-detail.page.html',
  styleUrls: ['./key-industry-detail.page.scss'],
})
export class KeyIndustryDetailPage implements OnInit {
  // 详细信息的中文名称和对应的code
  public landUserList = [
    {
      label: '土地使用权人类型',
      code: '1',
      type: 'text'
    },
    {
      label: '企业（自然人，政府）名称',
      code: 'ENTERNAME',
      type: 'text'
    },
    {
      label: '统一社会信用代码号（身份证号）',
      code: 'CREDIT_CODE',
      type: 'text'
    },
    {
      label: '取得土地使用权日期',
      code: 'ACQUISITIONDATE',
      type: 'text'
    },
    {
      label: '占比(%)',
      code: 'PROPORTION',
      type: 'text'
    },{
      label: '法人代表',
      code: 'LEGALPERSON',
      type: 'text'
    },
    {
      label: '联系人',
      code: 'CONTACT',
      type: 'text'
    },
    {
      label: '附件',
      code: 'PHONE',
      type: 'img' // 内容是图片
    }
  ];
  // 详细信息内容
  public pageData = {
    ACQUISITIONDATE: '2020-10-27',
    CONTACT: '1',
    CREDIT_CODE: '92120116MA06AFM830',
    ENTERNAME: '自然人，政府）',
    ISCURRENT: '1',
    LEGALPERSON: '5',
    PHONE: ['assets/img/jb.png','assets/img/jb.png','assets/img/jb.png','assets/img/jb.png',],
    PROPORTION: '5',
    RIGHTPERSONTYPE: '3',
    RIGHTPERSONTYPE_CN: '政府',
  }
  constructor() { }

  ngOnInit() {
  }

}
