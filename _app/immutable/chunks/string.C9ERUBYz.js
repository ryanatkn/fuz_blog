import{ae as fe,h as te,af as m,i as N,m as O,j as ue,ac as le,L as oe,ag as ee,H as ve,k as V,n as R,x as C,ah as ce,o as re,v as ae,w as _e,ai as z,q as D,I as F,aj as x,F as G,ak as $,al as de,Y as he,C as U,am as ge,an as Ee,ao as Ae,ad as pe,ap as Te,a9 as ke,aq as Ie,K as X,ar as Ne,as as we}from"./runtime.DPPt2N6S.js";import{i as ye,g as J,h as be,j as Ce,k as Le}from"./disclose-version.TOIoXUbB.js";let L=null;function $e(e){L=e}function qe(e,r){return r}function He(e,r,a,f){for(var u=[],d=r.length,v=0;v<d;v++)ge(r[v].e,u,!0);var c=d>0&&u.length===0&&a!==null;if(c){var T=a.parentNode;Ee(T),T.append(a),f.clear(),w(e,r[0].prev,r[d-1].next)}Ae(u,()=>{for(var A=0;A<d;A++){var E=r[A];c||(f.delete(E.k),w(e,E.prev,E.next)),pe(E.e,!c)}})}function Ye(e,r,a,f,u,d=null){var v=e,c={flags:r,items:new Map,first:null},T=(r&m)!==0;if(T){var A=e;v=N?O(le(A)):A.appendChild(fe())}N&&ue();var E=null;te(()=>{var t=a(),g=oe(t)?t:t==null?[]:ee(t),o=g.length;let _=!1;if(N){var p=v.data===ve;p!==(o===0)&&(v=V(),O(v),R(!1),_=!0)}if(N){for(var h=null,i,n=0;n<o;n++){if(C.nodeType===8&&C.data===ce){v=C,_=!0,R(!1);break}var s=g[n],l=f(s,n);i=se(C,c,h,null,s,l,n,u,r),c.items.set(l,i),h=i}o>0&&O(V())}N||Me(g,c,v,u,r,f),d!==null&&(o===0?E?re(E):E=ae(()=>d(v)):E!==null&&_e(E,()=>{E=null})),_&&R(!0)}),N&&(v=C)}function Me(e,r,a,f,u,d){var Y,B,P,W;var v=(u&Te)!==0,c=(u&(x|$))!==0,T=e.length,A=r.items,E=r.first,t=E,g,o=null,_,p=[],h=[],i,n,s,l;if(v)for(l=0;l<T;l+=1)i=e[l],n=d(i,l),s=A.get(n),s!==void 0&&((Y=s.a)==null||Y.measure(),(_??(_=new Set)).add(s));for(l=0;l<T;l+=1){if(i=e[l],n=d(i,l),s=A.get(n),s===void 0){var k=t?t.e.nodes_start:a;o=se(k,r,o,o===null?r.first:o.next,i,n,l,f,u),A.set(n,o),p=[],h=[],t=o.next;continue}if(c&&Oe(s,i,l,u),s.e.f&z&&(re(s.e),v&&((B=s.a)==null||B.unfix(),(_??(_=new Set)).delete(s))),s!==t){if(g!==void 0&&g.has(s)){if(p.length<h.length){var y=h[0],I;o=y.prev;var q=p[0],H=p[p.length-1];for(I=0;I<p.length;I+=1)Q(p[I],y,a);for(I=0;I<h.length;I+=1)g.delete(h[I]);w(r,q.prev,H.next),w(r,o,q),w(r,H,y),t=y,o=H,l-=1,p=[],h=[]}else g.delete(s),Q(s,t,a),w(r,s.prev,s.next),w(r,s,o===null?r.first:o.next),w(r,o,s),o=s;continue}for(p=[],h=[];t!==null&&t.k!==n;)t.e.f&z||(g??(g=new Set)).add(t),h.push(t),t=t.next;if(t===null)continue;s=t}p.push(s),o=s,t=s.next}if(t!==null||g!==void 0){for(var b=g===void 0?[]:ee(g);t!==null;)b.push(t),t=t.next;var M=b.length;if(M>0){var ie=u&m&&T===0?a:null;if(v){for(l=0;l<M;l+=1)(P=b[l].a)==null||P.measure();for(l=0;l<M;l+=1)(W=b[l].a)==null||W.fix()}He(r,b,ie,A)}}v&&D(()=>{var K;if(_!==void 0)for(s of _)(K=s.a)==null||K.apply()}),F.first=r.first&&r.first.e,F.last=o&&o.e}function Oe(e,r,a,f){f&x&&G(e.v,r),f&$?G(e.i,a):e.i=a}function se(e,r,a,f,u,d,v,c,T){var A=L;try{var E=(T&x)!==0,t=(T&de)===0,g=E?t?he(u):U(u):u,o=T&$?U(v):v,_={i:o,v:g,k:d,a:null,e:null,prev:a,next:f};return L=_,_.e=ae(()=>c(e,g,o),N),_.e.prev=a&&a.e,_.e.next=f&&f.e,a===null?r.first=_:(a.next=_,a.e.next=_.e),f!==null&&(f.prev=_,f.e.prev=_.e),_}finally{L=A}}function Q(e,r,a){for(var f=e.next?e.next.e.nodes_start:a,u=r?r.e.nodes_start:a,d=e.e.nodes_start;d!==f;){var v=ke(d);u.before(d),d=v}}function w(e,r,a){r===null?e.first=a:(r.next=a,r.e.next=a&&a.e),a!==null&&(a.prev=r,a.e.prev=r&&r.e)}function Re(e,r){if(r){const a=document.body;e.autofocus=!0,D(()=>{document.activeElement===a&&e.focus()})}}let Z=!1;function Se(){Z||(Z=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const a of e.target.elements)(r=a.__on_r)==null||r.call(a)})},{capture:!0}))}function Be(e){if(N){var r=!1,a=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var f=e.value;S(e,"value",null),e.value=f}if(e.hasAttribute("checked")){var u=e.checked;S(e,"checked",null),e.checked=u}}};e.__on_r=a,we(a),Se()}}function S(e,r,a,f){var u=e.__attributes??(e.__attributes={});N&&(u[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||u[r]!==(u[r]=a)&&(r==="loading"&&(e[Ie]=a),a==null?e.removeAttribute(r):typeof a!="string"&&ne(e).includes(r)?e[r]=a:e.setAttribute(r,a))}function Pe(e,r,a,f,u=!1,d=!1,v=!1){var c=r||{},T=e.tagName==="OPTION";for(var A in r)A in a||(a[A]=null);f!==void 0&&(a.class=a.class?a.class+" "+f:f);var E=ne(e),t=e.__attributes??(e.__attributes={}),g=[];for(const i in a){let n=a[i];if(T&&i==="value"&&n==null){e.value=e.__value="",c[i]=n;continue}var o=c[i];if(n!==o){c[i]=n;var _=i[0]+i[1];if(_!=="$$")if(_==="on"){const s={},l="$$"+i;let k=i.slice(2);var p=Le(k);if(ye(k)&&(k=k.slice(0,-7),s.capture=!0),!p&&o){if(n!=null)continue;e.removeEventListener(k,c[l],s),c[l]=null}if(n!=null)if(p)e[`__${k}`]=n,be([k]);else{let y=function(I){c[i].call(this,I)};r?c[l]=J(k,e,y,s):g.push([i,n,()=>c[l]=J(k,e,y,s)])}}else if(i==="style"&&n!=null)e.style.cssText=n+"";else if(i==="autofocus")Re(e,!!n);else if(i==="__value"||i==="value"&&n!=null)e.value=e[i]=e.__value=n;else{var h=i;u||(h=Ce(h)),n==null&&!d?(t[i]=null,e.removeAttribute(i)):E.includes(h)&&(d||typeof n!="string")?e[h]=n:typeof n!="function"&&(N&&(h==="src"||h==="href"||h==="srcset")||S(e,h,n))}}}return r||D(()=>{if(e.isConnected)for(const[i,n,s]of g)c[i]===n&&s()}),c}var j=new Map;function ne(e){var r=j.get(e.nodeName);if(r)return r;j.set(e.nodeName,r=[]);for(var a,f=X(e);f.constructor.name!=="Element";){a=Ne(f);for(var u in a)a[u].set&&r.push(u);f=X(f)}return r}const We=(e,r)=>!r||!e.startsWith(r)?e:e.substring(r.length),Ke=(e,r)=>!r||!e.endsWith(r)?e:e.substring(0,e.length-r.length),Ve=(e,r)=>e.endsWith(r)?e:e+r;export{Ve as a,We as b,Pe as c,Ke as d,Ye as e,$e as f,L as g,Se as h,qe as i,Be as r,S as s};
