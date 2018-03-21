// pages/user/search.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    noReadCount: 0,
    isShow: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  saomiao: function () {

    var _this = this;
    wx.scanCode({
      success: (res) => {
        var oid = res.result;
        wx.setStorageSync("oid", oid);
        wx.navigateTo({
          url: '../link/link',
        })
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
    var _this = this;
    wx.request({
      url: 'https://hqsqxx.com/yan/index.php/Home/Use/get',
      data: {
        "table": "user",
        "where": {
          "openid": app.globalData.userInfo.openid
        }
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        app.globalData.userInfo = res.data.msg[0];
        _this.setData({
          userInfo: app.globalData.userInfo
        });
      }
    });
    // wx.setStorageSync('local_count',0);
    //  取公告量
    wx.request({
      url: 'https://hqsqxx.com/yan/index.php/Home/Use/getNotice', //仅为示例，并非真实的接口地址
      data: {
        "local_count": wx.getStorageSync('local_count'),
        "res": "false"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
console.log(res.data)
        if (res.data.msg > 0) {
          _this.setData({
            isShow: "show"
          });
        }

        if (res.data.msg <= 0) {
          _this.setData({
            isShow: ""
          });
        }
        _this.setData({
          noReadCount: res.data.msg
        });
        if (res.data.msg > 99) {
          _this.setData({
            noReadCount: "99+"
          });
        }
      }
    });
  },

  goqrcode: function () {
    wx.navigateTo({
      url: '../qrcode/qrcode',
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
  gofriend: function () {
    wx.navigateTo({
      url: '../friend/friend',
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
  gomessage: function () {
    wx.navigateTo({
      url: '../message/message',
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
  godata: function () {
    wx.navigateTo({
      url: '../data/data',
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
  gocontact: function () {
    wx.navigateTo({
      url: '../contact/contact',
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


