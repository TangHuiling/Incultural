// js
// 假数据
let List = [
	{
    "LeftId": '01',
		"LeftName": "南开区",
		"RightList": [
		{
			"RightId": '04',
      "RightName": "天津古文化街",
      "is_travel":true,
      "photo":'https://img1.baidu.com/it/u=3576075840,3749591051&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=334',
    },
    {
			"RightId": '05',
      "RightName": "天津民俗博物馆",
      "is_travel":true,
      "photo":'https://img1.baidu.com/it/u=2271410343,1628675785&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
    },
    {
			"RightId": '06',
      "RightName": "天津老城博物馆(老城厢民俗)",
      "is_travel":true,
      "photo":'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F1785632%2F3de67894a58c8f8365311bd5c6d42d22.jpg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMTc4NTYzMi8zZGU2Nzg5NGE1OGM4ZjgzNjUzMTFiZDVjNmQ0MmQyMi5qcGc%3D%2Fsign%2Fd46aa76d1f3c88143b9f33aeecfff52b.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto',
    },
    {
			"RightId": '07',
      "RightName": "天津庄王府",
      "is_travel":true,
      "photo":'https://bkimg.cdn.bcebos.com/pic/dc54564e9258d1095f2f3343db58ccbf6d814d77',
    },
    {
			"RightId": '01',
      "RightName": "泥塑（天津泥人张）",
      "is_travel":false,
      "photo":'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi4%2F21367298%2FTB21hRgXmiJ.eBjSspoXXcpMFXa_%21%2121367298.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto'
    },
    {
			"RightId": '02',
      "RightName": "天津风筝魏制作技艺",
      "is_travel":false,
      "photo":'https://img1.baidu.com/it/u=1754043207,4234114114&fm=253&fmt=auto&app=138&f=JPEG?w=353&h=500'
    },
    {
			"RightId": '03',
      "RightName": "隆顺榕卫药制作技艺",
      "is_travel":false,
      "photo":'https://bkimg.cdn.bcebos.com/pic/4d086e061d950a7b35a593aa08d162d9f3d3c9c8'
		},
		]
	},
	{
		"LeftId": '02',
		"LeftName": "静海区",
		"RightList": [
		{
			"RightId": '03',
      "RightName": "西双塘民俗风景区",
      "is_travel":true,
      "photo":'https://qcloud.dpfile.com/pc/Pec4_z7fyRYVV_ZVgairqqh9wKloTtb52uLZiQ0pUGv15CS3Mbr0agNW1sB173_NTYGVDmosZWTLal1WbWRW3A.jpg'

    },
    {
			"RightId": '01',
      "RightName": "大六分村登杆圣会",
      "is_travel":false,
      "photo":'https://img0.baidu.com/it/u=1176606249,1700843269&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=653'
    },
    {
			"RightId": '02',
      "RightName": "独流老醋酿造技艺",
      "is_travel":false,
      "photo":'https://img1.baidu.com/it/u=4169018118,2046755366&fm=253&fmt=auto&app=138&f=JPEG?w=644&h=500'
		},
		]
  },
  {
		"LeftId": '03',
		"LeftName": "西青区",
		"RightList": [
		{
			"RightId": '04',
      "RightName": "精武门·中华武林园",
      "is_travel":true,
      "photo":'https://inews.gtimg.com/newsapp_bt/0/13725420494/1000'
    },
    {
			"RightId": '05',
      "RightName": "石家大院",
      "is_travel":true,
      "photo":'https://img1.baidu.com/it/u=3786182833,1794840598&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666'
    },
    {
			"RightId": '06',
      "RightName": "杨柳青古镇",
      "is_travel":true,
      "photo":'https://img2.baidu.com/it/u=1431386767,3330406326&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500'
    },
    {
			"RightId": '01',
      "RightName": "津门法鼓（香塔音乐法鼓）",
      "is_travel":false,
      "photo":'https://img2.baidu.com/it/u=1295467817,2172449662&fm=253&fmt=auto&app=138&f=JPEG?w=891&h=500'

    },
    {
			"RightId": '02',
      "RightName": "京万红软膏组方与制作技艺",
      "is_travel":false,
      "photo":'https://img0.baidu.com/it/u=2833246421,1150847462&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
    },
    {
			"RightId": '03',
      "RightName": "津沽脏腑推拿",
      "is_travel":false,
      "photo":'https://img1.baidu.com/it/u=1918458618,1343113731&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500'
    },
		]
  },
  {
		"LeftId": '04',
		"LeftName": "蓟州区",
		"RightList": [
		{
			"RightId": '01',
      "RightName": "蓟州独乐寺",
      "is_travel":true,
      "photo":'https://img2.baidu.com/it/u=4290181557,3068744262&fm=253&fmt=auto&app=138&f=JPEG?w=753&h=500'
		},
		]
  },
  {
		"LeftId": '05',
		"LeftName": "滨海新区",
		"RightList": [
		{
			"RightId": '02',
      "RightName": "北塘古镇",
      "is_travel":true,
      "photo":'https://img1.baidu.com/it/u=2480735977,3022409009&fm=253&fmt=auto&app=138&f=JPEG?w=753&h=500'
    },
    {
			"RightId": '01',
      "RightName": "锣鼓艺术（汉沽飞镲）",
      "is_travel":false,
      "photo":'https://img0.baidu.com/it/u=1232057574,669385446&fm=253&fmt=auto&app=138&f=JPEG?w=679&h=437'
		},
		]
  },
  {
		"LeftId": '06',
		"LeftName": "河东区",
		"RightList": [
		{
			"RightId": '01',
      "RightName": "天津戏剧靴子制作技艺",
      "is_travel":false,
      "photo":'https://img0.baidu.com/it/u=4045062260,579061422&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=500'
    },
    {
			"RightId": '02',
      "RightName": "拦手门（传统体育、游艺与杂技）",
      "is_travel":false,
      "photo":'https://img1.baidu.com/it/u=3890150347,1104686652&fm=253&fmt=auto&app=138&f=JPEG?w=752&h=500'
		},
		]
  },
  {
		"LeftId": '07',
		"LeftName": "宝坻区",
		"RightList": [
		{
			"RightId": '01',
      "RightName": "京东大鼓",
      "is_travel":false,
      "photo":'https://img1.baidu.com/it/u=790825141,2554793839&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500'
    },
    {
			"RightId": '02',
      "RightName": "葫芦庐葫芦制作技艺",
      "is_travel":false,
      "photo":'https://rmrbcmsonline.oss-cn-beijing.aliyuncs.com/upload/ueditor/image/20220805/a_740058383419174912.jpeg?x-oss-process=image/format,jpg/auto-orient,1'
		},
		]
  },
  {
		"LeftId": '08',
		"LeftName": "和平区",
		"RightList": [
		{
			"RightId": '01',
      "RightName": "天津戏法",
      "is_travel":false,
      "photo":'https://img1.baidu.com/it/u=1096560841,3365276249&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'
    },
    {
			"RightId": '02',
      "RightName": "天津“狗不理”包子制作技艺",
      "is_travel":false,
      "photo":'https://p3.itc.cn/q_70/images03/20221129/5896ed99ef9546278fbb0ca92601782c.jpeg'
    },
    {
			"RightId": '03',
      "RightName": "古籍修复技艺",
      "is_travel":false,
      "photo":'https://img2.baidu.com/it/u=2959225952,2006616337&fm=253&fmt=auto&app=120&f=JPEG?w=400&h=299'
    },
    {
			"RightId": '04',
      "RightName": "老美华手工制鞋技艺",
      "is_travel":false,
      "photo":'https://bkimg.cdn.bcebos.com/pic/95eef01f3a292df5e0fe4aef17794b6034a85fdfd5ba?x-bce-process=image/resize,m_lfit,w_536,limit_1'
		},
		]
  },
  {
		"LeftId": '09',
		"LeftName": "津南区",
		"RightList": [
		{
			"RightId": '01',
      "RightName": "妈祖祭典（葛沽宝辇会）",
      "is_travel":false,
      "photo":'https://img2.baidu.com/it/u=425323610,1744616146&fm=253&fmt=auto&app=138&f=JPEG?w=720&h=500'
    },

		]
  },
  {
    "LeftId": '10',
		"LeftName": "武清区",
    "RightList": [
      {
        "RightId": '01',
        "RightName": "太极拳（李氏太极拳）",
        "is_travel":false,
        "photo":'https://www.ihchina.cn/Uploads/Picture/2020/06/12/s5ee312d7ab053.png'
      },
      {
        "RightId": '02',
        "RightName": "永良飞叉（传统体育、游艺与杂技）",
        "is_travel":false,
        "photo":'https://bkimg.cdn.bcebos.com/pic/b151f8198618367adc604d652e738bd4b21ce598?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UyNzI=,g_7,xp_5,yp_5'
      },
    ]
  },
  {
		"LeftId": '11',
		"LeftName": "红桥区",
    "RightList": [
      {
        "RightId": '01',
        "RightName": "回族重刀武术",
        "is_travel":false,
        "photo":'https://img0.baidu.com/it/u=4163430820,2013254004&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=700'
      },
      {
        "RightId": '02',
        "RightName": "益德成闻药制作技艺",
        "is_travel":false,
        "photo":'https://img2.baidu.com/it/u=1902540596,3977838739&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=480'
        
      },
      {
        "RightId": '03',
        "RightName": "西码头百忍京秧歌高跷",
        "is_travel":false,
        "photo":'https://mmbiz.qpic.cn/mmbiz_png/C9fSBOftfHBS8HA7Md8koW59twaGHQRIs6beRDhHUcNrAfr9vaQicaJaW9TZrY1fiaaNwWxgjcbEWwLnFsuBAXKQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1'
      },
      {
        "RightId": '04',
        "RightName": "宏仁堂紫雪散传统制作技艺",
        "is_travel":false,
        "photo":'http://images.china.cn/site1000/2021-06/22/52ee248a-9044-4175-b19f-16a29612815e.png'
      },
  
      ]
  },
  {
		"LeftId": '12',
		"LeftName": "北辰区",
    "RightList": [
      {
        "RightId": '01',
        "RightName": "刘园祥音法鼓",
        "is_travel":false,
        "photo":'https://n.sinaimg.cn/sinakd20210916s/656/w400h256/20210916/a5f2-8a5a6f3024f7d12a5b5f93ed71ba68b9.jpg'
      },
      {
        "RightId": '02',
        "RightName": "穆氏花毽",
        "is_travel":false,
        "photo":'https://5b0988e595225.cdn.sohucs.com/images/20191228/931a1695b07f4a57b0441e8e965971da.jpeg'
      },

      ]
  },
  {
		"LeftId": '13',
		"LeftName": "宁河区",
    "RightList": [
      {
        "RightId": '01',
        "RightName": "杨七郎墓传说",
        "is_travel":false,
        "photo":'https://img2.baidu.com/it/u=4135391292,59055791&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=468'
      },
  
      ]
  },
  {
		"LeftId": '14',
		"LeftName": "河西区",
    "RightList": [
      {
        "RightId": '01',
        "RightName": "杨家庄永音法鼓",
        "is_travel":false,
        "photo":'http://thepaper-prod-oldimagefromnfs.oss-cn-shanghai.aliyuncs.com/image/42/827/409.jpg'
      },
      {
        "RightId": '02',
        "RightName": "挂甲寺庆音法鼓",
        "is_travel":false,
        "photo":'http://thepaper-prod-oldimagefromnfs.oss-cn-shanghai.aliyuncs.com/image/30/592/24.jpg'
      },
      {
        "RightId": '03',
        "RightName": "桂发祥十八街麻花制作技艺",
        "is_travel":false,
        "photo":'https://mmbiz.qpic.cn/sz_mmbiz_jpg/XNAQ3DMJic0TOnfrqNURmyU6db6kTic7aIz3PjtIOV5gKJRibS1liaZrAscPecgvuRlF3ku42DMrPxLLvxzWibLvb7A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1'
      },
      {
        "RightId": '04',
        "RightName": "津派面塑",
        "is_travel":false,
        "photo":'https://imagepphcloud.thepaper.cn/pph/image/119/675/88.jpg'
      },
  
      ]
  },
  {
		"LeftId": '15',
		"LeftName": "东丽区",
    "RightList": [
      {
        "RightId": '01',
        "RightName": "无极拳",
        "is_travel":false,
        "photo":'https://www.headnews.cn/upload/2021/1229/1640758419204.jpg'
      }, 
      ]
  },
  {
    "LeftId": '16',
		"LeftName": "河北区",
		"RightList": [

		]
  },

]

