import"../chunks/DsnmJJEf.js";import{p as I,G as B,a as T,b as f,c as M,J as e,K as a,f as U,s as n,d as c,r as d,ac as q,t as L,e as N,ae as w}from"../chunks/BEFMwCt1.js";import{a as Q,C as R,s as V}from"../chunks/KHkr-e8v.js";import{r as F}from"../chunks/BIeWwljG.js";import{s as E}from"../chunks/CFYmBkfX.js";import{i as G}from"../chunks/D4E-bd8f.js";import{e as W}from"../chunks/bVcm0yHt.js";import{p as X}from"../chunks/DOaxguiL.js";import{p as Y}from"../chunks/Dog1JHyD.js";import{S as Z,f as $}from"../chunks/qtx6A5w_.js";import{D as ee}from"../chunks/DfygXU2I.js";import{C as J}from"../chunks/D8_irBHJ.js";import{p as te}from"../chunks/BFK8GNdq.js";var oe=U('<div class="icon svelte-1qgvuft"><!></div>'),ae=U('<!> <div class="content svelte-1qgvuft"><!></div> <!>',1);function H(j,r){I(r,!0);const h=u=>{var m=oe(),s=c(m);{var v=t=>{var l=q();L(()=>N(l,e(p))),f(t,l)},_=t=>{var l=B(),P=T(l);E(P,()=>e(p)),f(t,l)};G(s,t=>{typeof e(p)=="string"?t(v):t(_,!1)})}d(m),f(u,m)},o=X(r,"align",3,"left"),i=a(()=>!!r.href),y=a(()=>e(i)&&Y.url.pathname===r.href),A=a(()=>r.tag??(e(i)?"a":"div")),b=a(()=>e(i)?{href:r.href}:void 0),x=a(()=>o()==="left"),D=a(()=>o()==="right"),K=a(()=>o()==="above"),k=a(()=>o()==="below"),z=a(()=>e(i)?"🔗":"🪧"),p=a(()=>r.icon??e(z));var C=B(),S=T(C);W(S,()=>e(A),!1,(u,m)=>{Q(u,()=>({class:"card",...r.attrs,...e(b),[R]:{link:e(i),selected:e(y),left:e(x),right:e(D),above:e(K),below:e(k)}}),void 0,void 0,void 0,"svelte-1qgvuft");var s=ae(),v=T(s);{var _=g=>{h(g)};G(v,g=>{(o()==="left"||o()==="above")&&g(_)})}var t=n(v,2),l=c(t);E(l,()=>r.children),d(t);var P=n(t,2);{var O=g=>{h(g)};G(P,g=>{(o()==="right"||o()==="below")&&g(O)})}f(m,s)}),f(j,C),M()}var re=U('<main class="mx_auto p_lg width_upto_md"><section class="box"><header class="pt_sm"><!> <h1 class="mt_xl2 text_align_center">fuz_blog</h1></header> <blockquote>blog software from scratch with SvelteKit</blockquote></section> <section class="box"><div class="mb_lg"><!></div> <!></section> <section><p>To enable your generated <code>feed.xml</code>, include it as a <code>link</code> in your layout:</p> <!> <h3>Create a new post</h3> <!> <h3>Update an existing post</h3> <!></section> <section class="mb_xl5 box"><a class="chip mb_xl3">about</a> <!></section></main>');function he(j,r){I(r,!0);const h=te.get();var o=re(),i=c(o),y=c(i),A=c(y);Z(A,{get data(){return $},size:"var(--icon_size_xl3)"}),w(2),d(y),w(2),d(i);var b=n(i,2),x=c(b),D=c(x);{const s=_=>{w();var t=q();L(()=>N(t,h.package_json.glyph)),f(_,t)};let v=a(()=>F("/docs"));H(D,{get href(){return e(v)},icon:s,children:(_,t)=>{w();var l=q("docs");f(_,l)},$$slots:{icon:!0,default:!0}})}d(x);var K=n(x,2);{let s=a(()=>F("/blog"));H(K,{get href(){return e(s)},icon:"🪧",children:(v,_)=>{w();var t=q("blog");f(v,t)},$$slots:{default:!0}})}d(b);var k=n(b,2),z=n(c(k),2);J(z,{content:`<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import {set_blog_feed, get_blog_feed} from '@ryanatkn/fuz_blog/blog.js';

	import {feed} from '$routes/blog/feed.js';

	set_blog_feed(feed);

	// To get the feed from any descendent:
	const feed = get_blog_feed(); 
<\/script>

<svelte:head>
	<title>(your title here)</title>
	<link
		rel="alternate"
		type="application/atom+xml"
		title="Atom"
		href={feed.atom.feed_url}
	/>
</svelte:head>`});var p=n(z,4);J(p,{content:`$ gro post "Some post title"
$ gro post --help`});var C=n(p,4);J(C,{content:`$ gro update_post 1
$ gro update_post --help`}),d(k);var S=n(k,2),u=c(S),m=n(u,2);ee(m,{get pkg(){return h},root_url:"https://www.fuz.dev/"}),d(S),d(o),L(s=>V(u,"href",s),[()=>F("/about")]),f(j,o),M()}export{he as component};
