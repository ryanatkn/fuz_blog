import{a as n,t as c,c as l,b as e,s as g,f as b,F as x,x as z,$ as P}from"../chunks/disclose-version.ArxuyjLf.js";import{p as v,t as u,a as _}from"../chunks/runtime.D3r2conq.js";import{i as T}from"../chunks/if.B-32xLrB.js";import{s as F,t as B}from"../chunks/class.CsGcL28L.js";import{a as H}from"../chunks/attributes.B-ThWE6a.js";import{F as I}from"../chunks/Feed_Item_Date.C4MgU9u_.js";import{g as j}from"../chunks/blog.DU5CF5Yp.js";var A=c('<h1 class="mt_xl5 mb_lg"> </h1> <p class="mb_xl5"><!></p>',1);function D(r,t){v(t,!0);var i=A(),a=b(i),d=l(a),m=e(e(a,!0)),o=l(m);I(o,{get item(){return t.item}}),u(()=>g(d,t.item.title)),n(r,i),_()}var O=c('<footer class="blog-post-footer svelte-10hcbw1"><div class="panel svelte-10hcbw1"><p><span>find me on <a href="https://joinmastodon.org/">Mastodon</a> and <a href="https://wikipedia.org/wiki/ActivityPub">ActivityPub</a>:</span> <br> <a href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a></p></div></footer>');function Z(r,t){t.item;var i=O();n(r,i)}var G=c("<article><header><!></header> <!> <hr> <!></article>"),K=c("<div>cannot find post <code> </code></div>");function M(r,t){v(t,!0);const a=j().items.find(o=>o.slug===t.post.slug);var d=x();z(o=>{u(()=>P.title=`${t.post.title??""} - ryanatkn.com/blog`)});var m=b(d);T(m,()=>a,o=>{var s=G();let f;var h=l(s),y=l(h);D(y,{item:a});var p=e(e(h,!0));F(p,()=>t.children);var k=e(e(p,!0)),w=e(e(k,!0));Z(w,{item:a}),u(()=>{f=H(s,f,{...t.attrs},!0,""),B(s,"width_md",!0)}),n(o,s)},o=>{var s=K(),f=e(l(s)),h=l(f);u(()=>g(h,t.post.slug)),n(o,s)}),n(r,d),_()}var R=c(`<p>This is <code>fuz_blog</code>'s first blog post. <code>fuz_blog</code> is a reusable SvelteKit library for adding blogs to your repos. It works!</p> <p>The source code is <a href="https://github.com/ryanatkn/fuz_blog">here on GitHub</a>.</p> <p>To watch the process of me creating this project (where the first part unfortunately has my
		giant head obscuring parts of the screen, but I fix it later!), visit TODO. The code is at <a href="https://github.com/ryanatkn/fuz_blog/pull/1">PR #1</a>.</p>`,1);const S={title:"Hello fuz_blog",slug:"hello-fuz-blog",date_published:"2024-07-10T16:04:49.688Z",date_modified:"2024-07-10T16:04:49.688Z",summary:"fuz_blog is now a reusable library",tags:["blog software","sveltekit"]};function U(r){M(r,{post:S,children:(t,i)=>{var a=R();n(t,a)},$$slots:{default:!0}})}export{U as component};
