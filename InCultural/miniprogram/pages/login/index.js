Page({
  data: {
    zhanghao:"", 
    mima:"",
    people_list:[],
  },
  //获取输入的账号
  getZhanghao(event) {
  //console.log('账号', event.detail.value)
    this.setData({
      zhanghao: event.detail.value  
    })
  },
  //获取输入的密码
  getMima(event) { 
      this.setData({ mima: event.detail.value
    })
  },
  //点击登陆
  login() {
    var that = this
    const people=that.data.people_list;
    let zhanghao = this.data.zhanghao
    let mima = this.data.mima
    console.log('账号', zhanghao, '密码', mima)
    if (zhanghao.length < 4) {
      wx.showToast({
        icon: 'none',
        title: '账号至少4位',
      })
      return
    }
    if (mima.length < 6) {
      wx.showToast({
          icon: 'error',
          title: '密码至少6位',
      })
      return
    }
    //登陆
    wx.cloud.database().collection('user').where({
      zhanghao: zhanghao
    }).get({
      success(res) {
        console.log("获取数据成功", res)
        let user = res.data[0] 
        if (user==undefined) {
          console.log("账号不存在！")
          wx.showToast({
            icon: 'error',
            title: '账号不存在!'
          })
          console.log("重载页面")
        }
        else{
          console.log("user", user)
          if (mima == user.mima) {
            console.log('登录成功')
            wx.showToast({
              title: '登录成功!',
            })
            setTimeout(()=>
            {
              wx.switchTab({
                url: '/pages/null/null',// change
                success: function(res) {
                  // 通过 eventChannel 向被打开页面传送数据
                  res.eventChannel.emit('acceptDataFromOpenerPage',{ data:user})
                }
              })
            }, 1000)
            
            //保存用户登陆状态
            wx.setStorageSync('user', user)
          } 
          else {
            console.log('登陆失败')
            wx.showToast({
              icon: 'error',
              title: '密码错误!',
            })
          }
        }
      },
      fail(res) {
        console.log("获取数据失败", res)
      }
      })
  },
  zhuce(){
    wx.navigateTo({
      url: '/pages/register/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this
    const eventChannel = that.getOpenerEventChannel()
    if (eventChannel){
    new Promise((resolve, reject) => {
      eventChannel.on('acceptDataFromOpenerPage', res=> {
        that.setData({
        people_list:res.data,
      }) 
      console.log(res.data)
      }) })
    } 
  },



})