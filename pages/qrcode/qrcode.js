//logs.js
const util = require('../../utils/util.js')
var app = getApp();
Page({
  data: {
    url: ""
  },
  onLoad: function () {
    // 
    var url = ' https://hqsqxx.com/yan/index.php/Home/use/myCode/openid/' + app.globalData.userInfo.openid;
    this.setData({
      url: url
    })
  },
})
