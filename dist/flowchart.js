!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("d3")):"function"==typeof define&&define.amd?define(["d3"],e):"object"==typeof exports?exports.flowchart=e(require("d3")):t.flowchart=e(t.d3)}(this,function(t){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(e,r){e.exports=t},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=r(0),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(u),i=function(){function t(e,r){n(this,t),this.paper=a.select(e).append("svg"),this.render()}return o(t,[{key:"render",value:function(){this.paper.selectAll("g").data([1,2,3]).enter().append("g").append("rect").attr("width",200).attr("height",30).attr("fill","steelblue").attr("y",function(t,e){return 0}).append("text").attr("fill","white").attr("text-anchor","middle").attr("transform","translate(30,20)").attr("x",function(t,e){return 0}).attr("y",function(t){return 0}).attr("dx",function(){return 0}).attr("dy",function(t){return 0}).text(function(){return"sadas"})}}]),t}();e.default=i}])});
//# sourceMappingURL=flowchart.js.map