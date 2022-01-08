
Page({
  onShareAppMessage() {
    return {
    }
  },
  data: {
    background: [{
      title:'demo-text-1',
      backColor:"#C1896E",
      image:"../../images/profile-level1.png",
      name:"LV.1  HEADING",
      detailList:[
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry11.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry12."
      ]
    },
    {
      title:'demo-text-2',
      backColor:"#8FA0B2",
      image:"../../images/profile-level1.png",
      name:"LV.2  HEADING",
      detailList:[
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry21.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry22."
      ]
    },
    {
      title:'demo-text-3',
      backColor:"#FCC214",
      image:"../../images/profile-level1.png",
      name:"LV.3  HEADING",
      detailList:[
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry31.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry32.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry33."
      ]
    },
    {
      title:'demo-text-2',
      backColor:"#3A3D46",
      image:"../../images/profile-level1.png",
      name:"LV.4  HEADING",
      detailList:[
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry41.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry42."
      ]
    },],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    current: 0
  },
  onLoad(){
    wx.setNavigationBarTitle({
      title: '我的',
    })
  },
  changeSelect(event) {
    console.log(event.detail);
    console.log("test ==========" + event.detail.current)
    this.setData({
    current: event.detail.current
   })
  },
  
});
