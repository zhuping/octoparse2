const app = getApp()
const octoparse = require('../../bundle.js');

Page({
  data: {

  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
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
      </p><span>1234</span><br/><span>1234</span>`;

    let html = octoparse.parse(article);
    console.log('======', html)

    this.setData({
      nodes: html
    });
  },
})
