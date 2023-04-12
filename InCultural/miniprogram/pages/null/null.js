// pages/null/null.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    up:function(e)
      {
        wx.navigateTo({
          url: '../platform/index',
          success:function(){
            console.log(111)
          }
        })
      },
      time:function(e)
      {
        wx.navigateTo({
          url: '../timeline/index',
          success:function(){
            console.log(111)
          }
        })
      },
      list:function(e)
      {
        wx.navigateTo({
          url: '../near/near',
          success:function(){
            console.log(111)
          }
        })
      }
  },
  
})
