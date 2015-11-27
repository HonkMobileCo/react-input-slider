!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/example/",t(0)}([function(e,t,n){"use strict";n(8);var r=n(1),i=n(2),s=n(3),a=r.createClass({displayName:"App",getInitialState:function(){return{x:21,y:73,left:120,top:120}},render:function(){return r.createElement("div",{className:"wrap"},r.createElement("div",{className:"example example-xy"},r.createElement("h3",null,"axis='xy'"),r.createElement("div",null,"x: "+this.state.x),r.createElement("div",null,"y: "+this.state.y),r.createElement(s,{className:"slider",axis:"xy",x:this.state.x,xmax:100,y:this.state.y,ymax:100,onDragEnd:this.handleDragEnd,onChange:this.handleChange})),r.createElement("div",{className:"example example-x"},r.createElement("h3",null,"axis='x'"),r.createElement("div",null,"x: "+this.state.left),r.createElement(s,{className:"slider",axis:"x",x:this.state.left,xmin:100,xmax:360,onDragEnd:this.handleDragEnd,onChange:this.handleChangeX})),r.createElement("div",{className:"example example-y"},r.createElement("h3",null,"axis='y'"),r.createElement("div",null,"y: "+this.state.top),r.createElement(s,{className:"slider",axis:"y",y:this.state.top,ymin:100,ymax:360,onDragEnd:this.handleDragEnd,onChange:this.handleChangeY})))},handleDragEnd:function(){console.log("handleDragEnd")},handleChange:function(e){this.setState({x:e.x,y:e.y})},handleChangeX:function(e){this.setState({left:e.x})},handleChangeY:function(e){this.setState({top:e.y})}});i.render(r.createElement(a,null),document.getElementById("app"))},function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(4),s=n(1),a=n(2);e.exports=s.createClass({displayName:"InputSlider",propTypes:{axis:s.PropTypes.string,x:s.PropTypes.number,xmax:s.PropTypes.number,xmin:s.PropTypes.number,y:s.PropTypes.number,ymax:s.PropTypes.number,ymin:s.PropTypes.number},getDefaultProps:function(){return{axis:"x",xmin:0,ymin:0}},render:function(){var e=this.getPosition(),t=this.props.axis,n={};return"x"===t&&(n.width=e.left),"y"===t&&(n.height=e.top),s.createElement("div",r({},this.props,{className:i("u-slider","u-slider-"+t,this.props.className),onClick:this.handleClick}),s.createElement("div",{className:"value",style:n}),s.createElement("div",{className:"handle",ref:"handle",onTouchStart:this.handleMouseDown,onMouseDown:this.handleMouseDown,onClick:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},style:e}))},getClientPosition:function(e){var t=e.touches;if(t&&t.length){var n=t[0];return{x:n.clientX,y:n.clientY}}return{x:e.clientX,y:e.clientY}},getPosition:function(){var e=(this.props.y-this.props.ymin)/(this.props.ymax-this.props.ymin)*100,t=(this.props.x-this.props.xmin)/(this.props.xmax-this.props.xmin)*100;return e>100&&(e=100),0>e&&(e=0),"x"===this.props.axis&&(e=0),e+="%",t>100&&(t=100),0>t&&(t=0),"y"===this.props.axis&&(t=0),t+="%",{top:e,left:t}},change:function(e,t){if(this.props.onChange){var n=a.findDOMNode(this).getBoundingClientRect(),r=n.width,i=n.height,s=e.left,o=e.top,l=this.props.axis;0>s&&(s=0),s>r&&(s=r),0>o&&(o=0),o>i&&(o=i);var d=0,u=0;("x"===l||"xy"===l)&&(d=s/r*(this.props.xmax-this.props.xmin)+this.props.xmin),("y"===l||"xy"===l)&&(u=o/i*(this.props.ymax-this.props.ymin)+this.props.ymin),this.props.onChange({x:d,y:u})}},handleMouseDown:function(e){e.preventDefault();var t=this.refs.handle,n=this.getClientPosition(e);this.start={x:t.offsetLeft,y:t.offsetTop},this.offset={x:n.x,y:n.y},document.addEventListener("mousemove",this.handleDrag),document.addEventListener("mouseup",this.handleDragEnd),document.addEventListener("touchmove",this.handleDrag),document.addEventListener("touchend",this.handleDragEnd),document.addEventListener("touchcancel",this.handleDragEnd)},getPos:function(e){var t=this.getClientPosition(e),n=(a.findDOMNode(this).getBoundingClientRect(),t.x+this.start.x-this.offset.x),r=t.y+this.start.y-this.offset.y;return{left:n,top:r}},handleDrag:function(e){e.preventDefault(),this.change(this.getPos(e))},handleDragEnd:function(e){e.preventDefault(),document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragEnd),document.removeEventListener("touchmove",this.handleDrag),document.removeEventListener("touchend",this.handleDragEnd),document.removeEventListener("touchcancel",this.handleDragEnd),this.props.onDragEnd&&this.props.onDragEnd()},handleClick:function(e){var t=this.getClientPosition(e),n=a.findDOMNode(this).getBoundingClientRect();this.change({left:t.x-n.left,top:t.y-n.top},!0)}})},function(e,t,n){var r;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e+=" "+n;else if(Array.isArray(n))e+=" "+i.apply(null,n);else if("object"===r)for(var a in n)s.call(n,a)&&n[a]&&(e+=" "+a)}}return e.substr(1)}var s={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=i:(r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r)))}()},function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".u-slider{position:relative;display:inline-block;background-color:#ddd;border-radius:3px}.u-slider .value{position:absolute;background-color:#2e8ece;border-radius:3px}.u-slider .handle{position:absolute;width:8px;height:8px}.u-slider .handle:after{position:relative;display:block;content:''}.u-slider-x .handle:after,.u-slider-y .handle:after{width:12px;height:12px;background-color:#fff;border:3px solid #2e8ece;border-radius:6px}.u-slider-x{height:8px}.u-slider-x .handle{height:100%}.u-slider-x .handle:after{top:-2px;left:-6px}.u-slider-x .value{top:0;height:100%}.u-slider-y{width:8px}.u-slider-y .handle{width:100%}.u-slider-y .handle:after{top:-6px;left:-2px}.u-slider-y .value{left:0;width:100%}.u-slider-xy{position:relative;width:100%;height:100%;background-color:#2e8ece;border-radius:0}.u-slider-xy .handle{position:absolute}.u-slider-xy .handle:after{position:relative;display:block;top:-4px;left:-4px;width:8px;height:8px;background-color:transparent;border:2px solid #fff;border-radius:50%;content:''}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(r[s]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=c[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(d(r.parts[s],t))}else{for(var a=[],s=0;s<r.parts.length;s++)a.push(d(r.parts[s],t));c[r.id]={id:r.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],s=i[0],a=i[1],o=i[2],l=i[3],d={css:a,media:o,sourceMap:l};n[s]?n[s].parts.push(d):t.push(n[s]={id:s,parts:[d]})}return t}function s(e,t){var n=x(),r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function o(e){var t=document.createElement("style");return t.type="text/css",s(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",s(e,t),t}function d(e,t){var n,r,i;if(t.singleton){var s=g++;n=v||(v=o(t)),r=u.bind(null,n,s,!1),i=u.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=h.bind(null,n),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=o(t),r=p.bind(null,n),i=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function u(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var s=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function p(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function h(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var c={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),x=f(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var s=[],a=0;a<n.length;a++){var o=n[a],l=c[o.id];l.refs--,s.push(l)}if(e){var d=i(e);r(d,t)}for(var a=0;a<s.length;a++){var l=s[a];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete c[l.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.id,r,""]]);n(7)(r,{});r.locals&&(e.exports=r.locals)}]);
//# sourceMappingURL=bundle.js.map