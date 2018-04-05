/**
 * @file log工具
 * @author pashangshangpo
 */


;(function (g) {
  // 上一次log使用的名称
  let preLogName = '';

  /**
   * 构造器
   * @param {String} name 名称或message
   * @param {*} color 颜色
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
   * 输出信息
   * @param {String} message log信息
   * @param {String} color 颜色
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
   * 隐藏log
   */
  Log.prototype.hideMessage = function () {
    localStorage.setItem('log-' + this.name, 'false');
  };
  
  /**
   * 显示log
   */
  Log.prototype.showMessage = function () {
    localStorage.setItem('log-' + this.name, 'true');
  };
  
  /**
   * 判断是否输出log信息
   */
  Log.prototype.__isOutMessage = function () {
    const state = localStorage.getItem('log-' + this.name)
    return state === 'true' || state == null;
  };

  g.Log = Log;
}(typeof global !== 'undefined' ? global : window));