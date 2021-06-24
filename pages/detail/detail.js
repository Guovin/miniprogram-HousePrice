// pages/detail/detail.js
import * as echarts from '../../ec-canvas/echarts';

var option = {

  title: {//标题

    text: '房价趋势',

    left: 'center'

  },

  renderAsImage: true, //支持渲染为图片模式

  color: [],//图例图标颜色

  legend: {

    show: true,

    itemGap: 25,//每个图例间的间隔

    top: 25,

    x: 30,//水平安放位置,离容器左侧的距离  'left'

    z: 100,

    textStyle: {

      color: '#383838'

    },

    data: [//图例具体内容

    ]

  },

  grid: {//网格

    left: 10,

    top:55,

    bottom: 5,

    containLabel: true,//grid 区域是否包含坐标轴的刻度标签

  },

  label: {
    normal: {
      show: true
    }
 },

  tooltip: {
    show: true,
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'line' ,       // 默认为直线，可选为：'line' | 'shadow' | 'cross'
      axis : "x"
    }
  },

  xAxis: {//横坐标

    type: 'category',

    name: '',//横坐标名称

    nameTextStyle: {//在name值存在下，设置name的样式

      color: 'red',

      fontStyle: 'normal'

    },

    nameLocation:'end',

    splitLine: {//坐标轴在 grid 区域中的分隔线。

      show: true,

      lineStyle: {

        type: 'dashed'

      }

    },

    boundaryGap: false,//1.true 数据点在2个刻度直接  2.fals 数据点在分割线上，即刻度值上

    data: [],

    axisLabel: {
      showMinLabel: true,//显示最小值
      showMaxLabel: true,//显示最大值
      interval:3,//标签间隔显示
      textStyle: {

        fontSize: 13,

        color: '#5D5D5D'

      },
    }

  },

  yAxis: {//纵坐标

    type: 'value',

    position:'left',

    name: '',//纵坐标名称

    nameTextStyle:{//在name值存在下，设置name的样式

      color:'red',

      fontStyle:'normal'

    },

    splitNumber: 5,//坐标轴的分割段数

    splitLine: {//坐标轴在 grid 区域中的分隔线。

      show: true,

      lineStyle: {

        type: 'dashed'

      }

    },

    axisLabel: {//坐标轴刻度标签

      formatter: function (value) {

        var xLable = [];

        if (value == 1000) {

          xLable.push('1K');

        }
        if (value == 2000) {

          xLable.push('2K');

        }
        if (value == 3000) {

          xLable.push('3K');

        }
        if (value == 4000) {

          xLable.push('4K');

        }

        if (value == 5000) {

          xLable.push('5K');

        }
        if (value == 6000) {

          xLable.push('6K');

        }
        if (value == 7000) {

          xLable.push('7K');

        }
        if (value == 8000) {

          xLable.push('8K');

        }
        if (value == 9000) {

          xLable.push('9K');

        }

        if (value == 10000) {

          xLable.push('10K');

        }

        if (value == 11000) {

          xLable.push('11K');

        }
        if (value == 12000) {

          xLable.push('12K');

        }
        if (value == 13000) {

          xLable.push('13K');

        }
        if (value == 14000) {

          xLable.push('14K');

        }
        if (value == 15000) {

          xLable.push('15K');

        }
        if (value == 16000) {

          xLable.push('16K');

        }
        if (value == 17000) {

          xLable.push('17K');

        }
        if (value == 18000) {

          xLable.push('18K');

        }
        if (value == 19000) {

          xLable.push('19K');

        }

        if (value == 20000) {

          xLable.push('20K');

        }

        if (value == 30000) {

          xLable.push('30K');

        }

        if (value == 40000) {

          xLable.push('40K');

        }

        if (value == 50000) {

          xLable.push('50K');

        }

        if (value == 60000) {

          xLable.push('60K');

        }
        if (value == 70000) {

          xLable.push('70K');

        }
        if (value == 80000) {

          xLable.push('80K');

        }
        if (value == 90000) {

          xLable.push('90K');

        }
        if (value == 100000) {

          xLable.push('100K');

        }
        if (value == 110000) {

          xLable.push('110K');

        }
        if (value == 120000) {

          xLable.push('120K');

        }

        return xLable

      },

      textStyle: {

        fontSize: 13,

        color: '#5D5D5D',

      }

    },

    min: 0,

    max: 60000,

  },

  series: [],
};

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  });
  canvas.setChart(chart);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 城市代码
    code: [],
    color: ['#44B2FB'],
    listNum : 0,
    // 折线图数据
    ec: {
      onInit: initChart,
      lazyLoad: true
    },
    // 城市名称
    cityName:[],
    multiArray: [[{name: "广东", provinceCode: "guangdong"},{name: "北京", provinceCode: "beijing"},{name: "上海", provinceCode: "shanghai"},{name: "重庆", provinceCode: "chongqin"},{name: "天津", provinceCode: "tianjin"},{name: "浙江", provinceCode: "zhejiang"},{name: "江苏", provinceCode: "jiangsu"},{name: "湖北", provinceCode: "hubei"},{name: "四川", provinceCode: "sichuang"},{name: "山东", provinceCode: "shandong"},{name: "安徽", provinceCode: "anhui"},{name: "湖南", provinceCode: "hunan"}],[{name: "广州", cityCode: "guangzhou", provinceCode: "guangdong"},{name: "佛山", cityCode: "foshan", provinceCode: "guangdong"},{name: "东莞", cityCode: "dongguan", provinceCode: "guangdong"},{name: "中山", cityCode: "zhongshan", provinceCode: "guangdong"},{name: "惠州", cityCode: "huizhou", provinceCode: "guangdong"},{name: "江门", cityCode: "jiangmen", provinceCode: "guangdong"},{name: "珠海", cityCode: "zhuhai", provinceCode: "guangdong"},{name: "肇庆", cityCode: "zhaoqing", provinceCode: "guangdong"},{name: "深圳", cityCode: "shenzhen", provinceCode: "guangdong"}]],
    multiIndex: [0, 0],
    selectCity:[],
    twoMonths:[],
    threeMonths:[],
    sixMonths:[],
    oneYear:[],
    threeYears:[],
    fiveYears:[],
    timeType:'oneYear',
    result:[],
    max:0,
    min:0,
    yMaxHistory:[],
    yMinHistory:[]
},

