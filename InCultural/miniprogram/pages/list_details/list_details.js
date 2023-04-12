
Page({
	/**	
	 * 页面的初始数据
	 */
	data: {
    add:[],
  },
  onLoad(options){
    let that = this
    console.log("列表携带的值",options);
    let id=options.id;
    console.log("id=",id);
    let id1=id[0]+id[1];
    console.log("前两位id1=",id1);
    let db=wx.cloud.database()
    let load;
    switch(id1) {
      case '01':
        load = "nankai";
        break;
      case '02':
        load = "jinghai";
        break;
      case '03':
        load = "xiqing";
        break;
      case '04':
        load = "jizhou";
        break;
      case '05':
        load = "binhai";
        break;
      case '06':
        load = "hedong";
        break;
      case '07':
        load = "baodi";
        break;
      case '08':
        load = "heping";
        break;
      case '09':
        load = "jinnan";
        break;
      case '10':
        load = "wuqing";
        break;
      case '11':
        load = "hongqiao";
        break;
      case '12':
        load = "beichen";
        break;
      case '13':
        load = "ninghe";
        break;
      case '14':
        load = "hexi";
        break;
      case '15':
        load = "dongli";
        break;
      case '16':
        load = "hebei";
        break;
      default:
        
    }
    console.log("load=",load);
    db.collection(load).where({
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

  }
	

})
