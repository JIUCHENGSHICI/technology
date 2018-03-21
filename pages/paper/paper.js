//logs.js
const util = require('../../utils/util.js')
const app = getApp();
Page({
  data: {
    url: ""
  },
  onLoad: function (options) {
    var that = this;
     
    var paper_type = wx.getStorageSync('paper_type');
    var id;
    if (paper_type == "this") {
      id = "paper_id/"+wx.getStorageSync('paper_id');
      wx.removeStorageSync('paper_id');

    }
    if (paper_type == "super") {
      id = "super_id/"+wx.getStorageSync('super_id');
      wx.removeStorageSync('super_id');
    }
    console.log(id);
    this.setData({
      url: "https://hqsqxx.com/yan/index.php/Home/Use/showPaper/" + id,
    });
  }
})  