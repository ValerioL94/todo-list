(()=>{var n={28:(n,e,t)=>{"use strict";t.d(e,{Z:()=>A});var r=t(537),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"html,\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100vh;\n}\n\nheader {\n    display: flex;\n    box-sizing: border-box;\n    padding-left: 30px;\n    gap: 30px;\n    background-color: lightblue;\n    align-items: center;\n}\n\n#arrow {\n    border: solid black;\n    border-width: 0 5px 5px 0;\n    display: inline-block;\n    padding: 5px;\n    background: transparent;\n    cursor: pointer;\n}\n\n.down {\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n}\n\n.right {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n}\n\nmain {\n    display: flex;\n    height: 100%;\n}\n\n.hide-sidebar>#sidebar {\n    display: none;\n}\n\n#sidebar {\n    background-color: rgb(240, 240, 240);\n    padding: 30px;\n    min-width: 300px;\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    gap: 60px;\n}\n\n#sidebar>.tabs-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n#sidebar>.tabs-wrapper>.tab {\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    gap: 20px;\n    background-color: white;\n    border-radius: 10px;\n    border: 3px solid white;\n}\n\n.tabs-wrapper>.tab>img {\n    height: 50px;\n}\n\n#sidebar>div>.tab:hover {\n    cursor: pointer;\n    border: 3px solid lightblue;\n}\n\n#sidebar>div>.tab:focus {\n    background-color: lightblue;\n    border: 3px solid lightblue;\n}\n\n#sidebar>.projects {\n    display: flex;\n    flex-direction: column;\n}\n\n#sidebar>.projects>.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.projects button {\n    border: none;\n    appearance: none;\n    background-color: inherit;\n}\n\n.projects button>img {\n    height: 20px;\n}\n\n.projects button:hover,\n.projects button:focus {\n    cursor: pointer;\n    transition: all ease-in-out;\n    transform: scale(1.2);\n}\n\n.tooltip {\n    position: relative;\n}\n\n.tooltip::before {\n    background-color: white;\n    border: 2px solid lightblue;\n    border-radius: 5px;\n    width: 130px;\n    content: attr(data-title);\n    visibility: hidden;\n    font-family: 'Courier New', Courier, monospace;\n    padding: 5px 0;\n    position: absolute;\n    bottom: 120%;\n    right: 0;\n    z-index: 1;\n}\n\n.tooltip::after {\n    position: absolute;\n    left: 50%;\n    bottom: 85%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: lightblue transparent transparent transparent;\n    content: \"\";\n    visibility: hidden;\n}\n\n.tooltip:hover::before,\n.tooltip:hover::after {\n    visibility: visible;\n}\n\n#new-projects {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n#new-projects>div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: white;\n    padding-left: 10px;\n    border-radius: 10px;\n    border: 3px solid white;\n    box-sizing: border-box;\n}\n\n#new-projects>div:hover {\n    cursor: pointer;\n    border: 3px solid;\n    border-color: lightblue;\n}\n\n#new-projects>div:focus {\n    border: 3px solid;\n    border-color: lightblue;\n    background-color: lightblue;\n}\n\n#content {\n    width: 100%\n}\n\nfooter {\n    background-color: lightblue;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    gap: 10px;\n}\n\nfooter>a>img {\n    height: 25px;\n}\n\nfooter>a>img:hover {\n    transition: all ease-in-out;\n    transform: scale(1.2);\n}\n\n@media screen and (max-width: 600px) {\n    #sidebar {\n        position: fixed;\n        z-index: 1;\n    }\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;;IAEI,SAAS;IACT,UAAU;IACV,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;IACT,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,qBAAqB;IACrB,YAAY;IACZ,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;IACzB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,SAAS;IACT,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;IAC3B,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,eAAe;IACf,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,2BAA2B;IAC3B,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,8CAA8C;IAC9C,cAAc;IACd,kBAAkB;IAClB,YAAY;IACZ,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,2DAA2D;IAC3D,WAAW;IACX,kBAAkB;AACtB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,2BAA2B;AAC/B;;AAEA;IACI;AACJ;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;IACI;QACI,eAAe;QACf,UAAU;IACd;AACJ",sourcesContent:["html,\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100vh;\n}\n\nheader {\n    display: flex;\n    box-sizing: border-box;\n    padding-left: 30px;\n    gap: 30px;\n    background-color: lightblue;\n    align-items: center;\n}\n\n#arrow {\n    border: solid black;\n    border-width: 0 5px 5px 0;\n    display: inline-block;\n    padding: 5px;\n    background: transparent;\n    cursor: pointer;\n}\n\n.down {\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n}\n\n.right {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n}\n\nmain {\n    display: flex;\n    height: 100%;\n}\n\n.hide-sidebar>#sidebar {\n    display: none;\n}\n\n#sidebar {\n    background-color: rgb(240, 240, 240);\n    padding: 30px;\n    min-width: 300px;\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    gap: 60px;\n}\n\n#sidebar>.tabs-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n#sidebar>.tabs-wrapper>.tab {\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    gap: 20px;\n    background-color: white;\n    border-radius: 10px;\n    border: 3px solid white;\n}\n\n.tabs-wrapper>.tab>img {\n    height: 50px;\n}\n\n#sidebar>div>.tab:hover {\n    cursor: pointer;\n    border: 3px solid lightblue;\n}\n\n#sidebar>div>.tab:focus {\n    background-color: lightblue;\n    border: 3px solid lightblue;\n}\n\n#sidebar>.projects {\n    display: flex;\n    flex-direction: column;\n}\n\n#sidebar>.projects>.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.projects button {\n    border: none;\n    appearance: none;\n    background-color: inherit;\n}\n\n.projects button>img {\n    height: 20px;\n}\n\n.projects button:hover,\n.projects button:focus {\n    cursor: pointer;\n    transition: all ease-in-out;\n    transform: scale(1.2);\n}\n\n.tooltip {\n    position: relative;\n}\n\n.tooltip::before {\n    background-color: white;\n    border: 2px solid lightblue;\n    border-radius: 5px;\n    width: 130px;\n    content: attr(data-title);\n    visibility: hidden;\n    font-family: 'Courier New', Courier, monospace;\n    padding: 5px 0;\n    position: absolute;\n    bottom: 120%;\n    right: 0;\n    z-index: 1;\n}\n\n.tooltip::after {\n    position: absolute;\n    left: 50%;\n    bottom: 85%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: lightblue transparent transparent transparent;\n    content: \"\";\n    visibility: hidden;\n}\n\n.tooltip:hover::before,\n.tooltip:hover::after {\n    visibility: visible;\n}\n\n#new-projects {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n#new-projects>div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: white;\n    padding-left: 10px;\n    border-radius: 10px;\n    border: 3px solid white;\n    box-sizing: border-box;\n}\n\n#new-projects>div:hover {\n    cursor: pointer;\n    border: 3px solid;\n    border-color: lightblue;\n}\n\n#new-projects>div:focus {\n    border: 3px solid;\n    border-color: lightblue;\n    background-color: lightblue;\n}\n\n#content {\n    width: 100%\n}\n\nfooter {\n    background-color: lightblue;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    gap: 10px;\n}\n\nfooter>a>img {\n    height: 25px;\n}\n\nfooter>a>img:hover {\n    transition: all ease-in-out;\n    transform: scale(1.2);\n}\n\n@media screen and (max-width: 600px) {\n    #sidebar {\n        position: fixed;\n        z-index: 1;\n    }\n}"],sourceRoot:""}]);const A=a},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},537:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],A=0;A<n.length;A++){var s=n[A],c=r.base?s[0]+r.base:s[0],d=i[c]||0,l="".concat(c," ").concat(d);i[c]=d+1;var p=t(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var b=o(u,r);r.byIndex=A,e.splice(A,0,{identifier:l,updater:b,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var A=t(i[a]);e[A].references--}for(var s=r(n,o),c=0;c<i.length;c++){var d=t(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},112:(n,e,t)=>{var r={"./add.png":570,"./calendar.png":962,"./delete.png":477,"./double-tick.png":754,"./edit.png":290,"./github-mark.svg":82,"./project.png":86,"./timeline-week.png":639,"./today.png":439};function o(n){var e=i(n);return t(e)}function i(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=i,n.exports=o,o.id=112},570:(n,e,t)=>{"use strict";n.exports=t.p+"images/add.png"},962:(n,e,t)=>{"use strict";n.exports=t.p+"images/calendar.png"},477:(n,e,t)=>{"use strict";n.exports=t.p+"images/delete.png"},754:(n,e,t)=>{"use strict";n.exports=t.p+"images/double-tick.png"},290:(n,e,t)=>{"use strict";n.exports=t.p+"images/edit.png"},82:(n,e,t)=>{"use strict";n.exports=t.p+"images/github-mark.svg"},86:(n,e,t)=>{"use strict";n.exports=t.p+"images/project.png"},639:(n,e,t)=>{"use strict";n.exports=t.p+"images/timeline-week.png"},439:(n,e,t)=>{"use strict";n.exports=t.p+"images/today.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{"use strict";var n,e=t(379),r=t.n(e),o=t(795),i=t.n(o),a=t(569),A=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),b=t(28),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=A().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),r()(b.Z,m),b.Z&&b.Z.locals&&b.Z.locals,(n=t(112)).keys().forEach(n),function(){const n=document.createElement("div");n.setAttribute("id","container");const e=document.createElement("header"),t=document.createElement("img");t.src="images/double-tick.png",t.alt="double check icon";const r=document.createElement("h1");r.textContent="To Do";const o=document.createElement("button");o.setAttribute("id","arrow"),o.setAttribute("class","down"),e.append(t,r,o);const i=document.createElement("main"),a=document.createElement("nav");a.setAttribute("id","sidebar"),a.setAttribute("class","hide-sidebar");const A=document.createElement("div");A.setAttribute("class","tabs-wrapper");const s=document.createElement("div");s.setAttribute("class","all tab"),s.setAttribute("tabIndex","0");const c=document.createElement("img");c.src="images/calendar.png",c.alt="calendar icon";const d=document.createElement("h2");d.textContent="All",s.append(c,d);const l=document.createElement("div");l.setAttribute("class","today tab"),l.setAttribute("tabIndex","1");const p=document.createElement("img");p.src="images/today.png",p.alt="checked calendar icon";const u=document.createElement("h2");u.textContent="Today",l.append(p,u);const b=document.createElement("div");b.setAttribute("class","week tab"),b.setAttribute("tabIndex","2");const m=document.createElement("img");m.src="images/timeline-week.png",m.alt="calendar with a timeline icon";const g=document.createElement("h2");g.textContent="Week",b.append(m,g),A.append(s,l,b);const B=document.createElement("div");B.setAttribute("class","projects");const C=document.createElement("div");C.setAttribute("class",e),document.createElement("h2").textContent="Projects";const f=document.createElement("button");f.setAttribute("class","tooltip"),f.setAttribute("data-title","Add new project");const h=document.createElement("img");h.src="images/add.png",h.alt="add icon";const x=document.createElement("div");x.setAttribute("id","new-projects"),B.append(C,x),a.append(A,B);const I=document.createElement("div");I.setAttribute("id","content"),i.append(a,I);const v=document.createElement("footer"),y=document.createElement("p");y.textContent="Copyright © 2024 ValerioL94";const w=document.createElement("a");w.href="https://github.com/ValerioL94";const E=document.createElement("img");w.appendChild(E),E.src="images/github-mark.svg",E.alt="github logo",v.append(y,w),n.append(e,i,v)}()})()})();
//# sourceMappingURL=bundle.js.map