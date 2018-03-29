# mip-judge-port

mip-judge-port  判断访问是什么设备,给下载按钮,相应连接

标题|内容
----|----
类型|通用
支持布局|responsive,fixed-height,fill,container,fixed
所需脚本|https://c.mipcdn.com/static/v1/mip-judge-port/mip-judge-port.js

## 示例

### 基本用法
```html
<mip-judge-port  class="gamedown mbtn" href="http://www.4399.com" an="http://www.3839.com" ios="http://www.7k7k.com" game="http://www.4399.com">下载</mip-judge-port>
<mip-judge-port  class="gamedown mbtn" href="无下载链接时的链接" an="安卓设备下载链接" ios="苹果设备下载链接" game="无下载链接时的链接">下载</mip-judge-port>
```

## 属性

### an

说明：安卓设备下载链接
必选项：否
类型 字符串
默认值：为空

### ios

说明：苹果设备下载链接
必选项：否
类型 字符串
默认值：为空

### game

说明：游戏详情页链接
必选项：否
类型 字符串
默认值：为空


