import{c,a as g,K as L,r as f,s as _,t as z,v as k,f as b,b as I}from"./disclose-version.CNfpEu1G.js";import{t as C,k as x,F as H,p as G,b as M}from"./runtime.DIReHROP.js";import{i as m}from"./if.DnSX37ug.js";import{t as E,a as F,s as y}from"./style.CoUtutqT.js";import{a as K,s as w}from"./attributes.BOVHSUrf.js";import{p as j}from"./props.B1Y7IGF9.js";import{s as P,a as h,e as S}from"./string.ZJuK4sHN.js";const T=e=>P(h(h(e,"https://"),"www."),"/");var q=L(`<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02
		15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32
		12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12
		11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33
		11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74
		5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95
		7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31
		12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12
		7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01
		13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71
		14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"></path></svg>`);function A(e,t){const r=j(t,"fill",3,"var(--text_color, #000)"),p=j(t,"size",3,"var(--space_xl7, 64px)"),n=j(t,"label",3,"the GitHub icon, an octocat silhouette"),i=H(()=>t.width??p()),d=H(()=>t.height??p());var a=q();let u;var v=c(a);f(a),C(()=>{u=K(a,u,{viewBox:"0 0 1024 1024",...t.attrs,"aria-label":n(),class:t.classes},"svelte-16ciom8",!0),E(a,"inline",t.inline),F(a,"width",x(i),void 0,!0),F(a,"height",x(d),void 0,!0),w(v,"fill",r())}),g(e,a)}var N=z('<div class="root_url svelte-cs8o0f"><a> </a></div>'),O=z('<footer class="box"><!> <div class="logo box panel p_lg shadow_inset_xs svelte-cs8o0f"><!> <a rel="me" title="source code on GitHub" class="svelte-cs8o0f"><!></a> <!></div> <!></footer>');function Y(e,t){G(t,!0);const r=j(t,"root_url",3,null);var p=O(),n=c(p);m(n,()=>t.children,l=>{var s=k(),o=b(s);y(o,()=>t.children),g(l,s)});var i=_(_(n,!0)),d=c(i);m(d,()=>t.logo_header,l=>{var s=k(),o=b(s);y(o,()=>t.logo_header),g(l,s)});var a=_(_(d,!0)),u=c(a);m(u,()=>t.logo,l=>{var s=k(),o=b(s);y(o,()=>t.logo),g(l,s)},l=>{A(l,{})}),f(a);var v=_(_(a,!0));m(v,()=>t.logo_footer,l=>{var s=k(),o=b(s);y(o,()=>t.logo_footer),g(l,s)}),f(i);var B=_(_(i,!0));m(B,r,l=>{var s=N(),o=c(s),D=c(o);C(()=>I(D,T(r()))),f(o),f(s),C(()=>w(o,"href",r())),g(l,s)}),f(p),C(()=>w(a,"href",t.pkg.repo_url)),g(e,p),M()}const $=(e,t)=>{const{name:r}=e,n=(o=>o?P(h(P(o,".git"),"git+"),"/"):null)(e.repository?typeof e.repository=="string"?e.repository:e.repository.url:null);if(!n)throw new Error("failed to parse package_meta - `repo_url` is required in package_json");const i=e.homepage??null,d=!e.private&&!!e.exports&&e.version!=="0.0.1",a=d?"https://www.npmjs.com/package/"+e.name:null,u=d&&n?n+"/blob/main/CHANGELOG.md":null,v=Q(r),B=n?h(n,"https://github.com/").split("/")[0]:null,l=i?S(i,"/")+(e.logo?h(e.logo,"/"):"favicon.png"):null,s=e.logo_alt??`logo for ${v}`;return{package_json:e,src_json:t,name:r,repo_name:v,repo_url:n,owner_name:B,homepage_url:i,logo_url:l,logo_alt:s,npm_url:a,changelog_url:u,published:d}},Q=e=>e[0]==="@"?e.split("/")[1]:e,ee={name:"@ryanatkn/fuz_blog",version:"0.7.0",description:"blog software from scratch with SvelteKit",glyph:"🖊️",logo:"logo.svg",logo_alt:"a friendly yellow spider facing you",public:!0,homepage:"https://blog.fuz.dev/",repository:"https://github.com/ryanatkn/fuz_blog",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",check:"gro check",test:"gro test",preview:"vite preview",deploy:"gro deploy"},type:"module",engines:{node:">=20.12"},peerDependencies:{"@ryanatkn/belt":"*","@ryanatkn/fuz":"*","@ryanatkn/fuz_mastodon":"*","@ryanatkn/gro":"*","@ryanatkn/moss":"*","@sveltejs/kit":"^2","date-fns":"^3",svelte:"^5.0.0-next.0"},devDependencies:{"@changesets/changelog-git":"^0.2.0","@ryanatkn/belt":"^0.24.12","@ryanatkn/eslint-config":"^0.5.1","@ryanatkn/fuz":"^0.120.2","@ryanatkn/fuz_code":"^0.18.0","@ryanatkn/fuz_mastodon":"^0.24.0","@ryanatkn/gro":"^0.133.6","@ryanatkn/moss":"^0.13.3","@sveltejs/adapter-static":"^3.0.4","@sveltejs/kit":"^2.5.22","@sveltejs/package":"^2.3.4","@sveltejs/vite-plugin-svelte":"^3.1.1","@types/node":"^22.3.0","date-fns":"^3.6.0",eslint:"^9.9.0","eslint-plugin-svelte":"^2.43.0",prettier:"^3.3.3","prettier-plugin-svelte":"^3.2.6",svelte:"^5.0.0-next.221","svelte-check":"^3.8.5",tslib:"^2.6.3",typescript:"^5.5.4","typescript-eslint":"^8.1.0",uvu:"^0.5.6"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist"],exports:{"./package.json":"./package.json","./blog_helpers.js":{types:"./dist/blog_helpers.d.ts",default:"./dist/blog_helpers.js"},"./Blog_Post_Header.svelte":{types:"./dist/Blog_Post_Header.svelte.d.ts",svelte:"./dist/Blog_Post_Header.svelte",default:"./dist/Blog_Post_Header.svelte"},"./Blog_Post.svelte":{types:"./dist/Blog_Post.svelte.d.ts",svelte:"./dist/Blog_Post.svelte",default:"./dist/Blog_Post.svelte"},"./blog.gen.js":{types:"./dist/blog.gen.d.ts",default:"./dist/blog.gen.js"},"./blog.js":{types:"./dist/blog.d.ts",default:"./dist/blog.js"},"./Feed_Item_Date.svelte":{types:"./dist/Feed_Item_Date.svelte.d.ts",svelte:"./dist/Feed_Item_Date.svelte",default:"./dist/Feed_Item_Date.svelte"},"./feed.js":{types:"./dist/feed.d.ts",default:"./dist/feed.js"},"./Hash_Link.svelte":{types:"./dist/Hash_Link.svelte.d.ts",svelte:"./dist/Hash_Link.svelte",default:"./dist/Hash_Link.svelte"},"./post.task.js":{types:"./dist/post.task.d.ts",default:"./dist/post.task.js"},"./update_post.task.js":{types:"./dist/update_post.task.d.ts",default:"./dist/update_post.task.js"},"./util.js":{types:"./dist/util.d.ts",default:"./dist/util.js"}}},te={name:"@ryanatkn/fuz_blog",version:"0.7.0",modules:{"./package.json":{path:"package.json",declarations:[]},"./blog_helpers.js":{path:"blog_helpers.ts",declarations:[{name:"resolve_blog_post_item",kind:"function"},{name:"collect_blog_post_ids",kind:"function"},{name:"load_blog_post_modules",kind:"function"},{name:"to_next_blog_post_id",kind:"function"},{name:"to_blog_post_path",kind:"function"}]},"./Blog_Post_Header.svelte":{path:"Blog_Post_Header.svelte",declarations:[]},"./Blog_Post.svelte":{path:"Blog_Post.svelte",declarations:[]},"./blog.gen.js":{path:"blog.gen.ts",declarations:[{name:"gen",kind:"variable"}]},"./blog.js":{path:"blog.ts",declarations:[{name:"Blog_Feed_Data",kind:"type"},{name:"Blog_Feed",kind:"type"},{name:"Blog_Post_Data",kind:"type"},{name:"Blog_Comments",kind:"type"},{name:"Mastodon_Blog_Comments",kind:"type"},{name:"Blog_Module",kind:"type"},{name:"Blog_Post_Module",kind:"type"},{name:"Blog_Post_Id",kind:"type"},{name:"Blog_Post_Item",kind:"type"},{name:"get_blog_feed",kind:"function"},{name:"set_blog_feed",kind:"function"}]},"./Feed_Item_Date.svelte":{path:"Feed_Item_Date.svelte",declarations:[]},"./feed.js":{path:"feed.ts",declarations:[{name:"Feed",kind:"type"},{name:"Feed_Item",kind:"type"},{name:"create_atom_feed",kind:"function"}]},"./Hash_Link.svelte":{path:"Hash_Link.svelte",declarations:[]},"./post.task.js":{path:"post.task.ts",declarations:[{name:"task",kind:"variable"}]},"./update_post.task.js":{path:"update_post.task.ts",declarations:[{name:"task",kind:"variable"}]},"./util.js":{path:"util.ts",declarations:[{name:"format_date",kind:"function"},{name:"to_pathname",kind:"function"}]}}};export{Y as L,ee as a,T as f,$ as p,te as s};
