import{a as n,t as Y,b as w,c as k,s as J}from"./disclose-version.B_4w82yE.js";import{p as K,t as z,b as L,f as y,d,r as f,s as M,y as e,Y as m}from"./runtime.DVQZERNQ.js";import{i as B}from"./if.CZvgPTw3.js";import{e as N,i as O,s as A,a as P,b as Q}from"./string.DPJFtbJz.js";import{s as C,t as D}from"./style.DlPg-60_.js";import{s as R,a as S}from"./store.CJTJ4r2u.js";import{b as T}from"./paths.CDlzDBnA.js";import{p as U}from"./stores.BArBzmVi.js";const V=p=>p.split("/").filter(a=>a&&a!=="."&&a!==".."),W=p=>{const a=[],o=V(p);o.length&&a.push({type:"separator",path:"/"});let c="";for(let t=0;t<o.length;t++){const l=o[t];c+="/"+l,a.push({type:"piece",name:l,path:c}),t!==o.length-1&&a.push({type:"separator",path:c})}return a};var X=Y('<a class="svelte-c9k2g"> </a>'),Z=Y('<span class="separator svelte-c9k2g"><!></span>'),$=Y('<div class="breadcrumb svelte-c9k2g"><a class="svelte-c9k2g"><!></a><!></div>');function ca(p,a){K(a,!0);const o=R(),c=()=>S(U,"$page",o),t=m(()=>a.base_path??T),l=m(()=>a.path??Q(c().url.pathname,e(t))),j=m(()=>a.selected_path===null?null:a.selected_path??e(l)),E=m(()=>W(e(l))),q=m(()=>P(e(t),"/"));var g=$(),i=d(g),F=d(i);B(F,()=>a.children,_=>{var s=k(),h=y(s);C(h,()=>a.children),n(_,s)},_=>{var s=w("•");n(_,s)}),f(i);var G=M(i);N(G,17,()=>e(E),O,(_,s)=>{var h=k(),H=y(h);B(H,()=>e(s).type==="piece",u=>{var r=X(),b=d(r,!0);f(r),z(()=>{A(r,"href",e(t)+e(s).path),D(r,"selected",e(s).path===e(j)),J(b,e(s).name)}),n(u,r)},u=>{var r=Z(),b=d(r);B(b,()=>a.separator,x=>{var v=k(),I=y(v);C(I,()=>a.separator),n(x,v)},x=>{var v=w("/");n(x,v)}),f(r),n(u,r)}),n(_,h)}),f(g),z(()=>{A(i,"href",e(q)),D(i,"selected",e(q)===e(t)+e(j))}),n(p,g),L()}export{ca as B};
