import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { HttpUtilsService } from 'src/app/services/utils/http-utils/http-utils.service';
@Component({
  selector: 'app-drop-dwon-selection',
  templateUrl: './drop-dwon-selection.component.html',
  styleUrls: ['./drop-dwon-selection.component.scss'],
})
export class DropDwonSelectionComponent implements OnInit {
  // 下拉框的菜单选项
  @Input() selectionList: any;
  // 向父级传递数据
  @Output() eventOne: EventEmitter<object> = new EventEmitter();
  @Output() eventTwo: EventEmitter<number> = new EventEmitter();
  // 选择框大小
  public size = 3;
  // 当前选择中的下拉框下标
  public selectionIndex = -1;
  // 下拉框类型
  public selectionType = ''; // 1列表单选，0为时间
  // 组建传值（选中的下拉框中的值）
  public selectionInfos: any;
  // 选中的值的存放变量，为了在最上面导航条回显已选择的值
  public selectInfoArr = [];
  constructor(
    public httpUtilsService: HttpUtilsService
  ) { }
  // 时间段
  public timeSlot: any;
  public startTime = '';
  public endTime = '';
  /** 多级联动数据 -start */
  // public provinceArr = []; // 省级数组
  public cityArr = []; // 市州数组
  public countryArr = []; // 县数据
  public currentIndex = 1; // 当前点击的列
  public currentProvince = {
    text: '',
    value: '',
    children: []
  }; // 当前选中的省份
  public currentCity = {
    text: '',
    value: '',
    children: []
  }; // 当前选中的市级
  public currentCountry = {
    text: '',
    value: '',
    children: []
  }; // 当前选中的县级
  /** 多级联动数据 -end */

  ngOnInit() {
    this.size = 12 / this.selectionList.length;
    this.selectInfoArr.length = this.selectionList.length;
    console.log(this.selectionList);
  }

  /**
   * 点击下拉框
   * @param type 下拉类型
   * @param selectionIndex 导航tab的下标
   */
  chooseData(type, selectionIndex) {
    console.log(this.selectionList);
    console.log(this.selectInfoArr);
    const listData = [].concat(this.selectionList[selectionIndex].dropDownContentList);
    // 当下拉内容处于展开状态 并且此次点击与上次点击一致时关闭弹框并将导航栏回复初始状态
    if (selectionIndex === this.selectionIndex) {
      // 关闭展示下拉内容的弹框
      this.selectionType = '';
      // 导航栏中颜色和箭头回复初始状态
      this.selectionIndex = -1;
      return;
    }
    // 改变导航栏状态
    this.selectionIndex = selectionIndex;
    // 展示对应的下拉框
    this.selectionType = type;

    console.log(type);

    if (type === '2') {
      const selectedData = this.selectInfoArr[this.selectionIndex];
      this.currentProvince.text = '';
      this.currentProvince.value = '';
      this.currentCity.text = '';
      this.currentCity.value = '';
      this.currentCountry.text = '';
      this.currentCountry.value = '';
      if (!selectedData) {
        this.currentIndex = 1;
        return;
      }
      // 有省份的数据
      if (selectedData.provinceName !== '') {
        this.currentIndex = 2;
        listData.forEach(element => {
          if (element.text === selectedData.provinceName) {
            this.currentProvince.text = element.text;
            this.currentProvince.value = element.value;
            this.cityArr = element.children;
            console.log(this.cityArr);
          }
        });
        // 有城市数据
        if (selectedData.cityName !== '' || selectedData.cityCode !== '') {
          this.currentIndex = 3;
          if (selectedData.cityCode !== '') { // 有value值
            this.cityArr.forEach(element => {
              if (element.value === selectedData.cityCode) {
                this.currentCity.text = element.text;
                this.currentCity.value = element.value;
                this.countryArr = element.children;
              }
            });
          }
          if (selectedData.cityName !== '') { // 有text值
            this.cityArr.forEach(element => {
              if (element.text === selectedData.cityName) {
                this.currentCity.text = element.text;
                this.currentCity.value = element.value;
                this.countryArr = element.children;
              }
            });
          }
          // 有区县数据
          if (selectedData.countryName !== '' || selectedData.countryCode !== '') {
            if (selectedData.countryCode !== '') { // 有value值
              this.countryArr.forEach(element => {
                if (element.value === selectedData.countryCode) {
                  this.currentCountry.text = element.text;
                  this.currentCountry.value = element.value;
                }
              });
            }
            if (selectedData.countryName !== '') { // 有text值
              this.countryArr.forEach(element => {
                if (element.text === selectedData.countryName) {
                  this.currentCountry.text = element.text;
                  this.currentCountry.value = element.value;
                }
              });
            }
          }
        }

        // console.log(this.countryArr);
        console.log(this.selectionList[selectionIndex]);
      }
    }

  }

