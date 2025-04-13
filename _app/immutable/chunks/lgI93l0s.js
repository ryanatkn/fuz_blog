import{a3 as N,E as z,a4 as L,a5 as M,e as W,a as B,a6 as G,Z as I,q as P,G as y,a7 as S,a8 as O,a9 as U}from"./InZY7qpW.js";import{f as j,w as K}from"./Ze69Se2I.js";const Z=()=>performance.now(),_={tick:r=>requestAnimationFrame(r),now:()=>Z(),tasks:new Set};function q(){const r=_.now();_.tasks.forEach(a=>{a.c(r)||(_.tasks.delete(a),a.f())}),_.tasks.size!==0&&_.tick(q)}function D(r){let a;return _.tasks.size===0&&_.tick(q),{promise:new Promise(i=>{_.tasks.add(a={c:r,f:i})}),abort(){_.tasks.delete(a)}}}function b(r,a){K(()=>{r.dispatchEvent(new CustomEvent(a))})}function H(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const a=r.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(i=>i[0].toUpperCase()+i.slice(1)).join("")}function R(r){const a={},i=r.split(";");for(const n of i){const[d,f]=n.split(":");if(!d||f===void 0)break;const c=H(d.trim());a[c]=f.trim()}return a}const J=r=>r;function Y(r,a,i,n){var d=(r&G)!==0,f="both",c,l=a.inert,w=a.style.overflow,e,t;function h(){var v=U,o=N;S(null),O(null);try{return c??(c=i()(a,(n==null?void 0:n())??{},{direction:f}))}finally{S(v),O(o)}}var $={is_global:d,in(){a.inert=l,b(a,"introstart"),e=E(a,h(),t,1,()=>{b(a,"introend"),e==null||e.abort(),e=c=void 0,a.style.overflow=w})},out(v){a.inert=!0,b(a,"outrostart"),t=E(a,h(),e,0,()=>{b(a,"outroend"),v==null||v()})},stop:()=>{e==null||e.abort(),t==null||t.abort()}},p=N;if((p.transitions??(p.transitions=[])).push($),j){var u=d;if(!u){for(var s=p.parent;s&&(s.f&z)!==0;)for(;(s=s.parent)&&(s.f&L)===0;);u=!s||(s.f&M)!==0}u&&W(()=>{B(()=>$.in())})}}function E(r,a,i,n,d){var f=n===1;if(I(a)){var c,l=!1;return P(()=>{if(!l){var v=a({direction:f?"in":"out"});c=E(r,v,i,n,d)}}),{abort:()=>{l=!0,c==null||c.abort()},deactivate:()=>c.deactivate(),reset:()=>c.reset(),t:()=>c.t()}}if(i==null||i.deactivate(),!(a!=null&&a.duration))return d(),{abort:y,deactivate:y,reset:y,t:()=>n};const{delay:w=0,css:e,tick:t,easing:h=J}=a;var $=[];if(f&&i===void 0&&(t&&t(0,1),e)){var p=R(e(0,1));$.push(p,p)}var u=()=>1-n,s=r.animate($,{duration:w});return s.onfinish=()=>{var v=(i==null?void 0:i.t())??1-n;i==null||i.abort();var o=n-v,m=a.duration*Math.abs(o),k=[];if(m>0){var x=!1;if(e)for(var C=Math.ceil(m/16.666666666666668),F=0;F<=C;F+=1){var T=v+o*h(F/C),A=R(e(T,1-T));k.push(A),x||(x=A.overflow==="hidden")}x&&(r.style.overflow="hidden"),u=()=>{var g=s.currentTime;return v+o*h(g/m)},t&&D(()=>{if(s.playState!=="running")return!1;var g=u();return t(g,1-g),!0})}s=r.animate(k,{duration:m,fill:"forwards"}),s.onfinish=()=>{u=()=>n,t==null||t(n,1-n),d()}},{abort:()=>{s&&(s.cancel(),s.effect=null,s.onfinish=y)},deactivate:()=>{d=y},reset:()=>{n===0&&(t==null||t(1,0))},t:()=>u()}}function Q(r){const a=r-1;return a*a*a+1}function aa(r,{delay:a=0,duration:i=400,easing:n=Q,axis:d="y"}={}){const f=getComputedStyle(r),c=+f.opacity,l=d==="y"?"height":"width",w=parseFloat(f[l]),e=d==="y"?["top","bottom"]:["left","right"],t=e.map(o=>`${o[0].toUpperCase()}${o.slice(1)}`),h=parseFloat(f[`padding${t[0]}`]),$=parseFloat(f[`padding${t[1]}`]),p=parseFloat(f[`margin${t[0]}`]),u=parseFloat(f[`margin${t[1]}`]),s=parseFloat(f[`border${t[0]}Width`]),v=parseFloat(f[`border${t[1]}Width`]);return{delay:a,duration:i,easing:n,css:o=>`overflow: hidden;opacity: ${Math.min(o*20,1)*c};${l}: ${o*w}px;padding-${e[0]}: ${o*h}px;padding-${e[1]}: ${o*$}px;margin-${e[0]}: ${o*p}px;margin-${e[1]}: ${o*u}px;border-${e[0]}-width: ${o*s}px;border-${e[1]}-width: ${o*v}px;min-${l}: 0`}}export{aa as s,Y as t};
