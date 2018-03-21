//logs.js
const util = require('../../utils/util.js')
const app = getApp();
Page({
  data: {
    array: [],
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var project_list_title = wx.getStorageSync('project_list_title');
    wx.setNavigationBarTitle({
      title: project_list_title
    });
    // ==========================
    var _type = wx.getStorageSync('type');
    var super_id = wx.getStorageSync('super_id');
    wx.removeStorageSync('super_id');

    var where = {
      "type": _type
    };
    if (super_id) {
      where.super_id = super_id;
    }
    var that = this;
    wx.request({
      url: 'https://hqsqxx.com/yan/index.php/Home/Use/get',
      method: "GET",
      header: {
        'Content-Type': 'json'
      },
      data: {
        "table": "project",
        "where": where
      },
      success: function (res) {
        var date = res.data.msg;
        that.setData({
          array: date
        })
      },
      fail: function () {
        console.log("接口调用失败");
      }
    })
  }
})