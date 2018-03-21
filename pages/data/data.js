//logs.js
const util = require('../../utils/util.js')
const app = getApp();
Page({
  data: {
    userInfo: {},
    head: ''
  },
  formSubmit: function (e) {
    var save = e.detail.value;

    save.user_head = this.data.head;
    if (save.user_name.length>10){

      wx.showModal({
        title: '提示',
        content: '昵称长度不能大于10！',
        showCancel:false,
        success: function (res) {
          if (res.confirm) {
          } else if (res.cancel) {
          }
        }
      })
      return;
    }
    wx.request({
      url: 'https://hqsqxx.com/yan/index.php/Home/Use/saveUser',
      method: "POST",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        "openid": app.globalData.userInfo.openid,
        "save": JSON.stringify(save),
      },
      success: function (res) {
        // 成功之后提示开始
        wx.showToast({
          title: '修改成功',
          icon: 'succes',
          duration: 1500,
          mask: true
        })
        setTimeout(function(){
          wx.navigateBack();
        },1600)

      },
      fail: function () {
        console.log("接口调用失败");
        wx.showToast({
          title: '修改失败',
          icon: 'loading',
          duration: 1500,
          mask: true
        })
      }
    })
  },
  formReset: function () {
  },
  replace: function () {

    var _this = this;
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://hqsqxx.com/yan/index.php/Home/Use/upFile', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {},
          success: function (res) {
            var data = res.data
            data = JSON.parse(data);
            var src = data.data.src;
            _this.setData({
              head: "https://hqsqxx.com/yan/"+ src
            })
          }
        })
      }
    })
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {

  },
  onShow: function () {
    this.setData({
      userInfo: app.globalData.userInfo,
      head: app.globalData.userInfo.user_head
    })
  }
})