// pages/decoration/decoration.js

let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 设置装饰图
  setIcon: function(e) {
    let icon = e.currentTarget.dataset.icon;

    app.globalData.icon = `../resources/icons/${icon}.png`;
    app.globalData.iconName = `${icon}`;

    wx.navigateTo({
      url: '/pages/canvas/canvas',
    })
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '选择图片',
    })

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