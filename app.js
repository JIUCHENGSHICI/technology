//app.js
App({
  onLaunch: function () {
    var _this = this;
    // 登录
    var code;
    wx.login({
      success: res1 => {
        code = res1.code;
        wx.getUserInfo({
          withCredentials: true,
          success: res3 => {

            wx.request({
              url: 'https://hqsqxx.com/yan/index.php/home/use/login',
              data: {
                code: code,
                userInfo: res3.userInfo
              },
              success: function (res4) {
                _this.globalData.userInfo = res4.data.msg[0];
                // wx.setStorageSync("userInfo", res4)
              }
            })
          }
        })

      }
    })

  },
  globalData: {
    userInfo: null
  }
})