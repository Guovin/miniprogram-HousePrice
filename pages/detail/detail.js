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

    top: 30,

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

    top:100,

    containLabel: true,//grid 区域是否包含坐标轴的刻度标签

  },

  tooltip: {
    show: true,
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'cross' ,       // 默认为直线，可选为：'line' | 'shadow' | 'cross'
      axis : "x",
    },
    formatter:function(v){
      console.log(v)
    }
  },

  xAxis: {//横坐标

    type: 'category',

    name: '时间',//横坐标名称

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

    name: '价格',//纵坐标名称

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

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
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
    // 当前y轴最大值
    max:0,
    multiArray: [[{name: "广东", provinceCode: "guangdong"},{name: "北京", provinceCode: "beijing"},{name: "上海", provinceCode: "shanghai"},{name: "重庆", provinceCode: "chongqin"},{name: "天津", provinceCode: "tianjin"},{name: "浙江", provinceCode: "zhejiang"},{name: "江苏", provinceCode: "jiangsu"},{name: "湖北", provinceCode: "hubei"},{name: "四川", provinceCode: "sichuang"},{name: "山东", provinceCode: "shandong"},{name: "安徽", provinceCode: "anhui"},{name: "湖南", provinceCode: "hunan"}],[{name: "广州", cityCode: "guangzhou", provinceCode: "guangdong"},{name: "佛山", cityCode: "foshan", provinceCode: "guangdong"},{name: "东莞", cityCode: "dongguan", provinceCode: "guangdong"},{name: "中山", cityCode: "zhongshan", provinceCode: "guangdong"},{name: "惠州", cityCode: "huizhou", provinceCode: "guangdong"},{name: "江门", cityCode: "jiangmen", provinceCode: "guangdong"},{name: "珠海", cityCode: "zhuhai", provinceCode: "guangdong"},{name: "肇庆", cityCode: "zhaoqing", provinceCode: "guangdong"},{name: "深圳", cityCode: "shenzhen", provinceCode: "guangdong"}]],
    multiIndex: [0, 0],
    selectCity:[],
    twoMonths:[],
    threeMonths:[],
    sixMonths:[],
    oneYear:[],
    twoYears:[],
    threeYears:[],
    timeType:'oneYear',
    result:[]
},

// 选择确认触发事件
bindMultiPickerChange: function (e) {
  let code = this.data.selectCity[0].cityCode
  let name = this.data.selectCity[0].name
  this.setData({
    multiIndex: e.detail.value
  })
  let color = '#' + Math.floor(Math.random() * 0xffffff).toString(16)
  this.addContrast(code,name,color)
},

// 进入选择时滑动触发
bindMultiPickerColumnChange: function (e) {
  let code = this.data.multiArray[0][e.detail.value].provinceCode
  let cityInfo = []
  // 切换省份时更新城市信息
  if(e.detail.column == 0){
    this.getCity(code).then((res)=>{
      var data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      };
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
    cityInfo.push(this.data.multiArray[1][e.detail.value])
    this.setData({selectCity:cityInfo})
  }
},

// 根据城市编码绘制房价折线图
async drawLine(code,name,color,type,flag){
  let that = this
  //获取城市房价数据
  await this.getDetail(code,flag).then(()=>{
    if(flag == false){
      this.detailShow()
    }
    let infoList
    let info
    // 判断选择时间区间类型来绘制折线图
    if(type == 'oneYear'){
      infoList = this.data.oneYear
    }else if(type == 'twoYears'){
      infoList = this.data.twoYears
    }else if(type == 'threeYears'){
      infoList = this.data.threeYears
    }else if(type == 'twoYears'){
      infoList = this.data.twoYears
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
      that.setData({max:maxInteger})
      option.yAxis.max = maxInteger * 2
    }
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
    }else if(this.data.timeType == 'twoYears'){
      option.xAxis.axisLabel.interval = 6
    }else if(this.data.timeType == 'threeYears'){
      option.xAxis.axisLabel.interval = 12
    }
    let echartsComponnet = that.selectComponent("#mychart-dom-bar")
    echartsComponnet.init((canvas, width, height) => {
    const chart = echarts.init(canvas, null, {
      width: width,
      height: height
    });
    chart.setOption(option)
  })
  })
},

// 添加城市进行对比
addContrast(code,name,color){
  let type = this.data.timeType
  let num  = this.data.listNum
  let codeList = this.data.code
  let colorList = this.data.color
  let cityNameList = this.data.cityName
  if(option.series.length < 3 ){
    this.drawLine(code,name,color,type,false)
    num += 1
    codeList.push(code)
    colorList.push(color)
    cityNameList.push(name)
    this.setData({listNum:num,code:codeList,color:colorList,cityName:cityNameList})
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
  let twoYearsList = this.data.twoYears
  let threeYearsList = this.data.threeYears
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
      // 获取近2年的房价变化
      await this.getPriceByDate(code,year-2,year,month+1,month).then((res)=>{
        twoYearsList.push(res)
      })
      // 获取近3年的房价变化
      await this.getPriceByDate(code,year-3,year,month+1,month).then((res)=>{
        threeYearsList.push(res)
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
          // 获取近2年的房价变化
          await this.getPriceByDate(code,year-2,year,month+1,month).then((res)=>{
            twoYearsList.push(res)
          })
          // 获取近3年的房价变化
          await this.getPriceByDate(code,year-3,year,month+1,month).then((res)=>{
            threeYearsList.push(res)
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
      // 获取近2年的房价变化
      await this.getPriceByDate(code,year-2,year,month+1,month).then((res)=>{
        twoYearsList.push(res)
      })
      // 获取近3年的房价变化
      await this.getPriceByDate(code,year-3,year,month+1,month).then((res)=>{
        threeYearsList.push(res)
      })
    }
  }
  this.setData({twoMonths:twoMonthsList,threeMonths:threeMonthsList,sixMonths:sixMonthsList,oneYear:oneYearList,twoYears:twoYearsList,threeYears:threeYearsList})
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
  else if(type == 'twoYears'){
    this.data.twoYears.forEach((item)=>{
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
  // 2年增幅
  let twoYearsPercent = (((this.data.twoYears[i][23].cityPrice - this.data.twoYears[i][0].cityPrice)/(this.data.twoYears[i][23].cityPrice + this.data.twoYears[i][0].cityPrice)) * 100).toFixed(2)
  // 3年增幅
  let threeYearsPercent = (((this.data.threeYears[i][35].cityPrice - this.data.threeYears[i][0].cityPrice)/(this.data.threeYears[i][35].cityPrice + this.data.threeYears[i][0].cityPrice)) * 100).toFixed(2)
  resultList.push([this.data.color[i],this.data.cityName[i],this.data.twoMonths[i][1],twoMonthsPercent,threeMonthsPercent,sixMonthsPercent,oneYearPercent,twoYearsPercent,threeYearsPercent])
  this.setData({result:resultList})
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let codeList = [options.code]
    let cityNameList = [options.name]
    let num = 1
    //获取近一年的城市房价数据用于绘制折线图
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
  onShareAppMessage: function () {

  }
})