  /**
   * 选中条件
   * @param selectionInfo 选中的信息
   * @param selectionIndex 选中的下标（第几个下拉框的内容）
   */
  ionChangeArea(selectionInfo, selectionIndex) {
    console.log(this.selectInfoArr);
    // 记录选中的内容用了回显-判断如果此次点击与上次点击内容一致时取消选中
    // if (selectionInfo.code === this.selectionList[selectionIndex].selection) {
    //   this.selectionList[selectionIndex].selection = '';
    // } else {
    this.selectionList[selectionIndex].selection = selectionInfo.code;
    // }
    this.selectionInfos = [
      selectionInfo, selectionIndex
    ];

    this.selectInfoArr[selectionIndex] = selectionInfo;

    this.eventOne.emit(this.selectionInfos);
    // 关闭展示下拉内容的弹框
    this.selectionType = '';
    // 导航栏中颜色和箭头回复初始状态
    this.selectionIndex = -1;
  }

  /**
   * 关闭蒙版
   */
  closeMark() {
    this.selectionIndex = -1;
    this.selectionType = '';
  }

  /**
   * 清除相关时间
   */
  clearTime() {
    this.startTime = '';
    this.endTime = '';
  }


  /**
   * 选择时间
   * @param datetimeFiles 开始/结束时间
   */
  datetimechange(datetimeFiles: string) {
    // 开始时间
    const startTimeDate = new Date(this.startTime);
    startTimeDate.setHours(0, 0, 0);
    // 结束时间
    const endTimeDate = new Date(this.endTime);
    endTimeDate.setHours(23, 59, 59);
    // 限制操作
    if (startTimeDate.getTime() > endTimeDate.getTime()) {
      this.httpUtilsService.thsToast('开始时间需小于结束时间！请重新选择');
      setTimeout(() => {
        this[datetimeFiles] = '';
      }, 800);
    }
  }

  /**
   * 确认时间
   */
  confirmTime() {
    this.timeSlot = [this.startTime, this.endTime];
    this.eventTwo.emit(this.timeSlot);
    // 关闭展示下拉内容的弹框
    this.selectionType = '';
    // 导航栏中颜色和箭头回复初始状态
    this.selectionIndex = -1;
  }

  /*********************多级联动 -star */
  /**
   * 第一级列表数据点击
   * @param item 第一级数据
   */
  selectProvince(item) {
    // this.currentProvince = item;
    this.currentProvince.text = item.text;
    this.currentProvince.value = item.value;
    this.currentProvince.children = item.children
    if (item.children.length !== 0) {
      ++this.currentIndex;
    }
    this.cityArr = item.children;
    // console.log(this.cityArr);
  }

  /**
   * 第二级列表数据点击
   */
  selectCity(item) {
    // this.currentCity = item;
    this.currentCity.text = item.text;
    this.currentCity.value = item.value;
    this.currentCity.children = item.children
    if (item.children.length !== 0) {
      ++this.currentIndex;
    }
    this.countryArr = item.children;
  }

  /**
   * 第三级列表数据点击
   */
  selectCountry(item) {
    // this.currentCountry = item;
    this.currentCountry.text = item.text;
    this.currentCountry.value = item.value;
    this.currentCountry.children = item.children
  }

