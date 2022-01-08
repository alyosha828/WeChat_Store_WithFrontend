// pages/history/history.js
Page({

  /**
   * Page initial data
   */
  data: { 
    tabs:["All", "Paid", "Canceled", "Progressing", "Finished"],
    activeIndex: 0,
    dataList:[
      {
        name:"order1",
        status:1,
        imageUrl:"../../images/logo1.svg",
        price:46,
        startTime:"2020-06-05",
        endTime:"2021-02-03"
      },
      {
        name:"order2",
        status:2,
        imageUrl:"../../images/logo1.svg",
        price:46,
        startTime:"2020-06-05",
        endTime:"2021-02-03"
      },
      {
        name:"order3",
        status:4,
        imageUrl:"../../images/logo1.svg",
        price:46,
        startTime:"2020-06-05",
        endTime:"2021-02-03"
      },
      {
        name:"order4",
        status:3,
        imageUrl:"../../images/logo1.svg",
        price:46,
        startTime:"2020-06-05",
        endTime:"2021-02-03"
      },
      {
        name:"order5",
        status:4,
        imageUrl:"../../images/logo1.svg",
        price:46,
        startTime:"2020-06-05",
        endTime:"2021-02-03"
      },
      {
        name:"order6",
        status:1,
        imageUrl:"../../images/logo1.svg",
        price:46,
        startTime:"2020-06-05",
        endTime:"2021-02-03"
      },
    ],
    showList:[],
    todayDay:"2000-05-25"
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'My Order',
    })
    var today = new Date();

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    this.setData({
      activeIndex:0,
      showList:this.data.dataList,
      todayDay:date
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
  tabClick: function (e) {
    console.log("---------------" + e.detail.index)
    this.updateList(e.detail.index)
    this.setData({
      activeIndex: e.detail.index
    });
  },
  updateList:function(_index){
    var midList = []
    var i = 0, j = 0, len = 0;
    if (_index == 0){
      midList = this.data.dataList
    }else{
      for(j = 0,len=this.data.dataList.length; j < len; j++) {
        if (_index == this.data.dataList[j].status){
          midList[i] = this.data.dataList[j]
          i++
        }
      }
    }
    this.setData({
      showList:midList
    })
  },
  clickOrderCell:function(e){
    var index = e.currentTarget.dataset.index
    console.log("index ==== " + index)
    wx.navigateTo({
      url: `/pages/roomDetailAllow/index?startDate=${this.data.showList[index].startTime}&endDate=${this.data.showList[index].endTime}&status=${this.data.showList[index].status}`,
    })
  }
})