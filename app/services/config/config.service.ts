import { Injectable } from '@angular/core';
/**
 * 所有类型的接口
 */
interface Apis {
  [propsKey: string]: {
    api?: string; // 非接口平台接口名称
    serviceApi?: string; // 接口平台接口名称
    mockApi: string; // rap2接口名称
    openRap2?: boolean; // 是否开启rap2
  }
}
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // 基本接口地址
  public versionUrl = 'https://thsapp.com/iOS/yxgccs/version.txt?time=' + new Date().getTime();  //  版本更新version.txt的服务器地址
  public appUpdateUrl = 'https://www.ths.com.cn/apps/config/sichuan/panzhihua/grid-regulation/update.vm'; // app 自动更新检测地址
  public curVersion = '';  //  当前应用版本号
  public curLocation; // 当前位置信息
  public baiduAK = 'bP14KOkKKMy5xvGHkhjrztnSomabvieM';  // 安装百度定位插件时的ak值，不同应用都需要修改
  public appKey = '9960d25eeec79bb4354a3aa7'; // 极光推送appKey，不同应用都需要修改

  // 用户基本信息
  public loginInfo = {
    loginName: 'admin',
    lat: 30.444444, // 登录位置纬度
    lon: 104.33333, // 登录位置经度
    regionCode: '360000', // 用户所在行政区
  }

  // 接口地址
  public rap2Host = 'http://182.48.115.108:8887/thsmock-serve/app/mock/36';
  // 正式环境接口平台host地址
  public serviceHost = 'http://221.10.2.30:11001/service/serviceinterface/search/run.action';
  // 正式环境host地址
  public host = 'http://221.10.2.30:11001/mobile_api/rest/';
  // 文件上传地址
  public fileUploadUrl = '';
  // 服务器token
  public token = 'pzh_move';

  // 百度逆地理编码接口
  public baiduLocation = 'http://api.map.baidu.com/reverse_geocoding/v3/?&output=json&coordtype=wgs84ll';
  // 文件下载接口
  public downFiles = 'xiazai';

  // 接口地址
  public interfaces: Apis = {
    /******************* 农用地接口 ****************/
    // 获取农用地列表
    getList: { api: '', serviceApi: '', mockApi: '/api/farmLand/getList', openRap2: true },
    // 农用地--获取农用地详细信息
    getDetailsData: { api: '', serviceApi: '', mockApi: '/api/farmLand/getDetailsData', openRap2: true },


     /******************* 重点行业企业 ****************/
    // 重点行业企业--列表获取
    getKeyIndustryList: { api: '', serviceApi: '', mockApi: '/getKeyIndustryList', openRap2: true },
    // 重点行业企业 -- 地块基本信息
    getLandInfo: { api: '', serviceApi: '', mockApi: '/industry/getLandInfo', openRap2: true },
    // 重点行业企业 -- 地块利用历史信息
    getLandHistoryInfo: { api: '', serviceApi: '', mockApi: '/industry/getLandHistoryInfo', openRap2: true },
    // 重点行业企业 -- 污染源信息的基本信息和生产信息
    getSourcePollutionBaseInfoAndProductInfo: { api: '', serviceApi: '', mockApi: '/industry/getSourcePollutionBaseInfoAndProductInfo', openRap2: true },
    // 重点行业企业 -- 污染源信息中的危险化学品信息
    getSourcePollutionOfChemicalsInfo: { api: '', serviceApi: '', mockApi: '/industry/getSourcePollutionOfChemicalsInfo', openRap2: true },
    // 重点行业企业 -- 污染源信息中的废气
    getSourcePollutionOfWastegas: { api: '', serviceApi: '', mockApi: '/industry/getSourcePollutionOfWastegas', openRap2: true },
    // 重点行业企业 -- 污染源信息中的废水
    getSourcePollutionOfWasteWater: { api: '', serviceApi: '', mockApi: '/industry/getSourcePollutionOfWasteWater', openRap2: true },
    // 重点行业企业 -- 污染源信息中的固体废物信息
    getSourcePollutionOfWasteSolid: { api: '', serviceApi: '', mockApi: '/industry/getSourcePollutionOfWasteSolid', openRap2: true },
    // 重点行业企业 -- 污染源信息中的地块综合情况
    getSourcePollutionOfLandInfo: { api: '', serviceApi: '', mockApi: '/industry/getSourcePollutionOfLandInfo', openRap2: true },
    // 重点行业企业 -- 迁移途径信息
    getRouteInfo: { api: '', serviceApi: '', mockApi: '/industry/getRouteInfo', openRap2: true },
    // 重点行业企业 -- 敏感受体基本信息
    getReceptorInfo: { api: '', serviceApi: '', mockApi: '/industry/getReceptorInfo', openRap2: true },
    // 重点行业企业 -- 环境监测和调查评估信息
    getEnviromentAndInvestigation: { api: '', serviceApi: '', mockApi: '/industry/getEnviromentAndInvestigation', openRap2: true },
    // 重点行业企业 -- 获取空间信息文件
    getSpaceFiles: { api: '', serviceApi: '', mockApi: '/industry/getSpaceFiles', openRap2: true },
    // 重点行业企业 -- 获取风险筛查结果
    getRiskScreeningResult: { api: '', serviceApi: '', mockApi: '/industry/getRiskScreeningResult', openRap2: true },
    // 重点行业企业 -- 获取风险筛查分数（一级分数）
    getRiskScreeningNumberFirst: { api: '', serviceApi: '', mockApi: '/industry/getRiskScreeningNumberFirst', openRap2: true },
    // 重点行业企业 -- 获取风险筛查分数（土壤二级，三级分数）
    getRiskScreeningNumberSoli: { api: '', serviceApi: '', mockApi: '/industry/getRiskScreeningNumberSoli', openRap2: true },
    // 重点行业企业 -- 获取风险筛查分数（地下水二级，三级分数）
    getRiskScreeningNumberGroundWater: { api: '', serviceApi: '', mockApi: '/industry/getRiskScreeningNumberGroundWater', openRap2: true },
    // 重点行业企业 -- 获取风险筛查纠偏信息
    getRiskScreeningReviseInfo: { api: '', serviceApi: '', mockApi: '/industry/getRiskScreeningReviseInfo', openRap2: true },
    // 重点行业企业 -- 获取布点信息-疑似污染区域
    getDistributionInfo: { api: '', serviceApi: '', mockApi: '/industry/getDistributionInfo', openRap2: true },
    // 重点行业企业 -- 获取布点信息-采样点位
    getSamplingInfo: { api: '', serviceApi: '', mockApi: '/industry/getSamplingInfo', openRap2: true },
    // 重点行业企业 -- 获取采样信息-土壤和地下水样点数据
    getSamplepointInfo: { api: '', serviceApi: '', mockApi: '/industry/getSamplepointInfo', openRap2: true },
    // 重点行业企业 -- 获取采样信息-采样阶段退样信息
    getRefuseInfo: { api: '', serviceApi: '', mockApi: '/industry/getRefuseInfo', openRap2: true },
    // 重点行业企业 -- 获取采样信息-资料审核进度
    getProgressInfo: { api: '', serviceApi: '', mockApi: '/industry/getProgressInfo', openRap2: true },
    // 重点行业企业 -- 获取采样信息-现场监察进度信息
    getInspectInfo: { api: '', serviceApi: '', mockApi: '/industry/getInspectInfo', openRap2: true },


    /* 地图相关接口开始 */
    // 地图 -- 获取点位信息
    getMapPoint: { api: '', serviceApi: '', mockApi: '/map/getMapPoint', openRap2: true },
    // 地图 -- 获取地图上的点位类型
    getMapType: { api: '', serviceApi: '', mockApi: '/map/getMapType', openRap2: true },
    // 地图 -- 获取我的周边信息
    getAroundInfo: { api: '', serviceApi: '', mockApi: '/map/getAroundInfo', openRap2: true },
    /* 地图相关接口结束 */
    /* 文件库相关接口开始 */
    // 文件库--文件库列表
    getFileLiarbryList: { api: '', serviceApi: '', mockApi: '/fileLibrary/getFileLibraryList', openRap2: true },
    // 文件库--文件类型
    getFileType: { api: '', serviceApi: '', mockApi: '/fileLibrary/getFileLevel', openRap2: true },
    // 文件库--文件级别
    getFileLevel: { api: '', serviceApi: '', mockApi: '/fileLibrary/getFileLevel', openRap2: true },
    // 我的--我的收藏列表
    getMyLoveList: { api: '', serviceApi: '', mockApi: '/fileLibrary/getFileLevel', openRap2: true },

    // 公共模块接口


    // 公共模块接口

    /* 文件库相关接口结束 */
    /* 公共模块接口开始 */

    // 获取下拉菜单中的字典项
    getMenu: { api: '', serviceApi: '', mockApi: '/comm/getMenu', openRap2: true },
    // 提交相关的业务的收藏状态
    postIsCollection: { api: '', serviceApi: '', mockApi: '/comm/reportIsCollection', openRap2: true },
    // 获取监督管理历史数据列表
    getSupervisionHistoryList: { api: '', serviceApi: '', mockApi: '/comm/getSupervisionHistoryList', openRap2: true },
    // 上报监督管理数据
    reportSupervisonInfo: { api: '', serviceApi: '', mockApi: '/comm/reportSupervisonInfo', openRap2: true },
    /* 公共模块接口结束 */

    // 地下水--地下水列表
    getGroundWaterList: { api: '', serviceApi: '', mockApi: '/groundWater/groundWaterList', openRap2: true },
    // 地下水--类型
    getGroundWaterType: { api: '', serviceApi: '', mockApi: '/comm/getMenu', openRap2: true },
    // 地下水--获取地下水详情--集中式地下水型饮用水源检测
    getDetailFocus: { api: '', serviceApi: '', mockApi: '/groundWater/groundWaterDetails', openRap2: true },
    // 地下水--获取地下水详情--污染源地下水详情
    getDetailPolluSource: { api: '', serviceApi: '', mockApi: '/groundWater/groundWaterPollutionDetails', openRap2: true },
    // 地下水--获取地下水详情-- 区域地下水详情
    getDetailArea: { api: '', serviceApi: '', mockApi: '/groundWater/groundWaterAreaDetails', openRap2: true }
  }

  constructor(
  ) {
  }


}
