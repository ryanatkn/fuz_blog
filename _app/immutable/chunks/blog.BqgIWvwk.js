import{A as s,B as u}from"./runtime.CxMoHi5K.js";function i(t){const n=Symbol(),o=()=>{const e=u(n);return e===void 0?t==null?void 0:t():e};return{get:e=>{const r=o();if(r===void 0)throw Error(e??"context value is not set");return r},maybe_get:o,set:(e=t==null?void 0:t())=>s(n,e)}}const d=i();export{d as b,i as c};