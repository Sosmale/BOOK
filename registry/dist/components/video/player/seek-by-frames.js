!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/seek-by-frames"]=t():e["video/player/seek-by-frames"]=t()}(self,(function(){return function(){"use strict";var e,t,r={988:function(e){e.exports="在播放器的时间右边增加两个按钮, 用于**较精细**调整视频时间. 装有 `快捷键扩展` 时支持键盘快捷键<kbd>Shift</kbd>+<kbd>←</kbd>/<kbd>→</kbd>.\r\n\r\n> 注: `视频的实际播放帧率`跟`视频本身的帧率`和`显示器的刷新率`有关, 很难计算一个精准的数值, 部分视频仍然会有暂停不到那种一闪而过的图的情况."},689:function(e){e.exports='<?xml version="1.0" encoding="utf-8"?>\r\n\x3c!-- Generator: Adobe Illustrator 24.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\r\n<svg version="1.1" id="图层_2_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"\r\n\t y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\r\n<g>\r\n\t<path d="M15.5,20.3c-0.4,0-0.7-0.1-1-0.4l-8.3-7.5c-0.3-0.3-0.5-0.7-0.5-1.1c0-0.4,0.2-0.8,0.5-1.1l8.3-7.5\r\n\t\tc0.6-0.6,1.6-0.5,2.1,0.1c0.6,0.6,0.5,1.6-0.1,2.1l-7.1,6.3l7.1,6.4c0.6,0.6,0.7,1.5,0.1,2.1C16.3,20.2,15.9,20.3,15.5,20.3z"/>\r\n</g>\r\n<circle cx="16.8" cy="11.3" r="2.4"/>\r\n</svg>\r\n'},164:function(e){e.exports='<?xml version="1.0" encoding="utf-8"?>\r\n\x3c!-- Generator: Adobe Illustrator 24.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\r\n<svg version="1.1" id="图层_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\r\n<g>\r\n\t<path d="M8.2,20.3c0.4,0,0.7-0.1,1-0.4l8.3-7.5c0.3-0.3,0.5-0.7,0.5-1.1c0-0.4-0.2-0.8-0.5-1.1L9.2,2.7C8.6,2.2,7.7,2.2,7.1,2.9\r\n\t\tC6.6,3.5,6.6,4.4,7.3,5l7.1,6.3l-7.1,6.4c-0.6,0.6-0.7,1.5-0.1,2.1C7.4,20.2,7.8,20.3,8.2,20.3z"/>\r\n</g>\r\n<circle cx="7" cy="11.3" r="2.4"/>\r\n</svg>\r\n'},730:function(e){e.exports=coreApis.componentApis.video.playerAgent}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,o),a.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var a=Object.create(null);o.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return r[e]}}));return i.default=function(){return r},o.d(a,i),a},o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return function(){o.d(a,{component:function(){return d}});var e=coreApis.componentApis.video.videoControlBar,t=coreApis.observer,r=coreApis.utils,n=coreApis.utils.urls,i=coreApis.pluginApis.data,s=o(988),c=o(689),l=o(164);const u="seek-by-frame-disable",d={name:"seekByFrames",displayName:"启用逐帧调整",tags:[componentsTags.video],description:{"zh-CN":s},entry:async()=>{await(0,r.playerReady)();const{playerAgent:n}=await Promise.resolve().then(o.t.bind(o,730,23));(0,i.addData)("ui.icons",(e=>{e["seek-left"]=c,e["seek-right"]=l}));let a=0;(0,t.attributesSubtree)(`${n.query.control.buttons.quality.selector} ul`,(()=>{const e=dq(`${n.query.control.buttons.quality.selector} .bui-select-item-active, ${n.query.control.buttons.quality.selector} .active`),t=e?parseInt(e.getAttribute("data-value")):0,r=(()=>{switch(t){case 116:case 74:return 6e4/1001;default:return 3e4/1001}})();a=1/r}));const s=e=>{n.changeTime(e*a)};(0,e.addControlBarButton)({name:"seekPrevFrame",displayName:"上一帧",icon:"seek-left",order:1,action:()=>{s(-1)}}),(0,e.addControlBarButton)({name:"seekNextFrame",displayName:"下一帧",icon:"seek-right",order:2,action:()=>{s(1)}})},reload:()=>document.body.classList.remove(u),unload:()=>document.body.classList.add(u),urlInclude:n.playerUrls,plugin:{displayName:"逐帧调整 - 快捷键支持",setup:()=>{(0,i.addData)("keymap.actions",(e=>{e.previousFrame={displayName:"上一帧",run:e=>{const{clickElement:t}=e;return t('.be-video-control-bar-extend [data-name="seekPrevFrame"]',e)}},e.nextFrame={displayName:"下一帧",run:e=>{const{clickElement:t}=e;return t('.be-video-control-bar-extend [data-name="seekNextFrame"]',e)}}})),(0,i.addData)("keymap.presets",(e=>{e.previousFrame="shift arrowLeft",e.nextFrame="shift arrowRight"}))}},commitHash:"d4303aebf50db75948120033c2a070a5a9e15a60",coreVersion:"2.1.9"}}(),a=a.component}()}));