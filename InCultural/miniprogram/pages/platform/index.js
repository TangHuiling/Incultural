// pages/platform/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bilibili_List:[],
    option : "",
    weibo_List:[],
    douyin_List:[],
    xiaohongshu_List:[],
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url:'cloud://cloud1-3gh117wta198d6cd.636c-cloud1-3gh117wta198d6cd-1314390452/testDir/piyingxi.webp'
    }, {
      id: 1,
        type: 'image',
        url: 'cloud://cloud1-3gh117wta198d6cd.636c-cloud1-3gh117wta198d6cd-1314390452/testDir/qinghuaci.webp',
    }, {
      id: 2,
      type: 'image',
      url: 'cloud://cloud1-3gh117wta198d6cd.636c-cloud1-3gh117wta198d6cd-1314390452/testDir/guqin.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'cloud://cloud1-3gh117wta198d6cd.636c-cloud1-3gh117wta198d6cd-1314390452/testDir/kunqu.webp'
    }, {
      id: 4,
      type: 'image',
      url: 'cloud://cloud1-3gh117wta198d6cd.636c-cloud1-3gh117wta198d6cd-1314390452/testDir/muyezhan.webp'
    }, {
      id: 5,
      type: 'image',
      url: 'cloud://cloud1-3gh117wta198d6cd.636c-cloud1-3gh117wta198d6cd-1314390452/testDir/ronghua.jpeg'
    }, {
      id: 6,
      type: 'image',
      url: 'cloud://cloud1-3gh117wta198d6cd.636c-cloud1-3gh117wta198d6cd-1314390452/testDir/shufa.webp'
    }],
  },

  cardSwiper(e) {
    this.cardCur = e.detail.current
  },

  tobilibili:function(e){
    var that = this
    const db = wx.cloud.database()
    db.collection('bilibili').get({
      success: function(res) {
        that.setData({
          option:"bilibili",
          bilibili_List:res.data,
        })
        wx.navigateTo({
          url: '../card/index?str=bilibili',
          success: function(res) {
            // 通过 eventChannel 向被打开页面传送数据
            res.eventChannel.emit('acceptDataFromOpenerPage',{ data:that.data.bilibili_List})
          }
        })
      },
      fail: console.error
    })
  },

  toweibo:function(e){
    var that = this
    const db = wx.cloud.database()
    db.collection('weibo').get({
      success: function(res) {
        that.setData({
          option:"weibo",
          weibo_List:res.data,
        })
        wx.navigateTo({
          url: '../card/index?str=weibo',
          success: function(res) {
            // 通过 eventChannel 向被打开页面传送数据
            res.eventChannel.emit('acceptDataFromOpenerPage',{ data:that.data.weibo_List})
          }
        })
      },
      fail: console.error
    })
  },

  todouyin:function(e){
    var that = this
    const db = wx.cloud.database()
    db.collection('douyin').get({
      success: function(res) {
        that.setData({
          option:"douyin",
          douyin_List:res.data,
        })
        wx.navigateTo({
          url: '../card/index?str=douyin',
          success: function(res) {
            // 通过 eventChannel 向被打开页面传送数据
            res.eventChannel.emit('acceptDataFromOpenerPage',{ data:that.data.douyin_List})
            console.log(res.data)
          }
        })
      },
      fail: console.error
    })
  },

  toxiaohongshu:function(e){
    var that = this
    const db = wx.cloud.database()
    db.collection('xiaohongshu').get({
      success: function(res) {
        that.setData({
          option:"xiaohongshu",
          xiaohongshu_List:res.data,
        })
        wx.navigateTo({
          url: '../card/index?str=xiaohongshu',
          success: function(res) {
            // 通过 eventChannel 向被打开页面传送数据
            res.eventChannel.emit('acceptDataFromOpenerPage',{ data:that.data.xiaohongshu_List})
          }
        })
      },
      fail: console.error
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.towerSwiper('swiperList');
  },

  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
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