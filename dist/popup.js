(()=>{"use strict";var r,n={54:(r,n,e)=>{e.d(n,{Z:()=>A});var o=e(537),t=e.n(o),a=e(645),i=e.n(a)()(t());i.push([r.id,"* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  background: var(--color-bg);\r\n  width: 300px;\r\n  height: 100%;\r\n}\r\n\r\n.bookmarks-app {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.bookmarks-app__content {\r\n  \r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: hidden;\r\n  /* overflow-y: scroll; */\r\n  margin-top: 5px;\r\n}\r\n\r\n.small {\r\n  overflow-y: scroll;\r\n  max-height: 190px;\r\n}\r\n\r\n.bookmarks-app__messages {\r\n  font-family: var(--font-family);\r\n  font-weight: 500;\r\n  color: #fff;\r\n  font-size: 0.8rem;\r\n  padding: 5px 15px;\r\n  margin-top: 5px;\r\n  background: rgba(45,54,73,1);\r\n}\r\n\r\n.bookmarks-app__title {\r\n  display: flex;\r\n}\r\n\r\n.bookmarks-app__title-h1 {\r\n  font-family: var(--font-family);\r\n  font-weight: 500;\r\n  color: #fff;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 0.8em;\r\n}\r\n \r\n::-webkit-scrollbar-track {\r\n  border-radius: 5px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: rgba(255, 255, 255, .9);\r\n  border-radius: 10px;\r\n}","",{version:3,sources:["webpack://./src/popup/app.css"],names:[],mappings:"AAAA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,+BAA+B;EAC/B,gBAAgB;EAChB,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,4BAA4B;AAC9B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,+BAA+B;EAC/B,gBAAgB;EAChB,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,mCAAmC;EACnC,mBAAmB;AACrB",sourcesContent:["* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  background: var(--color-bg);\r\n  width: 300px;\r\n  height: 100%;\r\n}\r\n\r\n.bookmarks-app {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.bookmarks-app__content {\r\n  \r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: hidden;\r\n  /* overflow-y: scroll; */\r\n  margin-top: 5px;\r\n}\r\n\r\n.small {\r\n  overflow-y: scroll;\r\n  max-height: 190px;\r\n}\r\n\r\n.bookmarks-app__messages {\r\n  font-family: var(--font-family);\r\n  font-weight: 500;\r\n  color: #fff;\r\n  font-size: 0.8rem;\r\n  padding: 5px 15px;\r\n  margin-top: 5px;\r\n  background: rgba(45,54,73,1);\r\n}\r\n\r\n.bookmarks-app__title {\r\n  display: flex;\r\n}\r\n\r\n.bookmarks-app__title-h1 {\r\n  font-family: var(--font-family);\r\n  font-weight: 500;\r\n  color: #fff;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 0.8em;\r\n}\r\n \r\n::-webkit-scrollbar-track {\r\n  border-radius: 5px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: rgba(255, 255, 255, .9);\r\n  border-radius: 10px;\r\n}"],sourceRoot:""}]);const A=i},723:(r,n,e)=>{e.d(n,{Z:()=>A});var o=e(537),t=e.n(o),a=e(645),i=e.n(a)()(t());i.push([r.id,".bookmarks-contaier {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 5px;\r\n  margin-left: 0;\r\n  margin-right: 5px;\r\n  background: rgba(45,54,73,1);\r\n  height: 30px;\r\n}\r\n.bookmarks-contaier__content {\r\n  flex: 2;\r\n  padding: 10px 5px; \r\n}\r\n\r\np {\r\n  font-weight: 400;\r\n  font-family: var(--font-family);\r\n  font-size: 0.8rem;\r\n  margin-right: 10px;\r\n  color: var(--font-color);\r\n}\r\n\r\n.bookmarks-contaier__buttons {\r\n  height: 100%;\r\n  display: flex;\r\n  background-color: rgba(255, 255, 255, .9);\r\n} \r\n\r\n.bookmarks-contaier__buttons button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 5px;\r\n  cursor: pointer;\r\n  border: none;\r\n  background-color: transparent; \r\n}\r\n\r\n.delete-icon {\r\n  color: #941B10\r\n}\r\n.delete-icon :hover {\r\n  color: #CB2415 \r\n}\r\n\r\n.back-icon {\r\n  color:#386480\r\n}\r\n.back-icon :hover {\r\n  color:#457b9d\r\n}","",{version:3,sources:["webpack://./src/popup/bookmark.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,4BAA4B;EAC5B,YAAY;AACd;AACA;EACE,OAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,+BAA+B;EAC/B,iBAAiB;EACjB,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE;AACF;AACA;EACE;AACF;;AAEA;EACE;AACF;AACA;EACE;AACF",sourcesContent:[".bookmarks-contaier {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 5px;\r\n  margin-left: 0;\r\n  margin-right: 5px;\r\n  background: rgba(45,54,73,1);\r\n  height: 30px;\r\n}\r\n.bookmarks-contaier__content {\r\n  flex: 2;\r\n  padding: 10px 5px; \r\n}\r\n\r\np {\r\n  font-weight: 400;\r\n  font-family: var(--font-family);\r\n  font-size: 0.8rem;\r\n  margin-right: 10px;\r\n  color: var(--font-color);\r\n}\r\n\r\n.bookmarks-contaier__buttons {\r\n  height: 100%;\r\n  display: flex;\r\n  background-color: rgba(255, 255, 255, .9);\r\n} \r\n\r\n.bookmarks-contaier__buttons button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 5px;\r\n  cursor: pointer;\r\n  border: none;\r\n  background-color: transparent; \r\n}\r\n\r\n.delete-icon {\r\n  color: #941B10\r\n}\r\n.delete-icon :hover {\r\n  color: #CB2415 \r\n}\r\n\r\n.back-icon {\r\n  color:#386480\r\n}\r\n.back-icon :hover {\r\n  color:#457b9d\r\n}"],sourceRoot:""}]);const A=i},699:(r,n,e)=>{e.d(n,{Z:()=>A});var o=e(537),t=e.n(o),a=e(645),i=e.n(a)()(t());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap);"]),i.push([r.id,":root {\r\n  --font-family: 'Montserrat', sans-serif;\r\n  --color-bg: #1a202c;\r\n  --color-bm: #2d3649;\r\n  --font-color: #fff\r\n}\r\n\r\n#root {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n","",{version:3,sources:["webpack://./src/popup/popup.css"],names:[],mappings:"AAEA;EACE,uCAAuC;EACvC,mBAAmB;EACnB,mBAAmB;EACnB;AACF;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap');\r\n\r\n:root {\r\n  --font-family: 'Montserrat', sans-serif;\r\n  --color-bg: #1a202c;\r\n  --color-bm: #2d3649;\r\n  --font-color: #fff\r\n}\r\n\r\n#root {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n"],sourceRoot:""}]);const A=i},103:(r,n,e)=>{var o=e(294),t=e(745),a=e(750),i=e(434);function A(){return r=this,n=void 0,o=function*(){return(yield chrome.tabs.query({currentWindow:!0,active:!0}))[0]},new((e=void 0)||(e=Promise))((function(t,a){function i(r){try{s(o.next(r))}catch(r){a(r)}}function A(r){try{s(o.throw(r))}catch(r){a(r)}}function s(r){var n;r.done?t(r.value):(n=r.value,n instanceof e?n:new e((function(r){r(n)}))).then(i,A)}s((o=o.apply(r,n||[])).next())}));var r,n,e,o}var s=e(379),l=e.n(s),c=e(795),m=e.n(c),p=e(569),d=e.n(p),f=e(565),u=e.n(f),b=e(216),E=e.n(b),k=e(589),g=e.n(k),B=e(723),h={};h.styleTagTransform=g(),h.setAttributes=u(),h.insert=d().bind(null,"head"),h.domAPI=m(),h.insertStyleElement=E(),l()(B.Z,h),B.Z&&B.Z.locals&&B.Z.locals;var C=function(r,n,e,o){return new(e||(e=Promise))((function(t,a){function i(r){try{s(o.next(r))}catch(r){a(r)}}function A(r){try{s(o.throw(r))}catch(r){a(r)}}function s(r){var n;r.done?t(r.value):(n=r.value,n instanceof e?n:new e((function(r){r(n)}))).then(i,A)}s((o=o.apply(r,n||[])).next())}))};const v=({bookmark:r,setBookmarks:n})=>{const e="22px";return o.createElement("div",{className:"bookmarks-contaier"},o.createElement("div",{className:"bookmarks-contaier__content"},o.createElement("p",null," ",r.title," ")),o.createElement("div",{className:"bookmarks-contaier__buttons"},o.createElement("button",{className:"back-icon",type:"button",onClick:()=>C(void 0,void 0,void 0,(function*(){const n=yield A();chrome.tabs.sendMessage(n.id,{type:"GO_BACK",currentTime:r.time})}))},o.createElement(a.mz0,{style:{width:e,height:e}})),o.createElement("button",{className:"delete-icon",onClick:()=>C(void 0,void 0,void 0,(function*(){const e=yield A();chrome.tabs.sendMessage(e.id,{type:"DELETE",bookmarkId:r.id},n)}))},o.createElement(i.FH3,{className:"delete-icon",style:{width:e,height:e}}))))};var y=e(612),x=e(721),w=e(54),_={};_.styleTagTransform=g(),_.setAttributes=u(),_.insert=d().bind(null,"head"),_.domAPI=m(),_.insertStyleElement=E(),l()(w.Z,_),w.Z&&w.Z.locals&&w.Z.locals;const Z=({bookmarks:r,setBookmarks:n,videoTitle:e})=>{const{ref:t}=(0,y.NB)();return o.createElement(o.Fragment,null,o.createElement("div",{className:"bookmarks-app__title"},o.createElement("h1",{className:"bookmarks-app__title-h1"}," ",e," ")),o.createElement(y.ZP,{handleWidth:!1,handleHeight:!0,onResize:()=>{const r=t.current;r.clientHeight>=190?r.classList.add("small"):r.classList.remove("small")}},o.createElement("div",{ref:t,className:"bookmarks-app__content"},r.length>0?r.map((r=>o.createElement(v,{key:(0,x.Z)(),bookmark:r,setBookmarks:n}))):o.createElement("div",{className:"bookmarks-app__messages"},"Add your bookmarks 📑😄. "))))};var j=e(699),O={};O.styleTagTransform=g(),O.setAttributes=u(),O.insert=d().bind(null,"head"),O.domAPI=m(),O.insertStyleElement=E(),l()(j.Z,O),j.Z&&j.Z.locals&&j.Z.locals;const N=document.createElement("div");N.id="root",document.body.appendChild(N),t.createRoot(N).render(o.createElement((()=>{const[r,n]=(0,o.useState)([]),[e,t]=(0,o.useState)(!0),[a,i]=(0,o.useState)("");return(0,o.useEffect)((()=>{var r,e,o,a;r=void 0,e=void 0,a=function*(){const r=yield A();if(r.url&&r.url.includes("youtube.com/watch")){const e=(r=>r.length>59?r.substring(0,59)+"...":r)(r.title);i(e);const o=r.url.split("?")[1],t=new URLSearchParams(o).get("v");chrome.storage.sync.get([t],(r=>{const e=r[t]?JSON.parse(r[t]):[];n(e)}))}else t(!1)},new((o=void 0)||(o=Promise))((function(n,t){function i(r){try{s(a.next(r))}catch(r){t(r)}}function A(r){try{s(a.throw(r))}catch(r){t(r)}}function s(r){var e;r.done?n(r.value):(e=r.value,e instanceof o?e:new o((function(r){r(e)}))).then(i,A)}s((a=a.apply(r,e||[])).next())}))}),[]),o.createElement("div",{className:"bookmarks-app"},e?o.createElement(Z,{bookmarks:r,setBookmarks:n,videoTitle:a}):o.createElement("div",{className:"bookmarks-app__messages"},"Sorry, this site is not available for bookmarking 😥."))}),null))}},e={};function o(r){var t=e[r];if(void 0!==t)return t.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,o),a.exports}o.m=n,r=[],o.O=(n,e,t,a)=>{if(!e){var i=1/0;for(c=0;c<r.length;c++){for(var[e,t,a]=r[c],A=!0,s=0;s<e.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((r=>o.O[r](e[s])))?e.splice(s--,1):(A=!1,a<i&&(i=a));if(A){r.splice(c--,1);var l=t();void 0!==l&&(n=l)}}return n}a=a||0;for(var c=r.length;c>0&&r[c-1][2]>a;c--)r[c]=r[c-1];r[c]=[e,t,a]},o.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return o.d(n,{a:n}),n},o.d=(r,n)=>{for(var e in n)o.o(n,e)&&!o.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),o.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r={42:0};o.O.j=n=>0===r[n];var n=(n,e)=>{var t,a,[i,A,s]=e,l=0;if(i.some((n=>0!==r[n]))){for(t in A)o.o(A,t)&&(o.m[t]=A[t]);if(s)var c=s(o)}for(n&&n(e);l<i.length;l++)a=i[l],o.o(r,a)&&r[a]&&r[a][0](),r[a]=0;return o.O(c)},e=self.webpackChunkyt_extension=self.webpackChunkyt_extension||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))})(),o.nc=void 0;var t=o.O(void 0,[18,367],(()=>o(103)));t=o.O(t)})();