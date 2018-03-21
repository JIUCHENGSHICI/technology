//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    array: []
  },
  gopaper: function (event) {
    wx.setStorageSync('paper_id', event.currentTarget.id);
    wx.setStorageSync('paper_type', "this");
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
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://hqsqxx.com/yan/index.php/Home/Use/getNotice',
      method: "GET",
      header: {
        'Content-Type': 'json'
      },
      data: {
        "local_count": wx.getStorageSync('local_count'),
      },
      success: function (res) {
        wx.setStorageSync('local_count', res.data.res);
        that.setData({
          array: res.data.msg
        })
      },
      fail: function () {
        console.log("接口调用失败");
      }
    })
  }
})
