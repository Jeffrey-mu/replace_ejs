#### 替换绝对路径级别
- 替换整个html
- 替换字符串
示例
```html
<!-- 输入 -->
<a href="./home"></a>
<!-- return -->
<a href="../home></a>
```
```html
<!-- 输入 -->
<a href="home"></a>
<!-- return -->
<a href="../home></a>
```
```html
<!-- 输入 -->
<script src="home.js"></script>
<!-- return -->
<script src="../home.js"></script>
```
```html
<!-- 输入 -->
<script src="./home.js"></script>
<!-- return -->
<script src="../home.js"></script>
```
