// pages/profileIntro/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    itemsOne: [
      {value: 'one', name: 'One', checked: 'true'},
      {value: 'two', name: 'Two'},
      {value: 'three', name: 'Three'},
    ],
    itemsTwo: [
      {value: 'one', name: 'One'},
      {value: 'two', name: 'Two'},
    ],
    itemsThree: [
      {value: 'one', name: 'One'},
      {value: 'two', name: 'Two'},
    ],

    num: 4,//后端给的分数,显示相应的星星
    one_1: '',
    two_1: '',
    one_2: 0,
    two_2: 5
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      one_1: this.data.num,
      two_1: 5 - this.data.num
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
  
  autoImage(e) {
    var that = this;
    var originalWidth = e.detail.width;
    var originalHeight = e.detail.height;
    var imageWidth = 0;
    var imageHeight = 0;
    wx.getSystemInfo({
        complete: (res) => {
            var winWidth = res.windowWidth;
            var winHeight = res.windowHeight;
            // console.log("-----------" + originalWidth + " == " + winWidth)
            var autoWidth = winWidth;
            var autoHeight = (autoWidth * originalHeight) / originalWidth;
            imageWidth = autoWidth + 'px';
            imageHeight = autoHeight + 'px';
            
            // console.log("-----------" + imageWidth + " == " + imageHeight)
            that.setData({
                imgWidth: imageWidth,
                imgHeight: imageHeight
            });
        }
    })
  },
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)

    const items = this.data.itemsOne
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setData({
      items
    })
  },

  in_xin:function(e){
    var in_xin = e.currentTarget.dataset.in;
    var one_2;
    if (in_xin === 'star-selected'){
      one_2 = Number(e.currentTarget.id);
    } else {
      one_2 = Number(e.currentTarget.id) + this.data.one_2;
    }
    this.setData({
      one_2: one_2,
      two_2: 5 - one_2
    })
  },
  showDetail:function(){
    wx.navigateTo({
      url: '../../pages/profileDetail/index',
    })
  }
  
})