// pages/trainings/new/new.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {

  },

  formSubmit: function(event) {
    let title = event.detail.value.title
    let price_per_hour = event.detail.value.price_per_hour
    let location = event.detail.value.location
    let min_start_time = event.detail.value.min_start_time
    let max_end_time = event.detail.value.max_end_time

    let training = { title: title, price_per_hour: price_per_hour, location: location, min_start_time: min_start_time, max_end_time: max_end_time }

    const url = app.globalData.url;
    let id = this.data.id;
    wx.request({
      url: `${url}trainings`,
      method: "POST",
      data: training,
      success() {
        wx.redirectTo({
          url: `../pages/trainings/show/show?id=${id}`
        });
      }
    });   
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

  }
})