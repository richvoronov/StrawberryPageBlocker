!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=60)}({14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLOSE_CURRENT_TAB=t.TIME=t.BLOCK=void 0,t.BLOCK="@@/BLOCK",t.TIME="@@/TIME",t.CLOSE_CURRENT_TAB="@@/CLOSE_CURRENT_TAB"},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(61);const o=n(14),s={sites:[{tabId:1,siteURL:"https://www.youtube.com/",block:!0,time:0}]};(new class{constructor(){this.onInstalledHandle=()=>(console.log("Thank you for installation this beautiful extension!"),chrome.storage.sync.set(s)),this.getCurrentTab=(e,t)=>{const n=e.findIndex(e=>e.tabId===t);return e[n]},this.onMessageHandle=(e,t)=>{switch(e.type){case o.BLOCK:chrome.storage.sync.get(["sites"],n=>{const{sites:o}=n,s=this.getCurrentTab(o,t.tab.id);s.block=e.payload,chrome.storage.sync.set({sites:o}),this.mountPopup(s)});break;case o.TIME:0,chrome.storage.sync.get(["sites"],n=>{const{sites:o}=n,s=this.getCurrentTab(o,t.tab.id);s.time=e.payload,chrome.storage.sync.set({sites:o}),setTimeout(()=>{s.time=0,s.block=!0,chrome.storage.sync.set({sites:o}),this.mountPopup(s)},e.payload)});break;case o.CLOSE_CURRENT_TAB:chrome.tabs.remove(t.tab.id)}return!1},this.onTabUpdatedHandle=(e,t,n)=>{const o=new URL(n.url);chrome.storage.sync.get(["sites"],t=>{var n;const{sites:s}=t;for(let t=0;t<=s.length;t+=1)o.origin===(null===(n=s[t])||void 0===n?void 0:n.siteURL)&&(s[t].tabId=e,chrome.storage.sync.set({sites:s}),this.mountPopup(s[t]))})},this.mountPopup=e=>{chrome.tabs.sendMessage(e.tabId,e)}}init(){chrome.runtime.onInstalled.addListener(this.onInstalledHandle),chrome.tabs.onUpdated.addListener(this.onTabUpdatedHandle),chrome.runtime.onMessage.addListener(this.onMessageHandle)}}).init()},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.timer=void 0,t.timer=e=>{let t=0;const n=setInterval(()=>(t+=1,console.log("tick",t)),1e3);setTimeout(()=>{clearInterval(n),console.log("STOP TIMER")},e)}}});