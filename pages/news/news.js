import {newsPost} from '../../api/apis'
import {formatNum,formatDate} from '../../utils/common.js'
// pages/news/news.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        newsArr:[],
        isLoding:false,
        isData:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getNewsData()
    },

    getNewsData(size=0){
        this.setData({
            isLoding:true
        })
        newsPost({
            limit:8,
            size
        }).then(res => {
            res.data.forEach(item => {
                item.view_count = formatNum(item.view_count)
                item.publish_date = formatDate(item.publish_date)
            })
            let oldData = this.data.newsArr
            let newData = [...oldData,...res.data]
            wx.stopPullDownRefresh()
            this.setData({
                newsArr:newData,
                isLoding:false
            })
            if(this.data.newsArr.length == res.total){
                this.setData({
                    isData:true
                })
            }
        })
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
        this.setData({
            newsArr:[],
            isData:false,
            isLoding:false
        })
        this.getNewsData()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        this.data.isData || this.getNewsData(this.data.newsArr.length)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})