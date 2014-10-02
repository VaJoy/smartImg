smartImg
=======

		响应式图片处理工具
		author:[VaJoy Larn](http://www.cnblogs.com/vajoy/)<br />
### 使用方法
### 在 img 标签中添加 s-src="图片地址1 屏宽1,图片地址2 屏宽2, ..., 图片地址n 屏宽n," ，若屏宽参数没写则默认为0
### 如下例子：
		<img s-src="img/large.jpg 900,img/huge.jpg 1100,img/small.jpg" />
### 它表示当屏幕宽度大于1100px时显示img/huge.jpg，当屏幕宽度小于1100px但大于900px时显示img/large.jpg，其它更小屏幕宽度时显示img/small.jpg
### 当然，如果图片地址前缀是一样的，我们还可以加上s-prefix属性：
		<img s-prefix="img/" s-src="large.jpg 900,huge.jpg 1200,middle.jpg 650,small.jpg 0" />
### 查看效果请运行demo.html
### 若是动态生成或删除页面图片，可以在事件后执行 $.smartImg() 方法即可。