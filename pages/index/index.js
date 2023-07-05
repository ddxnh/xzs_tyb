import {formatNum,formatDate} from '../../utils/common.js'
import {navPost,newsPost} from '../../api/apis'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[],
    newsList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavData();
    this.getNewsData();
  },
  // 获取导航栏的数据
  getNavData(){
    // 封装了的
    navPost().then(res => {
      this.setData({
          navList:res.data
      })
    })
    // 没有封装的
    //#region 
    // wx.request({
    //   url: 'https://tea.qingnian8.com/nav/get',
    //   header:{
    //     "content-type":"application/json"
    //   },
    //   method:"POST",
    //   success:res => {
    //    this.setData({
    //      navList:res.data.data
    //    })
    //   }
    // })
    //#endregion
  },
  // 获取新闻列表数据
  getNewsData(){
    newsPost({
      limit:3,
      hot:true
    }).then(res => {
      res.data.forEach(item => {
        item.view_count = formatNum(item.view_count)
        item.publish_date = formatDate(item.publish_date)
      })
      this.setData({
        newsList:res.data
      })
    })
    // 没有封装的
    //#region 
    // wx.request({
    //   url: 'https://tea.qingnian8.com/news/get',
    //   header:{
    //     "content-type":"application/json"
    //   },
    //   method:"POST",
    //   data:{
    //     limit:3,
    //     hot:true
    //   },
    //   success:res => {
    //     res.data.data.forEach(item => {
    //       item.view_count = formatNum(item.view_count)
    //       item.publish_date = formatDate(item.publish_date)
    //     })
    //     this.setData({
    //       newsList:res.data.data
    //     })
    //   }
    //#endregion
    // })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})