// 选择确认触发事件
bindMultiPickerChange: function (e) {
  // 判断是否已经存在该城市,避免重复添加
  let code = this.data.selectCity[0].cityCode
  let codeList = this.data.code
  let isOk = true
  codeList.forEach((item)=>{
    if(item == code){
      wx.showToast({
        title: '已存在该城市',
        icon: 'error'
      })
      return isOk = false
    }
  })
  if(isOk == true){
    let name = this.data.selectCity[0].name
    this.setData({
      multiIndex: e.detail.value
    })
    let color = '#' + Math.floor(Math.random() * 0xffffff).toString(16)
    this.addContrast(code,name,color)
  }else{
    wx.showToast({
      title: '已存在该城市',
      icon: 'error'
    })
  }
},

// 进入选择时滑动触发
bindMultiPickerColumnChange: function (e) {
  let code = this.data.multiArray[0][e.detail.value].provinceCode
  // 切换省份时更新城市信息
  var data = {
    multiArray: this.data.multiArray,
    multiIndex: this.data.multiIndex
  };
  if(e.detail.column == 0){
    this.getCity(code).then((res)=>{
      data.multiIndex[e.detail.column] = e.detail.value;
      if(res == undefined){
        data.multiArray[1] = [{name:'无'}]
      }else{
        data.multiArray[1] = res
        // 滑动第一列时设置默认选中的城市
        this.setData({selectCity:[res[0]]})
      }
      this.setData(data)
    })
  }
  // 获取当前选定的城市
  else if(e.detail.column == 1 ){
    let cityInfo = []
    cityInfo.push(this.data.multiArray[1][e.detail.value])
    data.multiIndex[e.detail.column] = e.detail.value;
    this.setData({selectCity:cityInfo})
    this.setData(data)
  }
},

// 点击添加对比触发事件
clickPicker(){
  // 处理未滑动选择，直接确认时的事件
  let indexList = this.data.multiIndex
  let newSelectCity = []
  let index = indexList[1]
  if(indexList[0] == 0){
    // 未滑动选择，默认选择选择器历史第二列的索引位置
    // 避免用户可能已经删除已经存在的城市历史数据，需要重新获取
    this.getCity('guangdong').then((res)=>{
      let cityInfo = res[index]
      newSelectCity.push(cityInfo)
      this.setData({selectCity:newSelectCity})
    })
  }
},

