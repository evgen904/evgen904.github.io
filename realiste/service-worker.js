if(!self.define){let i,n={};const l=(l,e)=>(l=new URL(l+".js",e).href,n[l]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=l,i.onload=n,document.head.appendChild(i)}else i=l,importScripts(l),n()})).then((()=>{let i=n[l];if(!i)throw new Error(`Module ${l} didn’t register its module`);return i})));self.define=(e,r)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let u={};const o=i=>l(i,s),g={module:{uri:s},exports:u,require:o};n[s]=Promise.all(e.map((i=>g[i]||o(i)))).then((i=>(r(...i),u)))}}define(["./workbox-8f9cad6b"],(function(i){"use strict";i.setCacheNameDetails({prefix:"realiste"}),self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/css/app.769d4f3f.css",revision:null},{url:"/img/appartments.5b07dd8a.svg",revision:null},{url:"/img/appartmentsInCircle-bg.cb5b49da.png",revision:null},{url:"/img/appartmentsInCircle.d306c70c.png",revision:null},{url:"/img/bg-animate.fa5d89e7.gif",revision:null},{url:"/img/bg-body.d7e47bd0.png",revision:null},{url:"/img/bolt.65a559ce.svg",revision:null},{url:"/img/estimation.9bba7570.svg",revision:null},{url:"/img/estimationInCircle-bg.3a0cc0e2.png",revision:null},{url:"/img/estimationInCircle.aaf23936.png",revision:null},{url:"/img/funds.ca2c91b4.svg",revision:null},{url:"/img/fundsInCircle-bg.b28d542f.png",revision:null},{url:"/img/fundsInCircle.623ef4bd.png",revision:null},{url:"/img/globe.9290314f.svg",revision:null},{url:"/img/img-1.45ea5e78.png",revision:null},{url:"/img/img-3.adbdf3f9.png",revision:null},{url:"/img/img-4.efb83c5d.png",revision:null},{url:"/img/img-map.124703d5.png",revision:null},{url:"/img/index.24320f70.svg",revision:null},{url:"/img/indexInCircle-bg.f1fc0914.png",revision:null},{url:"/img/indexInCircle.759fbebb.png",revision:null},{url:"/img/logo.26985006.svg",revision:null},{url:"/img/trade-up.1452f461.svg",revision:null},{url:"/img/tradeUpInCircle.a21bdcf7.png",revision:null},{url:"/index.html",revision:"fbe767b1dfb22af03b1fc4991af12ada"},{url:"/js/app.53188cda.js",revision:null},{url:"/js/chunk-vendors.431581f7.js",revision:null},{url:"/manifest.json",revision:"266a8bea01c4c92c66f31364f38d815f"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map