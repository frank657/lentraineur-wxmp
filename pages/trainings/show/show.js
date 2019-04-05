// pages/trainings/show/show.js
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
    const page = this;
    const url = app.globalData.url;
    wx.request({
      url: `${url}trainings/${options.id}`,
      method: 'GET',
      success(res) {
        const training = res.data;
        page.setData(training)
        console.log(11, training)
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
  onShow: function (options) {
    const page = this;
    const url = app.globalData.url;

    console.log('onShow options', options)
    // wx.request({
    //   url: `${url}trainings/${options.id}`,
    //   method: 'GET',
    //   success(res) {
    //     const training = res.data;
    //     page.setData({
    //       training: training
    //     })
    //     console.log(12, training)
    //   }
    // })
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

  showCalendar(e) {
    console.log(e)
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }

})