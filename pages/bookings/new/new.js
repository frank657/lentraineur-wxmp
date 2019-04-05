// pages/bookings/new/new.js
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
    console.log(22, options)
    wx.request({
      url: `${url}trainings/${options.training_id}`,
      method: 'GET',
      success(res) {
        const training = res.data;
        page.setData({
          training: training
        })
        console.log(66, training)
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

  },
  showModal(e) {
    console.log(e)
    let user_id = app.globalData.userId
    let schedule_id = e.target.dataset.schedule.id
    let start_time = e.target.dataset.schedule.start_time
    let end_time = e.target.dataset.schedule.end_time
    // let total_price = e.target.dataset.schedule.total_price

    let booking = {start_time: start_time, end_time: end_time, user_id: user_id}
    const url = app.globalData.url;
    wx.showModal({
      title: 'Confirm Booking',
      content: 'Would you like to make this booking?',
      cancelText: 'Cancel',
      confirmText: 'Yes',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.request({
            url: `${url}schedules/${schedule_id}/bookings`,
            method: "POST",
            data: booking,
            success(res) {
              // const id = res.data.id
              wx.switchTab({
                url: `/pages/bookings/index/index?id=${schedule_id}`
              });
            }
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})