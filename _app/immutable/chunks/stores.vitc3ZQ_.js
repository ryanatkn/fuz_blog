import{H as n,I as i,m as o,h as t,f}from"./runtime.JBtVL38F.js";import{s as a}from"./entry.DO6G9R-4.js";function p(s,u,r){if(s==null)return u(void 0),r&&r(void 0),n;const e=s.subscribe(u,r);return e.unsubscribe?()=>e.unsubscribe():e}function m(s,u,r){const e=r[u]??(r[u]={store:null,source:o(void 0),unsubscribe:n});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)t(e.source,void 0),e.unsubscribe=n;else{var b=!0;e.unsubscribe=p(s,c=>{b?(e.source.v=c,b=!1):t(e.source,c)})}return f(e.source)}function v(){const s={};return i(()=>{for(var u in s)s[u].unsubscribe()}),s}const d=()=>{const s=a;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},h={subscribe(s){return d().page.subscribe(s)}};export{m as a,h as p,v as s};
