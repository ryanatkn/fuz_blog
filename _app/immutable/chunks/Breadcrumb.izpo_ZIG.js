import{a as n,t as V,b as w,c as k,s as J}from"./disclose-version.TOIoXUbB.js";import{p as K,t as z,b as L,f as y,d,r as f,s as M,y as e,V as h}from"./runtime.DPPt2N6S.js";import{i as B}from"./if.D69ZxXcx.js";import{e as N,i as O,s as A,a as P,b as Q}from"./string.C9ERUBYz.js";import{s as C,t as D}from"./style.C_h3Rcuf.js";import{s as R,a as S,p as T}from"./stores.5oLNdmap.js";import{b as U}from"./paths.DTfD2cEn.js";const W=p=>p.split("/").filter(a=>a&&a!=="."&&a!==".."),X=p=>{const a=[],o=W(p);o.length&&a.push({type:"separator",path:"/"});let c="";for(let t=0;t<o.length;t++){const l=o[t];c+="/"+l,a.push({type:"piece",name:l,path:c}),t!==o.length-1&&a.push({type:"separator",path:c})}return a};var Y=V('<a class="svelte-c9k2g"> </a>'),Z=V('<span class="separator svelte-c9k2g"><!></span>'),$=V('<div class="breadcrumb svelte-c9k2g"><a class="svelte-c9k2g"><!></a><!></div>');function pa(p,a){K(a,!0);const o=R(),c=()=>S(T,"$page",o),t=h(()=>a.base_path??U),l=h(()=>a.path??Q(c().url.pathname,e(t))),j=h(()=>a.selected_path===null?null:a.selected_path??e(l)),E=h(()=>X(e(l))),q=h(()=>P(e(t),"/"));var g=$(),i=d(g),F=d(i);B(F,()=>a.children,_=>{var s=k(),m=y(s);C(m,()=>a.children),n(_,s)},_=>{var s=w("•");n(_,s)}),f(i);var G=M(i);N(G,17,()=>e(E),O,(_,s)=>{var m=k(),H=y(m);B(H,()=>e(s).type==="piece",u=>{var r=Y(),b=d(r);f(r),z(()=>{A(r,"href",e(t)+e(s).path),D(r,"selected",e(s).path===e(j)),J(b,e(s).name)}),n(u,r)},u=>{var r=Z(),b=d(r);B(b,()=>a.separator,x=>{var v=k(),I=y(v);C(I,()=>a.separator),n(x,v)},x=>{var v=w("/");n(x,v)}),f(r),n(u,r)}),n(_,m)}),f(g),z(()=>{A(i,"href",e(q)),D(i,"selected",e(q)===e(t)+e(j))}),n(p,g),L()}export{pa as B};
