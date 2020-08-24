1. CSS属性名是否大小写敏感
回答:否
- 属性名与属性值不敏感
- id classname querySelector敏感



2. margin-top与margin-bottom 对行内元素是否起作用？
回答:否
- 水平方向有影响，垂直方向没影响.(margin,paddingd都只有左右方向有效)
- 设置四个方向的内边距时，行内元素确实会显示出效果，但是只有效果，对其他元素没有影响。垂直方向和外边距没有影响
- 行内元素：
b, big, i, small, tt
abbr, acronym, cite, code, dfn, em, kbd, strong, samp, var
a, bdo, br, img, map, object, q, script, span, sub, sup
button, input, label, select, textarea

- 块级元素:
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements



3. 有一个<p>标签时font-size:10rem,标签中的文本大小是否会随着窗口的尺寸改变而改变？
    - 自适应
    - rem(一切可依赖，等比例关系 px2rem)
    - 蓝湖 用法 750px 手机多变，所以使用font-size 宽高变化
    - media query(媒体查询)
    - vw/vh
    - 百分比
    - calc
    - postcss
    - 适配 还曾用过vue/react+vw实现
    - js之中靠babel
    - 工作流 webpack
    - webpack css .styl  .scss -> css-loader stylus-loader stylus css 编译
     postcss 全新的css库 平台 插件系统
     babel-core autoprefixer
     box-shadow
     cssnext css variable
     - 移动适配 vw已经基本支持
     - postcss 强大 vue项目内置了postcss  .postcssrc.js
       px-to-viewport 安装

