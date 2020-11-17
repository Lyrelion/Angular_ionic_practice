import { Injectable } from '@angular/core';
import { HttpService } from '../../utils/http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class KeyIndustryService {

  constructor(
    private http: HttpService, // 接口转换服务
  ) { }

  /**
   * 获取重点行业企业列表
   * @param params 必传
   * @param callback 回掉函数
   */
  getKeyIndustryList(params: { [key: string]: any },
    showloading: boolean,
    callback: (res: { [key: string]: { [item: string]: any }[] }) => void): void {
    this.http.getData('getKeyIndustryList', params, showloading, callback);
  }

  /**
   * 获取地块基本信息
   * @param params 必传
   * @param callback 回掉函数
   */
  getLandInfo(params: { [key: string]: any },
    showloading: boolean,
    callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getLandInfo', params, showloading, callback);
  }

  /**
   * 获取地块利用历史
   * @param params 必传
   * @param callback 回掉函数
   */
  getLandHistoryInfo(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any }[] }) => void): void {
    this.http.getData('getLandHistoryInfo', params, showloading, callback);
  }

  /**
   * 获取污染源信息的基本信息和生产信息
   * @param params 必传
   * @param callback 回掉函数
   */
  getBaseInfoAndProductInfo(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getSourcePollutionBaseInfoAndProductInfo', params, showloading, callback);
  }

  /**
   * 获取污染源信息的危险化学品信息
   * @param params 必传
   * @param callback 回掉函数
   */
  getChemicalsInfo(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any }[] }) => void): void {
    this.http.getData('getSourcePollutionOfChemicalsInfo', params, showloading, callback);
  }

  /**
   * 获取污染源信息的废气信息和废气污染物信息
   * @param params 必传
   * @param callback 回掉函数
   */
  getWastegas(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getSourcePollutionOfWastegas', params, showloading, callback);
  }

  /**
   * 获取污染源信息的废水信息和废水污染物信息
   * @param params 必传
   * @param callback 回掉函数
   */
  getWasteWater(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getSourcePollutionOfWasteWater', params, showloading, callback);
  }

  /**
   * 获取污染源信息的固体废物信息
   * @param params 必传
   * @param callback 回掉函数
   */
  getWasteSolid(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getSourcePollutionOfWasteSolid', params, showloading, callback);
  }

  /**
   * 获取污染源信息的地块综合情况
   * @param params 必传
   * @param callback 回掉函数
   */
  getSourcePollutionOfLandInfo(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getSourcePollutionOfLandInfo', params, showloading, callback);
  }

  /**
   * 获取迁移途径信息
   * @param params 必传
   * @param callback 回掉函数
   */
  getRouteInfo(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getRouteInfo', params, showloading, callback);
  }

  /**
   * 获取敏感受体基本信息
   * @param params 必传
   * @param callback 回掉函数
   */
  getReceptorInfo(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getReceptorInfo', params, showloading, callback);
  }

  /**
   * 获取环境检测和调查评估信息
   * @param params 必传
   * @param callback 回掉函数
   */
  getEnviromentAndInvestigation(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getEnviromentAndInvestigation', params, showloading, callback);
  }

  /**
   * 获取空间信息文件
   * @param params 必传
   * @param callback 回掉函数
   */
  getSpaceFiles(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getSpaceFiles', params, showloading, callback);
  }

  /**
   * 获取风险筛查结果
   * @param params 必传
   * @param callback 回掉函数
   */
  getRiskScreeningResult(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getRiskScreeningResult', params, showloading, callback);
  }

  /**
   * 获取风险筛查分数（一级分数）
   * @param params 必传
   * @param callback 回掉函数
   */
  getRiskScreeningNumberFirst(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getRiskScreeningNumberFirst', params, showloading, callback);
  }

  /**
   * 获取风险筛查分数（土壤二级，三级分数）
   * @param params 必传
   * @param callback 回掉函数
   */
  getRiskScreeningNumberSoli(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getRiskScreeningNumberSoli', params, showloading, callback);
  }

  /**
   * 获取风险筛查分数（地下水二级，三级分数）
   * @param params 必传
   * @param callback 回掉函数
   */
  getRiskScreeningNumberGroundWater(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getRiskScreeningNumberGroundWater', params, showloading, callback);
  }

  /**
   * 获取风险筛查纠偏信息
   * @param params 必传
   * @param callback 回掉函数
   */
  getRiskScreeningReviseInfo(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getRiskScreeningReviseInfo', params, showloading, callback);
  }

  /**
   * 获取布点信息-疑似污染区域
   * @param params 必传
   * @param callback 回掉函数
   */
  getDistributionInfo(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any }[] }) => void): void {
    this.http.getData('getDistributionInfo', params, showloading, callback);
  }

  /**
   * 获取布点信息-采样点位和审核详情
   * @param params 必传
   * @param callback 回掉函数
   */
  getSamplingInfo(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any }[] }) => void): void {
    this.http.getData('getSamplingInfo', params, showloading, callback);
  }

  /**
   * 获取采样信息-土壤和地下水样点数据
   * @param params 必传
   * @param callback 回掉函数
   */
  getSamplepointInfo(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any }[] }) => void): void {
    this.http.getData('getSamplepointInfo', params, showloading, callback);
  }

  /**
   * 获取采样信息-采样阶段退样信息
   * @param params 必传
   * @param callback 回掉函数
   */
  getRefuseInfo(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getRefuseInfo', params, showloading, callback);
  }

  /**
   * 获取采样信息-资料审核进度
   * @param params 必传
   * @param callback 回掉函数
   */
  getProgressInfo(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getProgressInfo', params, showloading, callback);
  }

  /**
   * 获取采样信息-现场监察进度信息
   * @param params 必传
   * @param callback 回掉函数
   */
  getInspectInfo(params: { [key: string]: any }, showloading: boolean, callback: (res: { [key: string]: { [item: string]: any } }) => void): void {
    this.http.getData('getInspectInfo', params, showloading, callback);
  }
}
