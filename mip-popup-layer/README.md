# mip-popup-layer
mip-popup-layer 在指定的位置弹出层(需要在css中自己定义位置) 


标题|内容
----|----
类型|通用
支持布局|responsive,fixed-height,fill,container,fixed
所需脚本|https://c.mipcdn.com/static/v1/mip-close-dom/mip-popup-layer.js

## 示例

### 基本用法
```html
<style>
.listype{ position:relative; border:1px solid black;}

.popup1,.popup2,.popup3{
	background:red;
	display:none;		
	width:100%;
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.popup1{
	top:-97px ; 
	left: 0px;

}
.popup2{
	top:-78px ; 
	left: 0px;

}
.popup3{
	top:-58px ;
	left: 0px;

}
.top_menu { position:relative; z-index:10004; border-top: 1px solid #3D3D46; width: 100%; background: rgba(255, 255, 255, 0.7); height: 48px;display: -webkit-box; display: box; margin:100px 0 0; padding:0; -webkit-box-orient: horizontal; background: -webkit-gradient(linear, 0 0, 0 100%, from(#524945), to(#48403c), color-stop(60%, #524945));} 
.top_bar .top_menu>li {-webkit-box-flex:1; text-align:center;margin-right: 1px; color:#FFF;}


.top_bar .top_menu>li label { overflow:hidden; margin: 0 0 0 0; font-size: 12px; display: block !important; line-height: 18px; text-align: center; } 

</style>
<ul>
<li>元素id.open 打开层</li>
<li>元素id.close关闭层</li>
<li>元素id.toggle 打开或关闭层</li>
<li>元素id.closeAll 关闭除自己的其它层</li>
<ul>
 <div class="top_bar">
  <ul id="top_menu" class="top_menu"> 	
	<li class="listype" on="tap:popup1.closeAll  tap:popup1.toggle">
	    <label>首页</label>
        <mip-popup-layer id="popup1" layout="nodisplay" class="popup1">
			<ul>
				<li><b>列表</b></li>         
			<li>
				<a href="/sy-group">报名课程</a>
			</li>
			<li>
				<a href="/sy-agencys">教育机构</a>
			</li>
			<li>
				<a href="/sy-tutor">预约教师</a>
			</li>
			<li>
				<a href="/sy-pupil">预约学生</a>
			</li>
			</ul>
		</mip-popup-layer>	
	</li>
	<li class="listype" on="tap:popup2.closeAll  tap:popup2.toggle">
	<label>列表</label>
	<mip-popup-layer id="popup2" layout="nodisplay" class="popup2">
			<ul>
				<li><b>列表</b></li>         
			<li>
				<a href="/sy-group">报名课程</a>
			</li>
			<li>
				<a href="/sy-agencys">教育机构</a>
			</li>
			<li>
				<a href="/sy-tutor">预约教师</a>
			</li>
		
			</ul>
		</mip-popup-layer>	
	</li>
	<li class="listype" on="tap:popup3.closeAll tap:popup3.toggle">
	    <label>咨询</label>
	    <mip-popup-layer id="popup3" layout="nodisplay" class="popup3">
			<ul>
				<li><b>列表</b></li>         
			<li>
				<a  href="/sy-group">报名课程</a>
			</li>
			<li>
				<a  href="/sy-agencys">教育机构</a>
			</li>
			
			</ul>
		</mip-popup-layer>	
	</li>
	
  </ul> 
 </div>
  




```


