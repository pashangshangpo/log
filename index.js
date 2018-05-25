/**
 * @file log工具
 * @author pashangshangpo
 * @createTime 2018年5月25日 下午1:11:14
 * 
 * @api
 *   Log: (name, color) => [Undefined, Object]
 *     arguments
 *       name: String 名称或message
 *       color: String 颜色
 *     prototype
 *       message: ...messages
 *         message: String log信息
 *       hideMessage: () => undefined 隐藏log
 *       showMessage: () => undefined 显示log
 */

;(function (g) {
  var prefix = 'pssp-log-';
  var preLogName = '';

  var Log = function (name, color) {
    if (this && this.constructor === Log) {
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
        console.log(name);
      }

      preLogName = '';
    }
  };

  Log.prototype.message = function (...messages) {
    var message = '';

    if (this.__isOutMessage()) {
      if (preLogName !== this.name) {
        console.log('---- ' + this.name + ' ----');
      }

      if (messages.length > 1) {
        console.log.apply(null, messages);
      }
      else {
        message = messages[0];

        if (typeof message === 'string') {
          console.log('%c' + message, 'color:' + this.color);
        }
        else {
          console.log(message);
        }
      }

      preLogName = this.name;
    }
  };

  Log.prototype.hideMessage = function () {
    localStorage.setItem(prefix + this.name, 'false');
  };

  Log.prototype.showMessage = function () {
    localStorage.setItem(prefix + this.name, 'true');
  };

  Log.prototype.__isOutMessage = function () {
    var state = localStorage.getItem(prefix + this.name);

    return state === 'true' || state == null;
  };

  g.Log = Log;
}(typeof global !== 'undefined' ? global : window));