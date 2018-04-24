# mip-zol-like

为Z商城点赞业务组件, 支持文章点赞评论点赞等

标题|内容
----|----
类型|业务组件
支持布局|responsive,fixed-height,fill,container,fixed
所需脚本|https://c.mipcdn.com/static/v1/mip-zol-like/mip-zol-like.js

## 最新版本

### 1.0.5

- 增加样式自定义，并向后兼容

### 1.0.4

- 解决不可描述的bug

### 1.0.3

- 解决因浏览器回退不刷新导致数据不同步的引起的感官不统一的问题
- 修改接口，对二次点击同一个赞做了判断，只做了表面的处理（不操作数据）。

### 1.0.2

- 增加点击过快的限制

### 1.0.1

- 修复已知的bug

## 示例

### 基本用法
```html
<mip-zol-like
	data-src="//path/to/api"
	data-done="btns-praise__click"
	data-cansel="true"
	data-status="1"
	data-callback="true"
	data-query="reviewId=001&replayId=0">
	<span class="_js_mip_like btns-praise"><em>(33)</em></span>
</mip-zol-like>
```

## 属性

### data-src

说明：点赞接口地址  
必选项：是  
类型：String    
默认值：""

### data-done

说明：点赞成功样式转化  
必选项：是  
类型：String  
默认值：""  

### data-cansel

说明：是否可取消赞     
必选项：否  
类型：String    
默认值："true"  

### data-status

说明：是否被点赞，取值 `1` 和 `0`   
必选项：否  
类型：String  
默认值："0"

### data-callback

说明：是否需要回调函数，特殊需求，默认是需要，取值 `true` 和 `false`  
必选项：否   
类型：String  
默认值："true"  

### data-query

说明：查询字符串    
必选项：否   
类型：String    
默认值：''


## 注意事项
- 为Z商城点赞业务组件, 支持文章点赞评论点赞等, 该组件属性值为必填项
可以内置结构。
- 该组件有toast提示，需自定义toast的样式，toast的html结构如下：
```html
<div id="_j_miptoast" class="mip-zol-toast"><span>toast显示的文字</span></div>
```
