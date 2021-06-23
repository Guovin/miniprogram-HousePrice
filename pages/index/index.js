// index.js
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
    cityName:{'guangzhou':'广州'}
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

  getCity(event){
    let that = this
    wx.request({
      url: `https://fang.hscode.vip/api/areaDict/get-city-by-province-code?province_code=${event.currentTarget.dataset.code}`,
      success(res){
        that.setData({city:res.data.data.info})
      },
      fail(res){
        console.log(res)
      }
    })
  },

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

  // 获取城市名称
  getCityName(code){
    let name
    let obj = this.data.cityName
    for(let key in obj){
      if(code == key){
        return name = obj[key]
      }
    }
  },

  // 获取首页卡片信息
  getCityCard(code){
    let that = this
    let date = new Date()
    let year = date.getFullYear()
    let beforeMonth = date.getMonth()
    let infoList = []
    wx.request({
      url: 'https://fang.hscode.vip/api/cityPrice/get-city-price-by-code-and-date',
      data:{
        cityCode:code,
        startDate:`${year}-${beforeMonth - 1}-01`,
        endDate:`${year}-${beforeMonth + 1}-01`
      },
      success(res){
        // 获取城市名称与价格跌涨
        if(res.data.code == 400){
          wx.showToast({
            title: '访问过于频繁',
            icon: 'error'
          })
        }
        let beforePrice = res.data.data.info[0].cityPrice
        let nowPrice = res.data.data.info[1].cityPrice
        let cityName = that.getCityName(code)
        let cityList = []
        let cityInfo = {}
        let nowMonthPrice = {}
        cityInfo.key = cityName
        cityInfo.value = code
        nowMonthPrice.key = beforePrice
        nowMonthPrice.value = nowPrice
        cityList.push(cityInfo,nowMonthPrice)
        infoList.push(cityList)
        that.setData({cardInfo:infoList})
      },
      fail(res){
        console.log(res)
      }
    })
  },

  // 跳转详情页
  goDetail(event){
    let that = this
    let code = event.currentTarget.dataset.code
    wx.navigateTo({
      url: `../detail/detail?code=${code}&name=${that.data.cityName['guangzhou']}`
    })
  },

  onLoad() {
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
    this.getCityCard('guangzhou')
  },
  
})
