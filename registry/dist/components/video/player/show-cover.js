!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/show-cover"]=t():e["video/player/show-cover"]=t()}(self,(function(){return function(){var e,t,o={934:function(e,t,o){var n=o(645)((function(e){return e[1]}));n.push([e.id,'.bilibili-player-video::after {\n  position: absolute;\n  content: "";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  background: black var(--cover-url) center no-repeat;\n  background-size: contain;\n  pointer-events: none;\n  z-index: 10;\n}\n\n.bilibili-player-area.video-control-show.video-state-pause .bilibili-player-video::after {\n  display: block;\n}',""]),e.exports=n},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,o,n){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);n&&r[u[0]]||(o&&(u[2]?u[2]="".concat(o," and ").concat(u[2]):u[2]=o),t.push(u))}},t}},574:function(e,t,o){var n=o(934);n&&n.__esModule&&(n=n.default),e.exports="string"==typeof n?n:n.toString()},705:function(e){"use strict";e.exports=coreApis.componentApis.video.videoInfo}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={id:e,exports:{}};return o[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var i=Object.create(null);r.r(i);var c={};e=e||[null,t({}),t([]),t(t)];for(var a=2&n&&o;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){c[e]=function(){return o[e]}}));return c.default=function(){return o},r.d(i,c),i},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return n}});var e=coreApis.observer,t=coreApis.spinQuery,o=coreApis.utils;const n={name:"showCoverBeforePlay",displayName:"播放前显示封面",urlInclude:coreApis.utils.urls.playerUrls,entry:async()=>{let n;// eslint-disable-next-line prefer-arrow-callback
(0,o.createHook)((0,o.isBwpVideo)()?BwpElement.prototype:HTMLVideoElement.prototype,"play",(function(){return document.body.style.removeProperty("--cover-url"),!0}));(0,e.videoChange)((async()=>{const e=await(0,t.select)((()=>unsafeWindow.aid));if(!e)return void console.warn("[播放前显示封面] 未找到av号");if(e===n)return;n=e;const{VideoInfo:o}=await Promise.resolve().then(r.t.bind(r,705,23)),i=new o(e);await i.fetchInfo(),document.body.style.setProperty("--cover-url",`url('${i.coverUrl}')`)}))},instantStyles:[{name:"showCoverBeforePlay",style:()=>Promise.resolve().then(r.t.bind(r,574,23))}],description:{"zh-CN":"在视频开始播放前, 在播放器中显示封面."},tags:[componentsTags.video],commitHash:"13300f13b5e5d42002558adfd49f6d095603d37c",coreVersion:"2.1.3"}}(),i=i.component}()}));