// 根据城市编码绘制房价折线图
async drawLine(code,name,color,type,flag){
  let that = this
  //获取城市房价数据
  await this.getDetail(code,flag).then(()=>{
    if(flag == false){
      wx.hideLoading({
        success: (res) => {
          this.detailShow()
        },
      })
    }
    let infoList
    let info
    // 判断选择时间区间类型来绘制折线图
    if(type == 'oneYear'){
      infoList = this.data.oneYear
    }else if(type == 'threeYears'){
      infoList = this.data.threeYears
    }else if(type == 'fiveYears'){
      infoList = this.data.fiveYears
    }else if(type == 'threeYears'){
      infoList = this.data.threeYears
    }else if(type == 'twoMonths'){
      infoList = this.data.twoMonths
    }else if(type == 'threeMonths'){
      infoList = this.data.threeMonths
    }else if(type == 'sixMonths'){
      infoList = this.data.sixMonths
    }
    // 判断此时需要绘制的城市折线图
    let listIndex = 0
    infoList.forEach((item,i)=>{
      if(item[0].cityCode.indexOf(code) != -1){
        listIndex = i
      }
    })
    info = infoList[listIndex]
    let timeList = []
    let priceList = []
    info.forEach((item)=>{
      let time = item.priceDate.split(" ")
      timeList.push(time[0])
      let price = item.cityPrice
      priceList.push(price)
    })
    // 折线图横坐标
    option.xAxis.data = timeList
    // 折线图纵坐标
    // 显示的最大值
    let max = Math.max(...priceList).toString().split("")
    let maxList = []
    max.forEach((item,i)=>{
      if(i == 0){
        maxList.push(item)
      }else{
        maxList.push("0")
      }
    })
    let maxInteger = parseInt(maxList.join(""))
    if(maxInteger > that.data.max){
      let yMaxList = that.data.yMaxHistory
      yMaxList.push(maxInteger * 2)
      that.setData({yMaxHistory:yMaxList,max:maxInteger})
      option.yAxis.max = maxInteger * 2
    }
    // 显示的最小值
    // let min = priceList[0].toString().split("")
    // if(that.data.min == 0){
    //   that.setData({min:priceList[0]})
    // }
    // let minList = []
    // min.forEach((item,i)=>{
    //   if(i == 0){
    //     minList.push(item)
    //   }else{
    //     minList.push("0")
    //   }
    // })
    // let minInteger = parseInt(minList.join(""))
    // if(minInteger <= that.data.min){
    //   let yMinList = that.data.yMinHistory
    //   yMinList.push(minInteger * 2)
    //   that.setData({yMinHistory:yMinList,min:minInteger})
    //   option.yAxis.min = minInteger * 2
    // }
    let yData = {

      name: name,
  
      type: 'line',
  
      data: priceList,
  
      symbol: 'none',
  
      itemStyle: {
  
        normal: {
  
          lineStyle: {
  
            color: color
  
          }
  
        }
  
      }
  
    }
    option.series.push(yData)
    let legendData = {

      name: name,

      textStyle: {

        fontSize: 13,

        color: color

      },

      icon: 'roundRect'

    }
    option.legend.data.push(legendData)
    // 折线图标签颜色
    option.color = this.data.color
    // 设置折线图显示时间区间间隔
    if(this.data.timeType == 'threeMonths' || this.data.timeType == 'twoMonths'){
      option.xAxis.axisLabel.interval = 0
    }else if(this.data.timeType == 'sixMonths'){
      option.xAxis.axisLabel.interval = 2
    }else if(this.data.timeType == 'oneYear'){
      option.xAxis.axisLabel.interval = 3
    }else if(this.data.timeType == 'threeYears'){
      option.xAxis.axisLabel.interval = 10
    }else if(this.data.timeType == 'fiveYears'){
      option.xAxis.axisLabel.interval = 20
    }
    let echartsComponnet = that.selectComponent("#mychart-dom-bar")
    echartsComponnet.init((canvas, width, height, dpr) => {
    const chart = echarts.init(canvas, null, {
      width: width,
      height: height,
      devicePixelRatio: dpr
    });
    chart.setOption(option)
    // 一定要return，否则tooltips无法使用
    return chart
  })
  })
},

