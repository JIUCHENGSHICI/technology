
// 轮播开始
Page({
  data: {
    carousel: [],
    scroll: [],

    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicatorColor: "#ffffff",

    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }],
    src: 'http://jiuchengshici.gitee.io/wx/yanbangkeji.png',
  },
  imageError: function (e) {
  },
  gosearch: function () {
    wx.navigateTo({
      url: '../search/search',
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
    var that = this;
    //  轮播图的开始
    wx.request({
      url: 'https://hqsqxx.com/yan/index.php/Home/Use/get',
      method: "GET",
      header: {
        'Content-Type': 'json'
      },
      data: {
        "table": "carousel"
      },
      success: function (res) {

        var date = res.data.msg;
        that.setData({
          carousel: date
        })
      },
      fail: function () {
        console.log("接口调用失败");
      }
    })
    // 轮播图的结束


    //    底部轮播图的开始
    wx.request({
      url: 'https://hqsqxx.com/yan/index.php/Home/Use/getPaperUp',
      method: "GET",
      header: {
        'Content-Type': 'json'
      },
      data: {},
      success: function (res) {
    
        var date = res.data.msg;
        that.setData({
          scroll: date
        })
      },
      fail: function () {
        console.log("接口调用失败");
      }
    })
    // 底部轮播图的结束
  },
  gopaper: function (event) {
    wx.setStorageSync('paper_id', event.currentTarget.id);
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
  gopaper2: function () {
    wx.setStorageSync('super_id', "introduce");
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

  }
})
// 轮播结束


