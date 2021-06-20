// pages/detail/detail.js
import * as echarts from '../../ec-canvas/echarts';

var option = {

  title: {//标题

    text: '近一年房价',

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
    code:'',
    // 折线图数据
    ec: {
      onInit: initChart,
      lazyLoad: true
    },
    // 月房价数据
    monthPrice:[],
    // 城市名称
    cityName:'',
    // 当前y轴最大值
    max:0,
    multiArray: [[{name: "广东", provinceCode: "guangdong"},{name: "北京", provinceCode: "beijing"},{name: "上海", provinceCode: "shanghai"},{name: "重庆", provinceCode: "chongqin"},{name: "天津", provinceCode: "tianjin"},{name: "浙江", provinceCode: "zhejiang"},{name: "江苏", provinceCode: "jiangsu"},{name: "湖北", provinceCode: "hubei"},{name: "四川", provinceCode: "sichuang"},{name: "山东", provinceCode: "shandong"},{name: "安徽", provinceCode: "anhui"},{name: "湖南", provinceCode: "hunan"}],[{name: "广州", cityCode: "guangzhou", provinceCode: "guangdong"},{name: "佛山", cityCode: "foshan", provinceCode: "guangdong"},{name: "东莞", cityCode: "dongguan", provinceCode: "guangdong"},{name: "中山", cityCode: "zhongshan", provinceCode: "guangdong"},{name: "惠州", cityCode: "huizhou", provinceCode: "guangdong"},{name: "江门", cityCode: "jiangmen", provinceCode: "guangdong"},{name: "珠海", cityCode: "zhuhai", provinceCode: "guangdong"},{name: "肇庆", cityCode: "zhaoqing", provinceCode: "guangdong"},{name: "深圳", cityCode: "shenzhen", provinceCode: "guangdong"}]],
    multiIndex: [0, 0],
},

bindMultiPickerChange: function (e) {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  this.setData({
    multiIndex: e.detail.value
  })
},

bindMultiPickerColumnChange: function (e) {
  console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
  let code = this.data.multiArray[0][e.detail.value].provinceCode
  // 切换省份时更新城市信息
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
    }
    console.log(res)
    this.setData(data);
  })
},

// 根据城市编码绘制房价折线图
drawLine(code,name,color){
  let that = this
  //获取近一年的城市房价数据
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth()
  wx.request({
    url: 'https://fang.hscode.vip/api/cityPrice/get-city-price-by-code-and-date',
    data:{
      cityCode:code,
      startDate:`${year - 1}-${11 - month}-01`,
      endDate:`${year}-${month + 1}-01`
    },
    success(res){
      let info = res.data.data.info
      that.setData({monthPrice:info})
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

          color: '#383838'

        },

        icon: 'roundRect'

      }
      option.legend.data.push(legendData)
      option.color.push(color)
      let echartsComponnet = that.selectComponent("#mychart-dom-bar")
      echartsComponnet.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      chart.setOption(option)
    })
    },
    fail(res){
      console.log(res)
    }
  })
},

// 添加城市进行对比
addContrast(){
  this.drawLine('jiangmen','江门','green')
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({code:options.code,cityName:options.name})
    //获取近一年的城市房价数据
    this.drawLine(options.code,options.name,'#44B2FB')
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