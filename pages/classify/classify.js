import {navPost} from '../../api/apis'
import {productPost} from '../../api/apis'
// pages/classify/classify.js
let navid;
Page({
    /**
     * 页面的初始数据
     */
    data: {
        navActive:0,
        listArr:[],
        proArr:[],
        isLoding:false,
        isData:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        let {idx} = options
        await this.getList();
        if(idx){
            this.navClick(idx);
        }else{
            navid = this.data.listArr[0]._id
            this.getProductList() 
        }
        
    },
    async getList(){
        await navPost().then(res => {
           this.setData({
               listArr:res.data
           })
           this.selectComponent("#myTitle").resize()
        })
    },
    // 获取产品列表数据
    getProductList(s=0){
        this.setData({
            isLoding:true
        })
        productPost({
            navid:navid,
            size:s
        }).then(res => {
            let oldData = this.data.proArr
            let newData = [...oldData,...res.data]
            this.setData({
                proArr:newData,
                isLoding:false
            })
            if(res.total == this.data.proArr.length){
                this.setData({
                    isData:true
                })
            }
        })
    },
    // 点击导航栏的事件
    navClick(e){
        // 转化为数字型
        let index= Number(e?.detail?.index ?? e);
        navid = this.data.listArr[index]._id
        // 点击导航列表的时候先把原有的产品列表数据清空
        this.setData({
            proArr:[],
            isLoding:false,
            isData:false,
            navActive:index
        })
        this.getProductList()
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

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        this.data.isData || this.getProductList(this.data.proArr.length)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})