// 添加城市进行对比
addContrast(code,name,color){
  let that = this
  let codeList = this.data.code
  let type = this.data.timeType
  let num  = this.data.listNum
  let colorList = this.data.color
  let cityNameList = this.data.cityName
  if(option.series.length < 3 ){
    wx.showLoading({
      title: '添加城市中',
      success(){
        that.drawLine(code,name,color,type,false)
        num += 1
        codeList.push(code)
        colorList.push(color)
        cityNameList.push(name)
        that.setData({listNum:num,code:codeList,color:colorList,cityName:cityNameList})
      }
    })
  }else{
    wx.showToast({
      title: '最多3个城市',
      icon: 'error'
    })
  }
},

// 获取省份的城市
getCity(code){
  return new Promise((resolve)=>{
    wx.request({
      url: `https://fang.hscode.vip/api/areaDict/get-city-by-province-code?province_code=${code}`,
      success(res){
        resolve(res.data.data.info)
      },
      fail(res){
        console.log(res)
      }
    })
  })
},

// 根据日期获取城市房价
getPriceByDate(code,startYear,endYear,startMonth,endMonth){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: 'https://fang.hscode.vip/api/cityPrice/get-city-price-by-code-and-date',
      data:{
        cityCode:code,
        startDate:`${startYear}-${startMonth}-01`,
        endDate:`${endYear}-${endMonth}-01`
      },
      success(res){
        let info = res.data.data.info
        resolve(info)
      },
      fail(res){
        console.log(res)
        reject(res)
      }
  })
  })
  },

// 获取房价具体数据
async getDetail(code,flag){
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth()
  let oneYearList = this.data.oneYear
  let threeYearsList = this.data.threeYears
  let fiveYearsList = this.data.fiveYears
  let twoMonthsList = this.data.twoMonths
  let threeMonthsList = this.data.threeMonths
  let sixMonthsList = this.data.sixMonths
  if(flag == false){
    //查询不存在该记录，需要进行获取
    if(month <= 6){
      // 获取近1年的房价变化
      await this.getPriceByDate(code,year-1,year,month+1,month).then((res)=>{
        oneYearList.push(res)
      })
      // 获取近3年的房价变化
      await this.getPriceByDate(code,year-3,year,month+1,month).then((res)=>{
        threeYearsList.push(res)
      })
      // 获取近5年的房价变化
      await this.getPriceByDate(code,year-5,year,month+1,month).then((res)=>{
        fiveYearsList.push(res)
      })
      if(month <= 1){
        // 获取近1月的房价变化
        await this.getPriceByDate(code,year-1,year,month+11,month).then((res)=>{
          twoMonthsList.push(res)
        })
        // 获取近3月的房价变化
        await this.getPriceByDate(code,year-1,year,month+9,month).then((res)=>{
          threeMonthsList.push(res)
        })
        // 获取近6月的房价变化
        await this.getPriceByDate(code,year-1,year,month+6,month).then((res)=>{
          sixMonthsList.push(res)
        })
        if(month == 0){
          // 获取近1年的房价变化
          await this.getPriceByDate(code,year-1,year,month+1,month).then((res)=>{
            oneYearList.push(res)
          })
          // 获取近3年的房价变化
          await this.getPriceByDate(code,year-3,year,month+1,month).then((res)=>{
            threeYearsList.push(res)
          })
          // 获取近5年的房价变化
          await this.getPriceByDate(code,year-5,year,month+1,month).then((res)=>{
            fiveYearsList.push(res)
          })
        }
      }
      else if(month > 1 && month <= 3){
        // 获取近1月的房价变化
        await this.getPriceByDate(code,year,year,month-1,month).then((res)=>{
          twoMonthsList.push(res)
        })
        // 获取近3月的房价变化
        await this.getPriceByDate(code,year-1,year,month+9,month).then((res)=>{
          threeMonthsList.push(res)
        })
        // 获取近6月的房价变化
        await this.getPriceByDate(code,year-1,year,month+6,month).then((res)=>{
          sixMonthsList.push(res)
        })
      }
      else if(month > 3 && month <= 6){
        // 获取近1月的房价变化
        await this.getPriceByDate(code,year,year,month-1,month).then((res)=>{
          twoMonthsList.push(res)
        })
        // 获取近3月的房价变化
        await this.getPriceByDate(code,year,year,month-2,month).then((res)=>{
          threeMonthsList.push(res)
        })
        // 获取近6月的房价变化
        await this.getPriceByDate(code,year-1,year,month+7,month).then((res)=>{
          sixMonthsList.push(res)
        })
      }
    }else{
      // 获取近1月的房价变化
      await this.getPriceByDate(code,year,year,month-1,month).then((res)=>{
        twoMonthsList.push(res)
      })
      // 获取近3月的房价变化
      await this.getPriceByDate(code,year,year,month-2,month).then((res)=>{
        threeMonthsList.push(res)
      })
      // 获取近6月的房价变化
      await this.getPriceByDate(code,year,year,month-5,month).then((res)=>{
        sixMonthsList.push(res)
      })
      // 获取近1年的房价变化
      await this.getPriceByDate(code,year-1,year,month+1,month).then((res)=>{
        oneYearList.push(res)
      })
      // 获取近3年的房价变化
      await this.getPriceByDate(code,year-3,year,month+1,month).then((res)=>{
        threeYearsList.push(res)
      })
      // 获取近5年的房价变化
      await this.getPriceByDate(code,year-5,year,month+1,month).then((res)=>{
        fiveYearsList.push(res)
      })
    }
  }
  this.setData({twoMonths:twoMonthsList,threeMonths:threeMonthsList,sixMonths:sixMonthsList,oneYear:oneYearList,threeYears:threeYearsList,fiveYears:fiveYearsList})
},

