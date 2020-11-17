import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeyIndustryService } from 'src/app/services/business/key-industry/key-industry.service';

/**
 * 敏感受体信息页面
 */
@Component({
  selector: 'app-receptor-info',
  templateUrl: './receptor-info.page.html',
  styleUrls: ['./receptor-info.page.scss'],
})
export class ReceptorInfoPage implements OnInit {
  // 详细信息的中文名称和对应的code，code为接口请求的字段名
  public receptorList = [
    {
      label: '地块内职工人数',
      code: 'SR001',
      type: 'text'
    },
    {
      label: '地块周边500m范围内人口数量',
      code: 'SR002',
      type: 'text'
    },
    {
      label: '地块周边1km范围内存在以下敏感目标及敏感目标到最近的重点区域的距离',
      code: 'SR003',
      type: 'text'
    },
    {
      label: '地块所在区域地下水用途',
      code: 'SR004',
      type: 'text'
    },
    {
      label: '地块邻近区域（100m范围内）地表水用途',
      code: 'SR005',
      type: 'text'
    },
  ]; // 敏感受体对应字段
  public receptorData = {}; // 敏感受体信息
  // 主键id
  private id = '';
  constructor(
    private keyIndustryService: KeyIndustryService, // 重点行业企业service
    private activatedRoute: ActivatedRoute, // 路由参数
  ) { }

  ngOnInit() {
    // 获取主键
    this.id = this.getRouterParams('id');
    // 获取铭感受体详细信息
    this.getReceptorInfo();
  }

  /**
   * 获取敏感受体基本信息
   */
  getReceptorInfo(): void {
    // 请求参数
    const params = {
      ENTERID: this.id
    };
    // 接口请求
    this.keyIndustryService.getReceptorInfo(params, true, res => {
      // 页面信息
      this.receptorData = res.data;
    })
  }

  /**
   * 获取上一个页面的参数
   * @param param 路由传递参数的字段名
   */
  getRouterParams(param: string): string {
    return  this.activatedRoute.snapshot.paramMap.get(param);
  }
}
