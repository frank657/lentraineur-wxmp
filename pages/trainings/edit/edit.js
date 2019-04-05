// pages/trainings/edit/edit.js
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
    page.setData({
      training_id: options.id
    });

    wx.request({
      // options.id is passed from data.id on edit link on show page
      url: `${url}trainings/${options.id}`,
      method: 'GET',
      success(res) {
        console.log('res', res);
        const training = res.data;
        page.setData(training);
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

  formSubmit: function (event) {
    let title = event.detail.value.title
    let description = event.detail.value.description
    let price_per_hour = event.detail.value.price_per_hour
    let location = event.detail.value.location
    let user_id = app.globalData.userId
    let image = this.data.photoUrl
    let category = event.detail.value.category

    let training = { title: title, description: description, price_per_hour: price_per_hour, location: location, user_id: user_id, image: image, category_list: category }

    console.log(training);

    const url = app.globalData.url;
    const id = app.globalData.userId;
    const training_id = this.data.id;
    console.log('training id', training_id);

    wx.request({
      url: `${url}trainings/${training_id}`,
      method: "PUT",
      data: training,
      success(res) {
        // const id = res.data.id
        wx.switchTab({
          url: `/pages/users/show/show?id=${id}`
        });
      }
    });
  },

  editSchedule(e) {
    console.log(e);
    const id = e.currentTarget.dataset.id
    console.log(id)
    const url = app.globalData.url
    const page = this

    wx.navigateTo({
      url: `/pages/schedules/edit/edit?id=${id}`,
    })
    // wx.request({
    //   url: '',
    // })
  },

  deleteSchedule(e) {
    console.log(e);
    const id = e.currentTarget.dataset.id;
    console.log(id);
    const url = app.globalData.url;
    const page = this;
    const training_id = this.data.id
    console.log('training_id:', training_id)

    wx.request({
      url: `${url}schedules/${id}`,
      method: "DELETE",
      success() {
        wx.redirectTo({
          url: `/pages/trainings/edit/edit?id=${training_id}`,
        })
      }
    })
  },

  cancelSubmit() {
    const user_id = app.globalData.id

    wx.switchTab({
      url: `/pages/users/show/show?id=${user_id}`,
    })
  }
})