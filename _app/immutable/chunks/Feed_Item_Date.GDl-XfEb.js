import{a as C,t as V,X as J,s as _,b as U,f as z,V as K}from"./disclose-version.irMV6naG.js";import{p as Z,t as q,b as $}from"./runtime.DTm2w9Z_.js";import{i as tt}from"./if.C2E03ROn.js";import{a as et,s as nt}from"./string.ZJuK4sHN.js";function l(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function b(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const R=6048e5,at=864e5,le=43200,ge=1440;let rt={};function W(){return rt}function v(t,e){var u,c,d,h;const n=W(),a=(e==null?void 0:e.weekStartsOn)??((c=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((h=(d=n.locale)==null?void 0:d.options)==null?void 0:h.weekStartsOn)??0,r=l(t),i=r.getDay(),o=(i<a?7:0)+i-a;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r}function D(t){return v(t,{weekStartsOn:1})}function B(t){const e=l(t),n=e.getFullYear(),a=b(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const r=D(a),i=b(t,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const o=D(i);return e.getTime()>=r.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function N(t){const e=l(t);return e.setHours(0,0,0,0),e}function H(t){const e=l(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function it(t,e){const n=N(t),a=N(e),r=+n-H(n),i=+a-H(a);return Math.round((r-i)/at)}function ot(t){const e=B(t),n=b(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),D(n)}function st(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function ut(t){if(!st(t)&&typeof t!="number")return!1;const e=l(t);return!isNaN(Number(e))}function ct(t){const e=l(t),n=b(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const dt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ft=(t,e,n)=>{let a;const r=dt[t];return typeof r=="string"?a=r:e===1?a=r.one:a=r.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function Y(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const ht={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},mt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},lt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},gt={date:Y({formats:ht,defaultWidth:"full"}),time:Y({formats:mt,defaultWidth:"full"}),dateTime:Y({formats:lt,defaultWidth:"full"})},wt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},yt=(t,e,n,a)=>wt[t];function k(t){return(e,n)=>{const a=n!=null&&n.context?String(n.context):"standalone";let r;if(a==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,u=n!=null&&n.width?String(n.width):o;r=t.formattingValues[u]||t.formattingValues[o]}else{const o=t.defaultWidth,u=n!=null&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[o]}const i=t.argumentCallback?t.argumentCallback(e):e;return r[i]}}const bt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Pt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Mt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ot={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},kt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},xt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},vt=(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Dt={ordinalNumber:vt,era:k({values:bt,defaultWidth:"wide"}),quarter:k({values:Pt,defaultWidth:"wide",argumentCallback:t=>t-1}),month:k({values:Mt,defaultWidth:"wide"}),day:k({values:Ot,defaultWidth:"wide"}),dayPeriod:k({values:kt,defaultWidth:"wide",formattingValues:xt,defaultFormattingWidth:"wide"})};function x(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;const o=i[0],u=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?St(u,g=>g.test(o)):Wt(u,g=>g.test(o));let d;d=t.valueCallback?t.valueCallback(c):c,d=n.valueCallback?n.valueCallback(d):d;const h=e.slice(o.length);return{value:d,rest:h}}}function Wt(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function St(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function Yt(t){return(e,n={})=>{const a=e.match(t.matchPattern);if(!a)return null;const r=a[0],i=e.match(t.parsePattern);if(!i)return null;let o=t.valueCallback?t.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;const u=e.slice(r.length);return{value:o,rest:u}}}const Tt=/^(\d+)(th|st|nd|rd)?/i,pt=/\d+/i,Ft={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Et={any:[/^b/i,/^(a|c)/i]},Ct={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},_t={any:[/1/i,/2/i,/3/i,/4/i]},qt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Nt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ht={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Qt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Xt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},jt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Lt={ordinalNumber:Yt({matchPattern:Tt,parsePattern:pt,valueCallback:t=>parseInt(t,10)}),era:x({matchPatterns:Ft,defaultMatchWidth:"wide",parsePatterns:Et,defaultParseWidth:"any"}),quarter:x({matchPatterns:Ct,defaultMatchWidth:"wide",parsePatterns:_t,defaultParseWidth:"any",valueCallback:t=>t+1}),month:x({matchPatterns:qt,defaultMatchWidth:"wide",parsePatterns:Nt,defaultParseWidth:"any"}),day:x({matchPatterns:Ht,defaultMatchWidth:"wide",parsePatterns:Qt,defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:Xt,defaultMatchWidth:"any",parsePatterns:jt,defaultParseWidth:"any"})},Gt={code:"en-US",formatDistance:ft,formatLong:gt,formatRelative:yt,localize:Dt,match:Lt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Rt(t){const e=l(t);return it(e,ct(e))+1}function Bt(t){const e=l(t),n=+D(e)-+ot(e);return Math.round(n/R)+1}function A(t,e){var h,g,M,O;const n=l(t),a=n.getFullYear(),r=W(),i=(e==null?void 0:e.firstWeekContainsDate)??((g=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:g.firstWeekContainsDate)??r.firstWeekContainsDate??((O=(M=r.locale)==null?void 0:M.options)==null?void 0:O.firstWeekContainsDate)??1,o=b(t,0);o.setFullYear(a+1,0,i),o.setHours(0,0,0,0);const u=v(o,e),c=b(t,0);c.setFullYear(a,0,i),c.setHours(0,0,0,0);const d=v(c,e);return n.getTime()>=u.getTime()?a+1:n.getTime()>=d.getTime()?a:a-1}function At(t,e){var u,c,d,h;const n=W(),a=(e==null?void 0:e.firstWeekContainsDate)??((c=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(d=n.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??1,r=A(t,e),i=b(t,0);return i.setFullYear(r,0,a),i.setHours(0,0,0,0),v(i,e)}function It(t,e){const n=l(t),a=+v(n,e)-+At(n,e);return Math.round(a/R)+1}function s(t,e){const n=t<0?"-":"",a=Math.abs(t).toString().padStart(e,"0");return n+a}const w={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return s(e==="yy"?a%100:a,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):s(n+1,2)},d(t,e){return s(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return s(t.getHours()%12||12,e.length)},H(t,e){return s(t.getHours(),e.length)},m(t,e){return s(t.getMinutes(),e.length)},s(t,e){return s(t.getSeconds(),e.length)},S(t,e){const n=e.length,a=t.getMilliseconds(),r=Math.trunc(a*Math.pow(10,n-3));return s(r,e.length)}},P={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Q={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const a=t.getFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return w.y(t,e)},Y:function(t,e,n,a){const r=A(t,a),i=r>0?r:1-r;if(e==="YY"){const o=i%100;return s(o,2)}return e==="Yo"?n.ordinalNumber(i,{unit:"year"}):s(i,e.length)},R:function(t,e){const n=B(t);return s(n,e.length)},u:function(t,e){const n=t.getFullYear();return s(n,e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return s(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return s(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return w.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return s(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const r=It(t,a);return e==="wo"?n.ordinalNumber(r,{unit:"week"}):s(r,e.length)},I:function(t,e,n){const a=Bt(t);return e==="Io"?n.ordinalNumber(a,{unit:"week"}):s(a,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):w.d(t,e)},D:function(t,e,n){const a=Rt(t);return e==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):s(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const r=t.getDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return s(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const r=t.getDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return s(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),r=a===0?7:a;switch(e){case"i":return String(r);case"ii":return s(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let r;switch(a===12?r=P.noon:a===0?r=P.midnight:r=a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let r;switch(a>=17?r=P.evening:a>=12?r=P.afternoon:a>=4?r=P.morning:r=P.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let a=t.getHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return w.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):w.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return e==="Ko"?n.ordinalNumber(a,{unit:"hour"}):s(a,e.length)},k:function(t,e,n){let a=t.getHours();return a===0&&(a=24),e==="ko"?n.ordinalNumber(a,{unit:"hour"}):s(a,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):w.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):w.s(t,e)},S:function(t,e){return w.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(a===0)return"Z";switch(e){case"X":return j(a);case"XXXX":case"XX":return y(a);case"XXXXX":case"XXX":default:return y(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return j(a);case"xxxx":case"xx":return y(a);case"xxxxx":case"xxx":default:return y(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+X(a,":");case"OOOO":default:return"GMT"+y(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+X(a,":");case"zzzz":default:return"GMT"+y(a,":")}},t:function(t,e,n){const a=Math.trunc(t.getTime()/1e3);return s(a,e.length)},T:function(t,e,n){const a=t.getTime();return s(a,e.length)}};function X(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=Math.trunc(a/60),i=a%60;return i===0?n+String(r):n+String(r)+e+s(i,2)}function j(t,e){return t%60===0?(t>0?"-":"+")+s(Math.abs(t)/60,2):y(t,e)}function y(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=s(Math.trunc(a/60),2),i=s(a%60,2);return n+r+e+i}const L=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},I=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Vt=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return L(t,e);let i;switch(a){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",L(a,e)).replace("{{time}}",I(r,e))},Jt={p:I,P:Vt},Ut=/^D+$/,zt=/^Y+$/,Kt=["D","DD","YY","YYYY"];function Zt(t){return Ut.test(t)}function $t(t){return zt.test(t)}function te(t,e,n){const a=ee(t,e,n);if(console.warn(a),Kt.includes(t))throw new RangeError(a)}function ee(t,e,n){const a=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ne=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ae=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,re=/^'([^]*?)'?$/,ie=/''/g,oe=/[a-zA-Z]/;function se(t,e,n){var h,g,M,O,T,p,F,E;const a=W(),r=(n==null?void 0:n.locale)??a.locale??Gt,i=(n==null?void 0:n.firstWeekContainsDate)??((g=(h=n==null?void 0:n.locale)==null?void 0:h.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((O=(M=a.locale)==null?void 0:M.options)==null?void 0:O.firstWeekContainsDate)??1,o=(n==null?void 0:n.weekStartsOn)??((p=(T=n==null?void 0:n.locale)==null?void 0:T.options)==null?void 0:p.weekStartsOn)??a.weekStartsOn??((E=(F=a.locale)==null?void 0:F.options)==null?void 0:E.weekStartsOn)??0,u=l(t);if(!ut(u))throw new RangeError("Invalid time value");let c=e.match(ae).map(m=>{const f=m[0];if(f==="p"||f==="P"){const S=Jt[f];return S(m,r.formatLong)}return m}).join("").match(ne).map(m=>{if(m==="''")return{isToken:!1,value:"'"};const f=m[0];if(f==="'")return{isToken:!1,value:ue(m)};if(Q[f])return{isToken:!0,value:m};if(f.match(oe))throw new RangeError("Format string contains an unescaped latin alphabet character `"+f+"`");return{isToken:!1,value:m}});r.localize.preprocessor&&(c=r.localize.preprocessor(u,c));const d={firstWeekContainsDate:i,weekStartsOn:o,locale:r};return c.map(m=>{if(!m.isToken)return m.value;const f=m.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&$t(f)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Zt(f))&&te(f,e,String(t));const S=Q[f[0]];return S(u,f,r.localize,d)}).join("")}function ue(t){const e=t.match(re);return e?e[1].replace(ie,"'"):t}const G=t=>se(typeof t=="string"?new Date(t):t,"PP"),we=(t,e)=>et(t,nt(e,"/"));var ce=V(" <!>",1);function ye(t,e){Z(e,!0),J();var n=ce(),a=z(n,!0);q(()=>_(a,G(e.item.date_published||e.item.date_modified)));var r=U(a);tt(r,()=>e.item.date_published&&e.item.date_modified&&e.item.date_published!==e.item.date_modified,i=>{var o=K();q(()=>_(o,`,
	updated ${G(e.item.date_modified)??""}`)),C(i,o)}),C(t,n),$()}export{ye as F,l as a,le as b,W as c,Gt as e,se as f,H as g,ge as m,we as t};
