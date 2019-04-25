# octoparse2
基于 rich-text 的跨平台富文本解析

## 如何使用

```html
// index.wxml
<rich-text nodes="{{nodes}}"></rich-text>
```

```js
// index.js
const octoparse = require('octoparse2');

let richText = `<p style="text-align:center;">Hello World!</p>`;
let html = octoparse.parse(richText);

this.setData({
  nodes: html
});

```

> Tips: 记得使用 **构建npm**，不然加载不了 *node_modules* 目录下的文件 [参考文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)
