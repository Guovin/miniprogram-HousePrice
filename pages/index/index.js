// index.js
import * as echarts from '../../ec-canvas/echarts';

var option = {

  title: {

    left: 'center'

  },

  renderAsImage: true, //支持渲染为图片模式

  color: [],//图例图标颜色

  legend: {

    show: true,

    itemGap: 25,//每个图例间的间隔

    top: 5,

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

    top: 40,

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

// 获取应用实例
const app = getApp()
// 初始化年月选择
const date = new Date()
const startYears = []
const startMonths = []
const endYears = []
const endMonths = []

for(let i = 2012; i <= date.getFullYear(); i++){
  startYears.push(i)
  endYears.push(i)
}

for(let i = 1; i <= 12; i++){
  startMonths.push(i)
  endMonths.push(i)
}

Page({
  data: {
    province:[],
    city:[],
    monthPrice:[],
    yearPrice:{},
    startYears,
    endYears,
    startMonths,
    endMonths,
    value: [9999, 1],
    startYear:'2021',
    startMonth:'01',
    endYear:'2021',
    endMonth:'12',
    cardInfo:[],
    cityName:{'guangzhou':'广州'},
    multiArray: [[{name: "广东", provinceCode: "guangdong"},{name: "北京", provinceCode: "beijing"},{name: "上海", provinceCode: "shanghai"},{name: "重庆", provinceCode: "chongqing"},{name: "天津", provinceCode: "tianjin"},{name: "浙江", provinceCode: "zhejiang"},{name: "江苏", provinceCode: "jiangsu"},{name: "湖北", provinceCode: "hubei"},{name: "四川", provinceCode: "sichuang"},{name: "山东", provinceCode: "shandong"},{name: "安徽", provinceCode: "anhui"},{name: "湖南", provinceCode: "hunan"}],[{name: "广州", cityCode: "guangzhou", provinceCode: "guangdong"},{name: "佛山", cityCode: "foshan", provinceCode: "guangdong"},{name: "东莞", cityCode: "dongguan", provinceCode: "guangdong"},{name: "中山", cityCode: "zhongshan", provinceCode: "guangdong"},{name: "惠州", cityCode: "huizhou", provinceCode: "guangdong"},{name: "江门", cityCode: "jiangmen", provinceCode: "guangdong"},{name: "珠海", cityCode: "zhuhai", provinceCode: "guangdong"},{name: "肇庆", cityCode: "zhaoqing", provinceCode: "guangdong"},{name: "深圳", cityCode: "shenzhen", provinceCode: "guangdong"}]],
    multiIndex: [0, 0],
    selectCity: [],
    // 折线图
    ec: {
      onInit: initChart,
      lazyLoad: true
    },
    tenYears: []
  },

// 根据城市编码绘制房价折线图
async drawLine(code,name,color,flag){
  let that = this
  //获取城市房价数据
  await this.getDetail(code,flag).then(()=>{
    let infoList
    let info
    // 按时间区间类型来绘制折线图
    infoList = this.data.tenYears
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
      let yMaxList = that.data.yMaxHistory
      yMaxList.push(maxInteger * 2)
      that.setData({yMaxHistory:yMaxList,max:maxInteger})
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
    option.color = color
    // 设置折线图显示时间区间间隔
    option.xAxis.axisLabel.interval = 40
    let echartsComponnet = that.selectComponent("#mychart-dom-index")
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

// 获取房价具体数据
async getDetail(code,flag){
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth()
  let tenYearsList = this.data.tenYears
  if(flag == false){
    //查询不存在该记录，需要进行获取
      // 获取近10年的房价变化
      await this.getPriceByDate(code,year-10,year,month+1,month+1).then((res)=>{
        tenYearsList.push(res)
      })
  }
  this.setData({tenYears:tenYearsList})
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
        if(res.data.code == 400){
          wx.showToast({
            title: '访问过于频繁',
            icon: 'error'
          })
        }
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

// 点击查询房价触发事件
clickPicker(){
  // 处理未滑动选择，直接确认时的事件
  let indexList = this.data.multiIndex
  let newSelectCity = this.data.selectCity
  if(indexList[0] == 0 && indexList[1] == 0 && newSelectCity.length == 0){
    // 未滑动选择，默认选择第一个广东-广州
    // 避免用户可能已经删除已经存在的广州数据，需要重新获取
    this.getCity('guangdong').then((res)=>{
      let cityInfo = res[0]
      newSelectCity.push(cityInfo)
      this.setData({selectCity:newSelectCity})
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

// 选择确认触发事件
bindMultiPickerChange: function (e) {
  let code = this.data.selectCity[0].cityCode
  let name = this.data.selectCity[0].name
  this.searchGoDetail(code,name)
},

// 点击查询确认跳转详情页
searchGoDetail(code,name){
  wx.navigateTo({
    url: `../detail/detail?code=${code}&name=${name}`
  })
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

  selectStartMonth(event){
    let selectList = event.detail.value
    let year = this.data.startYears[selectList[0]]
    let month = selectList[1] + 1
    let years = this.data.startYears
    let endYearLists = years.filter((item)=>{return item >= year})
    this.setData({startYear:year,startMonth:month,endYears:endYearLists})
  },

  selectEndMonth(event){
    let selectList = event.detail.value
    let year = this.data.endYears[selectList[0]]
    let startMonth = this.data.startMonth
    let startYear = this.data.startYear
    let months = this.data.startMonths
    let endMonthLists
    if(year == startYear){
      endMonthLists = months.filter((item)=>{return item >= startMonth})
    }else{
      endMonthLists = months
    }
    let month = endMonthLists[selectList[1]]
    this.setData({endYear:year,endMonth:month,endMonths:endMonthLists})
  },

  // getCity(event){
  //   let that = this
  //   wx.request({
  //     url: `https://fang.hscode.vip/api/areaDict/get-city-by-province-code?province_code=${event.currentTarget.dataset.code}`,
  //     success(res){
  //       that.setData({city:res.data.data.info})
  //     },
  //     fail(res){
  //       console.log(res)
  //     }
  //   })
  // },

  getMonthPrice(event){
    let that = this
    wx.request({
      url: 'https://fang.hscode.vip/api/cityPrice/get-city-price-by-code-and-date',
      data:{
        cityCode:event.currentTarget.dataset.cityCode,
        startDate:`${that.data.startYear}-${that.data.startMonth}-01`,
        endDate:`${that.data.endYear}-${that.data.endMonth}-01`
      },
      success(res){
        console.log(res)
        that.setData({monthPrice:res.data.data.info})
      },
      fail(res){
        console.log(res)
      }
    })
  },

  getYearPrice(event){
    let that = this
    wx.request({
      url: 'https://fang.hscode.vip/api/cityPrice/get-city-year-price-by-code-and-date',
      data:{
        cityCode:event.currentTarget.dataset.cityCode,
        startDate:`${that.data.startYear}-${that.data.startMonth}-01`,
        endDate:`${that.data.endYear}-${that.data.endMonth}-01`
      },
      success(res){
        console.log(res)
        that.setData({yearPrice:res.data.data.info})
        console.log(res.data.data.info)
      },
      fail(res){
        console.log(res)
      }
    })
  },

  // 获取首页卡片信息
  getCityCard(code,name){
    let that = this
    let date = new Date()
    let year = date.getFullYear()
    let beforeMonth = date.getMonth()
    let infoList = this.data.cardInfo
    this.getPriceByDate(code,year,year,beforeMonth-1,beforeMonth+1).then((res)=>{
      let beforePrice = res[0].cityPrice
      let nowPrice = res[1].cityPrice
      let cityList = []
      let cityInfo = {}
      let nowMonthPrice = {}
      cityInfo.key = name
      cityInfo.value = code
      nowMonthPrice.key = beforePrice
      nowMonthPrice.value = nowPrice
      // 月增幅
      let twoMonthsPercent = Math.abs((((nowPrice - beforePrice)/(beforePrice + beforePrice)) * 100).toFixed(2))
      cityList.push(cityInfo,nowMonthPrice,twoMonthsPercent)
      infoList.push(cityList)
      that.setData({cardInfo:infoList})
    })
  },

  // 点击卡片跳转详情页
  goDetail(event){
    let code = event.currentTarget.dataset.code
    let name = event.currentTarget.dataset.name
    wx.navigateTo({
      url: `../detail/detail?code=${code}&name=${name}`
    })
  },

  onLoad() {
    this.drawLine('guangzhou','广州','#44B2FB',false)
    let that = this
    wx.request({
      url: 'https://fang.hscode.vip/api/areaDict/get-all-province',
      success(res){
        that.setData({province:res.data.data.info})
      },
      fail(res){
        console.log(res)
      }
    })
    // 遍历获取首页卡片数据
    // 根据省份获取首页卡片
    // this.getCity('guangdong').then((res)=>{
    //   res.forEach((item)=>{
    //     this.getCityCard(item.cityCode,item.name)
    //   })
    // })

    // 根据省份的主要城市获取卡片
    let cityList = [{cityCode:'guangzhou',name:'广州'},{cityCode:'beijing',name:'北京'},{cityCode:'shanghai',name:'上海'},{cityCode:'chongqing',name:'重庆'},{cityCode:'tianjin',name:'天津'},{cityCode:'hangzhou',name:'杭州'},{cityCode:'suzhou',name:'苏州'},{cityCode:'wuhan',name:'武汉'},{cityCode:'chengdu',name:'成都'},{cityCode:'qingdao',name:'青岛'},{cityCode:'hefei',name:'合肥'},{cityCode:'changsha',name:'长沙'}]
    cityList.forEach((item)=>{
          this.getCityCard(item.cityCode,item.name)
        })
  },

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
