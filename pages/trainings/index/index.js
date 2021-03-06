// pages/trainings/index/index.js
const app = getApp();
var order = ['pic1', 'pic2', 'pic3', 'pic4']
Page({
  tagButtonInput: function (e) {
    console.log(e)
    let tag = e.currentTarget.dataset.tag
    const url = app.globalData.url
    const page = this;
    wx.request({
      url: `${url}trainings?tag=${tag}`,
      success(res){
        page.setData(
          res.data
        );
      }
    })
   
  },
  /**
   * Page initial data
   */
  data: {
    toView: 'pic1',
    scrollTop: 100, 
    inputShowed: false,
    inputVal: "",
    trueStatement: true,
    falseStatement: false
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onShow: function (options) {
    const page = this;
    const url = app.globalData.url;
    console.log("testindex")
    wx.request({
      url: `${url}trainings`,
      method: 'GET',
      success(res) {
        const trainings = res.data.trainings;
        page.setData({
          trainings: trainings
        });
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
  onLoad: function () {

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

  showTraining(e) {
    console.log(e);
    const id = e.currentTarget.dataset.id
    console.log('id', id);

    wx.navigateTo({
      url: `/pages/trainings/show/show?id=${id}`,
    })
  }
})
