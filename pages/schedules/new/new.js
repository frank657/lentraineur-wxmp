// pages/schedules/new/new.js
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
    page.setData({
      training_id: options.id
    });
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
  bindDateChange: function (e) {
    console.log('picker send selection modified. The carry value is ', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindStartTime: function (e) {
    console.log('picker send selection modified. The carry value is ', e.detail.value)
    this.setData({
      start_time: e.detail.value
    })
  },
  bindEndTime: function (e) {
    console.log('picker send selection modified. The carry value is ', e.detail.value)
    this.setData({
      end_time: e.detail.value
    })
  },
  formSubmit(e) {
    console.log("e", e)
    console.log(this.data["date"])
    console.log(this.data["start_time"])
    console.log(this.data["end_time"])
    let start_time = new Date(`${this.data["date"]} ${this.data["start_time"]}`)  
    let end_time = new Date(`${this.data["date"]} ${this.data["end_time"]}`)
    
    let schedule = {start_time: start_time, end_time: end_time}
    console.log(start_time, end_time);
    const url = app.globalData.url;
    const page = this;

    wx.request({
      url: `${url}trainings/${page.data["training_id"]}/schedules`,
      method: "POST",
      data: schedule,
      success(res) {
        wx.redirectTo({
          url: `/pages/trainings/edit/edit?id=${page.data["training_id"]}`
        });
      }
    });
  }
})