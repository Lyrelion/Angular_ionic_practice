import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-site-super-detail',
  templateUrl: './site-super-detail.page.html',
  styleUrls: ['./site-super-detail.page.scss'],
})
export class SiteSuperDetailPage implements OnInit {
  public type = '';

  constructor(
    private activatedRoute: ActivatedRoute
  ) { 
    console.log(this.activatedRoute.queryParams.subscribe((queryParams)=>{
      let type = queryParams.type;
      console.log(type);
    }));
  }

  ngOnInit() {
  }

}
