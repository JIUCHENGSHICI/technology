// pages/study/study.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  golearning: function () {
    wx.setStorageSync('type', "project_learning");
    wx.setStorageSync('project_list_title', "项目学习");
    wx.navigateTo({
      url: '../learning/learning',
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
  gocause: function () {
    wx.setStorageSync('type', "career_learning");
    wx.setStorageSync('project_list_title', "事业学习");
    wx.navigateTo({
      url: '../learning/learning',
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