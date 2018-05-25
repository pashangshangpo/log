# log
针对console.log输出信息的优化

## example

使用构造器创建log组

```
var htmlLog = new Log('html', 'red');
htmlLog.message('片段1....');
htmlLog.message('片段2....', '片段3....');
```

使用函数的方式输出log

```
Log('hello');
Log('hello world', 'green');
```

隐藏本组log信息, 刷新页面后再次打开,将不会显示此组输出的log信息

```
var htmlLog = new Log('html', 'red');
htmlLog.message('片段1....');
htmlLog.message('片段2....', '片段3....');

htmlLog.hideMessage();
```

## api

```
[global, window].Log: (name, color) => [Undefined, Object]
  arguments
    name: String 名称或message
    color: String 颜色
  prototype
    message: ...messages
      message: String log信息
    hideMessage: () => undefined 隐藏log
    showMessage: () => undefined 显示log
```

## issue
当同时输出多个log信息时, 设置的颜色不会生效, 并且内容必须是String类型的