import{y as O,S as m,z as r,A as D,B as I,C as S,D as b,F as T,j as d,g as R,i as h,G as g,a as x,H as A,I as E,J as j,K as B}from"./runtime.cLx7l5XR.js";import{U as u}from"./disclose-version.CvSNP1ly.js";function w(e,t=null,s){if(typeof e=="object"&&e!=null&&!O(e)&&!(m in e)){if(r in e){const n=e[r];if(n.t===e||n.p===e)return n.p}const i=A(e);if(i===D||i===I){const n=new Proxy(e,K);return S(e,r,{value:{s:new Map,v:b(0),a:T(e),p:n,t:e},writable:!0,enumerable:!1}),n}}return e}function _(e,t=1){d(e,e.v+t)}const K={defineProperty(e,t,s){if(s.value){const i=e[r],n=i.s.get(t);n!==void 0&&d(n,w(s.value,i))}return Reflect.defineProperty(e,t,s)},deleteProperty(e,t){const s=e[r],i=s.s.get(t),n=s.a,f=delete e[t];if(n&&f){const a=s.s.get("length"),l=e.length-1;a!==void 0&&a.v!==l&&d(a,l)}return i!==void 0&&d(i,u),f&&_(s.v),f},get(e,t,s){var f;if(t===r)return Reflect.get(e,r);const i=e[r];let n=i.s.get(t);if(n===void 0&&(!(t in e)||(f=R(e,t))!=null&&f.writable)&&(n=b(w(e[t],i)),i.s.set(t,n)),n!==void 0){const a=h(n);return a===u?void 0:a}return Reflect.get(e,t,s)},getOwnPropertyDescriptor(e,t){const s=Reflect.getOwnPropertyDescriptor(e,t);if(s&&"value"in s){const n=e[r].s.get(t);n&&(s.value=h(n))}return s},has(e,t){var f;if(t===r)return!0;const s=e[r],i=Reflect.has(e,t);let n=s.s.get(t);return(n!==void 0||g!==null&&(!i||(f=R(e,t))!=null&&f.writable))&&(n===void 0&&(n=b(i?w(e[t],s):u),s.s.set(t,n)),h(n)===u)?!1:i},set(e,t,s,i){const n=e[r];let f=n.s.get(t);f===void 0&&(x(()=>i[t]),f=n.s.get(t)),f!==void 0&&d(f,w(s,n));const a=n.a,l=!(t in e);if(a&&t==="length")for(let c=s;c<e.length;c+=1){const o=n.s.get(c+"");o!==void 0&&d(o,u)}var y=Reflect.getOwnPropertyDescriptor(e,t);if(y!=null&&y.set?y.set.call(i,s):e[t]=s,l){if(a){const c=n.s.get("length"),o=e.length;c!==void 0&&c.v!==o&&d(c,o)}_(n.v)}return!0},ownKeys(e){const t=e[r];return h(t.v),Reflect.ownKeys(e)}};function P(e,t){var i;var s=e&&((i=e[r])==null?void 0:i.t);return e===t||s===t}function N(e={},t,s,i){return E(()=>{var n,f;return j(()=>{n=f,f=(i==null?void 0:i())||[],x(()=>{e!==s(...f)&&(t(e,...f),n&&P(s(...n),e)&&t(null,...n))})}),()=>{B(()=>{f&&P(s(...f),e)&&t(null,...f)})}}),e}export{N as b,w as p};
