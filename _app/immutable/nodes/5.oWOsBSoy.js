import{c as s,s as o,a as p,t as n,r as t,b as q}from"../chunks/disclose-version.CNfpEu1G.js";import{p as $,b as k,t as g,k as v}from"../chunks/runtime.DIReHROP.js";import{e as F,s as f,i as w}from"../chunks/attributes.BOVHSUrf.js";import{b as A}from"../chunks/paths.Dkl1DwRj.js";import{F as D,t as I}from"../chunks/Feed_Item_Date.KaWOqVSP.js";import{g as j}from"../chunks/blog.Blm5N7fJ.js";var z=n('<li class="blog_card svelte-11qlyog"><a> </a> <div class="date svelte-11qlyog"><!></div></li>'),B=n("no blog posts yet!",1),C=n('<section class="blog svelte-11qlyog"><ol class="panel svelte-11qlyog" reversed></ol> <a class="feed_link chip svelte-11qlyog" download="">Atom feed</a></section>');function N(_,b){$(b,!0);const c=j(),u=c.items.slice().reverse();var r=C(),l=s(r);F(l,21,()=>u,w,(i,e,E)=>{var m=z(),a=s(m);g(()=>f(a,"href",I(v(e).url,c.home_page_url)));var x=s(a);t(a);var d=o(o(a,!0)),y=s(d);D(y,{get item(){return v(e)}}),t(d),t(m),g(()=>q(x,v(e).title)),p(i,m)},i=>{var e=B();p(i,e)}),t(l);var h=o(o(l,!0));f(h,"href",`${A??""}/blog/feed.xml`),t(r),p(_,r),k()}export{N as component};
