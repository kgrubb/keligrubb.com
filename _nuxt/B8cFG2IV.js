const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C-Y88i2u.js","./K82bPWN6.js","./-eNhLoDM.js","./Bx5Aem1n.js","./A5kSNdVd.js","./Ij0KZEu9.js","./knave.XesS0T2O.css","./BzXopiyq.js","./knavechargen.DmJHD-qw.css","./CyBkNFpW.js","./knaveweapongen.BwM1RCfA.css","./B6nZ2nrI.js","./knaveweathergen.BnaIGOzQ.css","./zXFNw7eK.js","./M7YDj-nz.js","./CwCQkeE_.js","./Ckz_DNOy.js","./BR7qq6Uk.js","./default.Cd7VLPu7.css","./BX8wrEef.js","./error-404.Bb87HomL.css","./BqXlfyXQ.js","./error-500.Bwd7zAaE.css"])))=>i.map(i=>d[i]);
import{_ as e,a as t,c as n,d as r,f as i,g as a,h as o,i as s,m as c,n as l,o as u,p as d,r as f,t as p,u as m}from"./Bx5Aem1n.js";import{A as h,B as g,C as _,D as v,E as y,F as b,G as ee,H as te,J as x,K as ne,M as re,N as S,O as ie,P as C,Q as w,S as ae,T,V as oe,X as E,Y as se,Z as ce,_t as le,a as ue,b as D,c as de,d as O,et as fe,f as pe,ft as me,i as he,j as ge,k as _e,l as k,o as ve,p as ye,q as be,t as xe,tt as A,v as Se,w as Ce,x as we,y as Te,z as Ee}from"./K82bPWN6.js";import{$ as De,A as Oe,B as ke,C as Ae,Ct as je,D as Me,E as Ne,F as Pe,G as Fe,H as j,I as Ie,J as Le,K as Re,L as ze,M as Be,N as Ve,O as He,P as Ue,Q as We,R as Ge,S as Ke,St as qe,T as Je,U as Ye,V as Xe,W as Ze,X as Qe,Y as $e,Z as et,_ as tt,_t as nt,at as rt,b as it,bt as at,c as ot,ct as st,d as ct,dt as lt,et as ut,f as M,ft as dt,g as ft,gt as pt,h as mt,ht,i as gt,it as _t,j as vt,k as yt,l as bt,lt as xt,m as St,mt as Ct,nt as wt,o as Tt,ot as N,p as Et,pt as Dt,q as Ot,rt as kt,s as P,st as At,tt as jt,u as Mt,ut as Nt,v as Pt,vt as Ft,w as It,x as Lt,xt as Rt,y as zt,yt as Bt,z as F}from"./-eNhLoDM.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var Vt=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Ht=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Ut=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Wt(e,t){if(e===`__proto__`||e===`constructor`&&t&&typeof t==`object`&&`prototype`in t){Gt(e);return}return t}function Gt(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function Kt(e,t={}){if(typeof e!=`string`)return e;if(e[0]===`"`&&e[e.length-1]===`"`&&e.indexOf(`\\`)===-1)return e.slice(1,-1);let n=e.trim();if(n.length<=9)switch(n.toLowerCase()){case`true`:return!0;case`false`:return!1;case`undefined`:return;case`null`:return null;case`nan`:return NaN;case`infinity`:return 1/0;case`-infinity`:return-1/0}if(!Ut.test(e)){if(t.strict)throw SyntaxError(`[destr] Invalid JSON`);return e}try{if(Vt.test(e)||Ht.test(e)){if(t.strict)throw Error(`[destr] Possible prototype pollution`);return JSON.parse(e,Wt)}return JSON.parse(e)}catch(n){if(t.strict)throw n;return e}}var qt=class extends Error{constructor(e,t){super(e,t),this.name=`FetchError`,t?.cause&&!this.cause&&(this.cause=t.cause)}};function Jt(e){let t=e.error?.message||e.error?.toString()||``,n=e.request?.method||e.options?.method||`GET`,r=e.request?.url||String(e.request)||`/`,i=new qt(`${`[${n}] ${JSON.stringify(r)}`}: ${e.response?`${e.response.status} ${e.response.statusText}`:`<no response>`}${t?` ${t}`:``}`,e.error?{cause:e.error}:void 0);for(let t of[`request`,`options`,`response`])Object.defineProperty(i,t,{get(){return e[t]}});for(let[t,n]of[[`data`,`_data`],[`status`,`status`],[`statusCode`,`status`],[`statusText`,`statusText`],[`statusMessage`,`statusText`]])Object.defineProperty(i,t,{get(){return e.response&&e.response[n]}});return i}var Yt=new Set(Object.freeze([`PATCH`,`POST`,`PUT`,`DELETE`]));function Xt(e=`GET`){return Yt.has(e.toUpperCase())}function Zt(e){if(e===void 0)return!1;let t=typeof e;return t===`string`||t===`number`||t===`boolean`||t===null?!0:t===`object`?Array.isArray(e)?!0:e.buffer||e instanceof FormData||e instanceof URLSearchParams?!1:e.constructor&&e.constructor.name===`Object`||typeof e.toJSON==`function`:!1}var Qt=new Set([`image/svg`,`application/xml`,`application/xhtml`,`application/html`]),$t=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function en(e=``){if(!e)return`json`;let t=e.split(`;`).shift()||``;return $t.test(t)?`json`:t===`text/event-stream`?`stream`:Qt.has(t)||t.startsWith(`text/`)?`text`:`blob`}function tn(e,t,n,r){let i=nn(t?.headers??e?.headers,n?.headers,r),a;return(n?.query||n?.params||t?.params||t?.query)&&(a={...n?.params,...n?.query,...t?.params,...t?.query}),{...n,...t,query:a,params:a,headers:i}}function nn(e,t,n){if(!t)return new n(e);let r=new n(t);if(e)for(let[t,i]of Symbol.iterator in e||Array.isArray(e)?e:new n(e))r.set(t,i);return r}async function rn(e,t){if(t){if(Array.isArray(t))for(let n of t)await n(e);else await t(e)}}var an=new Set([408,409,425,429,500,502,503,504]),on=new Set([101,204,205,304]);function sn(e={}){let{fetch:t=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=e;async function i(e){let t=e.error&&e.error.name===`AbortError`&&!e.options.timeout||!1;if(e.options.retry!==!1&&!t){let t;t=typeof e.options.retry==`number`?e.options.retry:+!Xt(e.options.method);let n=e.response&&e.response.status||500;if(t>0&&(Array.isArray(e.options.retryStatusCodes)?e.options.retryStatusCodes.includes(n):an.has(n))){let n=typeof e.options.retryDelay==`function`?e.options.retryDelay(e):e.options.retryDelay||0;return n>0&&await new Promise(e=>setTimeout(e,n)),a(e.request,{...e.options,retry:t-1})}}let n=Jt(e);throw Error.captureStackTrace&&Error.captureStackTrace(n,a),n}let a=async function(a,o={}){let s={request:a,options:tn(a,o,e.defaults,n),response:void 0,error:void 0};if(s.options.method&&(s.options.method=s.options.method.toUpperCase()),s.options.onRequest&&(await rn(s,s.options.onRequest),s.options.headers instanceof n||(s.options.headers=new n(s.options.headers||{}))),typeof s.request==`string`&&(s.options.baseURL&&(s.request=Dt(s.request,s.options.baseURL)),s.options.query&&(s.request=Ct(s.request,s.options.query),delete s.options.query),`query`in s.options&&delete s.options.query,`params`in s.options&&delete s.options.params),s.options.body&&Xt(s.options.method)){if(Zt(s.options.body)){let e=s.options.headers.get(`content-type`);typeof s.options.body!=`string`&&(s.options.body=e===`application/x-www-form-urlencoded`?new URLSearchParams(s.options.body).toString():JSON.stringify(s.options.body)),e||s.options.headers.set(`content-type`,`application/json`),s.options.headers.has(`accept`)||s.options.headers.set(`accept`,`application/json`)}else(`pipeTo`in s.options.body&&typeof s.options.body.pipeTo==`function`||typeof s.options.body.pipe==`function`)&&(`duplex`in s.options||(s.options.duplex=`half`))}let c;if(!s.options.signal&&s.options.timeout){let e=new r;c=setTimeout(()=>{let t=Error(`[TimeoutError]: The operation was aborted due to timeout`);t.name=`TimeoutError`,t.code=23,e.abort(t)},s.options.timeout),s.options.signal=e.signal}try{s.response=await t(s.request,s.options)}catch(e){return s.error=e,s.options.onRequestError&&await rn(s,s.options.onRequestError),await i(s)}finally{c&&clearTimeout(c)}if((s.response.body||s.response._bodyInit)&&!on.has(s.response.status)&&s.options.method!==`HEAD`){let e=(s.options.parseResponse?`json`:s.options.responseType)||en(s.response.headers.get(`content-type`)||``);switch(e){case`json`:{let e=await s.response.text(),t=s.options.parseResponse||Kt;s.response._data=t(e);break}case`stream`:s.response._data=s.response.body||s.response._bodyInit;break;default:s.response._data=await s.response[e]()}}return s.options.onResponse&&await rn(s,s.options.onResponse),!s.options.ignoreResponseError&&s.response.status>=400&&s.response.status<600?(s.options.onResponseError&&await rn(s,s.options.onResponseError),await i(s)):s.response},o=async function(e,t){return(await a(e,t))._data};return o.raw=a,o.native=(...e)=>t(...e),o.create=(t={},n={})=>sn({...e,...n,defaults:{...e.defaults,...n.defaults,...t}}),o}var cn=(function(){if(typeof globalThis<`u`)return globalThis;if(typeof self<`u`)return self;if(typeof window<`u`)return window;if(typeof global<`u`)return global;throw Error(`unable to locate global object`)})(),ln=cn.fetch?(...e)=>cn.fetch(...e):()=>Promise.reject(Error(`[ofetch] global.fetch is not supported!`)),un=cn.Headers,dn=cn.AbortController,fn=sn({fetch:ln,Headers:un,AbortController:dn}),pn=()=>window?.__NUXT__?.config||window?.useNuxtApp?.().payload?.config,mn=()=>pn().app,hn=()=>mn().baseURL,gn=()=>mn().buildAssetsDir,_n=(...e)=>lt(vn(),gn(),...e),vn=(...e)=>{let t=mn(),n=t.cdnURL||t.baseURL;return e.length?lt(n,...e):n};globalThis.__buildAssetsURL=_n,globalThis.__publicAssetsURL=vn,globalThis.$fetch||(globalThis.$fetch=fn.create({baseURL:hn()}));var yn=globalThis.$fetch;`global`in globalThis||(globalThis.global=globalThis);var bn=e({docsBase:o,reporters:a});function xn(e,t){return t&&typeof e==`function`&&(e.key=t),e}var Sn=/\\/g,Cn=/</g,wn=/"/g,Tn=/%\w+(?:\.\w+)?/g,En=`%separator`;function Dn(e,t,n=!1){let r;if(t===`s`||t===`pageTitle`)r=e.pageTitle;else if(t.includes(`.`)){let n=t.indexOf(`.`);r=e[t.substring(0,n)]?.[t.substring(n+1)]}else r=e[t];if(r!==void 0)return n?(r||``).replace(Sn,`\\\\`).replace(Cn,`\\u003C`).replace(wn,`\\"`):r||``}function On(e,t,n,r=!1){if(typeof e!=`string`||!e.includes(`%`))return e;let i=e;try{i=decodeURI(e)}catch{}let a=i.match(Tn);if(!a)return e;let o=e.includes(En);return e=e.replace(Tn,e=>{if(e===En||!a.includes(e))return e;let n=Dn(t,e.slice(1),r);return n===void 0?e:n}).trim(),o&&(e=e.split(En).map(e=>e.trim()).filter(e=>e!==``).join(n?` ${n} `:` `)),e}var kn=(e,t)=>e._w===t._w?e._p-t._p:e._w-t._w,An=e=>e.includes(`:key`)?e:e.split(`:`).join(`:key:`),jn=xn({key:`aliasSorting`,hooks:{"tags:resolve":e=>{let t=!1;for(let n of e.tags){let r=n.tagPriority;if(!r)continue;let i=String(r);if(i.startsWith(`before:`)){let r=An(i.slice(7)),a=e.tagMap.get(r);a&&(typeof a.tagPriority==`number`&&(n.tagPriority=a.tagPriority),n._p=a._p-1,t=!0)}else if(i.startsWith(`after:`)){let r=An(i.slice(6)),a=e.tagMap.get(r);a&&(typeof a.tagPriority==`number`&&(n.tagPriority=a.tagPriority),n._p=a._p+1,t=!0)}}t&&(e.tags=e.tags.sort(kn))}}}),Mn=xn({key:`deprecations`,hooks:{"entries:normalize":({tags:e})=>{for(let t of e)t.props.children&&(t.innerHTML=t.props.children,delete t.props.children),t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),`body`in t.props&&(t.props.body&&(t.tagPosition=`bodyClose`),delete t.props.body),t.props.renderPriority!=null&&(t.tagPriority=t.props.renderPriority,delete t.props.renderPriority)}}});function Nn(e){return typeof e?.then==`function`}var Pn=256;function Fn(e,t){if(t===e.length)return;if(t===Pn){let n=Array(e.length),r=!1;for(;t<e.length;t++){let i=Ln(e[t]);n[t]=i,r||=Nn(i)}return r?n:void 0}let n=Ln(e[t]);if(Nn(n)){let r=Array(e.length);r[t]=n;for(let n=t+1;n<e.length;n++)r[n]=Ln(e[n]);return r}let r=Fn(e,t+1);return r&&(r[t]=n),r}function In(e,t,n){if(n===t.length)return;if(n===Pn){let r=Array(t.length),i=!1;for(;n<t.length;n++){let a=Ln(e[t[n]]);r[n]=a,i||=Nn(a)}return i?r:void 0}let r=Ln(e[t[n]]);if(Nn(r)){let i=Array(t.length);i[n]=r;for(let r=n+1;r<t.length;r++)i[r]=Ln(e[t[r]]);return i}let i=In(e,t,n+1);return i&&(i[n]=r),i}function Ln(e){if(typeof e==`function`)return e;if(Nn(e))return Promise.resolve(e).then(Ln);if(Array.isArray(e)){let t=Fn(e,0);return t?Promise.all(t):e}if(e?.constructor===Object){let t=Object.keys(e),n=In(e,t,0);if(n)return Promise.all(n).then(e=>Object.fromEntries(t.map((t,n)=>[t,e[n]])))}return e}var Rn=xn(e=>{let t=new WeakMap;return{key:`promises`,hooks:{"entries:resolve":n=>{for(let r=n.entries.length-1;r>=0;r--){let i=n.entries[r],a=i.input;if(t.get(i)===a){n.entries.splice(r,1);continue}let o=Ln(a);if(!Nn(o)){t.delete(i);continue}t.set(i,a),n.entries.splice(r,1),Promise.resolve(o).then(n=>{t.get(i)===a&&(t.delete(i),i.input=n,delete i._tags,e.invalidate?.())},()=>{t.get(i)===a&&t.delete(i)})}}}}},`promises`),zn={meta:`content`,link:`href`,htmlAttrs:`lang`},Bn=[`innerHTML`,`textContent`];function Vn(e,t,n,r=!1){return typeof e==`string`&&e.includes(`%`)?On(e,t,n,r):e}var Hn=xn(e=>({key:`template-params`,hooks:{"tags:resolve":({tagMap:t,tags:n})=>{let r=t.get(`templateParams`)?.props||{},i=r.separator||`|`;delete r.separator,r.pageTitle=Vn(r.pageTitle||e._title||``,r,i);for(let e of n){if(e.processTemplateParams===!1)continue;let t=zn[e.tag];if(t&&typeof e.props[t]==`string`)e.props[t]=Vn(e.props[t],r,i);else if(e.processTemplateParams||e.tag===`titleTemplate`||e.tag===`title`)for(let t of Bn)typeof e[t]==`string`&&(e[t]=Vn(e[t],r,i,e.tag===`script`&&typeof e.props.type==`string`&&e.props.type.endsWith(`json`)))}e._templateParams=r,e._separator=i},"tags:afterResolve":({tagMap:t})=>{let n=t.get(`title`);n?.textContent&&n.processTemplateParams!==!1&&(n.textContent=Vn(n.textContent,e._templateParams,e._separator))}}}),`template-params`),Un=new Set([`link`,`style`,`script`,`noscript`]),Wn=new Set([`title`,`titleTemplate`,`script`,`style`,`noscript`]),Gn=new Set([`base`,`meta`,`link`,`style`,`script`,`noscript`]),Kn=new Set([`title`,`base`,`htmlAttrs`,`bodyAttrs`,`meta`,`link`,`style`,`script`,`noscript`]),qn=new Set([`base`,`title`,`titleTemplate`,`bodyAttrs`,`htmlAttrs`,`templateParams`]),Jn=new Set([`key`,`tagPosition`,`tagPriority`,`tagDuplicateStrategy`,`innerHTML`,`textContent`,`processTemplateParams`]),Yn=new Set([`templateParams`,`htmlAttrs`,`bodyAttrs`]),Xn=new Set([`theme-color`,`google-site-verification`,`author`,`og:locale:alternate`,`og:image`,`og:video`,`og:audio`,`article:author`,`article:tag`,`book:author`,`book:tag`,`twitter:image`]),Zn={critical:-8,high:-1,low:2},Qn=e=>typeof e==`number`?Number.isFinite(e):e;function $n(e){return e===`__proto__`||e===`constructor`||e===`prototype`}function er(e){let t=new d;for(let n in e||{})t.hook(n,e[n]);return t}function tr(e,t,n){if(e.hooks?._hooks?.[t]?.length)return e.hooks?.callHook(t,n)}var nr=/^(?:viewport|description|keywords|robots)$/,rr=[`name`,`property`,`http-equiv`];function ir(e){let t=e.indexOf(`:`);if(t===-1)return!1;let n=e.slice(t+1);return Xn.has(n)||n.startsWith(`og:image:`)||n.startsWith(`og:video:`)||n.startsWith(`og:audio:`)||n.startsWith(`twitter:image:`)}function ar(e){let{props:t,tag:n,key:r}=e;if(qn.has(n))return n;if(n===`link`){if(t.rel===`canonical`)return`canonical`;if(t.rel===`alternate`&&t.hreflang)return`alternate:${t.hreflang}`}if(t.charset)return`charset`;if(n===`meta`)for(let e of rr){let n=t[e];if(n!==void 0)return`meta:${n}${(typeof n!=`string`||!n.includes(`:`))&&!nr.test(n)&&r?`:key:${r}`:``}`}return r?`${n}:key:${r}`:t.id?`${n}:id:${t.id}`:n===`link`&&t.rel&&t.href?`link:${t.rel}:${t.href}`:Wn.has(n)&&(e.textContent||e.innerHTML)?`${n}:content:${e.textContent||e.innerHTML}`:void 0}function or(e){let t=e._h||e._d||e.textContent||e.innerHTML;if(t)return t;let n=Object.keys(e.props).sort(),r=`${e.tag}:`,i=``;for(let t of n)r+=`${i}${t}:${String(e.props[t])}`,i=`,`;return r}function sr(e,t,n){if(n===`_resolver`)return e;typeof e==`function`&&(!n||n!==`titleTemplate`&&!n.startsWith(`on`))&&(e=e());let r=t?t(n,e):e;if(Array.isArray(r)){let e;for(let n=0;n<r.length;n++){let i=sr(r[n],t);e?e[n]=i:i!==r[n]&&(e=r.slice(0,n),e[n]=i)}return e||r}if(r?.constructor===Object){let e;for(let n in r){let i=$n(n),a=i?void 0:sr(r[n],t,n);if(!e&&(i||a!==r[n])){e={};for(let t in r){if(t===n)break;e[t]=r[t]}}e&&!i&&(e[n]=a)}return e||r}return r}var cr=/[\s"'<>/=\x00-\x1F\x7F]/;function lr(e,t){let n=e===`style`,r=n?new Map:new Set,i=e=>{if(e){if(n){let t=e.indexOf(`:`);t>0&&r.set(e.slice(0,t).trim(),e.slice(t+1).trim())}else e.split(` `).forEach(e=>e&&r.add(e))}};if(typeof t==`string`)(n?t.split(`;`):[t]).forEach(i);else if(Array.isArray(t))t.forEach(i);else if(t&&typeof t==`object`)for(let e in t){let a=t[e];a&&a!==`false`&&(n?r.set(e.trim(),String(a)):i(e))}return r}function ur(e,t){if(e.props=e.props||{},!t)return e;if(e.tag===`templateParams`)return e.props=t,e;let n=Gn.has(e.tag)||e.tag===`htmlAttrs`||e.tag===`bodyAttrs`;for(let r in t){if($n(r))continue;let i=r.startsWith(`data-`),a=n&&!Jn.has(r),o=a&&!i?r.toLowerCase():r;if(a&&(!o||cr.test(o)))continue;let s=t[r];if(s===null)e.props[o]=null;else if(r===`class`||r===`style`)e.props[r]=lr(r,s);else if(Jn.has(r)){if((r===`textContent`||r===`innerHTML`)&&typeof s==`object`){let n=t.type||`application/json`;(n.endsWith(`json`)||n===`speculationrules`||n===`importmap`)&&(e.props.type=n,e[r]=JSON.stringify(s))}else e[r]=s}else if(s!==void 0){let t=String(s),n=e.tag===`meta`&&o===`content`;e.props[o]=t===`true`||t===``?i||n?t:!0:!s&&i&&t===`false`?`false`:s}}return e}function dr(e,t){let n;return t.length&&(n=(e,n)=>{for(let r=0;r<t.length;r++)n=t[r](e,n);return n},e=n(void 0,e)),sr(e,n)}function fr(e,t){let n=ur({tag:e,props:{}},typeof t==`object`&&typeof t!=`function`?t:{[e===`script`||e===`noscript`||e===`style`?`innerHTML`:`textContent`]:t});if(n.key&&Un.has(n.tag)&&(n.props[`data-hid`]=n._h=n.key),n.tag===`script`&&typeof n.innerHTML==`object`&&(n.innerHTML=JSON.stringify(n.innerHTML),n.props.type=n.props.type||`application/json`),Array.isArray(n.props.content)){let e=[];for(let t of n.props.content)e.push({...n,props:{...n.props,content:t}});return e}return n}function pr(e,t){if(Array.isArray(t))for(let n of t)e.push(n);else e.push(t)}function mr(e,t){if(!e)return[];typeof e==`function`&&(e=e()),e=dr(e,t);let n=[];for(let t in e){let r=e[t];if(r!==void 0){if(Array.isArray(r))for(let e of r)pr(n,fr(t,e));else pr(n,fr(t,r))}}return n}var hr=/</g,gr=/<\/script/g,_r=(e,t)=>e._w===t._w?e._p-t._p:e._w-t._w,vr=()=>100;function yr(e){for(let t in e)return!1;return!0}var br=/^tags:|:render/;function xr(e,t){let n=(t[`entries:resolve`]?.length||0)+(t[`entries:normalize`]?.length||0);if(e._h!==n){e._h=n;for(let t of e.entries.values())delete t._tags}}function Sr(e){for(let t=0;t<e.length;t++){let n=e[t],r={...n.props};r.class instanceof Set&&(r.class=new Set(r.class)),r.style instanceof Map&&(r.style=new Map(r.style)),e[t]={...n,props:r}}}function Cr(e,t){let n=e.tags,r=0;for(let t of e.tagMap.values())if(Array.isArray(t))for(let e of t)n[r++]=e;else n[r++]=t;n.length=r,t&&n.sort(_r)}function wr(e){let t=!1;for(let n of e.tags.sort(_r)){let r=n._d||or(n);if(!r)continue;let i=e.tagMap.get(r);if(!i){e.tagMap.set(r,n);continue}if((n.tagDuplicateStrategy||(Yn.has(n.tag)?`merge`:null)||(n.key&&n.key===i.key?`merge`:null))===`merge`){let t={...i.props};for(let e in n.props)t[e]=e===`style`?new Map([...i.props.style||new Map,...n.props[e]]):e===`class`?new Set([...i.props.class||[],...n.props[e]]):n.props[e];e.tagMap.set(r,{...n,props:t})}else n._p>>10==i._p>>10&&n.tag===`meta`&&ir(r)?(e.tagMap.set(r,Object.assign([...Array.isArray(i)?i:[i],n],n)),t=!0):(n._w===i._w?n._p>i._p:n._w<i._w)&&e.tagMap.set(r,n)}return t}function Tr(e,t){let n=e.tagMap.get(`title`),r=e.tagMap.get(`titleTemplate`);if(t._title=n?.textContent,!r)return;let i=r.textContent;if(t._titleTemplate=i,!i)return;let a=typeof i==`function`?i(n?.textContent):i;typeof a==`string`&&!t.plugins.has(`template-params`)&&(a=a.replace(`%s`,n?.textContent||``)),n?a===null?e.tagMap.delete(`title`):e.tagMap.set(`title`,{...n,textContent:a}):e.tagMap.set(`titleTemplate`,{...r,tag:`title`,textContent:a})}function Er(e){let t=0;for(let n of e){let{innerHTML:r,tag:i,props:a}=n;if(!(!Kn.has(i)||yr(a)&&!Qn(r)&&!Qn(n.textContent))&&!(i===`meta`&&!Qn(a.content)&&!a[`http-equiv`]&&!a.charset)){if(i===`script`&&(r||n.textContent)){let e=String(a.type),t=e.endsWith(`json`)||e===`importmap`||e===`speculationrules`,i=e=>t?(typeof e==`string`?e:JSON.stringify(e)).replace(hr,`\\u003C`):typeof e==`string`?e.replace(gr,`<\\/script`):e;n={...n},r&&(n.innerHTML=i(r)),n.textContent&&(n.textContent=i(n.textContent)),n._d=ar(n)}e[t++]=n}}return e.length=t,e}function Dr(e,t){let n=t?.tagWeight??e.resolvedOptions._tagWeight??vr,r={tagMap:new Map,tags:[]},i=e.hooks?._hooks||{};xr(e,i);for(let t of e.entries.values())t._pending!==void 0&&(t.input=t._pending,delete t._pending,delete t._tags,delete t._precomputedTags);let a;(i[`entries:resolve`]?.length||i[`entries:normalize`]?.length)&&(a=[...e.entries.values()],i[`entries:resolve`]?.length&&tr(e,`entries:resolve`,{entries:a,...r})),xr(e,i);for(let t of a||e.entries.values()){let a=t._tags;if(!a){if(t._precomputedTags&&n===e.resolvedOptions._tagWeight&&!i[`entries:normalize`]?.length&&!i[`entries:resolve`]?.length&&(!t.options||yr(t.options)))a=t._precomputedTags;else{if(a=mr(t.input,e.resolvedOptions.propResolvers||[]),t.options&&!yr(t.options))for(let e of a)Object.assign(e,t.options);if(i[`entries:normalize`]?.length){let n={tags:a,entry:t};tr(e,`entries:normalize`,n),a=n.tags}for(let e=0;e<a.length;e++){let r=a[e];r._w=n(r),r._p=(t._i<<10)+e,r._d=ar(r),r._d||(r._h=or(r))}t._tags=a}}r.tags.push(...a)}for(let e in i)if(i[e]?.length&&br.test(e)){Sr(r.tags);break}let o=wr(r);return Tr(r,e),Cr(r,o),tr(e,`tags:beforeResolve`,r),tr(e,`tags:resolve`,r),tr(e,`tags:afterResolve`,r),Er(r.tags)}var Or=`usehead`;function kr(){if(Ce()){let e=T(Or);if(e)return e}throw Error(`useHead() was called without provide context, ensure you call it through the setup() function.`)}function Ar(e){return{install(t){t.config.globalProperties.$unhead=e,t.config.globalProperties.$head=e,t.provide(Or,e)}}.install}var jr=Object.assign((e,t)=>be(t)?fe(t):t,{_static:!0});function Mr(e,t={}){let n=t.head||kr();return n.ssr?n.push(e||{},t):Nr(n,e,t)}function Nr(e,t,n={}){let r=ee();if(r&&!r.active)return{patch(){},dispose(){},_i:-1};let i=E(!1);if(n.onRendered&&r){let e=n.onRendered;n={...n,onRendered:t=>r.run(()=>e(t))}}let a;return oe(()=>{let r=i.value?{}:sr(t,jr);a?a.patch(r):a=e.push(r,n)}),we()&&(h(()=>{a.dispose()}),ge(()=>{i.value=!0}),_e(()=>{i.value=!1})),a}function Pr(e,t){if(typeof t==`function`&&t.key&&e.plugins.has(t.key))return;let n=typeof t==`function`?t(e):t,r=n.key||String(e.plugins.size+1);if(!e.plugins.get(r)){e.plugins.set(r,n);for(let t in n.hooks||{})e.hooks?.hook(t,n.hooks[t])}}function Fr(e,t={}){let n=!t.document,r=new Map,i={_entryCount:1,_h:0,plugins:new Map,resolvedOptions:t,ssr:n,entries:r,hooks:void 0,render:()=>e(i),use:e=>Pr(i,e),push(e,t){let a=t?._index??i._entryCount++,o=t?{...t}:{};delete o.head,delete o.onRendered,delete o._index;let s={_i:a,input:e,options:o};return r.set(a,s),{_i:a,dispose(){r.delete(a)},patch(e){n?(s.input=e,delete s._tags):s._pending=e,r.has(a)||r.set(a,s)}}}};return t.init?.forEach(e=>e&&i.push(e)),i}function Ir(e){let t=e||s();return t.ssrContext?.head||t.runWithContext(()=>{if(Ce()){let e=T(`usehead`);if(!e)throw bn.NUXT_E6001();return e}})}function Lr(e,t={}){return Mr(e,{head:t.head||Ir(t.nuxt),...t})}var Rr=e({docsBase:o,reporters:a}),zr=e({docsBase:o,reporters:a}),Br=()=>location.protocol+`//`+location.host;function Vr(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),Ie(n,``)}return Ie(n,e)+r+i}function Hr(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=Vr(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:`pop`,direction:u?u>0?`forward`:`back`:``})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(F({},e.state,{scroll:Et()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function Ur(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Et():null}}function Wr(e){let{history:t,location:n}=window,r={value:Vr(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:Br()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,F({},t.state,Ur(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=F({},i.value,t.state,{forward:e,scroll:Et()});a(o.current,o,!0),a(e,F({},Ur(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function Gr(e){e=He(e);let t=Wr(e),n=Hr(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=F({location:``,base:e,go:r,createHref:St.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}var Kr={type:0,value:``},qr=/[a-zA-Z0-9_]/;function Jr(e){if(!e)return[[]];if(e===`/`)return[[Kr]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===0?a.push({type:0,value:l}):n===1||n===2||n===3?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)switch(c=e[s++],n){case 0:c===`\\`?(r=n,n=4):c===`/`?(l&&d(),o()):c===`:`?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:c===`(`?n=2:qr.test(c)?f():(d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case 2:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`)}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var Yr=`[^/]+?`,Xr={sensitive:!1,strict:!1,start:!0,end:!0},Zr=/[.+*?^${}()[\]/\\]/g;function Qr(e,t){let n=F({},Xr,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[90];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=40+(n.sensitive?.25:0);if(o.type===0)r||(i+=`/`),i+=o.value.replace(Zr,`\\$&`),s+=40;else if(o.type===1){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||Yr;if(u!==Yr){s+=10;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),u===`.*`&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===0)n+=e.value;else if(e.type===1){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Xe(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Xe(c)?c.join(`/`):c;if(!l){if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`)}n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function $r(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function ei(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=$r(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(ti(r))return 1;if(ti(i))return-1}return i.length-r.length}function ti(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var ni={strict:!1,end:!0,sensitive:!1};function ri(e,t,n){let r=Qr(Jr(e.path),n),i=F(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function ii(e,t){let n=[],r=new Map;t=Ze(ni,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=oi(e);s.aliasOf=r&&r.record;let l=Ze(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(oi(F({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=ri(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!ci(d)&&o(e.name)),fi(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Fe}function o(e){if(It(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=ui(e,n);n.splice(t,0,e),e.record.name&&!ci(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw ke(1,{location:e});s=i.record.name,a=F(ai(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&ai(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name,i.keys.forEach(e=>{e.optional&&!a[e.name]&&delete a[e.name]}));else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw ke(1,{location:e,currentLocation:t});s=i.record.name,a=F({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:li(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function ai(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function oi(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:si(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function si(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function ci(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function li(e){return e.reduce((e,t)=>F(e,t.meta),{})}function ui(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;ei(e,t[i])<0?r=i:n=i+1}let i=di(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function di(e){let t=e;for(;t=t.parent;)if(fi(t)&&ei(e,t)===0)return t}function fi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function pi(e){let t=T(Ot),n=T(Re),r=k(()=>{let n=A(e.to);return t.resolve(n)}),i=k(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(Me.bind(null,i));if(o>-1)return o;let s=vi(e[t-2]);return t>1&&vi(i)===s&&a[a.length-1].path!==s?a.findIndex(Me.bind(null,e[t-2])):o}),a=k(()=>i.value>-1&&_i(n.params,r.value.params)),o=k(()=>i.value>-1&&i.value===n.matched.length-1&&Ne(n.params,r.value.params));function s(n={}){if(gi(n)){let n=t[A(e.replace)?`replace`:`push`](A(e.to)).catch(Fe);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:k(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function mi(e){return e.length===1?e[0]:e}var hi=D({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:pi,setup(e,{slots:t}){let n=se(pi(e)),{options:r}=T(Ot),i=k(()=>({[yi(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[yi(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&mi(t.default(n));return e.custom?r:_(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function gi(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(e.button===void 0||e.button===0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function _i(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Xe(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function vi(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var yi=(e,t,n)=>e??t??n,bi=D({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=T(Le),i=k(()=>e.route||r.value),a=T(Qe,0),o=k(()=>{let e=A(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=k(()=>i.value.matched[o.value]);b(Qe,k(()=>o.value+1)),b(Ye,s),b(Le,i);let c=E();return g(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!Me(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return xi(n.default,{Component:l,route:r});let u=o.props[a],d=u?u===!0?r.params:typeof u==`function`?u(r):u:null,f=_(l,F({},d,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return xi(n.default,{Component:f,route:r})||f}}});function xi(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Si=bi;function Ci(e){let t=ii(e.routes,e),n=e.parseQuery||Oe,r=e.stringifyQuery||Ue,i=e.history,a=ze(),o=ze(),s=ze(),c=w(M),l=M;Ae&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=Ge.bind(null,e=>``+e),d=Ge.bind(null,tt),f=Ge.bind(null,mt);function p(e,n){let r,i;return It(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=F({},a||c.value),typeof e==`string`){let r=vt(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return F(r,o,{params:f(o.params),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=F({},e,{path:vt(n,e.path,a.path).path});else{let t=F({},e.params);for(let e in t)t[e]??delete t[e];o=F({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=Pe(r,F({},e,{hash:ft(l),path:s.path})),m=i.createHref(p);return F({fullPath:p,hash:l,query:r===Ue?yt(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?vt(n,e,c.value.path):F({},e)}function y(e,t){if(l!==e)return ke(8,{from:t,to:e})}function b(e){return x(e)}function ee(e){return b(F(v(e),{replace:!0}))}function te(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),F({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function x(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=te(n,i);if(u)return x(F(v(u),{state:typeof u==`object`?F({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&Je(r,i,n)&&(f=ke(16,{to:d,from:i}),O(i,i,!0,!1)),(f?Promise.resolve(f):S(d,i)).catch(e=>j(e)?j(e,2)?e:de(e):ue(e,d,i)).then(e=>{if(e){if(j(e,2))return x(F({replace:s},v(e.to),{state:typeof e.to==`object`?F({},a,e.to.state):a,force:o}),t||d)}else e=ae(d,i,!0,s,a);return C(d,i,e),e})}function ne(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function re(e){let t=me.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function S(e,t){let n,[r,i,s]=Pt(e,t);n=zt(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Ke(r,e,t))});let c=ne.bind(null,e,t);return n.push(c),ge(n).then(()=>{n=[];for(let r of a.list())n.push(Ke(r,e,t));return n.push(c),ge(n)}).then(()=>{n=zt(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Ke(r,e,t))});return n.push(c),ge(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter){if(Xe(r.beforeEnter))for(let i of r.beforeEnter)n.push(Ke(i,e,t));else n.push(Ke(r.beforeEnter,e,t))}return n.push(c),ge(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=zt(s,`beforeRouteEnter`,e,t,re),n.push(c),ge(n))).then(()=>{n=[];for(let r of o.list())n.push(Ke(r,e,t));return n.push(c),ge(n)}).catch(e=>j(e,8)?e:Promise.reject(e))}function C(e,t,n){s.list().forEach(r=>re(()=>r(e,t,n)))}function ae(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===M,l=Ae?history.state:{};n&&(r||s?i.replace(e.fullPath,F({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,O(e,t,n,s),de()}let T;function oe(){T||=i.listen((e,t,n)=>{if(!he.listening)return;let r=_(e),a=te(r,he.currentRoute.value);if(a){x(F(a,{replace:!0,force:!0}),r).catch(Fe);return}l=r;let o=c.value;Ae&&Be(Lt(o.fullPath,n.delta),Et()),S(r,o).catch(e=>j(e,12)?e:j(e,2)?(x(F(v(e.to),{force:!0}),r).then(e=>{j(e,20)&&!n.delta&&n.type===`pop`&&i.go(-1,!1)}).catch(Fe),Promise.reject()):(n.delta&&i.go(-n.delta,!1),ue(e,r,o))).then(e=>{e||=ae(r,o,!1),e&&(n.delta&&!j(e,8)?i.go(-n.delta,!1):n.type===`pop`&&j(e,20)&&i.go(-1,!1)),C(r,o,e)}).catch(Fe)})}let E=ze(),se=ze(),le;function ue(e,t,n){de(e);let r=se.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function D(){return le&&c.value!==M?Promise.resolve():new Promise((e,t)=>{E.add([e,t])})}function de(e){return le||(le=!e,oe(),E.list().forEach(([t,n])=>e?n(e):t()),E.reset()),e}function O(t,n,r,i){let{scrollBehavior:a}=e;if(!Ae||!a)return Promise.resolve();let o=!r&&it(Lt(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return ie().then(()=>a(t,n,o)).then(e=>t===c.value&&e&&Ve(e)).catch(e=>t===c.value&&ue(e,t,n))}let fe=e=>i.go(e),pe,me=new Set,he={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:ee,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:se.add,isReady:D,install(e){e.component(`RouterLink`,hi),e.component(`RouterView`,Si),e.config.globalProperties.$router=he,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>A(c)}),Ae&&!pe&&c.value===M&&(pe=!0,b(i.location).catch(e=>{}));let t={};for(let e in M)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Ot,he),e.provide(Re,ce(t)),e.provide(Le,c);let n=e.unmount;me.add(e),e.unmount=function(){me.delete(e),me.size<1&&(l=M,T&&T(),T=null,c.value=M,pe=!1,le=!1),n()}}};function ge(e){return e.reduce((e,t)=>e.then(()=>re(t)),Promise.resolve())}return he}var wi=(e,t)=>[],Ti=wi,Ei=function(e){if(!e.includes(`%`))return e;let t=e.indexOf(`?`),n=t===-1?e:e.slice(0,t);try{return t===-1?decodeURI(n):decodeURI(n)+e.slice(t)}catch{return e}},Di=(e,t)=>{if(typeof e!=`string`)return e;let n=Ei(e);return t?n.toLowerCase():n},Oi=e=>P.sensitive?At({},...wi(``,Di(e,!1)).map(e=>e.data).reverse()):At({},...Ti(``,Di(e,!0)).map(e=>e.data).reverse()),ki=`modulepreload`,Ai=function(e,t){return new URL(e,t).href},ji={},I=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Ai(t,n),t=s(t),t in ji)return;ji[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:ki,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Mi=yn,Ni=Oi,Pi;function Fi(){let e;return e=Mi(_n(`builds/meta/${t().app.buildId}.json`),{responseType:`json`}).then(e=>{if(!e||typeof e!=`object`||!Array.isArray(e.prerendered))throw zr.NUXT_E5004();return e}),Pi=e,e.catch(t=>{Pi===e&&(Pi=void 0),zr.NUXT_E5002({cause:t})}),e}function Ii(){return Pi||Fi()}function Li(e){let t=typeof e==`string`?e:e.path;try{return Ni(t)}catch(e){return zr.NUXT_E5003({path:t,cause:e}),{}}}var Ri=2**32-1,zi=Ri-1,Bi=Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function Vi(e){let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null||Object.getPrototypeOf(t)===null||Object.getOwnPropertyNames(t).sort().join(`\0`)===Bi}function Hi(e){return Object.prototype.toString.call(e).slice(8,-1)}function Ui(e){return Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)}function Wi(e){return!(!Number.isInteger(e)||e<0||e>zi)}function Gi(e){return!(!Number.isInteger(e)||e<0||e>Ri)}function Ki(e){if(e.length===0||e.length>1&&e.charCodeAt(0)===48)return!1;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n<48||n>57)return!1}return Wi(+e)}function qi(e){for(var t=e.length-1;t>=0&&!Ki(e[t]);t--);return t+1}function Ji(e){let t=Object.keys(e);return t.length=qi(t),t}function Yi(e){return Uint8Array.fromBase64(e).buffer}function Xi(e){return Uint8Array.from(Buffer.from(e,`base64`)).buffer}function Zi(e){let t=atob(e),n=t.length,r=new Uint8Array(n);for(let e=0;e<n;e++)r[e]=t.charCodeAt(e);return r.buffer}var Qi=typeof Uint8Array.fromBase64==`function`,$i=typeof process==`object`&&process.versions?.node!==void 0,ea=Qi?Yi:$i?Xi:Zi;function ta(e,t){if(!t)return e;let n={};for(let r of Object.keys(e))n[r]=t[r]??e[r];return n}var na=Object.freeze({kind:`not-plain`}),ra=Object.freeze({kind:`symbol-keys`});Object.freeze({identify:e=>e,typeOf:e=>e===null?`null`:typeof e,toPrimitive:e=>e,tagOf:e=>Hi(e),isThenable:e=>typeof e.then==`function`,toPromise:e=>Promise.resolve(e),unbox:e=>e.valueOf(),toISOString:e=>isNaN(e.getDate())?``:e.toISOString(),toStringValue:e=>e.toString(),regExpInfo:e=>({source:e.source,flags:e.flags}),valuesOf:e=>e,entriesOf:e=>e,viewInfo:e=>({buffer:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength,length:e.length,bufferByteLength:e.buffer.byteLength}),toArrayBuffer:e=>e,lengthOf:e=>e.length,hasOwn:(e,t)=>Object.hasOwn(e,t),indicesOf:e=>Ji(e),shapeOf:e=>Vi(e)?Ui(e).length>0?ra:{kind:Object.getPrototypeOf(e)===null?`null-proto`:`plain`,keys:Object.keys(e)}:na,get:(e,t)=>e[t]});var ia=Object.freeze({fromPrimitive:e=>e,fromISOString:e=>new Date(e),fromStringValue:(e,t)=>e===`URL`?new URL(t):e===`URLSearchParams`?new URLSearchParams(t):Temporal[e.slice(9)].from(t),fromArrayBuffer:e=>e,fromRegExpInfo:(e,t)=>new RegExp(e,t),fromViewInfo:(e,t,n,r)=>{let i=globalThis[e];return n===void 0?new i(t):new i(t,n,r)},box:e=>Object(e),createArray:e=>Array(e),createSparseArray:e=>{let t=[];return t[zi]=void 0,delete t[zi],t.length=e,t},createObject:()=>({}),createNullPrototypeObject:()=>Object.create(null),createSet:()=>new Set,createMap:()=>new Map,set:(e,t,n)=>{e[t]=n},addValue:(e,t)=>{e.add(t)},addEntry:(e,t,n)=>{e.set(t,n)}});function aa(e,t,n){return oa(JSON.parse(e),t,n)}function oa(e,t,n){let r=ta(ia,n?.operations);if(typeof e==`number`)return s(e,!0);if(!Array.isArray(e)||e.length===0)throw Error(`Invalid input`);let i=e,a=Array(i.length),o=null;function s(e,n=!1){if(e===-1)return r.fromPrimitive(void 0);if(e===-3)return r.fromPrimitive(NaN);if(e===-4)return r.fromPrimitive(1/0);if(e===-5)return r.fromPrimitive(-1/0);if(e===-6)return r.fromPrimitive(-0);if(n||typeof e!=`number`)throw Error(`Invalid input`);if(e in a)return a[e];let c=i[e];if(!c||typeof c!=`object`)a[e]=r.fromPrimitive(c);else if(Array.isArray(c)){if(typeof c[0]==`string`){let n=c[0],l=t&&Object.hasOwn(t,n)?t[n]:void 0;if(l){let t=c[1];if(typeof t!=`number`&&(t=i.push(c[1])-1),Object.hasOwn(a,t))return a[e]=l(a[t]);if(o??=new Set,o.has(t))throw Error(`Invalid circular reference`);return o.add(t),a[e]=l(s(t)),o.delete(t),a[e]}switch(n){case`Date`:a[e]=r.fromISOString(c[1]);break;case`Set`:let t=r.createSet();a[e]=t;for(let e=1;e<c.length;e+=1)r.addValue(t,s(c[e]));break;case`Map`:let o=r.createMap();a[e]=o;for(let e=1;e<c.length;e+=2)r.addEntry(o,s(c[e]),s(c[e+1]));break;case`RegExp`:a[e]=r.fromRegExpInfo(c[1],c[2]);break;case`Object`:{let t=c[1];if(typeof i[t]==`object`&&i[t][0]!==`BigInt`)throw Error(`Invalid input`);a[e]=r.box(s(t));break}case`BigInt`:a[e]=r.fromPrimitive(BigInt(c[1]));break;case`null`:let l=r.createNullPrototypeObject();a[e]=l;for(let e=1;e<c.length;e+=2){if(c[e]===`__proto__`)throw Error("Cannot parse an object with a `__proto__` property");r.set(l,c[e],s(c[e+1]))}break;case`Int8Array`:case`Uint8Array`:case`Uint8ClampedArray`:case`Int16Array`:case`Uint16Array`:case`Float16Array`:case`Int32Array`:case`Uint32Array`:case`Float32Array`:case`Float64Array`:case`BigInt64Array`:case`BigUint64Array`:case`DataView`:{if(i[c[1]][0]!==`ArrayBuffer`)throw Error(`Invalid data`);let t=s(c[1]);a[e]=r.fromViewInfo(n,t,c[2],c[3]);break}case`ArrayBuffer`:{let t=c[1];if(typeof t!=`string`)throw Error(`Invalid ArrayBuffer encoding`);a[e]=r.fromArrayBuffer(ea(t));break}case`URL`:case`URLSearchParams`:case`Temporal.Duration`:case`Temporal.Instant`:case`Temporal.PlainDate`:case`Temporal.PlainTime`:case`Temporal.PlainDateTime`:case`Temporal.PlainMonthDay`:case`Temporal.PlainYearMonth`:case`Temporal.ZonedDateTime`:a[e]=r.fromStringValue(n,c[1]);break;default:throw Error(`Unknown type ${n}`)}}else if(c[0]===-7){let t=c[1];if(!Gi(t))throw Error(`Invalid input`);let n=r.createSparseArray(t);a[e]=n;for(let e=2;e<c.length;e+=2){let i=c[e];if(!Wi(i)||i>=t)throw Error(`Invalid input`);r.set(n,i,s(c[e+1]))}}else{let t=r.createArray(c.length);a[e]=t;for(let e=0;e<c.length;e+=1){let n=c[e];n!==-2&&r.set(t,e,s(n))}}}else{let t=r.createObject();a[e]=t;for(let e of Object.keys(c)){if(e===`__proto__`)throw Error("Cannot parse an object with a `__proto__` property");r.set(t,e,s(c[e]))}}return a[e]}return s(0)}async function sa(e,t={}){return await ga(e)&&await da(await ua(e,t),ma(e)?`default`:`force-cache`)||null}var ca=`_payload.json`,la=`_b`;async function ua(e,n={}){let r=new URL(e,`http://localhost`);if(r.host!==`localhost`||st(r.pathname,{acceptRelative:!0}))throw Rr.NUXT_E7001({url:e});let i=t(),a=n.hash||(n.fresh?Date.now():i.app.buildId),o=i.app.cdnURL,s=o&&await _a(e)?o:i.app.baseURL,c=dt(s,r.pathname,ca);return ma(e)||(r.search=``),a&&r.searchParams.set(la,String(a)),c+r.search}async function da(e,t){try{{let n=await fetch(e,{cache:t});return n.ok?await ba(await n.text()):null}}catch(t){Rr.NUXT_E7002({url:e,cause:t})}return null}function fa(e){if(e.redirect)return!1;if(e.prerender)return!0}function pa(e){return new URL(e,`http://localhost`).pathname}function ma(e){return!!Li({path:pa(e)}).payload}async function ha(e){e=pa(e),e=e===`/`?e:e.replace(/\/$/,``);try{return(await Ii()).prerendered.includes(e)}catch{return!1}}async function ga(e=rt().path){let t=Li({path:pa(e)});if(t.ssr===!1)return!1;let n=fa(t);return n===void 0?t.payload?!0:await ha(e):n}async function _a(e=rt().path){let t=fa(Li({path:pa(e)}));return t===void 0?await ha(e):t}var va=null;async function ya(){if(va)return va;let e=document.getElementById(`__NUXT_DATA__`);if(!e)return{};let t=await ba(e.textContent||``),n=e.dataset.src?await da(e.dataset.src,t.prerenderedAt?`force-cache`:`no-cache`):void 0;return va={...t,...n,...window.__NUXT__},va.config?.public&&(va.config.public=se(va.config.public)),va}async function ba(e){return await aa(e,s()._payloadRevivers)}function xa(e,t){s()._payloadRevivers[e]=t}function Sa(e){try{return JSON.parse(e)}catch{return e}}var Ca=[[`NuxtError`,e=>ut(e)],[`EmptyShallowRef`,e=>w(e===`_`?void 0:e===`0n`?BigInt(0):Sa(e))],[`EmptyRef`,e=>E(e===`_`?void 0:e===`0n`?BigInt(0):Sa(e))],[`ShallowRef`,e=>w(e)],[`ShallowReactive`,e=>ce(e)],[`Ref`,e=>E(e)],[`Reactive`,e=>se(e)]],wa=f({name:`nuxt:revive-payload:client`,order:-30,async setup(e){let t,n;for(let[e,t]of Ca)xa(e,t);Object.assign(e.payload,([t,n]=i(()=>e.runWithContext(ya)),t=await t,n(),t)),delete window.__NUXT__}},1);function Ta(e,t){t.push(u),e.vueApp.use(t);let n=!0,r=()=>{n=!1,t.render()};t.hooks?.hook(`dom:beforeRender`,e=>{e.shouldRender=!n}),e.hooks.hook(`page:start`,()=>{n=!0}),e.hooks.hook(`page:finish`,()=>{e.isHydrating||r()}),e.hooks.hook(`app:error`,r),e.hooks.hook(`app:suspense:resolve`,r);let i=t.push.bind(t);t.push=((t,n)=>{let r=i(t,n),a=r.dispose.bind(r);return r.dispose=()=>{let t=e[`~transitionPromise`];t?t.finally(a):a()},r})}function Ea(e,t,n){let r=e.push,i=e;i.ssr=!1,i.hooks=t,i.dirty=!!i.dirty,i.use=e=>Pr(i,e),i.render=()=>n(i);function a(){t.callHook(`entries:updated`,i),i._b||i.render()}return i.invalidate=()=>{for(let e of i.entries.values())delete e._tags;i.dirty=!0,a()},i.push=(n,o)=>{let s=o?.onRendered?t.hook(`dom:rendered`,o.onRendered):void 0,c=r(n,o),l=e.entries.get(c._i);return l&&(l._o=n),i.dirty=!0,a(),{_i:c._i,patch(e){c.patch(e),i.dirty=!0,a()},dispose(){s?.(),e.entries.has(c._i)&&(c.dispose(),i.invalidate())}}},i}var Da=/\s+/;function Oa(e={}){return t=>ja(t,e)}function ka(e){for(let t of e.entries.values())if(t._pending!==void 0)return!0;return!1}function Aa(e,t){let n={_d:t,_t:t.title,_e:new Map([[`htmlAttrs`,t.documentElement],[`bodyAttrs`,t.body]]),_p:{},_s:{},_l:new Map};for(let t of e.entries.values())if(t._o!==void 0){let e=t._o;for(let t of[`bodyAttrs`,`htmlAttrs`]){let r=e[t]?.class;if(typeof r==`string`){let e=n._e.get(t);for(let i of r.split(Da))i&&(n._p[`${t}:attr:class:${i}`]=()=>e.classList.remove(i))}}}return n}function ja(e,t={}){let n=t.document||e.resolvedOptions.document,r=e._dom;if(!n||e._du||r&&r._d===n&&!e.dirty&&!ka(e))return!1;let i=n.defaultView;e._du=!0;let a=!1;try{let o=function(e,t,n){d._s[e]=!n&&f[e]||t,delete f[e]},s=function(e,t,n,r,i,a){let s=`${e}:event:${t}`,c=d._l.get(s);if(c&&c[0]===a&&c[1]===n&&c[2]===r){o(s,c[4]);return}c?.[4]();let l=`data-${t}`,u=(e=>r.call(i,e)),f=()=>{a.removeEventListener(n,u),i.getAttribute(l)===``&&i.removeAttribute(l),d._l.get(s)?.[3]===u&&d._l.delete(s)};a.addEventListener(n,u),d._l.set(s,[a,n,r,u,f]),i.setAttribute(l,``),o(s,f,!0)},c=function({id:e,$el:t,tag:n}){if(d._e.set(e,t),!n.tag.endsWith(`Attrs`)){let r=n.textContent;r!=null&&r!==``&&(r!==t.textContent&&(t.textContent=r),o(`${e}:text`,()=>{t.textContent===r&&(t.textContent=``)},!0));let i=n.innerHTML;i!=null&&i!==``&&(i!==t.innerHTML&&(t.innerHTML=i),o(`${e}:html`,()=>{t.innerHTML===i&&(t.innerHTML=``)},!0));let a=`${e}:el`;o(a,f[a]||(()=>{t?.remove(),d._e.delete(e)}))}for(let r in n.props){let a=n.props[r];if(r[0]===`o`&&r[1]===`n`&&typeof a==`function`){let o=r.slice(2);t?.dataset?.[`${r}fired`]&&a.call(t,new((i?.Event)||Event)(o)),s(e,r,o,a,t,n.tag===`bodyAttrs`&&i?i:t);continue}let c=`${e}:attr:${r}`;if(r===`class`&&a)for(let e of a){let n=`${c}:${e}`;o(n,f[n]||(()=>t.classList.remove(e))),t.classList.contains(e)||t.classList.add(e)}else if(r===`style`&&a)for(let[e,n]of a){let r=`${c}:${e}`;o(r,f[r]||(()=>t.style.removeProperty(e))),t.style.setProperty(e,n)}else a!==!1&&a!==null&&(t.getAttribute(r)!==a&&t.setAttribute(r,a===!0?``:String(a)),o(c,f[c]||(()=>t.removeAttribute(r))))}},l={shouldRender:!0,tags:[]};if(tr(e,`dom:beforeRender`,l),!l.shouldRender)return!1;let u=r;if(u?._d!==n){if(u){for(let e in u._s)u._s[e]();for(let e in u._p)u._p[e]();u._s=u._p={},u._e.clear(),u._l.clear()}u=void 0}u?u._p=u._s:u=Aa(e,n),u._s={};let d=u,f=d._p,p=[],m={};e.dirty=!1;let h=Dr(e,t.tagWeight?{tagWeight:t.tagWeight}:void 0),g=[],_={};for(let e of h){let t=_[e._d]||0,r=(t?`${e._d}:${t}`:e._d)||e._h,i={tag:e,id:r,shouldRender:!0};if(e.tag===`meta`&&e._d&&ir(e._d)&&(_[e._d]=t+1),g.push(i),e.tag===`title`){n.title=e.textContent,o(`title:`,()=>n.title=d._t);continue}i.$el=d._e.get(r),i.$el?c(i):Gn.has(e.tag)&&p.push(i)}if(p.length){let e=new Set(d._e.values());for(let t of[...n.body.children,...n.head.children]){let n=t.tagName.toLowerCase();if(!Gn.has(n)||e.has(t))continue;let r={innerHTML:t.innerHTML};for(let e of t.getAttributeNames())r[e]=t.getAttribute(e);let i=ur({tag:n,props:{}},r);i.key=t.getAttribute(`data-hid`)||void 0;let a=ar(i)||or(i),o=a,s=1;for(;d._e.has(o);)o=`${a}:${s++}`;d._e.set(o,t)}}for(let e of p){let t=d._e.get(e.id);e.$el=t||n.createElement(e.tag.tag),c(e),t||(m[e.tag.tagPosition||`head`]??=n.createDocumentFragment()).appendChild(e.$el)}m.head&&n.head.appendChild(m.head),m.bodyOpen&&n.body.insertBefore(m.bodyOpen,n.body.firstChild),m.bodyClose&&n.body.appendChild(m.bodyClose);for(let e in f)f[e]();e._dom=d,a=!0,tr(e,`dom:rendered`,{renders:g})}catch(t){throw e.dirty=!0,t}finally{e._du=!1}return a&&(e.dirty||ka(e))&&ja(e,t),a}var Ma=e=>typeof e.tagPriority==`number`?e.tagPriority:100+(Zn[e.tagPriority]||0);function Na(e={}){e.document=e.document||(typeof window<`u`?document:void 0);let t=e.render||Oa({document:e.document}),n=Ea(Fr(t,{document:e.document,propResolvers:e.propResolvers,_tagWeight:Ma,init:[]}),er(e.hooks),t);return e.plugins?.forEach(e=>n.use(e)),e.init?.forEach(e=>e&&n.push(e)),n}function Pa(e={}){let t=Oa(),n,r=0;return n=Na({render:()=>{let e=++r;setTimeout(()=>{e===r&&t(n)},0)},...e}),n.install=Ar(n),n}var Fa={disableDefaults:!0,plugins:[Mn,Rn,Hn,jn]},Ia=f({name:`nuxt:head`,enforce:`pre`,setup(e){Ta(e,Pa(Fa))}}),La=/(:\w+)\([^)]+\)/g,Ra=/(:\w+)[?+*]/g,za=/:\w+/g,Ba=(e,t)=>t.path.replace(La,`$1`).replace(Ra,`$1`).replace(za,t=>e.params[t.slice(1)]?.toString()||``),Va=(e,t)=>{let n=e.route.matched.find(t=>t.components?.default===e.Component.type),r=t??n?.meta.key??(n&&Ba(e.route,n));return typeof r==`function`?r(e.route):r},Ha=(e,t)=>({default:()=>e?_(ue,e===!0?{}:e,t):t});function Ua(e){return Array.isArray(e)?e:[e]}var Wa=[_t(async e=>{let t,n;if(!e.meta?.validate)return;let r=([t,n]=i(()=>Promise.resolve(e.meta.validate(e))),t=await t,n(),t);if(r!==!0)return ut({fatal:!0,status:r&&(r.status||r.statusCode)||404,statusText:r&&(r.statusText||r.statusMessage)||`Page Not Found: ${e.fullPath}`,data:{path:e.fullPath}})},1),_t(e=>{let t=Li({path:e.path});if(t.redirect){let n=t.redirect.includes(`#`)?t.redirect:t.redirect+e.hash;return st(n,{acceptRelative:!0})?(window.location.href=n,!1):n}})],Ga={},Ka=[{name:`knave`,path:`/knave`,component:()=>I(()=>import(`./C-Y88i2u.js`),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)},{name:`knavechargen`,path:`/knavechargen`,component:()=>I(()=>import(`./BzXopiyq.js`),__vite__mapDeps([7,1,4,2,3,5,8]),import.meta.url)},{name:`knaveweapongen`,path:`/knaveweapongen`,component:()=>I(()=>import(`./CyBkNFpW.js`),__vite__mapDeps([9,1,4,2,3,5,10]),import.meta.url)},{name:`knaveweathergen`,path:`/knaveweathergen`,component:()=>I(()=>import(`./B6nZ2nrI.js`),__vite__mapDeps([11,1,4,2,3,5,12]),import.meta.url)},{name:`mineclonia`,path:`/mineclonia`,component:()=>I(()=>import(`./zXFNw7eK.js`),__vite__mapDeps([13,1,4,2,3,14]),import.meta.url)},{name:`tes3mp`,path:`/tes3mp`,component:()=>I(()=>import(`./CwCQkeE_.js`),__vite__mapDeps([15,1,4,2,3,14]),import.meta.url)},{name:`index`,path:`/`,component:()=>I(()=>import(`./Ckz_DNOy.js`),__vite__mapDeps([16,1,2,3,4]),import.meta.url)}];function qa(e,t,n){let{pathname:r,search:i,hash:a}=t,o=e.indexOf(`#`);if(o>-1){let t=a.includes(e.slice(o))?e.slice(o).length:1,n=a.slice(t);return n[0]!==`/`&&(n=`/`+n),ht(n,``)}let s=ht(r,e),c=!n||xt(s,n)?s:n;return c+(c.includes(`?`)?``:i)+a}var Ja=f({name:`nuxt:router`,enforce:`pre`,async setup(e){let n,r,a=t().app.baseURL,o=P.history?.(a)??Gr(a),s=P.routes?([n,r]=i(()=>P.routes(Ka)),n=await n,r(),n??Ka):Ka,c,l=Ci({...P,scrollBehavior:(e,t,n)=>{if(t===M){c=n;return}if(P.scrollBehavior){if(l.options.scrollBehavior=P.scrollBehavior,`scrollRestoration`in window.history){let e=l.beforeEach(()=>{e(),window.history.scrollRestoration=`manual`})}return P.scrollBehavior(e,M,c||n)}},history:o,routes:s});`scrollRestoration`in window.history&&(window.history.scrollRestoration=`auto`),e.vueApp.use(l);let u=w(l.currentRoute.value);l.afterEach((e,t)=>{u.value=t}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>u.value});let d=qa(a,window.location,e.payload.path),f=w(l.currentRoute.value),p=()=>{f.value=l.currentRoute.value};l.afterEach((e,t)=>{let n=e.matched.at(-1)?.components?.default,r=t.matched.at(-1)?.components?.default;if(n===r){Va({route:e,Component:{type:n}})===Va({route:t,Component:{type:r}})&&p();return}e.matched.length<t.matched.length&&e.matched.every((e,n)=>e.components?.default===t.matched[n]?.components?.default)&&p()});let m={sync:p};for(let e in f.value)Object.defineProperty(m,e,{get:()=>f.value[e],enumerable:!0});e._route=ce(m),e._middleware||={global:[],named:{}};let h=kt();l.afterEach(async(t,n,r)=>{delete e._processingMiddleware,!e.isHydrating&&h.value&&await e.runWithContext(De),r&&await e.callHook(`page:loading:end`)});try{[n,r]=i(()=>l.isReady()),await n,r()}catch(t){[n,r]=i(()=>We(e,t)),await n,r()}let g=d===l.currentRoute.value.fullPath?l.currentRoute.value:l.resolve(d),_=l.currentRoute.value.fullPath,v=e.isHydrating&&e.payload.prerenderedAt&&e.payload.path&&d!==e.payload.path&&xt(l.currentRoute.value.path,e.payload.path);p();function y(t){!e.isHydrating&&t.fullPath!==qa(a,window.location)&&o.push(t.fullPath)}let b=e.payload.state._layout;return l.beforeEach(async(t,n)=>{await e.callHook(`page:loading:start`),t.meta=se(t.meta),e.isHydrating&&b&&!ne(t.meta.layout)&&(t.meta.layout=b),e._processingMiddleware=!0;{let r=new Set([...Wa,...e._middleware.global]);for(let e of t.matched){let t=e.meta.middleware;if(t)for(let e of Ua(t))r.add(e)}let i=Li({path:t.path});if(i.appMiddleware)for(let e in i.appMiddleware)i.appMiddleware[e]?r.add(e):r.delete(e);for(let i of r){let r=typeof i==`string`?e._middleware.named[i]||await Ga[i]?.().then(e=>e.default||e):i;if(!r)throw nt.NUXT_E2004({entry:String(i),validMiddleware:void 0});try{let i=await e.runWithContext(()=>r(t,n));if(!e.payload.serverRendered&&e.isHydrating&&(i===!1||i instanceof Error)){let t=i||ut({status:404,statusText:`Page Not Found: ${d}`});return await e.runWithContext(()=>wt(t)),!1}if(i===!0)continue;if(i===!1)return i;if(i)return jt(i)&&i.fatal&&(await e.runWithContext(()=>wt(i)),y(t)),i}catch(n){let r=ut(n);return r.fatal&&(await e.runWithContext(()=>wt(r)),y(t)),r}}}}),l.onError(async()=>{delete e._processingMiddleware,await e.callHook(`page:loading:end`)}),l.afterEach(t=>{if(t.matched.length===0&&!h.value)return e.runWithContext(()=>wt(ut({status:404,fatal:!1,statusText:`Page not found: ${t.fullPath}`,data:{path:t.fullPath}})))}),e.hooks.hookOnce(`app:created`,async()=>{try{if(`name`in g&&(g.name=void 0),l.currentRoute.value.fullPath===_){if(v){let t=l.resolve(e.payload.path);`name`in t&&(t.name=void 0),await l.replace({...t,force:!0});let n=()=>{e[`~restoreDeferredRoute`]&&(e[`~restoreDeferredRoute`]=void 0,l.currentRoute.value=l.resolve(d),p(),l.replace({...g,force:!0}).catch(()=>{}))};e[`~restoreDeferredRoute`]=n,e.hooks.hookOnce(`app:suspense:resolve`,n)}else await l.replace({...g,force:!0})}l.options.scrollBehavior=P.scrollBehavior}catch(t){await We(e,t)}}),{provide:{router:l}}}},1),Ya=f({name:`nuxt:payload`,setup(e){let t=new Set;N().beforeResolve(async(n,r)=>{let i=ma(n.path),a=i?pt(n.fullPath):n.path;if(a===(i?pt(r.fullPath):r.path))return;let o=await sa(a);if(o){for(let n of t)delete e.static.data[n];for(let n in o.data)n in e.static.data||t.add(n),e.static.data[n]=o.data[n]}}),Tt(()=>{e.hooks.hook(`link:prefetch`,async e=>{let{hostname:t,pathname:n}=new URL(e,window.location.href);t===window.location.hostname&&await sa(e).catch(()=>{Rr.NUXT_E7003({url:e})})}),navigator.connection?.effectiveType!==`slow-2g`&&setTimeout(Ii,1e3)})}}),Xa=f(()=>{let e=N();Tt(()=>{e.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),Za=f(e=>{let t;async function n(){let r;try{r=await Ii()}catch(e){let t=e;if(!(`status`in t&&(t.status===404||t.status===403)))throw t}t&&clearTimeout(t),t=setTimeout(n,m);try{let n=await yn(_n(`builds/latest.json`)+`?${Date.now()}`);n.id!==r?.id&&(e.hooks.callHook(`app:manifest:update`,n),t&&clearTimeout(t))}catch{}}Tt(()=>{t=setTimeout(n,m)})});function Qa(e={}){let t=e.path||window.location.pathname,n=new URL(t,window.location.href);if(n.host!==window.location.host)throw nt.NUXT_E2010({path:t});if(n.protocol&&Nt(n.protocol))throw nt.NUXT_E2002({toPath:t,protocol:n.protocol});let r={};try{r=JSON.parse(sessionStorage.getItem(`nuxt:reload`)||`{}`)}catch{}if(e.force||r?.path!==t||r?.expires<Date.now()){try{sessionStorage.setItem(`nuxt:reload`,JSON.stringify({path:t,expires:Date.now()+(e.ttl??1e4)}))}catch{}if(e.persistState)try{sessionStorage.setItem(`nuxt:reload:state`,JSON.stringify({state:s().payload.state}))}catch{}window.location.pathname===t?window.location.reload():window.location.href=t}}var $a=f({name:`nuxt:chunk-reload-crawler`,setup(e){let t=!0;e.hooks.hookOnce(`app:suspense:resolve`,()=>{t=!1}),e.hook(`app:chunkError`,()=>{t&&Rt(navigator.userAgent)&&Qa()})}}),eo=f({name:`nuxt:chunk-reload`,setup(e){let n=N(),r=t(),i=new Set;n.beforeEach(()=>{i.clear()}),e.hook(`app:chunkError`,({error:e})=>{i.add(e)});function a(e){Qa({path:dt(r.app.baseURL,e.fullPath),persistState:!0})}e.hook(`app:manifest:update`,()=>{n.beforeResolve(a)}),n.onError((e,t)=>{i.has(e)&&a(t)})}}),to=f({name:`nuxt:island-link-navigation`,setup(e){}}),no=f({name:`nuxt:global-components`}),L={default:Te(()=>I(()=>import(`./BR7qq6Uk.js`).then(e=>e.default||e),__vite__mapDeps([17,1,18]),import.meta.url))},ro=f({name:`nuxt:prefetch`,setup(e){let t=N();e.hooks.hook(`app:mounted`,()=>{t.beforeEach(async e=>{let t=e?.meta?.layout;t&&typeof L[t]==`function`&&await L[t]()})}),e.hooks.hook(`link:prefetch`,e=>{if(st(e))return;let n=t.resolve(e);if(!n)return;let r=n.meta.layout,i=Ua(n.meta.middleware).filter(e=>typeof e==`string`);for(let e of i){let t=Ga[e];typeof t==`function`&&t()}typeof r==`string`&&r in L&&gt(L[r])})}});function io(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ao(e){if(Array.isArray(e))return e}function oo(e){if(Array.isArray(e))return io(e)}function so(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function co(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,yo(r.key),r)}}function lo(e,t,n){return t&&co(e.prototype,t),n&&co(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function uo(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=xo(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function R(e,t,n){return(t=yo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fo(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function po(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function mo(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ho(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function go(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?go(Object(n),!0).forEach(function(t){R(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):go(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _o(e,t){return ao(e)||po(e,t)||xo(e,t)||mo()}function B(e){return oo(e)||fo(e)||xo(e)||ho()}function vo(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function yo(e){var t=vo(e,`string`);return typeof t==`symbol`?t:t+``}function bo(e){"@babel/helpers - typeof";return bo=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},bo(e)}function xo(e,t){if(e){if(typeof e==`string`)return io(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?io(e,t):void 0}}var So=function(){},Co={},wo={},To=null,Eo={mark:So,measure:So};try{typeof window<`u`&&(Co=window),typeof document<`u`&&(wo=document),typeof MutationObserver<`u`&&(To=MutationObserver),typeof performance<`u`&&(Eo=performance)}catch{}var Do=(Co.navigator||{}).userAgent,Oo=Do===void 0?``:Do,ko=Co,V=wo,Ao=To,jo=Eo;ko.document;var H=!!V.documentElement&&!!V.head&&typeof V.addEventListener==`function`&&typeof V.createElement==`function`,Mo=~Oo.indexOf(`MSIE`)||~Oo.indexOf(`Trident/`),No,Po=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Fo=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Io={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Lo={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ro=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],U=`classic`,zo=`duotone`,Bo=`sharp`,Vo=`sharp-duotone`,Ho=`chisel`,Uo=`etch`,Wo=`graphite`,Go=`jelly`,Ko=`jelly-duo`,qo=`jelly-fill`,Jo=`mosaic`,Yo=`notdog`,Xo=`notdog-duo`,Zo=`pixel`,Qo=`slab`,$o=`slab-duo`,es=`slab-press`,ts=`slab-press-duo`,ns=`thumbprint`,rs=`utility`,is=`utility-duo`,as=`utility-fill`,os=`vellum`,ss=`whiteboard`,cs=`Classic`,ls=`Duotone`,us=`Sharp`,ds=`Sharp Duotone`,fs=`Chisel`,ps=`Etch`,ms=`Graphite`,hs=`Jelly`,gs=`Jelly Duo`,_s=`Jelly Fill`,vs=`Mosaic`,ys=`Notdog`,bs=`Notdog Duo`,xs=`Pixel`,Ss=`Slab`,Cs=`Slab Duo`,ws=`Slab Press`,Ts=`Slab Press Duo`,Es=`Thumbprint`,Ds=`Utility`,Os=`Utility Duo`,ks=`Utility Fill`,As=`Vellum`,js=`Whiteboard`,Ms=[U,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss];No={},R(R(R(R(R(R(R(R(R(R(No,U,cs),zo,ls),Bo,us),Vo,ds),Ho,fs),Uo,ps),Wo,ms),Go,hs),Ko,gs),qo,_s),R(R(R(R(R(R(R(R(R(R(No,Jo,vs),Yo,ys),Xo,bs),Zo,xs),Qo,Ss),$o,Cs),es,ws),ts,Ts),ns,Es),rs,Ds),R(R(R(R(No,is,Os),as,ks),os,As),ss,js);var Ns={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Ps={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},Fs=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),Is={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},Ls=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Rs={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},zs=[`kit`];R(R({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Bs={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},Vs={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},Hs={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Us={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Ws,Gs={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ks=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];Ws={},R(R(R(R(R(R(R(R(R(R(Ws,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),R(R(R(R(R(R(R(R(R(R(Ws,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),R(R(R(R(Ws,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),R(R({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var qs={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Js={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Ys={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},Xs=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Ks,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Zs=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Qs=[1,2,3,4,5,6,7,8,9,10],$s=Qs.concat([11,12,13,14,15,16,17,18,19,20]),ec=[].concat(B(Object.keys(Js)),Zs,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,Gs.GROUP,Gs.SWAP_OPACITY,Gs.PRIMARY,Gs.SECONDARY],Qs.map(function(e){return`${e}x`}),$s.map(function(e){return`w-${e}`})),tc={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},W=`___FONT_AWESOME___`,nc=16,rc=`fa`,ic=`svg-inline--fa`,ac=`data-fa-i2svg`,oc=`data-fa-pseudo-element`,sc=`data-fa-pseudo-element-pending`,cc=`data-prefix`,lc=`data-icon`,uc=`fontawesome-i2svg`,dc=`async`,fc=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],pc=[`::before`,`::after`,`:before`,`:after`],mc=function(){try{return!0}catch{return!1}}();function hc(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[U]}})}var gc=z({},Io);gc[U]=z(z(z(z({},{"fa-duotone":`duotone`}),Io[U]),Rs.kit),Rs[`kit-duotone`]);var _c=hc(gc),vc=z({},Is);vc[U]=z(z(z(z({},{duotone:`fad`}),vc[U]),Us.kit),Us[`kit-duotone`]);var yc=hc(vc),bc=z({},Ys);bc[U]=z(z({},bc[U]),Hs.kit);var xc=hc(bc),Sc=z({},qs);Sc[U]=z(z({},Sc[U]),Bs.kit),hc(Sc);var Cc=Po,wc=`fa-layers-text`,Tc=Fo;hc(z({},Ns));var Ec=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Dc=Lo,Oc=[].concat(B(zs),B(ec)),kc=ko.FontAwesomeConfig||{};function Ac(e){var t=V.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function jc(e){return e===``?!0:e===`false`?!1:e===`true`||e}V&&typeof V.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=_o(e,2),n=t[0],r=t[1],i=jc(Ac(n));i!=null&&(kc[r]=i)});var Mc={styleDefault:`solid`,familyDefault:U,cssPrefix:rc,replacementClass:ic,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};kc.familyPrefix&&(kc.cssPrefix=kc.familyPrefix);var Nc=z(z({},Mc),kc);Nc.autoReplaceSvg||(Nc.observeMutations=!1);var G={};Object.keys(Mc).forEach(function(e){Object.defineProperty(G,e,{enumerable:!0,set:function(t){Nc[e]=t,Pc.forEach(function(e){return e(G)})},get:function(){return Nc[e]}})}),Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(e){Nc.cssPrefix=e,Pc.forEach(function(e){return e(G)})},get:function(){return Nc.cssPrefix}}),ko.FontAwesomeConfig=G;var Pc=[];function Fc(e){return Pc.push(e),function(){Pc.splice(Pc.indexOf(e),1)}}var K=nc,q={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ic(e){if(!(!e||!H)){var t=V.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=V.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return V.head.insertBefore(t,r),e}}var Lc=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function Rc(){for(var e=12,t=``;e-->0;)t+=Lc[Math.random()*62|0];return t}function zc(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Bc(e){return e.classList?zc(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function Vc(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Hc(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${Vc(e[n])}" `},``).trim()}function Uc(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Wc(e){return e.size!==q.size||e.x!==q.x||e.y!==q.y||e.rotate!==q.rotate||e.flipX||e.flipY}function Gc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Kc(e){var t=e.transform,n=e.width,r=n===void 0?nc:n,i=e.height,a=i===void 0?nc:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&Mo?`translate(${t.x/K-r/2}em, ${t.y/K-a/2}em) `:s?`translate(calc(-50% + ${t.x/K}em), calc(-50% + ${t.y/K}em)) `:`translate(${t.x/K}em, ${t.y/K}em) `,c+=`scale(${t.size/K*(t.flipX?-1:1)}, ${t.size/K*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var qc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Jc(){var e=rc,t=ic,n=G.cssPrefix,r=G.replacementClass,i=qc;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Yc=!1;function Xc(){G.autoAddCss&&!Yc&&(Ic(Jc()),Yc=!0)}var Zc={mixout:function(){return{dom:{css:Jc,insertCss:Xc}}},hooks:function(){return{beforeDOMElementCreation:function(){Xc()},beforeI2svg:function(){Xc()}}}},J=ko||{};J[W]||(J[W]={}),J[W].styles||(J[W].styles={}),J[W].hooks||(J[W].hooks={}),J[W].shims||(J[W].shims=[]);var Y=J[W],Qc=[],$c=function(){V.removeEventListener(`DOMContentLoaded`,$c),el=1,Qc.map(function(e){return e()})},el=!1;H&&(el=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),el||V.addEventListener(`DOMContentLoaded`,$c));function tl(e){H&&(el?setTimeout(e,0):Qc.push(e))}function nl(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?Vc(e):`<${t} ${Hc(r)}>${a.map(nl).join(``)}</${t}>`}function rl(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var il=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},al=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:il(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function ol(e){return B(e).length===1?e.codePointAt(0).toString(16):null}function sl(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function cl(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=sl(t);typeof Y.hooks.addPack==`function`&&!r?Y.hooks.addPack(e,sl(t)):Y.styles[e]=z(z({},Y.styles[e]||{}),i),e===`fas`&&cl(`fa`,t)}var ll=Y.styles,ul=Y.shims,dl=Object.keys(xc),fl=dl.reduce(function(e,t){return e[t]=Object.keys(xc[t]),e},{}),pl=null,ml={},hl={},gl={},_l={},vl={};function yl(e){return~Oc.indexOf(e)}function bl(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!yl(i)?i:null}var xl=function(){var e=function(e){return al(ll,function(t,n,r){return t[r]=al(n,e,{}),t},{})};ml=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),hl=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),vl=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in ll||G.autoFetchSvg,n=al(ul,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});gl=n.names,_l=n.unicodes,pl=kl(G.styleDefault,{family:G.familyDefault})};Fc(function(e){pl=kl(e.styleDefault,{family:G.familyDefault})}),xl();function Sl(e,t){return(ml[e]||{})[t]}function Cl(e,t){return(hl[e]||{})[t]}function wl(e,t){return(vl[e]||{})[t]}function Tl(e){return gl[e]||{prefix:null,iconName:null}}function El(e){var t=_l[e],n=Sl(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function X(){return pl}var Dl=function(){return{prefix:null,iconName:null,rest:[]}};function Ol(e){var t=U,n=dl.reduce(function(e,t){return e[t]=`${G.cssPrefix}-${t}`,e},{});return Ms.forEach(function(r){(e.includes(n[r])||e.some(function(e){return fl[r].includes(e)}))&&(t=r)}),t}function kl(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?U:t,r=_c[n][e];if(n===zo&&!e)return`fad`;var i=yc[n][e]||yc[n][r],a=e in Y.styles?e:null;return i||a||null}function Al(e){var t=[],n=null;return e.forEach(function(e){var r=bl(G.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function jl(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Ml=Xs.concat(Ls);function Nl(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=jl(e.filter(function(e){return Ml.includes(e)})),a=jl(e.filter(function(e){return!Ml.includes(e)})),o=_o(i.filter(function(e){return r=e,!Ro.includes(e)}),1)[0],s=o===void 0?null:o,c=Ol(i),l=z(z({},Al(a)),{},{prefix:kl(s,{family:c})});return z(z(z({},l),Ll({values:e,family:c,styles:ll,config:G,canonical:l,givenPrefix:r})),Pl(n,r,l))}function Pl(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Tl(i):{},o=wl(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!ll.far&&ll.fas&&!G.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Fl=Ms.filter(function(e){return e!==U||e!==zo}),Il=Object.keys(Ys).filter(function(e){return e!==U}).map(function(e){return Object.keys(Ys[e])}).flat();function Ll(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===zo,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Fl.includes(n)&&(Object.keys(s).find(function(e){return Il.includes(e)})||l.autoFetchSvg)&&(r.prefix=Fs.get(n).defaultShortPrefixId,r.iconName=wl(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=X()||`fas`),r}var Rl=function(){function e(){so(this,e),this.definitions={}}return lo(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=z(z({},e.definitions[n]||{}),t[n]),cl(n,t[n]);var r=xc[U][n];r&&cl(r,t[n]),xl()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),zl=[],Bl={},Vl={},Hl=Object.keys(Vl);function Ul(e,t){var n=t.mixoutsTo;return zl=e,Bl={},Object.keys(Vl).forEach(function(e){Hl.indexOf(e)===-1&&delete Vl[e]}),zl.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),bo(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){Bl[e]||(Bl[e]=[]),Bl[e].push(r[e])})}e.provides&&e.provides(Vl)}),n}function Wl(e,t){var n=[...arguments].slice(2);return(Bl[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Gl(e){var t=[...arguments].slice(1);(Bl[e]||[]).forEach(function(e){e.apply(null,t)})}function Kl(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Vl[e]?Vl[e].apply(null,t):void 0}function ql(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||X();if(t)return t=wl(n,t)||t,rl(Jl.definitions,n,t)||rl(Y.styles,n,t)}var Jl=new Rl,Z={noAuto:function(){G.autoReplaceSvg=!1,G.observeMutations=!1,Gl(`noAuto`)},config:G,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return H?(Gl(`beforeI2svg`,e),Kl(`pseudoElements2svg`,e),Kl(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,tl(function(){Yl({autoReplaceSvgRoot:t}),Gl(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(bo(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:wl(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=kl(e[0]);return{prefix:n,iconName:wl(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${G.cssPrefix}-`)>-1||e.match(Cc))){var r=Nl(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||X(),iconName:wl(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=X();return{prefix:i,iconName:wl(i,e)||e}}}},library:Jl,findIconDefinition:ql,toHtml:nl},Yl=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?V:e;(Object.keys(Y.styles).length>0||G.autoFetchSvg)&&H&&G.autoReplaceSvg&&Z.dom.i2svg({node:t})};function Xl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return nl(e)})}}),Object.defineProperty(e,"node",{get:function(){if(H){var t=V.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Zl(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Wc(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=Uc(z(z({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Ql(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${G.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:z(z({},i),{},{id:o}),children:r}]}]}function $l(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function eu(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[G.replacementClass,a?`${G.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:z(z({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!$l(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[ac]=``);var _=z(z({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:z({},l.styles)}),v=r.found&&n.found?Kl(`generateAbstractMask`,_)||{children:[],attributes:{}}:Kl(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Ql(_):Zl(_)}function tu(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=z(z({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[ac]=``);var l=z({},a.styles);Wc(i)&&(l.transform=Kc({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=Uc(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function nu(e){var t=e.content,n=e.extra,r=z(z({},n.attributes),{},{class:n.classes.join(` `)}),i=Uc(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var ru=Y.styles;function iu(e){var t=e[0],n=e[1],r=_o(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${G.cssPrefix}-${Dc.GROUP}`},children:[{tag:`path`,attributes:{class:`${G.cssPrefix}-${Dc.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${G.cssPrefix}-${Dc.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var au={found:!1,width:512,height:512};function ou(e,t){!mc&&!G.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function su(e,t){var n=t;return t===`fa`&&G.styleDefault!==null&&(t=X()),new Promise(function(r,i){if(n===`fa`){var a=Tl(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&ru[t]&&ru[t][e]){var o=ru[t][e];return r(iu(o))}ou(e,t),r(z(z({},au),{},{icon:G.showMissingIcons&&e&&Kl(`missingIconAbstract`)||{}}))})}var cu=function(){},lu=G.measurePerformance&&jo&&jo.mark&&jo.measure?jo:{mark:cu,measure:cu},uu=`FA "7.3.1"`,du=function(e){return lu.mark(`${uu} ${e} begins`),function(){return fu(e)}},fu=function(e){lu.mark(`${uu} ${e} ends`),lu.measure(`${uu} ${e}`,`${uu} ${e} begins`,`${uu} ${e} ends`)},pu={begin:du,end:fu},mu=function(){};function hu(e){return typeof(e.getAttribute?e.getAttribute(ac):null)==`string`}function gu(e){var t=e.getAttribute?e.getAttribute(cc):null,n=e.getAttribute?e.getAttribute(lc):null;return t&&n}function _u(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(G.replacementClass)}function vu(){return G.autoReplaceSvg===!0?Cu.replace:Cu[G.autoReplaceSvg]||Cu.replace}function yu(e){return V.createElementNS(`http://www.w3.org/2000/svg`,e)}function bu(e){return V.createElement(e)}function xu(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?yu:bu:t;if(typeof e==`string`)return V.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(xu(e,{ceFn:n}))}),r}function Su(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Cu={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(xu(e),t)}),t.getAttribute(ac)===null&&G.keepOriginalSource){var n=V.createComment(Su(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~Bc(t).indexOf(G.replacementClass))return Cu.replace(e);var r=RegExp(`${G.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===G.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return nl(e)}).join(`
`);t.setAttribute(ac,``),t.innerHTML=a}};function wu(e){e()}function Tu(e,t){var n=typeof t==`function`?t:mu;if(e.length===0)n();else{var r=wu;G.mutateApproach===dc&&(r=ko.requestAnimationFrame||wu),r(function(){var t=vu(),r=pu.begin(`mutate`);e.map(t),r(),n()})}}var Eu=!1;function Du(){Eu=!0}function Ou(){Eu=!1}var ku=null;function Au(e){if(Ao&&G.observeMutations){var t=e.treeCallback,n=t===void 0?mu:t,r=e.nodeCallback,i=r===void 0?mu:r,a=e.pseudoElementsCallback,o=a===void 0?mu:a,s=e.observeMutationsRoot,c=s===void 0?V:s;ku=new Ao(function(e){if(!Eu){var t=X();zc(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!hu(e.addedNodes[0])&&(G.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&G.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&hu(e.target)&&~Ec.indexOf(e.attributeName)){if(e.attributeName===`class`&&gu(e.target)){var r=Nl(Bc(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(cc,a||t),s&&e.target.setAttribute(lc,s)}else _u(e.target)&&i(e.target)}})}}),H&&ku.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ju(){ku&&ku.disconnect()}function Mu(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Nu(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Nl(Bc(e));return i.prefix||=X(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Cl(i.prefix,e.innerText)||Sl(i.prefix,ol(e.innerText))),!i.iconName&&G.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Pu(e){return zc(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Fu(){return{iconName:null,prefix:null,transform:q,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Iu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Nu(e),r=n.iconName,i=n.prefix,a=n.rest,o=Pu(e),s=Wl(`parseNodeAttributes`,{},e);return z({iconName:r,prefix:i,transform:q,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Mu(e):[],attributes:o}},s)}var Lu=Y.styles;function Ru(e){var t=G.autoReplaceSvg===`nest`?Iu(e,{styleParser:!1}):Iu(e);return~t.extra.classes.indexOf(wc)?Kl(`generateLayersText`,e,t):Kl(`generateSvgReplacementMutation`,e,t)}function zu(){return[].concat(B(Ls),B(Xs))}function Bu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!H)return Promise.resolve();var n=V.documentElement.classList,r=function(e){return n.add(`${uc}-${e}`)},i=function(e){return n.remove(`${uc}-${e}`)},a=G.autoFetchSvg?zu():Ro.concat(Object.keys(Lu));a.includes(`fa`)||a.push(`fa`);var o=[`.${wc}:not([${ac}])`].concat(a.map(function(e){return`.${e}:not([${ac}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=zc(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=pu.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Ru(t);n&&e.push(n)}catch(e){mc||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Tu(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Vu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ru(e).then(function(e){e&&Tu([e],t)})}function Hu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ql(t||{}),i=n.mask;return i&&=(i||{}).icon?i:ql(i||{}),e(r,z(z({},n),{},{mask:i}))}}var Uu=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?q:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return Xl(z({type:`icon`},e),function(){return Gl(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),eu({icons:{main:iu(v),mask:s?iu(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:z(z({},q),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Wu={mixout:function(){return{icon:Hu(Uu)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Bu,e.nodeCallback=Vu,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?V:t,r=e.callback;return Bu(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([su(n,r),o.iconName?su(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=_o(o,2),u=l[0],d=l[1];t([e,eu({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=Uc(a);o.length>0&&(n.style=o);var s;return Wc(i)&&(s=Kl(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Gu={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Xl({type:`layer`},function(){Gl(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${G.cssPrefix}-layers`].concat(B(r)).join(` `)},children:n}]})}}}},Ku={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Xl({type:`counter`,content:e},function(){return Gl(`beforeDOMElementCreation`,{content:e,params:t}),nu({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${G.cssPrefix}-layers-counter`].concat(B(a))}})})}}}},qu={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?q:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Xl({type:`text`,content:e},function(){return Gl(`beforeDOMElementCreation`,{content:e,params:t}),tu({content:e,transform:z(z({},q),r),extra:{attributes:s,styles:l,classes:[`${G.cssPrefix}-layers-text`].concat(B(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(Mo){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,tu({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Ju=RegExp(`"`,`ug`),Yu=[1105920,1112319],Xu=z(z(z(z({},{FontAwesome:{normal:`fas`,400:`fas`}}),Ps),tc),Vs),Zu=Object.keys(Xu).reduce(function(e,t){return e[t.toLowerCase()]=Xu[t],e},{}),Qu=Object.keys(Zu).reduce(function(e,t){var n=Zu[t];return e[t]=n[900]||B(Object.entries(n))[0][1],e},{});function $u(e){return ol(B(e.replace(Ju,``))[0]||``)}function ed(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Ju,``),r=n.codePointAt(0),i=r>=Yu[0]&&r<=Yu[1],a=n.length===2&&n[0]===n[1];return i||a||t}function td(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Zu[n]||{})[i]||Qu[n]}function nd(e,t){var n=`${sc}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=zc(e.children).filter(function(e){return e.getAttribute(oc)===t})[0],o=ko.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Tc),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=td(s,l),p=$u(d),m=c[0].startsWith(`FontAwesome`),h=ed(o),g=Sl(f,p),_=g;if(m){var v=El(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(cc)!==f||a.getAttribute(lc)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Fu(),b=y.extra;b.attributes[oc]=t,su(g,f).then(function(i){var a=eu(z(z({},y),{},{icons:{main:i,mask:Dl()},prefix:f,iconName:_,extra:b,watchable:!0})),o=V.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return nl(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function rd(e){return Promise.all([nd(e,`::before`),nd(e,`::after`)])}function id(e){return e.parentNode!==document.head&&!~fc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(oc)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var ad=function(e){return!!e&&pc.some(function(t){return e.includes(t)})},od=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=uo(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(ad(a)){var o=pc.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function sd(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(H){var n;if(t)n=e;else if(G.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=uo(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=uo(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=uo(od(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){G.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=zc(n).filter(id).map(rd),i=pu.begin(`searchPseudoElements`);Du(),Promise.all(r).then(function(){i(),Ou(),e()}).catch(function(){i(),Ou(),t()})})}}var cd={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=sd,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?V:t;G.searchPseudoElements&&sd(n)}}},ld=!1,ud={mixout:function(){return{dom:{unwatch:function(){Du(),ld=!0}}}},hooks:function(){return{bootstrap:function(){Au(Wl(`mutationObserverCallbacks`,{}))},noAuto:function(){ju()},watch:function(e){var t=e.observeMutationsRoot;ld?Ou():Au(Wl(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},dd=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},fd={mixout:function(){return{parse:{transform:function(e){return dd(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=dd(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:z({},a.outer),children:[{tag:`g`,attributes:z({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:z(z({},t.icon.attributes),a.path)}]}]}}}},pd={x:0,y:0,width:`100%`,height:`100%`};function md(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function hd(e){return e.tag===`g`?e.children:[e]}Ul([Zc,Wu,Gu,Ku,qu,cd,ud,fd,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Nl(n.split(` `).map(function(e){return e.trim()})):Dl();return r.prefix||=X(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=Gc({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:z(z({},pd),{},{fill:`white`})},p=c.children?{children:c.children.map(md)}:{},m={tag:`g`,attributes:z({},d.inner),children:[md(z({tag:c.tag,attributes:z(z({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:z({},d.outer),children:[m]},g=`mask-${a||Rc()}`,_=`clip-${a||Rc()}`,v={tag:`mask`,attributes:z(z({},pd),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:hd(u)},v]};return t.push(y,{tag:`rect`,attributes:z({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},pd)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;ko.matchMedia&&(t=ko.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:z(z({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=z(z({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:z(z({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:z(z({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:z(z({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:z(z({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:z(z({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:z(z({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:z(z({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:Z}),Z.noAuto;var gd=Z.config,_d=Z.library;Z.dom;var vd=Z.parse;Z.findIconDefinition,Z.toHtml;var yd=Z.icon;Z.layer;var bd=Z.text;Z.counter;function xd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Sd(e){if(Array.isArray(e))return xd(e)}function Q(e,t,n){return(t=Ad(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cd(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function wd(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Td(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Td(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Td(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ed(e,t){if(e==null)return{};var n,r,i=Dd(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Dd(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Od(e){return Sd(e)||Cd(e)||Md(e)||wd()}function kd(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ad(e){var t=kd(e,`string`);return typeof t==`symbol`?t:t+``}function jd(e){"@babel/helpers - typeof";return jd=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},jd(e)}function Md(e,t){if(e){if(typeof e==`string`)return xd(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?xd(e,t):void 0}}function Nd(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Q({},e,t):{}}function Pd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip===`horizontal`||e.flip===`both`,"fa-flip-vertical":e.flip===`vertical`||e.flip===`both`},Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(t,`fa-${e.size}`,e.size!==null),`fa-rotate-${e.rotation}`,e.rotation!==null),`fa-rotate-by`,e.rotateBy),`fa-pull-${e.pull}`,e.pull!==null),`fa-swap-opacity`,e.swapOpacity),`fa-bounce`,e.bounce),`fa-shake`,e.shake),`fa-beat`,e.beat),`fa-fade`,e.fade),`fa-beat-fade`,e.beatFade),Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(t,`fa-flash`,e.flash),`fa-spin-pulse`,e.spinPulse),`fa-spin-reverse`,e.spinReverse),`fa-width-auto`,e.widthAuto),`fa-canvas-square`,e.canvasSquare),`fa-canvas-roomy`,e.canvasRoomy),`fa-flip-360`,e.flip360),`fa-buzz`,e.buzz),`fa-float`,e.float),`fa-jello`,e.jello),Q(Q(Q(Q(Q(t,`fa-spin-snap`,e.spinSnap),`fa-spin-snap-4`,e.spinSnap4),`fa-spin-snap-8`,e.spinSnap8),`fa-swing`,e.swing),`fa-wag`,e.wag));return Object.keys(n).map(function(e){return n[e]?e:null}).filter(function(e){return e})}var Fd=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},Id={exports:{}};(function(e){(function(t){var n=function(e,t,r){if(!l(t)||d(t)||f(t)||p(t)||c(t))return t;var i,a=0,o=0;if(u(t))for(i=[],o=t.length;a<o;a++)i.push(n(e,t[a],r));else for(var s in i={},t)Object.prototype.hasOwnProperty.call(t,s)&&(i[e(s,r)]=n(e,t[s],r));return i},r=function(e,t){t||={};var n=t.separator||`_`,r=t.split||/(?=[A-Z])/;return e.split(r).join(n)},i=function(e){return m(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))},a=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},o=function(e,t){return r(e,t).toLowerCase()},s=Object.prototype.toString,c=function(e){return typeof e==`function`},l=function(e){return e===Object(e)},u=function(e){return s.call(e)==`[object Array]`},d=function(e){return s.call(e)==`[object Date]`},f=function(e){return s.call(e)==`[object RegExp]`},p=function(e){return s.call(e)==`[object Boolean]`},m=function(e){return e-=0,e===e},h=function(e,t){var n=t&&`process`in t?t.process:t;return typeof n==`function`?function(t,r){return n(t,e,r)}:e},g={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(e,t){return n(h(i,t),e)},decamelizeKeys:function(e,t){return n(h(o,t),e,t)},pascalizeKeys:function(e,t){return n(h(a,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(Fd)})(Id);var Ld=Id.exports,Rd=[`gradientFill`],zd=[`class`,`style`],Bd=[`type`,`stops`,`id`];function Vd(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=Ld.camelize(t.slice(0,n));return e[r]=t.slice(n+1).trim(),e},{})}function Hd(e){return e.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function Ud(e,t){return _(`stop`,$({key:`${t}-${e.offset}`,offset:e.offset,"stop-color":e.color},e.opacity!==void 0&&{"stop-opacity":e.opacity}))}function Wd(e){if(typeof e==`string`)return e;var t=(e.children||[]).map(Wd);return e.tag===`path`&&e.attributes&&`fill`in e.attributes?$($({},e),{},{attributes:$($({},e.attributes),{},{fill:void 0}),children:t}):$($({},e),{},{children:t})}function Gd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e==`string`)return e;var r=t.gradientFill,i=r===void 0?null:r,a=Ed(t,Rd),o=i||`fill`in n?Wd(e):e,s=(o.children||[]).map(function(e){return Gd(e,{},{})}),c=Object.keys(o.attributes||{}).reduce(function(e,t){var n=o.attributes[t];switch(t){case`class`:e.class=Hd(n);break;case`style`:e.style=Vd(n);break;default:e.attrs[t]=n}return e},{attrs:{},class:{},style:{}});n.class;var l=n.style,u=l===void 0?{}:l,d=Ed(n,zd);if(i&&i.id&&(i.type===`linear`||i.type===`radial`)){var f=i.type,p=i.stops,m=p===void 0?[]:p,h=i.id,g=Ed(i,Bd),v=_(f===`linear`?`linearGradient`:`radialGradient`,$($({},g),{},{id:h}),m.map(Ud));return _(o.tag,$($($($({},a),{},{class:c.class,style:$($({},c.style),u)},c.attrs),d),{},{fill:`url(#${h})`}),[v].concat(Od(s)))}return _(e.tag,$($($({},a),{},{class:c.class,style:$($({},c.style),u)},c.attrs),d),s)}var Kd=!1;try{Kd=!0}catch{}function qd(){if(!Kd&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function Jd(e){if(e&&jd(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(vd.icon)return vd.icon(e);if(e===null)return null;if(jd(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}var Yd=D({name:`FontAwesomeIcon`,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,`horizontal`,`vertical`,`both`].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return[`right`,`left`].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1},canvasSquare:{type:Boolean,default:!1},canvasRoomy:{type:Boolean,default:!1},gradientFill:{type:Object,default:null,validator:function(e){return typeof e.id!=`string`||!e.id?(console.warn(`FontAwesomeIcon: gradientFill.id must be a non-empty string`),!1):e.type!==`linear`&&e.type!==`radial`?(console.warn(`FontAwesomeIcon: gradientFill.type must be "linear" or "radial"`),!1):!0}},flip360:{type:Boolean,default:!1},buzz:{type:Boolean,default:!1},float:{type:Boolean,default:!1},jello:{type:Boolean,default:!1},spinSnap:{type:Boolean,default:!1},spinSnap4:{type:Boolean,default:!1},spinSnap8:{type:Boolean,default:!1},swing:{type:Boolean,default:!1},wag:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=k(function(){return Jd(e.icon)}),i=k(function(){return Nd(`classes`,Pd(e))}),a=k(function(){return Nd(`transform`,typeof e.transform==`string`?vd.transform(e.transform):e.transform)}),o=k(function(){return Nd(`mask`,Jd(e.mask))}),s=k(function(){var t=$($($($({},i.value),a.value),o.value),{},{symbol:e.symbol,maskId:e.maskId});return t.title=e.title,t.titleId=e.titleId,yd(r.value,t)});g(s,function(e){if(!e)return qd(`Could not find one or more icon(s)`,r.value,o.value)},{immediate:!0}),e.gradientFill&&e.symbol&&qd(`gradientFill is not supported when symbol is true and will be ignored`);var c=k(function(){return s.value?Gd(s.value.abstract[0],{gradientFill:e.symbol?null:e.gradientFill},n):null});return function(){return c.value}}});D({name:`FontAwesomeLayers`,props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,t){var n=t.slots,r=gd.familyPrefix,i=k(function(){return[`${r}-layers`].concat(Od(e.fixedWidth?[`${r}-fw`]:[]))});return function(){return _(`div`,{class:i.value},n.default?n.default():[])}}}),D({name:`FontAwesomeLayersText`,props:{value:{type:[String,Number],default:``},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return[`bottom-left`,`bottom-right`,`top-left`,`top-right`].indexOf(e)>-1}}},setup:function(e,t){var n=t.attrs,r=gd.familyPrefix,i=k(function(){return Nd(`classes`,[].concat(Od(e.counter?[`${r}-layers-counter`]:[]),Od(e.position?[`${r}-layers-${e.position}`]:[])))}),a=k(function(){return Nd(`transform`,typeof e.transform==`string`?vd.transform(e.transform):e.transform)}),o=k(function(){var t=bd(e.value.toString(),$($({},a.value),i.value)).abstract;return e.counter&&(t[0].attributes.class=t[0].attributes.class.replace(`fa-layers-text`,``)),t[0]}),s=k(function(){return Gd(o.value,{},n)});return function(){return s.value}}}),gd.autoAddCss=!1,_d.add({prefix:`fab`,iconName:`mastodon`,icon:[448,512,[],`f4f6`,`M433 179.1c0-97.2-63.7-125.7-63.7-125.7-62.5-28.7-228.6-28.4-290.5 0 0 0-63.7 28.5-63.7 125.7 0 115.7-6.6 259.4 105.6 289.1 40.5 10.7 75.3 13 103.3 11.4 50.8-2.8 79.3-18.1 79.3-18.1l-1.7-36.9s-36.3 11.4-77.1 10.1c-40.4-1.4-83-4.4-89.6-54-.6-4.6-.9-9.3-.9-13.9 85.6 20.9 158.7 9.1 178.7 6.7 56.1-6.7 105-41.3 111.2-72.9 9.8-49.8 9-121.5 9-121.5zM357.9 304.3l-46.6 0 0-114.2c0-49.7-64-51.6-64 6.9l0 62.5-46.3 0 0-62.5c0-58.5-64-56.6-64-6.9l0 114.2-46.7 0c0-122.1-5.2-147.9 18.4-175 25.9-28.9 79.8-30.8 103.8 6.1l11.6 19.5 11.6-19.5c24.1-37.1 78.1-34.8 103.8-6.1 23.7 27.3 18.4 53 18.4 175l0 0z`]},{prefix:`fab`,iconName:`twitch`,icon:[448,512,[],`f1e8`,`M359.4 103.5l-38.6 0 0 109.7 38.6 0 0-109.7zM253.2 103l-38.6 0 0 109.8 38.6 0 0-109.8zM89 0l-96.5 91.4 0 329.2 115.8 0 0 91.4 96.5-91.4 77.3 0 173.8-164.6 0-256-366.9 0zM417.3 237.8l-77.2 73.1-77.2 0-67.6 64 0-64-86.9 0 0-274.3 308.9 0 0 201.2z`]},{prefix:`fab`,iconName:`linkedin`,icon:[448,512,[],`f08c`,`M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z`]},{prefix:`fab`,iconName:`soundcloud`,icon:[640,512,[],`f1be`,`M640.2 298.6c-1.3 23.1-11.5 44.8-28.4 60.5s-39.2 24.4-62.3 24.1l-218 0c-4.8 0-9.4-2-12.8-5.4s-5.3-8-5.3-12.8l0-234.8c-.2-4 .9-8 3.1-11.4s5.3-6.1 9-7.7c0 0 20.1-13.9 62.3-13.9 25.8 0 51.1 6.9 73.3 20.1 17.3 10.2 32.3 23.8 44.1 40.1s20 34.8 24.2 54.4c7.5-2.1 15.3-3.2 23.1-3.2 11.7-.1 23.3 2.2 34.2 6.7s20.5 11.3 28.7 19.7 14.6 18.3 18.9 29.3 6.3 22.6 5.9 34.3zm-354-153.5c.1-1 0-2-.3-2.9s-.8-1.8-1.5-2.6-1.5-1.3-2.4-1.7c-1.8-.8-4-.8-5.8 0-.9 .4-1.7 1-2.4 1.7s-1.2 1.6-1.5 2.6-.4 1.9-.3 2.9c-6 78.9-10.6 152.9 0 231.6 .2 1.7 1 3.3 2.3 4.5 2.6 2.4 6.8 2.4 9.4 0 1.3-1.2 2.1-2.8 2.3-4.5 11.3-79.4 6.6-152 0-231.6l.2 0zm-44 27.3c-.2-1.8-1.1-3.5-2.4-4.7s-3.1-1.9-5-1.9-3.6 .7-5 1.9-2.2 2.9-2.4 4.7c-7.9 67.9-7.9 136.5 0 204.4 .3 1.8 1.2 3.4 2.5 4.5s3.1 1.8 4.8 1.8 3.5-.6 4.8-1.8 2.2-2.8 2.5-4.5c8.8-67.8 8.8-136.5 .1-204.4l.1 0zm-44.3-6.9c-.2-1.8-1-3.4-2.3-4.6s-3-1.8-4.8-1.8-3.5 .7-4.8 1.8-2.1 2.8-2.3 4.6c-6.7 72-10.2 139.3 0 211.1 0 1.9 .7 3.7 2.1 5s3.1 2.1 5 2.1 3.7-.7 5-2.1 2.1-3.1 2.1-5c10.5-72.8 7.3-138.2 .1-211.1l-.1 0zm-44 20.6c0-1.9-.8-3.8-2.1-5.2s-3.2-2.1-5.2-2.1-3.8 .8-5.2 2.1-2.1 3.2-2.1 5.2c-8.1 63.3-8.1 127.5 0 190.8 .2 1.8 1 3.4 2.4 4.6s3.1 1.9 4.8 1.9 3.5-.7 4.8-1.9 2.2-2.8 2.4-4.6c8.8-63.3 8.9-127.5 .3-190.8l-.1 0zm-44.5 47.6c0-1.9-.8-3.8-2.1-5.1s-3.2-2.1-5.1-2.1-3.8 .8-5.1 2.1-2.1 3.2-2.1 5.1c-10.5 49.2-5.5 93.9 .4 143.6 .3 1.6 1.1 3.1 2.3 4.2s2.8 1.7 4.5 1.7 3.2-.6 4.5-1.7 2.1-2.5 2.3-4.2c6.6-50.4 11.6-94.1 .4-143.6zm-44.1-7.5c-.2-1.8-1.1-3.5-2.4-4.8s-3.2-1.9-5-1.9-3.6 .7-5 1.9-2.2 2.9-2.4 4.8c-9.3 50.2-6.2 94.4 .3 144.5 .7 7.6 13.6 7.5 14.4 0 7.2-50.9 10.5-93.8 .3-144.5l-.2 0zM20.7 250.8c-.2-1.8-1.1-3.5-2.4-4.8s-3.2-1.9-5-1.9-3.6 .7-5 1.9-2.3 2.9-2.4 4.8c-8.5 33.7-5.9 61.6 .6 95.4 .2 1.7 1 3.3 2.3 4.4s2.9 1.8 4.7 1.8 3.4-.6 4.7-1.8 2.1-2.7 2.3-4.4c7.5-34.5 11.2-61.8 .4-95.4l-.2 0z`]});var Xd=[wa,Ia,Ja,Ya,Xa,Za,$a,eo,to,no,ro,f(e=>{e.vueApp.component(`font-awesome-icon`,Yd)})];D({name:`ServerPlaceholder`,render(){return ye(`div`)}});var Zd=Symbol.for(`nuxt:client-only`),Qd=`<div></div>`;function $d(e){return e.nodeName===`#comment`&&e.nodeValue===`placeholder`}function ef(e){return e&&!$d(e)?Mt(e,Qd):_(`div`)}D({name:`ClientOnly`,inheritAttrs:!1,props:[`fallback`,`placeholder`,`placeholderTag`,`fallbackTag`],setup(e,{slots:t,attrs:n}){let r=w(!1);S(()=>{r.value=!0});let i=we();return i&&(i._nuxtClientOnly=!0),b(Zd,!0),()=>{if(r.value){let e=t.default?.();return e&&e.length===1?[de(e[0],n)]:e}let i=t.fallback||t.placeholder;if(i)return _(i);let a=e.fallback||e.placeholder||``,o=ct(e.fallbackTag||e.placeholderTag,`span`);return ye(o,n,a)}}});var tf=new WeakMap;function nf(e){if(tf.has(e))return tf.get(e);let t={...e};return t.render?t.render=(t,n,r,i,a,o)=>{if(i.mounted$??t.mounted$){let s=e.render?.bind(t)(t,n,r,i,a,o);return s.children===null||typeof s.children==`string`?de(s):_(s)}return ef(t._.vnode.el)}:t.template&&=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `,t.setup=(n,r)=>{let i=s(),a=w(i.isHydrating===!1),o=we();if(i.isHydrating){let e={...o.attrs},t=rf(o);for(let t in e)delete o.attrs[t];S(()=>{Object.assign(o.attrs,e),o.vnode.dirs=t})}S(()=>{a.value=!0});let c=e.setup?.(n,r)||{};return me(c)?Promise.resolve(c).then(e=>typeof e==`function`?(...t)=>{if(a.value||!i.isHydrating){let n=e(...t);return n.children===null||typeof n.children==`string`?de(n):_(n)}return ef(o?.vnode.el)}:(e||={},e.mounted$=a,e)):typeof c==`function`?(...e)=>{if(a.value){let n=c(...e),i=t.inheritAttrs===!1?void 0:r.attrs;return n.children===null||typeof n.children==`string`?de(n,i):_(n,i)}return ef(o?.vnode.el)}:Object.assign(c,{mounted$:a})},tf.set(e,t),t}function rf(e){if(!e||!e.vnode.dirs)return null;let t=e.vnode.dirs;return e.vnode.dirs=null,t}function af(e={}){let t=w(``),n=w(e.politeness||`polite`),r=Ir();function i(e=``,r=`polite`){t.value=e,n.value=r}function a(e){i(e,`polite`)}function o(e){i(e,`assertive`)}function s(){i(document?.title?.trim(),n.value)}function c(){r?.hooks?.removeHook(`dom:rendered`,s)}return s(),r?.hooks?.hook(`dom:rendered`,s),{_cleanup:c,message:t,politeness:n,set:i,polite:a,assertive:o}}function of(e={}){let t=s(),n=t._routeAnnouncer||=af(e);return e.politeness&&e.politeness!==n.politeness.value&&(n.politeness.value=e.politeness),ee()&&(t._routeAnnouncerDeps||=0,t._routeAnnouncerDeps++,x(()=>{t._routeAnnouncerDeps--,t._routeAnnouncerDeps===0&&(n._cleanup(),delete t._routeAnnouncer)})),n}var sf=D({name:`NuxtRouteAnnouncer`,props:{atomic:{type:Boolean,default:!1},politeness:{type:String,default:`polite`}},setup(e,{slots:t,expose:n}){let{set:r,polite:i,assertive:a,message:o,politeness:s}=of({politeness:e.politeness}),c=k(()=>{if(s.value===`assertive`)return`alert`;if(s.value!==`off`)return`status`});return n({set:r,polite:i,assertive:a,message:o,politeness:s}),()=>_(`span`,{class:`nuxt-route-announcer`,style:{position:`absolute`}},_(`span`,{role:c.value,"aria-live":s.value,"aria-atomic":e.atomic,style:{border:`0`,clip:`rect(0 0 0 0)`,"clip-path":`inset(50%)`,height:`1px`,width:`1px`,overflow:`hidden`,position:`absolute`,"white-space":`nowrap`,"word-wrap":`normal`,margin:`-1px`,padding:`0`}},t.default?t.default({message:o.value}):o.value))}}),cf=(e=`RouteProvider`)=>D({name:e,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean,routeRecord:Object},setup(e){let t=e.renderKey,n=e.route,r={};for(let i in e.route)Object.defineProperty(r,i,{get:()=>t===e.renderKey?e.route[i]:n[i],enumerable:!0});return b(at,ce(r)),()=>e.vnode?_(e.vnode,{ref:e.vnodeRef}):e.vnode}}),lf=cf(),uf=new WeakMap,df=D({name:`NuxtPage`,inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:t,slots:n,expose:r}){let i=s(),a=E(),o=T(at,null),c=new Set,l;r({pageRef:a});let u=T(Ft,null),d,f=i.deferHydration(),p=!1,m=!1,v,y=0;if(i.isHydrating){let e=i.hooks.hookOnce(`app:error`,f),t=N().beforeEach(()=>{e(),t()})}e.pageKey&&g(()=>e.pageKey,(e,t)=>{e!==t&&i.callHook(`page:loading:start`)});let b=!1;{let e=N().beforeResolve(()=>{b=!1});h(()=>{e(),f()})}return()=>_(Si,{name:e.name,route:e.route,...t},{default:mf(t=>{let r=ff(o,t.route,t.Component),s=o&&o.matched.length===t.route.matched.length;if(!t.Component){if(d&&!s&&!gf(d))return d;f();return}if(d&&u&&!gf(d)&&!u.isCurrent(t.route))return d;if(r&&o&&(!u||u?.isCurrent(o)))return(s||d)&&!gf(d)?d:null;let h=Va(t,e.pageKey),g=pf(o,t.route,t.Component);!i.isHydrating&&l===h&&!g&&ie(()=>{b||(b=!0,i.callHook(`page:loading:end`))}),p&&l!==h&&m&&y++,l=h;let ee=!!(e.transition??t.route.meta.pageTransition??!1),te=ee&&ot([e.transition,t.route.meta.pageTransition,!1,{onAfterLeave(){i[`~transitionFinish`]?.(),delete i[`~transitionFinish`],delete i[`~transitionPromise`],i.callHook(`page:transition:finish`,t.Component)}}]),x=e.keepalive??t.route.meta.keepalive??!1,ne=t.Component.type,re=ne.name||ne.__name;t.route.meta.keepalive&&re&&c.add(re);let S;if(c.size>0&&e.keepalive==null&&(!x||typeof x==`object`&&x&&x.include)){let e=typeof x==`object`&&x?{...x}:{},t=e.include?Array.isArray(e.include)?e.include:[e.include]:[];S={...e,include:Array.from(new Set([...t,...c]))}}else S=x;return d=bt(ee&&te,Ha(S,_(ve,{key:y,suspensible:!0,onPending:()=>{p=!0,ee&&!i[`~transitionPromise`]&&(i[`~transitionPromise`]=new Promise(e=>{i[`~transitionFinish`]=e})),v=i.callHook(`page:start`,t.Component)},onResolve:async()=>{p=!1,m=!0,i.isHydrating&&i[`~restoreDeferredRoute`]?.();try{await ie(),i._route.sync?.(),await v,await i.callHook(`page:finish`,t.Component),!b&&!g&&(b=!0,await i.callHook(`page:loading:end`))}finally{f()}}},{default:()=>{let e={key:h||void 0,vnode:n.default?hf(n.default,t):t.Component,route:t.route,renderKey:h||void 0,trackRootNodes:ee,vnodeRef:a,routeRecord:void 0};if(!S)return _(lf,e);let r=ne,i=uf.get(r);return i||(i=cf(re),uf.set(r,i)),_(i,e)}}))).default(),d})})}});function ff(e,t,n){if(!e)return!1;let r=t.matched.findIndex(e=>e.components?.default===n?.type);if(r===-1)return!1;let i=t.matched.slice(0,r).filter(e=>e.components?.default);if(!i.length)return!1;let a=e.matched.filter(e=>e.components?.default);return i.some((e,t)=>e.components?.default!==a[t]?.components?.default)||n&&Va({route:t,Component:n})!==Va({route:e,Component:n})}function pf(e,t,n){return e?t.matched.findIndex(e=>e.components?.default===n?.type)<t.matched.length-1:!1}function mf(e){let t=(t=>{let n=e(t);return Array.isArray(n)?n:n==null||!y(n)?[pe()]:[n]});return t._n=!0,t}function hf(e,t){let n=e(t);return n.length===1?_(n[0]):_(he,void 0,n)}function gf(e){return!!e&&(!!e.suspense?.isUnmounted||!!e.component?.isUnmounted)}var _f=Oi;function vf(e,t){return A(t)??e?.meta.layout??_f(e?.path??`/`).appLayout??`default`}var yf=D({name:`LayoutLoader`,inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(e,t){return()=>_(L[e.name],e.layoutProps,t.slots)}}),bf=D({name:`NuxtLayout`,inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(e,t){let n=s(),r=T(at),i=!r||r===rt()?$e():r,a=k(()=>{let t=vf(i,e.name);return t&&!(t in L)&&e.fallback&&(t=A(e.fallback)),t});b(Bt,a);let o=w();t.expose({layoutRef:o});let c=n.deferHydration();if(n.isHydrating){let e=n.hooks.hookOnce(`app:error`,c),t=N().beforeEach(()=>{e(),t()})}let l;return()=>{let r=!!a.value&&a.value in L&&!!(i?.meta.layoutTransition??!1),s=r&&ot([i?.meta.layoutTransition,!1,{onBeforeLeave(){n[`~transitionPromise`]=new Promise(e=>{n[`~transitionFinish`]=e})},onAfterLeave(){n[`~transitionFinish`]?.(),delete n[`~transitionFinish`],delete n[`~transitionPromise`]}}]),u=l;return l=a.value,bt(s,{default:()=>_(ve,{suspensible:!0,onResolve:async()=>{await ie(c)}},{default:()=>_(xf,{layoutProps:v(t.attrs,i.meta.layoutProps??{},{ref:o}),key:a.value||void 0,name:a.value,shouldProvide:!e.name,isRenderingNewLayout:e=>e!==u&&e===a.value,hasTransition:r},t.slots)})}).default()}}}),xf=D({name:`NuxtLayoutProvider`,inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean},isRenderingNewLayout:{type:Function,required:!0}},setup(e,t){let n=e.name;e.shouldProvide&&b(Ft,{isCurrent:e=>n===!1||n===vf(e)});let r=T(at),i=r&&r===rt(),a=T(Ft,null);if(i){let t=$e(),n={};for(let i in t){let o=i;Object.defineProperty(n,o,{enumerable:!0,get:()=>e.isRenderingNewLayout(e.name)&&(!a||a.isCurrent(t))?t[o]:r[o]})}b(at,ce(n))}return()=>!n||typeof n==`string`&&!(n in L)?t.slots.default?.():_(yf,{key:n,layoutProps:e.layoutProps,name:n},t.slots)}}),Sf=nf(sf),Cf={};function wf(e,t){let n=Sf,r=df,i=bf;return C(),O(i,null,{default:te(()=>[Se(n),Se(r)]),_:1})}var Tf=xe(Cf,[[`render`,wf]]),Ef={__name:`nuxt-error-page`,props:{error:Object},setup(e){let t=e.error,n=Number(t.statusCode||500),r=n===404,i=t.statusMessage??(r?`Page Not Found`:`Internal Server Error`),a=t.message||t.toString(),o=Te(()=>I(()=>import(`./BX8wrEef.js`),__vite__mapDeps([19,1,2,3,20]),import.meta.url)),s=Te(()=>I(()=>import(`./BqXlfyXQ.js`),__vite__mapDeps([21,1,22]),import.meta.url)),c=r?o:s;return(e,t)=>(C(),O(A(c),le(ae({status:A(n),statusText:A(i),statusCode:A(n),statusMessage:A(i),description:A(a),stack:A(void 0)})),null,16))}},Df=()=>null,Of={key:0},kf={__name:`nuxt-root`,setup(e){let t=s(),n=t.deferHydration();if(t.isHydrating){let e=t.hooks.hookOnce(`app:error`,n),r=N().beforeEach(()=>{e(),r()})}window.location.pathname,b(at,rt()),t.hooks.callHookWith(e=>e.map(e=>e()),`vue:setup`,[]);let r=kt();function i(e,n,r){let i=t.vueApp.config.errorHandler;if(i&&!i.__nuxt_default)try{i(e,n,r)}catch(e){console.error("[nuxt] Error in `app.config.errorHandler`",e)}}return re((e,n,r)=>{if(t.hooks.callHook(`vue:error`,e,n,r)?.catch(e=>console.error("[nuxt] Error in `vue:error` hook",e)),Rt(navigator.userAgent))return et(t,e),!1;if(jt(e)&&(e.fatal||e.unhandled))return t.runWithContext(()=>wt(e)),i(e,n,r),!1}),(e,t)=>(C(),O(ve,{onResolve:A(n)},{default:te(()=>[A(!1)?(C(),ye(`div`,Of)):A(r)?(C(),O(A(Ef),{key:1,error:A(r)},null,8,[`error`])):A(!1)?(C(),O(A(Df),{key:2,context:A(!1)},null,8,[`context`])):A(!1)?(C(),O(Ee(A(!1)),{key:3})):(C(),O(A(Tf),{key:4}))]),_:1},8,[`onResolve`]))}},Af;{let e;Af=async function(){if(e)return e;let t=!!(window.__NUXT__?.serverRendered??document.getElementById(`__NUXT_DATA__`)?.dataset.ssr===`true`),i=t?je(kf):qe(kf),a=l({vueApp:i});async function o(e){await a.callHook(`app:error`,e),a.payload.error||=ut(e)}o.__nuxt_default=!0,i.config.errorHandler=o,a.hook(`app:suspense:resolve`,()=>{i.config.errorHandler===o&&(i.config.errorHandler=void 0)}),!t&&n.id&&a.hook(`app:suspense:resolve`,()=>{document.getElementById(n.id)?.remove()});try{await p(a,Xd)}catch(e){o(e)}try{await a.hooks.callHook(`app:created`,i),await a.hooks.callHook(`app:beforeMount`,i),i.mount(r),await a.hooks.callHook(`app:mounted`,i),await ie()}catch(e){o(e)}return i},e=Af().catch(e=>{throw c.NUXT_E1009({cause:e}),e})}export{Lr as t};