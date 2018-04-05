/**
 * @file log工具
 * @author pashangshangpo
 */


;(function (g) {
  // 上一次log使用的名称
  let preLogName = '';

  /** 
  * @start-def: Log: name, color
  *  name: String 名称或message
  *  color: String 颜色
  */
  const Log = function (name, color) {
    if (this.constructor === Log) {
      this.name = name;
      this.color = color;
    }
    else {
      if (preLogName) {
        console.log('---- end ----');
        console.log('\n');
      }

      // 复杂类型不允许输出颜色
      if (typeof name === 'string') {
        console.log('%c' + name, 'color:' + color);
      }
      else {
        console.log(name)
      }

      preLogName = '';
    }
  };
  
  /**
   * @def: .message: message, color
   *  message: String log信息
   *  color: String 颜色
   *  输出信息
   */
  Log.prototype.message = function (message, color) {
    if (this.__isOutMessage()) {
      if (preLogName !== this.name) {
        console.log('---- ' + this.name + ' ----');
      }
      
      if (typeof message === 'string') {
        console.log('%c' + message, 'color:' + (color || this.color));
      }
      else {
        console.log(message)
      }

      preLogName = this.name;
    }
  };
  
  /**
   * @def: .hideMessage:
   * 隐藏log
   */
  Log.prototype.hideMessage = function () {
    localStorage.setItem('log-' + this.name, 'false');
  };
  
  /**
   * @def: .showMessage:
   * 显示log
   */
  Log.prototype.showMessage = function () {
    localStorage.setItem('log-' + this.name, 'true');
  };
  
  /**
   * @def: .__isOutMessage:
   * 判断是否输出log信息
   */
  Log.prototype.__isOutMessage = function () {
    const state = localStorage.getItem('log-' + this.name)
    return state === 'true' || state == null;
  };

  g.Log = Log;
}(typeof global !== 'undefined' ? global : window));