// 判断是否已经存在该记录
checkData(type,code){
  let flag
  if(type == 'oneYear'){
    this.data.oneYear.forEach((item)=>{
      let inData = item[0].cityCode.indexOf(code)
      if(inData != -1){
        // 存在该城市数据
        return flag = true
      }
    })
  }
  else if(type == 'threeYears'){
    this.data.threeYears.forEach((item)=>{
      let inData = item[0].cityCode.indexOf(code)
      if(inData != -1){
        // 存在该城市数据
        return flag = true
      }
    })
  }
  else if(type == 'fiveYears'){
    this.data.fiveYears.forEach((item)=>{
      let inData = item[0].cityCode.indexOf(code)
      if(inData != -1){
        // 存在该城市数据
        return flag = true
      }
    })
  }else if(type == 'twoMonths'){
    this.data.twoMonths.forEach((item)=>{
      let inData = item[0].cityCode.indexOf(code)
      if(inData != -1){
        // 存在该城市数据
        return flag = true
      }
    })
  }
  else if(type == 'threeMonths'){
    this.data.threeMonths.forEach((item)=>{
      let inData = item[0].cityCode.indexOf(code)
      if(inData != -1){
        // 存在该城市数据
        return flag = true
      }
    })
  }
  else if(type == 'sixMonths'){
    this.data.sixMonths.forEach((item)=>{
      let inData = item[0].cityCode.indexOf(code)
      if(inData != -1){
        // 存在该城市数据
        return flag = true
      }
    })
  }
  return flag
},

// 点击切换折线图时间区间
clickTimeType(event){
  let type = event.currentTarget.dataset.type
  this.setData({timeType:type})
  // 清空已绘制的折线图
  option.series = []
  let num = this.data.listNum
  for(let i = 0; i < num; i ++){
    if(this.checkData(type,this.data.code[i]) == true){
      // 已经获取了该城市该时间区间的房价记录
      this.drawLine(this.data.code[i],this.data.cityName[i],this.data.color[i],type,true)
    }
    else if(type,this.data.code[i]== false){
      // 没有获取该城市该时间区间的房价记录
      this.drawLine(this.data.code[i],this.data.cityName[i],this.data.color[i],type,false)
    }
  }
},

