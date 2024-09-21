import{a as h,n as D,t as z,e as L,s as I}from"./disclose-version.WYXBlapg.js";import{t as k,d as u,r as c,G as w,a0 as P,p as G,b as M,f as E,a5 as C,s as f}from"./runtime.CxHluMcO.js";import{i as x}from"./if.BhtNO3mu.js";import{t as S,a as H,s as m}from"./style.DfK4Uj2N.js";import{d as j,b as v,c as T,s as B,a as q}from"./string.CdmH7wKz.js";import{p as b}from"./props.Dgeguusg.js";const A=e=>j(v(v(e,"https://"),"www."),"/");var K=D(`<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02
		15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32
		12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12
		11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33
		11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74
		5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95
		7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31
		12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12
		7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01
		13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71
		14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"></path></svg>`);function N(e,t){const l=b(t,"fill",3,"var(--text_color, #000)"),d=b(t,"size",3,"var(--space_xl7, 64px)"),a=b(t,"label",3,"the GitHub icon, an octocat silhouette"),o=P(()=>t.width??d()),n=P(()=>t.height??d());var s=K();let p;var g=u(s);c(s),k(()=>{p=T(s,p,{viewBox:"0 0 1024 1024",...t.attrs,"aria-label":a(),class:t.classes},"svelte-16ciom8",!0),S(s,"inline",t.inline),H(s,"width",w(o),void 0,!0),H(s,"height",w(n),void 0,!0),B(g,"fill",l())}),h(e,s)}var O=z('<div class="root_url svelte-cs8o0f"><a> </a></div>'),Q=z('<footer class="box"><!> <div class="logo box panel p_lg shadow_inset_xs svelte-cs8o0f"><!> <a rel="me" title="source code on GitHub" class="svelte-cs8o0f"><!></a> <!></div> <!></footer>');function Y(e,t){G(t,!0);const l=b(t,"root_url",3,null);var d=Q(),a=u(d);m(a,()=>t.children??C);var o=f(a,2),n=u(o);m(n,()=>t.logo_header??C);var s=f(n,2),p=u(s);x(p,()=>t.logo,_=>{var i=L(),r=E(i);m(r,()=>t.logo),h(_,i)},_=>{N(_,{})}),c(s);var g=f(s,2);m(g,()=>t.logo_footer??C),c(o);var y=f(o,2);x(y,l,_=>{var i=O(),r=u(i),F=u(r);k(()=>I(F,A(l()))),c(r),c(i),k(()=>B(r,"href",l())),h(_,i)}),c(d),k(()=>B(s,"href",t.pkg.repo_url)),h(e,d),M()}const $=(e,t)=>{const{name:l}=e,a=(r=>r?j(v(j(r,".git"),"git+"),"/"):null)(e.repository?typeof e.repository=="string"?e.repository:e.repository.url:null);if(!a)throw new Error("failed to parse package_meta - `repo_url` is required in package_json");const o=e.homepage??null,n=!e.private&&!!e.exports&&e.version!=="0.0.1",s=n?"https://www.npmjs.com/package/"+e.name:null,p=n&&a?a+"/blob/main/CHANGELOG.md":null,g=W(l),y=a?v(a,"https://github.com/").split("/")[0]:null,_=o?q(o,"/")+(e.logo?v(e.logo,"/"):"favicon.png"):null,i=e.logo_alt??`logo for ${g}`;return{package_json:e,src_json:t,name:l,repo_name:g,repo_url:a,owner_name:y,homepage_url:o,logo_url:_,logo_alt:i,npm_url:s,changelog_url:p,published:n}},W=e=>e[0]==="@"?e.split("/")[1]:e,ee={name:"@ryanatkn/fuz_blog",version:"0.9.0",description:"blog software from scratch with SvelteKit",glyph:"🖊️",logo:"logo.svg",logo_alt:"a friendly yellow spider facing you",public:!0,homepage:"https://blog.fuz.dev/",repository:"https://github.com/ryanatkn/fuz_blog",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",check:"gro check",test:"gro test",preview:"vite preview",deploy:"gro deploy"},type:"module",engines:{node:">=20.17"},peerDependencies:{"@ryanatkn/belt":"*","@ryanatkn/fuz":"*","@ryanatkn/fuz_mastodon":"*","@ryanatkn/gro":"*","@ryanatkn/moss":"*","@sveltejs/kit":"^2","date-fns":"^4",svelte:"^5.0.0-next.0"},devDependencies:{"@changesets/changelog-git":"^0.2.0","@ryanatkn/belt":"^0.25.0","@ryanatkn/eslint-config":"^0.5.3","@ryanatkn/fuz":"^0.124.4","@ryanatkn/fuz_code":"^0.19.0","@ryanatkn/fuz_mastodon":"^0.26.0","@ryanatkn/gro":"^0.135.0","@ryanatkn/moss":"^0.16.1","@sveltejs/adapter-static":"^3.0.5","@sveltejs/kit":"^2.5.28","@sveltejs/package":"^2.3.5","@sveltejs/vite-plugin-svelte":"^3.1.2","@types/node":"^22.5.5","date-fns":"^4.1.0",eslint:"^9.11.0","eslint-plugin-svelte":"^2.44.0",prettier:"^3.3.3","prettier-plugin-svelte":"^3.2.6",svelte:"^5.0.0-next.257","svelte-check":"^4.0.2",tslib:"^2.7.0",typescript:"^5.6.2","typescript-eslint":"^8.6.0",uvu:"^0.5.6"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist"],exports:{"./package.json":"./package.json","./blog_helpers.js":{types:"./dist/blog_helpers.d.ts",default:"./dist/blog_helpers.js"},"./Blog_Post_Header.svelte":{types:"./dist/Blog_Post_Header.svelte.d.ts",svelte:"./dist/Blog_Post_Header.svelte",default:"./dist/Blog_Post_Header.svelte"},"./Blog_Post.svelte":{types:"./dist/Blog_Post.svelte.d.ts",svelte:"./dist/Blog_Post.svelte",default:"./dist/Blog_Post.svelte"},"./blog.gen.js":{types:"./dist/blog.gen.d.ts",default:"./dist/blog.gen.js"},"./blog.js":{types:"./dist/blog.d.ts",default:"./dist/blog.js"},"./Feed_Item_Date.svelte":{types:"./dist/Feed_Item_Date.svelte.d.ts",svelte:"./dist/Feed_Item_Date.svelte",default:"./dist/Feed_Item_Date.svelte"},"./feed.js":{types:"./dist/feed.d.ts",default:"./dist/feed.js"},"./Hash_Link.svelte":{types:"./dist/Hash_Link.svelte.d.ts",svelte:"./dist/Hash_Link.svelte",default:"./dist/Hash_Link.svelte"},"./post.task.js":{types:"./dist/post.task.d.ts",default:"./dist/post.task.js"},"./update_post.task.js":{types:"./dist/update_post.task.d.ts",default:"./dist/update_post.task.js"},"./util.js":{types:"./dist/util.d.ts",default:"./dist/util.js"}}},te={name:"@ryanatkn/fuz_blog",version:"0.9.0",modules:{"./package.json":{path:"package.json",declarations:[]},"./blog_helpers.js":{path:"blog_helpers.ts",declarations:[{name:"resolve_blog_post_item",kind:"function"},{name:"collect_blog_post_ids",kind:"function"},{name:"load_blog_post_modules",kind:"function"},{name:"to_next_blog_post_id",kind:"function"},{name:"to_blog_post_path",kind:"function"}]},"./Blog_Post_Header.svelte":{path:"Blog_Post_Header.svelte",declarations:[]},"./Blog_Post.svelte":{path:"Blog_Post.svelte",declarations:[]},"./blog.gen.js":{path:"blog.gen.ts",declarations:[{name:"gen",kind:"variable"}]},"./blog.js":{path:"blog.ts",declarations:[{name:"Blog_Feed_Data",kind:"type"},{name:"Blog_Feed",kind:"type"},{name:"Blog_Post_Data",kind:"type"},{name:"Blog_Comments",kind:"type"},{name:"Mastodon_Blog_Comments",kind:"type"},{name:"Blog_Module",kind:"type"},{name:"Blog_Post_Module",kind:"type"},{name:"Blog_Post_Id",kind:"type"},{name:"Blog_Post_Item",kind:"type"},{name:"get_blog_feed",kind:"function"},{name:"set_blog_feed",kind:"function"}]},"./Feed_Item_Date.svelte":{path:"Feed_Item_Date.svelte",declarations:[]},"./feed.js":{path:"feed.ts",declarations:[{name:"Feed",kind:"type"},{name:"Feed_Item",kind:"type"},{name:"create_atom_feed",kind:"function"}]},"./Hash_Link.svelte":{path:"Hash_Link.svelte",declarations:[]},"./post.task.js":{path:"post.task.ts",declarations:[{name:"task",kind:"variable"}]},"./update_post.task.js":{path:"update_post.task.ts",declarations:[{name:"task",kind:"variable"}]},"./util.js":{path:"util.ts",declarations:[{name:"format_date",kind:"function"},{name:"to_pathname",kind:"function"}]}}};export{Y as L,ee as a,A as f,$ as p,te as s};
