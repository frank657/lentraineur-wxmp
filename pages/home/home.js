// pages/home/home.js
const app = getApp()

Page({
  /**
   * Page initial data
   */
  data: {
   
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
      const self = this
      wx.loadFontFace({
        family: this.data.fontFamily,
        source: 'url("https://sungd.github.io/Pacifico.ttf")',
        success(res) {
          console.log(res.status)
          self.setData({ loaded: true })
        },
        fail: function (res) {
          console.log(res.status)
        },
        complete: function (res) {
          console.log(res.status)
        }
      });
  },

  getUserInfo: function (e) {
    console.log(22, e)
    app.globalData.userInfo = e.detail.userInfo
    console.log('globalData', app.globalData.userInfo)
      // console.log(app.globalData.userInfo)
    
    this.setData({
      userInfo: e.detail.userInfo
    })
     wx.switchTab({
      // url: `../users/show/show?id=${app.globalData.userId}`,
      url: `../trainings/index/index`
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

  },

  trainingsIndex() {
    console.log(33, app)
    console.log('userId', app.globalData.userId);
    console.log('userInfo', app.globalData.userInfo);
    console.log('this.userInfo', this.userInfo)
    // wx.switchTab({
    //   // url: `../users/show/show?id=${app.globalData.userId}`,
    //   url: `../trainings/index/index`
    // })
  }
})