Page({
	/**	
	 * 页面的初始数据
	 */
	data: {
		List : List,
		selectLeftId : '01',
		selectRightId : null,
		currentIndex_L : 0,
    currentIndex_R : null,
    is_travel:false,
    scrollTop : 0,
	},
	
	/**
	 * 左导航点击事件
	 */
	bindleLeftItemTap(e) {
    const {index} = e.currentTarget.dataset;
    let index_L = this.data.currentIndex_L;
		this.setData({
			currentIndex_L:index,
			currentIndex_R : null,
			selectLeftId : this.data.List[index].LeftId,
      selectRightId : null,
      is_travel:false,
      scrollTop : 0,
    }) 
    
	},

	/**
	 * 右导航点击事件
	 */
	bindleRightItemTap(e) {
		const {index} = e.currentTarget.dataset;
    let index_L = this.data.currentIndex_L;
		this.setData({
			currentIndex_R : index,
      selectRightId : this.data.List[index_L].RightList[index].RightId,
      is_travel:this.data.List[index_L].RightList[index].is_travel,
    })

    var selectLeftId = this.data.selectLeftId;
    var selectRightId = this.data.selectRightId;
    var is_travel=this.data.is_travel;

		if(selectLeftId === null){
			wx.showToast({
				title: '请选择一个地区！',
				icon: 'none',
				duration: 1500,
				mask: true
			});
			return;
    }
    else{
      if(selectRightId === null){
        wx.showToast({
          title: '请选择一种传统技艺！',
          icon: 'none',
          duration: 1500,
          mask: true
        });
        return;
      }
      if(selectRightId != null) {
        selectLeftId=selectLeftId.toString();
        selectRightId =selectRightId.toString();
        var id=selectLeftId+selectRightId;
        console.log(id);
        console.log(is_travel);
        if(is_travel ===false){
          wx.navigateTo({
            url: "/pages/list_details/list_details?id="+id,  
          });
        }
        else if(is_travel ===true){
          if(id==='0104'){
            wx.navigateTo({
              url: "/pages/visit/visit?id="+id,  
            });
          }
          else if(id==='0105'){
            wx.navigateTo({
              url: "/pages/visit2/visit2?id="+id,  
            });
          }
          else if(id==='0106'){
            wx.navigateTo({
              url: "/pages/visit3/visit3?id="+id,  
            });
          }
          else if(id==='0107'){
            wx.navigateTo({
              url: "/pages/visit4/visit4?id="+id,  
            });
          }
          else if(id==='0203'){
            wx.navigateTo({
              url: "/pages/visit5/visit5?id="+id,  
            });
          }
          else if(id==='0304'){
            wx.navigateTo({
              url: "/pages/visit6/visit6?id="+id,  
            });
          }
          else if(id==='0305'){
            wx.navigateTo({
              url: "/pages/visit7/visit7?id="+id,  
            });
          }
          else if(id==='0306'){
            wx.navigateTo({
              url: "/pages/visit8/visit8?id="+id,  
            });
          }
          else if(id==='0401'){
            wx.navigateTo({
              url: "/pages/visit9/visit9?id="+id,  
            });
          }
          else if(id==='0502'){
            wx.navigateTo({
              url: "/pages/visit10/visit10?id="+id,  
            });
          }

        }

		  }
    }
    
	},
})
