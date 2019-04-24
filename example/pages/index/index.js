//index.js
//获取应用实例
const app = getApp()
const octoparse = require('../../bundle.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let article = `<p style="text-align:center;">
    <span>文本1</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>文本2</span>
    <img src="http://haitao.nos.netease.com/f448c4490afc4b0484248b1e6035991d1529980559392jiv2x73410299.jpg?imageView&amp;quality=98&amp;crop=0_0_750_500" />
    </p> 
    <p style="text-align:center;">
      <img src="http://haitao.nos.netease.com/67a89d6b5e854d509c6cb1c67c3da9d51539951921875jnfzm3ma10166.jpg">
      <br />
      </img>
      </p> 
      <p style="text-align:center;">
        <img src="http://haitao.nos.netease.com/f448c4490afc4b0484248b1e6035991d1529980559392jiv2x73410299.jpg?imageView&amp;quality=98&amp;crop=0_1000_750_500" />
      </p> 
      <p style="text-align:center;">
        <img src="http://haitao.nos.netease.com/f448c4490afc4b0484248b1e6035991d1529980559392jiv2x73410299.jpg?imageView&amp;quality=98&amp;crop=0_1500_750_500" />
      </p> 
      <p style="text-align:center;">
        <img src="http://haitao.nos.netease.com/f448c4490afc4b0484248b1e6035991d1529980559392jiv2x73410299.jpg?imageView&amp;quality=98&amp;crop=0_2000_750_500" />
        </p> 
      <p style="text-align:center;">
        <img src="http://haitao.nos.netease.com/f448c4490afc4b0484248b1e6035991d1529980559392jiv2x73410299.jpg?imageView&amp;quality=98&amp;crop=0_2500_750_500" />
      </p> 
      <p style="text-align:center;">
        <img src="http://haitao.nos.netease.com/f448c4490afc4b0484248b1e6035991d1529980559392jiv2x73410299.jpg?imageView&amp;quality=98&amp;crop=0_3000_750_500" />
      </p> 
      <p style="text-align:center;">
        <img src="http://haitao.nos.netease.com/c93842b58bdf47ae99a6bb641f6865501530773886042jj878xui12201.jpg?imageView&amp;quality=98&amp;crop=0_0_750_500" />
      </p> 
      <p style="text-align:center;">
        <img src="http://haitao.nos.netease.com/5d92f55711d04e5a98661492ed75017d1534767304692jl28treb11466.jpg?imageView&amp;crop=0_0_750_306" />
      </p> 
      <p style="text-align:center;">
        <img src="http://haitao.nos.netease.com/c0e15f6bbcaa474396e785bea0e6dfb11534767310456jl28tvug12339.jpg" />
      </p> 
      <p style="text-align:center;"><img src="http://haitao.nos.netease.com/5d92f55711d04e5a98661492ed75017d1534767304692jl28treb11466.jpg?imageView&amp;crop=0_306_750_367" />
      </p> 
      <p style="text-align:center;"><img src="http://haitao.nos.netease.com/f448c4490afc4b0484248b1e6035991d1529980559392jiv2x73410299.jpg?imageView&amp;quality=98&amp;crop=0_4000_750_500" /></p> ↵
      <p style="text-align:center;"><img src="http://haitao.nos.netease.com/f448c4490afc4b0484248b1e6035991d1529980559392jiv2x73410299.jpg?imageView&amp;quality=98&amp;crop=0_4500_750_500" />
      </p> 
      <p style="text-align:center;">
        <img src="http://haitao.nos.netease.com/f448c4490afc4b0484248b1e6035991d1529980559392jiv2x73410299.jpg?imageView&amp;quality=98&amp;crop=0_5000_750_500" />
      </p> 
      <p style="text-align:center;">
        <img src="http://haitao.nos.netease.com/f448c4490afc4b0484248b1e6035991d1529980559392jiv2x73410299.jpg?imageView&amp;quality=98&amp;crop=0_5500_750_500" />
      </p> 
      <p style="text-align:center;">
          <img src="http://haitao.nos.netease.com/f448c4490afc4b0484248b1e6035991d1529980559392jiv2x73410299.jpg?imageView&amp;quality=98&amp;crop=0_6000_750_500" /></p> ↵
        <p style="text-align:center;"><img src="http://haitao.nos.netease.com/f448c4490afc4b0484248b1e6035991d1529980559392jiv2x73410299.jpg?imageView&amp;quality=98&amp;crop=0_6500_750_149" />
      </p><p>1234</p>`;

    let html = octoparse.parse(article);
    console.log('======', html)

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        nodes: html
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
