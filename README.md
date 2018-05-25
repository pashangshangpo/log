# log
针对console.log输出信息的优化

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