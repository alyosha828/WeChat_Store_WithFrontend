// pages/roomDetail/index.js
Page({

    /**
     * Page initial data
     */
    data: {
        room_info:{
            image: "../../images/logo1.svg",
            title: "Watched the phone",
            detail: "Lorem Ipsun is simply dummy text of the printin and typwsetting industry.",
            roomSize: "Width 30cm, heght 20cm, length 50cm",
            aniamlCount: "3 cats",
            level: 100,
            carhouse: "Test Car",
            price:36,
            retailPrice:152
        },
        
        showActionsheet: false,
        currentDate:"2010/03/23",
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {

        wx.setNavigationBarTitle({
            title: 'Room Information',
          })
    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function () {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow: function () {

    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide: function () {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload: function () {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh: function () {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom: function () {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage: function () {

    },
    showRoomDetail: function(e){
        console.log("e.currentTarget.dataset.date == " + e.currentTarget.dataset.date)
        this.setData({
            currentDate: e.currentTarget.dataset.date,
            showActionsheet: true
        })
        console.log("currentTarget == " + this.data.currentDate)
        // wx.navigateTo({
        //     // url: `/pages/${e.currentTarget.dataset.page}/index?envId=${this.data.selectedEnv.envId}`,
        //      url: `/pages/roomDetailAllow/index`
        //    })
    },
    
    openActionsheet:function(e){
        console.log("e.currentTarget.dataset.date == " + e.currentTarget.dataset.date)
        this.setData({
        currentDate: e.currentTarget.dataset.date,
        showActionsheet: true
        })
        console.log("currentTarget == " + this.data.currentDate)
    },
    closeActionSheet: function () {
        this.setData({
        showActionsheet: false
        })
    },
    dateChange(e) {
        console.log("选中日期变了,现在日期是 " + e.detail.type, e.detail.dateString)
        if (e.detail.type == "start"){
            this.setData({
                dateStringStart: e.detail.dateString
            })
        }else if (e.detail.type == "end"){
            this.setData({
                dateStringEnd: e.detail.dateString,
                showActionsheet: false
            })
            console.log("------" + this.data.dateStringStart + " == " + this.data.dateStringEnd)
            wx.navigateTo({
              url: `/pages/roomDetailAllow/index?startDate=${this.data.dateStringStart}&endDate=${this.data.dateStringEnd}`,
            })
        }
    },
    onViewCheckinInfo: function(){
        wx.navigateTo({
            // url: `/pages/${e.currentTarget.dataset.page}/index?envId=${this.data.selectedEnv.envId}`,
             url: `/pages/checkInInstro/index`
           })
    },
    onViewCheckoutInfo: function(){
        wx.navigateTo({
            // url: `/pages/${e.currentTarget.dataset.page}/index?envId=${this.data.selectedEnv.envId}`,
             url: `/pages/checkOutInstro/index`
           })
    }
})