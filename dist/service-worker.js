if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,t)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const d=e=>n(e,o),c={module:{uri:o},exports:s,require:d};i[o]=Promise.all(r.map((e=>c[e]||d(e)))).then((e=>(t(...e),s)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./index.html",revision:"235e3b9913e733efe38f190258fcc04f"},{url:"main.css",revision:"0e23dbd0bd02411408dff2e52562823e"},{url:"main.js",revision:"88572749ace95dc254e391bbd1000d04"}],{})}));
