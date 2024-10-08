// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isPositiveSelect:false,
    positiveList:[
            {key:0,value:"无"},
            {key:1,value:"动漫-魔法"},
            {key:2,value:"动漫-青春"}
          ],
    positiveString:"",
    textareaText:"",
    initPositivePrompt:"",
 
    isNegativeSelect:false,
    negativeList:[
        {key:0,value:"无"},
        {key:1,value:"常规"}
    ],
    negativeString:'',
    negativeTarea:'',
    initNegativePrompt:'',

    isUploadImgBtnClick:false,
    imagePath:''
  },

  select:function(){
    var isSelect = this.data.isPositiveSelect
    this.setData({isPositiveSelect:!isSelect})
  },

  selectNegative:function(){
    var isSelect = this.data.isNegativeSelect;
    this.setData({isNegativeSelect:!isSelect})
  },

  getType:function(e)
  {
    let key = parseInt(e.currentTarget.dataset.key); 
    let selectedType = this.data.positiveList.find(item => item.key === key);
    this.setData({
      isPositiveSelect:false,
    })
    switch (key) {
      case 0:
        this.setData({
          positiveString:"起手式",
          initPositivePrompt:'',
        })
        break;
      case 1:
        this.setData({
          positiveString:selectedType.value,
          initPositivePrompt:"4k,best",
        })
        break;
      case 2:
        this.setData({
          positiveString:selectedType.value,
          initPositivePrompt:"beautiful",
        })
        break;
      default:
        break;
    }
  },

  getNegativeType:function(e)
  {
    let key = parseInt(e.currentTarget.dataset.key); 
    let selectedType = this.data.negativeList.find(item => item.key === key);
    this.setData({
      isNegativeSelect:false,
    })
    switch (key) {
      case 0:
        this.setData({
          negativeString:"起手式",
          initNegativePrompt:'',
        })
        break;
      case 1:
        this.setData({
          negativeString:selectedType.value,
          initNegativePrompt:"worst",
        })
        break;
      case 2:
        this.setData({
          negativeString:selectedType.value,
          initNegativePrompt:"lotsofhands",
        })
        break;
      default:
        break;
    }
  },

  remarkInputAction:function(options)
  {
      let temp = options.detail.value;
      console.log('curareatxt:'+this.data.textareaText);
      console.log('test1:'+temp);
      this.setData({
        textareaText:temp
      })
  },

  remarkInputNegativeAction:function(options)
  {
      let temp = options.detail.value;
      console.log('curareatxt:'+this.data.negativeTarea);
      console.log('testne:'+temp);
      this.setData({
        negativeTarea:temp
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  uploadImgSlt:function()
  {
      console.log("点击了上传按钮");
      wx.chooseMedia(
        {
            count:1,
            mediaType:['image'],
            sourceType:['camera','album'],
            success: (res) => {
              // 选择媒体成功后的回调
              console.log(res.tempFiles); // 打印选择的媒体文件信息
              // 获取第一个媒体文件的临时路径
              this.setData({
                imagePath: res.tempFiles[0].tempFilePath
              });
            },
            fail: (err) => {
              // 选择媒体失败后的回调
              console.error('选择媒体失败', err);
            }
        }
      )
  }
})

