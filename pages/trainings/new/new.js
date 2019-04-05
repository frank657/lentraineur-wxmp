// pages/trainings/new/new.js
const app = getApp();
const AV = require('../../../utils/av-weapp-min.js');

Page({
  data: {
    photoUrl: ''
  },
  saveFile: function(f){
    let page = this;
    let savedFile = f.url()
    page.setData({
      savedFile: savedFile
    })
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
        console.log(page)
        new AV.File('file-name', {
          blob: {
            uri: tempFilePath,
          },
        }).save().then(
          file => page.saveFile(file)
        ).catch(console.error);
      } 
    });
  },
  previewMyImage: function (files) {
    wx.previewImage({
      current: '',  // number of index or file path
      urls: files  // Array of temp files
    })
  },
  formSubmit: function (event) {
    let title = event.detail.value.title
    let description = event.detail.value.description
    let price_per_hour = event.detail.value.price_per_hour
    let location = event.detail.value.location   
    let user_id = app.globalData.userId
    let image = this.data.photoUrl
    let category = event.detail.value.category

    let training = { title: title, description: description, price_per_hour: price_per_hour, location: location,  user_id: user_id, image: image, category_list: category }

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