// 具体表现数据处理
detailShow(){
    let resultList = this.data.result
    let i = this.data.listNum - 1
    // 两月增幅
    let twoMonthsPercent = (((this.data.twoMonths[i][1].cityPrice - this.data.twoMonths[i][0].cityPrice)/(this.data.twoMonths[i][1].cityPrice + this.data.twoMonths[i][0].cityPrice)) * 100).toFixed(2)
    // 三月增幅
    let threeMonthsPercent = (((this.data.threeMonths[i][2].cityPrice - this.data.threeMonths[i][0].cityPrice)/(this.data.threeMonths[i][2].cityPrice + this.data.threeMonths[i][0].cityPrice)) * 100).toFixed(2)
    // 6月增幅
    let sixMonthsPercent = (((this.data.sixMonths[i][5].cityPrice - this.data.sixMonths[i][0].cityPrice)/(this.data.sixMonths[i][5].cityPrice + this.data.sixMonths[i][0].cityPrice)) * 100).toFixed(2)
    // 1年增幅
    let oneYearPercent = (((this.data.oneYear[i][11].cityPrice - this.data.oneYear[i][0].cityPrice)/(this.data.oneYear[i][11].cityPrice + this.data.oneYear[i][0].cityPrice)) * 100).toFixed(2)
    // 3年增幅
    let threeYearsPercent = (((this.data.threeYears[i][35].cityPrice - this.data.threeYears[i][0].cityPrice)/(this.data.threeYears[i][35].cityPrice + this.data.threeYears[i][0].cityPrice)) * 100).toFixed(2)
    // 5年增幅
    let fiveYearsPercent = (((this.data.fiveYears[i][59].cityPrice - this.data.fiveYears[i][0].cityPrice)/(this.data.fiveYears[i][59].cityPrice + this.data.fiveYears[i][0].cityPrice)) * 100).toFixed(2)
    resultList.push([this.data.color[i],this.data.cityName[i],this.data.twoMonths[i][1],twoMonthsPercent,threeMonthsPercent,sixMonthsPercent,oneYearPercent,threeYearsPercent,fiveYearsPercent])
    this.setData({result:resultList})
},

// 删除已经获取的城市记录
deleteCity(e){
  // 获取该城市索引
  let index = e.currentTarget.dataset.city
  // 获取数据数组
  let newCityName = this.data.cityName
  let newColor = this.data.color
  let newTwoMonths = this.data.twoMonths
  let newThreeMonths = this.data.threeMonths
  let newSixMonths = this.data.sixMonths
  let newOneYear = this.data.oneYear
  let newthreeYears = this.data.threeYears
  let newfiveYears = this.data.fiveYears
  let newListNum = this.data.listNum
  let newCode = this.data.code
  let newYMaxList = this.data.yMaxHistory
  let newMax = this.data.max
  // 删除本地数据
  newCityName.splice(index,1)
  newColor.splice(index,1)
  newTwoMonths.splice(index,1)
  newThreeMonths.splice(index,1)
  newSixMonths.splice(index,1)
  newOneYear.splice(index,1)
  newthreeYears.splice(index,1)
  newfiveYears.splice(index,1)
  newListNum -= 1
  newCode.splice(index,1)
  newYMaxList.splice(index,1)
  newMax = newYMaxList[newYMaxList.length - 1]
  if(newMax == undefined){
    newMax = 0
  }
  // 删除已经显示到数据
  let showResult = this.data.result
  showResult.splice(index,1)
  // 保存
  this.setData({cityName:newCityName,color:newColor,twoMonths:newTwoMonths,threeMonths:newThreeMonths,sixMonths:newSixMonths,oneYear:newOneYear,threeYears:newthreeYears,fiveYears:newfiveYears,listNum:newListNum,result:showResult,code:newCode,yMaxHistory:newYMaxList,max:newMax})
  // 重新绘制折线图
  option.color = newColor
  option.series.splice(index,1)
  option.legend.data.slice(index,1)
  let echartsComponnet = this.selectComponent("#mychart-dom-bar")
    echartsComponnet.init((canvas, width, height) => {
    const chart = echarts.init(canvas, null, {
      width: width,
      height: height
    });
    chart.setOption(option)
    // 一定要return，否则tooltips无法使用
    return chart
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let codeList = [options.code]
    let cityNameList = [options.name]
    let num = 1
    //获取近一年的城市房价数据用于绘制折线图
    wx.showLoading({
      title: '查询中',
    })
    this.drawLine(options.code,options.name,'#44B2FB','oneYear',false)
    this.setData({code:codeList,cityName:cityNameList,listNum:num})
    let that = this
    // 获取对比的省份
    wx.request({
      url: 'https://fang.hscode.vip/api/areaDict/get-all-province',
      success(res){
        let src = 'multiArray[0]'
        that.setData({[src]:res.data.data.info})
      },
      fail(res){
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // 退出页面，清除绘制的折线图
    option.color = []
    option.series = []
    option.legend.data = []
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
  //用户点击右上角分享朋友圈
  onShareTimeline: function () {
    return {
        title: '',
        query: {
          key: value
        },
        imageUrl: ''
      }
  },
  
})