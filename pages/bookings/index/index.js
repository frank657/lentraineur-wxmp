// pages/bookings/index/index.js
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    console.log(options)

    const page = this;
    const url = app.globalData.url;
    const user_id = app.globalData.userId;

    wx.request({
      url: `${url}bookings?user_id=${user_id}`,
      method: 'GET',
      success(res) {
        console.log(res.data.bookings);
        const bookings = res.data.bookings;
        page.setData({
          bookings: bookings
        })
      }
    })

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})