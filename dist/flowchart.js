!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("flowchart",[],t):"object"==typeof exports?exports.flowchart=t():e.flowchart=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return new o.default(e)};var r=n(3),o=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),i=r(o),a=n(4),u=r(a);t.default={format:i.default,clone:u.default},e.exports=t.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(i),u=n(1),s=function(){function e(t){return r(this,e),this.$el=null,this.$nodes=[],this.$node=null,this.$shapes=[],this.init(t)}return o(e,[{key:"init",value:function(e){var t=this,n=(0,a.default)(e);this.$el=n.append("svg"),this.size(n[0].clientWidth,n[0].clientHeight);var r=null;return window.addEventListener("resize",function(e){r&&clearTimeout(r),r=setTimeout(function(){t.size(n[0].clientWidth,n[0].clientHeight)},300)}),this}},{key:"size",value:function(e,t){this.$el.attr("width",e).attr("height",t)}},{key:"data",value:function(e){this.$nodes=(0,u.format)(e);for(var t=0,n=this.$nodes.length;t<n;t++)if(!this.$nodes[t].prev.length){this.$node=this.$nodes[t];break}return this}},{key:"render",value:function(e){var t=this;return this.$shapes=this.$nodes.map(function(e,n){var r=t.$el.append("g");return r.append("rect").attr("width",80).attr("height",80).attr("fill","pink"),r.append("text").attr("text-anchor","start").attr("x",0).attr("y",0).attr("font-size",14).attr("font-family","微软雅黑").attr("fill","#000").text(e.text),r.attr("transform","translate("+80*n+","+80*n+")"),r}),this}}]),e}();s.version="0.0.1",t.default=s,e.exports=t.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},a=function(){function e(t){r(this,e);var n=[];n=t instanceof e?t:t instanceof Array?t:t instanceof Element?[t]:t instanceof NodeList?t:document.querySelectorAll(t);for(var o=0,i=n.length;o<i;o++)void 0===n[o].__SELECTOR__&&(n[o].__SELECTOR__=e.SELECTOR++),this[o]=n[o];return this.length=n.length,this}return o(e,[{key:"each",value:function(e,t){for(var n=0,r=this.length;n<r;n++)e.call(t||this[n],this[n],n,this);return this}},{key:"map",value:function(t,n){for(var r=[],o=0,i=this.length;o<i;o++){var a=t.call(n||this[o],this[o],o,this);a&&r.push(a)}return new e(r)}},{key:"select",value:function(t){var n=[];return this.each(function(e){Array.prototype.push.apply(n,e.querySelectorAll(t))}),new e(n)}},{key:"append",value:function(t){var n=t,r=t.indexOf(":");return r>=0&&"xmlns"!==(n=t.slice(0,r))&&(t=t.slice(r+1)),new e(this.map(function(r){var o=void 0;return o=e.namespaces[n]?document.createElementNS(e.namespaces[n],t):r.namespaceURI!==e.namespaces.xhtml?document.createElementNS(r.namespaceURI,t):document.documentElement.namespaceURI!==e.namespaces.xhtml?document.createElementNS(document.documentElement.namespaceURI,t):document.createElement(t),r.appendChild(o),o}))}},{key:"attr",value:function(t,n){var r=this,o=t,i=t.indexOf(":");return i>=0&&"xmlns"!==(o=t.slice(0,i))&&(t=t.slice(i+1)),this.each(function(i,a,u){var s=n;"function"==typeof n&&(s=n.call(r,i,a,u)),e.namespaces[o]?s?i.setAttributeNS(e.namespaces[o],t,s):i.removeAttributeNS(e.namespaces[o],t):s?i.setAttribute(t,s):i.removeAttribute(t)}),this}},{key:"text",value:function(e){return this.each(function(t){var n=document.createTextNode(e);t.appendChild(n)}),this}},{key:"translate",value:function(e,t){}},{key:"on",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this.$el.addEventListenr(e,t,n),this}},{key:"off",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.$el.removeEventListenr(e,t,n)}}]),e}();a.namespaces=i,a.SELECTOR=0,t.default=a,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){if("object"!==(void 0===e?"undefined":r(e)))return e;var t=Array.isArray(e)?[]:{};for(var n in e)t[n]=e[n];return t},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.map(function(t){for(var n=0,r=e.length;n<r;n++){var o=t.prev.indexOf(e[n].id);o!==-1&&(t.prev[o]=e[n]);var i=t.next.indexOf(e[n].id);i!==-1&&(t.next[i]=e[n])}return t})},e.exports=t.default}])});
//# sourceMappingURL=flowchart.js.map