var outputSrc = {
   "/index.js": [
      {
         "lineStart": 1,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> @file log工具\n @author pashangshangpo</p>\n"
            }
         ],
         "index": 0
      },
      {
         "type": "source",
         "html": "<pre><code>\n\n<span class=\"actionscript\">\n;(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(g)</span> </span>{\n</span></code></pre>",
         "index": 1
      },
      {
         "type": "comment",
         "lineStart": 8,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> 上一次log使用的名称</p>\n"
            }
         ],
         "index": 2
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-attribute\">  let preLogName</span> = <span class=\"hljs-string\">''</span>;\n\n  </code></pre>",
         "index": 3
      },
      {
         "lineStart": 11,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "name",
                     "defHtml": " <a data-jsdef-prop=\"String\">String</a> 名称或<a data-jsdef-prop=\"message\">message</a>",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "color",
                     "defHtml": " <a data-jsdef-prop=\"String\">String</a> 颜色",
                     "commentHtml": ""
                  }
               ],
               "name": "Log",
               "defHtml": " <a data-jsdef-prop=\"name\">name</a>, <a data-jsdef-prop=\"color\">color</a>",
               "commentHtml": ""
            }
         ],
         "index": 4
      },
      {
         "type": "source",
         "html": "<pre><code>\n  <span class=\"hljs-keyword\">const</span> Log = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">name, color</span>) </span>{\n    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.constructor === Log) {\n      <span class=\"hljs-keyword\">this</span>.name = name;\n      <span class=\"hljs-keyword\">this</span>.color = color;\n    }\n    <span class=\"hljs-keyword\">else</span> {\n      <span class=\"hljs-keyword\">if</span> (preLogName) {\n        <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'---- end ----'</span>);\n        <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'\\n'</span>);\n      }\n\n</code></pre>",
         "index": 5
      },
      {
         "type": "comment",
         "lineStart": 27,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> 复杂类型不允许输出颜色</p>\n"
            }
         ],
         "index": 6
      },
      {
         "type": "source",
         "html": "<pre><code>      <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-built_in\">typeof</span> <span class=\"hljs-built_in\">name</span> === <span class=\"hljs-string\">'string'</span>) {\n        console.<span class=\"hljs-built_in\">log</span>(<span class=\"hljs-string\">'%c'</span> + <span class=\"hljs-built_in\">name</span>, <span class=\"hljs-string\">'color:'</span> + color);\n      }\n      <span class=\"hljs-keyword\">else</span> {\n        console.<span class=\"hljs-built_in\">log</span>(<span class=\"hljs-built_in\">name</span>)\n      }\n\n      preLogName = <span class=\"hljs-string\">''</span>;\n    }\n  };\n  \n  </code></pre>",
         "index": 7
      },
      {
         "lineStart": 39,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "message",
                     "defHtml": " <a data-jsdef-prop=\"String\">String</a> <a data-jsdef-prop=\"log\">log</a>信息",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "color",
                     "defHtml": " <a data-jsdef-prop=\"String\">String</a> 颜色",
                     "commentHtml": ""
                  }
               ],
               "name": "Log.message",
               "defHtml": " <a data-jsdef-prop=\"message\">message</a>, <a data-jsdef-prop=\"color\">color</a>",
               "commentHtml": ""
            },
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>  输出信息</p>\n"
            }
         ],
         "index": 8
      },
      {
         "type": "source",
         "html": "<pre><code>\n  Log.prototype.message = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">message, color</span>) </span>{\n    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.__isOutMessage()) {\n      <span class=\"hljs-keyword\">if</span> (preLogName !== <span class=\"hljs-keyword\">this</span>.name) {\n        <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'---- '</span> + <span class=\"hljs-keyword\">this</span>.name + <span class=\"hljs-string\">' ----'</span>);\n      }\n      \n      <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> message === <span class=\"hljs-string\">'string'</span>) {\n        <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'%c'</span> + message, <span class=\"hljs-string\">'color:'</span> + (color || <span class=\"hljs-keyword\">this</span>.color));\n      }\n      <span class=\"hljs-keyword\">else</span> {\n        <span class=\"hljs-built_in\">console</span>.log(message)\n      }\n\n      preLogName = <span class=\"hljs-keyword\">this</span>.name;\n    }\n  };\n  \n  </code></pre>",
         "index": 9
      },
      {
         "lineStart": 62,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "Log.hideMessage",
               "defHtml": "",
               "commentHtml": ""
            },
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> 隐藏log</p>\n"
            }
         ],
         "index": 10
      },
      {
         "type": "source",
         "html": "<pre><code>\n  Log.prototype.hideMessage = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">()</span> </span>{\n    localStorage.setItem(<span class=\"hljs-string\">'log-'</span> + <span class=\"hljs-keyword\">this</span>.name, <span class=\"hljs-string\">'false'</span>);\n  };\n  \n  </code></pre>",
         "index": 11
      },
      {
         "lineStart": 70,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "Log.showMessage",
               "defHtml": "",
               "commentHtml": ""
            },
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> 显示log</p>\n"
            }
         ],
         "index": 12
      },
      {
         "type": "source",
         "html": "<pre><code>\n  Log.prototype.showMessage = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">()</span> </span>{\n    localStorage.setItem(<span class=\"hljs-string\">'log-'</span> + <span class=\"hljs-keyword\">this</span>.name, <span class=\"hljs-string\">'true'</span>);\n  };\n  \n  </code></pre>",
         "index": 13
      },
      {
         "lineStart": 78,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "Log.__isOutMessage",
               "defHtml": "",
               "commentHtml": ""
            },
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> 判断是否输出log信息</p>\n"
            }
         ],
         "index": 14
      },
      {
         "type": "source",
         "html": "<pre><code>\n  Log.prototype.__isOutMessage = function () {\n    const <span class=\"hljs-keyword\">state</span> = localStorage.getItem('log-' + this.name)\n    return <span class=\"hljs-keyword\">state</span> === 'true' || <span class=\"hljs-keyword\">state</span> == null;\n  };\n\n  g.Log = Log;\n}(typeof <span class=\"hljs-keyword\">global</span> !== 'undefined' ? <span class=\"hljs-keyword\">global</span> : window));</code></pre>",
         "index": 15
      }
   ]
}