var app = getApp()
var mymap = '';
var lat = '';
var long = '';
var QQMapWX = require('../../qqmap-wx-jssdk.js');
var qqmapsdk;

Page({
  data: {
    add:[],
    navbar: ['景区介绍', '旅游指南'],
    currentTab: 0,
    latitude: 39.12083, //地图界面中心的纬度
    longitude: 117.16016, //地图界面中心的经度
    scale:16,
    markers: [
      {
        latitude: 39.12083,
        longitude: 117.16016,
        // name:'天津庄王府',
        // label:{
        //   content:'天津庄王府',color:'#fff',
        //   anchorX:2,anchorY:2,
        //   borderWidth:2,borderColor:'#000',borderRadius:9,
        //   bgColor:'#000',padding:3,textAlign:'center',
        // },
        id: 0,
        // iconPath: "图标1.png",
        width: 25,
        height: 35
      },
    ]
  },


  //
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
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


  onShow: function () {
    // this.request()
  },

  // 微信获得经纬度
  
  getFuzzyLocation: function () {
    let vm = this;
    wx.getFuzzyLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(JSON.stringify(res))
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy;
        vm.getLocal(latitude, longitude)
      },
      fail: function (res) {
        console.log('fail' + JSON.stringify(res))
      }
    })
  },

  // 地图
  getLocation(e){
    var that = this,
    address = e.currentTarget.dataset.address;
    wx.getLocation({
      //定位类型 wgs84, gcj02
      type: 'gcj02',
      success: function(res) {
        console.log("定位信息", res);
        var url = 'https://apis.map.qq.com/ws/geocoder/v1/?address='+address+'&key=ssssssss';
        wx.request({
          url: url,
          success: function (res) {
            var location = res.data.result.location;
            wx.openLocation({
              address: address,
              name: address,
              longitude: +location.lng,
              latitude: +location.lat,
              scale: 18
            })
          }
        })
      },
    })
  },


  // 获取当前地理位置
  //腾讯地图getLocation获取经纬度，qqmapsdk.reverseGeocoder根据经纬度获取详细地址
  getLocal: function (latitude, longitude) {
    let vm = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        // console.log(JSON.stringify(res));
        let province = res.result.ad_info.province
        let city = res.result.ad_info.city
        let district=res.result.ad_info.district
        vm.setData({
          province: province,
          city: city,
          district:district,
          latitude: latitude,
          longitude: longitude
        })

      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        // console.log(res);
      }
    })
  },


  onLoad: function (options) {
    //
    var url = app.url + 'Api/Api/get_shop_dp&PHPSESSID=' + wx.getStorageSync('PHPSESSID')
    let that=this
    console.log("列表携带的值",options);
    let id=options.id;
    console.log("id=",id);
    let db=wx.cloud.database()
    db.collection("nankai").where({
        _id:id
    })
    .get({
      success: res=> {
        console.log("详情页面请求成功",res);
        console.log("详情页面请求成功",res.data);

        that.setData({
          add:res.data,
        })
        console.log(that.data.add);

      },
      fail: console.error
    })

//
    if (options.scene) {
      this.setData({
        isshow: false
      })
      wx.navigateTo({
        url: '../chat/chat?scene=' + option.scene,
      })
    } else {
      this.setData({
        isshow: true
      })
    }
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
        wx.getFuzzyLocation({
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

    qqmapsdk = new QQMapWX({
      key: 'SBVBZ-GEDKJ-C4WFK-KJGZN-QA6QZ-FMF44'
    });

  },

  onReady: function () {

  },

  /**
   * 地图放大缩小事件触发
   * @param {*} e 
   */
  bindregionchange(e) {
    console.log('=bindregiοnchange=', e)
  },

  /**
   * 点击地图事件，有经纬度信息返回
   * @param {*} e 
   */
  bindtapMap(e) {
    var that=this;
    that.getLocation(e),
    console.log('=bindtapMap=', e),      
    wx.getFuzzyLocation({
      type: 'gcj02',
      success: function (res1) {
        console.log("您点击位置的经纬度为:",e.detail.longitude , e.detail.latitude);

        that.setData({
          click_latitude: e.detail.latitude,
          click_longitude: e.detail.longitude, 
        })
        app.globalData.clicked_longitude = e.detail.longitude,
        app.globalData.clicked_latitude = e.detail.latitude,
        console.log("您点击位置的经纬度为:",app.globalData.clicked_longitude , app.globalData.clicked_latitude);
        app.globalData.map_id = 1,
        console.log("当前map: ", app.globalData.map_id);
        
      }
    }),
    //根据获取的经纬度：获得详细信息
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: e.detail.latitude,
        longitude: e.detail.longitude, 
      },
      success: function (res) {
        // console.log(JSON.stringify(res));
        let click_province = res.result.ad_info.province
        let click_city = res.result.ad_info.city
        that.setData({
          click_province: click_province,
          click_city: click_city,
        })

      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        // console.log(res);
      }
    })
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
      scale: 20
    })
  },
  
})

