import{N as Y,K as B,C as W,F as G,d as q,_ as K,G as O,$ as H,a0 as Z,a1 as Q,a2 as X,e as j,p as z,b as J,c as ee}from"./runtime.cLx7l5XR.js";function te(e){console.warn("hydration_mismatch")}const fe=1,_e=2,he=4,pe=8,ve=16,me=64,Ee=1,Te=2,ge=4,ye=8,we=1,Ie=2,Se=4,k=1,ne=2,L="[",re="[!",U="]",A={},Ce=Symbol(),Ae=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],ae=["touchstart","touchmove","touchend"],Ne={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},be="http://www.w3.org/2000/svg";function Re(e,t="exclude-on"){return e.endsWith("capture")?t=="exclude-on"?e!=="gotpointercapture"&&e!=="lostpointercapture":e!=="ongotpointercapture"&&e!=="onlostpointercapture":!1}let u=!1;function C(e){u=e}let o;function E(e){return o=e}function D(){return o=o.nextSibling}function Oe(e){u&&(o=e)}function Le(){u&&D()}function De(){for(var e=0,t=o;;){if(t.nodeType===8){var n=t.data;if(n===U){if(e===0)return t;e-=1}else(n===L||n===re)&&(e+=1)}var i=t.nextSibling;t.remove(),t=i}}var M,oe;function $(){if(M===void 0){M=window,oe=document;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function T(){return document.createTextNode("")}function Pe(e){if(!u)return e.firstChild;var t=o.firstChild;return t===null&&(t=o.appendChild(T())),E(t),t}function Me(e,t){if(!u){var n=e.firstChild;return n instanceof Comment&&n.data===""?n.nextSibling:n}if(t&&(o==null?void 0:o.nodeType)!==3){var i=T();return o==null||o.before(i),E(i),i}return o}function He(e,t=!1){if(!u)return e.nextSibling;var n=o.nextSibling,i=n.nodeType;if(t&&i!==3){var r=T();return n==null||n.before(r),E(r),r}return E(n),n}function ie(e){e.textContent=""}const x=new Set,N=new Set;function se(e,t,n,i){function r(a){if(i.capture||y.call(t,a),!a.cancelBubble)return n.call(this,a)}return e.startsWith("pointer")||e==="wheel"?B(()=>{t.addEventListener(e,r,i)}):t.addEventListener(e,r,i),r}function ke(e,t,n,i,r){var a={capture:i,passive:r},s=se(e,t,n,a);(t===document.body||t===window||t===document)&&Y(()=>{t.removeEventListener(e,s,a)})}function Ue(e){for(var t=0;t<e.length;t++)x.add(e[t]);for(var n of N)n(e)}function y(e){var P;var t=this,n=t.ownerDocument,i=e.type,r=((P=e.composedPath)==null?void 0:P.call(e))||[],a=r[0]||e.target,s=0,h=e.__root;if(h){var l=r.indexOf(h);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var d=r.indexOf(t);if(d===-1)return;l<=d&&(s=l)}if(a=r[s]||e.target,a!==t){W(e,"currentTarget",{configurable:!0,get(){return a||n}});try{for(var m,c=[];a!==null;){var p=a.parentNode||a.host||null;try{var f=a["__"+i];if(f!==void 0&&!a.disabled)if(G(f)){var[w,...I]=f;w.apply(a,[e,...I])}else f.call(a,e)}catch(S){m?c.push(S):m=S}if(e.cancelBubble||p===t||p===null)break;a=p}if(m){for(let S of c)queueMicrotask(()=>{throw S});throw m}}finally{e.__root=t,a=t}}}let v;function ue(){v=void 0}function $e(e){let t=null,n=u;var i;if(u){for(t=o,v===void 0&&(v=document.head.firstChild);v.nodeType!==8||v.data!==L;)v=v.nextSibling;v=E(v.nextSibling)}else i=document.head.appendChild(T());try{q(()=>e(i),K)}finally{n&&(v=o,E(t))}}function F(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function _(e,t){var n;(n=O).nodes??(n.nodes={start:e,end:t})}function xe(e,t){var n=(t&k)!==0,i=(t&ne)!==0,r,a=!e.startsWith("<!>");return()=>{if(u)return _(o,null),o;r||(r=F(a?e:"<!>"+e),n||(r=r.firstChild));var s=i?document.importNode(r,!0):r.cloneNode(!0);if(n){var h=s.firstChild,l=s.lastChild;_(h,l)}else _(s,s);return s}}function Fe(e,t,n="svg"){var i=!e.startsWith("<!>"),r=(t&k)!==0,a=`<${n}>${i?e:"<!>"+e}</${n}>`,s;return()=>{if(u)return _(o,null),o;if(!s){var h=F(a),l=h.firstChild;if(r)for(s=document.createDocumentFragment();l.firstChild;)s.appendChild(l.firstChild);else s=l.firstChild}var d=s.cloneNode(!0);if(r){var m=d.firstChild,c=d.lastChild;_(m,c)}else _(d,d);return d}}function Ve(){if(!u){var e=T();return _(e,e),e}var t=o;return t.nodeType!==3&&(t.before(t=T()),E(t)),_(t,t),t}function Ye(){if(u)return _(o,null),o;var e=document.createDocumentFragment(),t=document.createComment(""),n=T();return e.append(t,n),_(t,n),e}function Be(e,t){if(u){O.nodes.end=o,D();return}e!==null&&e.before(t)}let b=!0;function We(e){b=e}function Ge(e,t){(e.__t??(e.__t=e.nodeValue))!==t&&(e.nodeValue=e.__t=t)}function ce(e,t){const n=t.anchor??t.target.appendChild(T());return H(()=>V(e,{...t,anchor:n}),!1)}function qe(e,t){t.intro=t.intro??!1;const n=t.target,i=u;try{return H(()=>{for(var r=n.firstChild;r&&(r.nodeType!==8||r.data!==L);)r=r.nextSibling;if(!r)throw A;C(!0),E(r),D();const a=V(e,{...t,anchor:r});if(o.nodeType!==8||o.data!==U)throw te(),A;return C(!1),a},!1)}catch(r){if(r===A)return t.recover===!1&&Z(),$(),ie(n),C(!1),ce(e,t);throw r}finally{C(i),ue()}}const g=new Map;function V(e,{target:t,anchor:n,props:i={},events:r,context:a,intro:s=!0}){$();var h=new Set,l=c=>{for(var p=0;p<c.length;p++){var f=c[p];if(!h.has(f)){h.add(f);var w=ae.includes(f);t.addEventListener(f,y,{passive:w});var I=g.get(f);I===void 0?(document.addEventListener(f,y,{passive:w}),g.set(f,1)):g.set(f,I+1)}}};l(Q(x)),N.add(l);var d=void 0,m=X(()=>(j(()=>{if(a){z({});var c=ee;c.c=a}r&&(i.$$events=r),u&&_(n,null),b=s,d=e(n,i)||{},b=!0,u&&(O.nodes.end=o),a&&J()}),()=>{for(var c of h){t.removeEventListener(c,y);var p=g.get(c);--p===0?(document.removeEventListener(c,y),g.delete(c)):g.set(c,p)}N.delete(l),R.delete(d)}));return R.set(d,m),d}let R=new WeakMap;function Ke(e){const t=R.get(e);t==null||t()}const le="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(le);export{M as $,me as A,ie as B,ve as C,he as D,pe as E,Re as F,se as G,A as H,Ue as I,Ne as J,be as K,Ae as L,b as M,Ie as N,Se as O,ge as P,qe as Q,ce as R,Ke as S,we as T,Ce as U,Ve as V,We as W,Le as X,$e as Y,ke as Z,oe as _,Be as a,Ge as b,Pe as c,o as d,D as e,Me as f,te as g,u as h,_ as i,E as j,F as k,Ee as l,Te as m,ye as n,re as o,De as p,C as q,Oe as r,He as s,xe as t,Ye as u,Fe as v,T as w,U as x,fe as y,_e as z};