  /**
   * 点击省份
   */
  clickProvince() {
    this.currentCity = {
      text: '',
      value: '',
      children: []
    }; // 当前选中的市级
    this.currentCountry = {
      text: '',
      value: '',
      children: []
    }; // 当前选中的县级
    this.currentIndex = 1;
  }
  /**
   * 点击市州
   */
  clickCity() {
    this.currentCountry = {
      text: '',
      value: '',
      children: []
    }; // 当前选中的县级
    this.currentIndex = 2;
  }
  /**
   * 点击区县
   */
  clickCountry() {
    this.currentIndex = 3;
  }
  /**
   * 点击确定
   */
  selectRegionOk() {
    const currentSelectData = {
      message: '已选择值',
      provinceName: this.currentProvince.text,
      provinceCode: this.currentProvince.value,
      cityName: this.currentCity.text,
      cityCode: this.currentCity.value,
      countryName: this.currentCountry.text,
      countryCode: this.currentCountry.value
    };
    this.getRegionSelectInfo(currentSelectData); // 值的返回形式处理
    // 关闭展示下拉内容的弹框
    this.selectionType = '';
    // 导航栏中颜色和箭头回复初始状态
    this.selectionIndex = -1;
  }

  /**
   * 点击取消
   */
  closeComponent() {
    const closeData = {
      message: '取消选择'
    };
    // 关闭展示下拉内容的弹框
    this.selectionType = '';
    // 导航栏中颜色和箭头回复初始状态
    this.selectionIndex = -1;
  }

  /**
   * 返回最后我们需要的最后一级的值
   * @param data 获取到的三级值
   */
  getRegionSelectInfo(data) {
    let infoTmp = {};
    if (data.countryName) { // 区县有值
      infoTmp = {
        name: data.countryName,
        code: data.countryCode
      }
    } else {
      if (data.cityName) { // 市有值
        infoTmp = {
          name: data.cityName,
          code: data.cityCode
        }
        // this.selectInfoArr[this.selectionIndex] = infoTmp;
      } else {
        if (data.provinceName) { // 省有值
          infoTmp = {
            name: data.provinceName,
            code: data.provinceCode
          }
          // this.selectInfoArr[this.selectionIndex] = infoTmp;
        } else {
          infoTmp = {
            name: '',
            code: ''
          }
        }
      }
    }

    const selectData = Object.assign(data, infoTmp);
    console.log(selectData);
    this.selectInfoArr[this.selectionIndex] = selectData;

    this.selectionInfos = [
      infoTmp, this.selectionIndex
    ];
    this.eventOne.emit(this.selectionInfos);
  }

  /*********************多级联动 -end */

  // 多选
  seletMulti(i, selectionIndex) {
    if ( i !== 0) { // 点击非全部的选项
      this.selectionList[selectionIndex].dropDownContentList[0].isClick = false;
      this.selectionList[selectionIndex].dropDownContentList[i].isClick = !this.selectionList[selectionIndex].dropDownContentList[i].isClick;
    } else {
      if (!this.selectionList[selectionIndex].dropDownContentList[0].isClick) {
        for (const item of this.selectionList[selectionIndex].dropDownContentList) {
          item.isClick = false;
        }
      }
      this.selectionList[selectionIndex].dropDownContentList[0].isClick = !this.selectionList[selectionIndex].dropDownContentList[0].isClick;
    }
  }
  /**
   * 清空选中状态
   * @param selectionIndex 被点击的下拉菜单
   */
  clearMulti(selectionIndex) {
    for (const item of this.selectionList[selectionIndex].dropDownContentList) {
      item.isClick = false;
    }
  }
  /**
   * 提交选中的状态
   * @param selectionIndex 被点击的下拉菜单
   */
  selectMulti(selectionIndex) {
    let selectedString = '';
    const selectArray = [];
    for (const item of this.selectionList[selectionIndex].dropDownContentList) {
      if (item.isClick) {
        selectArray.push(item.code);
        this.selectInfoArr[selectionIndex] = {
          name: item.name
        }
      }
    }
    selectedString = selectArray.join(',');
    if (selectArray.length > 1) {
      this.selectInfoArr[selectionIndex] = {
        name: '多选'
      }
    }
     const seletInfo = [
      selectedString, selectionIndex
     ]
    this.eventOne.emit(seletInfo);
    this.closeMark();
  }
}
