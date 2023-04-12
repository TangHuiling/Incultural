// map.js
var app = getApp()
var mymap = '';
var lat = '';
var long = '';
Page({
  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },

  scroll(e) {
    console.log(e)
  },

  scrollToTop() {
    this.setAction({
      scrollTop:  0
    })
  },

  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  data: {
    myall:[],
    iid:null,
    double_i:null,
    latitude: 39.1, //地图界面中心的纬度
    longitude: 117.13, //地图界面中心的经度
    markers: [
      {
        latitude: 39.143865,
        longitude: 117.192214,
        name:'天津古文化街',
        label:{
          content:'天津古文化街',color:'#fff',
          anchorX:0,anchorY:-40,
          borderWidth:2,borderColor:'#000',borderRadius:9,
          bgColor:'#000',padding:3,textAlign:'center',
        },
        id: 1,
        width: 40,
        height: 40
      },
      {
        latitude: 39.14327,
        longitude: 117.19269,
        name:'民俗博物馆',
        label:{
          content:'民俗博物馆',color:'#fff',
          anchorX:0,anchorY:0,
          borderWidth:2,borderColor:'#000',borderRadius:9,
          bgColor:'#000',padding:3,textAlign:'center',
        },
        id: 2,
        width: 40,
        height: 40
      },
      {
        latitude: 39.14190,
        longitude: 117.18273,
        name:'老城博物馆',
        label:{
          content:'老城博物馆',color:'#fff',
          anchorX:-40,anchorY:0,
          borderWidth:2,borderColor:'#000',borderRadius:9,
          bgColor:'#000',padding:3,textAlign:'center',
        },
        id: 3,
        width: 40,
        height: 40
      },
      {
        latitude: 39.12083,
        longitude: 117.16016,
        name:'天津庄王府',
        label:{
          content:'天津庄王府',color:'#fff',
          anchorX:0,anchorY:-3,
          borderWidth:2,borderColor:'#000',borderRadius:9,
          bgColor:'#000',padding:3,textAlign:'center',
        },
        id: 4,
        width: 40,
        height: 40
      },
      {
        latitude: 38.86142,
        longitude: 116.88981,
        name:'西双塘民俗风景区',
        label:{
          content:'西双塘民俗风景区',color:'#fff',
          anchorX:0,anchorY:-5,
          borderWidth:2,borderColor:'#000',borderRadius:9,
          bgColor:'#000',padding:3,textAlign:'center',
        },
        id: 5,
        width: 40,
        height: 40
      },
      {
        latitude: 39.02828,
        longitude: 117.13228,
        name:'精武门',
        label:{
          content:'精武门',color:'#fff',
          anchorX:0,anchorY:-3,
          borderWidth:2,borderColor:'#000',borderRadius:9,
          bgColor:'#000',padding:3,textAlign:'center',
        },
        id: 6,
        width: 40,
        height: 40
      },
      {
        latitude: 39.13495,
        longitude: 117.01062,
        name:'石家大院',
        label:{
          content:'石家大院',color:'#fff',
          anchorX:-20,anchorY:2,
          borderWidth:2,borderColor:'#000',borderRadius:9,
          bgColor:'#000',padding:3,textAlign:'center',
        },
        id: 7,
        width: 40,
        height: 40
      },
      {
        latitude: 39.13478,
        longitude: 117.01141,
        name:'杨柳青古镇',
        label:{
          content:'杨柳青古镇',color:'#fff',
          anchorX:20,anchorY:-30,
          borderWidth:2,borderColor:'#000',borderRadius:9,
          bgColor:'#000',padding:3,textAlign:'center',
        },
        id: 8,
        width: 40,
        height: 40
      },
      {
        latitude: 40.04561,
        longitude: 117.40318,
        name:'蓟州独乐寺',
        label:{
          content:'蓟州独乐寺',color:'#fff',
          anchorX:0,anchorY:2,
          borderWidth:2,borderColor:'#000',borderRadius:9,
          bgColor:'#000',padding:3,textAlign:'center',
        },
        id: 9,
        width: 40,
        height: 40
      },
      {
        latitude: 39.10898,
        longitude: 117.72100,
        name:'北塘古镇',
        label:{
          content:'北塘古镇',color:'#fff',
          anchorX:0,anchorY:-2,
          borderWidth:2,borderColor:'#000',borderRadius:9,
          bgColor:'#000',padding:3,textAlign:'center',
        },
        id: 10,
        width: 40,
        height: 40
      }
    ],
    controls: [{
      id: 1,
      iconPath: '../map/图标1.png',
      position: {
        left: 0,
        top: 300 - 1,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  //引入数据库
  onLoad: function(option) {
    var url = app.url + 'Api/Api/get_shop_dp&PHPSESSID=' + wx.getStorageSync('PHPSESSID')
    var that = this
    console.log(option)
    
    wx.request({ //让服务器端统一下单，并返回小程序支付的参数
      url: url,
      data: {
        openid: wx.getStorageSync('openid')
      },
      success: function(res) {
        console.log(res);
        that.setData({
          markers: res.data.data
        });
        wx.getLocation({
          type: 'wgs84',
          success(mres) {
            var map_lat = mres.latitude;
            var map_long = mres.longitude;
            var map_speed = mres.speed;
            var map_accuracy = mres.accuracy;
            that.setData({
              lat: map_lat
            });
            that.setData({
              long: map_long
            });
          }
        });
      }
    });
  },
 
  //显示对话框
  showModal: function(event) {
    console.log("markerId=",event.markerId);
    var i = event.markerId;
    var url = app.url + 'Api/Api/get_shop_dp_detail&PHPSESSID=' + wx.getStorageSync('PHPSESSID');
    var that = this;
    console.log('====get_detail====')
    let db=wx.cloud.database()
    let load;
    var double_i;
    switch(i) {
      case 1:
        load = "nankai";
        double_i='0104';
        break;
      case 2:
        load = "nankai";
        double_i='0105';
        break;
      case 3:
        load = "nankai";
        double_i='0106';
        break;
      case 4:
        load = "nankai";
        double_i='0107';
        break;
      case 5:
        load = "jinghai";
        double_i='0203';
        break;
      case 6:
        load = "xiqing";
        double_i='0304';
        break;
      case 7:
        load = "xiqing";
        double_i='0305';
        break;
      case 8:
        load = "xiqing";
        double_i='0306';
        break;    
      case 9:
        load = "jizhou";
        double_i='0401';
        break; 
      case 10:
        load = "binhai";
        double_i='0502';
        break;   
      default:
    }
    console.log("load=",load);    
    console.log("double_i=",double_i)
    db.collection(load).where({
        _id:String(double_i)
    })

    .get({
      success: (res)=> {
        console.log("详情页面请求成功",res);
        console.log("详情页面请求成功",res.data);

        that.setData({
          double_i:double_i,
          iid:i,
          myall: res.data
        })
        console.log("myall===",myall);
        console.log("iid===",that.data.iid);
      },
      fail: console.error
    })
 
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function() {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
 
  opendetail: function(event) {
    console.log('-----跳转visit页面-----');
    var that=this;
    let id = this.data.iid;
    let double_i=this.data.double_i;
    console.log("double_i为：",double_i)

    console.log("opendetail这里的visit-id为：",id)
    switch(id) {
      case 1:
        wx.navigateTo({
          url: "/pages/visit/visit?id=0103"
        })
        break;
      case 2:
        wx.navigateTo({
          url: "/pages/visit2/visit2?id=0104"
        })
        break;
      case 3:
        wx.navigateTo({
          url: "/pages/visit3/visit3?id=0105"
        })
        break;
      case 4:
        wx.navigateTo({
          url: "/pages/visit4/visit4?id=0106"
        })
        break;
      case 5:
        wx.navigateTo({
          url: "/pages/visit5/visit5?id=0203"
        })
        break;
      case 6:
        wx.navigateTo({
          url: "/pages/visit6/visit6?id=0304"
        })
        break;
      case 7:
        wx.navigateTo({
          url: "/pages/visit7/visit7?id=0305"
        })
        break;
      case 8:
        wx.navigateTo({
          url: "/pages/visit8/visit8?id=0306"
        })
        break;
      case 9:
        wx.navigateTo({
          url: "/pages/visit9/visit9?id=0401"
        })
        break;    
      case 10:
        wx.navigateTo({
          url: "/pages/visit10/visit10?id=0502"
        })
        break;   
      default:
    }
  },
  //导航
  onGuideTap: function (event) {
    var lat = Number(event.currentTarget.dataset.latitude);
    var lon = Number(event.currentTarget.dataset.longitude);
    var bankName = event.currentTarget.dataset.bankname;
    console.log(lat);
    console.log(lon);
    wx.openLocation({
      type: 'gcj02',
      latitude: lat,
      longitude: lon,
      name: bankName,
      scale: 16
    })
  },
 
})