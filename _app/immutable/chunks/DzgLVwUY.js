var Jt=t=>{throw TypeError(t)};var Pe=(t,e,n)=>e.has(t)||Jt("Cannot "+n);var A=(t,e,n)=>(Pe(t,e,"read from private field"),n?n.call(t):e.get(t)),x=(t,e,n)=>e.has(t)?Jt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{ac as C,L as O,M as N,ad as Ce}from"./InZY7qpW.js";import{w as Ot}from"./vr1_UaJW.js";import{a as Oe,b as P}from"./CnPDJQYu.js";import{o as zt}from"./DqOI9qGz.js";new URL("sveltekit-internal://");function Ne(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function je(t){return t.split("%25").map(decodeURI).join("%25")}function $e(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function It({href:t}){return t.split("#")[0]}function De(t,e,n,a=!1){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));e();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];a&&s.push("hash");for(const i of s)Object.defineProperty(r,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return r}function Fe(...t){let e=5381;for(const n of t)if(typeof n=="string"){let a=n.length;for(;a;)e=e*33^n.charCodeAt(--a)}else if(ArrayBuffer.isView(n)){const a=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let r=a.length;for(;r;)e=e*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Ve(t){const e=atob(t),n=new Uint8Array(e.length);for(let a=0;a<e.length;a++)n[a]=e.charCodeAt(a);return n.buffer}const Be=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&W.delete(Nt(t)),Be(t,e));const W=new Map;function Me(t,e){const n=Nt(t,e),a=document.querySelector(n);if(a!=null&&a.textContent){let{body:r,...s}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&W.set(n,{body:r,init:s,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=Ve(r)),Promise.resolve(new Response(r,s))}return window.fetch(t,e)}function qe(t,e,n){if(W.size>0){const a=Nt(t,n),r=W.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);W.delete(a)}}return window.fetch(e,n)}function Nt(t,e){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const r=[];e.headers&&r.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&r.push(e.body),a+=`[data-hash="${Fe(...r)}"]`}return a}const Ge=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function He(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${We(t).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Ut(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Ut(String.fromCharCode(...c.slice(2).split("-").map(p=>parseInt(p,16))));const d=Ge.exec(c),[,u,w,f,m]=d;return e.push({name:f,matcher:m,optional:!!u,rest:!!w,chained:w?l===1&&i[0]==="":!1}),w?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return Ut(c)}).join("")}).join("")}/?$`),params:e}}function Ke(t){return!/^\([^)]+\)$/.test(t)}function We(t){return t.slice(1).split("/").filter(Ke)}function Ye(t,e,n){const a={},r=t.slice(1),s=r.filter(o=>o!==void 0);let i=0;for(let o=0;o<e.length;o+=1){const c=e[o];let l=r[o-i];if(c.chained&&c.rest&&i&&(l=r.slice(o-i,o+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){a[c.name]=l;const d=e[o+1],u=r[o+1];d&&!d.rest&&d.optional&&u&&c.chained&&(i=0),!d&&!u&&Object.keys(a).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function Ut(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Je({nodes:t,server_loads:e,dictionary:n,matchers:a}){const r=new Set(e);return Object.entries(n).map(([o,[c,l,d]])=>{const{pattern:u,params:w}=He(o),f={id:o,exec:m=>{const p=u.exec(m);if(p)return Ye(p,w,a)},errors:[1,...d||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,t[o]]}function i(o){return o===void 0?o:[r.has(o),t[o]]}}function le(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function Xt(t,e,n=JSON.stringify){const a=n(e);try{sessionStorage[t]=a}catch{}}const ze="1744570071627",fe="sveltekit:snapshot",ue="sveltekit:scroll",he="sveltekit:states",Xe="sveltekit:pageurl",q="sveltekit:history",X="sveltekit:navigation",F={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},vt=location.origin;function de(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function jt(){return{x:pageXOffset,y:pageYOffset}}function M(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Zt={...F,"":F.hover};function pe(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function ge(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=pe(t)}}function xt(t,e,n){let a;try{if(a=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI),n&&a.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";a.hash=`#${o}${a.hash}`}}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,s=!a||!!r||bt(a,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(a==null?void 0:a.origin)===vt&&t.hasAttribute("download");return{url:a,external:s,target:r,download:i}}function ht(t){let e=null,n=null,a=null,r=null,s=null,i=null,o=t;for(;o&&o!==document.documentElement;)a===null&&(a=M(o,"preload-code")),r===null&&(r=M(o,"preload-data")),e===null&&(e=M(o,"keepfocus")),n===null&&(n=M(o,"noscroll")),s===null&&(s=M(o,"reload")),i===null&&(i=M(o,"replacestate")),o=pe(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Zt[a??"off"],preload_data:Zt[r??"off"],keepfocus:c(e),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Qt(t){const e=Ot(t);let n=!0;function a(){n=!0,e.update(i=>i)}function r(i){n=!1,e.set(i)}function s(i){let o;return e.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:a,set:r,subscribe:s}}const me={v:()=>{}};function Ze(){const{set:t,subscribe:e}=Ot(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${Oe}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==ze;return i&&(t(!0),me.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:a}}function bt(t,e,n){return t.origin!==vt||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.pathname===e+"/index.html"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function Fn(t){}function te(t){const e=tn(t),n=new ArrayBuffer(e.length),a=new DataView(n);for(let r=0;r<n.byteLength;r++)a.setUint8(r,e.charCodeAt(r));return n}const Qe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function tn(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,a=0;for(let r=0;r<t.length;r++)n<<=6,n|=Qe.indexOf(t[r]),a+=6,a===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=a=0);return a===12?(n>>=4,e+=String.fromCharCode(n)):a===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const en=-1,nn=-2,rn=-3,an=-4,on=-5,sn=-6;function cn(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,a=Array(n.length);function r(s,i=!1){if(s===en)return;if(s===rn)return NaN;if(s===an)return 1/0;if(s===on)return-1/0;if(s===sn)return-0;if(i)throw new Error("Invalid input");if(s in a)return a[s];const o=n[s];if(!o||typeof o!="object")a[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=e==null?void 0:e[c];if(l)return a[s]=l(r(o[1]));switch(c){case"Date":a[s]=new Date(o[1]);break;case"Set":const d=new Set;a[s]=d;for(let f=1;f<o.length;f+=1)d.add(r(o[f]));break;case"Map":const u=new Map;a[s]=u;for(let f=1;f<o.length;f+=2)u.set(r(o[f]),r(o[f+1]));break;case"RegExp":a[s]=new RegExp(o[1],o[2]);break;case"Object":a[s]=Object(o[1]);break;case"BigInt":a[s]=BigInt(o[1]);break;case"null":const w=Object.create(null);a[s]=w;for(let f=1;f<o.length;f+=2)w[o[f]]=r(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],m=o[1],p=te(m),h=new f(p);a[s]=h;break}case"ArrayBuffer":{const f=o[1],m=te(f);a[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);a[s]=c;for(let l=0;l<o.length;l+=1){const d=o[l];d!==nn&&(c[l]=r(d))}}else{const c={};a[s]=c;for(const l in o){const d=o[l];c[l]=r(d)}}return a[s]}return r(0)}const we=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...we];const ln=new Set([...we]);[...ln];function fn(t){return t.filter(e=>e!=null)}class At{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class $t{constructor(e,n){this.status=e,this.location=n}}class Dt extends Error{constructor(e,n,a){super(a),this.status=e,this.text=n}}const un="x-sveltekit-invalidated",hn="x-sveltekit-trailing-slash";function dt(t){return t instanceof At||t instanceof Dt?t.status:500}function dn(t){return t instanceof Dt?t.text:"Internal Error"}let U,Z,Lt;const pn=zt.toString().includes("$$")||/function \w+\(\) \{\}/.test(zt.toString());var et,nt,rt,at,ot,st,it,ct,se,lt,ie,ft,ce;pn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Z={current:null},Lt={current:!1}):(U=new(se=class{constructor(){x(this,et,C({}));x(this,nt,C(null));x(this,rt,C(null));x(this,at,C({}));x(this,ot,C({id:null}));x(this,st,C({}));x(this,it,C(-1));x(this,ct,C(new URL("https://example.com")))}get data(){return O(A(this,et))}set data(e){N(A(this,et),e)}get form(){return O(A(this,nt))}set form(e){N(A(this,nt),e)}get error(){return O(A(this,rt))}set error(e){N(A(this,rt),e)}get params(){return O(A(this,at))}set params(e){N(A(this,at),e)}get route(){return O(A(this,ot))}set route(e){N(A(this,ot),e)}get state(){return O(A(this,st))}set state(e){N(A(this,st),e)}get status(){return O(A(this,it))}set status(e){N(A(this,it),e)}get url(){return O(A(this,ct))}set url(e){N(A(this,ct),e)}},et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,ct=new WeakMap,se),Z=new(ie=class{constructor(){x(this,lt,C(null))}get current(){return O(A(this,lt))}set current(e){N(A(this,lt),e)}},lt=new WeakMap,ie),Lt=new(ce=class{constructor(){x(this,ft,C(!1))}get current(){return O(A(this,ft))}set current(e){N(A(this,ft),e)}},ft=new WeakMap,ce),me.v=()=>Lt.current=!0);function gn(t){Object.assign(U,t)}const mn="/__data.json",wn=".html__data.json";function yn(t){return t.endsWith(".html")?t.replace(/\.html$/,wn):t.replace(/\/$/,"")+mn}const _n=new Set(["icon","shortcut icon","apple-touch-icon"]),B=le(ue)??{},Q=le(fe)??{},$={url:Qt({}),page:Qt({}),navigating:Ot(null),updated:Ze()};function Ft(t){B[t]=jt()}function vn(t,e){let n=t+1;for(;B[n];)delete B[n],n+=1;for(n=e+1;Q[n];)delete Q[n],n+=1}function H(t){return location.href=t.href,new Promise(()=>{})}async function ye(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(P||"/");t&&await t.update()}}function ee(){}let Vt,Pt,pt,j,Ct,S;const gt=[],mt=[];let L=null;const ut=new Map,_e=new Set,bn=new Set,Y=new Set;let v={branch:[],error:null,url:null},Bt=!1,wt=!1,ne=!0,tt=!1,K=!1,ve=!1,Mt=!1,be,E,T,V;const J=new Set;async function qn(t,e,n){var r,s,i,o;document.URL!==location.href&&(location.href=location.href),S=t,await((s=(r=t.hooks).init)==null?void 0:s.call(r)),Vt=Je(t),j=document.documentElement,Ct=e,Pt=t.nodes[0],pt=t.nodes[1],Pt(),pt(),E=(i=history.state)==null?void 0:i[q],T=(o=history.state)==null?void 0:o[X],E||(E=T=Date.now(),history.replaceState({...history.state,[q]:E,[X]:T},""));const a=B[E];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),n?await xn(Ct,n):await z({type:"enter",url:de(S.hash?Cn(new URL(location.href)):location.href),replace_state:!0}),Tn()}function An(){gt.length=0,Mt=!1}function Ae(t){mt.some(e=>e==null?void 0:e.snapshot)&&(Q[t]=mt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Se(t){var e;(e=Q[t])==null||e.forEach((n,a)=>{var r,s;(s=(r=mt[a])==null?void 0:r.snapshot)==null||s.restore(n)})}function re(){Ft(E),Xt(ue,B),Ae(T),Xt(fe,Q)}async function ke(t,e,n,a){return z({type:"goto",url:de(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:a,accept:()=>{e.invalidateAll&&(Mt=!0),e.invalidate&&e.invalidate.forEach(Ln)}})}async function Sn(t){if(t.id!==(L==null?void 0:L.id)){const e={};J.add(e),L={id:t.id,token:e,promise:Ie({...t,preload:e}).then(n=>(J.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Tt(t){var n;const e=(n=await kt(t,!1))==null?void 0:n.route;e&&await Promise.all([...e.layouts,e.leaf].map(a=>a==null?void 0:a[1]()))}function Ee(t,e,n){var r;v=t.state;const a=document.querySelector("style[data-sveltekit]");if(a&&a.remove(),Object.assign(U,t.props.page),be=new S.root({target:e,props:{...t.props,stores:$,components:mt},hydrate:n,sync:!1}),Se(T),n){const s={from:null,to:{params:v.params,route:{id:((r=v.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};Y.forEach(i=>i(s))}wt=!0}function yt({url:t,params:e,branch:n,status:a,error:r,route:s,form:i}){let o="never";if(P&&(t.pathname===P||t.pathname===P+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);t.pathname=Ne(t.pathname,o),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:r,route:s},props:{constructors:fn(n).map(f=>f.node.component),page:Kt(U)}};i!==void 0&&(c.props.form=i);let l={},d=!U,u=0;for(let f=0;f<Math.max(n.length,v.branch.length);f+=1){const m=n[f],p=v.branch[f];(m==null?void 0:m.data)!==(p==null?void 0:p.data)&&(d=!0),m&&(l={...l,...m.data},d&&(c.props[`data_${u}`]=l),u+=1)}return(!v.url||t.href!==v.url.href||v.error!==r||i!==void 0&&i!==U.form||d)&&(c.props.page={error:r,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:a,url:new URL(t),form:i??null,data:d?l:U.data}),c}async function qt({loader:t,parent:e,url:n,params:a,route:r,server_data_node:s}){var d,u,w;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((d=l.universal)!=null&&d.load){let f=function(...p){for(const h of p){const{href:_}=new URL(h,n);c.dependencies.add(_)}};const m={route:new Proxy(r,{get:(p,h)=>(o&&(c.route=!0),p[h])}),params:new Proxy(a,{get:(p,h)=>(o&&c.params.add(h),p[h])}),data:(s==null?void 0:s.data)??null,url:De(n,()=>{o&&(c.url=!0)},p=>{o&&c.search_params.add(p)},S.hash),async fetch(p,h){p instanceof Request&&(h={body:p.method==="GET"||p.method==="HEAD"?void 0:await p.blob(),cache:p.cache,credentials:p.credentials,headers:[...p.headers].length?p.headers:void 0,integrity:p.integrity,keepalive:p.keepalive,method:p.method,mode:p.mode,redirect:p.redirect,referrer:p.referrer,referrerPolicy:p.referrerPolicy,signal:p.signal,...h});const{resolved:_,promise:R}=Re(p,h,n);return o&&f(_.href),R},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),e()},untrack(p){o=!1;try{return p()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:s,universal:(u=l.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((w=l.universal)==null?void 0:w.trailingSlash)??(s==null?void 0:s.slash)}}function Re(t,e,n){let a=t instanceof Request?t.url:t;const r=new URL(a,n);r.origin===n.origin&&(a=r.href.slice(n.origin.length));const s=wt?qe(a,r.href,e):Me(a,e);return{resolved:r,promise:s}}function ae(t,e,n,a,r,s){if(Mt)return!0;if(!r)return!1;if(r.parent&&t||r.route&&e||r.url&&n)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(s[i]!==v.params[i])return!0;for(const i of r.dependencies)if(gt.some(o=>o(new URL(i))))return!0;return!1}function Gt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function kn(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const a of n){const r=t.searchParams.getAll(a),s=e.searchParams.getAll(a);r.every(i=>s.includes(i))&&s.every(i=>r.includes(i))&&n.delete(a)}return n}function oe({error:t,url:e,route:n,params:a}){return{type:"loaded",state:{error:t,url:e,route:n,params:a,branch:[]},props:{page:Kt(U),constructors:[]}}}async function Ie({id:t,invalidating:e,url:n,params:a,route:r,preload:s}){if((L==null?void 0:L.id)===t)return J.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=r,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let d=null;const u=v.url?t!==_t(v.url):!1,w=v.route?r.id!==v.route.id:!1,f=kn(v.url,n);let m=!1;const p=l.map((g,y)=>{var D;const b=v.branch[y],k=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||ae(m,w,u,f,(D=b.server)==null?void 0:D.uses,a));return k&&(m=!0),k});if(p.some(Boolean)){try{d=await Te(n,p)}catch(g){const y=await G(g,{url:n,params:a,route:{id:t}});return J.has(s)?oe({error:y,url:n,params:a,route:r}):St({status:dt(g),error:y,url:n,route:r})}if(d.type==="redirect")return d}const h=d==null?void 0:d.nodes;let _=!1;const R=l.map(async(g,y)=>{var Et;if(!g)return;const b=v.branch[y],k=h==null?void 0:h[y];if((!k||k.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!ae(_,w,u,f,(Et=b.universal)==null?void 0:Et.uses,a))return b;if(_=!0,(k==null?void 0:k.type)==="error")throw k;return qt({loader:g[1],url:n,params:a,route:r,parent:async()=>{var Yt;const Wt={};for(let Rt=0;Rt<y;Rt+=1)Object.assign(Wt,(Yt=await R[Rt])==null?void 0:Yt.data);return Wt},server_data_node:Gt(k===void 0&&g[0]?{type:"skip"}:k??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of R)g.catch(()=>{});const I=[];for(let g=0;g<l.length;g+=1)if(l[g])try{I.push(await R[g])}catch(y){if(y instanceof $t)return{type:"redirect",location:y.location};if(J.has(s))return oe({error:await G(y,{params:a,url:n,route:{id:r.id}}),url:n,params:a,route:r});let b=dt(y),k;if(h!=null&&h.includes(y))b=y.status??b,k=y.error;else if(y instanceof At)k=y.body;else{if(await $.updated.check())return await ye(),await H(n);k=await G(y,{params:a,url:n,route:{id:r.id}})}const D=await En(g,I,i);return D?yt({url:n,params:a,branch:I.slice(0,D.idx).concat(D.node),status:b,error:k,route:r}):await Le(n,{id:r.id},k,b)}else I.push(void 0);return yt({url:n,params:a,branch:I,status:200,error:null,route:r,form:e?void 0:null})}async function En(t,e,n){for(;t--;)if(n[t]){let a=t;for(;!e[a];)a-=1;try{return{idx:a+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function St({status:t,error:e,url:n,route:a}){const r={};let s=null;if(S.server_loads[0]===0)try{const o=await Te(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==vt||n.pathname!==location.pathname||Bt)&&await H(n)}try{const o=await qt({loader:Pt,url:n,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Gt(s)}),c={node:await pt(),loader:pt,universal:null,server:null,data:null};return yt({url:n,params:r,branch:[o,c],status:t,error:e,route:null})}catch(o){if(o instanceof $t)return ke(new URL(o.location,location.href),{},0);throw o}}async function Rn(t){const e=t.href;if(ut.has(e))return ut.get(e);let n;try{const a=(async()=>{let r=await S.hooks.reroute({url:new URL(t),fetch:async(s,i)=>Re(s,i,t).promise})??t;if(typeof r=="string"){const s=new URL(t);S.hash?s.hash=r:s.pathname=r,r=s}return r})();ut.set(e,a),n=await a}catch{ut.delete(e);return}return n}async function kt(t,e){if(t&&!bt(t,P,S.hash)){const n=await Rn(t);if(!n)return;const a=In(n);for(const r of Vt){const s=r.exec(a);if(s)return{id:_t(t),invalidating:e,route:r,params:$e(s),url:t}}}}function In(t){return je(S.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(P.length))||"/"}function _t(t){return(S.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function Ue({url:t,type:e,intent:n,delta:a}){let r=!1;const s=Ht(v,n,t,e);a!==void 0&&(s.navigation.delta=a);const i={...s.navigation,cancel:()=>{r=!0,s.reject(new Error("navigation cancelled"))}};return tt||_e.forEach(o=>o(i)),r?null:s}async function z({type:t,url:e,popped:n,keepfocus:a,noscroll:r,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=ee,block:d=ee}){const u=V;V=c;const w=await kt(e,!1),f=t==="enter"?Ht(v,w,e,t):Ue({url:e,type:t,delta:n==null?void 0:n.delta,intent:w});if(!f){d(),V===c&&(V=u);return}const m=E,p=T;l(),tt=!0,wt&&f.navigation.type!=="enter"&&$.navigating.set(Z.current=f.navigation);let h=w&&await Ie(w);if(!h){if(bt(e,P,S.hash))return await H(e);h=await Le(e,{id:null},await G(new Dt(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(w==null?void 0:w.url)||e,V!==c)return f.reject(new Error("navigation aborted")),!1;if(h.type==="redirect")if(o>=20)h=await St({status:500,error:await G(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return await ke(new URL(h.location,e).href,{},o+1,c),!1;else h.props.page.status>=400&&await $.updated.check()&&(await ye(),await H(e));if(An(),Ft(m),Ae(p),h.props.page.url.pathname!==e.pathname&&(e.pathname=h.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,y={[q]:E+=g,[X]:T+=g,[he]:i};(s?history.replaceState:history.pushState).call(history,y,"",e),s||vn(E,T)}if(L=null,h.props.page.state=i,wt){v=h.state,h.props.page&&(h.props.page.url=e);const g=(await Promise.all(Array.from(bn,y=>y(f.navigation)))).filter(y=>typeof y=="function");if(g.length>0){let y=function(){g.forEach(b=>{Y.delete(b)})};g.push(y),g.forEach(b=>{Y.add(b)})}be.$set(h.props),gn(h.props.page),ve=!0}else Ee(h,Ct,!1);const{activeElement:_}=document;await Ce();const R=n?n.scroll:r?jt():null;if(ne){const g=e.hash&&document.getElementById(decodeURIComponent(S.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));R?scrollTo(R.x,R.y):g?g.scrollIntoView():scrollTo(0,0)}const I=document.activeElement!==_&&document.activeElement!==document.body;!a&&!I&&Pn(),ne=!0,h.props.page&&Object.assign(U,h.props.page),tt=!1,t==="popstate"&&Se(T),f.fulfil(void 0),Y.forEach(g=>g(f.navigation)),$.navigating.set(Z.current=null)}async function Le(t,e,n,a){return t.origin===vt&&t.pathname===location.pathname&&!Bt?await St({status:a,error:n,url:t,route:e}):await H(t)}function Un(){let t,e,n;j.addEventListener("mousemove",o=>{const c=o.target;clearTimeout(t),t=setTimeout(()=>{s(c,F.hover)},20)});function a(o){o.defaultPrevented||s(o.composedPath()[0],F.tap)}j.addEventListener("mousedown",a),j.addEventListener("touchstart",a,{passive:!0});const r=new IntersectionObserver(o=>{for(const c of o)c.isIntersecting&&(Tt(new URL(c.target.href)),r.unobserve(c.target))},{threshold:0});async function s(o,c){const l=ge(o,j),d=l===e&&c>=n;if(!l||d)return;const{url:u,external:w,download:f}=xt(l,P,S.hash);if(w||f)return;const m=ht(l),p=u&&_t(v.url)===_t(u);if(!(m.reload||p))if(c<=m.preload_data){e=l,n=F.tap;const h=await kt(u,!1);if(!h)return;Sn(h)}else c<=m.preload_code&&(e=l,n=c,Tt(u))}function i(){r.disconnect();for(const o of j.querySelectorAll("a")){const{url:c,external:l,download:d}=xt(o,P,S.hash);if(l||d)continue;const u=ht(o);u.reload||(u.preload_code===F.viewport&&r.observe(o),u.preload_code===F.eager&&Tt(c))}}Y.add(i),i()}function G(t,e){if(t instanceof At)return t.body;const n=dt(t),a=dn(t);return S.hooks.handleError({error:t,event:e,status:n,message:a})??{message:a}}function Ln(t){if(typeof t=="function")gt.push(t);else{const{href:e}=new URL(t,location.href);gt.push(n=>n.href===e)}}function Tn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let a=!1;if(re(),!tt){const r=Ht(v,void 0,null,"leave"),s={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};_e.forEach(i=>i(s))}a?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&re()}),(e=navigator.connection)!=null&&e.saveData||Un(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const a=ge(n.composedPath()[0],j);if(!a)return;const{url:r,external:s,target:i,download:o}=xt(a,P,S.hash);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ht(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||o)return;const[d,u]=(S.hash?r.hash.replace(/^#/,""):r.href).split("#"),w=d===It(location);if(s||c.reload&&(!w||!u)){Ue({url:r,type:"link"})?tt=!0:n.preventDefault();return}if(u!==void 0&&w){const[,f]=v.url.href.split("#");if(f===u){if(n.preventDefault(),u===""||u==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=a.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(K=!0,Ft(E),t(r),!c.replace_state)return;K=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),await z({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(n.target),r=n.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const o=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(bt(o,P,!1))return;const c=n.target,l=ht(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),u=r==null?void 0:r.getAttribute("name");u&&d.append(u,(r==null?void 0:r.getAttribute("value"))??""),o.search=new URLSearchParams(d).toString(),z({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var a;if((a=n.state)!=null&&a[q]){const r=n.state[q];if(V={},r===E)return;const s=B[r],i=n.state[he]??{},o=new URL(n.state[Xe]??location.href),c=n.state[X],l=v.url?It(location)===It(v.url):!1;if(c===T&&(ve||l)){i!==U.state&&(U.state=i),t(o),B[E]=jt(),s&&scrollTo(s.x,s.y),E=r;return}const u=r-E;await z({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{E=r,T=c},block:()=>{history.go(-u)},nav_token:V})}else if(!K){const r=new URL(location.href);t(r),S.hash&&location.reload()}}),addEventListener("hashchange",()=>{K&&(K=!1,history.replaceState({...history.state,[q]:++E,[X]:T},"",location.href))});for(const n of document.querySelectorAll("link"))_n.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(Z.current=null)});function t(n){v.url=U.url=n,$.page.set(Kt(U)),$.page.notify()}}async function xn(t,{status:e=200,error:n,node_ids:a,params:r,route:s,server_route:i,data:o,form:c}){Bt=!0;const l=new URL(location.href);let d;({params:r={},route:s={id:null}}=await kt(l,!1)||{}),d=Vt.find(({id:f})=>f===s.id);let u,w=!0;try{const f=a.map(async(p,h)=>{const _=o[h];return _!=null&&_.uses&&(_.uses=xe(_.uses)),qt({loader:S.nodes[p],url:l,params:r,route:s,parent:async()=>{const R={};for(let I=0;I<h;I+=1)Object.assign(R,(await f[I]).data);return R},server_data_node:Gt(_)})}),m=await Promise.all(f);if(d){const p=d.layouts;for(let h=0;h<p.length;h++)p[h]||m.splice(h,0,void 0)}u=yt({url:l,params:r,branch:m,status:e,error:n,form:c,route:d??null})}catch(f){if(f instanceof $t){await H(new URL(f.location,location.href));return}u=await St({status:dt(f),error:await G(f,{url:l,params:r,route:s}),url:l,route:s}),t.textContent="",w=!1}u.props.page&&(u.props.page.state={}),Ee(u,t,w)}async function Te(t,e){var s;const n=new URL(t);n.pathname=yn(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(hn,"1"),n.searchParams.append(un,e.map(i=>i?"1":"0").join(""));const a=window.fetch,r=await a(n.href,{});if(!r.ok){let i;throw(s=r.headers.get("content-type"))!=null&&s.includes("application/json")?i=await r.json():r.status===404?i="Not Found":r.status===500&&(i="Internal Error"),new At(r.status,i)}return new Promise(async i=>{var w;const o=new Map,c=r.body.getReader(),l=new TextDecoder;function d(f){return cn(f,{...S.decoders,Promise:m=>new Promise((p,h)=>{o.set(m,{fulfil:p,reject:h})})})}let u="";for(;;){const{done:f,value:m}=await c.read();if(f&&!u)break;for(u+=!m&&u?`
`:l.decode(m,{stream:!0});;){const p=u.indexOf(`
`);if(p===-1)break;const h=JSON.parse(u.slice(0,p));if(u=u.slice(p+1),h.type==="redirect")return i(h);if(h.type==="data")(w=h.nodes)==null||w.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=xe(_.uses),_.data=d(_.data))}),i(h);else if(h.type==="chunk"){const{id:_,data:R,error:I}=h,g=o.get(_);o.delete(_),I?g.reject(d(I)):g.fulfil(d(R))}}}})}function xe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function Pn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let s=0;s<a.rangeCount;s+=1)r.push(a.getRangeAt(s));setTimeout(()=>{if(a.rangeCount===r.length){for(let s=0;s<a.rangeCount;s+=1){const i=r[s],o=a.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}a.removeAllRanges()}})}}}function Ht(t,e,n,a){var c,l;let r,s;const i=new Promise((d,u)=>{r=d,s=u});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:a,complete:i},fulfil:r,reject:s}}function Kt(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}function Cn(t){const e=new URL(t);return e.hash=decodeURIComponent(t.hash),e}export{qn as a,Fn as l,U as p,$ as s};
