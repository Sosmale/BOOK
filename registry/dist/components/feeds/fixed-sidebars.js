!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["feeds/fixed-sidebars"]=e():n["feeds/fixed-sidebars"]=e()}(self,(function(){return function(){var n,e,t={178:function(n,e,t){var i=t(645)((function(n){return n[1]}));i.push([n.id,"#app {\n  z-index: 0;\n}\n\n.z-top-container,\n.international-header {\n  position: sticky !important;\n  top: 0 !important;\n  z-index: 1;\n}\n\n.van-popper-avatar,\n.van-popper-vip,\n.van-popper-favorite,\n.van-popper-history,\n.van-popper-upload,\n.popover-channe,\n.popover-game,\n.popover-live,\n.custom-navbar {\n  position: fixed !important;\n}\n\n.sticky-bar {\n  display: none !important;\n}\n\n.left-panel,\n.right-panel {\n  position: fixed !important;\n}\n\n.home-container {\n  --left-width: 244px;\n  --center-width: 632px;\n}\n@media screen and (min-width: 1921px) {\n  .home-container {\n    --left-width: 12.71vw;\n    --center-width: 32.92vw;\n  }\n}\n@media screen and (min-width: 2497px) {\n  .home-container {\n    --left-width: 317px;\n    --center-width: 822px;\n  }\n}\n\n.center-panel {\n  margin-left: calc(var(--left-width) + 8px) !important;\n}\n\n.right-panel {\n  margin-left: calc(var(--left-width) + 16px + var(--center-width)) !important;\n}\n\n.live-panel .live-up-list {\n  overflow: auto;\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n}\n.live-panel .live-up-list::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\n\n.live-up-list {\n  max-height: calc(100vh - 315px);\n}\nbody.enable-feeds-filter .live-up-list {\n  max-height: calc(100vh - 370px);\n}\nbody.feeds-filter-side-block-profile .live-up-list {\n  max-height: calc(100vh - 180px);\n}\n\n.bili-dyn-live-users {\n  display: flex !important;\n  flex-direction: column !important;\n}\n\n.bili-dyn-live-users__body {\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n  margin: 0px -16px -16px -16px;\n  padding: 0px 16px 4px 16px;\n  max-height: calc(100vh - 318px);\n}\n.bili-dyn-live-users__body::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\nbody.enable-feeds-filter .bili-dyn-live-users__body {\n  max-height: calc(100vh - 374px);\n}\nbody.feeds-filter-side-block-profile .bili-dyn-live-users__body {\n  max-height: calc(100vh - 178px);\n}\n\n.adaptive-scroll {\n  min-height: unset !important;\n}\n.adaptive-scroll .scroll-content {\n  position: static !important;\n}\n\n.bili-dyn-home--member {\n  --center-width: 632px;\n  --gap: 8px;\n  --fixed-offset: calc(var(--center-width) + (100vw - var(--center-width)) / 2 + var(--gap));\n}\n.bili-dyn-home--member section.sticky {\n  position: static !important;\n}\n.bili-dyn-home--member aside {\n  position: fixed !important;\n}\n.bili-dyn-home--member aside.left {\n  right: var(--fixed-offset);\n}\n.bili-dyn-home--member aside.right {\n  left: var(--fixed-offset);\n}\n@media screen and (min-width: 1921px) {\n  .bili-dyn-home--member {\n    --center-width: 32.92vw;\n  }\n}\n@media screen and (min-width: 2497px) {\n  .bili-dyn-home--member {\n    --center-width: 822px;\n  }\n}",""]),n.exports=i},645:function(n){"use strict";
// eslint-disable-next-line func-names
n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
e.i=function(n,t,i){"string"==typeof n&&(
// eslint-disable-next-line no-param-reassign
n=[[null,n,""]]);var o={};if(i)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var a=this[r][0];null!=a&&(o[a]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);i&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},871:function(n,e,t){var i=t(178);i&&i.__esModule&&(i=i.default),n.exports="string"==typeof i?i:i.toString()},30:function(n){"use strict";n.exports=coreApis.componentApis.feeds.disableProfilePopup}},i={};function o(n){var e=i[n];if(void 0!==e)return e.exports;var r=i[n]={id:n,exports:{}};return t[n](r,r.exports,o),r.exports}e=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__},o.t=function(t,i){if(1&i&&(t=this(t)),8&i)return t;if("object"==typeof t&&t){if(4&i&&t.__esModule)return t;if(16&i&&"function"==typeof t.then)return t}var r=Object.create(null);o.r(r);var a={};n=n||[null,e({}),e([]),e(e)];for(var p=2&i&&t;"object"==typeof p&&!~n.indexOf(p);p=e(p))Object.getOwnPropertyNames(p).forEach((function(n){a[n]=function(){return t[n]}}));return a.default=function(){return t},o.d(r,a),r},o.d=function(n,e){for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var r={};return function(){"use strict";o.d(r,{component:function(){return n}});const n={name:"fixedFeedsSidebars",instantStyles:[{name:"fixed-sidebars-style",style:()=>Promise.resolve().then(o.t.bind(o,871,23)),important:!0}],displayName:"强制固定动态侧栏",description:{"zh-CN":"强制固定动态主页的顶栏和所有侧栏."},tags:[componentsTags.feeds],entry:async()=>{const{disableProfilePopup:n}=await Promise.resolve().then(o.t.bind(o,30,23));n()},urlInclude:[/^https:\/\/t\.bilibili\.com\/$/],commitHash:"d4303aebf50db75948120033c2a070a5a9e15a60",coreVersion:"2.1.9"}}(),r=r.component}()}));