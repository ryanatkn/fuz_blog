import{i as D,y as C,z as p,A as T,B as q,C as G,D as I}from"./disclose-version.ArxuyjLf.js";import{q as E,D as M,F as w,G as O}from"./runtime.D3r2conq.js";function R(s,t){if(t){const i=document.body;s.autofocus=!0,E(()=>{document.activeElement===i&&s.focus()})}}function L(s,t,i){i=i==null?null:i+"";var o=s.__attributes??(s.__attributes={});D&&(o[t]=s.getAttribute(t),t==="src"||t==="href"||t==="srcset")||o[t]!==(o[t]=i)&&(t==="loading"&&(s[M]=i),i===null?s.removeAttribute(t):s.setAttribute(t,i))}function j(s,t,i){if(t in s){var o=s[t],a=typeof o=="boolean"&&i===""?!0:i;(typeof o!="object"||o!==a)&&(s[t]=a)}else L(s,t,i)}function z(s,t,i,o,a){var v=a.length!==0,c=t||{};for(var h in t)h in i||(i[h]=null);v&&!i.class&&(i.class="");var l=$.get(s.nodeName);l||$.set(s.nodeName,l=S(s));var N=s.__attributes??(s.__attributes={}),d=[];for(const r in i){let f=i[r];var g=c[r];if(f!==g){c[r]=f;var b=r[0]+r[1];if(b!=="$$")if(b==="on"){const _={},e="$$"+r;let n=r.slice(2);var A=I.includes(n);if(C(n)&&(n=n.slice(0,-7),_.capture=!0),!A&&g){if(f!=null)continue;s.removeEventListener(n,c[e],_),c[e]=null}if(f!=null)if(A)s[`__${n}`]=f,T([n]);else{let y=function(B){c[r].call(this,B)};t?c[e]=p(n,s,y,_):d.push([r,f,()=>c[e]=p(n,s,y,_)])}}else if(f==null)N[r]=null,s.removeAttribute(r);else if(r==="style")s.style.cssText=f+"";else if(r==="autofocus")R(s,!!f);else if(r==="__value"||r==="value")s.value=s[r]=s.__value=f;else{var u=r;o&&(u=u.toLowerCase(),u=q[u]||u),l.includes(u)?D&&(u==="src"||u==="href"||u==="srcset")||(s[u]=f):typeof f!="function"&&(v&&u==="class"&&(f&&(f+=" "),f+=a),L(s,u,f))}}}return t||E(()=>{if(s.isConnected)for(const[r,f,_]of d)c[r]===f&&_()}),c}function H(s,t,i,o){if(s.tagName.includes("-")){for(var a in t)a in i||(i[a]=null);for(a in i)j(s,a,i[a]);return i}return z(s,t,i,s.namespaceURI!==G,o)}var F=["width","height"],$=new Map;function S(s){for(var t=[],i,o=w(s);o.constructor.name!=="Element";){i=O(o);for(var a in i)i[a].set&&!F.includes(a)&&t.push(a);o=w(o)}return t}export{z as a,H as b,L as s};
