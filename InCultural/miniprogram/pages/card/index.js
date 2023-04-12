// pages/card/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    people_list:[],
    op:"",
    id:"",
  },

  topeople:function(e){
    var that = this
    const index = e.currentTarget.dataset.index;
    console.log(index)
    const people=that.data.people_list;
    const door = that.data.op;
    if(door == "bilibili"){
      wx.navigateTo({
        url: '../media/index?load=bilibili'+'&id='+index,
        success: function(res) {
          // 通过 eventChannel 向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage',{ data:people[index]._id})
        }
      })
    }
    if(door == "weibo"){
      wx.navigateTo({
        url: '../media/index?load=weibo'+'&id='+index,
        success: function(res) {
          // 通过 eventChannel 向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage',{ data:people[index]._id})
        }
      })
    }
    if(door == "douyin"){
      wx.navigateTo({
        url: '../media/index?load=douyin'+'&id='+index,
        success: function(res) {
          // 通过 eventChannel 向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage',{ data:people[index]._id})
        }
      })
    }
    if(door == "xiaohongshu"){
      wx.navigateTo({
        url: '../media/index?load=xiaohongshu'+'&id='+index,
        success: function(res) {
          // 通过 eventChannel 向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage',{ data:people[index]._id})
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this
    var str = options.str
    that.setData({op:str})
    const eventChannel = that.getOpenerEventChannel()
    if (eventChannel){
    new Promise((resolve, reject) => {
      eventChannel.on('acceptDataFromOpenerPage', res=> {
        that.setData({
        people_list:res.data,
      }) 
      }) })
    } 
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