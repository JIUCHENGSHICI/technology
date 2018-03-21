// pages/user/search.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.bindconfirm();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  gopaper: function (event) {
    wx.setStorageSync('paper_id',event.currentTarget.id);
    wx.setStorageSync('paper_type', "this");
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
  bindconfirm: function (e) {
    var _value = e.detail.value;
    // 回车事件
    var that = this;
    wx.request({
      url: 'https://hqsqxx.com/yan/index.php/Home/Use/queryPaper',
      method: "GET",
      header: {
        'Content-Type': 'json'
      },
      data: {
        "key": _value,
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
  },
  goback: function(){
    wx.navigateBack();
  }
})
