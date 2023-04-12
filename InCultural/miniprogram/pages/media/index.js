// pages/media/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    upList: [],
    information:[],
    id1:"",
    back_image:"",
    pic:"",
    name:"",
    introduce:"",
    intro1:"",
    image1:"",
    intro2:"",
    image2:"",
    test:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var load = options.load
    var id = options.id
    var that = this
    that.setData({
      id1:id
    })
    console.log(that.data.id1)
    const eventChannel = that.getOpenerEventChannel()
    if (eventChannel){
    new Promise((resolve, reject) => {
      eventChannel.on('acceptDataFromOpenerPage', res=> {
        that.setData({
        id:res.data,
        }) 
      }) 
    })
    } 
    //test
    const db1=wx.cloud.database()
    db1.collection(load).where({
      _id:String(Number(that.data.id1)+1)
    })
    .get({
      success:res=>{
        that.setData({
          introduce:res.data[0].introduce,
          intro1:res.data[0].intro1,
          intro2:res.data[0].intro2,
          image1:res.data[0].image1,
          image2:res.data[0].image2,
          name:res.data[0].name,
          pic:res.data[0].fileID
        })
      },
      fail:console.error
    })
    console.log(that.data.id)

    const db = wx.cloud.database()
    db.collection(load).where({
      _id:String(that.data.id)
    })
    .get({
      success: res=> {
        that.setData({
          upList:res.data,
          name:res.data[0].name,
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