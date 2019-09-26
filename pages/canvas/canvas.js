// pages/canvas/canvas.js

const app = getApp();
const data = new Uint8ClampedArray([255, 0, 0, 1]);
let context = null;

// console.log(iconname, icon)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarImage: '', // 头像路径

  },

  // 获取用户信息
  getUserInfo: function(e) {
    console.log('userInfo==', e.detail.userInfo);
    // this.setData({
    //   avatarImage: e.detail.userInfo.avatarUrl
    // })

    let iconname = app.globalData.iconName;
    let icon = app.globalData.icon;

    let filePath = e.detail.userInfo.avatarUrl;
    let filePathLocal = '';
    wx.getImageInfo({
      src: filePath,
      success: (res) => {
        console.log('res=', res)
        filePathLocal = res.path;

        context.drawImage(filePathLocal, 0, 0, 200, 200);
        context.save()

        // 根据名字不同设置位置不同
        if (iconname == 'hat') {
          // 80, 10, 60, 60
          context.drawImage(icon, 80, 10, 60, 60); // 前两位数字设置位置，后面两位是设置图片大小
          context.restore();
        } else if (iconname == 'newyear') {
          context.drawImage(icon, 0, 10, 60, 60); // 前两位数字设置位置，后面两位是设置图片大小
          context.restore();
          context.save();
          context.drawImage(icon, 140, 10, 60, 60); // 前两位数字设置位置，后面两位是设置图片大小
          context.restore();

        } else {
          context.drawImage(icon, 120, 120, 80, 80); // 前两位数字设置位置，后面两位是设置图片大小
          context.restore();
        }

        context.draw()





      },
      fail: (err) => {
        console.log('err=', err)
      }
    })
  },

  canvasIdErrorCallback: function(e) {
    console.error('canvasIdError==', e.detail.errMsg)
  },

  // 保存头像
  saveAvatar: function() {
    wx.canvasToTempFilePath({
      canvasId: 'canvas',
      quality: 1,
      success: (res) => {
        console.log('res==', res)
        let filePath = res.tempFilePath;
        wx.saveImageToPhotosAlbum({
          filePath: filePath,
          success: (res) => {
            console.log('baocun==', res)
          },
          fail: (err) => {
            console.log('err==', err)
          }
        })
      },
      fail: (err) => {
        console.log('err==', err)
      }
    }, this)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '生成头像',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    context = wx.createCanvasContext('canvas', this);

    // context.setStrokeStyle('#0f0')
    // context.setLineWidth(2)
    // context.rect(0, 0, 200, 200)
    // context.stroke()
    // context.setStrokeStyle("#ff0000")
    // context.setLineWidth(2)
    // context.moveTo(160, 100)
    // context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    // context.moveTo(140, 100)
    // context.arc(100, 100, 40, 0, Math.PI, false)
    // context.moveTo(85, 80)
    // context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    // context.moveTo(125, 80)
    // context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    // context.stroke()

    let iconname = app.globalData.iconName;
    let icon = app.globalData.icon;

    if (iconname == 'hat') {
      context.drawImage(icon, 80, 10, 60, 60); // 前两位数字设置位置，后面两位是设置图片大小
    } else if (iconname == 'newyear') {
      context.drawImage(icon, 0, 10, 60, 60); // 前两位数字设置位置，后面两位是设置图片大小
      context.save();

      context.drawImage(icon, 140, 10, 60, 60); // 前两位数字设置位置，后面两位是设置图片大小
      context.restore();

      // context.restore();

    } else {
      context.drawImage(icon, 120, 120, 80, 80); // 前两位数字设置位置，后面两位是设置图片大小
      // context.draw()
    }

    context.draw()

    // context.drawImage(icon, 120, 120, 80, 80); // 前两位数字设置位置，后面两位是设置图片大小
    // context.draw()
    // context.save()
    // let img = new Image();
    // img.src = '../Resources/icons/face.png';
    // img.onLoad = function() {
    //   context.drawImage(img)
    // }

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})