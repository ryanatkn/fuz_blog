import{a1 as $,av as q,N as z,q as U,ae as T,j as Y,az as j,k as _,aA as V,a9 as D,v as E,o as b,z as u,ac as m,K as M,aB as F,aC as G,m as P,aD as k,ab as S,ah as x,aa as K,aE as J,an as Q,ag as X,aF as Z,x as ee,p as te,b as re,c as ae}from"./runtime.GnFFOTvo.js";const W=new Set,R=new Set;function ne(e,t,r,i){function n(a){if(i.capture||w.call(t,a),!a.cancelBubble)return r.call(this,a)}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?U(()=>{t.addEventListener(e,n,i)}):t.addEventListener(e,n,i),n}function _e(e,t,r,i,n){var a={capture:i,passive:n},o=ne(e,t,r,a);(t===document.body||t===window||t===document)&&$(()=>{t.removeEventListener(e,o,a)})}function he(e){for(var t=0;t<e.length;t++)W.add(e[t]);for(var r of R)r(e)}function w(e){var O;var t=this,r=t.ownerDocument,i=e.type,n=((O=e.composedPath)==null?void 0:O.call(e))||[],a=n[0]||e.target,o=0,p=e.__root;if(p){var d=n.indexOf(p);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var l=n.indexOf(t);if(l===-1)return;d<=l&&(o=d)}if(a=n[o]||e.target,a!==t){q(e,"currentTarget",{configurable:!0,get(){return a||r}});try{for(var g,s=[];a!==null;){var v=a.assignedSlot||a.parentNode||a.host||null;try{var f=a["__"+i];if(f!==void 0&&!a.disabled)if(z(f)){var[N,...A]=f;N.apply(a,[e,...A])}else f.call(a,e)}catch(L){g?s.push(L):g=L}if(e.cancelBubble||v===t||v===null)break;a=v}if(g){for(let L of s)queueMicrotask(()=>{throw L});throw g}}finally{e.__root=t,delete e.currentTarget}}}let c;function oe(){c=void 0}function pe(e){let t=null,r=_;var i;if(_){for(t=u,c===void 0&&(c=m(document.head));c!==null&&(c.nodeType!==8||c.data!==V);)c=D(c);c===null?E(!1):c=b(D(c))}_||(i=document.head.appendChild(T()));try{Y(()=>e(i),j)}finally{r&&(E(!0),c=u,b(t))}}function B(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function h(e,t){var r=M;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function ve(e,t){var r=(t&F)!==0,i=(t&G)!==0,n,a=!e.startsWith("<!>");return()=>{if(_)return h(u,null),u;n===void 0&&(n=B(a?e:"<!>"+e),r||(n=m(n)));var o=i?document.importNode(n,!0):n.cloneNode(!0);if(r){var p=m(o),d=o.lastChild;h(p,d)}else h(o,o);return o}}function me(e,t,r="svg"){var i=!e.startsWith("<!>"),n=(t&F)!==0,a=`<${r}>${i?e:"<!>"+e}</${r}>`,o;return()=>{if(_)return h(u,null),u;if(!o){var p=B(a),d=m(p);if(n)for(o=document.createDocumentFragment();m(d);)o.appendChild(m(d));else o=m(d)}var l=o.cloneNode(!0);if(n){var g=m(l),s=l.lastChild;h(g,s)}else h(l,l);return l}}function ge(e=""){if(!_){var t=T(e+"");return h(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=T()),b(r)),h(r,r),r}function ye(){if(_)return h(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=T();return e.append(t,r),h(t,r),e}function Ee(e,t){if(_){M.nodes_end=u,P();return}e!==null&&e.before(t)}function we(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ie=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Te(e){return ie.includes(e)}const se={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function be(e){return e=e.toLowerCase(),se[e]??e}const ue=["touchstart","touchmove"];function de(e){return ue.includes(e)}let C=!0;function Ne(e){C=e}function Ae(e,t){t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function le(e,t){const r=t.anchor??t.target.appendChild(T());return H(e,{...t,anchor:r})}function Le(e,t){k(),t.intro=t.intro??!1;const r=t.target,i=_,n=u;try{for(var a=m(r);a&&(a.nodeType!==8||a.data!==V);)a=D(a);if(!a)throw S;E(!0),b(a),P();const o=H(e,{...t,anchor:a});if(u===null||u.nodeType!==8||u.data!==x)throw K(),S;return E(!1),o}catch(o){if(o===S)return t.recover===!1&&J(),k(),Q(r),E(!1),le(e,t);throw o}finally{E(i),b(n),oe()}}const y=new Map;function H(e,{target:t,anchor:r,props:i={},events:n,context:a,intro:o=!0}){k();var p=new Set,d=s=>{for(var v=0;v<s.length;v++){var f=s[v];if(!p.has(f)){p.add(f);var N=de(f);t.addEventListener(f,w,{passive:N});var A=y.get(f);A===void 0?(document.addEventListener(f,w,{passive:N}),y.set(f,1)):y.set(f,A+1)}}};d(X(W)),R.add(d);var l=void 0,g=Z(()=>(ee(()=>{if(a){te({});var s=ae;s.c=a}n&&(i.$$events=n),_&&h(r,null),C=o,l=e(r,i)||{},C=!0,_&&(M.nodes_end=u),a&&re()}),()=>{for(var s of p){t.removeEventListener(s,w);var v=y.get(s);--v===0?(document.removeEventListener(s,w),y.delete(s)):y.set(s,v)}R.delete(d),I.delete(l)}));return I.set(l,g),l}let I=new WeakMap;function Se(e){const t=I.get(e);t&&t()}const fe="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fe);export{Ee as a,ge as b,ye as c,C as d,h as e,B as f,ne as g,he as h,we as i,be as j,Te as k,Le as l,le as m,me as n,Ne as o,pe as p,_e as q,Ae as s,ve as t,Se as u};
