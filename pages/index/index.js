// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    province:[],
    city:[],
    monthPrice:[],
    yearPrice:{}
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
        startDate:'2021-01-01',
        endDate:'2021-06-01'
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
        startDate:'2019-01-01',
        endDate:'2021-06-01'
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
  },
  
})
