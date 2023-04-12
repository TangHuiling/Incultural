// pages/home/home.js

const order = ['demo1', 'demo2', 'demo3', 'demo4', 'demo5']

var app = getApp()
var mymap = '';
var lat = '';
var long = '';
var QQMapWX = require('../../qqmap-wx-jssdk.js');
var qqmapsdk;

Page({
  data: {
    toView: 'green'
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

    data: {
      latitude: 39.2, //地图界面中心的纬度
      longitude: 117.4, //地图界面中心的经度
      scale:9.5,
      markers: [
        {
          latitude: 39.2,
          longitude: 117.4,
          name:'民俗博物馆',
          // callout:{
          //   content:'我是气泡',color:'#fff',fontsize:15,
          //   borderRadius:10,bgColor:'#000',display:'ALWAYS',
          //   padding:5,anchorX:2,anchorY:-2,
          // },
          label:{
            content:'民俗博物馆',color:'#fff',
            anchorX:2,anchorY:2,
            borderWidth:2,borderColor:'#000',borderRadius:9,
            bgColor:'#000',padding:3,textAlign:'center',
          },
          id: 0,
          // iconPath: "图标1.png",
          width: 25,
          height: 35
        },
        //1 吉林 查干萨节
        {
          id: 1,
          iconPath: "图标1.png",
          latitude: 45.11,
          longitude: 124.82,
          width: 28,
          height: 32
        },
        //2 山西阳泉
        {
          id: 2,
          iconPath: "图标1.png",
          latitude: 37.78,
          longitude: 113.65,
          width: 28,
          height: 32
        },
      ]
  },


  onShow: function () {
    // let vm = this;
    // vm.getUserLocation();
  },

  //获取用户位置
  // getUserLocation: function () {
  //   let vm = this;
  //   wx.getSetting({
  //     success: (res) => {
  //       console.log(JSON.stringify(res))
  //       if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
  //         wx.showModal({
  //           title: '请求授权当前位置',
  //           content: '需要获取您的地理位置，请确认授权',
  //           success: function (res) {
  //             if (res.cancel) {
  //               wx.showToast({
  //                 title: '拒绝授权',
  //                 icon: 'none',
  //                 duration: 1000
  //               })
  //             } else if (res.confirm) {
  //               wx.openSetting({
  //                 success: function (dataAu) {
  //                   if (dataAu.authSetting["scope.userLocation"] == true) {
  //                     wx.showToast({
  //                       title: '授权成功',
  //                       icon: 'success',
  //                       duration: 1000
  //                     })
  //                     //再次授权，调用wx.getLocation的API
  //                     vm.getFuzzyLocation();
  //                   } else {
  //                     wx.showToast({
  //                       title: '授权失败',
  //                       icon: 'none',
  //                       duration: 1000
  //                     })
  //                   }
  //                 }
  //               })
  //             }
  //           }
  //         })
  //       } else if (res.authSetting['scope.userLocation'] == undefined) {
  //         //调用wx.getLocation的API
  //         vm.getFuzzyLocation();
  //       }
  //       else {
  //         //调用wx.getLocation的API
  //         vm.getFuzzyLocation();
  //       }
  //     }
  //   })
  // },

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


  onLoad: function (option) {
    var url = app.url + 'Api/Api/get_shop_dp&PHPSESSID=' + wx.getStorageSync('PHPSESSID')
    var that = this
    console.log(option)
    if (option.scene) {
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

  //显示对话框
  showModal: function(event) {
    //console.log(event.markerId);
    var i = event.markerId;
    var url = app.url + 'Api/Api/get_shop_dp_detail&PHPSESSID=' + wx.getStorageSync('PHPSESSID');
    var that = this;
    console.log('====get_detail====')
    wx.request({ 
      url: url,
      data: {
        // id: i,
        openid: wx.getStorageSync('openid')
      },
      success: function(res) {
        console.log("当前位置：");
        that.setData({
          myall: res.data.data
        });
      }
    });
  
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

  //跳转到非tabBar页面  
  gotoPage1: function () {
    console.log("gotopage1")
    for (var i = 0; i < this.data.markers.length; ++i) {
      let la = app.globalData.clicked_latitude-this.data.markers[i].latitude;
      let lo = app.globalData.clicked_longitude-this.data.markers[i].longitude;
      console.log(i, " latitude: ", la ,  "  longitude: ", lo);
      if(la < 0)
        la = -la;
      if(lo < 0)
        lo = -lo;
      if(la <= 5 && lo <= 5){
        if(i == 0){
          //春节（怀仁旺火习俗）
          wx.navigateTo({
            url: '../new1/new0',//要跳转到的页面路径
          })
        }
        else if(i == 1){
          //春节（查干萨日）
          wx.navigateTo({
              url: '../new1/new1',//要跳转到的页面路径
          })
        }
        else if(i == 2){
          //春节（娘子关跑马排春节习俗）
          wx.navigateTo({
              url: '../new1/new2',//要跳转到的页面路径
          })
        }
        else if(i == 3){
          //春节（行花街）
          wx.navigateTo({
            url: '../new1/new3',//要跳转到的页面路径
          })
        }
        else if(i == 4){
          //春节（六盘山区春官送福）
          wx.navigateTo({
            url: '../new1/new4',//要跳转到的页面路径
          })
        }
        break;
      }
    
  }
},

  //跳转到非tabBar页面  
  gotoPage2: function () {
    console.log("gotopage2");
    for (var i = 0; i < this.data.markers2.length; ++i) {
      let la = app.globalData.clicked_latitude-this.data.markers2[i].latitude;
      let lo = app.globalData.clicked_longitude-this.data.markers2[i].longitude;
      console.log(i, " latitude: ", la ,  "  longitude: ", lo);
      if(la < 0)
        la = -la;
      if(lo < 0)
        lo = -lo;
      if(la <= 0.25 && lo <= 0.25){
        if(i == 0){
          //清明节（溱潼会船）
        }
        else if(i == 1){
          //清明节（介休寒食清明习俗）
          
          //break;
        }
        else if(i == 2){
          //清明节（茅山会船）
          
          //break;
        }
        break;
      }
    
  }
},

  gotoPage3: function () {
    console.log("gotoPage3");
  for (var i = 0; i < this.data.markers3.length; ++i) {
    let la = app.globalData.clicked_latitude-this.data.markers3[i].latitude;
    let lo = app.globalData.clicked_longitude-this.data.markers3[i].longitude;
    console.log(i, " latitude: ", la ,  "  longitude: ", lo);
    if(la < 0)
      la = -la;
    if(lo < 0)
      lo = -lo;
    if(la <= 1 && lo <= 1){
      if(i == 0){
        //端午节（屈原故里端午习俗）
      }
      else if(i == 1){
        //端午节（西塞神舟会）	
        
        //break;
      }
      else if(i == 2){
        //端午节（汨罗江畔端午习俗）
        
        //break;
      }
      else if(i == 3){
        //端午节（苏州端午习俗）	
      }
      else if(i == 4){
        //端午节（罗店划龙船习俗）
      }
      else if(i == 5){
        //端午节（安海嗦啰嗹习俗）
      }
      else if(i == 6){
        //端午节（五大连池药泉会）
      }
      else if(i == 7){
        //端午节（大澳龙舟游涌）
      }

    }
  
}
},

  gotoPage4: function () {
  for (var i = 0; i < this.data.markers4.length; ++i) {
    let la = app.globalData.clicked_latitude-this.data.markers4[i].latitude;
    let lo = app.globalData.clicked_longitude-this.data.markers4[i].longitude;
    if(la < 0)
      la = -la;
    if(lo < 0)
      lo = -lo;
    if(la <= 1 && lo <= 1){
      if(i == 0){
        //七夕节（乞巧节）
      }
      else if(i == 1){
        //七夕节（石塘七夕习俗）	
        //break;
      }
      else if(i == 2){
        //七夕节（天河乞巧习俗）	
        //break;
      }
      else if(i == 3){
        //七夕节（郧西七夕）
      }
    }
}
},

  gotoPage5: function () {
    this.data.find = 0;
    if(app.globalData.map_id == 1){
      console.log("gotopage1--check春节")
      for (var i = 0; i < this.data.markers.length; ++i) {
        let la = app.globalData.clicked_latitude-this.data.markers[i].latitude;
        let lo = app.globalData.clicked_longitude-this.data.markers[i].longitude;
        console.log(i, " latitude: ", la ,  "  longitude: ", lo);
        if(la < 0)
          la = -la;
        if(lo < 0)
          lo = -lo;
        if(la <= 1 && lo <= 1){
          if(i == 0){
            //春节（怀仁旺火习俗）
            console.log("1.0 山西怀仁 春节（怀仁旺火习俗)");
            wx.navigateTo({
              url: '../new1/new0',//要跳转到的页面路径
            })
          }
          else if(i == 1){
            //春节（查干萨日）
            console.log("1.1 吉林 查干萨节 春节（查干萨日)");
            wx.navigateTo({
                url: '../new1/new1',//要跳转到的页面路径
            })
          }
          else if(i == 2){
            //春节（娘子关跑马排春节习俗）
            console.log("1.2 山西阳泉 春节（娘子关跑马排春节习俗)");
            wx.navigateTo({
                url: '../new1/new2',//要跳转到的页面路径
            })
          }
          else if(i == 3){
            //春节（行花街）
            console.log("1.3 广东省广州市越秀区 春节（行花街)");
            wx.navigateTo({
              url: '../new1/new3',//要跳转到的页面路径
            })
          }
          else if(i == 4){
            //春节（六盘山区春官送福）
            console.log("1.4 宁夏回族自治区固原市西吉县 春节（六盘山区春官送福）");
            wx.navigateTo({
              url: '../new1/new4',//要跳转到的页面路径
            })
          }
          this.data.find = 1;
          break;
        }
    }}

    else if(app.globalData.map_id == 2){
      console.log("gotopage2--check清明");
      for (var i = 0; i < this.data.markers2.length; ++i) {
          let la = app.globalData.clicked_latitude-this.data.markers2[i].latitude;
          let lo = app.globalData.clicked_longitude-this.data.markers2[i].longitude;
          console.log(i, " latitude: ", la ,  "  longitude: ", lo);
          if(la < 0)
            la = -la;
          if(lo < 0)
            lo = -lo;
          if(la <= 0.25 && lo <= 0.25){
            if(i == 0){
              //清明节（溱潼会船）
              console.log("2.0 江苏省姜堰市 清明节（溱潼会船）");
              wx.navigateTo({
                url: '../new2/new0',//要跳转到的页面路径
              })
            }
            else if(i == 1){
              //清明节（介休寒食清明习俗）
              console.log("2.1 山西省介休市 清明节（介休寒食清明习俗）");
              wx.navigateTo({
                url: '../new2/new1',//要跳转到的页面路径
              })
            }
            else if(i == 2){
              //清明节（茅山会船）
              console.log("2.0 江苏省兴化市 清明节（茅山会船）");
              wx.navigateTo({
                url: '../new2/new2',//要跳转到的页面路径
              })
            }
            this.data.find = 1;
            break;
          }
        
      }
    }

    else if(app.globalData.map_id == 3){
      console.log("gotoPage3---check端午");
      for (var i = 0; i < this.data.markers3.length; ++i) {
          let la = app.globalData.clicked_latitude-this.data.markers3[i].latitude;
          let lo = app.globalData.clicked_longitude-this.data.markers3[i].longitude;
          console.log(i, " latitude: ", la ,  "  longitude: ", lo);
          if(la < 0)
            la = -la;
          if(lo < 0)
            lo = -lo;
          if(la <= 1 && lo <= 1){
            if(i == 0){
              //端午节（屈原故里端午习俗）
              console.log("3.0  湖北省宜昌市 端午节（屈原故里端午习俗）");
              wx.navigateTo({
                url: '../new3/new0',//要跳转到的页面路径
              })
            }
            else if(i == 1){
              //端午节（西塞神舟会）	
              console.log("3.1 湖北省黄石市  端午节（西塞神舟会）");
              wx.navigateTo({
                url: '../new3/new1',//要跳转到的页面路径
              })
            }
            else if(i == 2){
              //端午节（汨罗江畔端午习俗）
              console.log("3.2 湖南省汨罗市 端午节（汨罗江畔端午习俗）");
              wx.navigateTo({
                url: '../new3/new2',//要跳转到的页面路径
              })
            }
            else if(i == 3){
              //端午节（苏州端午习俗）	
              console.log("3.3 江苏省苏州市 端午节（苏州端午习俗）");
              wx.navigateTo({
                url: '../new3/new3',//要跳转到的页面路径
              })
            }
            // else if(i == 4){
            //   //端午节（罗店划龙船习俗）
            //   console.log("3.4  浙江省杭州市余杭区 端午节（罗店划龙船习俗）");
            //   wx.navigateTo({
            //     url: '../new3/new4',//要跳转到的页面路径
            //   })
            // }
            // else if(i == 5){
            //   //端午节（安海嗦啰嗹习俗）
            //   console.log("3.5  福建省晋江市 端午节（安海嗦啰嗹习俗）");
            //   wx.navigateTo({
            //     url: '../new3/new5',//要跳转到的页面路径
            //   })
            // }
            // else if(i == 6){
            //   //端午节（五大连池药泉会）
            //   console.log("3.6  黑龙江省黑河市 端午节（五大连池药泉会）");
            //   wx.navigateTo({
            //     url: '../new3/new6',//要跳转到的页面路径
            //   })
            // }
            // else if(i == 7){
            //   //端午节（大澳龙舟游涌）
            //   console.log("3.7  香港特别行政区 端午节（大澳龙舟游涌）");
            //   wx.navigateTo({
            //     url: '../new3/new7',//要跳转到的页面路径
            //   })
            // }
            this.data.find = 1;
            break;
          }
        
      }
    }

    else if(app.globalData.map_id == 4){
      console.log("gotoPage4---check七夕");
      for (var i = 0; i < this.data.markers4.length; ++i) {
          let la = app.globalData.clicked_latitude-this.data.markers4[i].latitude;
          let lo = app.globalData.clicked_longitude-this.data.markers4[i].longitude;
          console.log(i, " latitude: ", la ,  "  longitude: ", lo);
          if(la < 0)
            la = -la;
          if(lo < 0)
            lo = -lo;
          if(la <= 1 && lo <= 1){
            if(i == 0){
              //七夕节（乞巧节）
              console.log("4.0 甘肃省西和县 七夕节（乞巧节)");
              wx.navigateTo({
                url: '/pages/new4/new0',//要跳转到的页面路径
              })
            }
            else if(i == 1){
              //七夕节（石塘七夕习俗）
              console.log("4.1 浙江省温岭市 七夕节（石塘七夕习俗)");	
              wx.navigateTo({
                url: '../new4/new1',//要跳转到的页面路径
              })
            }
            else if(i == 2){
              //七夕节（天河乞巧习俗）	
              console.log("4.2 广东省广州市天河区  七夕节（天河乞巧习俗)");	
              wx.navigateTo({
                url: '../new4/new2',//要跳转到的页面路径
              })
            }
            else if(i == 3){
              //七夕节（郧西七夕）
              console.log("4.3 广东省广州市越秀区 七夕节（郧西七夕)");	
              wx.navigateTo({
                url: '../new4/new3',//要跳转到的页面路径
              })
            }
            this.data.find = 1;
            break;
          }
      }
    }

    else if(app.globalData.map_id == 5){
      console.log("gotoPage5---check中秋");
      for (var i = 0; i < this.data.markers5.length; ++i) {
          let la = app.globalData.clicked_latitude-this.data.markers5[i].latitude;
          let lo = app.globalData.clicked_longitude-this.data.markers5[i].longitude;
          console.log(i, " latitude: ", la ,  "  longitude: ", lo);
          if(la < 0)
            la = -la;
          if(lo < 0)
            lo = -lo;
          if(la <= 2 && lo <= 2){
            if(i == 0){
              //中秋节（中秋博饼）
              console.log("5.0 福建省厦门市   中秋节（中秋博饼）");
              wx.navigateTo({
                url: '../new5/new0',//要跳转到的页面路径
              })	
            }
            else if(i == 1){
              //中秋节（佛山秋色）
              console.log("5.1 广东省佛山市 中秋节（佛山秋色）");
              wx.navigateTo({
                url: '../new5/new1',//要跳转到的页面路径
              })
            }
            else if(i == 2){
              //中秋节（泽州中秋习俗）
              console.log("5.2 山西省泽州县  中秋节（泽州中秋习俗）");
              wx.navigateTo({
                url: '../new5/new2',//要跳转到的页面路径
              })
            }
            else if(i == 3){
              //中秋节（秋夕）
              console.log("5.3 吉林省延边朝鲜族自治州  中秋节（秋夕）");
              wx.navigateTo({
                url: '../new5/new3',//要跳转到的页面路径
              })
            }
            else if(i == 4){
              //中秋节（大坑舞火龙）
              console.log("5.4 香港特别行政区  中秋节（大坑舞火龙）");
              wx.navigateTo({
                url: '../new5/new4',//要跳转到的页面路径
              })
            }
            else if(i == 5){
              //中秋节（朝鲜族秋夕节）
              console.log("5.5  辽宁省铁岭市 中秋节（朝鲜族秋夕节）");
              wx.navigateTo({
                url: '../new5/new5',//要跳转到的页面路径
              })
            }
            else if(i == 6){
              //中秋节（吉安中秋烧塔习俗）
              console.log("5.6  江西省安福县 中秋节（吉安中秋烧塔习俗）");
              wx.navigateTo({
                url: '../new5/new6',//要跳转到的页面路径
              })
            }
            break;
          }
        
      }
    }

  if(this.data.find == 0)
    console.log("没有找到相应习俗");

}

    
})