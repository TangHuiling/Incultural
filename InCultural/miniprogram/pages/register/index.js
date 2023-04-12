var arr1 = new Array(50);
for(var i=0;i<arr1.length;i++){
  arr1[i] = i+1;
}
var arr2 = new Array(2);
arr2[0]="男";
arr2[1]="女";
var arr3 = new Array(2);
arr3[0]="50后";
arr3[1]="60后";
arr3[2]="70后";
arr3[3]="80后";
arr3[4]="90后";
arr3[5]="00后";
arr3[6]="10后";
arr3[7]="20后";
var arr4 = new Array(34);

Page({
  data: {
    name: '',
    zhanghao: '', 
    mima: '',
    flag:9999,
    gender:"",
    age:"",
    area:"",
    show:false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData:['1','2','3','4','5','6'],//下拉列表的数据
    index:0,//选择的下拉列表下标
    array: arr1,
    index_1: 0,
    array_2: arr2,
    index_2: 0,
    array_3:arr3,
    index_3:3,
    // 普通选择器列表设置,及初始化
    cityList: ['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆','台湾','香港','澳门'],
    cityIndex: 0,
    isPassword: true,
  },
  //右侧是否可视的图标
  showPassword(event){
    var isPassword = !this.data.isPassword;
    this.setData({
      isShow: false,
      isPassword: isPassword,
    })
  },

    // 选择地区函数
    changeCity(e){
      this.setData({ cityIndex: e.detail.value});
    },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange_2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_2: e.detail.value
    })
  },
  bindPickerChange_3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_3: e.detail.value
    })
  },
  selectTap(){
    this.setData({
     show: !this.data.show
    });
    },
    // 点击下拉列表
    optionTap(e){
    var that = this
    let Index=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    console.log(Index)
    that.setData({
     index:Index,
     show:!that.data.show
    });
    },
  //获取用户名
  getName(event) {
    console.log('获取输入的用户昵称', event.detail.value)
    this.setData({
      name: event.detail.value
    })
  },
  //获取用户账号
  getZhangHao(event) {
    console.log('获取输入的手机号', event.detail.value)
    this.setData({
      zhanghao: event.detail.value
    })
  },
  // 获取密码
  getMiMa(event) {
    console.log('获取输入的密码', event.detail.value)
    this.setData({ 
      mima: event.detail.value
    })
  },
  // 获取性别
  getGender(event) {
    console.log('获取性别', event.detail.value)
    this.setData({ 
      gender: event.detail.value
    })
  },
  // 获取年龄
  getAge(event) {
    console.log('获取年龄范围', event.detail.value)
    this.setData({ 
      age: event.detail.value
    })
  },
  // 获取地址
  getArea(event) {
    console.log('获取地址', event.detail.value)
    this.setData({ 
      area: event.detail.value
    })
  },
  //注册
  zhuce() {
    let name = this.data.name
    let zhanghao = this.data.zhanghao
    let mima = this.data.mima
    let gender = this.data.gender
    let age = this.data.age
    let area = this.data.area
    console.log("flag=",this.data.flag)
    console.log("点击了注册")
    console.log("gender", gender)
    console.log("age", age)
    console.log("area", area)
    
    //校验用户名
    if (name.length < 2) {
      wx.showToast({
        icon: 'none',
        title: '用户昵称至少2位',
      })
      this.data.flag=1
      return
    }
    if (name.length > 10) {
      wx.showToast({
        icon: 'none',
        title: '用户昵称最多10位',
      })
      this.data.flag=1
      return
    }

    //校验密码
    if (mima.length < 6) {
      wx.showToast({
      icon: 'none',
      title: '密码至少6位',
      })
      this.data.flag=1
      return
    }

    //校验手机号
    if (zhanghao.length !=11) {
      console.log('请输入11位手机号')
        wx.showToast({
          icon: 'none',
          title: '请输入11位手机号！',
        })
        this.data.flag=1
        return
    }
    
    else if(zhanghao.length ==11) {
      wx.cloud.database().collection('user')
      .where({
        zhanghao: this.data.zhanghao
      }).get({
        success(res){
          if(res.data.length!=0){
            console.log('该手机号已存在',res)
            wx.showToast({
              icon: 'error',
              title: '该手机号已存在！'
            }),
            this.data.flag=1
            return
          }
          else if(res.data.length==0){ 
            wx.cloud.database().collection('user').add({
                data: {
                  name: name,
                  zhanghao: zhanghao,
                  mima: mima,
                  gender:gender,
                  age:age,
                  area:area
                },
                success(res) {
                  console.log('注册成功', res)
                  setTimeout(()=>
                  {
                    wx.showToast({
                      title: '注册成功并登录!',
                    })
                  }, 500)
                  
                  setTimeout(()=>
                  {
                    wx.showToast({
                      title: '注册成功并登录!',
                    })
                    wx.switchTab({
                      // url: '/pages/me/index?zhanghao='+zhanghao,
                      url:'/pages/null/null'
                    })
                  }, 1000)
                  
                },
                fail(res) {
                  console.log('注册失败', res)
                }
            })
          }
        }
      })
    }
  }
})