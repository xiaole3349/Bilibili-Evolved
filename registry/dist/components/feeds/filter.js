!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["feeds/filter"]=t():e["feeds/filter"]=t()}(globalThis,(()=>(()=>{var e,t,n={84:(e,t,n)=>{"use strict";n.d(t,{w:()=>s});const i=(e,t)=>!(!e||!t)&&(e.startsWith("/")&&e.endsWith("/")?new RegExp(e.slice(1,e.length-1)).test(t):t.includes(e)),s=(e,t)=>{const n=e.match(/(.+) up:([^ ]+)/);return n?i(n[1],t.text)&&i(n[2],t.username):i(e,t.text)}},0:(e,t,n)=>{var i=n(218)((function(e){return e[1]}));i.push([e.id,'body.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-repost .bili-dyn-list__item[data-type="1"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-repost .feed-card .card[data-type="1"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-textWithImages .bili-dyn-list__item[data-type="2"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-textWithImages .feed-card .card[data-type="2"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-text .bili-dyn-list__item[data-type="4"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-text .feed-card .card[data-type="4"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-video .bili-dyn-list__item[data-type="8"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-video .feed-card .card[data-type="8"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-miniVideo .bili-dyn-list__item[data-type="16"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-miniVideo .feed-card .card[data-type="16"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-column .bili-dyn-list__item[data-type="64"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-column .feed-card .card[data-type="64"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-audio .bili-dyn-list__item[data-type="256"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-audio .feed-card .card[data-type="256"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-bangumi .bili-dyn-list__item[data-type="512"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-bangumi .feed-card .card[data-type="512"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-liveRecord .bili-dyn-list__item[data-type="2047"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-liveRecord .feed-card .card[data-type="2047"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-share .bili-dyn-list__item[data-type="2048"],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-share .feed-card .card[data-type="2048"] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-self-repost .bili-dyn-list__item[data-self-repost],\nbody.enable-feeds-filter:not(.disable-feeds-filter):not(.by-type).feeds-filter-block-self-repost .feed-card .card[data-self-repost] {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .left-panel .scroll-content > *,\nbody.enable-feeds-filter:not(.disable-feeds-filter) .right-panel .scroll-content > * {\n  margin: 0 !important;\n  margin-bottom: 8px !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .left-panel > :not(:last-child) {\n  margin: 0 !important;\n  margin-bottom: 8px !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .left-panel .user-panel.f-left {\n  float: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .bili-dyn-home--member main section,\nbody.enable-feeds-filter:not(.disable-feeds-filter) .bili-dyn-home--member aside section {\n  margin-bottom: 0 !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .bili-dyn-home--member main section > *,\nbody.enable-feeds-filter:not(.disable-feeds-filter) .bili-dyn-home--member aside section > * {\n  margin-bottom: 8px !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-profile .left-panel .user-wrapper,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-profile .bili-dyn-my-info {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-following-tags .left-panel .tag-panel,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-following-tags .right-panel .dyn-topic-panel,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-following-tags .right-panel .new-topic-panel,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-following-tags section .topic-panel {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-notice .right-panel .notice-panel,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-notice .bili-dyn-banner {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-live .left-panel .live-panel,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-live .bili-dyn-live-users {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-trending-tags .right-panel .tag-panel,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-trending-tags .topic-panel {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-most-viewed .bili-dyn-up-list,\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-most-viewed .card-list .most-viewed-panel {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter).feeds-filter-side-block-compose .bili-dyn-publishing {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .bili-dyn-list__item.pattern-block,\nbody.enable-feeds-filter:not(.disable-feeds-filter) .feed-card .card.pattern-block {\n  display: none !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .bili-dyn-list__item.plugin-block,\nbody.enable-feeds-filter:not(.disable-feeds-filter) .feed-card .card.plugin-block {\n  display: none !important;\n}\nbody.disable-feeds-filter .feeds-filter-section {\n  display: none;\n}\n.feeds-filter {\n  background-color: white;\n  font-size: 12px;\n  width: 100%;\n  border-radius: 4px;\n  box-sizing: border-box;\n  display: none;\n  flex-direction: column;\n  max-height: 80vh;\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n}\n.feeds-filter::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\nbody.enable-feeds-filter:not(.disable-feeds-filter) .feeds-filter {\n  display: flex;\n}\n.feeds-filter, .feeds-filter * {\n  transition: 0.2s ease-out;\n  transition-property: border-color, color, background-color;\n}\n.feeds-filter > * {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.feeds-filter > *:first-child {\n  padding-top: 12px;\n}\n.feeds-filter > *:last-child {\n  padding-bottom: 12px;\n}\nbody.dark .feeds-filter {\n  color: #eee;\n  background-color: #444;\n}\n.feeds-filter .feeds-filter-header {\n  cursor: pointer;\n  padding-bottom: 14px;\n  position: sticky;\n  top: 0;\n  background-color: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.feeds-filter .feeds-filter-header h1 {\n  font-weight: normal;\n  font-size: 14px;\n  margin: 0;\n}\n.feeds-filter.collapse .feeds-filter-header {\n  padding-bottom: 12px;\n}\n.feeds-filter.collapse .feeds-filter-header .be-icon {\n  transform: rotate(180deg);\n}\n.feeds-filter.collapse > :not(.feeds-filter-header) {\n  display: none;\n}\n.feeds-filter h2 {\n  font-weight: 600;\n  font-size: 13px;\n  margin: 0;\n  margin-bottom: 8px;\n}\n.feeds-filter .filter-type-switch {\n  flex: 0 0 49%;\n}\n.feeds-filter .filter-side-card-switch {\n  flex: 0 0 100%;\n}\n.feeds-filter .filter-types {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\nbody.by-type .feeds-filter h2:nth-of-type(1),\nbody.by-type .feeds-filter .filter-types {\n  display: none;\n}\n.feeds-filter .filter-patterns:not(:empty) {\n  margin-bottom: 4px;\n}\n.feeds-filter .filter-patterns .pattern {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 6px;\n  border-radius: 4px;\n  font-size: 12px;\n  border: 1px solid rgba(136, 136, 136, 0.2666666667);\n}\n.feeds-filter .filter-patterns .pattern:not(:last-child) {\n  margin-bottom: 4px;\n}\n.feeds-filter .filter-patterns .pattern .be-icon {\n  cursor: pointer;\n}\n.feeds-filter .add-pattern {\n  display: flex;\n  align-items: center;\n  margin-bottom: 18px;\n}\n.feeds-filter .add-pattern input {\n  font-size: 12px;\n}\n.feeds-filter .add-pattern .be-button {\n  margin-left: 6px;\n  padding: 4px 6px;\n}',""]),e.exports=i},388:(e,t,n)=>{var i=n(218)((function(e){return e[1]}));i.push([e.id,".feeds-filter-switch:not(:last-child) {\n  margin-bottom: 4px;\n}\n.feeds-filter-switch label {\n  cursor: pointer;\n  margin: 0;\n  padding: 4px 6px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid rgba(136, 136, 136, 0.2666666667);\n}\n.feeds-filter-switch label .name {\n  font-size: 12px;\n}\n.feeds-filter-switch label .disabled {\n  color: var(--theme-color) !important;\n}\n.feeds-filter-switch label:hover {\n  background-color: rgba(136, 136, 136, 0.1333333333);\n}\n.feeds-filter-switch label input {\n  display: none;\n}\n.feeds-filter-switch label .be-icon.disabled {\n  display: none;\n}\n.feeds-filter-switch label.disabled .be-icon {\n  display: none;\n}\n.feeds-filter-switch label.disabled .be-icon.disabled {\n  display: block;\n}",""]),e.exports=i},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var s={};if(i)for(var l=0;l<this.length;l++){
// eslint-disable-next-line prefer-destructuring
var r=this[l][0];null!=r&&(s[r]=!0)}for(var d=0;d<e.length;d++){var a=[].concat(e[d]);i&&s[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},332:(e,t,n)=>{"use strict";var i,s=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},l=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function d(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},i=[],s=0;s<e.length;s++){var l=e[s],a=t.base?l[0]+t.base:l[0],o=n[a]||0,f="".concat(a," ").concat(o);n[a]=o+1;var c=d(f),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==c?(r[c].references++,r[c].updater(p)):r.push({identifier:f,updater:m(p,t),references:1}),i.push(f)}return i}function o(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var s=n.nc;s&&(i.nonce=s)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var r=l(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var f,c=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function p(e,t,n,i){var s=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=c(t,s);else{var l=document.createTextNode(s),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(l,r[t]):e.appendChild(l)}}function b(e,t,n){var i=n.css,s=n.media,l=n.sourceMap;if(s?e.setAttribute("media",s):e.removeAttribute("media"),l&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var y=null,u=0;function m(e,t){var n,i,s;if(t.singleton){var l=u++;n=y||(y=o(t)),i=p.bind(null,n,l,!1),s=p.bind(null,n,l,!0)}else n=o(t),i=b.bind(null,n,t),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else s()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=s());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var s=d(n[i]);r[s].references--}for(var l=a(e,t),o=0;o<n.length;o++){var f=d(n[o]);0===r[f].references&&(r[f].updater(),r.splice(f,1))}n=l}}}},727:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>_});var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"feeds-filter",class:{collapse:e.collapse}},[t("div",{staticClass:"feeds-filter-header",on:{click:function(t){e.collapse=!e.collapse}}},[t("h1",[e._v("动态过滤")]),e._v(" "),t("VIcon",{attrs:{icon:"mdi-chevron-up"}})],1),e._v(" "),t("h2",[e._v("类型")]),e._v(" "),t("div",{staticClass:"filter-types"},e._l(e.allTypes,(function([e,n]){return t("FilterTypeSwitch",{key:n.id,attrs:{name:e,type:n}})})),1),e._v(" "),t("h2",[e._v("关键词")]),e._v(" "),t("div",{staticClass:"filter-patterns"},e._l(e.patterns,(function(n){return t("div",{key:n,staticClass:"pattern"},[e._v("\n      "+e._s(n)+"\n      "),t("VIcon",{attrs:{title:"删除",icon:"mdi-trash-can-outline",size:16},nativeOn:{click:function(t){return e.deletePattern(n)}}})],1)})),0),e._v(" "),t("div",{staticClass:"add-pattern"},[t("TextBox",{attrs:{placeholder:"支持正则表达式 /^xxx$/",type:"text"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addPattern(e.newPattern)}},model:{value:e.newPattern,callback:function(t){e.newPattern=t},expression:"newPattern"}}),e._v(" "),t("VButton",{attrs:{type:"transparent"},nativeOn:{click:function(t){return e.addPattern(e.newPattern)}}},[t("VIcon",{attrs:{title:"添加",icon:"mdi-plus",size:18}})],1)],1),e._v(" "),t("h2",[e._v("板块")]),e._v(" "),t("div",{staticClass:"filter-side-card"},e._l(Object.entries(e.allSideCards),(function([n,i]){return t("div",{key:n,staticClass:"filter-side-card-switch feeds-filter-switch",on:{click:function(t){return e.toggleBlockSide(n)}}},[t("label",{class:{disabled:e.sideDisabled(n)}},[t("span",{staticClass:"name",class:{disabled:e.sideDisabled(n)}},[e._v(e._s(i.displayName))]),e._v(" "),t("VIcon",{staticClass:"disabled",attrs:{size:16,icon:"mdi-cancel"}}),e._v(" "),t("VIcon",{attrs:{size:16,icon:"mdi-check"}})],1)])})),0)])};i._withStripped=!0;var s=n(799),l=n(986),r=n(200);const d=coreApis.observer;var a=n(648),o=n(84);const{options:f}=(0,l.getComponentSettings)("feedsFilter"),c={0:{className:"profile",displayName:"个人资料"},1:{className:"following-tags",displayName:"话题"},2:{className:"notice",displayName:"公告栏"},3:{className:"live",displayName:"正在直播"},5:{className:"most-viewed",displayName:"关注栏"},6:{className:"compose",displayName:"发布动态"}};let p;(0,l.getComponentSettings)("extendFeedsLive").enabled&&delete c[3];const b="feeds-filter-side-block-",y=Vue.extend({components:{FilterTypeSwitch:()=>Promise.resolve().then(n.bind(n,50)),VIcon:a.VIcon,TextBox:a.TextBox,VButton:a.VButton},data:()=>({allTypes:[],patterns:[...f.patterns],newPattern:"",allSideCards:c,blockSideCards:[...f.sideCards],collapse:!0}),watch:{patterns(){f.patterns=this.patterns,p&&p.cards.forEach((e=>this.updateCard(lodash.clone(e))))}},async mounted(){this.updateBlockSide();const e=await(0,r.select)(".feed-card .tab-bar, .bili-dyn-list-tabs__list");if(!e)return void console.error("tabBar not found");document.body.classList.add("enable-feeds-filter");if(this.allTypes=Object.entries(s.feedsCardTypes).concat(Object.entries({"self-repost":{id:-1,name:"自转发"}})).filter((e=>{let[,t]=e;return t.id<=2048})).map((e=>{let[t,n]=e;return[t,lodash.clone(n)]})),p=await(0,s.forEachFeedsCard)({added:e=>{this.updateCard(lodash.clone(e))}}),"v1"===p.managerType){const t=e.querySelector(".tab:nth-child(1) .tab-text");(0,d.attributes)(t,(()=>{document.body.classList.toggle("by-type",!t.classList.contains("selected"))}))}if("v2"===p.managerType){const e=await(0,r.select)(".bili-dyn-home--member main"),t=()=>Boolean(dq(".bili-dyn-list-tabs__item:first-child.active")),n=()=>Boolean(dq(".bili-dyn-up-list__item:first-child.active"));(0,d.attributesSubtree)(e,(()=>{document.body.classList.toggle("by-type",n()&&!t())}))}},methods:{updateCard(e){const t={...e};e.type===s.feedsCardTypes.repost&&(t.text+=`\n${e.repostText}`);f.patterns.some((e=>(0,o.w)(e,t)))?e.element.classList.add("pattern-block"):e.element.classList.remove("pattern-block")},deletePattern(e){const t=f.patterns.indexOf(e);-1!==t&&this.patterns.splice(t,1)},addPattern(e){e&&!this.patterns.includes(e)&&this.patterns.push(e),this.newPattern=""},updateBlockSide(){Object.entries(c).forEach((e=>{let[t,n]=e;const i=b+n.className;document.body.classList[this.blockSideCards.includes(t)?"add":"remove"](i)}))},toggleBlockSide(e){const t=this.blockSideCards.indexOf(e),n=c[e];-1!==t?(this.blockSideCards.splice(t,1),document.body.classList.remove(b+n.className)):(this.blockSideCards.push(e),document.body.classList.add(b+n.className)),f.sideCards=this.blockSideCards},sideDisabled(e){return this.blockSideCards.includes(e)}}}),u=y;var m=n(332),h=n.n(m),v=n(0),g=n.n(v),x={insert:"head",singleton:!1};h()(g(),x);g().locals;const _=(0,n(893).Z)(u,i,[],!1,null,null,null).exports},50:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"filter-type-switch feeds-filter-switch"},[t("label",{class:{disabled:e.disabled}},[t("span",{staticClass:"name",class:{disabled:e.disabled}},[e._v(e._s(e.type.name))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.disabled,expression:"disabled"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.disabled)?e._i(e.disabled,null)>-1:e.disabled},on:{change:function(t){var n=e.disabled,i=t.target,s=!!i.checked;if(Array.isArray(n)){var l=e._i(n,null);i.checked?l<0&&(e.disabled=n.concat([null])):l>-1&&(e.disabled=n.slice(0,l).concat(n.slice(l+1)))}else e.disabled=s}}}),e._v(" "),e.disabled?t("VIcon",{staticClass:"disabled",attrs:{size:16,icon:"mdi-cancel"}}):t("VIcon",{attrs:{size:16,icon:"mdi-check"}})],1)])};i._withStripped=!0;var s=n(986),l=n(648);const{options:r}=(0,s.getComponentSettings)("feedsFilter"),d=Vue.extend({components:{VIcon:l.VIcon},props:{name:{type:String,required:!0},type:{type:Object,required:!0}},data(){const e=this.type.id>=0?"types":"specialTypes";return{disabled:r[e].includes(this.type.id),optionKey:e}},watch:{disabled(e){this.setFilter(e)}},created(){this.setFilter(this.disabled,!1)},methods:{setFilter(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(document.body.classList[e?"add":"remove"](`feeds-filter-block-${this.name}`),!t)return;const n=this.optionKey;if(e)r[n].push(this.type.id);else{const e=r[n].indexOf(this.type.id);-1!==e&&r[n].splice(e,1)}}}});var a=n(332),o=n.n(a),f=n(388),c=n.n(f),p={insert:"head",singleton:!1};o()(c(),p);c().locals;const b=(0,n(893).Z)(d,i,[],!1,null,null,null).exports},893:(e,t,n)=>{"use strict";function i(e,t,n,i,s,l,r,d){var a,o="function"==typeof e?e.options:e;if(t&&(o.render=t,o.staticRenderFns=n,o._compiled=!0),i&&(o.functional=!0),l&&(o._scopeId="data-v-"+l),r?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},o._ssrRegister=a):s&&(a=d?function(){s.call(this,(o.functional?this.parent:this).$root.$options.shadowRoot)}:s),a)if(o.functional){o._injectStyles=a;var f=o.render;o.render=function(e,t){return a.call(t),f(e,t)}}else{var c=o.beforeCreate;o.beforeCreate=c?[].concat(c,a):[a]}return{exports:e,options:o}}n.d(t,{Z:()=>i})},156:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=156,e.exports=t},814:e=>{"use strict";e.exports="按照类型或者关键词过滤动态首页的内容, 也可以移除动态页的一些侧边卡片. 详细设置请前往[动态首页](https://t.bilibili.com/)查看.\n\n> 侧边卡片的 `正在直播` 指原版的板块, 如果你使用了 `直播信息扩充`, 则需要关闭该功能才能生效.\n"},799:e=>{"use strict";e.exports=coreApis.componentApis.feeds.api},986:e=>{"use strict";e.exports=coreApis.settings},200:e=>{"use strict";e.exports=coreApis.spinQuery},648:e=>{"use strict";e.exports=coreApis.ui},605:e=>{"use strict";e.exports=coreApis.utils}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var l=i[e]={id:e,exports:{}};return n[e](l,l.exports,s),l.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"==typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"==typeof n.then)return n}var l=Object.create(null);s.r(l);var r={};e=e||[null,t({}),t([]),t(t)];for(var d=2&i&&n;"object"==typeof d&&!~e.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((e=>r[e]=()=>n[e]));return r.default=()=>n,s.d(l,r),l},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{"use strict";s.d(l,{component:()=>o});const e=coreApis.componentApis.define;var t=s(799),n=s(986),i=s(84);const r=[{username:"title",text:"epTitle"},{username:"upName",text:["title","dynamic"]},{username:["username","repostUsername"],text:["text","repostText"]}],d={name:"feeds.contentFilters.patterns",displayName:"动态关键词过滤",setup:e=>{let{addData:t}=e;t("feeds.contentFilters",(e=>{e.push({filter:e=>{const{patterns:t}=(0,n.getComponentSettings)("feedsFilter").options;return e.filter((e=>{const n=r.find((t=>Object.values(t).every((t=>Array.isArray(t)?t.some((t=>t in e)):t in e)))),s=Object.fromEntries(Object.entries(n).map((t=>{let[n,i]=t;return Array.isArray(i)?[n,i.map((t=>e[t]??"")).join("\n").trim()]:[n,e[i].trim()]})));return t.every((e=>!(0,i.w)(e,s)))}))}})}))}},a=(0,e.defineOptionsMetadata)({types:{defaultValue:[],displayName:"过滤动态类型",hidden:!0},patterns:{defaultValue:[],displayName:"过滤关键词",hidden:!0},sideCards:{defaultValue:[],displayName:"过滤侧边栏",hidden:!0},specialTypes:{defaultValue:[],displayName:"过滤特殊动态类型",hidden:!0}}),o=(0,e.defineComponentMetadata)({name:"feedsFilter",displayName:"动态过滤器",entry:async()=>{const{select:e}=await Promise.resolve().then(s.t.bind(s,200,23));let n;if("v2"===t.feedsCardsManager.managerType){const t=await e(".bili-dyn-home--member aside.left"),i=document.createElement("section");i.classList.add("feeds-filter-section"),t.insertAdjacentElement("afterbegin",i),n=i}else n=await e(".home-container .left-panel");if(null===n)return;const i=await Promise.resolve().then(s.bind(s,727)),{mountVueComponent:l}=await Promise.resolve().then(s.t.bind(s,605,23));n.insertAdjacentElement("afterbegin",l(i).$el)},tags:[componentsTags.feeds],options:a,reload:()=>document.body.classList.remove("disable-feeds-filter"),unload:()=>document.body.classList.add("disable-feeds-filter"),urlInclude:[/^https:\/\/t\.bilibili\.com\/$/],plugin:d,commitHash:"77ada2305f3a4fba1c63dbe19cf08914cc787f38",coreVersion:"2.9.3",description:(()=>{const e=s(156);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(s.t.bind(s,814,17)).then((e=>e.default))}})()})})(),l=l.component})()));