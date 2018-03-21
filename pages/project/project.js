//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    selected: true,
    selected1: false,
    // 大医美的数据
    array_beautiful: [],
    // 大健康的数据
    array_health: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.data.array = [];
    console.log(this.data.array);
    var that = this;
    // 大医美
    wx.request({
      url: 'https://hqsqxx.com/yan/index.php/Home/Use/get',
      method: "GET",
      header: {
        'Content-Type': 'json'
      },
      data: {
        "table": "project",
        "where": {
          "type": "hosp"
        }
      },
      success: function (res) {
        var date = res.data.msg;
        that.setData({
          array_beautiful: date
        })
      },
      fail: function () {
        console.log("接口调用失败");
      }
    })
    // 大健康
    wx.request({
      url: 'https://hqsqxx.com/yan/index.php/Home/Use/get',
      method: "GET",
      header: {
        'Content-Type': 'json'
      },
      data: {
        "table": "project",
        "where": {
          "type": "healthy"
        }
      },
      success: function (res) {
        var date = res.data.msg;
        that.setData({
          array_health: date
        })
      },
      fail: function () {
        console.log("接口调用失败");
      }
    })
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },
  gosearch: function () {
    wx.navigateTo({
      url: '../search/search',
      success: function (res) {
        // success 
      },
      fail: function () {
        // fail 
      },
      complete: function () {
        // complete 
      }
    })
  },
  gopaper: function (event) {
    wx.setStorageSync('super_id', event.currentTarget.id);
    wx.setStorageSync('paper_type', "super");
    wx.navigateTo({
      url: '../paper/paper',
      success: function (res) {
        // success 
      },
      fail: function () {
        // fail 
      },
      complete: function () {
        // complete 
      }
    })
  },
  golearning: function (event) {
    wx.setStorageSync('super_id', event.currentTarget.id);
    wx.setStorageSync('paper_type', "super");
    wx.navigateTo({
      url: '../paper/paper',
      success: function (res) {
        // success 
      },
      fail: function () {
        // fail 
      },
      complete: function () {
        // complete 
      }
    })
  }
})