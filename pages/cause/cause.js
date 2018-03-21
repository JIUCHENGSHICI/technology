//logs.js
const util = require('../../utils/util.js')
const app = getApp();
Page({
  golearning: function (event) {
    var id ="career_learning_"+ event.currentTarget.id;
    wx.setStorageSync('type', id);
    wx.setStorageSync('project_list_title', "决胜技巧");
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