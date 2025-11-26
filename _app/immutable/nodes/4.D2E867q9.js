import"../chunks/DsnmJJEf.js";import{p as E,G as Y,a as T,b as f,c as H,J as e,K as a,f as U,s as n,d as c,r as d,Y as q,t as L,e as I,Z as w}from"../chunks/DHO6FXVt.js";import{a as N,C as O,s as Q}from"../chunks/BSXo6fm4.js";import{r as F}from"../chunks/BWkFDIEM.js";import{s as Z}from"../chunks/DhjuqqsU.js";import{i as G}from"../chunks/vRd1uad4.js";import{e as R}from"../chunks/TFWhf4Yc.js";import{p as V}from"../chunks/2_GuBeZ3.js";import{p as W}from"../chunks/DmG9C-x3.js";import{S as X,f as $}from"../chunks/BwBMTvbF.js";import{D as ee}from"../chunks/BzpP-XNn.js";import{C as J}from"../chunks/CUJ5GcYe.js";import{l as te}from"../chunks/sHdIy6F2.js";var oe=U('<div class="icon svelte-1qgvuft"><!></div>'),ae=U('<!> <div class="content svelte-1qgvuft"><!></div> <!>',1);function B(j,r){E(r,!0);const h=u=>{var m=oe(),s=c(m);{var v=t=>{var l=q();L(()=>I(l,e(p))),f(t,l)},_=t=>{var l=Y(),P=T(l);Z(P,()=>e(p)),f(t,l)};G(s,t=>{typeof e(p)=="string"?t(v):t(_,!1)})}d(m),f(u,m)},o=V(r,"align",3,"left"),i=a(()=>!!r.href),k=a(()=>e(i)&&W.url.pathname===r.href),A=a(()=>r.tag??(e(i)?"a":"div")),b=a(()=>e(i)?{href:r.href}:void 0),x=a(()=>o()==="left"),D=a(()=>o()==="right"),K=a(()=>o()==="above"),y=a(()=>o()==="below"),z=a(()=>e(i)?"🔗":"🪧"),p=a(()=>r.icon??e(z));var C=Y(),S=T(C);R(S,()=>e(A),!1,(u,m)=>{N(u,()=>({class:"card",...r.attrs,...e(b),[O]:{link:e(i),selected:e(k),left:e(x),right:e(D),above:e(K),below:e(y)}}),void 0,void 0,void 0,"svelte-1qgvuft");var s=ae(),v=T(s);{var _=g=>{h(g)};G(v,g=>{(o()==="left"||o()==="above")&&g(_)})}var t=n(v,2),l=c(t);Z(l,()=>r.children),d(t);var P=n(t,2);{var M=g=>{h(g)};G(P,g=>{(o()==="right"||o()==="below")&&g(M)})}f(m,s)}),f(j,C),H()}var re=U('<main class="mx_auto p_lg width_upto_md"><section class="box"><header class="pt_sm"><!> <h1 class="mt_xl2 text_align_center">fuz_blog</h1></header> <blockquote>blog software from scratch with SvelteKit</blockquote></section> <section class="box"><div class="mb_lg"><!></div> <!></section> <section><p>To enable your generated <code>feed.xml</code>, include it as a <code>link</code> in your layout:</p> <!> <h3>Create a new post</h3> <!> <h3>Update an existing post</h3> <!></section> <section class="mb_xl5 box"><a class="chip mb_xl3">about</a> <!></section></main>');function he(j,r){E(r,!0);const h=te.get();var o=re(),i=c(o),k=c(i),A=c(k);X(A,{get data(){return $},size:"var(--icon_size_xl3)"}),w(2),d(k),w(2),d(i);var b=n(i,2),x=c(b),D=c(x);{const s=_=>{w();var t=q();L(()=>I(t,h.package_json.glyph)),f(_,t)};let v=a(()=>F("/docs"));B(D,{get href(){return e(v)},icon:s,children:(_,t)=>{w();var l=q("docs");f(_,l)},$$slots:{icon:!0,default:!0}})}d(x);var K=n(x,2);{let s=a(()=>F("/blog"));B(K,{get href(){return e(s)},icon:"🪧",children:(v,_)=>{w();var t=q("blog");f(v,t)},$$slots:{default:!0}})}d(b);var y=n(b,2),z=n(c(y),2);J(z,{content:`<!-- src/routes/+layout.svelte -->
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
$ gro update_post --help`}),d(y);var S=n(y,2),u=c(S),m=n(u,2);ee(m,{get library(){return h},root_url:"https://www.fuz.dev/"}),d(S),d(o),L(s=>Q(u,"href",s),[()=>F("/about")]),f(j,o),H()}export{he as component};
