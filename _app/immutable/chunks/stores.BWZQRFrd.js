import{R as n,T as i,m as o,d as t,c as f}from"./runtime.D3r2conq.js";import{s as a}from"./entry.CaT0ibR2.js";function d(s,u,r){if(s==null)return u(void 0),r&&r(void 0),n;const e=s.subscribe(u,r);return e.unsubscribe?()=>e.unsubscribe():e}function m(s,u,r){const e=r[u]??(r[u]={store:null,source:o(void 0),unsubscribe:n});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)t(e.source,void 0),e.unsubscribe=n;else{var c=!0;e.unsubscribe=d(s,b=>{c?(e.source.v=b,c=!1):t(e.source,b)})}return f(e.source)}function v(){const s={};return i(()=>{for(var u in s)s[u].unsubscribe()}),s}const p=()=>{const s=a;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},w={subscribe(s){return p().page.subscribe(s)}};export{m as a,w as p,v as s};