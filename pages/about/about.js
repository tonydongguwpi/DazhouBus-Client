// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  textPaste: function() {
    wx.setClipboardData({
      data: 'blackyau@qq.com',
      success(res) {
        wx.getClipboardData({
          success(res) {
            wx.showToast({
              title: '复制成功',
              icon: 'success'
            })
          }
        })
      }
    })
  },

  githubPaste: function () {
    wx.setClipboardData({
      data: 'https://github.com/blackyau/DazhouBus-Client',
      success(res) {
        wx.getClipboardData({
          success(res) {
            wx.showToast({
              title: '复制成功',
              icon: 'success'
            })
          }
        })
      }
    })
  },

  previewImage: function(e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: 'https://st.blackyau.net/img/donate.jpg',
      urls: ['https://st.blackyau.net/img/donate.jpg']
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})