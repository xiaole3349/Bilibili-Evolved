!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["video/outer-watchlater"]=e():t["video/outer-watchlater"]=e()}(globalThis,(()=>(()=>{var t,e,o={464:(t,e,o)=>{"use strict";o.d(e,{Y:()=>r,d:()=>a});var n=o(952);let a=function(t){return t.Auto="自动",t.Icon="图标",t.IconAndText="图标 + 文字",t}({});const r=(0,n.defineOptionsMetadata)({showInWatchlaterPages:{defaultValue:!1,displayName:"在稍后再看页面中仍然显示"},displayMode:{defaultValue:a.Auto,displayName:"显示方式",dropdownEnum:a}})},424:(t,e,o)=>{var n=o(218)((function(t){return t[1]}));n.push([t.id,".video-toolbar-left .watchlater,\n.video-toolbar .ops .watchlater,\n.video-toolbar-v1 .toolbar-left .watchlater {\n  font-size: 14px;\n  margin-right: 28px !important;\n  position: relative;\n  width: auto !important;\n}\n.video-toolbar-left .watchlater.icon-only,\n.video-toolbar .ops .watchlater.icon-only,\n.video-toolbar-v1 .toolbar-left .watchlater.icon-only {\n  margin-right: max(min(11vw, 11vh) - 117.2px, 6px) !important;\n}\n.video-toolbar-left .watchlater.icon-only .text,\n.video-toolbar .ops .watchlater.icon-only .text,\n.video-toolbar-v1 .toolbar-left .watchlater.icon-only .text {\n  display: none;\n}\n@media screen and (max-width: 1340px), (max-height: 750px) {\n.video-toolbar-left .watchlater:not(.icon-and-text),\n.video-toolbar .ops .watchlater:not(.icon-and-text),\n.video-toolbar-v1 .toolbar-left .watchlater:not(.icon-and-text) {\n    margin-right: max(min(11vw, 11vh) - 117.2px, 6px) !important;\n}\n.video-toolbar-left .watchlater:not(.icon-and-text) .text,\n.video-toolbar .ops .watchlater:not(.icon-and-text) .text,\n.video-toolbar-v1 .toolbar-left .watchlater:not(.icon-and-text) .text {\n    display: none;\n}\n}\n.video-toolbar-left .watchlater .tip,\n.video-toolbar .ops .watchlater .tip,\n.video-toolbar-v1 .toolbar-left .watchlater .tip {\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.8666666667);\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: #eee;\n  transition: all 0.2s ease-out;\n  opacity: 0;\n  pointer-events: none;\n}\n.video-toolbar-left .watchlater .tip.show,\n.video-toolbar .ops .watchlater .tip.show,\n.video-toolbar-v1 .toolbar-left .watchlater .tip.show {\n  opacity: 1;\n  pointer-events: initial;\n}\n.video-toolbar-left .watchlater .be-icon,\n.video-toolbar .ops .watchlater .be-icon,\n.video-toolbar-v1 .toolbar-left .watchlater .be-icon {\n  display: inline-flex;\n}\n@media (min-width: 1681px) {\n.video-toolbar-left .watchlater .be-icon,\n.video-toolbar .ops .watchlater .be-icon,\n.video-toolbar-v1 .toolbar-left .watchlater .be-icon {\n    --size: 36px !important;\n}\n}\n.video-toolbar-left .watchlater .be-icon {\n  transform: translateY(1px);\n  margin-right: 8px;\n}\n.video-toolbar-v1 .watchlater .be-icon {\n  transform: translateY(1px);\n}\n.more-ops-list > ul > li:nth-child(2),\n.van-popover .more_dropdown > li:nth-child(2) {\n  display: none !important;\n}\n.video-tool-more-dropdown .video-watchlater.dropdown-item {\n  display: none !important;\n}",""]),t.exports=n},218:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=t(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,o,n){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var a={};if(n)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var i=this[r][0];null!=i&&(a[i]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);n&&a[l[0]]||(o&&(l[2]?l[2]="".concat(o," and ").concat(l[2]):l[2]=o),e.push(l))}},e}},332:(t,e,o)=>{"use strict";var n,a=function(){return void 0===n&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var t={};return function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}t[e]=o}return t[e]}}(),i=[];function s(t){for(var e=-1,o=0;o<i.length;o++)if(i[o].identifier===t){e=o;break}return e}function l(t,e){for(var o={},n=[],a=0;a<t.length;a++){var r=t[a],l=e.base?r[0]+e.base:r[0],c=o[l]||0,d="".concat(l," ").concat(c);o[l]=c+1;var p=s(d),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:d,updater:m(u,e),references:1}),n.push(d)}return n}function c(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var a=o.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var i=r(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,p=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function u(t,e,o,n){var a=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=p(e,a);else{var r=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(r,i[e]):t.appendChild(r)}}function h(t,e,o){var n=o.css,a=o.media,r=o.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var f=null,v=0;function m(t,e){var o,n,a;if(e.singleton){var r=v++;o=f||(f=c(e)),n=u.bind(null,o,r,!1),a=u.bind(null,o,r,!0)}else o=c(e),n=h.bind(null,o,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(o)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var o=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<o.length;n++){var a=s(o[n]);i[a].references--}for(var r=l(t,e),c=0;c<o.length;c++){var d=s(o[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}o=r}}}},634:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>v});var n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"watchlater be-outer-watchlater video-toolbar-left-item",class:{on:t.on,...t.displayModeClass},attrs:{title:"稍后再看"},on:{click:function(e){return t.toggle()}}},[e("VIcon",{staticClass:"icon",attrs:{size:28,icon:"mdi-timetable"}}),t._v(" "),e("span",{staticClass:"text"},[t._v("稍后再看")]),t._v(" "),e("div",{staticClass:"tip",class:{show:t.tipShowing}},[t._v(t._s(t.tipText))])],1)};n._withStripped=!0;const a=coreApis.ui,r=coreApis.componentApis.video.watchlater;var i=o(464);const s=coreApis.settings,l=Vue.extend({components:{VIcon:a.VIcon},data(){const{displayMode:t}=(0,s.getComponentSettings)("outerWatchlater").options;return{watchlaterList:r.watchlaterList,displayMode:t,aid:unsafeWindow.aid,tipText:"",tipShowing:!1,tipHandle:0}},computed:{on(){return console.log(this.watchlaterList,this.aid,this.watchlaterList.includes(parseInt(this.aid))),this.watchlaterList.includes(parseInt(this.aid))},displayModeClass(){return{"icon-only":this.displayMode===i.d.Icon,"icon-and-text":this.displayMode===i.d.IconAndText}}},created(){(0,s.addComponentListener)("outerWatchlater.displayMode",(t=>{this.displayMode=t}))},methods:{showTip(t){this.tipText=t,this.tipShowing=!0,this.tipHandle&&clearTimeout(this.tipHandle),this.tipHandle=setTimeout((()=>{this.tipShowing=!1}),2e3)},async toggle(){await(0,r.toggleWatchlater)(this.aid),this.showTip(this.on?"已添加至稍后再看":"已从稍后再看移除")}}});var c=o(332),d=o.n(c),p=o(424),u=o.n(p),h={insert:"head",singleton:!1};d()(u(),h);u().locals;var f=function(t,e,o,n,a,r,i,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=o,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):a&&(l=s?function(){a.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}(l,n,[],!1,null,null,null);const v=f.exports},952:t=>{"use strict";t.exports=coreApis.componentApis.define},391:t=>{"use strict";t.exports=coreApis.observer}},n={};function a(t){var e=n[t];if(void 0!==e)return e.exports;var r=n[t]={id:t,exports:{}};return o[t](r,r.exports,a),r.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,a.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var r=Object.create(null);a.r(r);var i={};t=t||[null,e({}),e([]),e(e)];for(var s=2&n&&o;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((t=>i[t]=()=>o[t]));return i.default=()=>o,a.d(r,i),r},a.d=(t,e)=>{for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{"use strict";a.d(r,{component:()=>s});var t=a(952);const e=coreApis.utils,o=coreApis.utils.urls,n=coreApis.componentApis.video.videoActions;var i=a(464);const s=(0,t.defineComponentMetadata)({name:"outerWatchlater",displayName:"外置稍后再看",entry:async t=>{let{settings:r}=t;if(o.watchlaterUrls.some(e.matchUrlPattern)&&!r.options.showInWatchlaterPages)return;if(!(0,e.getUID)())return;const i=await Promise.resolve().then(a.bind(a,634)),s=(0,e.mountVueComponent)(i);if(await(0,n.addVideoActionButton)((()=>s.$el))){const{videoChange:t}=await Promise.resolve().then(a.t.bind(a,391,23));t((t=>{let{aid:e}=t;console.log("videoChange",unsafeWindow.aid,e),s.aid=unsafeWindow.aid}))}},tags:[componentsTags.video],description:{"zh-CN":"将视频页面菜单里的 `稍后再看` 移到外面. 请注意如果在稍后再看页面中仍然显示, 是不会实时同步右侧的播放列表的."},urlInclude:o.videoUrls,options:i.Y,reload:()=>{dqa(".be-outer-watchlater").forEach((t=>{t.style.display=""}))},unload:()=>{dqa(".be-outer-watchlater").forEach((t=>{t.style.display="none"}))},plugin:{displayName:"稍后再看 - 快捷键支持",setup:t=>{let{addData:e}=t;e("keymap.actions",(t=>{t.watchlater={displayName:"稍后再看",run:t=>{const{clickElement:e}=t;return e(".be-outer-watchlater",t)}}})),e("keymap.presets",(t=>{t.watchlater="shift w"}))}},commitHash:"77ada2305f3a4fba1c63dbe19cf08914cc787f38",coreVersion:"2.9.3"})})(),r=r.component})()));