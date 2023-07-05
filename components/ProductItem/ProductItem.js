// components/ProductItem/ProductItem.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        item:{
            type:Object,
            value:{
                title:'默认标题'
            }
        }
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
        proClick(e){
            let id = e.currentTarget.dataset.id
            wx.navigateTo({
              url: `/pages/productDetail/productDetail?id=${id}`,
            })
        }
    }
})
