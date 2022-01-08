// const Request = require('../../request/index');
Page({
  onShareAppMessage() {
    return {
    }
  },
  data: {

  },
  onLoad(){
    wx.setNavigationBarTitle({
      title: '我的',
    })
  },
  gotoDetail:function(){
    wx.navigateTo({
      url: '../../pages/profileDetail/index',
    })
  },
  gotoIntro:function(){
    wx.navigateTo({
      url: '../../pages/profileIntro/index',
    })
  },
  clickLogin:function(){
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  clickAccountLevel:function(){
    wx.navigateTo({
      url: '../../pages/profileDetail/index',
    })
  },
  clickAccountInfo:function(){
    wx.navigateTo({
      url: '../../pages/accountInfo/index',
    })
  },
  clickFeedBack:function(){
    wx.navigateTo({
      url: '../../pages/profileIntroDetail/index',
    })
  }
});
