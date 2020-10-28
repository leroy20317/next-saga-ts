module.exports =  {
  "printWidth": 100, // 超过最大值换行
  "tabWidth": 2, // 缩进字节数
  "useTabs": true, // 缩进不使用tab，使用空格
  "semi": true, // 句尾添加分号
  "singleQuote": true, // 使用单引号代替双引号
  "proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  "arrowParens": "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  "bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  "eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
  "htmlWhitespaceSensitivity": "ignore",
  "jsxBracketSameLine": true, // 在jsx中把'>' 是否单独放一行
  "jsxSingleQuote": false, // 在jsx中使用单引号代替双引号
  "stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
  "trailingComma": "es5", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
};