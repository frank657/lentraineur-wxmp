// pages/home/home.js
const app = getApp()

Page({
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.getUserInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
  },
  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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

  },

  trainingsIndex() {
    console.log(app.globalData.userId)
    wx.switchTab({
      // url: `../users/show/show?id=${app.globalData.userId}`,
      url: `../trainings/index/index`
    })
  }
})