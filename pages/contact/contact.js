//logs.js
const util = require('../../utils/util.js')
const app = getApp();
Page({
  formSubmit: function (e) {
    var add = e.detail.value;
    add.openid = app.globalData.userInfo.openid;
    wx.request({
      url: 'https://hqsqxx.com/yan/index.php/Home/Use/feedback',
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:add,
      success: function (res) {
        // 成功之后提示开始
        wx.showToast({
          title: '发送成功',
          icon: 'succes',
          duration: 1500,
          mask: true
        })
        setTimeout(function () {
          wx.navigateBack();
        }, 1600)
      },
      fail: function () {
        console.log("接口调用失败");
        wx.showToast({
          title: '发送失败',
          icon: 'loading',
          duration: 1500,
          mask: true
        })
      }
    })
    
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
  },
})