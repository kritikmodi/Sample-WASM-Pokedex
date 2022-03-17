!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Suborbital=t():e.Suborbital=t()}(this,(function(){return(()=>{"use strict";var e={427:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Env=t.QueryType=t.FieldType=t.HttpMethod=t.LogLevel=void 0;const n=r(445);t.LogLevel=Object.freeze({0:"Null",Null:0,1:"Error",Error:1,2:"Warn",Warn:2,3:"Info",Info:3,4:"Debug",Debug:4}),t.HttpMethod=Object.freeze({0:"Get",Get:0,1:"Head",Head:1,2:"Options",Options:2,3:"Post",Post:3,4:"Put",Put:4,5:"Patch",Patch:5,6:"Delete",Delete:6}),t.FieldType=Object.freeze({0:"Meta",Meta:0,1:"Body",Body:1,2:"Header",Header:2,3:"Params",Params:3,4:"State",State:4,5:"Query",Query:5}),t.QueryType=Object.freeze({0:"Select",Select:0,1:"Insert",Insert:1,2:"Update",Update:2,3:"Delete",Delete:3}),t.Env=class{addToImports(e){}async instantiate(e,t){if(t=t||{},this.addToImports(t),e instanceof WebAssembly.Instance)this.instance=e;else if(e instanceof WebAssembly.Module)this.instance=await WebAssembly.instantiate(e,t);else if(e instanceof ArrayBuffer||e instanceof Uint8Array){const{instance:r}=await WebAssembly.instantiate(e,t);this.instance=r}else{const{instance:r}=await WebAssembly.instantiateStreaming(e,t);this.instance=r}this._exports=this.instance.exports}returnResult(e,t){const r=this._exports.memory,o=this._exports.canonical_abi_realloc,s=e,i=s.length,a=o(0,0,1,1*i);new Uint8Array(r.buffer,a,1*i).set(new Uint8Array(s.buffer,s.byteOffset,1*i)),this._exports["return-result"](a,i,(0,n.clamp_host)(t,0,4294967295))}returnError(e,t,r){const o=this._exports.memory,s=this._exports.canonical_abi_realloc,i=(0,n.utf8_encode)(t,s,o),a=n.UTF8_ENCODED_LEN;this._exports["return-error"]((0,n.clamp_host)(e,-2147483648,2147483647),i,a,(0,n.clamp_host)(r,0,4294967295))}logMsg(e,r,o){const s=this._exports.memory,i=this._exports.canonical_abi_realloc,a=(0,n.utf8_encode)(e,i,s),c=n.UTF8_ENCODED_LEN,d=r;if(!(d in t.LogLevel))throw new RangeError("invalid variant specified for LogLevel");this._exports["log-msg"](a,c,Number.isInteger(d)?d:t.LogLevel[d],(0,n.clamp_host)(o,0,4294967295))}fetchUrl(e,r,o,s){const i=this._exports.memory,a=this._exports.canonical_abi_realloc,c=e;if(!(c in t.HttpMethod))throw new RangeError("invalid variant specified for HttpMethod");const d=(0,n.utf8_encode)(r,a,i),l=n.UTF8_ENCODED_LEN,u=o,f=u.length,h=a(0,0,1,1*f);return new Uint8Array(i.buffer,h,1*f).set(new Uint8Array(u.buffer,u.byteOffset,1*f)),this._exports["fetch-url"](Number.isInteger(c)?c:t.HttpMethod[c],d,l,h,f,(0,n.clamp_host)(s,0,4294967295))}graphqlQuery(e,t,r){const o=this._exports.memory,s=this._exports.canonical_abi_realloc,i=(0,n.utf8_encode)(e,s,o),a=n.UTF8_ENCODED_LEN,c=(0,n.utf8_encode)(t,s,o),d=n.UTF8_ENCODED_LEN;return this._exports["graphql-query"](i,a,c,d,(0,n.clamp_host)(r,0,4294967295))}cacheSet(e,t,r,o){const s=this._exports.memory,i=this._exports.canonical_abi_realloc,a=(0,n.utf8_encode)(e,i,s),c=n.UTF8_ENCODED_LEN,d=t,l=d.length,u=i(0,0,1,1*l);return new Uint8Array(s.buffer,u,1*l).set(new Uint8Array(d.buffer,d.byteOffset,1*l)),this._exports["cache-set"](a,c,u,l,(0,n.clamp_host)(r,0,4294967295),(0,n.clamp_host)(o,0,4294967295))}cacheGet(e,t){const r=this._exports.memory,o=this._exports.canonical_abi_realloc,s=(0,n.utf8_encode)(e,o,r),i=n.UTF8_ENCODED_LEN;return this._exports["cache-get"](s,i,(0,n.clamp_host)(t,0,4294967295))}requestGetField(e,r,o){const s=this._exports.memory,i=this._exports.canonical_abi_realloc,a=e;if(!(a in t.FieldType))throw new RangeError("invalid variant specified for FieldType");const c=(0,n.utf8_encode)(r,i,s),d=n.UTF8_ENCODED_LEN;return this._exports["request-get-field"](Number.isInteger(a)?a:t.FieldType[a],c,d,(0,n.clamp_host)(o,0,4294967295))}getStaticFile(e,t){const r=this._exports.memory,o=this._exports.canonical_abi_realloc,s=(0,n.utf8_encode)(e,o,r),i=n.UTF8_ENCODED_LEN;return this._exports["get-static-file"](s,i,(0,n.clamp_host)(t,0,4294967295))}dbExec(e,r,o){const s=this._exports.memory,i=this._exports.canonical_abi_realloc,a=e;if(!(a in t.QueryType))throw new RangeError("invalid variant specified for QueryType");const c=(0,n.utf8_encode)(r,i,s),d=n.UTF8_ENCODED_LEN;return this._exports["db-exec"](Number.isInteger(a)?a:t.QueryType[a],c,d,(0,n.clamp_host)(o,0,4294967295))}getFfiResult(e,t){return this._exports["get-ffi-result"]((0,n.clamp_host)(e,0,4294967295),(0,n.clamp_host)(t,0,4294967295))}addFfiVar(e,t,r){const o=this._exports.memory,s=this._exports.canonical_abi_realloc,i=(0,n.utf8_encode)(e,s,o),a=n.UTF8_ENCODED_LEN,c=(0,n.utf8_encode)(t,s,o),d=n.UTF8_ENCODED_LEN;return this._exports["add-ffi-var"](i,a,c,d,(0,n.clamp_host)(r,0,4294967295))}returnAbort(e,t,r,o,s){const i=this._exports.memory,a=this._exports.canonical_abi_realloc,c=(0,n.utf8_encode)(e,a,i),d=n.UTF8_ENCODED_LEN,l=(0,n.utf8_encode)(t,a,i),u=n.UTF8_ENCODED_LEN;this._exports["return-abort"](c,d,l,u,(0,n.clamp_host)(r,0,4294967295),(0,n.clamp_host)(o,0,4294967295),(0,n.clamp_host)(s,0,4294967295))}}},445:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UTF8_ENCODED_LEN=t.utf8_encode=t.clamp_host=void 0,t.clamp_host=function(e,t,r){if(!Number.isInteger(e))throw new TypeError("must be an integer");if(e<t||e>r)throw new RangeError(`must be between ${t} and ${r}`);return e};const r=new TextEncoder("utf-8");t.utf8_encode=function(e,n,o){if("string"!=typeof e)throw new TypeError("expected a string");if(0===e.length)return t.UTF8_ENCODED_LEN=0,1;let s=0,i=0,a=0;for(;e.length>0;){i=n(i,s,1,s+e.length),s+=e.length;const{read:t,written:c}=r.encodeInto(e,new Uint8Array(o.buffer,i+a,s-a));a+=c,e=e.slice(t)}return s>a&&(i=n(i,s,1,a)),t.UTF8_ENCODED_LEN=a,i},t.UTF8_ENCODED_LEN=0},169:(e,t,r)=>{t.cY=t.dM=t.cM=t.dJ=void 0;const n=r(259),o=r(325),s=r(998),i=r(186),a=r(791),c=r(682),d=r(191),l=r(521),u=r(663);new n.default,new o.default,new s.default,new i.default,t.dJ=new a.default,t.cM=new c.default,new d.default,t.dM=new l.default,t.cY=function(e,t){u.default.env._exports=e,u.default.ident=t}},442:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(663),o=new TextDecoder;t.default=class{get env(){return n.default.env}get ident(){return n.default.ident}ffiResult(e){let t=!1;e<0&&(t=!0,e*=-1);const r=this.env._exports.canonical_abi_realloc(0,0,1,e);this.env.getFfiResult(r,this.ident);const n=new Uint8Array(this.env._exports.memory.buffer,r,e);if(t){const e=o.decode(n);throw new Error(e)}return new Uint8Array(n)}}},325:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(442),o=new TextEncoder,s=new TextDecoder;class i extends n.default{get(e){return s.decode(this.getBytes(e))}getBytes(e){const t=this.env.cacheGet(e,this.ident);return this.ffiResult(t)}set(e,t,r){let n;n="string"==typeof t?o.encode(t):t,this.env.cacheSet(e,n,r,this.ident)}}t.default=i},259:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(427),o=r(442),s=(new TextEncoder,new TextDecoder);class i extends o.default{select(e,t){return this.exec(n.QueryType.Select,e,t||{})}insert(e,t){return this.exec(n.QueryType.Insert,e,t||{})}update(e,t){return this.exec(n.QueryType.Update,e,t||{})}delete(e,t){return this.exec(n.QueryType.Delete,e,t||{})}exec(e,t,r){Object.entries(r).forEach((([e,t])=>{this.env.addFfiVar(e,t,this.ident)}));const n=this.env.dbExec(e,t,this.ident),o=s.decode(this.ffiResult(n));return o?JSON.parse(o):{}}}t.default=i},663:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(427);class o{}t.default=o,o.env=new n.Env},998:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(442),o=new TextDecoder;class s extends n.default{getStatic(e){return o.decode(this.getStaticBytes(e))}getStaticBytes(e){const t=this.env.getStaticFile(e,this.ident);return this.ffiResult(t)}}t.default=s},186:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(442),o=r(928),s=new TextDecoder;class i extends n.default{query(e,t,r){const n=e+(r?(0,o.renderHeaderString)(r):""),i=this.env.graphqlQuery(n,t,this.ident),a=this.ffiResult(i);return s.decode(a)}}t.default=i},928:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.renderHeaderString=void 0,t.renderHeaderString=function(e){return Object.entries(e).map((([e,t])=>`::${e}:${t}`)).join("")}},791:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HttpResponse=void 0;const n=r(442),o=r(427),s=r(928),i=new TextEncoder,a=new TextDecoder;class c{constructor(e){this.value=e}arrayBuffer(){return this.value.buffer}json(){return JSON.parse(this.text())}text(){return a.decode(this.value)}}t.HttpResponse=c;class d extends n.default{get(e,t){return this.request(o.HttpMethod.Get,e,new Uint8Array([]),t||{})}head(e,t){return this.request(o.HttpMethod.Head,e,new Uint8Array([]),t||{})}options(e,t){return this.request(o.HttpMethod.Options,e,new Uint8Array([]),t||{})}post(e,t,r){return this.request(o.HttpMethod.Post,e,t,r||{})}put(e,t,r){return this.request(o.HttpMethod.Put,e,t,r||{})}patch(e,t,r){return this.request(o.HttpMethod.Patch,e,t,r||{})}delete(e,t){return this.request(o.HttpMethod.Delete,e,new Uint8Array([]),t||{})}request(e,t,r,n){let o;o="string"==typeof r?i.encode(r):r;const a=t+(0,s.renderHeaderString)(n),d=this.env.fetchUrl(e,a,o,this.ident);return new c(this.ffiResult(d))}}t.default=d},682:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(442),o=r(427);class s extends n.default{info(e){this.log(e,o.LogLevel.Info)}warn(e){this.log(e,o.LogLevel.Warn)}error(e){this.log(e,o.LogLevel.Error)}debug(e){this.log(e,o.LogLevel.Debug)}log(e,t){this.env.logMsg(e,t,this.ident)}}t.default=s},191:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(442),o=r(427),s=new TextDecoder;class i extends n.default{method(){return s.decode(this.getField(o.FieldType.Meta,"method"))}url(){return s.decode(this.getField(o.FieldType.Meta,"url"))}id(){return s.decode(this.getField(o.FieldType.Meta,"id"))}body(){return s.decode(this.getField(o.FieldType.Body,"body"))}bodyBytes(){return this.getField(o.FieldType.Body,"body")}bodyField(e){return s.decode(this.getField(o.FieldType.Body,e))}header(e){return s.decode(this.getField(o.FieldType.Header,e))}urlParam(e){return s.decode(this.getField(o.FieldType.Params,e))}state(e){return s.decode(this.getField(o.FieldType.State,e))}stateBytes(e){return this.getField(o.FieldType.State,e)}getField(e,t){const r=this.env.requestGetField(e,t,this.ident);return this.ffiResult(r)}}t.default=i},521:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(442),o=new TextEncoder;class s extends n.default{returnResult(e){const t="string"==typeof e?o.encode(e):e;this.env.returnResult(t,this.ident)}returnError(e,t){this.env.returnError(e,t,this.ident)}}t.default=s},673:function(e,t,r){!function(e){function t(){}function r(e){var t=0|e.charCodeAt(0);if(55296<=t)if(56319>=t)if(56320<=(e=0|e.charCodeAt(1))&&57343>=e){if(65535<(t=(t<<10)+e-56613888|0))return s(240|t>>18,128|t>>12&63,128|t>>6&63,128|63&t)}else t=65533;else 57343>=t&&(t=65533);return 2047>=t?s(192|t>>6,128|63&t):s(224|t>>12,128|t>>6&63,128|63&t)}function n(){}function o(e,t){var n=void 0===e?"":(""+e).replace(_,r),o=0|n.length,s=0,i=0,a=0|t.length,c=0|e.length;a<o&&(o=a);e:for(;s<o;s=s+1|0){switch((e=0|n.charCodeAt(s))>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:i=i+1|0;case 8:case 9:case 10:case 11:break;case 12:case 13:if((s+1|0)<a){i=i+1|0;break}case 14:if((s+2|0)<a){i=i+1|0;break}case 15:if((s+3|0)<a){i=i+1|0;break}default:break e}t[s]=e}return{written:s,read:c<i?c:i}}var s=String.fromCharCode,i={}.toString,a=i.call(e.SharedArrayBuffer),c=i(),d=e.Uint8Array,l=d||Array,u=d?ArrayBuffer:l,f=u.isView||function(e){return e&&"length"in e},h=i.call(u.prototype),p=n.prototype;u=e.TextEncoder;var _=/[\x80-\uD7ff\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g,y=new(d?Uint16Array:l)(32);if(t.prototype.decode=function(e){if(!f(e)){var t=i.call(e);if(t!==h&&t!==a&&t!==c)throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");e=d?new l(e):e||[]}for(var r,n,o,u=t="",p=0,_=0|e.length,g=_-32|0,b=0,x=0,v=0,E=-1;p<_;){for(r=p<=g?32:_-p|0;v<r;p=p+1|0,v=v+1|0){switch((n=255&e[p])>>4){case 15:if(2!=(o=255&e[p=p+1|0])>>6||247<n){p=p-1|0;break}b=(7&n)<<6|63&o,x=5,n=256;case 14:b<<=6,b|=(15&n)<<6|63&(o=255&e[p=p+1|0]),x=2==o>>6?x+4|0:24,n=n+256&768;case 13:case 12:b<<=6,b|=(31&n)<<6|63&(o=255&e[p=p+1|0]),x=x+7|0,p<_&&2==o>>6&&b>>x&&1114112>b?(n=b,0<=(b=b-65536|0)&&(E=55296+(b>>10)|0,n=56320+(1023&b)|0,31>v?(y[v]=E,v=v+1|0,E=-1):(o=E,E=n,n=o))):(p=p-(n>>=8)-1|0,n=65533),b=x=0,r=p<=g?32:_-p|0;default:y[v]=n;continue;case 11:case 10:case 9:case 8:}y[v]=65533}if(u+=s(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8],y[9],y[10],y[11],y[12],y[13],y[14],y[15],y[16],y[17],y[18],y[19],y[20],y[21],y[22],y[23],y[24],y[25],y[26],y[27],y[28],y[29],y[30],y[31]),32>v&&(u=u.slice(0,v-32|0)),p<_){if(y[0]=E,v=~E>>>31,E=-1,u.length<t.length)continue}else-1!==E&&(u+=s(E));t+=u,u=""}return t},p.encode=function(e){var t,r=0|(e=void 0===e?"":""+e).length,n=new l(8+(r<<1)|0),o=0,s=!d;for(t=0;t<r;t=t+1|0,o=o+1|0){var i=0|e.charCodeAt(t);if(127>=i)n[o]=i;else{if(2047>=i)n[o]=192|i>>6;else{e:{if(55296<=i)if(56319>=i){var a=0|e.charCodeAt(t=t+1|0);if(56320<=a&&57343>=a){if(65535<(i=(i<<10)+a-56613888|0)){n[o]=240|i>>18,n[o=o+1|0]=128|i>>12&63,n[o=o+1|0]=128|i>>6&63,n[o=o+1|0]=128|63&i;continue}break e}i=65533}else 57343>=i&&(i=65533);!s&&t<<1<o&&t<<1<(o-7|0)&&(s=!0,(a=new l(3*r)).set(n),n=a)}n[o]=224|i>>12,n[o=o+1|0]=128|i>>6&63}n[o=o+1|0]=128|63&i}}return d?n.subarray(0,o):n.slice(0,o)},p.encodeInto=o,u){if(!(e=u.prototype).encodeInto){var g=new u;e.encodeInto=function(e,t){var r=0|e.length,n=0|t.length;if(r<n>>1){var s=g.encode(e);if((0|s.length)<n)return t.set(s),{read:r,written:0|s.length}}return o(e,t)}}}else e.TextDecoder=t,e.TextEncoder=n}(void 0===r.g?"undefined"==typeof self?this:self:r.g)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.r(n),r.d(n,{run_e:()=>o}),r(673);var e=r(169);const t=new TextDecoder;function o(r,n){(0,e.cY)(this.imports,n),t.decode(r);const o=(t=>{const r=e.dJ.get("https://catfact.ninja/fact");e.cM.info(r.text());const n=r.json();return JSON.parse(JSON.stringify(n)).fact})();e.dM.returnResult(o)}})(),n})()}));
//# sourceMappingURL=index.js.map