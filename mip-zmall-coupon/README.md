# mip-zmall-coupon

领取优惠劵 预约到店

标题|内容
----|----
类型|业务组件
支持布局|responsive,fixed-height,fill,container,fixed
所需脚本|https://c.mipcdn.com/static/v1/mip-zmall-coupon/mip-zmall-coupon.js

## 最新版本

### 1.1.3

- 增加防止点击过快的限制

### 1.1.0

- 改为独立层弹出，主要解决因 不能自己写fixed元素，而用mip-fixed导致的问题，实现逻辑变了

### 1.0.4

- 修改样式

### 1.0.3

- 修改提示语
- 修改样式

### 1.0.2

- 修改查看路线的链接

### 1.0.1

- 增加部分注释
- 更改获取 `userId` 为 获取 `sid`
- 把 `alert` 改成 `toast`

## 示例

### 基本用法
```html
<mip-zmall-coupon data-url="//path/to/api" data-merchant-id="" data-store-id="" data-trigger="click:coupon.show" data-target="coupon">
    <mip-fixed type="top" zmall-fixed-id="coupon" class="mip-zmall-coupon-fixed"></mip-fixed>
</mip-zmall-coupon>
<div on="click:coupon.show">优惠到店</div>
```

## 属性

### data-url

说明：一键领取接口地址    
必选项：是     
类型：String       
默认值：""     

### data-trigger

说明：触发优惠券层的按钮         
必选项：是         
类型：String          
默认值：""      

### data-target

说明：被挪到下面的fixed的对应值             
必选项：是         
类型：String          
默认值：""

## 注意事项
- 组件内部Dom结构及属性名称不能自定义
