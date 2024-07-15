import{a as _,L as z,r as v,c as u,t as L,K as h,b as r,f as k,s as I}from"./disclose-version.DROzzpD7.js";import{t as y,f as P,i as H,p as G,a as M}from"./runtime.DGpMJXe8.js";import{i as m}from"./if.CKC5Yaut.js";import{s as b}from"./class.COUQwbVj.js";import{a as E,s as B}from"./attributes.BzPXHj2-.js";import{p as C}from"./props.CcupOqj8.js";import{s as x,a as j}from"./string.ZJuK4sHN.js";import{s as F}from"./style.CN5pMWL6.js";const K=o=>x(j(j(o,"https://"),"www."),"/");var S=z(`<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02
		15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32
		12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12
		11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33
		11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74
		5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95
		7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31
		12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12
		7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01
		13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71
		14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"></path></svg>`);function T(o,e){const d=C(e,"fill",3,"var(--text_color, #000)"),i=C(e,"size",3,"var(--space_xl7, 64px)"),c=C(e,"label",3,"the GitHub icon, an octocat silhouette"),l=H(()=>e.width??i()),p=H(()=>e.height??i());var s=S();let g;var f=u(s);v(s),y(()=>{g=E(s,g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e.attrs,"aria-label":c(),class:e.classes},!1,""),F(s,"width",P(l)),F(s,"height",P(p)),B(f,"fill",d())}),_(o,s)}var A=L('<div class="root_url svelte-cs8o0f"><a> </a></div>'),N=L('<footer class="box"><!> <div class="logo box panel p_lg shadow_inset_xs svelte-cs8o0f"><!> <a rel="me" title="source code on GitHub" class="svelte-cs8o0f"><!></a> <!></div> <!></footer>');function X(o,e){G(e,!0);const d=C(e,"root_url",3,null);var i=N(),c=u(i);m(c,()=>e.children,a=>{var t=h(),n=k(t);b(n,()=>e.children),_(a,t)});var l=r(r(c,!0)),p=u(l);m(p,()=>e.logo_header,a=>{var t=h(),n=k(t);b(n,()=>e.logo_header),_(a,t)});var s=r(r(p,!0)),g=u(s);m(g,()=>e.logo,a=>{var t=h(),n=k(t);b(n,()=>e.logo),_(a,t)},a=>{T(a,{})}),v(s);var f=r(r(s,!0));m(f,()=>e.logo_footer,a=>{var t=h(),n=k(t);b(n,()=>e.logo_footer),_(a,t)}),v(l);var w=r(r(l,!0));m(w,d,a=>{var t=A(),n=u(t),D=u(n);y(()=>I(D,K(d()))),v(n),v(t),y(()=>B(n,"href",d())),_(a,t)}),v(i),y(()=>B(s,"href",e.pkg.repo_url)),_(o,i),M()}const Y=(o,e,d)=>{const{name:i}=e,l=(t=>t?x(j(x(t,".git"),"git+"),"/"):null)(e.repository?typeof e.repository=="string"?e.repository:e.repository.url:null),p=e.homepage??null,s=!e.private&&!!e.exports&&e.version!=="0.0.1",g=s?"https://www.npmjs.com/package/"+e.name:null,f=s&&l?l+"/blob/main/CHANGELOG.md":null,w=O(i),a=l?j(l,"https://github.com/").split("/")[0]:null;return{url:o,package_json:e,src_json:d,name:i,repo_name:w,repo_url:l,owner_name:a,homepage_url:p,npm_url:g,changelog_url:f,published:s}},O=o=>o[0]==="@"?o.split("/")[1]:o,$={name:"@ryanatkn/fuz_blog",version:"0.2.0",description:"blog software from scratch with SvelteKit",glyph:"🖊️",logo:"logo.svg",logo_alt:"a friendly yellow spider facing you",public:!0,homepage:"https://blog.fuz.dev/",repository:"https://github.com/ryanatkn/fuz_blog",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",check:"gro check",test:"gro test",preview:"vite preview",deploy:"gro deploy"},type:"module",engines:{node:">=20.12"},peerDependencies:{"@ryanatkn/belt":"*","@ryanatkn/fuz":"*","@ryanatkn/gro":"*","@ryanatkn/moss":"*","@sveltejs/kit":"^2","date-fns":"^3",svelte:"^5.0.0-next.0"},devDependencies:{"@changesets/changelog-git":"^0.2.0","@ryanatkn/belt":"^0.24.6","@ryanatkn/eslint-config":"^0.4.0","@ryanatkn/fuz":"^0.108.5","@ryanatkn/fuz_code":"^0.15.2","@ryanatkn/gro":"^0.130.1","@ryanatkn/moss":"^0.7.1","@sveltejs/adapter-static":"^3.0.2","@sveltejs/kit":"^2.5.18","@sveltejs/package":"^2.3.2","@sveltejs/vite-plugin-svelte":"^3.1.1","@types/node":"^20.14.10","date-fns":"^3.6.0",eslint:"^9.6.0","eslint-plugin-svelte":"^2.42.0",prettier:"^3.3.2","prettier-plugin-svelte":"^3.2.5",svelte:"^5.0.0-next.181","svelte-check":"^3.8.4",tslib:"^2.6.3",typescript:"^5.5.3","typescript-eslint":"^8.0.0-alpha.41",uvu:"^0.5.6"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist"],exports:{"./package.json":"./package.json","./blog_helpers.js":{types:"./dist/blog_helpers.d.ts",default:"./dist/blog_helpers.js"},"./Blog_Post_Header.svelte":{types:"./dist/Blog_Post_Header.svelte.d.ts",svelte:"./dist/Blog_Post_Header.svelte",default:"./dist/Blog_Post_Header.svelte"},"./Blog_Post.svelte":{types:"./dist/Blog_Post.svelte.d.ts",svelte:"./dist/Blog_Post.svelte",default:"./dist/Blog_Post.svelte"},"./blog.gen.js":{types:"./dist/blog.gen.d.ts",default:"./dist/blog.gen.js"},"./blog.js":{types:"./dist/blog.d.ts",default:"./dist/blog.js"},"./Feed_Item_Date.svelte":{types:"./dist/Feed_Item_Date.svelte.d.ts",svelte:"./dist/Feed_Item_Date.svelte",default:"./dist/Feed_Item_Date.svelte"},"./feed.js":{types:"./dist/feed.d.ts",default:"./dist/feed.js"},"./Hash_Link.svelte":{types:"./dist/Hash_Link.svelte.d.ts",svelte:"./dist/Hash_Link.svelte",default:"./dist/Hash_Link.svelte"},"./post.task.js":{types:"./dist/post.task.d.ts",default:"./dist/post.task.js"},"./update_post.task.js":{types:"./dist/update_post.task.d.ts",default:"./dist/update_post.task.js"},"./util.js":{types:"./dist/util.d.ts",default:"./dist/util.js"}}},ee={name:"@ryanatkn/fuz_blog",version:"0.2.0",modules:{"./package.json":{path:"package.json",declarations:[]},"./blog_helpers.js":{path:"blog_helpers.ts",declarations:[{name:"resolve_blog_post_item",kind:"function"},{name:"collect_blog_post_ids",kind:"function"},{name:"load_blog_post_modules",kind:"function"},{name:"to_next_blog_post_id",kind:"function"},{name:"to_blog_post_path",kind:"function"}]},"./Blog_Post_Header.svelte":{path:"Blog_Post_Header.svelte",declarations:[]},"./Blog_Post.svelte":{path:"Blog_Post.svelte",declarations:[]},"./blog.gen.js":{path:"blog.gen.ts",declarations:[{name:"gen",kind:"variable"}]},"./blog.js":{path:"blog.ts",declarations:[{name:"Blog_Feed_Data",kind:"type"},{name:"Blog_Feed",kind:"type"},{name:"Blog_Post_Data",kind:"type"},{name:"Blog_Module",kind:"type"},{name:"Blog_Post_Module",kind:"type"},{name:"Blog_Post_Id",kind:"type"},{name:"Blog_Post_Item",kind:"type"},{name:"get_blog_feed",kind:"function"},{name:"set_blog_feed",kind:"function"}]},"./Feed_Item_Date.svelte":{path:"Feed_Item_Date.svelte",declarations:[]},"./feed.js":{path:"feed.ts",declarations:[{name:"Feed",kind:"type"},{name:"Feed_Item",kind:"type"},{name:"create_atom_feed",kind:"function"}]},"./Hash_Link.svelte":{path:"Hash_Link.svelte",declarations:[]},"./post.task.js":{path:"post.task.ts",declarations:[{name:"task",kind:"variable"}]},"./update_post.task.js":{path:"update_post.task.ts",declarations:[{name:"task",kind:"variable"}]},"./util.js":{path:"util.ts",declarations:[{name:"format_date",kind:"function"},{name:"to_pathname",kind:"function"}]}}};export{X as L,$ as a,K as f,Y as p,ee as s};
