import{ae as ne,h as fe,af as x,i as I,v as D,j as te,w as ue,T as le,ag as m,A as oe,B as U,C as O,m as y,ah as ce,D as ee,k as ae,E as _e,ai as ve,q as H,P as z,aj as P,N as K,ak as $,al as de,a3 as he,L as X,am as ge,an as Ee,ao as Ae,x as Ne,ap as Te,n as Ie,aq as be,R as F,ar as ke,as as pe,at as we}from"./runtime.CxHluMcO.js";import{i as ye,g as J,h as Ce,j as Le,k as Re}from"./disclose-version.WYXBlapg.js";let R=null;function Ve(e){R=e}function We(e,a){return a}function Se(e,a,r,s){for(var i=[],h=a.length,t=0;t<h;t++)ge(a[t].e,i,!0);var T=h>0&&i.length===0&&r!==null;if(T){var N=r.parentNode;Ee(N),N.append(r),s.clear(),k(e,a[0].prev,a[h-1].next)}Ae(i,()=>{for(var E=0;E<h;E++){var A=a[E];T||(s.delete(A.k),k(e,A.prev,A.next)),Ne(A.e,!T)}})}function Ye(e,a,r,s,i,h=null){var t=e,T={flags:a,items:new Map,first:null},N=(a&x)!==0;if(N){var E=e;t=I?D(ue(E)):E.appendChild(ne())}I&&te();var A=null;fe(()=>{var l=r(),g=le(l)?l:l==null?[]:m(l),c=g.length;let _=!1;if(I){var v=t.data===oe;v!==(c===0)&&(t=U(),D(t),O(!1),_=!0)}if(I){for(var u=null,o,d=0;d<c;d++){if(y.nodeType===8&&y.data===ce){t=y,_=!0,O(!1);break}var n=g[d],f=s(n,d);o=re(y,T,u,null,n,f,d,i,a),T.items.set(f,o),u=o}c>0&&D(U())}I||Me(g,T,t,i,a,s),h!==null&&(c===0?A?ee(A):A=ae(()=>h(t)):A!==null&&_e(A,()=>{A=null})),_&&O(!0)}),I&&(t=y)}function Me(e,a,r,s,i,h){var B,V,W,Y;var t=(i&Te)!==0,T=(i&(P|$))!==0,N=e.length,E=a.items,A=a.first,l=A,g,c=null,_,v=[],u=[],o,d,n,f;if(t)for(f=0;f<N;f+=1)o=e[f],d=h(o,f),n=E.get(d),n!==void 0&&((B=n.a)==null||B.measure(),(_??(_=new Set)).add(n));for(f=0;f<N;f+=1){if(o=e[f],d=h(o,f),n=E.get(d),n===void 0){var L=l?l.e.nodes_start:r;c=re(L,a,c,c===null?a.first:c.next,o,d,f,s,i),E.set(d,c),v=[],u=[],l=c.next;continue}if(T&&De(n,o,f,i),n.e.f&ve&&(ee(n.e),t&&((V=n.a)==null||V.unfix(),(_??(_=new Set)).delete(n))),n!==l){if(g!==void 0&&g.has(n)){if(v.length<u.length){var p=u[0],b;c=p.prev;var q=v[0],S=v[v.length-1];for(b=0;b<v.length;b+=1)Q(v[b],p,r);for(b=0;b<u.length;b+=1)g.delete(u[b]);k(a,q.prev,S.next),k(a,c,q),k(a,S,p),l=p,c=S,f-=1,v=[],u=[]}else g.delete(n),Q(n,l,r),k(a,n.prev,n.next),k(a,n,c===null?a.first:c.next),k(a,c,n),c=n;continue}for(v=[],u=[];l!==null&&l.k!==d;)(g??(g=new Set)).add(l),u.push(l),l=l.next;if(l===null)continue;n=l}v.push(n),c=n,l=n.next}if(l!==null||g!==void 0){for(var w=g===void 0?[]:m(g);l!==null;)w.push(l),l=l.next;var M=w.length;if(M>0){var ie=i&x&&N===0?r:null;if(t){for(f=0;f<M;f+=1)(W=w[f].a)==null||W.measure();for(f=0;f<M;f+=1)(Y=w[f].a)==null||Y.fix()}Se(a,w,ie,E)}}t&&H(()=>{var G;if(_!==void 0)for(n of _)(G=n.a)==null||G.apply()}),z.first=a.first&&a.first.e,z.last=c&&c.e}function De(e,a,r,s){s&P&&K(e.v,a),s&$?K(e.i,r):e.i=r}function re(e,a,r,s,i,h,t,T,N){var E=R;try{var A=(N&P)!==0,l=(N&de)===0,g=A?l?he(i):X(i):i,c=N&$?X(t):t,_={i:c,v:g,k:h,a:null,e:null,prev:r,next:s};return R=_,_.e=ae(()=>T(e,g,c),I),_.e.prev=r&&r.e,_.e.next=s&&s.e,r===null?a.first=_:(r.next=_,r.e.next=_.e),s!==null&&(s.prev=_,s.e.prev=_.e),_}finally{R=E}}function Q(e,a,r){for(var s=e.next?e.next.e.nodes_start:r,i=a?a.e.nodes_start:r,h=e.e.nodes_start;h!==s;){var t=Ie(h);i.before(h),h=t}}function k(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function Oe(e,a){if(a){const r=document.body;e.autofocus=!0,H(()=>{document.activeElement===r&&e.focus()})}}let Z=!1;function He(){Z||(Z=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var a;if(!e.defaultPrevented)for(const r of e.target.elements)(a=r.__on_r)==null||a.call(r)})},{capture:!0}))}function Ge(e){if(I){var a=!1,r=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var s=e.value;C(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var i=e.checked;C(e,"checked",null),e.checked=i}}};e.__on_r=r,we(r),He()}}function C(e,a,r,s){var i=e.__attributes??(e.__attributes={});I&&(i[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||i[a]!==(i[a]=r)&&(a==="loading"&&(e[be]=r),r==null?e.removeAttribute(a):typeof r!="string"&&se(e).includes(a)?e[a]=r:e.setAttribute(a,r))}function Pe(e,a,r){if(a in e){try{var s=e[a]}catch{C(e,a,r);return}var i=typeof s=="boolean"&&r===""?!0:r;(typeof s!="object"||s!==i)&&(e[a]=i)}else C(e,a,r)}function $e(e,a,r,s,i=!1,h){var t=a||{},T=e.tagName==="OPTION";for(var N in a)N in r||(r[N]=null);s!==void 0&&(r.class=r.class?r.class+" "+s:s);var E=j.get(e.nodeName);E||j.set(e.nodeName,E=se(e));var A=e.__attributes??(e.__attributes={}),l=[];for(const u in r){let o=r[u];if(T&&u==="value"&&o==null){e.value=e.__value="",t[u]=o;continue}var g=t[u];if(o!==g){t[u]=o;var c=u[0]+u[1];if(c!=="$$")if(c==="on"){const d={},n="$$"+u;let f=u.slice(2);var _=Re(f);if(ye(f)&&(f=f.slice(0,-7),d.capture=!0),!_&&g){if(o!=null)continue;e.removeEventListener(f,t[n],d),t[n]=null}if(o!=null)if(_)e[`__${f}`]=o,Ce([f]);else{let L=function(p){t[u].call(this,p)};a?t[n]=J(f,e,L,d):l.push([u,o,()=>t[n]=J(f,e,L,d)])}}else if(o==null)A[u]=null,e.removeAttribute(u);else if(u==="style")e.style.cssText=o+"";else if(u==="autofocus")Oe(e,!!o);else if(u==="__value"||u==="value")e.value=e[u]=e.__value=o;else{var v=u;i||(v=Le(v)),E.includes(v)&&typeof o!="string"?e[v]=o:typeof o!="function"&&(I&&(v==="src"||v==="href"||v==="srcset")||C(e,v,o))}}}return a||H(()=>{if(e.isConnected)for(const[u,o,d]of l)t[u]===o&&d()}),t}function Ue(e,a,r,s){if(e.tagName.includes("-")){for(var i in a)i in r||(r[i]=null);s!==void 0&&(r.class=r.class?r.class+" "+s:s);for(i in r)Pe(e,i,r[i]);return r}return $e(e,a,r,s,e.namespaceURI!==pe)}var j=new Map;function se(e){for(var a=[],r,s=F(e);s.constructor.name!=="Element";){r=ke(s);for(var i in r)r[i].set&&a.push(i);s=F(s)}return a}const ze=(e,a)=>!a||!e.startsWith(a)?e:e.substring(a.length),Ke=(e,a)=>!a||!e.endsWith(a)?e:e.substring(0,e.length-a.length),Xe=(e,a)=>e.endsWith(a)?e:e+a;export{Xe as a,ze as b,$e as c,Ke as d,Ye as e,Ve as f,R as g,Ue as h,We as i,He as j,Ge as r,C as s};
