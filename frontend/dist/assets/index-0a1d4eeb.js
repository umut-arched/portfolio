(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Ur(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Hr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?os(r):Hr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ee(e))return e;if(V(e))return e}}const rs=/;(?![^(]*\))/g,as=/:([^]+)/,is=/\/\*.*?\*\//gs;function os(e){const t={};return e.replace(is,"").split(rs).forEach(n=>{if(n){const r=n.split(as);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Br(e){let t="";if(ee(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=Br(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ss="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ls=Ur(ss);function Ni(e){return!!e||e===""}const Sa=e=>ee(e)?e:e==null?"":L(e)||V(e)&&(e.toString===Ri||!R(e.toString))?JSON.stringify(e,Mi,2):String(e),Mi=(e,t)=>t&&t.__v_isRef?Mi(e,t.value):_t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Fi(t)?{[`Set(${t.size})`]:[...t.values()]}:V(t)&&!L(t)&&!ji(t)?String(t):t,X={},wt=[],Ie=()=>{},fs=()=>!1,cs=/^on[^a-z]/,Hn=e=>cs.test(e),Yr=e=>e.startsWith("onUpdate:"),ce=Object.assign,Wr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},us=Object.prototype.hasOwnProperty,z=(e,t)=>us.call(e,t),L=Array.isArray,_t=e=>Bn(e)==="[object Map]",Fi=e=>Bn(e)==="[object Set]",R=e=>typeof e=="function",ee=e=>typeof e=="string",Kr=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",Li=e=>V(e)&&R(e.then)&&R(e.catch),Ri=Object.prototype.toString,Bn=e=>Ri.call(e),ds=e=>Bn(e).slice(8,-1),ji=e=>Bn(e)==="[object Object]",qr=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,kn=Ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ms=/-(\w)/g,je=Yn(e=>e.replace(ms,(t,n)=>n?n.toUpperCase():"")),ps=/\B([A-Z])/g,It=Yn(e=>e.replace(ps,"-$1").toLowerCase()),Wn=Yn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ir=Yn(e=>e?`on${Wn(e)}`:""),Nn=(e,t)=>!Object.is(e,t),or=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Mn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},hs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ta;const gs=()=>Ta||(Ta=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let _e;class vs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_e,!t&&_e&&(this.index=(_e.scopes||(_e.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=_e;try{return _e=this,t()}finally{_e=n}}}on(){_e=this}off(){_e=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function bs(e,t=_e){t&&t.active&&t.effects.push(e)}function ys(){return _e}const Xr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},$i=e=>(e.w&Ze)>0,zi=e=>(e.n&Ze)>0,xs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},ws=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];$i(a)&&!zi(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},hr=new WeakMap;let Rt=0,Ze=1;const gr=30;let ke;const ut=Symbol(""),vr=Symbol("");class Vr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bs(this,r)}run(){if(!this.active)return this.fn();let t=ke,n=Je;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ke,ke=this,Je=!0,Ze=1<<++Rt,Rt<=gr?xs(this):Na(this),this.fn()}finally{Rt<=gr&&ws(this),Ze=1<<--Rt,ke=this.parent,Je=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ke===this?this.deferStop=!0:this.active&&(Na(this),this.onStop&&this.onStop(),this.active=!1)}}function Na(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Je=!0;const Di=[];function St(){Di.push(Je),Je=!1}function Tt(){const e=Di.pop();Je=e===void 0?!0:e}function pe(e,t,n){if(Je&&ke){let r=hr.get(e);r||hr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Xr()),Ui(a)}}function Ui(e,t){let n=!1;Rt<=gr?zi(e)||(e.n|=Ze,n=!$i(e)):n=!e.has(ke),n&&(e.add(ke),ke.deps.push(e))}function Ue(e,t,n,r,a,i){const o=hr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&L(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":L(e)?qr(n)&&s.push(o.get("length")):(s.push(o.get(ut)),_t(e)&&s.push(o.get(vr)));break;case"delete":L(e)||(s.push(o.get(ut)),_t(e)&&s.push(o.get(vr)));break;case"set":_t(e)&&s.push(o.get(ut));break}if(s.length===1)s[0]&&br(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);br(Xr(l))}}function br(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&Ma(r);for(const r of n)r.computed||Ma(r)}function Ma(e,t){(e!==ke||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const _s=Ur("__proto__,__v_isRef,__isVue"),Hi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Kr)),ks=Jr(),As=Jr(!1,!0),Os=Jr(!0),Fa=Es();function Es(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){St();const r=U(this)[t].apply(this,n);return Tt(),r}}),e}function Ps(e){const t=U(this);return pe(t,"has",e),t.hasOwnProperty(e)}function Jr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Bs:qi:t?Ki:Wi).get(r))return r;const o=L(r);if(!e){if(o&&z(Fa,a))return Reflect.get(Fa,a,i);if(a==="hasOwnProperty")return Ps}const s=Reflect.get(r,a,i);return(Kr(a)?Hi.has(a):_s(a))||(e||pe(r,"get",a),t)?s:fe(s)?o&&qr(a)?s:s.value:V(s)?e?Xi(s):Qr(s):s}}const Cs=Bi(),Is=Bi(!0);function Bi(e=!1){return function(n,r,a,i){let o=n[r];if(Bt(o)&&fe(o)&&!fe(a))return!1;if(!e&&(!yr(a)&&!Bt(a)&&(o=U(o),a=U(a)),!L(n)&&fe(o)&&!fe(a)))return o.value=a,!0;const s=L(n)&&qr(r)?Number(r)<n.length:z(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Nn(a,o)&&Ue(n,"set",r,a):Ue(n,"add",r,a)),l}}function Ss(e,t){const n=z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ue(e,"delete",t,void 0),r}function Ts(e,t){const n=Reflect.has(e,t);return(!Kr(t)||!Hi.has(t))&&pe(e,"has",t),n}function Ns(e){return pe(e,"iterate",L(e)?"length":ut),Reflect.ownKeys(e)}const Yi={get:ks,set:Cs,deleteProperty:Ss,has:Ts,ownKeys:Ns},Ms={get:Os,set(e,t){return!0},deleteProperty(e,t){return!0}},Fs=ce({},Yi,{get:As,set:Is}),Gr=e=>e,Kn=e=>Reflect.getPrototypeOf(e);function ln(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&pe(a,"get",t),pe(a,"get",i));const{has:o}=Kn(a),s=r?Gr:n?na:ta;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function fn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&pe(r,"has",e),pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function cn(e,t=!1){return e=e.__v_raw,!t&&pe(U(e),"iterate",ut),Reflect.get(e,"size",e)}function La(e){e=U(e);const t=U(this);return Kn(t).has.call(t,e)||(t.add(e),Ue(t,"add",e,e)),this}function Ra(e,t){t=U(t);const n=U(this),{has:r,get:a}=Kn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Nn(t,o)&&Ue(n,"set",e,t):Ue(n,"add",e,t),this}function ja(e){const t=U(this),{has:n,get:r}=Kn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ue(t,"delete",e,void 0),i}function $a(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Ue(e,"clear",void 0,void 0),n}function un(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Gr:e?na:ta;return!e&&pe(s,"iterate",ut),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function dn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=_t(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Gr:t?na:ta;return!t&&pe(i,"iterate",l?vr:ut),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function qe(e){return function(...t){return e==="delete"?!1:this}}function Ls(){const e={get(i){return ln(this,i)},get size(){return cn(this)},has:fn,add:La,set:Ra,delete:ja,clear:$a,forEach:un(!1,!1)},t={get(i){return ln(this,i,!1,!0)},get size(){return cn(this)},has:fn,add:La,set:Ra,delete:ja,clear:$a,forEach:un(!1,!0)},n={get(i){return ln(this,i,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:un(!0,!1)},r={get(i){return ln(this,i,!0,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=dn(i,!1,!1),n[i]=dn(i,!0,!1),t[i]=dn(i,!1,!0),r[i]=dn(i,!0,!0)}),[e,n,t,r]}const[Rs,js,$s,zs]=Ls();function Zr(e,t){const n=t?e?zs:$s:e?js:Rs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(z(n,a)&&a in r?n:r,a,i)}const Ds={get:Zr(!1,!1)},Us={get:Zr(!1,!0)},Hs={get:Zr(!0,!1)},Wi=new WeakMap,Ki=new WeakMap,qi=new WeakMap,Bs=new WeakMap;function Ys(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ws(e){return e.__v_skip||!Object.isExtensible(e)?0:Ys(ds(e))}function Qr(e){return Bt(e)?e:ea(e,!1,Yi,Ds,Wi)}function Ks(e){return ea(e,!1,Fs,Us,Ki)}function Xi(e){return ea(e,!0,Ms,Hs,qi)}function ea(e,t,n,r,a){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ws(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function kt(e){return Bt(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function yr(e){return!!(e&&e.__v_isShallow)}function Vi(e){return kt(e)||Bt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Ji(e){return Mn(e,"__v_skip",!0),e}const ta=e=>V(e)?Qr(e):e,na=e=>V(e)?Xi(e):e;function qs(e){Je&&ke&&(e=U(e),Ui(e.dep||(e.dep=Xr())))}function Xs(e,t){e=U(e);const n=e.dep;n&&br(n)}function fe(e){return!!(e&&e.__v_isRef===!0)}function Vs(e){return fe(e)?e.value:e}const Js={get:(e,t,n)=>Vs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Gi(e){return kt(e)?e:new Proxy(e,Js)}var Zi;class Gs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Zi]=!1,this._dirty=!0,this.effect=new Vr(t,()=>{this._dirty||(this._dirty=!0,Xs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return qs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Zi="__v_isReadonly";function Zs(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=Ie):(r=e.get,a=e.set),new Gs(r,a,i||!a,n)}function Ge(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){qn(i,t,n)}return a}function Se(e,t,n,r){if(R(e)){const i=Ge(e,t,n,r);return i&&Li(i)&&i.catch(o=>{qn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Se(e[i],t,n,r));return a}function qn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ge(l,null,10,[e,o,s]);return}}Qs(e,n,a,r)}function Qs(e,t,n,r=!0){console.error(e)}let Yt=!1,xr=!1;const ie=[];let Le=0;const At=[];let De=null,st=0;const Qi=Promise.resolve();let ra=null;function el(e){const t=ra||Qi;return e?t.then(this?e.bind(this):e):t}function tl(e){let t=Le+1,n=ie.length;for(;t<n;){const r=t+n>>>1;Wt(ie[r])<e?t=r+1:n=r}return t}function aa(e){(!ie.length||!ie.includes(e,Yt&&e.allowRecurse?Le+1:Le))&&(e.id==null?ie.push(e):ie.splice(tl(e.id),0,e),eo())}function eo(){!Yt&&!xr&&(xr=!0,ra=Qi.then(no))}function nl(e){const t=ie.indexOf(e);t>Le&&ie.splice(t,1)}function rl(e){L(e)?At.push(...e):(!De||!De.includes(e,e.allowRecurse?st+1:st))&&At.push(e),eo()}function za(e,t=Yt?Le+1:0){for(;t<ie.length;t++){const n=ie[t];n&&n.pre&&(ie.splice(t,1),t--,n())}}function to(e){if(At.length){const t=[...new Set(At)];if(At.length=0,De){De.push(...t);return}for(De=t,De.sort((n,r)=>Wt(n)-Wt(r)),st=0;st<De.length;st++)De[st]();De=null,st=0}}const Wt=e=>e.id==null?1/0:e.id,al=(e,t)=>{const n=Wt(e)-Wt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function no(e){xr=!1,Yt=!0,ie.sort(al);const t=Ie;try{for(Le=0;Le<ie.length;Le++){const n=ie[Le];n&&n.active!==!1&&Ge(n,null,14)}}finally{Le=0,ie.length=0,to(),Yt=!1,ra=null,(ie.length||At.length)&&no()}}function il(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||X;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||X;v&&(a=n.map(k=>ee(k)?k.trim():k)),m&&(a=n.map(hs))}let s,l=r[s=ir(t)]||r[s=ir(je(t))];!l&&i&&(l=r[s=ir(It(t))]),l&&Se(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Se(c,e,6,a)}}function ro(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=c=>{const d=ro(c,t,!0);d&&(s=!0,ce(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(V(e)&&r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):ce(o,i),V(e)&&r.set(e,o),o)}function Xn(e,t){return!e||!Hn(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,It(t))||z(e,t))}let Oe=null,ao=null;function Fn(e){const t=Oe;return Oe=e,ao=e&&e.type.__scopeId||null,t}function ol(e,t=Oe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Xa(-1);const i=Fn(t);let o;try{o=e(...a)}finally{Fn(i),r._d&&Xa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function sr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:k,ctx:F,inheritAttrs:N}=e;let D,w;const P=Fn(e);try{if(n.shapeFlag&4){const j=a||r;D=Fe(d.call(j,j,m,i,k,v,F)),w=l}else{const j=t;D=Fe(j.length>1?j(i,{attrs:l,slots:s,emit:c}):j(i,null)),w=t.props?l:sl(l)}}catch(j){zt.length=0,qn(j,e,1),D=ne(mt)}let E=D;if(w&&N!==!1){const j=Object.keys(w),{shapeFlag:H}=E;j.length&&H&7&&(o&&j.some(Yr)&&(w=ll(w,o)),E=Et(E,w))}return n.dirs&&(E=Et(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),D=E,Fn(P),D}const sl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Hn(n))&&((t||(t={}))[n]=e[n]);return t},ll=(e,t)=>{const n={};for(const r in e)(!Yr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function fl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Da(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Xn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Da(r,o,c):!0:!!o;return!1}function Da(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Xn(n,i))return!0}return!1}function cl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ul=e=>e.__isSuspense;function dl(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):rl(e)}function ml(e,t){if(Q){let n=Q.provides;const r=Q.parent&&Q.parent.provides;r===n&&(n=Q.provides=Object.create(r)),n[e]=t}}function An(e,t,n=!1){const r=Q||Oe;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}const mn={};function On(e,t,n){return io(e,t,n)}function io(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=X){const s=ys()===(Q==null?void 0:Q.scope)?Q:null;let l,c=!1,d=!1;if(fe(e)?(l=()=>e.value,c=yr(e)):kt(e)?(l=()=>e,r=!0):L(e)?(d=!0,c=e.some(E=>kt(E)||yr(E)),l=()=>e.map(E=>{if(fe(E))return E.value;if(kt(E))return bt(E);if(R(E))return Ge(E,s,2)})):R(e)?t?l=()=>Ge(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Se(e,s,3,[v])}:l=Ie,t&&r){const E=l;l=()=>bt(E())}let m,v=E=>{m=w.onStop=()=>{Ge(E,s,4)}},k;if(qt)if(v=Ie,t?n&&Se(t,s,3,[l(),d?[]:void 0,v]):l(),a==="sync"){const E=cf();k=E.__watcherHandles||(E.__watcherHandles=[])}else return Ie;let F=d?new Array(e.length).fill(mn):mn;const N=()=>{if(w.active)if(t){const E=w.run();(r||c||(d?E.some((j,H)=>Nn(j,F[H])):Nn(E,F)))&&(m&&m(),Se(t,s,3,[E,F===mn?void 0:d&&F[0]===mn?[]:F,v]),F=E)}else w.run()};N.allowRecurse=!!t;let D;a==="sync"?D=N:a==="post"?D=()=>me(N,s&&s.suspense):(N.pre=!0,s&&(N.id=s.uid),D=()=>aa(N));const w=new Vr(l,D);t?n?N():F=w.run():a==="post"?me(w.run.bind(w),s&&s.suspense):w.run();const P=()=>{w.stop(),s&&s.scope&&Wr(s.scope.effects,w)};return k&&k.push(P),P}function pl(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?oo(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=Q;Pt(this);const s=io(a,i.bind(r),n);return o?Pt(o):dt(),s}function oo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function bt(e,t){if(!V(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))bt(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)bt(e[n],t);else if(Fi(e)||_t(e))e.forEach(n=>{bt(n,t)});else if(ji(e))for(const n in e)bt(e[n],t);return e}function ia(e){return R(e)?{setup:e,name:e.name}:e}const En=e=>!!e.type.__asyncLoader,so=e=>e.type.__isKeepAlive;function hl(e,t){lo(e,"a",t)}function gl(e,t){lo(e,"da",t)}function lo(e,t,n=Q){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Vn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)so(a.parent.vnode)&&vl(r,t,n,a),a=a.parent}}function vl(e,t,n,r){const a=Vn(t,e,r,!0);fo(()=>{Wr(r[t],a)},n)}function Vn(e,t,n=Q,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;St(),Pt(n);const s=Se(t,n,e,o);return dt(),Tt(),s});return r?a.unshift(i):a.push(i),i}}const We=e=>(t,n=Q)=>(!qt||e==="sp")&&Vn(e,(...r)=>t(...r),n),bl=We("bm"),yl=We("m"),xl=We("bu"),wl=We("u"),_l=We("bum"),fo=We("um"),kl=We("sp"),Al=We("rtg"),Ol=We("rtc");function El(e,t=Q){Vn("ec",e,t)}function at(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(St(),Se(l,n,8,[e.el,s,e,t]),Tt())}}const co="components";function Pn(e,t){return Cl(co,e,!0,t)||e}const Pl=Symbol();function Cl(e,t,n=!0,r=!1){const a=Oe||Q;if(a){const i=a.type;if(e===co){const s=sf(i,!1);if(s&&(s===t||s===je(t)||s===Wn(je(t))))return i}const o=Ua(a[e]||i[e],t)||Ua(a.appContext[e],t);return!o&&r?i:o}}function Ua(e,t){return e&&(e[t]||e[je(t)]||e[Wn(je(t))])}function Ln(e,t,n,r){let a;const i=n&&n[r];if(L(e)||ee(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(V(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const wr=e=>e?_o(e)?fa(e)||e.proxy:wr(e.parent):null,$t=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wr(e.parent),$root:e=>wr(e.root),$emit:e=>e.emit,$options:e=>oa(e),$forceUpdate:e=>e.f||(e.f=()=>aa(e.update)),$nextTick:e=>e.n||(e.n=el.bind(e.proxy)),$watch:e=>pl.bind(e)}),lr=(e,t)=>e!==X&&!e.__isScriptSetup&&z(e,t),Il={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(lr(r,t))return o[t]=1,r[t];if(a!==X&&z(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&z(c,t))return o[t]=3,i[t];if(n!==X&&z(n,t))return o[t]=4,n[t];_r&&(o[t]=0)}}const d=$t[t];let m,v;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==X&&z(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,z(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return lr(a,t)?(a[t]=n,!0):r!==X&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==X&&z(e,o)||lr(t,o)||(s=i[0])&&z(s,o)||z(r,o)||z($t,o)||z(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let _r=!0;function Sl(e){const t=oa(e),n=e.proxy,r=e.ctx;_r=!1,t.beforeCreate&&Ha(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:F,activated:N,deactivated:D,beforeDestroy:w,beforeUnmount:P,destroyed:E,unmounted:j,render:H,renderTracked:ue,renderTriggered:re,errorCaptured:xe,serverPrefetch:be,expose:$e,inheritAttrs:Mt,components:rn,directives:an,filters:nr}=t;if(c&&Tl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const Y=o[J];R(Y)&&(r[J]=Y.bind(n))}if(a){const J=a.call(n,n);V(J)&&(e.data=Qr(J))}if(_r=!0,i)for(const J in i){const Y=i[J],nt=R(Y)?Y.bind(n,n):R(Y.get)?Y.get.bind(n,n):Ie,on=!R(Y)&&R(Y.set)?Y.set.bind(n):Ie,rt=ye({get:nt,set:on});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Te=>rt.value=Te})}if(s)for(const J in s)uo(s[J],r,n,J);if(l){const J=R(l)?l.call(n):l;Reflect.ownKeys(J).forEach(Y=>{ml(Y,J[Y])})}d&&Ha(d,e,"c");function oe(J,Y){L(Y)?Y.forEach(nt=>J(nt.bind(n))):Y&&J(Y.bind(n))}if(oe(bl,m),oe(yl,v),oe(xl,k),oe(wl,F),oe(hl,N),oe(gl,D),oe(El,xe),oe(Ol,ue),oe(Al,re),oe(_l,P),oe(fo,j),oe(kl,be),L($e))if($e.length){const J=e.exposed||(e.exposed={});$e.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:nt=>n[Y]=nt})})}else e.exposed||(e.exposed={});H&&e.render===Ie&&(e.render=H),Mt!=null&&(e.inheritAttrs=Mt),rn&&(e.components=rn),an&&(e.directives=an)}function Tl(e,t,n=Ie,r=!1){L(e)&&(e=kr(e));for(const a in e){const i=e[a];let o;V(i)?"default"in i?o=An(i.from||a,i.default,!0):o=An(i.from||a):o=An(i),fe(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ha(e,t,n){Se(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function uo(e,t,n,r){const a=r.includes(".")?oo(n,r):()=>n[r];if(ee(e)){const i=t[e];R(i)&&On(a,i)}else if(R(e))On(a,e.bind(n));else if(V(e))if(L(e))e.forEach(i=>uo(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&On(a,i,e)}}function oa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Rn(l,c,o,!0)),Rn(l,t,o)),V(t)&&i.set(t,l),l}function Rn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Rn(e,i,n,!0),a&&a.forEach(o=>Rn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Nl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Nl={data:Ba,props:ot,emits:ot,methods:ot,computed:ot,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:ot,directives:ot,watch:Fl,provide:Ba,inject:Ml};function Ba(e,t){return t?e?function(){return ce(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function Ml(e,t){return ot(kr(e),kr(t))}function kr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function se(e,t){return e?[...new Set([].concat(e,t))]:t}function ot(e,t){return e?ce(ce(Object.create(null),e),t):t}function Fl(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=se(e[r],t[r]);return n}function Ll(e,t,n,r=!1){const a={},i={};Mn(i,Gn,1),e.propsDefaults=Object.create(null),mo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ks(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Rl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Xn(e.emitsOptions,v))continue;const k=t[v];if(l)if(z(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const F=je(v);a[F]=Ar(l,s,F,k,e,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{mo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!z(t,m)&&((d=It(m))===m||!z(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Ar(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!z(t,m))&&(delete i[m],c=!0)}c&&Ue(e,"set","$attrs")}function mo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(kn(l))continue;const c=t[l];let d;a&&z(a,d=je(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Xn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||X;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Ar(a,l,m,c[m],e,!z(c,m))}}return o}function Ar(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=z(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Pt(a),r=c[n]=l.call(null,t),dt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===It(n))&&(r=!0))}return r}function po(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const d=m=>{l=!0;const[v,k]=po(m,t,!0);ce(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return V(e)&&r.set(e,wt),wt;if(L(i))for(let d=0;d<i.length;d++){const m=je(i[d]);Ya(m)&&(o[m]=X)}else if(i)for(const d in i){const m=je(d);if(Ya(m)){const v=i[d],k=o[m]=L(v)||R(v)?{type:v}:Object.assign({},v);if(k){const F=qa(Boolean,k.type),N=qa(String,k.type);k[0]=F>-1,k[1]=N<0||F<N,(F>-1||z(k,"default"))&&s.push(m)}}}const c=[o,s];return V(e)&&r.set(e,c),c}function Ya(e){return e[0]!=="$"}function Wa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ka(e,t){return Wa(e)===Wa(t)}function qa(e,t){return L(t)?t.findIndex(n=>Ka(n,e)):R(t)&&Ka(t,e)?0:-1}const ho=e=>e[0]==="_"||e==="$stable",sa=e=>L(e)?e.map(Fe):[Fe(e)],jl=(e,t,n)=>{if(t._n)return t;const r=ol((...a)=>sa(t(...a)),n);return r._c=!1,r},go=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ho(a))continue;const i=e[a];if(R(i))t[a]=jl(a,i,r);else if(i!=null){const o=sa(i);t[a]=()=>o}}},vo=(e,t)=>{const n=sa(t);e.slots.default=()=>n},$l=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Mn(t,"_",n)):go(t,e.slots={})}else e.slots={},t&&vo(e,t);Mn(e.slots,Gn,1)},zl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=X;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ce(a,t),!n&&s===1&&delete a._):(i=!t.$stable,go(t,a)),o=t}else t&&(vo(e,t),o={default:1});if(i)for(const s in a)!ho(s)&&!(s in o)&&delete a[s]};function bo(){return{app:null,config:{isNativeTag:fs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dl=0;function Ul(e,t){return function(r,a=null){R(r)||(r=Object.assign({},r)),a!=null&&!V(a)&&(a=null);const i=bo(),o=new Set;let s=!1;const l=i.app={_uid:Dl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:uf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&R(c.install)?(o.add(c),c.install(l,...d)):R(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=ne(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,fa(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Or(e,t,n,r,a=!1){if(L(e)){e.forEach((v,k)=>Or(v,t&&(L(t)?t[k]:t),n,r,a));return}if(En(r)&&!a)return;const i=r.shapeFlag&4?fa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===X?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ee(c)?(d[c]=null,z(m,c)&&(m[c]=null)):fe(c)&&(c.value=null)),R(l))Ge(l,s,12,[o,d]);else{const v=ee(l),k=fe(l);if(v||k){const F=()=>{if(e.f){const N=v?z(m,l)?m[l]:d[l]:l.value;a?L(N)&&Wr(N,i):L(N)?N.includes(i)||N.push(i):v?(d[l]=[i],z(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,z(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,me(F,n)):F()}}}const me=dl;function Hl(e){return Bl(e)}function Bl(e,t){const n=gs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=Ie,insertStaticContent:F}=e,N=(f,u,p,g=null,h=null,x=null,A=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!Lt(f,u)&&(g=sn(f),Te(f,h,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:S,shapeFlag:C}=u;switch(b){case Jn:D(f,u,p,g);break;case mt:w(f,u,p,g);break;case Cn:f==null&&P(u,p,g,A);break;case ge:rn(f,u,p,g,h,x,A,y,_);break;default:C&1?H(f,u,p,g,h,x,A,y,_):C&6?an(f,u,p,g,h,x,A,y,_):(C&64||C&128)&&b.process(f,u,p,g,h,x,A,y,_,gt)}S!=null&&h&&Or(S,f&&f.ref,x,u||f,!u)},D=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},w=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},P=(f,u,p,g)=>{[f.el,f.anchor]=F(f.children,u,p,g,f.el,f.anchor)},E=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},j=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},H=(f,u,p,g,h,x,A,y,_)=>{A=A||u.type==="svg",f==null?ue(u,p,g,h,x,A,y,_):be(f,u,h,x,A,y,_)},ue=(f,u,p,g,h,x,A,y)=>{let _,b;const{type:S,props:C,shapeFlag:T,transition:M,dirs:$}=f;if(_=f.el=o(f.type,x,C&&C.is,C),T&8?d(_,f.children):T&16&&xe(f.children,_,null,g,h,x&&S!=="foreignObject",A,y),$&&at(f,null,g,"created"),re(_,f,f.scopeId,A,g),C){for(const B in C)B!=="value"&&!kn(B)&&i(_,B,null,C[B],x,f.children,g,h,ze);"value"in C&&i(_,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Me(b,g,f)}$&&at(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;W&&M.beforeEnter(_),r(_,u,p),((b=C&&C.onVnodeMounted)||W||$)&&me(()=>{b&&Me(b,g,f),W&&M.enter(_),$&&at(f,null,g,"mounted")},h)},re=(f,u,p,g,h)=>{if(p&&k(f,p),g)for(let x=0;x<g.length;x++)k(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;re(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},xe=(f,u,p,g,h,x,A,y,_=0)=>{for(let b=_;b<f.length;b++){const S=f[b]=y?Ve(f[b]):Fe(f[b]);N(null,S,u,p,g,h,x,A,y)}},be=(f,u,p,g,h,x,A)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:S}=u;_|=f.patchFlag&16;const C=f.props||X,T=u.props||X;let M;p&&it(p,!1),(M=T.onVnodeBeforeUpdate)&&Me(M,p,u,f),S&&at(u,f,p,"beforeUpdate"),p&&it(p,!0);const $=h&&u.type!=="foreignObject";if(b?$e(f.dynamicChildren,b,y,p,g,$,x):A||Y(f,u,y,null,p,g,$,x,!1),_>0){if(_&16)Mt(y,u,C,T,p,g,h);else if(_&2&&C.class!==T.class&&i(y,"class",null,T.class,h),_&4&&i(y,"style",C.style,T.style,h),_&8){const W=u.dynamicProps;for(let B=0;B<W.length;B++){const Z=W[B],we=C[Z],vt=T[Z];(vt!==we||Z==="value")&&i(y,Z,we,vt,h,f.children,p,g,ze)}}_&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Mt(y,u,C,T,p,g,h);((M=T.onVnodeUpdated)||S)&&me(()=>{M&&Me(M,p,u,f),S&&at(u,f,p,"updated")},g)},$e=(f,u,p,g,h,x,A)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],S=_.el&&(_.type===ge||!Lt(_,b)||_.shapeFlag&70)?m(_.el):p;N(_,b,S,null,g,h,x,A,!0)}},Mt=(f,u,p,g,h,x,A)=>{if(p!==g){if(p!==X)for(const y in p)!kn(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,x,ze);for(const y in g){if(kn(y))continue;const _=g[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,A,u.children,h,x,ze)}"value"in g&&i(f,"value",p.value,g.value)}},rn=(f,u,p,g,h,x,A,y,_)=>{const b=u.el=f?f.el:s(""),S=u.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:T,slotScopeIds:M}=u;M&&(y=y?y.concat(M):M),f==null?(r(b,p,g),r(S,p,g),xe(u.children,p,S,h,x,A,y,_)):C>0&&C&64&&T&&f.dynamicChildren?($e(f.dynamicChildren,T,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&yo(f,u,!0)):Y(f,u,p,S,h,x,A,y,_)},an=(f,u,p,g,h,x,A,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,_):nr(u,p,g,h,x,A,_):Aa(f,u,_)},nr=(f,u,p,g,h,x,A)=>{const y=f.component=tf(f,g,h);if(so(f)&&(y.ctx.renderer=gt),nf(y),y.asyncDep){if(h&&h.registerDep(y,oe),!f.el){const _=y.subTree=ne(mt);w(null,_,u,p)}return}oe(y,f,u,p,h,x,A)},Aa=(f,u,p)=>{const g=u.component=f.component;if(fl(f,u,p))if(g.asyncDep&&!g.asyncResolved){J(g,u,p);return}else g.next=u,nl(g.update),g.update();else u.el=f.el,g.vnode=u},oe=(f,u,p,g,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:S,bu:C,u:T,parent:M,vnode:$}=f,W=S,B;it(f,!1),S?(S.el=$.el,J(f,S,A)):S=$,C&&or(C),(B=S.props&&S.props.onVnodeBeforeUpdate)&&Me(B,M,S,$),it(f,!0);const Z=sr(f),we=f.subTree;f.subTree=Z,N(we,Z,m(we.el),sn(we),f,h,x),S.el=Z.el,W===null&&cl(f,Z.el),T&&me(T,h),(B=S.props&&S.props.onVnodeUpdated)&&me(()=>Me(B,M,S,$),h)}else{let S;const{el:C,props:T}=u,{bm:M,m:$,parent:W}=f,B=En(u);if(it(f,!1),M&&or(M),!B&&(S=T&&T.onVnodeBeforeMount)&&Me(S,W,u),it(f,!0),C&&ar){const Z=()=>{f.subTree=sr(f),ar(C,f.subTree,f,h,null)};B?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=sr(f);N(null,Z,p,g,f,h,x),u.el=Z.el}if($&&me($,h),!B&&(S=T&&T.onVnodeMounted)){const Z=u;me(()=>Me(S,W,Z),h)}(u.shapeFlag&256||W&&En(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&me(f.a,h),f.isMounted=!0,u=p=g=null}},_=f.effect=new Vr(y,()=>aa(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,it(f,!0),b()},J=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Rl(f,u.props,g,p),zl(f,u.children,p),St(),za(),Tt()},Y=(f,u,p,g,h,x,A,y,_=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,C=u.children,{patchFlag:T,shapeFlag:M}=u;if(T>0){if(T&128){on(b,C,p,g,h,x,A,y,_);return}else if(T&256){nt(b,C,p,g,h,x,A,y,_);return}}M&8?(S&16&&ze(b,h,x),C!==b&&d(p,C)):S&16?M&16?on(b,C,p,g,h,x,A,y,_):ze(b,h,x,!0):(S&8&&d(p,""),M&16&&xe(C,p,g,h,x,A,y,_))},nt=(f,u,p,g,h,x,A,y,_)=>{f=f||wt,u=u||wt;const b=f.length,S=u.length,C=Math.min(b,S);let T;for(T=0;T<C;T++){const M=u[T]=_?Ve(u[T]):Fe(u[T]);N(f[T],M,p,null,h,x,A,y,_)}b>S?ze(f,h,x,!0,!1,C):xe(u,p,g,h,x,A,y,_,C)},on=(f,u,p,g,h,x,A,y,_)=>{let b=0;const S=u.length;let C=f.length-1,T=S-1;for(;b<=C&&b<=T;){const M=f[b],$=u[b]=_?Ve(u[b]):Fe(u[b]);if(Lt(M,$))N(M,$,p,null,h,x,A,y,_);else break;b++}for(;b<=C&&b<=T;){const M=f[C],$=u[T]=_?Ve(u[T]):Fe(u[T]);if(Lt(M,$))N(M,$,p,null,h,x,A,y,_);else break;C--,T--}if(b>C){if(b<=T){const M=T+1,$=M<S?u[M].el:g;for(;b<=T;)N(null,u[b]=_?Ve(u[b]):Fe(u[b]),p,$,h,x,A,y,_),b++}}else if(b>T)for(;b<=C;)Te(f[b],h,x,!0),b++;else{const M=b,$=b,W=new Map;for(b=$;b<=T;b++){const he=u[b]=_?Ve(u[b]):Fe(u[b]);he.key!=null&&W.set(he.key,b)}let B,Z=0;const we=T-$+1;let vt=!1,Pa=0;const Ft=new Array(we);for(b=0;b<we;b++)Ft[b]=0;for(b=M;b<=C;b++){const he=f[b];if(Z>=we){Te(he,h,x,!0);continue}let Ne;if(he.key!=null)Ne=W.get(he.key);else for(B=$;B<=T;B++)if(Ft[B-$]===0&&Lt(he,u[B])){Ne=B;break}Ne===void 0?Te(he,h,x,!0):(Ft[Ne-$]=b+1,Ne>=Pa?Pa=Ne:vt=!0,N(he,u[Ne],p,null,h,x,A,y,_),Z++)}const Ca=vt?Yl(Ft):wt;for(B=Ca.length-1,b=we-1;b>=0;b--){const he=$+b,Ne=u[he],Ia=he+1<S?u[he+1].el:g;Ft[b]===0?N(null,Ne,p,Ia,h,x,A,y,_):vt&&(B<0||b!==Ca[B]?rt(Ne,p,Ia,2):B--)}}},rt=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=f;if(b&6){rt(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,gt);return}if(A===ge){r(x,u,p);for(let C=0;C<_.length;C++)rt(_[C],u,p,g);r(f.anchor,u,p);return}if(A===Cn){E(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),me(()=>y.enter(x),h);else{const{leave:C,delayLeave:T,afterLeave:M}=y,$=()=>r(x,u,p),W=()=>{C(x,()=>{$(),M&&M()})};T?T(x,$,W):W()}else r(x,u,p)},Te=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:S,patchFlag:C,dirs:T}=f;if(y!=null&&Or(y,null,p,f,!0),S&256){u.ctx.deactivate(f);return}const M=S&1&&T,$=!En(f);let W;if($&&(W=A&&A.onVnodeBeforeUnmount)&&Me(W,u,f),S&6)ns(f.component,p,g);else{if(S&128){f.suspense.unmount(p,g);return}M&&at(f,null,u,"beforeUnmount"),S&64?f.type.remove(f,u,p,h,gt,g):b&&(x!==ge||C>0&&C&64)?ze(b,u,p,!1,!0):(x===ge&&C&384||!h&&S&16)&&ze(_,u,p),g&&Oa(f)}($&&(W=A&&A.onVnodeUnmounted)||M)&&me(()=>{W&&Me(W,u,f),M&&at(f,null,u,"unmounted")},p)},Oa=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===ge){ts(p,g);return}if(u===Cn){j(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,_=()=>A(p,x);y?y(f.el,x,_):_()}else x()},ts=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},ns=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=f;g&&or(g),h.stop(),x&&(x.active=!1,Te(A,f,u,p)),y&&me(y,u),me(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},ze=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Te(f[A],u,p,g,h)},sn=f=>f.shapeFlag&6?sn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ea=(f,u,p)=>{f==null?u._vnode&&Te(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),za(),to(),u._vnode=f},gt={p:N,um:Te,m:rt,r:Oa,mt:nr,mc:xe,pc:Y,pbc:$e,n:sn,o:e};let rr,ar;return t&&([rr,ar]=t(gt)),{render:Ea,hydrate:rr,createApp:Ul(Ea,rr)}}function it({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function yo(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ve(a[i]),s.el=o.el),n||yo(o,s)),s.type===Jn&&(s.el=o.el)}}function Yl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Wl=e=>e.__isTeleport,ge=Symbol(void 0),Jn=Symbol(void 0),mt=Symbol(void 0),Cn=Symbol(void 0),zt=[];let Ee=null;function ae(e=!1){zt.push(Ee=e?null:[])}function Kl(){zt.pop(),Ee=zt[zt.length-1]||null}let Kt=1;function Xa(e){Kt+=e}function xo(e){return e.dynamicChildren=Kt>0?Ee||wt:null,Kl(),Kt>0&&Ee&&Ee.push(e),e}function le(e,t,n,r,a,i){return xo(Pe(e,t,n,r,a,i,!0))}function ql(e,t,n,r,a){return xo(ne(e,t,n,r,a,!0))}function Er(e){return e?e.__v_isVNode===!0:!1}function Lt(e,t){return e.type===t.type&&e.key===t.key}const Gn="__vInternal",wo=({key:e})=>e??null,In=({ref:e,ref_key:t,ref_for:n})=>e!=null?ee(e)||fe(e)||R(e)?{i:Oe,r:e,k:t,f:!!n}:e:null;function Pe(e,t=null,n=null,r=0,a=null,i=e===ge?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&wo(t),ref:t&&In(t),scopeId:ao,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Oe};return s?(la(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),Kt>0&&!o&&Ee&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ee.push(l),l}const ne=Xl;function Xl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Pl)&&(e=mt),Er(e)){const s=Et(e,t,!0);return n&&la(s,n),Kt>0&&!i&&Ee&&(s.shapeFlag&6?Ee[Ee.indexOf(e)]=s:Ee.push(s)),s.patchFlag|=-2,s}if(lf(e)&&(e=e.__vccOpts),t){t=Vl(t);let{class:s,style:l}=t;s&&!ee(s)&&(t.class=Br(s)),V(l)&&(Vi(l)&&!L(l)&&(l=ce({},l)),t.style=Hr(l))}const o=ee(e)?1:ul(e)?128:Wl(e)?64:V(e)?4:R(e)?2:0;return Pe(e,t,n,r,a,o,i,!0)}function Vl(e){return e?Vi(e)||Gn in e?ce({},e):e:null}function Et(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Zl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&wo(s),ref:t&&t.ref?n&&a?L(a)?a.concat(In(t)):[a,In(t)]:In(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Et(e.ssContent),ssFallback:e.ssFallback&&Et(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Jl(e=" ",t=0){return ne(Jn,null,e,t)}function Gl(e,t){const n=ne(Cn,null,e);return n.staticCount=t,n}function Va(e="",t=!1){return t?(ae(),ql(mt,null,e)):ne(mt,null,e)}function Fe(e){return e==null||typeof e=="boolean"?ne(mt):L(e)?ne(ge,null,e.slice()):typeof e=="object"?Ve(e):ne(Jn,null,String(e))}function Ve(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Et(e)}function la(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),la(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Gn in t)?t._ctx=Oe:a===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),r&64?(n=16,t=[Jl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Zl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Br([t.class,r.class]));else if(a==="style")t.style=Hr([t.style,r.style]);else if(Hn(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Me(e,t,n,r=null){Se(e,t,7,[n,r])}const Ql=bo();let ef=0;function tf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Ql,i={uid:ef++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new vs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:po(r,a),emitsOptions:ro(r,a),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=il.bind(null,i),e.ce&&e.ce(i),i}let Q=null;const Pt=e=>{Q=e,e.scope.on()},dt=()=>{Q&&Q.scope.off(),Q=null};function _o(e){return e.vnode.shapeFlag&4}let qt=!1;function nf(e,t=!1){qt=t;const{props:n,children:r}=e.vnode,a=_o(e);Ll(e,n,a,t),$l(e,r);const i=a?rf(e,t):void 0;return qt=!1,i}function rf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ji(new Proxy(e.ctx,Il));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?of(e):null;Pt(e),St();const i=Ge(r,e,0,[e.props,a]);if(Tt(),dt(),Li(i)){if(i.then(dt,dt),t)return i.then(o=>{Ja(e,o,t)}).catch(o=>{qn(o,e,0)});e.asyncDep=i}else Ja(e,i,t)}else ko(e,t)}function Ja(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=Gi(t)),ko(e,n)}let Ga;function ko(e,t,n){const r=e.type;if(!e.render){if(!t&&Ga&&!r.render){const a=r.template||oa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ce(ce({isCustomElement:i,delimiters:s},o),l);r.render=Ga(a,c)}}e.render=r.render||Ie}Pt(e),St(),Sl(e),Tt(),dt()}function af(e){return new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}})}function of(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=af(e))},slots:e.slots,emit:e.emit,expose:t}}function fa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Gi(Ji(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $t)return $t[n](e)},has(t,n){return n in t||n in $t}}))}function sf(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function lf(e){return R(e)&&"__vccOpts"in e}const ye=(e,t)=>Zs(e,t,qt);function Ao(e,t,n){const r=arguments.length;return r===2?V(t)&&!L(t)?Er(t)?ne(e,null,[t]):ne(e,t):ne(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Er(n)&&(n=[n]),ne(e,t,n))}const ff=Symbol(""),cf=()=>An(ff),uf="3.2.47",df="http://www.w3.org/2000/svg",lt=typeof document<"u"?document:null,Za=lt&&lt.createElement("template"),mf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?lt.createElementNS(df,e):lt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>lt.createTextNode(e),createComment:e=>lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Za.innerHTML=r?`<svg>${e}</svg>`:e;const s=Za.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function pf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function hf(e,t,n){const r=e.style,a=ee(n);if(n&&!a){if(t&&!ee(t))for(const i in t)n[i]==null&&Pr(r,i,"");for(const i in n)Pr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Qa=/\s*!important$/;function Pr(e,t,n){if(L(n))n.forEach(r=>Pr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=gf(e,t);Qa.test(n)?e.setProperty(It(r),n.replace(Qa,""),"important"):e[r]=n}}const ei=["Webkit","Moz","ms"],fr={};function gf(e,t){const n=fr[t];if(n)return n;let r=je(t);if(r!=="filter"&&r in e)return fr[t]=r;r=Wn(r);for(let a=0;a<ei.length;a++){const i=ei[a]+r;if(i in e)return fr[t]=i}return t}const ti="http://www.w3.org/1999/xlink";function vf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ti,t.slice(6,t.length)):e.setAttributeNS(ti,t,n);else{const i=ls(t);n==null||i&&!Ni(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function bf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ni(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function yf(e,t,n,r){e.addEventListener(t,n,r)}function xf(e,t,n,r){e.removeEventListener(t,n,r)}function wf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=_f(t);if(r){const c=i[t]=Of(r,a);yf(e,s,c,l)}else o&&(xf(e,s,o,l),i[t]=void 0)}}const ni=/(?:Once|Passive|Capture)$/;function _f(e){let t;if(ni.test(e)){t={};let r;for(;r=e.match(ni);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),t]}let cr=0;const kf=Promise.resolve(),Af=()=>cr||(kf.then(()=>cr=0),cr=Date.now());function Of(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Se(Ef(r,n.value),t,5,[r])};return n.value=e,n.attached=Af(),n}function Ef(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ri=/^on[a-z]/,Pf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?pf(e,r,a):t==="style"?hf(e,n,r):Hn(t)?Yr(t)||wf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cf(e,t,r,a))?bf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),vf(e,t,r,a))};function Cf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ri.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ri.test(t)&&ee(n)?!1:t in e}const If=ce({patchProp:Pf},mf);let ai;function Sf(){return ai||(ai=Hl(If))}const Tf=(...e)=>{const t=Sf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Nf(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Nf(e){return ee(e)?document.querySelector(e):e}const Qt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Mf={data(){return{}}},Ff={class:"text-center"},Lf=Pe("h1",{class:"text-5xl py-2 text-teal-600 font-medium"},"Umut Arslan",-1),Rf=Pe("h1",{class:"text-2xl py-2"},"Full Stack Developer & Digital Artist.",-1),jf=Pe("p",{class:"text-md py-5 leading-8 text-gray-700 w-[80%]"}," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos architecto repellat deleniti, temporibus ipsam, velit eligendi tempora natus dolorum ex quaerat sunt. Similique delectus fuga recusandae fugit et ratione? Ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure minus, quia veritatis deleniti, quos fugiat obcaecati deserunt dicta vitae totam aut fugit sed nam atque voluptas, corrupti molestiae porro cumque. ",-1),$f=[Lf,Rf,jf];function zf(e,t,n,r,a,i){return ae(),le("div",Ff,$f)}const Df=Qt(Mf,[["render",zf]]),Uf={props:{title:String,imgUrl:String,stack:Array,link:String}},Hf={class:"border-2 rounded-md shadow-xl"},Bf=["src","alt"],Yf={class:"py-5 text-center"},Wf={class:"font-medium mb-2"},Kf={class:"flex flex-row items-center justify-evenly"},qf={class:"text-sm"};function Xf(e,t,n,r,a,i){return ae(),le("div",Hf,[Pe("img",{src:n.imgUrl,alt:e.portfolio,class:"w-full h-40 md:h-44 object-cover"},null,8,Bf),Pe("div",Yf,[Pe("h1",Wf,Sa(n.title),1),Pe("div",Kf,[(ae(!0),le(ge,null,Ln(n.stack,o=>(ae(),le("p",qf,Sa(o),1))),256))])])])}const Vf=Qt(Uf,[["render",Xf]]),Jf=[{title:"It Chapter Two Poster",imgUrl:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0316b2131023937.618c5260d3a60.jpg",stack:["Photoshop","Cinema 4D"],link:"https://www.google.com"},{title:"We found Him",imgUrl:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/41b24c131023937.618c5260d406a.jpg",stack:["Photoshop"],link:"https://www.google.com"},{title:"It Chapter Two Poster",imgUrl:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0316b2131023937.618c5260d3a60.jpg",stack:["Photoshop","Cinema 4D"],link:"https://www.google.com"},{title:"We found Him",imgUrl:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/41b24c131023937.618c5260d406a.jpg",stack:["Photoshop"],link:"https://www.google.com"}],Gf={components:{PortfolioItem:Vf},data(){return{projects:Jf}}},Zf={class:"flex flex-col md:flex-row items-center justify-center"},Qf={class:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"};function ec(e,t,n,r,a,i){const o=Pn("PortfolioItem");return ae(),le("div",Zf,[Pe("div",Qf,[(ae(!0),le(ge,null,Ln(a.projects,(s,l)=>(ae(),le("div",{class:"",key:l},[ne(o,{title:s.title,imgUrl:s.imgUrl,stack:s.stack,link:s.link},null,8,["title","imgUrl","stack","link"])]))),128))])])}const tc=Qt(Gf,[["render",ec]]),nc=[{url:"https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",categorie:"design"},{url:"https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",categorie:"design"},{url:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",categorie:"design"},{url:"https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",categorie:"design"},{url:"https://upload.wikimedia.org/wikiversity/de/3/36/Java-Group.svg",categorie:"programming"},{url:"https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",categorie:"programming"},{url:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",categorie:"programming"},{url:"https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",categorie:"programming"}],rc={data(){return{designLogos:nc}}},ac={class:""},ic=Gl('<h1 class="text-3xl py-1">Services I offer</h1><p class="my-2"> Since the beginning of my journer as a developer and designer I&#39;ve done remote work for clients all <span class="text-teal-500">over the world</span>. </p><p class="my-2"> My main focus lies on full stack development and motion design. Take a look at my <span class="text-teal-500">stack</span> underneath to see where I am proficient in </p>',3),oc={class:"p-5 w-[17rem] mx-auto grid grid-cols-4 gap-2 object-fill items-center"},sc=["src"],lc=["src"];function fc(e,t,n,r,a,i){return ae(),le("div",ac,[ic,Pe("div",oc,[(ae(!0),le(ge,null,Ln(a.designLogos,(o,s)=>(ae(),le("div",null,[o.categorie==="design"?(ae(),le("img",{src:o.url,alt:"img",key:s},null,8,sc)):Va("",!0)]))),256)),(ae(!0),le(ge,null,Ln(a.designLogos,(o,s)=>(ae(),le("div",null,[o.categorie==="programming"?(ae(),le("img",{src:o.url,alt:"img",key:s},null,8,lc)):Va("",!0)]))),256))])])}const cc=Qt(rc,[["render",fc]]),uc={components:{Intro:Df,Portfolio:tc,Services:cc}},dc={class:"app text-center"};function mc(e,t,n,r,a,i){const o=Pn("Intro"),s=Pn("font-awesome-icon"),l=Pn("Services");return ae(),le("div",dc,[ne(o,{class:"h-[100vh] w-auto flex flex-col justify-center items-center"}),ne(s,{icon:"fa-solid"}),ne(l,{class:"mb-10"})])}const pc=Qt(uc,[["render",mc]]);function ii(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ii(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ii(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jn(e){return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jn(e)}function hc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function gc(e,t,n){return t&&oi(e.prototype,t),n&&oi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ca(e,t){return bc(e)||xc(e,t)||Oo(e,t)||_c()}function en(e){return vc(e)||yc(e)||Oo(e)||wc()}function vc(e){if(Array.isArray(e))return Cr(e)}function bc(e){if(Array.isArray(e))return e}function yc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Oo(e,t){if(e){if(typeof e=="string")return Cr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cr(e,t)}}function Cr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function wc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var si=function(){},ua={},Eo={},Po=null,Co={mark:si,measure:si};try{typeof window<"u"&&(ua=window),typeof document<"u"&&(Eo=document),typeof MutationObserver<"u"&&(Po=MutationObserver),typeof performance<"u"&&(Co=performance)}catch{}var kc=ua.navigator||{},li=kc.userAgent,fi=li===void 0?"":li,Qe=ua,q=Eo,ci=Po,pn=Co;Qe.document;var Ke=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",Io=~fi.indexOf("MSIE")||~fi.indexOf("Trident/"),hn,gn,vn,bn,yn,He="___FONT_AWESOME___",Ir=16,So="fa",To="svg-inline--fa",pt="data-fa-i2svg",Sr="data-fa-pseudo-element",Ac="data-fa-pseudo-element-pending",da="data-prefix",ma="data-icon",ui="fontawesome-i2svg",Oc="async",Ec=["HTML","HEAD","STYLE","SCRIPT"],No=function(){try{return!0}catch{return!1}}(),K="classic",G="sharp",pa=[K,G];function tn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var Xt=tn((hn={},te(hn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(hn,G,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),hn)),Vt=tn((gn={},te(gn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(gn,G,{solid:"fass",regular:"fasr"}),gn)),Jt=tn((vn={},te(vn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(vn,G,{fass:"fa-solid",fasr:"fa-regular"}),vn)),Pc=tn((bn={},te(bn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(bn,G,{"fa-solid":"fass","fa-regular":"fasr"}),bn)),Cc=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Mo="fa-layers-text",Ic=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Sc=tn((yn={},te(yn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(yn,G,{900:"fass",400:"fasr"}),yn)),Fo=[1,2,3,4,5,6,7,8,9,10],Tc=Fo.concat([11,12,13,14,15,16,17,18,19,20]),Nc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gt=new Set;Object.keys(Vt[K]).map(Gt.add.bind(Gt));Object.keys(Vt[G]).map(Gt.add.bind(Gt));var Mc=[].concat(pa,en(Gt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(Fo.map(function(e){return"".concat(e,"x")})).concat(Tc.map(function(e){return"w-".concat(e)})),Dt=Qe.FontAwesomeConfig||{};function Fc(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Lc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var Rc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Rc.forEach(function(e){var t=ca(e,2),n=t[0],r=t[1],a=Lc(Fc(n));a!=null&&(Dt[r]=a)})}var Lo={styleDefault:"solid",familyDefault:"classic",cssPrefix:So,replacementClass:To,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Dt.familyPrefix&&(Dt.cssPrefix=Dt.familyPrefix);var Ct=O(O({},Lo),Dt);Ct.autoReplaceSvg||(Ct.observeMutations=!1);var I={};Object.keys(Lo).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){Ct[e]=n,Ut.forEach(function(r){return r(I)})},get:function(){return Ct[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){Ct.cssPrefix=t,Ut.forEach(function(n){return n(I)})},get:function(){return Ct.cssPrefix}});Qe.FontAwesomeConfig=I;var Ut=[];function jc(e){return Ut.push(e),function(){Ut.splice(Ut.indexOf(e),1)}}var Xe=Ir,Re={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $c(e){if(!(!e||!Ke)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(t,r),e}}var zc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zt(){for(var e=12,t="";e-- >0;)t+=zc[Math.random()*62|0];return t}function Nt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ha(e){return e.classList?Nt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ro(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Dc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ro(e[n]),'" ')},"").trim()}function Zn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ga(e){return e.size!==Re.size||e.x!==Re.x||e.y!==Re.y||e.rotate!==Re.rotate||e.flipX||e.flipY}function Uc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Hc(e){var t=e.transform,n=e.width,r=n===void 0?Ir:n,a=e.height,i=a===void 0?Ir:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Io?l+="translate(".concat(t.x/Xe-r/2,"em, ").concat(t.y/Xe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Xe,"em), calc(-50% + ").concat(t.y/Xe,"em)) "):l+="translate(".concat(t.x/Xe,"em, ").concat(t.y/Xe,"em) "),l+="scale(".concat(t.size/Xe*(t.flipX?-1:1),", ").concat(t.size/Xe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Bc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function jo(){var e=So,t=To,n=I.cssPrefix,r=I.replacementClass,a=Bc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var di=!1;function ur(){I.autoAddCss&&!di&&($c(jo()),di=!0)}var Yc={mixout:function(){return{dom:{css:jo,insertCss:ur}}},hooks:function(){return{beforeDOMElementCreation:function(){ur()},beforeI2svg:function(){ur()}}}},Be=Qe||{};Be[He]||(Be[He]={});Be[He].styles||(Be[He].styles={});Be[He].hooks||(Be[He].hooks={});Be[He].shims||(Be[He].shims=[]);var Ce=Be[He],$o=[],Wc=function e(){q.removeEventListener("DOMContentLoaded",e),$n=1,$o.map(function(t){return t()})},$n=!1;Ke&&($n=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),$n||q.addEventListener("DOMContentLoaded",Wc));function Kc(e){Ke&&($n?setTimeout(e,0):$o.push(e))}function nn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ro(e):"<".concat(t," ").concat(Dc(r),">").concat(i.map(nn).join(""),"</").concat(t,">")}function mi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var qc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},dr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?qc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Xc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Tr(e){var t=Xc(e);return t.length===1?t[0].toString(16):null}function Vc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function pi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Nr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=pi(t);typeof Ce.hooks.addPack=="function"&&!a?Ce.hooks.addPack(e,pi(t)):Ce.styles[e]=O(O({},Ce.styles[e]||{}),i),e==="fas"&&Nr("fa",t)}var xn,wn,_n,yt=Ce.styles,Jc=Ce.shims,Gc=(xn={},te(xn,K,Object.values(Jt[K])),te(xn,G,Object.values(Jt[G])),xn),va=null,zo={},Do={},Uo={},Ho={},Bo={},Zc=(wn={},te(wn,K,Object.keys(Xt[K])),te(wn,G,Object.keys(Xt[G])),wn);function Qc(e){return~Mc.indexOf(e)}function eu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Qc(a)?a:null}var Yo=function(){var t=function(i){return dr(yt,function(o,s,l){return o[l]=dr(s,i,{}),o},{})};zo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Do=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Bo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in yt||I.autoFetchSvg,r=dr(Jc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Uo=r.names,Ho=r.unicodes,va=Qn(I.styleDefault,{family:I.familyDefault})};jc(function(e){va=Qn(e.styleDefault,{family:I.familyDefault})});Yo();function ba(e,t){return(zo[e]||{})[t]}function tu(e,t){return(Do[e]||{})[t]}function ct(e,t){return(Bo[e]||{})[t]}function Wo(e){return Uo[e]||{prefix:null,iconName:null}}function nu(e){var t=Ho[e],n=ba("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return va}var ya=function(){return{prefix:null,iconName:null,rest:[]}};function Qn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,a=Xt[r][e],i=Vt[r][e]||Vt[r][a],o=e in Ce.styles?e:null;return i||o||null}var hi=(_n={},te(_n,K,Object.keys(Jt[K])),te(_n,G,Object.keys(Jt[G])),_n);function er(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,K,"".concat(I.cssPrefix,"-").concat(K)),te(t,G,"".concat(I.cssPrefix,"-").concat(G)),t),o=null,s=K;(e.includes(i[K])||e.some(function(c){return hi[K].includes(c)}))&&(s=K),(e.includes(i[G])||e.some(function(c){return hi[G].includes(c)}))&&(s=G);var l=e.reduce(function(c,d){var m=eu(I.cssPrefix,d);if(yt[d]?(d=Gc[s].includes(d)?Pc[s][d]:d,o=d,c.prefix=d):Zc[s].indexOf(d)>-1?(o=d,c.prefix=Qn(d,{family:s})):m?c.iconName=m:d!==I.replacementClass&&d!==i[K]&&d!==i[G]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Wo(c.iconName):{},k=ct(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!yt.far&&yt.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},ya());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===G&&(yt.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=et()||"fas"),l}var ru=function(){function e(){hc(this,e),this.definitions={}}return gc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Nr(s,o[s]);var l=Jt[K][s];l&&Nr(l,o[s]),Yo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),gi=[],xt={},Ot={},au=Object.keys(Ot);function iu(e,t){var n=t.mixoutsTo;return gi=e,xt={},Object.keys(Ot).forEach(function(r){au.indexOf(r)===-1&&delete Ot[r]}),gi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),jn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xt[o]||(xt[o]=[]),xt[o].push(i[o])})}r.provides&&r.provides(Ot)}),n}function Mr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ht(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ye(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ot[e]?Ot[e].apply(null,t):void 0}function Fr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||et();if(t)return t=ct(n,t)||t,mi(Ko.definitions,n,t)||mi(Ce.styles,n,t)}var Ko=new ru,ou=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,ht("noAuto")},su={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ke?(ht("beforeI2svg",t),Ye("pseudoElements2svg",t),Ye("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Kc(function(){fu({autoReplaceSvgRoot:n}),ht("watch",t)})}},lu={icon:function(t){if(t===null)return null;if(jn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Qn(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(Cc))){var a=er(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||et(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=et();return{prefix:i,iconName:ct(i,t)||t}}}},ve={noAuto:ou,config:I,dom:su,parse:lu,library:Ko,findIconDefinition:Fr,toHtml:nn},fu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(Ce.styles).length>0||I.autoFetchSvg)&&Ke&&I.autoReplaceSvg&&ve.dom.i2svg({node:r})};function tr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return nn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ke){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function cu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ga(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Zn(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function uu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function xa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,F=r.found?r:n,N=F.width,D=F.height,w=a==="fak",P=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(be){return m.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(m.classes).join(" "),E={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:P,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(D)})},j=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/D*16*.0625,"em")}:{};k&&(E.attributes[pt]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(d||Zt())},children:[l]}),delete E.attributes.title);var H=O(O({},E),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},j),m.styles)}),ue=r.found&&n.found?Ye("generateAbstractMask",H)||{children:[],attributes:{}}:Ye("generateAbstractIcon",H)||{children:[],attributes:{}},re=ue.children,xe=ue.attributes;return H.children=re,H.attributes=xe,s?uu(H):cu(H)}function vi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[pt]="");var d=O({},o.styles);ga(a)&&(d.transform=Hc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Zn(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function du(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Zn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var mr=Ce.styles;function Lr(e){var t=e[0],n=e[1],r=e.slice(4),a=ca(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var mu={found:!1,width:512,height:512};function pu(e,t){!No&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Rr(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=et()),new Promise(function(r,a){if(Ye("missingIconAbstract"),n==="fa"){var i=Wo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&mr[t]&&mr[t][e]){var o=mr[t][e];return r(Lr(o))}pu(e,t),r(O(O({},mu),{},{icon:I.showMissingIcons&&e?Ye("missingIconAbstract")||{}:{}}))})}var bi=function(){},jr=I.measurePerformance&&pn&&pn.mark&&pn.measure?pn:{mark:bi,measure:bi},jt='FA "6.3.0"',hu=function(t){return jr.mark("".concat(jt," ").concat(t," begins")),function(){return qo(t)}},qo=function(t){jr.mark("".concat(jt," ").concat(t," ends")),jr.measure("".concat(jt," ").concat(t),"".concat(jt," ").concat(t," begins"),"".concat(jt," ").concat(t," ends"))},wa={begin:hu,end:qo},Sn=function(){};function yi(e){var t=e.getAttribute?e.getAttribute(pt):null;return typeof t=="string"}function gu(e){var t=e.getAttribute?e.getAttribute(da):null,n=e.getAttribute?e.getAttribute(ma):null;return t&&n}function vu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function bu(){if(I.autoReplaceSvg===!0)return Tn.replace;var e=Tn[I.autoReplaceSvg];return e||Tn.replace}function yu(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function xu(e){return q.createElement(e)}function Xo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?yu:xu:n;if(typeof e=="string")return q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Xo(o,{ceFn:r}))}),a}function wu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Tn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Xo(a),n)}),n.getAttribute(pt)===null&&I.keepOriginalSource){var r=q.createComment(wu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ha(n).indexOf(I.replacementClass))return Tn.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return nn(s)}).join(`
`);n.setAttribute(pt,""),n.innerHTML=o}};function xi(e){e()}function Vo(e,t){var n=typeof t=="function"?t:Sn;if(e.length===0)n();else{var r=xi;I.mutateApproach===Oc&&(r=Qe.requestAnimationFrame||xi),r(function(){var a=bu(),i=wa.begin("mutate");e.map(a),i(),n()})}}var _a=!1;function Jo(){_a=!0}function $r(){_a=!1}var zn=null;function wi(e){if(ci&&I.observeMutations){var t=e.treeCallback,n=t===void 0?Sn:t,r=e.nodeCallback,a=r===void 0?Sn:r,i=e.pseudoElementsCallback,o=i===void 0?Sn:i,s=e.observeMutationsRoot,l=s===void 0?q:s;zn=new ci(function(c){if(!_a){var d=et();Nt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!yi(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&yi(m.target)&&~Nc.indexOf(m.attributeName))if(m.attributeName==="class"&&gu(m.target)){var v=er(ha(m.target)),k=v.prefix,F=v.iconName;m.target.setAttribute(da,k||d),F&&m.target.setAttribute(ma,F)}else vu(m.target)&&a(m.target)})}}),Ke&&zn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function _u(){zn&&zn.disconnect()}function ku(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Au(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=er(ha(e));return a.prefix||(a.prefix=et()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=tu(a.prefix,e.innerText)||ba(a.prefix,Tr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ou(e){var t=Nt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||Zt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Eu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Re,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Au(e),r=n.iconName,a=n.prefix,i=n.rest,o=Ou(e),s=Mr("parseNodeAttributes",{},e),l=t.styleParser?ku(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Re,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Pu=Ce.styles;function Go(e){var t=I.autoReplaceSvg==="nest"?_i(e,{styleParser:!1}):_i(e);return~t.extra.classes.indexOf(Mo)?Ye("generateLayersText",e,t):Ye("generateSvgReplacementMutation",e,t)}var tt=new Set;pa.map(function(e){tt.add("fa-".concat(e))});Object.keys(Xt[K]).map(tt.add.bind(tt));Object.keys(Xt[G]).map(tt.add.bind(tt));tt=en(tt);function ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ke)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(ui,"-").concat(m))},a=function(m){return n.remove("".concat(ui,"-").concat(m))},i=I.autoFetchSvg?tt:pa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Pu));i.includes("fa")||i.push("fa");var o=[".".concat(Mo,":not([").concat(pt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(pt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Nt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=wa.begin("onTree"),c=s.reduce(function(d,m){try{var v=Go(m);v&&d.push(v)}catch(k){No||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){Vo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function Cu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Go(e).then(function(n){n&&Vo([n],t)})}function Iu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Fr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Fr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var Su=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Re:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,F=k===void 0?null:k,N=n.classes,D=N===void 0?[]:N,w=n.attributes,P=w===void 0?{}:w,E=n.styles,j=E===void 0?{}:E;if(t){var H=t.prefix,ue=t.iconName,re=t.icon;return tr(O({type:"icon"},t),function(){return ht("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(v?P["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(F||Zt()):(P["aria-hidden"]="true",P.focusable="false")),xa({icons:{main:Lr(re),mask:l?Lr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:ue,transform:O(O({},Re),a),symbol:o,title:v,maskId:d,titleId:F,extra:{attributes:P,styles:j,classes:D}})})}},Tu={mixout:function(){return{icon:Iu(Su)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ki,n.nodeCallback=Cu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return ki(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,F){Promise.all([Rr(a,s),d.iconName?Rr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var D=ca(N,2),w=D[0],P=D[1];k([n,xa({icons:{main:w,mask:P},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Zn(s);l.length>0&&(a.style=l);var c;return ga(o)&&(c=Ye("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Nu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return tr({type:"layer"},function(){ht("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(en(i)).join(" ")},children:o}]})}}}},Mu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return tr({type:"counter",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),du({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(en(s))}})})}}}},Fu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Re:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return tr({type:"text",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),vi({content:n,transform:O(O({},Re),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(I.cssPrefix,"-layers-text")].concat(en(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Io){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,vi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Lu=new RegExp('"',"ug"),Ai=[1105920,1112319];function Ru(e){var t=e.replace(Lu,""),n=Vc(t,0),r=n>=Ai[0]&&n<=Ai[1],a=t.length===2?t[0]===t[1]:!1;return{value:Tr(a?t[0]:t),isSecondary:r||a}}function Oi(e,t){var n="".concat(Ac).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Nt(e.children),o=i.filter(function(re){return re.getAttribute(Sr)===t})[0],s=Qe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ic),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?G:K,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Vt[v][l[2].toLowerCase()]:Sc[v][c],F=Ru(m),N=F.value,D=F.isSecondary,w=l[0].startsWith("FontAwesome"),P=ba(k,N),E=P;if(w){var j=nu(N);j.iconName&&j.prefix&&(P=j.iconName,k=j.prefix)}if(P&&!D&&(!o||o.getAttribute(da)!==k||o.getAttribute(ma)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var H=Eu(),ue=H.extra;ue.attributes[Sr]=t,Rr(P,k).then(function(re){var xe=xa(O(O({},H),{},{icons:{main:re,mask:ya()},prefix:k,iconName:E,extra:ue,watchable:!0})),be=q.createElement("svg");t==="::before"?e.insertBefore(be,e.firstChild):e.appendChild(be),be.outerHTML=xe.map(function($e){return nn($e)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ju(e){return Promise.all([Oi(e,"::before"),Oi(e,"::after")])}function $u(e){return e.parentNode!==document.head&&!~Ec.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Sr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ei(e){if(Ke)return new Promise(function(t,n){var r=Nt(e.querySelectorAll("*")).filter($u).map(ju),a=wa.begin("searchPseudoElements");Jo(),Promise.all(r).then(function(){a(),$r(),t()}).catch(function(){a(),$r(),n()})})}var zu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ei,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;I.searchPseudoElements&&Ei(a)}}},Pi=!1,Du={mixout:function(){return{dom:{unwatch:function(){Jo(),Pi=!0}}}},hooks:function(){return{bootstrap:function(){wi(Mr("mutationObserverCallbacks",{}))},noAuto:function(){_u()},watch:function(n){var r=n.observeMutationsRoot;Pi?$r():wi(Mr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ci=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Uu={mixout:function(){return{parse:{transform:function(n){return Ci(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ci(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},pr={x:0,y:0,width:"100%",height:"100%"};function Ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Hu(e){return e.tag==="g"?e.children:[e]}var Bu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?er(a.split(" ").map(function(o){return o.trim()})):ya();return i.prefix||(i.prefix=et()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,k=Uc({transform:l,containerWidth:m,iconWidth:c}),F={tag:"rect",attributes:O(O({},pr),{},{fill:"white"})},N=d.children?{children:d.children.map(Ii)}:{},D={tag:"g",attributes:O({},k.inner),children:[Ii(O({tag:d.tag,attributes:O(O({},d.attributes),k.path)},N))]},w={tag:"g",attributes:O({},k.outer),children:[D]},P="mask-".concat(s||Zt()),E="clip-".concat(s||Zt()),j={tag:"mask",attributes:O(O({},pr),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,w]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Hu(v)},j]};return r.push(H,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(P,")")},pr)}),{children:r,attributes:a}}}},Yu={provides:function(t){var n=!1;Qe.matchMedia&&(n=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Wu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Ku=[Yc,Tu,Nu,Mu,Fu,zu,Du,Uu,Bu,Yu,Wu];iu(Ku,{mixoutsTo:ve});ve.noAuto;var Zo=ve.config,qu=ve.library;ve.dom;var Dn=ve.parse;ve.findIconDefinition;ve.toHtml;var Xu=ve.icon;ve.layer;var Vu=ve.text;ve.counter;function Si(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Si(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Si(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Un(e){return Un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Un(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ju(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Gu(e,t){if(e==null)return{};var n=Ju(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function zr(e){return Zu(e)||Qu(e)||ed(e)||td()}function Zu(e){if(Array.isArray(e))return Dr(e)}function Qu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ed(e,t){if(e){if(typeof e=="string")return Dr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dr(e,t)}}function Dr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function td(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var nd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qo={exports:{}};(function(e){(function(t){var n=function(w,P,E){if(!c(P)||m(P)||v(P)||k(P)||l(P))return P;var j,H=0,ue=0;if(d(P))for(j=[],ue=P.length;H<ue;H++)j.push(n(w,P[H],E));else{j={};for(var re in P)Object.prototype.hasOwnProperty.call(P,re)&&(j[w(re,E)]=n(w,P[re],E))}return j},r=function(w,P){P=P||{};var E=P.separator||"_",j=P.split||/(?=[A-Z])/;return w.split(j).join(E)},a=function(w){return F(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(P,E){return E?E.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var P=a(w);return P.substr(0,1).toUpperCase()+P.substr(1)},o=function(w,P){return r(w,P).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},d=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},v=function(w){return s.call(w)=="[object RegExp]"},k=function(w){return s.call(w)=="[object Boolean]"},F=function(w){return w=w-0,w===w},N=function(w,P){var E=P&&"process"in P?P.process:P;return typeof E!="function"?w:function(j,H){return E(j,w,H)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,P){return n(N(a,P),w)},decamelizeKeys:function(w,P){return n(N(o,P),w,P)},pascalizeKeys:function(w,P){return n(N(i,P),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(nd)})(Qo);var rd=Qo.exports,ad=["class","style"];function id(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=rd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function od(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ka(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ka(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=od(d);break;case"style":l.style=id(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Gu(n,ad);return Ao(e.tag,Ae(Ae(Ae({},t),{},{class:a.class,style:Ae(Ae({},a.style),o)},a.attrs),s),r)}var es=!1;try{es=!0}catch{}function sd(){if(!es&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ht(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?de({},e,t):{}}function ld(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},de(t,"fa-".concat(e.size),e.size!==null),de(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),de(t,"fa-pull-".concat(e.pull),e.pull!==null),de(t,"fa-swap-opacity",e.swapOpacity),de(t,"fa-bounce",e.bounce),de(t,"fa-shake",e.shake),de(t,"fa-beat",e.beat),de(t,"fa-fade",e.fade),de(t,"fa-beat-fade",e.beatFade),de(t,"fa-flash",e.flash),de(t,"fa-spin-pulse",e.spinPulse),de(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ti(e){if(e&&Un(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Dn.icon)return Dn.icon(e);if(e===null)return null;if(Un(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var fd=ia({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ye(function(){return Ti(t.icon)}),i=ye(function(){return Ht("classes",ld(t))}),o=ye(function(){return Ht("transform",typeof t.transform=="string"?Dn.transform(t.transform):t.transform)}),s=ye(function(){return Ht("mask",Ti(t.mask))}),l=ye(function(){return Xu(a.value,Ae(Ae(Ae(Ae({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});On(l,function(d){if(!d)return sd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ye(function(){return l.value?ka(l.value.abstract[0],{},r):null});return function(){return c.value}}});ia({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Zo.familyPrefix,i=ye(function(){return["".concat(a,"-layers")].concat(zr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Ao("div",{class:i.value},r.default?r.default():[])}}});ia({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Zo.familyPrefix,i=ye(function(){return Ht("classes",[].concat(zr(t.counter?["".concat(a,"-layers-counter")]:[]),zr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ye(function(){return Ht("transform",typeof t.transform=="string"?Dn.transform(t.transform):t.transform)}),s=ye(function(){var c=Vu(t.value.toString(),Ae(Ae({},o.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ye(function(){return ka(s.value,{},r)});return function(){return l.value}}});var cd={prefix:"fab",iconName:"java",icon:[384,512,[],"f4e4","M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"]},ud={prefix:"fab",iconName:"vuejs",icon:[448,512,[],"f41f","M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"]},dd={prefix:"fab",iconName:"behance",icon:[576,512,[],"f1b4","M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"]},md={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},pd={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},hd={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};qu.add(pd,hd,md,dd,ud,cd);Tf(pc).component("font-awesome-icon",fd).mount("#app");
