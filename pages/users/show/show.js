// pages/users/show/show.js
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
    console.log(33, app.globalData.userId)
    const page = this;
    console.log('options: ', options);
    const url = app.globalData.url;
    // const user_id = 30; // static user_id for testing;
    const id = app.globalData.userId;

    wx.request({
      // url: `${url}users/${options.id}`,
      url: `${url}users/${id}`, // static user_id for testing purposes 
      method: 'GET',
      success(res) {
        console.log('user res', res);
        const user = res.data;
        console.log('user', user)
        // console.log
        page.setData(user);
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

  editTraining(e) {
    const data = e.currentTarget.dataset;
    console.log('e', e)
    console.log('const data', data)

    wx.navigateTo({
      url: `/pages/trainings/edit/edit?id=${data.id}`
    });
  },

  addTraining(e) {
    console.log(e)
    wx.navigateTo({
      url: `/pages/trainings/new/new`
    })
  }
})