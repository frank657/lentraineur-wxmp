// pages/trainings/new/new.js
const app = getApp();
 const AV = require('../../../utils/av-weapp-min.js');

Page({

  /**
   * Page initial data
   */
  data: {
    photoUrl: ''
  },

  takePhoto: function () {
    let page = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        let tempFilePath = res.tempFilePaths[0];
        page.setData({ photoUrl: res.tempFilePaths[0]});
        new AV.File('file-name', {
          blob: {
            uri: tempFilePath,
          },
        }).save().then(
          file => console.log(file.url())
        ).catch(console.error);
      } 
    });
  },

  formSubmit: function (event) {
    let title = event.detail.value.title
    let description = event.detail.value.description
    let price_per_hour = event.detail.value.price_per_hour
    let location = event.detail.value.location   
    let user_id = app.globalData.userId
    let image = this.data.photoUrl

    let training = { title: title, description: description, price_per_hour: price_per_hour, location: location,  user_id: user_id, image: image }

    console.log(training);

    const url = app.globalData.url;
    wx.request({
      url: `${url}trainings`,
      method: "POST",
      data: training,
      success(res) {
        const id = res.data.id
        wx.redirectTo({
          url: `/pages/trainings/show/show?id=${id}`
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