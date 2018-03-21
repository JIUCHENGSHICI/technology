//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    oid: wx.getStorageSync("oid")
  },
  //事件处理函数

  onLoad: function () {

    var oid = wx.getStorageSync("oid");
    wx.removeStorageSync("oid");
    this.setData({
      oid:oid
    })

    var _this = this;

 
    // var oid = wx.getStorageSync("oid");

    wx.request({
      url: 'https://hqsqxx.com/yan/index.php/Home/Use/get',
      method: "GET",
      header: {
        'Content-Type': 'json'
      },
      data: {
        "table": "user",
        "where": {
          "openid": _this.data.oid
        }
      },
      success: function (res) {
        res = res.data;
      
        _this.setData({
          userInfo: res.msg[0]
        })

      },
      fail: function () {
        console.log("接口调用失败");
      }
    })

    // wx.navigateBack
  },
  link: function () {


    var _this = this;
    wx.showModal({
      title: '提示',
      content: '是否要成为此用户下线',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: 'https://hqsqxx.com/yan/index.php/Home/Use/link',
            method: "GET",
            header: {
              'Content-Type': 'json'
            },
            data: {
              "openid": _this.data.oid,
              "openid_m": app.globalData.userInfo.openid
            },
            success: function (res) {

              res = res.data;
              if (res.res == 1) {
                wx.showModal({
                  title: '成功',
                  content: '成功',
                  showCancel: false,
                  success: function (res) {
                    wx.navigateBack();
                  }
                });
              }
              if (res.res == 0) {
                wx.showModal({
                  title: '提示',
                  content: '您已经是此用户的下线',
                  showCancel: false,
                  success: function (res) {
                    wx.navigateBack();
                  }
                  
                })
              }
              if (res.res < 0) {
                wx.showModal({
                  title: '错误',
                  content: '网络错误',
                  showCancel: false,
                  confirmText: '',
                  success: function (res) {

                  }
                })
              }

            },
            fail: function () {
              console.log("接口调用失败");
            }
          })

        } else if (res.cancel) {

        }
      }
    })

  },
  back: function () {
    wx.navigateBack();
  }
})
