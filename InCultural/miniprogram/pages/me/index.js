// pages/me/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhanghao:"",
    name:"",
    zhanghao1:"",
    user1:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //var zhanghao = options.zhanghao
    var that = this
    // that.setData({
    //   zhanghao1:zhanghao
    // })
    // console.log(that.data.zhanghao1)
    const eventChannel = that.getOpenerEventChannel()
    if (eventChannel){
    new Promise((resolve, reject) => {
      eventChannel.on('acceptDataFromOpenerPage', res=> {
        that.setData({
        user1:res.data,
        }) 
        console.log(user1)
      }) 
    })
    } 
    //test
    const db1=wx.cloud.database()
    db1.collection('user').where({
      zhanghao:that.data.zhanghao1
    })
    .get({
      success:res=>{
        that.setData({
          name:res.data[0].name
        })
      },
      fail:console.error
    })
    console.log(that.data.zhanghao)

    const db = wx.cloud.database()
    db.collection('user').where({
      _id:String(that.data.id)
    })
    .get({
      success: res=> {
        that.setData({
          upList:res.data,
          name:res.data.name,
          pic:res.data[0].fileID
        })
        console.log(res.data)
        console.log(that.data.upList[0].name)
        console.log(that.data.upList)
      },
      fail: console.error
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})