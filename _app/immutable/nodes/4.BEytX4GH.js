import{c as r,s as a,a as n,t as y,u as N,f as L,r as t,V as _e,X as ie,b as B,L as de}from"../chunks/disclose-version.B9CuRL9K.js";import{J as Ge,N as Ne,p as ee,t as b,b as ae,i,k as j,x as W}from"../chunks/runtime.cLx7l5XR.js";import{i as w}from"../chunks/if.BlIbmvlQ.js";import{a as P,s as C,e as He,i as Te}from"../chunks/attributes.DvyXtXFs.js";import{s as K,t as O,a as x,b as We}from"../chunks/style.88OKzqyu.js";import{s as Ce,a as De,p as Ee}from"../chunks/stores.DzwevEBN.js";import{e as we,a as ke,s as Ve}from"../chunks/string.ZJuK4sHN.js";import{f as qe,p as Ke,L as Oe,s as Xe,a as oe}from"../chunks/package.BdJP559Q.js";import{t as Ye,s as Ie}from"../chunks/index.CSHxigaH.js";import{p as R}from"../chunks/props.Bmgq6RcE.js";import{S as Je,F as Ue}from"../chunks/Fuz_Logo.CPyMBbDW.js";import{B as je}from"../chunks/Breadcrumb.D2-Jzezz.js";function Re(V,e,d,u,g){var _=()=>{u(d[V])};d.addEventListener(e,_),g?Ge(()=>{d[V]=g()}):_(),(d===document.body||d===window||d===document)&&Ne(()=>{d.removeEventListener(e,_)})}var Ae=y("<div><!></div>"),Qe=y("<details><summary><!></summary> <!></details>");function $e(V,e){ee(e,!0);let d=R(e,"open",7);var u=Qe();let g;var _=r(u);let v;var p=r(_);K(p,()=>e.summary),t(_);var H=a(a(_,!0));w(H,()=>e.eager,f=>{var k=N(),z=L(k);K(z,()=>e.children),n(f,k)},f=>{var k=N(),z=L(k);w(z,d,Z=>{var M=Ae(),F=r(M);K(F,()=>e.children),t(M),Ye(3,M,()=>Ie),n(Z,M)},null,!0),n(f,k)}),t(u),b(()=>{g=P(u,g,{...e.attrs},!0,""),v=P(_,v,{...e.summary_attrs},!0,"")}),Re("open","toggle",u,f=>d(f),d),n(V,u),ae()}var ea=y('<div class="repo_name svelte-19y7aej"> <!></div>'),aa=y('<div class="description svelte-19y7aej"> </div>'),ta=y('<div class="motto svelte-19y7aej"> </div>'),ra=y('<blockquote class="npm_url svelte-19y7aej"> </blockquote>'),sa=y('<span class="title svelte-19y7aej">homepage</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej"><img> </a></div>',1),la=y('<span class="title svelte-19y7aej">repo</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="repo"> </a></div>',1),va=y('<span class="title svelte-19y7aej">npm</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="npm"> </a></div>',1),ia=y('<span class="title svelte-19y7aej">version</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="version"> </a></div>',1),na=y('<span class="title svelte-19y7aej">license</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="license"> </a></div>',1),oa=y('<span class="title svelte-19y7aej">data</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="data">package.json</a> <a class="chip svelte-19y7aej" title="data">src.json</a></div>',1),_a=y('<div class="logo svelte-19y7aej"><img></div>'),da=y("<li> </li>"),ca=y('<ul class="declarations unstyled svelte-19y7aej"></ul>'),ha=y('<li class="module svelte-19y7aej"><div class="module_content svelte-19y7aej"><a class="chip"> </a> <!></div></li>'),ua=y('<section class="svelte-19y7aej"><menu class="unstyled"></menu></section>'),ma=y("raw data for <code>pkg: Package_Meta</code>",1),ga=y("<pre><code> </code></pre>"),fa=y('<div class="package_detail svelte-19y7aej"><div class="info svelte-19y7aej"><div class="flex flex_1"><div><header class="svelte-19y7aej"><!></header> <!> <!> <!> <!> <section class="properties svelte-19y7aej"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-19y7aej"><!></section></div>');function pa(V,e){ee(e,!0);const d=Ce(),u=()=>De(Ee,"$page",d),g=j(()=>e.pkg),_=j(()=>{let{package_json:c,src_json:l}=i(g);return[c,l]}),v=j(()=>i(_)[0]),p=j(()=>i(_)[1]),H=j(()=>i(p)),f=j(()=>{let{modules:c}=i(H);return[c]}),k=j(()=>i(f)[0]),z=j(()=>i(v).repository?ke(Ve(Ve(typeof i(v).repository=="string"?i(v).repository:i(v).repository.url,".git"),"/"),"git+"):null),Z=j(()=>i(v).license&&i(z)?i(z)+"/blob/main/LICENSE":null),M=(c,l)=>c+"/blob/main/src/lib/"+(l.endsWith(".js")?l.slice(0,-3)+".ts":l),F=j(()=>i(v).exports&&Object.keys(i(v).exports)),S=j(()=>i(v).exports?Object.keys(i(v).exports).map(c=>{const l=ke(c,"./");return l==="."?"index.js":l}):null);var D=fa(),G=r(D),X=r(G),T=r(X),I=r(T),Q=r(I);w(Q,()=>e.repo_name,c=>{var l=N(),h=L(l);K(h,()=>e.repo_name,()=>e.pkg.repo_name),n(c,l)},c=>{var l=ea(),h=r(l),o=a(h);w(o,()=>i(v).glyph,s=>{var m=_e();b(()=>B(m,` ${i(v).glyph??""}`)),n(s,m)}),t(l),b(()=>B(h,e.pkg.repo_name)),n(c,l)}),t(I);var te=a(a(I,!0));w(te,()=>e.children,c=>{var l=N(),h=L(l);K(h,()=>e.children,()=>e.pkg),n(c,l)});var re=a(a(te,!0));w(re,()=>i(v).description,c=>{var l=N(),h=L(l);w(h,()=>e.description,o=>{var s=N(),m=L(s);K(m,()=>e.description,()=>i(v).description),n(o,s)},o=>{var s=aa(),m=r(s);t(s),b(()=>B(m,i(v).description)),n(o,s)}),n(c,l)});var $=a(a(re,!0));w($,()=>i(v).motto,c=>{var l=N(),h=L(l);w(h,()=>e.motto,o=>{var s=N(),m=L(s);K(m,()=>e.motto,()=>i(v).motto),n(o,s)},o=>{var s=ta(),m=r(s);t(s),b(()=>B(m,i(v).motto)),n(o,s)}),n(c,l)});var J=a(a($,!0));w(J,()=>e.pkg.npm_url,c=>{var l=N(),h=L(l);w(h,()=>e.npm_url,o=>{var s=N(),m=L(s);K(m,()=>e.npm_url,()=>e.pkg.npm_url),n(o,s)},o=>{var s=ra(),m=r(s);t(s),b(()=>B(m,`npm i -D ${i(v).name??""}`)),n(o,s)}),n(c,l)});var U=a(a(J,!0)),ce=r(U);w(ce,()=>e.pkg.homepage_url,c=>{var l=N(),h=L(l);w(h,()=>e.homepage_url,o=>{var s=N(),m=L(s);K(m,()=>e.homepage_url,()=>e.pkg.homepage_url),n(o,s)},o=>{var s=sa(),m=L(s),E=a(a(m,!0)),A=r(E),Y=r(A),se=a(Y,!0);b(()=>B(se,` ${qe(e.pkg.homepage_url)??""}`)),t(A),t(E),b(()=>{C(A,"href",e.pkg.homepage_url),O(A,"selected",e.pkg.homepage_url===u().url.href),C(Y,"src",e.pkg.logo_url),C(Y,"alt",e.pkg.logo_alt),x(Y,"width","16px"),x(Y,"height","16px"),x(Y,"margin-right","var(--space_xs)")}),n(o,s)}),n(c,l)});var he=a(a(ce,!0));w(he,()=>e.pkg.repo_url,c=>{var l=la(),h=L(l),o=a(a(h,!0)),s=r(o),m=r(s);t(s),t(o),b(()=>{C(s,"href",e.pkg.repo_url),B(m,`${e.pkg.owner_name??""}/${e.pkg.repo_name??""}`)}),n(c,l)});var ue=a(a(he,!0));w(ue,()=>e.pkg.npm_url,c=>{var l=va(),h=L(l),o=a(a(h,!0)),s=r(o),m=r(s);t(s),t(o),b(()=>{C(s,"href",e.pkg.npm_url),B(m,i(v).name)}),n(c,l)});var me=a(a(ue,!0));w(me,()=>e.pkg.changelog_url,c=>{var l=ia(),h=L(l),o=a(a(h,!0)),s=r(o),m=r(s);t(s),t(o),b(()=>{C(s,"href",e.pkg.changelog_url),B(m,i(v).version)}),n(c,l)});var ge=a(a(me,!0));w(ge,()=>i(Z),c=>{var l=na(),h=L(l),o=a(a(h,!0)),s=r(o),m=r(s);t(s),t(o),b(()=>{C(s,"href",i(Z)),B(m,i(v).license)}),n(c,l)});var xe=a(a(ge,!0));w(xe,()=>e.pkg.homepage_url,c=>{var l=oa(),h=L(l),o=a(a(h,!0)),s=r(o);b(()=>C(s,"href",`${we(e.pkg.homepage_url,"/")??""}.well-known/package.json`));var m=a(a(s,!0));b(()=>C(m,"href",`${we(e.pkg.homepage_url,"/")??""}.well-known/src.json`)),t(o),n(c,l)}),t(U),t(T),t(X);var ze=a(a(X,!0));w(ze,()=>e.pkg.logo_url,c=>{var l=_a(),h=r(l);t(l),b(()=>{C(h,"src",e.pkg.logo_url),C(h,"alt",e.pkg.logo_alt),x(h,"width","var(--size, var(--icon_size_xl2))"),x(h,"height","var(--size, var(--icon_size_xl2))")}),n(c,l)}),t(G);var fe=a(a(G,!0));w(fe,()=>i(S)&&e.pkg.repo_url,c=>{var l=ua(),h=r(l);He(h,78,()=>i(S),(o,s)=>W(o),(o,s,m)=>{var E=ha();const A=j(()=>M(e.pkg.repo_url,W(s))),Y=j(()=>{var q;return(q=i(F))==null?void 0:q[W(m)]}),se=j(()=>{var q;return i(Y)&&((q=i(k))==null?void 0:q[i(Y)])});b(()=>O(E,"ts",W(s).endsWith(".js"))),b(()=>O(E,"svelte",W(s).endsWith(".svelte"))),b(()=>O(E,"css",W(s).endsWith(".css"))),b(()=>O(E,"json",W(s).endsWith(".json")));var ye=r(E),le=r(ye),Me=r(le);t(le);var Se=a(a(le,!0));w(Se,()=>{var q;return(q=i(se))==null?void 0:q.declarations.length},q=>{var ne=ca();He(ne,73,()=>i(se).declarations,Te,(Ze,be,Wa)=>{let Pe=()=>W(W(be)).name,Fe=()=>W(W(be)).kind;var ve=da(),Be=r(ve);t(ve),b(()=>{We(ve,`declaration chip ${Fe()??""}_declaration svelte-19y7aej`),B(Be,Pe())}),n(Ze,ve)}),t(ne),n(q,ne)}),t(ye),t(E),b(()=>{C(le,"href",i(A)),B(Me,W(s))}),n(o,E)}),t(h),t(l),n(c,l)});var pe=a(a(fe,!0)),Le=r(pe);$e(Le,{summary:l=>{ie();var h=ma();a(L(h,!0)),n(l,h)},children:(l,h)=>{var o=ga(),s=r(o),m=r(s);b(()=>B(m,JSON.stringify(e.pkg,null,"	"))),t(s),t(o),n(l,o)},$$slots:{default:!0}}),t(pe),t(D),n(V,D),ae()}var ya=y(", you are here",1),ba=y(", you are here",1),Ha=y(", you are here",1),wa=y(`<ul><li>join <a rel="me" href="https://discord.gg/YU5tyeK72X">the Discord</a> community</li> <li><a rel="me" href="https://www.webdevladder.net/">webdevladder.net</a> - realworld webdev with TypeScript and Svelte, YouTube channels <a rel="me" href="https://youtube.com/@webdevladder">@webdevladder</a> and <a rel="me" href="https://youtube.com/@webdevladder_vods">@webdevladder_vods</a><!></li> <li><a rel="me" href="https://www.spiderspace.org/">spiderspace.org</a> - nontechnical design videos where we'll make a social website together with <a href="https://zzz.ryanatkn.com/">Zzz</a> when it's ready, YouTube channel <a rel="me" href="https://youtube.com/@spiderspace_8000">@spiderspace_8000</a><!></li> <li><a rel="me" href="https://www.ryanatkn.com/">ryanatkn.com</a> - my homepage<!></li> <li>GitHub - <a rel="me" href="https://github.com/ryanatkn">@ryanatkn</a> and <a rel="me" href="https://github.com/spiderspace">@spiderspace</a></li> <li>Mastodon as <a rel="me" href="https://mastodon.social/@webdevladder">@webdevladder@mastodon.social</a> and <a rel="me" href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a></li> <li>@webdevladder on <a rel="me" href="https://twitter.com/webdevladder">Twitter</a>, <a rel="me" href="https://www.reddit.com/user/webdevladder/">Reddit</a>, and <a href="https://news.ycombinator.com/user?id=webdevladder">Hacker News</a></li> <li>support me at <a href="https://www.ryanatkn.com/funding">ryanatkn.com/funding</a></li></ul>`);function ka(V,e){var d=wa(),u=r(d);a(r(u)),ie(),t(u);var g=a(a(u,!0)),_=r(g),v=a(a(_,!0)),p=a(a(v,!0)),H=a(p);w(H,()=>e.selected==="webdevladder.net",J=>{var U=ya();n(J,U)}),t(g);var f=a(a(g,!0)),k=r(f),z=a(a(k,!0)),Z=a(a(z,!0)),M=a(Z);w(M,()=>e.selected==="spiderspace.org",J=>{var U=ba();n(J,U)}),t(f);var F=a(a(f,!0)),S=r(F),D=a(a(S,!0));w(D,()=>e.selected==="ryanatkn.com",J=>{var U=Ha();n(J,U)}),t(F);var G=a(a(F,!0)),X=a(r(G));a(a(X,!0)),t(G);var T=a(a(G,!0)),I=a(r(T));a(a(I,!0)),t(T);var Q=a(a(T,!0)),te=a(r(Q)),re=a(a(te,!0));a(a(re,!0)),t(Q);var $=a(a(Q,!0));a(r($)),t($),t(d),b(()=>{O(_,"selected",e.selected==="webdevladder.net"),O(k,"selected",e.selected==="spiderspace.org"),O(S,"selected",e.selected==="ryanatkn.com")}),n(V,d)}var Va=de("<svg><g><path></path></g><g><path></path><path></path></g></svg>");function ja(V,e){const d=R(e,"fill",3,"var(--color_g_5)"),u=R(e,"label",3,"three sleepy z's"),g=j(()=>e.width??e.size),_=j(()=>e.height??e.size);var v=Va();let p;var H=r(v),f=r(H);let k;t(H);var z=a(H),Z=r(z);let M;var F=a(Z);let S;t(z),t(v),b(()=>{p=P(v,p,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",...e.attrs,"aria-label":u(),class:e.classes},!1,"svelte-16ciom8"),O(v,"inline",e.inline),x(v,"width",i(g)),x(v,"height",i(_)),k=P(f,k,{...e.path_attrs,d:"m 75.29285,61.962268 1.752156,1.914421 14.843359,1.811307 L 74.065203,86.193332 99.966781,85.408255 98.719988,83.648246 85.143565,82.136577 98.430963,62.887945"},!1,"svelte-16ciom8"),x(f,"fill",d()),M=P(Z,M,{...e.path_attrs,d:"m 47.636533,44.203704 2.295155,2.48945 25.618425,0.406407 L 45.93783,91.082857 89.425317,93.78003 87.862334,91.36274 61.57861,83.03068 86.244719,42.177019"},!1,"svelte-16ciom8"),x(Z,"fill",d()),S=P(F,S,{...e.path_attrs,d:"M 0.62464489,0.27405496 3.9721704,4.0993769 50.515703,10.089712 0.04581262,99.957542 68.009395,98.901532 65.391343,95.487941 24.119119,88.067804 66.301842,2.2896897"},!1,"svelte-16ciom8"),x(F,"fill",d())}),n(V,v)}function xa(V,e){ee(e,!0);const d=R(e,"fill",3,"var(--color_b_5)"),u=R(e,"label",3,"a fuzzy tuft of green moss"),g="transform: scaleX(-1) rotate(180deg)",_=j(()=>{var p;return(p=e.attrs)!=null&&p.style?g+"; "+e.attrs.style:g});var v=j(()=>({...e.attrs,style:i(_)}));Je(V,{get fill(){return d()},get size(){return e.size},get width(){return e.width},get height(){return e.height},get label(){return u()},get inline(){return e.inline},get classes(){return e.classes},get path_attrs(){return e.path_attrs},get attrs(){return i(v)}}),ae()}var za=de("<svg><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>");function La(V,e){const d=R(e,"label",3,"a pixelated green oak acorn with a glint of sun"),u=j(()=>e.width??e.size),g=j(()=>e.height??e.size);var _=za();let v;var p=r(_);let H;var f=a(p);let k;var z=a(f);let Z;var M=a(z);let F;var S=a(M);let D;var G=a(S);let X;var T=a(G);let I;t(_),b(()=>{v=P(_,v,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",...e.attrs,"aria-label":d(),class:e.classes},!1,"svelte-16ciom8"),O(_,"inline",e.inline),x(_,"width",i(u)),x(_,"height",i(g)),H=P(p,H,{...e.path_attrs,d:"m 24.035592,57.306905 v -14.5 h 16.329497 v 14.25 z"},!1,"svelte-16ciom8"),x(p,"fill","#6f974c"),k=P(f,k,{...e.path_attrs,d:"M 43.75,93.75 H 37.5 V 87.5 H 31.25 V 81.25 H 25 V 75 H 18.75 V 62.5 H 12.5 V 50 H 6.25 V 43.75 H 4 v -21 L 22.75,16.5 h 40.5 l 0.5,61.5 -5,-0.75 -0.25,16.5 h -2.25 l -4,2.25 -2.24617,4 H 43.75 Z M 37.5,50 H 31.25 V 43.75 H 25 v 12.5 h 12.5 z"},!1,"svelte-16ciom8"),x(f,"fill","#5e853f"),Z=P(z,Z,{...e.path_attrs,d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 v -25 H 6.25 V 12.5 h 12.5 V 6.25 H 37.5 V 0 h 25 v 6.25 h 18.75 v 6.25 h 12.5 v 6.25 H 100 v 25 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},!1,"svelte-16ciom8"),x(z,"fill","#6f492b"),F=P(M,F,{...e.path_attrs,d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},!1,"svelte-16ciom8"),x(M,"fill","#3b730f"),D=P(S,D,{...e.path_attrs,d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 V 18.75 H 43.75 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 Z"},!1,"svelte-16ciom8"),x(S,"fill","#473323"),X=P(G,X,{...e.path_attrs,d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 v -6.25 h -25 V 12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 h 12.5 V 25 h 12.5 v 6.25 H 100 v 12.5 H 93.75 V 50 H 87.5 Z"},!1,"svelte-16ciom8"),x(G,"fill","#2e6006"),I=P(T,I,{...e.path_attrs,d:"M 93.75,31.25 H 87.5 V 25 h 6.25 v 6.25 H 100 v 12.5 H 93.75 Z M 75,18.75 h 6.25 V 25 H 75 Z M 37.5,12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 H 53.125 37.5 Z"},!1,"svelte-16ciom8"),x(T,"fill","#34251a")}),n(V,_)}var Ma=de("<svg><g><path></path></g></svg>");function Sa(V,e){const d=R(e,"fill",3,"#f67c4c"),u=R(e,"label",3,"a friendly pixelated spider facing you"),g=j(()=>e.width??e.size),_=j(()=>e.height??e.size);var v=Ma();let p;var H=r(v),f=r(H);let k;t(H),t(v),b(()=>{p=P(v,p,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",...e.attrs,"aria-label":u(),class:e.classes},!1,""),x(v,"width",i(g)),x(v,"height",i(_)),k=P(f,k,{...e.path_attrs,d:"m 25,81.200002 h 6.2 v -12.5 h 6.3 v -18.7 h -6.3 v 6.2 H 12.5 v 6.3 H 0 v -6.3 h 6.2 v -6.2 H 25 v -6.3 h 12.5 v -6.2 h -6.3 v -6.3 H 18.7 v -6.2 H 6.2 v -6.3 H 25 v 6.3 h 12.5 v -6.3 H 31.2 V 6.2 h 6.3 v 6.300002 h 6.2 V 31.200001 H 56.2 V 12.500002 h 6.3 V 6.2 h 6.2 v 12.500001 h -6.2 v 18.800001 h 6.2 v -12.5 h 12.5 v -12.5 h 12.5 v 6.2 h -6.2 v 12.5 H 75 v 12.5 h 6.2 v 6.3 h 12.5 v 6.2 h 6.299997 v 6.3 H 87.5 v -6.3 H 75 v -6.2 h -6.3 v 12.5 H 75 v 12.5 h 6.2 V 99.99999 H 75 V 81.200002 h -6.3 v -12.5 h -6.2 v -12.5 H 43.7 v 18.8 h -6.2 v 12.5 H 31.2 V 99.99999 H 25 Z"},!1,""),x(f,"fill",d())}),n(V,v)}var Za=y('<a class="project_link svelte-1bpnvy9" title="Zzz - social web app framework" href="https://zzz.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Zzz</span></a> <a class="project_link svelte-1bpnvy9" title="Moss - CSS framework" href="https://moss.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Moss</span></a> <a class="project_link svelte-1bpnvy9" title="Fuz - Svelte UI library" href="https://www.fuz.dev/"><!><span class="name svelte-1bpnvy9">Fuz</span></a> <a class="project_link svelte-1bpnvy9" title="Gro - task runner and toolkit extending SvelteKit" href="https://gro.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Gro</span></a> <a class="project_link svelte-1bpnvy9" title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro" href="https://template.fuz.dev/"><!><span class="name svelte-1bpnvy9">fuz_template</span></a>',1);function Pa(V){const e="var(--icon_size_lg)";var d=Za(),u=L(d),g=r(u);ja(g,{size:e}),a(g),t(u);var _=a(a(u,!0)),v=r(_);xa(v,{size:e}),a(v),t(_);var p=a(a(_,!0)),H=r(p);Ue(H,{size:e}),a(H),t(p);var f=a(a(p,!0)),k=r(f);La(k,{size:e}),a(k),t(f);var z=a(a(f,!0)),Z=r(z);Sa(Z,{size:e}),a(Z),t(z),n(V,d)}var Fa=y('<h2 class="mt_0 mb_lg">Links</h2>'),Ba=y('<section class="panel p_lg"><!> <!> <div class="box row"><!></div></section>');function Ga(V,e){ee(e,!0);var d=Ba(),u=r(d);w(u,()=>e.children,p=>{var H=N(),f=L(H);K(f,()=>e.children),n(p,H)},p=>{var H=Fa();n(p,H)});var g=a(a(u,!0));ka(g,{});var _=a(a(g,!0)),v=r(_);Pa(v),t(_),t(d),n(V,d),ae()}var Na=y('<div class="mb_xl3"><!></div>'),Ta=y('<main class="mx_auto p_lg width_md"><section class="box svelte-n9te6z"><header class="box"><h1 class="mt_xl2 svelte-n9te6z">fuz_blog</h1></header> <!></section> <!> <section class="box w_100 mb_lg svelte-n9te6z"><div class="panel p_lg width_md"><!></div></section> <section class="box svelte-n9te6z"><!></section></main>');function Aa(V,e){ee(e,!0);const d=Ke(oe,Xe);var u=Ta(),g=r(u),_=r(g);r(_),t(_);var v=a(a(_,!0));je(v,{children:(M,F)=>{ie();var S=_e();b(()=>B(S,oe.glyph)),n(M,S)},$$slots:{default:!0}}),t(g);var p=a(a(g,!0));Ga(p,{});var H=a(a(p,!0)),f=r(H),k=r(f);pa(k,{pkg:d}),t(f),t(H);var z=a(a(H,!0)),Z=r(z);Oe(Z,{pkg:d,root_url:"https://www.fuz.dev/",children:(M,F)=>{var S=Na(),D=r(S);je(D,{children:(G,X)=>{ie();var T=_e();b(()=>B(T,oe.glyph)),n(G,T)},$$slots:{default:!0}}),t(S),n(M,S)},$$slots:{default:!0}}),t(z),t(u),n(V,u),ae()}export{Aa as component};
