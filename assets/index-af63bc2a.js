function dp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function hp(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Uu={exports:{}},vo={},Bu={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),pp=Symbol.for("react.portal"),mp=Symbol.for("react.fragment"),gp=Symbol.for("react.strict_mode"),vp=Symbol.for("react.profiler"),wp=Symbol.for("react.provider"),yp=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),bp=Symbol.for("react.suspense"),Sp=Symbol.for("react.memo"),kp=Symbol.for("react.lazy"),nc=Symbol.iterator;function Cp(e){return e===null||typeof e!="object"?null:(e=nc&&e[nc]||e["@@iterator"],typeof e=="function"?e:null)}var Vu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qu=Object.assign,Yu={};function qn(e,t,n){this.props=e,this.context=t,this.refs=Yu,this.updater=n||Vu}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ku(){}Ku.prototype=qn.prototype;function Ya(e,t,n){this.props=e,this.context=t,this.refs=Yu,this.updater=n||Vu}var Ka=Ya.prototype=new Ku;Ka.constructor=Ya;Qu(Ka,qn.prototype);Ka.isPureReactComponent=!0;var rc=Array.isArray,Gu=Object.prototype.hasOwnProperty,Ga={current:null},Xu={key:!0,ref:!0,__self:!0,__source:!0};function qu(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Gu.call(t,r)&&!Xu.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Qr,type:e,key:o,ref:l,props:i,_owner:Ga.current}}function Pp(e,t){return{$$typeof:Qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function _p(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ic=/\/+/g;function Jo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_p(""+e.key):t.toString(36)}function yi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Qr:case pp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Jo(l,0):r,rc(i)?(n="",e!=null&&(n=e.replace(ic,"$&/")+"/"),yi(i,t,n,"",function(d){return d})):i!=null&&(Xa(i)&&(i=Pp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ic,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",rc(e))for(var s=0;s<e.length;s++){o=e[s];var c=r+Jo(o,s);l+=yi(o,t,n,c,i)}else if(c=Cp(e),typeof c=="function")for(e=c.call(e),s=0;!(o=e.next()).done;)o=o.value,c=r+Jo(o,s++),l+=yi(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ei(e,t,n){if(e==null)return e;var r=[],i=0;return yi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function zp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},xi={transition:null},Op={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:xi,ReactCurrentOwner:Ga};Q.Children={map:ei,forEach:function(e,t,n){ei(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ei(e,function(){t++}),t},toArray:function(e){return ei(e,function(t){return t})||[]},only:function(e){if(!Xa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=qn;Q.Fragment=mp;Q.Profiler=vp;Q.PureComponent=Ya;Q.StrictMode=gp;Q.Suspense=bp;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Op;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qu({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ga.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Gu.call(t,c)&&!Xu.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Qr,type:e.type,key:i,ref:o,props:r,_owner:l}};Q.createContext=function(e){return e={$$typeof:yp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wp,_context:e},e.Consumer=e};Q.createElement=qu;Q.createFactory=function(e){var t=qu.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:xp,render:e}};Q.isValidElement=Xa;Q.lazy=function(e){return{$$typeof:kp,_payload:{_status:-1,_result:e},_init:zp}};Q.memo=function(e,t){return{$$typeof:Sp,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=xi.transition;xi.transition={};try{e()}finally{xi.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return Re.current.useCallback(e,t)};Q.useContext=function(e){return Re.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Re.current.useEffect(e,t)};Q.useId=function(){return Re.current.useId()};Q.useImperativeHandle=function(e,t,n){return Re.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Re.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Re.current.useReducer(e,t,n)};Q.useRef=function(e){return Re.current.useRef(e)};Q.useState=function(e){return Re.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Re.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Re.current.useTransition()};Q.version="18.2.0";Bu.exports=Q;var V=Bu.exports;const Ct=fp(V),oc=dp({__proto__:null,default:Ct},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep=V,Tp=Symbol.for("react.element"),Fp=Symbol.for("react.fragment"),Mp=Object.prototype.hasOwnProperty,Lp=Ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rp={key:!0,ref:!0,__self:!0,__source:!0};function Zu(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Mp.call(t,r)&&!Rp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Tp,type:e,key:o,ref:l,props:i,_owner:Lp.current}}vo.Fragment=Fp;vo.jsx=Zu;vo.jsxs=Zu;Uu.exports=vo;var bt=Uu.exports,jl={},Ju={exports:{}},Ge={},ed={exports:{}},td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,I){var $=F.length;F.push(I);e:for(;0<$;){var W=$-1>>>1,Y=F[W];if(0<i(Y,I))F[W]=I,F[$]=Y,$=W;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var I=F[0],$=F.pop();if($!==I){F[0]=$;e:for(var W=0,Y=F.length,Ue=Y>>>1;W<Ue;){var le=2*(W+1)-1,Ft=F[le],Pe=le+1,Mt=F[Pe];if(0>i(Ft,$))Pe<Y&&0>i(Mt,Ft)?(F[W]=Mt,F[Pe]=$,W=Pe):(F[W]=Ft,F[le]=$,W=le);else if(Pe<Y&&0>i(Mt,$))F[W]=Mt,F[Pe]=$,W=Pe;else break e}}return I}function i(F,I){var $=F.sortIndex-I.sortIndex;return $!==0?$:F.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],d=[],g=1,h=null,v=3,S=!1,y=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(F){for(var I=n(d);I!==null;){if(I.callback===null)r(d);else if(I.startTime<=F)r(d),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(d)}}function b(F){if(w=!1,p(F),!y)if(n(c)!==null)y=!0,oe(k);else{var I=n(d);I!==null&&ee(b,I.startTime-F)}}function k(F,I){y=!1,w&&(w=!1,f(P),P=-1),S=!0;var $=v;try{for(p(I),h=n(c);h!==null&&(!(h.expirationTime>I)||F&&!N());){var W=h.callback;if(typeof W=="function"){h.callback=null,v=h.priorityLevel;var Y=W(h.expirationTime<=I);I=e.unstable_now(),typeof Y=="function"?h.callback=Y:h===n(c)&&r(c),p(I)}else r(c);h=n(c)}if(h!==null)var Ue=!0;else{var le=n(d);le!==null&&ee(b,le.startTime-I),Ue=!1}return Ue}finally{h=null,v=$,S=!1}}var C=!1,z=null,P=-1,E=5,O=-1;function N(){return!(e.unstable_now()-O<E)}function M(){if(z!==null){var F=e.unstable_now();O=F;var I=!0;try{I=z(!0,F)}finally{I?j():(C=!1,z=null)}}else C=!1}var j;if(typeof u=="function")j=function(){u(M)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,A=D.port2;D.port1.onmessage=M,j=function(){A.postMessage(null)}}else j=function(){_(M,0)};function oe(F){z=F,C||(C=!0,j())}function ee(F,I){P=_(function(){F(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){y||S||(y=!0,oe(k))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(F){switch(v){case 1:case 2:case 3:var I=3;break;default:I=v}var $=v;v=I;try{return F()}finally{v=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,I){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var $=v;v=F;try{return I()}finally{v=$}},e.unstable_scheduleCallback=function(F,I,$){var W=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?W+$:W):$=W,F){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=$+Y,F={id:g++,callback:I,priorityLevel:F,startTime:$,expirationTime:Y,sortIndex:-1},$>W?(F.sortIndex=$,t(d,F),n(c)===null&&F===n(d)&&(w?(f(P),P=-1):w=!0,ee(b,$-W))):(F.sortIndex=Y,t(c,F),y||S||(y=!0,oe(k))),F},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(F){var I=v;return function(){var $=v;v=I;try{return F.apply(this,arguments)}finally{v=$}}}})(td);ed.exports=td;var Np=ed.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd=V,Ke=Np;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rd=new Set,Cr={};function mn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Cr[e]=t,e=0;e<t.length;e++)rd.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Il=Object.prototype.hasOwnProperty,jp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc={},ac={};function Ip(e){return Il.call(ac,e)?!0:Il.call(lc,e)?!1:jp.test(e)?ac[e]=!0:(lc[e]=!0,!1)}function $p(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ap(e,t,n,r){if(t===null||typeof t>"u"||$p(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var qa=/[\-:]([a-z])/g;function Za(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qa,Za);Ce[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qa,Za);Ce[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qa,Za);Ce[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ja(e,t,n,r){var i=Ce.hasOwnProperty(t)?Ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ap(t,n,i,r)&&(n=null),r||i===null?Ip(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tt=nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ti=Symbol.for("react.element"),bn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),es=Symbol.for("react.strict_mode"),$l=Symbol.for("react.profiler"),id=Symbol.for("react.provider"),od=Symbol.for("react.context"),ts=Symbol.for("react.forward_ref"),Al=Symbol.for("react.suspense"),Dl=Symbol.for("react.suspense_list"),ns=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),ld=Symbol.for("react.offscreen"),sc=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=sc&&e[sc]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,el;function ur(e){if(el===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);el=t&&t[1]||""}return`
`+el+e}var tl=!1;function nl(e,t){if(!e||tl)return"";tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function Dp(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=nl(e.type,!1),e;case 11:return e=nl(e.type.render,!1),e;case 1:return e=nl(e.type,!0),e;default:return""}}function Hl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case bn:return"Portal";case $l:return"Profiler";case es:return"StrictMode";case Al:return"Suspense";case Dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case od:return(e.displayName||"Context")+".Consumer";case id:return(e._context.displayName||"Context")+".Provider";case ts:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ns:return t=e.displayName||null,t!==null?t:Hl(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return Hl(e(t))}catch{}}return null}function Hp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hl(t);case 8:return t===es?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ad(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wp(e){var t=ad(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ni(e){e._valueTracker||(e._valueTracker=Wp(e))}function sd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ad(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wl(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cd(e,t){t=t.checked,t!=null&&Ja(e,"checked",t,!1)}function Ul(e,t){cd(e,t);var n=Xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bl(e,t.type,Xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bl(e,t,n){(t!=="number"||Ri(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var dr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(dr(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xt(n)}}function ud(e,t){var n=Xt(t.value),r=Xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ql(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ri,fd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ri=ri||document.createElement("div"),ri.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ri.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Up=["Webkit","ms","Moz","O"];Object.keys(pr).forEach(function(e){Up.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pr[t]=pr[e]})});function hd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||pr.hasOwnProperty(e)&&pr[e]?(""+t).trim():t+"px"}function pd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Bp=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yl(e,t){if(t){if(Bp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gl=null;function rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xl=null,Rn=null,Nn=null;function hc(e){if(e=Gr(e)){if(typeof Xl!="function")throw Error(T(280));var t=e.stateNode;t&&(t=So(t),Xl(e.stateNode,e.type,t))}}function md(e){Rn?Nn?Nn.push(e):Nn=[e]:Rn=e}function gd(){if(Rn){var e=Rn,t=Nn;if(Nn=Rn=null,hc(e),t)for(e=0;e<t.length;e++)hc(t[e])}}function vd(e,t){return e(t)}function wd(){}var rl=!1;function yd(e,t,n){if(rl)return e(t,n);rl=!0;try{return vd(e,t,n)}finally{rl=!1,(Rn!==null||Nn!==null)&&(wd(),gd())}}function _r(e,t){var n=e.stateNode;if(n===null)return null;var r=So(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var ql=!1;if(_t)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){ql=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{ql=!1}function Vp(e,t,n,r,i,o,l,s,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var mr=!1,Ni=null,ji=!1,Zl=null,Qp={onError:function(e){mr=!0,Ni=e}};function Yp(e,t,n,r,i,o,l,s,c){mr=!1,Ni=null,Vp.apply(Qp,arguments)}function Kp(e,t,n,r,i,o,l,s,c){if(Yp.apply(this,arguments),mr){if(mr){var d=Ni;mr=!1,Ni=null}else throw Error(T(198));ji||(ji=!0,Zl=d)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pc(e){if(gn(e)!==e)throw Error(T(188))}function Gp(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return pc(i),e;if(o===r)return pc(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function bd(e){return e=Gp(e),e!==null?Sd(e):null}function Sd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sd(e);if(t!==null)return t;e=e.sibling}return null}var kd=Ke.unstable_scheduleCallback,mc=Ke.unstable_cancelCallback,Xp=Ke.unstable_shouldYield,qp=Ke.unstable_requestPaint,he=Ke.unstable_now,Zp=Ke.unstable_getCurrentPriorityLevel,is=Ke.unstable_ImmediatePriority,Cd=Ke.unstable_UserBlockingPriority,Ii=Ke.unstable_NormalPriority,Jp=Ke.unstable_LowPriority,Pd=Ke.unstable_IdlePriority,wo=null,gt=null;function em(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(wo,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:rm,tm=Math.log,nm=Math.LN2;function rm(e){return e>>>=0,e===0?32:31-(tm(e)/nm|0)|0}var ii=64,oi=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $i(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=fr(s):(o&=l,o!==0&&(r=fr(o)))}else l=n&~i,l!==0?r=fr(l):o!==0&&(r=fr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),i=1<<n,r|=e[n],t&=~i;return r}function im(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function om(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-st(o),s=1<<l,c=i[l];c===-1?(!(s&n)||s&r)&&(i[l]=im(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _d(){var e=ii;return ii<<=1,!(ii&4194240)&&(ii=64),e}function il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function lm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-st(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function os(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function zd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Od,ls,Ed,Td,Fd,ea=!1,li=[],Ht=null,Wt=null,Ut=null,zr=new Map,Or=new Map,It=[],am="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gc(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(t.pointerId)}}function rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Gr(t),t!==null&&ls(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sm(e,t,n,r,i){switch(t){case"focusin":return Ht=rr(Ht,e,t,n,r,i),!0;case"dragenter":return Wt=rr(Wt,e,t,n,r,i),!0;case"mouseover":return Ut=rr(Ut,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zr.set(o,rr(zr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Or.set(o,rr(Or.get(o)||null,e,t,n,r,i)),!0}return!1}function Md(e){var t=rn(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=xd(n),t!==null){e.blockedOn=t,Fd(e.priority,function(){Ed(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ta(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gl=r,n.target.dispatchEvent(r),Gl=null}else return t=Gr(n),t!==null&&ls(t),e.blockedOn=n,!1;t.shift()}return!0}function vc(e,t,n){bi(e)&&n.delete(t)}function cm(){ea=!1,Ht!==null&&bi(Ht)&&(Ht=null),Wt!==null&&bi(Wt)&&(Wt=null),Ut!==null&&bi(Ut)&&(Ut=null),zr.forEach(vc),Or.forEach(vc)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,ea||(ea=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,cm)))}function Er(e){function t(i){return ir(i,e)}if(0<li.length){ir(li[0],e);for(var n=1;n<li.length;n++){var r=li[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&ir(Ht,e),Wt!==null&&ir(Wt,e),Ut!==null&&ir(Ut,e),zr.forEach(t),Or.forEach(t),n=0;n<It.length;n++)r=It[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)Md(n),n.blockedOn===null&&It.shift()}var jn=Tt.ReactCurrentBatchConfig,Ai=!0;function um(e,t,n,r){var i=q,o=jn.transition;jn.transition=null;try{q=1,as(e,t,n,r)}finally{q=i,jn.transition=o}}function dm(e,t,n,r){var i=q,o=jn.transition;jn.transition=null;try{q=4,as(e,t,n,r)}finally{q=i,jn.transition=o}}function as(e,t,n,r){if(Ai){var i=ta(e,t,n,r);if(i===null)pl(e,t,r,Di,n),gc(e,r);else if(sm(i,e,t,n,r))r.stopPropagation();else if(gc(e,r),t&4&&-1<am.indexOf(e)){for(;i!==null;){var o=Gr(i);if(o!==null&&Od(o),o=ta(e,t,n,r),o===null&&pl(e,t,r,Di,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else pl(e,t,r,null,n)}}var Di=null;function ta(e,t,n,r){if(Di=null,e=rs(r),e=rn(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Di=e,null}function Ld(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zp()){case is:return 1;case Cd:return 4;case Ii:case Jp:return 16;case Pd:return 536870912;default:return 16}default:return 16}}var At=null,ss=null,Si=null;function Rd(){if(Si)return Si;var e,t=ss,n=t.length,r,i="value"in At?At.value:At.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Si=i.slice(e,1<r?1-r:void 0)}function ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ai(){return!0}function wc(){return!1}function Xe(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ai:wc,this.isPropagationStopped=wc,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cs=Xe(Zn),Kr=ue({},Zn,{view:0,detail:0}),fm=Xe(Kr),ol,ll,or,yo=ue({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(ol=e.screenX-or.screenX,ll=e.screenY-or.screenY):ll=ol=0,or=e),ol)},movementY:function(e){return"movementY"in e?e.movementY:ll}}),yc=Xe(yo),hm=ue({},yo,{dataTransfer:0}),pm=Xe(hm),mm=ue({},Kr,{relatedTarget:0}),al=Xe(mm),gm=ue({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),vm=Xe(gm),wm=ue({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ym=Xe(wm),xm=ue({},Zn,{data:0}),xc=Xe(xm),bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},km={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=km[e])?!!t[e]:!1}function us(){return Cm}var Pm=ue({},Kr,{key:function(e){if(e.key){var t=bm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(e){return e.type==="keypress"?ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_m=Xe(Pm),zm=ue({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bc=Xe(zm),Om=ue({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),Em=Xe(Om),Tm=ue({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fm=Xe(Tm),Mm=ue({},yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lm=Xe(Mm),Rm=[9,13,27,32],ds=_t&&"CompositionEvent"in window,gr=null;_t&&"documentMode"in document&&(gr=document.documentMode);var Nm=_t&&"TextEvent"in window&&!gr,Nd=_t&&(!ds||gr&&8<gr&&11>=gr),Sc=String.fromCharCode(32),kc=!1;function jd(e,t){switch(e){case"keyup":return Rm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function jm(e,t){switch(e){case"compositionend":return Id(t);case"keypress":return t.which!==32?null:(kc=!0,Sc);case"textInput":return e=t.data,e===Sc&&kc?null:e;default:return null}}function Im(e,t){if(kn)return e==="compositionend"||!ds&&jd(e,t)?(e=Rd(),Si=ss=At=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nd&&t.locale!=="ko"?null:t.data;default:return null}}var $m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$m[e.type]:t==="textarea"}function $d(e,t,n,r){md(r),t=Hi(t,"onChange"),0<t.length&&(n=new cs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vr=null,Tr=null;function Am(e){Gd(e,0)}function xo(e){var t=_n(e);if(sd(t))return e}function Dm(e,t){if(e==="change")return t}var Ad=!1;if(_t){var sl;if(_t){var cl="oninput"in document;if(!cl){var Pc=document.createElement("div");Pc.setAttribute("oninput","return;"),cl=typeof Pc.oninput=="function"}sl=cl}else sl=!1;Ad=sl&&(!document.documentMode||9<document.documentMode)}function _c(){vr&&(vr.detachEvent("onpropertychange",Dd),Tr=vr=null)}function Dd(e){if(e.propertyName==="value"&&xo(Tr)){var t=[];$d(t,Tr,e,rs(e)),yd(Am,t)}}function Hm(e,t,n){e==="focusin"?(_c(),vr=t,Tr=n,vr.attachEvent("onpropertychange",Dd)):e==="focusout"&&_c()}function Wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(Tr)}function Um(e,t){if(e==="click")return xo(t)}function Bm(e,t){if(e==="input"||e==="change")return xo(t)}function Vm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Vm;function Fr(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Il.call(t,i)||!ut(e[i],t[i]))return!1}return!0}function zc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oc(e,t){var n=zc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zc(n)}}function Hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wd(){for(var e=window,t=Ri();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ri(e.document)}return t}function fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qm(e){var t=Wd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hd(n.ownerDocument.documentElement,n)){if(r!==null&&fs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Oc(n,o);var l=Oc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ym=_t&&"documentMode"in document&&11>=document.documentMode,Cn=null,na=null,wr=null,ra=!1;function Ec(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ra||Cn==null||Cn!==Ri(r)||(r=Cn,"selectionStart"in r&&fs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&Fr(wr,r)||(wr=r,r=Hi(na,"onSelect"),0<r.length&&(t=new cs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionend:si("Transition","TransitionEnd")},ul={},Ud={};_t&&(Ud=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function bo(e){if(ul[e])return ul[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ud)return ul[e]=t[n];return e}var Bd=bo("animationend"),Vd=bo("animationiteration"),Qd=bo("animationstart"),Yd=bo("transitionend"),Kd=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zt(e,t){Kd.set(e,t),mn(t,[e])}for(var dl=0;dl<Tc.length;dl++){var fl=Tc[dl],Km=fl.toLowerCase(),Gm=fl[0].toUpperCase()+fl.slice(1);Zt(Km,"on"+Gm)}Zt(Bd,"onAnimationEnd");Zt(Vd,"onAnimationIteration");Zt(Qd,"onAnimationStart");Zt("dblclick","onDoubleClick");Zt("focusin","onFocus");Zt("focusout","onBlur");Zt(Yd,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xm=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function Fc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kp(r,t,void 0,e),e.currentTarget=null}function Gd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==o&&i.isPropagationStopped())break e;Fc(i,s,d),o=c}else for(l=0;l<r.length;l++){if(s=r[l],c=s.instance,d=s.currentTarget,s=s.listener,c!==o&&i.isPropagationStopped())break e;Fc(i,s,d),o=c}}}if(ji)throw e=Zl,ji=!1,Zl=null,e}function te(e,t){var n=t[sa];n===void 0&&(n=t[sa]=new Set);var r=e+"__bubble";n.has(r)||(Xd(t,e,2,!1),n.add(r))}function hl(e,t,n){var r=0;t&&(r|=4),Xd(n,e,r,t)}var ci="_reactListening"+Math.random().toString(36).slice(2);function Mr(e){if(!e[ci]){e[ci]=!0,rd.forEach(function(n){n!=="selectionchange"&&(Xm.has(n)||hl(n,!1,e),hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ci]||(t[ci]=!0,hl("selectionchange",!1,t))}}function Xd(e,t,n,r){switch(Ld(t)){case 1:var i=um;break;case 4:i=dm;break;default:i=as}n=i.bind(null,t,n,e),i=void 0,!ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function pl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;s!==null;){if(l=rn(s),l===null)return;if(c=l.tag,c===5||c===6){r=o=l;continue e}s=s.parentNode}}r=r.return}yd(function(){var d=o,g=rs(n),h=[];e:{var v=Kd.get(e);if(v!==void 0){var S=cs,y=e;switch(e){case"keypress":if(ki(n)===0)break e;case"keydown":case"keyup":S=_m;break;case"focusin":y="focus",S=al;break;case"focusout":y="blur",S=al;break;case"beforeblur":case"afterblur":S=al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Em;break;case Bd:case Vd:case Qd:S=vm;break;case Yd:S=Fm;break;case"scroll":S=fm;break;case"wheel":S=Lm;break;case"copy":case"cut":case"paste":S=ym;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=bc}var w=(t&4)!==0,_=!w&&e==="scroll",f=w?v!==null?v+"Capture":null:v;w=[];for(var u=d,p;u!==null;){p=u;var b=p.stateNode;if(p.tag===5&&b!==null&&(p=b,f!==null&&(b=_r(u,f),b!=null&&w.push(Lr(u,b,p)))),_)break;u=u.return}0<w.length&&(v=new S(v,y,null,n,g),h.push({event:v,listeners:w}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",v&&n!==Gl&&(y=n.relatedTarget||n.fromElement)&&(rn(y)||y[zt]))break e;if((S||v)&&(v=g.window===g?g:(v=g.ownerDocument)?v.defaultView||v.parentWindow:window,S?(y=n.relatedTarget||n.toElement,S=d,y=y?rn(y):null,y!==null&&(_=gn(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(S=null,y=d),S!==y)){if(w=yc,b="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=bc,b="onPointerLeave",f="onPointerEnter",u="pointer"),_=S==null?v:_n(S),p=y==null?v:_n(y),v=new w(b,u+"leave",S,n,g),v.target=_,v.relatedTarget=p,b=null,rn(g)===d&&(w=new w(f,u+"enter",y,n,g),w.target=p,w.relatedTarget=_,b=w),_=b,S&&y)t:{for(w=S,f=y,u=0,p=w;p;p=xn(p))u++;for(p=0,b=f;b;b=xn(b))p++;for(;0<u-p;)w=xn(w),u--;for(;0<p-u;)f=xn(f),p--;for(;u--;){if(w===f||f!==null&&w===f.alternate)break t;w=xn(w),f=xn(f)}w=null}else w=null;S!==null&&Mc(h,v,S,w,!1),y!==null&&_!==null&&Mc(h,_,y,w,!0)}}e:{if(v=d?_n(d):window,S=v.nodeName&&v.nodeName.toLowerCase(),S==="select"||S==="input"&&v.type==="file")var k=Dm;else if(Cc(v))if(Ad)k=Bm;else{k=Wm;var C=Hm}else(S=v.nodeName)&&S.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(k=Um);if(k&&(k=k(e,d))){$d(h,k,n,g);break e}C&&C(e,v,d),e==="focusout"&&(C=v._wrapperState)&&C.controlled&&v.type==="number"&&Bl(v,"number",v.value)}switch(C=d?_n(d):window,e){case"focusin":(Cc(C)||C.contentEditable==="true")&&(Cn=C,na=d,wr=null);break;case"focusout":wr=na=Cn=null;break;case"mousedown":ra=!0;break;case"contextmenu":case"mouseup":case"dragend":ra=!1,Ec(h,n,g);break;case"selectionchange":if(Ym)break;case"keydown":case"keyup":Ec(h,n,g)}var z;if(ds)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else kn?jd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Nd&&n.locale!=="ko"&&(kn||P!=="onCompositionStart"?P==="onCompositionEnd"&&kn&&(z=Rd()):(At=g,ss="value"in At?At.value:At.textContent,kn=!0)),C=Hi(d,P),0<C.length&&(P=new xc(P,e,null,n,g),h.push({event:P,listeners:C}),z?P.data=z:(z=Id(n),z!==null&&(P.data=z)))),(z=Nm?jm(e,n):Im(e,n))&&(d=Hi(d,"onBeforeInput"),0<d.length&&(g=new xc("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:d}),g.data=z))}Gd(h,t)})}function Lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=_r(e,n),o!=null&&r.unshift(Lr(e,o,i)),o=_r(e,t),o!=null&&r.push(Lr(e,o,i))),e=e.return}return r}function xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,c=s.alternate,d=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&d!==null&&(s=d,i?(c=_r(n,o),c!=null&&l.unshift(Lr(n,c,s))):i||(c=_r(n,o),c!=null&&l.push(Lr(n,c,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var qm=/\r\n?/g,Zm=/\u0000|\uFFFD/g;function Lc(e){return(typeof e=="string"?e:""+e).replace(qm,`
`).replace(Zm,"")}function ui(e,t,n){if(t=Lc(t),Lc(e)!==t&&n)throw Error(T(425))}function Wi(){}var ia=null,oa=null;function la(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var aa=typeof setTimeout=="function"?setTimeout:void 0,Jm=typeof clearTimeout=="function"?clearTimeout:void 0,Rc=typeof Promise=="function"?Promise:void 0,eg=typeof queueMicrotask=="function"?queueMicrotask:typeof Rc<"u"?function(e){return Rc.resolve(null).then(e).catch(tg)}:aa;function tg(e){setTimeout(function(){throw e})}function ml(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Er(t)}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Jn,Rr="__reactProps$"+Jn,zt="__reactContainer$"+Jn,sa="__reactEvents$"+Jn,ng="__reactListeners$"+Jn,rg="__reactHandles$"+Jn;function rn(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nc(e);e!==null;){if(n=e[mt])return n;e=Nc(e)}return t}e=n,n=e.parentNode}return null}function Gr(e){return e=e[mt]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function So(e){return e[Rr]||null}var ca=[],zn=-1;function Jt(e){return{current:e}}function ne(e){0>zn||(e.current=ca[zn],ca[zn]=null,zn--)}function J(e,t){zn++,ca[zn]=e.current,e.current=t}var qt={},Te=Jt(qt),Ae=Jt(!1),un=qt;function Wn(e,t){var n=e.type.contextTypes;if(!n)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function De(e){return e=e.childContextTypes,e!=null}function Ui(){ne(Ae),ne(Te)}function jc(e,t,n){if(Te.current!==qt)throw Error(T(168));J(Te,t),J(Ae,n)}function qd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,Hp(e)||"Unknown",i));return ue({},n,r)}function Bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,un=Te.current,J(Te,e),J(Ae,Ae.current),!0}function Ic(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=qd(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,ne(Ae),ne(Te),J(Te,e)):ne(Ae),J(Ae,n)}var xt=null,ko=!1,gl=!1;function Zd(e){xt===null?xt=[e]:xt.push(e)}function ig(e){ko=!0,Zd(e)}function en(){if(!gl&&xt!==null){gl=!0;var e=0,t=q;try{var n=xt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xt=null,ko=!1}catch(i){throw xt!==null&&(xt=xt.slice(e+1)),kd(is,en),i}finally{q=t,gl=!1}}return null}var On=[],En=0,Vi=null,Qi=0,Ze=[],Je=0,dn=null,St=1,kt="";function tn(e,t){On[En++]=Qi,On[En++]=Vi,Vi=e,Qi=t}function Jd(e,t,n){Ze[Je++]=St,Ze[Je++]=kt,Ze[Je++]=dn,dn=e;var r=St;e=kt;var i=32-st(r)-1;r&=~(1<<i),n+=1;var o=32-st(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,St=1<<32-st(t)+i|n<<i|r,kt=o+e}else St=1<<o|n<<i|r,kt=e}function hs(e){e.return!==null&&(tn(e,1),Jd(e,1,0))}function ps(e){for(;e===Vi;)Vi=On[--En],On[En]=null,Qi=On[--En],On[En]=null;for(;e===dn;)dn=Ze[--Je],Ze[Je]=null,kt=Ze[--Je],Ze[Je]=null,St=Ze[--Je],Ze[Je]=null}var Qe=null,Ve=null,ie=!1,at=null;function ef(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $c(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ve=Bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:St,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ve=null,!0):!1;default:return!1}}function ua(e){return(e.mode&1)!==0&&(e.flags&128)===0}function da(e){if(ie){var t=Ve;if(t){var n=t;if(!$c(e,t)){if(ua(e))throw Error(T(418));t=Bt(n.nextSibling);var r=Qe;t&&$c(e,t)?ef(r,n):(e.flags=e.flags&-4097|2,ie=!1,Qe=e)}}else{if(ua(e))throw Error(T(418));e.flags=e.flags&-4097|2,ie=!1,Qe=e}}}function Ac(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function di(e){if(e!==Qe)return!1;if(!ie)return Ac(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!la(e.type,e.memoizedProps)),t&&(t=Ve)){if(ua(e))throw tf(),Error(T(418));for(;t;)ef(e,t),t=Bt(t.nextSibling)}if(Ac(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=Qe?Bt(e.stateNode.nextSibling):null;return!0}function tf(){for(var e=Ve;e;)e=Bt(e.nextSibling)}function Un(){Ve=Qe=null,ie=!1}function ms(e){at===null?at=[e]:at.push(e)}var og=Tt.ReactCurrentBatchConfig;function ot(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Yi=Jt(null),Ki=null,Tn=null,gs=null;function vs(){gs=Tn=Ki=null}function ws(e){var t=Yi.current;ne(Yi),e._currentValue=t}function fa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function In(e,t){Ki=e,gs=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(gs!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(Ki===null)throw Error(T(308));Tn=e,Ki.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var on=null;function ys(e){on===null?on=[e]:on.push(e)}function nf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ys(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nt=!1;function xs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ot(e,n)}return i=r.interleaved,i===null?(t.next=t,ys(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ot(e,n)}function Ci(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,os(e,n)}}function Dc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gi(e,t,n,r){var i=e.updateQueue;Nt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,d=c.next;c.next=null,l===null?o=d:l.next=d,l=c;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==l&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;l=0,g=d=c=null,s=o;do{var v=s.lane,S=s.eventTime;if((r&v)===v){g!==null&&(g=g.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(v=t,S=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(S,h,v);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,v=typeof y=="function"?y.call(S,h,v):y,v==null)break e;h=ue({},h,v);break e;case 2:Nt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[s]:v.push(s))}else S={eventTime:S,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=S,c=h):g=g.next=S,l|=v;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;v=s,s=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(g===null&&(c=h),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);hn|=l,e.lanes=l,e.memoizedState=h}}function Hc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var of=new nd.Component().refs;function ha(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Co={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),i=Yt(e),o=Pt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Vt(e,o,i),t!==null&&(ct(t,e,i,r),Ci(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),i=Yt(e),o=Pt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Vt(e,o,i),t!==null&&(ct(t,e,i,r),Ci(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=Yt(e),i=Pt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Vt(e,i,r),t!==null&&(ct(t,e,r,n),Ci(t,e,r))}};function Wc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(i,o):!0}function lf(e,t,n){var r=!1,i=qt,o=t.contextType;return typeof o=="object"&&o!==null?o=nt(o):(i=De(t)?un:Te.current,r=t.contextTypes,o=(r=r!=null)?Wn(e,i):qt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Uc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function pa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=of,xs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=nt(o):(o=De(t)?un:Te.current,i.context=Wn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ha(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Co.enqueueReplaceState(i,i.state,null),Gi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===of&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function fi(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bc(e){var t=e._init;return t(e._payload)}function af(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function i(f,u){return f=Kt(f,u),f.index=0,f.sibling=null,f}function o(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,p,b){return u===null||u.tag!==6?(u=kl(p,f.mode,b),u.return=f,u):(u=i(u,p),u.return=f,u)}function c(f,u,p,b){var k=p.type;return k===Sn?g(f,u,p.props.children,b,p.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Rt&&Bc(k)===u.type)?(b=i(u,p.props),b.ref=lr(f,u,p),b.return=f,b):(b=Ti(p.type,p.key,p.props,null,f.mode,b),b.ref=lr(f,u,p),b.return=f,b)}function d(f,u,p,b){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Cl(p,f.mode,b),u.return=f,u):(u=i(u,p.children||[]),u.return=f,u)}function g(f,u,p,b,k){return u===null||u.tag!==7?(u=sn(p,f.mode,b,k),u.return=f,u):(u=i(u,p),u.return=f,u)}function h(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=kl(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ti:return p=Ti(u.type,u.key,u.props,null,f.mode,p),p.ref=lr(f,null,u),p.return=f,p;case bn:return u=Cl(u,f.mode,p),u.return=f,u;case Rt:var b=u._init;return h(f,b(u._payload),p)}if(dr(u)||tr(u))return u=sn(u,f.mode,p,null),u.return=f,u;fi(f,u)}return null}function v(f,u,p,b){var k=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:s(f,u,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ti:return p.key===k?c(f,u,p,b):null;case bn:return p.key===k?d(f,u,p,b):null;case Rt:return k=p._init,v(f,u,k(p._payload),b)}if(dr(p)||tr(p))return k!==null?null:g(f,u,p,b,null);fi(f,p)}return null}function S(f,u,p,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(p)||null,s(u,f,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ti:return f=f.get(b.key===null?p:b.key)||null,c(u,f,b,k);case bn:return f=f.get(b.key===null?p:b.key)||null,d(u,f,b,k);case Rt:var C=b._init;return S(f,u,p,C(b._payload),k)}if(dr(b)||tr(b))return f=f.get(p)||null,g(u,f,b,k,null);fi(u,b)}return null}function y(f,u,p,b){for(var k=null,C=null,z=u,P=u=0,E=null;z!==null&&P<p.length;P++){z.index>P?(E=z,z=null):E=z.sibling;var O=v(f,z,p[P],b);if(O===null){z===null&&(z=E);break}e&&z&&O.alternate===null&&t(f,z),u=o(O,u,P),C===null?k=O:C.sibling=O,C=O,z=E}if(P===p.length)return n(f,z),ie&&tn(f,P),k;if(z===null){for(;P<p.length;P++)z=h(f,p[P],b),z!==null&&(u=o(z,u,P),C===null?k=z:C.sibling=z,C=z);return ie&&tn(f,P),k}for(z=r(f,z);P<p.length;P++)E=S(z,f,P,p[P],b),E!==null&&(e&&E.alternate!==null&&z.delete(E.key===null?P:E.key),u=o(E,u,P),C===null?k=E:C.sibling=E,C=E);return e&&z.forEach(function(N){return t(f,N)}),ie&&tn(f,P),k}function w(f,u,p,b){var k=tr(p);if(typeof k!="function")throw Error(T(150));if(p=k.call(p),p==null)throw Error(T(151));for(var C=k=null,z=u,P=u=0,E=null,O=p.next();z!==null&&!O.done;P++,O=p.next()){z.index>P?(E=z,z=null):E=z.sibling;var N=v(f,z,O.value,b);if(N===null){z===null&&(z=E);break}e&&z&&N.alternate===null&&t(f,z),u=o(N,u,P),C===null?k=N:C.sibling=N,C=N,z=E}if(O.done)return n(f,z),ie&&tn(f,P),k;if(z===null){for(;!O.done;P++,O=p.next())O=h(f,O.value,b),O!==null&&(u=o(O,u,P),C===null?k=O:C.sibling=O,C=O);return ie&&tn(f,P),k}for(z=r(f,z);!O.done;P++,O=p.next())O=S(z,f,P,O.value,b),O!==null&&(e&&O.alternate!==null&&z.delete(O.key===null?P:O.key),u=o(O,u,P),C===null?k=O:C.sibling=O,C=O);return e&&z.forEach(function(M){return t(f,M)}),ie&&tn(f,P),k}function _(f,u,p,b){if(typeof p=="object"&&p!==null&&p.type===Sn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ti:e:{for(var k=p.key,C=u;C!==null;){if(C.key===k){if(k=p.type,k===Sn){if(C.tag===7){n(f,C.sibling),u=i(C,p.props.children),u.return=f,f=u;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Rt&&Bc(k)===C.type){n(f,C.sibling),u=i(C,p.props),u.ref=lr(f,C,p),u.return=f,f=u;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===Sn?(u=sn(p.props.children,f.mode,b,p.key),u.return=f,f=u):(b=Ti(p.type,p.key,p.props,null,f.mode,b),b.ref=lr(f,u,p),b.return=f,f=b)}return l(f);case bn:e:{for(C=p.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=i(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Cl(p,f.mode,b),u.return=f,f=u}return l(f);case Rt:return C=p._init,_(f,u,C(p._payload),b)}if(dr(p))return y(f,u,p,b);if(tr(p))return w(f,u,p,b);fi(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=i(u,p),u.return=f,f=u):(n(f,u),u=kl(p,f.mode,b),u.return=f,f=u),l(f)):n(f,u)}return _}var Bn=af(!0),sf=af(!1),Xr={},vt=Jt(Xr),Nr=Jt(Xr),jr=Jt(Xr);function ln(e){if(e===Xr)throw Error(T(174));return e}function bs(e,t){switch(J(jr,t),J(Nr,e),J(vt,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ql(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ql(t,e)}ne(vt),J(vt,t)}function Vn(){ne(vt),ne(Nr),ne(jr)}function cf(e){ln(jr.current);var t=ln(vt.current),n=Ql(t,e.type);t!==n&&(J(Nr,e),J(vt,n))}function Ss(e){Nr.current===e&&(ne(vt),ne(Nr))}var se=Jt(0);function Xi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function ks(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var Pi=Tt.ReactCurrentDispatcher,wl=Tt.ReactCurrentBatchConfig,fn=0,ce=null,ge=null,we=null,qi=!1,yr=!1,Ir=0,lg=0;function _e(){throw Error(T(321))}function Cs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function Ps(e,t,n,r,i,o){if(fn=o,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pi.current=e===null||e.memoizedState===null?ug:dg,e=n(r,i),yr){o=0;do{if(yr=!1,Ir=0,25<=o)throw Error(T(301));o+=1,we=ge=null,t.updateQueue=null,Pi.current=fg,e=n(r,i)}while(yr)}if(Pi.current=Zi,t=ge!==null&&ge.next!==null,fn=0,we=ge=ce=null,qi=!1,t)throw Error(T(300));return e}function _s(){var e=Ir!==0;return Ir=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ce.memoizedState=we=e:we=we.next=e,we}function rt(){if(ge===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=we===null?ce.memoizedState:we.next;if(t!==null)we=t,ge=e;else{if(e===null)throw Error(T(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},we===null?ce.memoizedState=we=e:we=we.next=e}return we}function $r(e,t){return typeof t=="function"?t(e):t}function yl(e){var t=rt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=ge,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,c=null,d=o;do{var g=d.lane;if((fn&g)===g)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=h,l=r):c=c.next=h,ce.lanes|=g,hn|=g}d=d.next}while(d!==null&&d!==o);c===null?l=r:c.next=s,ut(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ce.lanes|=o,hn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xl(e){var t=rt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);ut(o,t.memoizedState)||($e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function uf(){}function df(e,t){var n=ce,r=rt(),i=t(),o=!ut(r.memoizedState,i);if(o&&(r.memoizedState=i,$e=!0),r=r.queue,zs(pf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,Ar(9,hf.bind(null,n,r,i,t),void 0,null),ye===null)throw Error(T(349));fn&30||ff(n,t,i)}return i}function ff(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hf(e,t,n,r){t.value=n,t.getSnapshot=r,mf(t)&&gf(e)}function pf(e,t,n){return n(function(){mf(t)&&gf(e)})}function mf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function gf(e){var t=Ot(e,1);t!==null&&ct(t,e,1,-1)}function Vc(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=cg.bind(null,ce,e),[t.memoizedState,e]}function Ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vf(){return rt().memoizedState}function _i(e,t,n,r){var i=ft();ce.flags|=e,i.memoizedState=Ar(1|t,n,void 0,r===void 0?null:r)}function Po(e,t,n,r){var i=rt();r=r===void 0?null:r;var o=void 0;if(ge!==null){var l=ge.memoizedState;if(o=l.destroy,r!==null&&Cs(r,l.deps)){i.memoizedState=Ar(t,n,o,r);return}}ce.flags|=e,i.memoizedState=Ar(1|t,n,o,r)}function Qc(e,t){return _i(8390656,8,e,t)}function zs(e,t){return Po(2048,8,e,t)}function wf(e,t){return Po(4,2,e,t)}function yf(e,t){return Po(4,4,e,t)}function xf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bf(e,t,n){return n=n!=null?n.concat([e]):null,Po(4,4,xf.bind(null,t,e),n)}function Os(){}function Sf(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kf(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cf(e,t,n){return fn&21?(ut(n,t)||(n=_d(),ce.lanes|=n,hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function ag(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=wl.transition;wl.transition={};try{e(!1),t()}finally{q=n,wl.transition=r}}function Pf(){return rt().memoizedState}function sg(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_f(e))zf(t,n);else if(n=nf(e,t,n,r),n!==null){var i=Le();ct(n,e,r,i),Of(n,t,r)}}function cg(e,t,n){var r=Yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_f(e))zf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,ut(s,l)){var c=t.interleaved;c===null?(i.next=i,ys(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=nf(e,t,i,r),n!==null&&(i=Le(),ct(n,e,r,i),Of(n,t,r))}}function _f(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function zf(e,t){yr=qi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Of(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,os(e,n)}}var Zi={readContext:nt,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},ug={readContext:nt,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Qc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_i(4194308,4,xf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){return _i(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sg.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Vc,useDebugValue:Os,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Vc(!1),t=e[0];return e=ag.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,i=ft();if(ie){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),ye===null)throw Error(T(349));fn&30||ff(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Qc(pf.bind(null,r,o,e),[e]),r.flags|=2048,Ar(9,hf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ft(),t=ye.identifierPrefix;if(ie){var n=kt,r=St;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dg={readContext:nt,useCallback:Sf,useContext:nt,useEffect:zs,useImperativeHandle:bf,useInsertionEffect:wf,useLayoutEffect:yf,useMemo:kf,useReducer:yl,useRef:vf,useState:function(){return yl($r)},useDebugValue:Os,useDeferredValue:function(e){var t=rt();return Cf(t,ge.memoizedState,e)},useTransition:function(){var e=yl($r)[0],t=rt().memoizedState;return[e,t]},useMutableSource:uf,useSyncExternalStore:df,useId:Pf,unstable_isNewReconciler:!1},fg={readContext:nt,useCallback:Sf,useContext:nt,useEffect:zs,useImperativeHandle:bf,useInsertionEffect:wf,useLayoutEffect:yf,useMemo:kf,useReducer:xl,useRef:vf,useState:function(){return xl($r)},useDebugValue:Os,useDeferredValue:function(e){var t=rt();return ge===null?t.memoizedState=e:Cf(t,ge.memoizedState,e)},useTransition:function(){var e=xl($r)[0],t=rt().memoizedState;return[e,t]},useMutableSource:uf,useSyncExternalStore:df,useId:Pf,unstable_isNewReconciler:!1};function Qn(e,t){try{var n="",r=t;do n+=Dp(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ma(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hg=typeof WeakMap=="function"?WeakMap:Map;function Ef(e,t,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){eo||(eo=!0,Pa=r),ma(e,t)},n}function Tf(e,t,n){n=Pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ma(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ma(e,t),typeof r!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Yc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zg.bind(null,e,t,n),t.then(e,e))}function Kc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pt(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e)}var pg=Tt.ReactCurrentOwner,$e=!1;function Me(e,t,n,r){t.child=e===null?sf(t,null,n,r):Bn(t,e.child,n,r)}function Xc(e,t,n,r,i){n=n.render;var o=t.ref;return In(t,i),r=Ps(e,t,n,r,o,i),n=_s(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(ie&&n&&hs(t),t.flags|=1,Me(e,t,r,i),t.child)}function qc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!js(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ff(e,t,o,r,i)):(e=Ti(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fr,n(l,r)&&e.ref===t.ref)return Et(e,t,i)}return t.flags|=1,e=Kt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ff(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Fr(o,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,Et(e,t,i)}return ga(e,t,n,r,i)}function Mf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Mn,Be),Be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Mn,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,J(Mn,Be),Be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,J(Mn,Be),Be|=r;return Me(e,t,i,n),t.child}function Lf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ga(e,t,n,r,i){var o=De(n)?un:Te.current;return o=Wn(t,o),In(t,i),n=Ps(e,t,n,r,o,i),r=_s(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(ie&&r&&hs(t),t.flags|=1,Me(e,t,n,i),t.child)}function Zc(e,t,n,r,i){if(De(n)){var o=!0;Bi(t)}else o=!1;if(In(t,i),t.stateNode===null)zi(e,t),lf(t,n,r),pa(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var c=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=nt(d):(d=De(n)?un:Te.current,d=Wn(t,d));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||c!==d)&&Uc(t,l,r,d),Nt=!1;var v=t.memoizedState;l.state=v,Gi(t,r,l,i),c=t.memoizedState,s!==r||v!==c||Ae.current||Nt?(typeof g=="function"&&(ha(t,n,g,r),c=t.memoizedState),(s=Nt||Wc(t,n,s,r,v,c,d))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=d,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,rf(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:ot(t.type,s),l.props=d,h=t.pendingProps,v=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=nt(c):(c=De(n)?un:Te.current,c=Wn(t,c));var S=n.getDerivedStateFromProps;(g=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||v!==c)&&Uc(t,l,r,c),Nt=!1,v=t.memoizedState,l.state=v,Gi(t,r,l,i);var y=t.memoizedState;s!==h||v!==y||Ae.current||Nt?(typeof S=="function"&&(ha(t,n,S,r),y=t.memoizedState),(d=Nt||Wc(t,n,d,r,v,y,c)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=c,r=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return va(e,t,n,r,o,i)}function va(e,t,n,r,i,o){Lf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ic(t,n,!1),Et(e,t,o);r=t.stateNode,pg.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Bn(t,e.child,null,o),t.child=Bn(t,null,s,o)):Me(e,t,s,o),t.memoizedState=r.state,i&&Ic(t,n,!0),t.child}function Rf(e){var t=e.stateNode;t.pendingContext?jc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jc(e,t.context,!1),bs(e,t.containerInfo)}function Jc(e,t,n,r,i){return Un(),ms(i),t.flags|=256,Me(e,t,n,r),t.child}var wa={dehydrated:null,treeContext:null,retryLane:0};function ya(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nf(e,t,n){var r=t.pendingProps,i=se.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),J(se,i&1),e===null)return da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Oo(l,r,0,null),e=sn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ya(n),t.memoizedState=wa,e):Es(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return mg(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Kt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Kt(s,o):(o=sn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ya(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=wa,r}return o=e.child,e=o.sibling,r=Kt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Es(e,t){return t=Oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hi(e,t,n,r){return r!==null&&ms(r),Bn(t,e.child,null,n),e=Es(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mg(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=bl(Error(T(422))),hi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Oo({mode:"visible",children:r.children},i,0,null),o=sn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Bn(t,e.child,null,l),t.child.memoizedState=ya(l),t.memoizedState=wa,o);if(!(t.mode&1))return hi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(T(419)),r=bl(o,r,void 0),hi(e,t,l,r)}if(s=(l&e.childLanes)!==0,$e||s){if(r=ye,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ot(e,i),ct(r,e,i,-1))}return Ns(),r=bl(Error(T(421))),hi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Og.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ve=Bt(i.nextSibling),Qe=t,ie=!0,at=null,e!==null&&(Ze[Je++]=St,Ze[Je++]=kt,Ze[Je++]=dn,St=e.id,kt=e.overflow,dn=t),t=Es(t,r.children),t.flags|=4096,t)}function eu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fa(e.return,t,n)}function Sl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function jf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Me(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eu(e,n,t);else if(e.tag===19)eu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Sl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Sl(t,!0,n,null,o);break;case"together":Sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gg(e,t,n){switch(t.tag){case 3:Rf(t),Un();break;case 5:cf(t);break;case 1:De(t.type)&&Bi(t);break;case 4:bs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;J(Yi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?Nf(e,t,n):(J(se,se.current&1),e=Et(e,t,n),e!==null?e.sibling:null);J(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Mf(e,t,n)}return Et(e,t,n)}var If,xa,$f,Af;If=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xa=function(){};$f=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ln(vt.current);var o=null;switch(n){case"input":i=Wl(e,i),r=Wl(e,r),o=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),o=[];break;case"textarea":i=Vl(e,i),r=Vl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wi)}Yl(n,r);var l;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Cr.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var c=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(o||(o=[]),o.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&te("scroll",e),o||s===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Af=function(e,t,n,r){n!==r&&(t.flags|=4)};function ar(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vg(e,t,n){var r=t.pendingProps;switch(ps(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return De(t.type)&&Ui(),ze(t),null;case 3:return r=t.stateNode,Vn(),ne(Ae),ne(Te),ks(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(di(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(Oa(at),at=null))),xa(e,t),ze(t),null;case 5:Ss(t);var i=ln(jr.current);if(n=t.type,e!==null&&t.stateNode!=null)$f(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return ze(t),null}if(e=ln(vt.current),di(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[mt]=t,r[Rr]=o,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<hr.length;i++)te(hr[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":cc(r,o),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},te("invalid",r);break;case"textarea":dc(r,o),te("invalid",r)}Yl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ui(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ui(r.textContent,s,e),i=["children",""+s]):Cr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&te("scroll",r)}switch(n){case"input":ni(r),uc(r,o,!0);break;case"textarea":ni(r),fc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Wi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[mt]=t,e[Rr]=r,If(e,t,!1,!1),t.stateNode=e;e:{switch(l=Kl(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<hr.length;i++)te(hr[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":cc(e,r),i=Wl(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),te("invalid",e);break;case"textarea":dc(e,r),i=Vl(e,r),te("invalid",e);break;default:i=r}Yl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="style"?pd(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&fd(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Pr(e,c):typeof c=="number"&&Pr(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Cr.hasOwnProperty(o)?c!=null&&o==="onScroll"&&te("scroll",e):c!=null&&Ja(e,o,c,l))}switch(n){case"input":ni(e),uc(e,r,!1);break;case"textarea":ni(e),fc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)Af(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=ln(jr.current),ln(vt.current),di(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(o=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:ui(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ui(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return ze(t),null;case 13:if(ne(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Ve!==null&&t.mode&1&&!(t.flags&128))tf(),Un(),t.flags|=98560,o=!1;else if(o=di(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[mt]=t}else Un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),o=!1}else at!==null&&(Oa(at),at=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ve===0&&(ve=3):Ns())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Vn(),xa(e,t),e===null&&Mr(t.stateNode.containerInfo),ze(t),null;case 10:return ws(t.type._context),ze(t),null;case 17:return De(t.type)&&Ui(),ze(t),null;case 19:if(ne(se),o=t.memoizedState,o===null)return ze(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)ar(o,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Xi(e),l!==null){for(t.flags|=128,ar(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(se,se.current&1|2),t.child}e=e.sibling}o.tail!==null&&he()>Yn&&(t.flags|=128,r=!0,ar(o,!1),t.lanes=4194304)}else{if(!r)if(e=Xi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ar(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ie)return ze(t),null}else 2*he()-o.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,ar(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=he(),t.sibling=null,n=se.current,J(se,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Rs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function wg(e,t){switch(ps(t),t.tag){case 1:return De(t.type)&&Ui(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),ne(Ae),ne(Te),ks(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ss(t),null;case 13:if(ne(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(se),null;case 4:return Vn(),null;case 10:return ws(t.type._context),null;case 22:case 23:return Rs(),null;case 24:return null;default:return null}}var pi=!1,Ee=!1,yg=typeof WeakSet=="function"?WeakSet:Set,R=null;function Fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function ba(e,t,n){try{n()}catch(r){fe(e,t,r)}}var tu=!1;function xg(e,t){if(ia=Ai,e=Wd(),fs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,c=-1,d=0,g=0,h=e,v=null;t:for(;;){for(var S;h!==n||i!==0&&h.nodeType!==3||(s=l+i),h!==o||r!==0&&h.nodeType!==3||(c=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(S=h.firstChild)!==null;)v=h,h=S;for(;;){if(h===e)break t;if(v===n&&++d===i&&(s=l),v===o&&++g===r&&(c=l),(S=h.nextSibling)!==null)break;h=v,v=h.parentNode}h=S}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(oa={focusedElem:e,selectionRange:n},Ai=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,_=y.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:ot(t.type,w),_);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(b){fe(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=tu,tu=!1,y}function xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ba(t,n,o)}i=i.next}while(i!==r)}}function _o(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Df(e){var t=e.alternate;t!==null&&(e.alternate=null,Df(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[Rr],delete t[sa],delete t[ng],delete t[rg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hf(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wi));else if(r!==4&&(e=e.child,e!==null))for(ka(e,t,n),e=e.sibling;e!==null;)ka(e,t,n),e=e.sibling}function Ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ca(e,t,n),e=e.sibling;e!==null;)Ca(e,t,n),e=e.sibling}var be=null,lt=!1;function Lt(e,t,n){for(n=n.child;n!==null;)Wf(e,t,n),n=n.sibling}function Wf(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(wo,n)}catch{}switch(n.tag){case 5:Ee||Fn(n,t);case 6:var r=be,i=lt;be=null,Lt(e,t,n),be=r,lt=i,be!==null&&(lt?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(lt?(e=be,n=n.stateNode,e.nodeType===8?ml(e.parentNode,n):e.nodeType===1&&ml(e,n),Er(e)):ml(be,n.stateNode));break;case 4:r=be,i=lt,be=n.stateNode.containerInfo,lt=!0,Lt(e,t,n),be=r,lt=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ba(n,t,l),i=i.next}while(i!==r)}Lt(e,t,n);break;case 1:if(!Ee&&(Fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){fe(n,t,s)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Lt(e,t,n),Ee=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function ru(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yg),t.forEach(function(r){var i=Eg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:be=s.stateNode,lt=!1;break e;case 3:be=s.stateNode.containerInfo,lt=!0;break e;case 4:be=s.stateNode.containerInfo,lt=!0;break e}s=s.return}if(be===null)throw Error(T(160));Wf(o,l,i),be=null,lt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){fe(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uf(t,e),t=t.sibling}function Uf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),dt(e),r&4){try{xr(3,e,e.return),_o(3,e)}catch(w){fe(e,e.return,w)}try{xr(5,e,e.return)}catch(w){fe(e,e.return,w)}}break;case 1:it(t,e),dt(e),r&512&&n!==null&&Fn(n,n.return);break;case 5:if(it(t,e),dt(e),r&512&&n!==null&&Fn(n,n.return),e.flags&32){var i=e.stateNode;try{Pr(i,"")}catch(w){fe(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&cd(i,o),Kl(s,l);var d=Kl(s,o);for(l=0;l<c.length;l+=2){var g=c[l],h=c[l+1];g==="style"?pd(i,h):g==="dangerouslySetInnerHTML"?fd(i,h):g==="children"?Pr(i,h):Ja(i,g,h,d)}switch(s){case"input":Ul(i,o);break;case"textarea":ud(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Ln(i,!!o.multiple,S,!1):v!==!!o.multiple&&(o.defaultValue!=null?Ln(i,!!o.multiple,o.defaultValue,!0):Ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[Rr]=o}catch(w){fe(e,e.return,w)}}break;case 6:if(it(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){fe(e,e.return,w)}}break;case 3:if(it(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Er(t.containerInfo)}catch(w){fe(e,e.return,w)}break;case 4:it(t,e),dt(e);break;case 13:it(t,e),dt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ms=he())),r&4&&ru(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(d=Ee)||g,it(t,e),Ee=d):it(t,e),dt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(R=e,g=e.child;g!==null;){for(h=R=g;R!==null;){switch(v=R,S=v.child,v.tag){case 0:case 11:case 14:case 15:xr(4,v,v.return);break;case 1:Fn(v,v.return);var y=v.stateNode;if(typeof y.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){fe(r,n,w)}}break;case 5:Fn(v,v.return);break;case 22:if(v.memoizedState!==null){ou(h);continue}}S!==null?(S.return=v,R=S):ou(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{i=h.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=hd("display",l))}catch(w){fe(e,e.return,w)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){fe(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:it(t,e),dt(e),r&4&&ru(e);break;case 21:break;default:it(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hf(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pr(i,""),r.flags&=-33);var o=nu(e);Ca(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=nu(e);ka(e,s,l);break;default:throw Error(T(161))}}catch(c){fe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bg(e,t,n){R=e,Bf(e)}function Bf(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||pi;if(!l){var s=i.alternate,c=s!==null&&s.memoizedState!==null||Ee;s=pi;var d=Ee;if(pi=l,(Ee=c)&&!d)for(R=i;R!==null;)l=R,c=l.child,l.tag===22&&l.memoizedState!==null?lu(i):c!==null?(c.return=l,R=c):lu(i);for(;o!==null;)R=o,Bf(o),o=o.sibling;R=i,pi=s,Ee=d}iu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):iu(e)}}function iu(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||_o(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Hc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Hc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Er(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ee||t.flags&512&&Sa(t)}catch(v){fe(t,t.return,v)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function ou(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function lu(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_o(4,t)}catch(c){fe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){fe(t,i,c)}}var o=t.return;try{Sa(t)}catch(c){fe(t,o,c)}break;case 5:var l=t.return;try{Sa(t)}catch(c){fe(t,l,c)}}}catch(c){fe(t,t.return,c)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var Sg=Math.ceil,Ji=Tt.ReactCurrentDispatcher,Ts=Tt.ReactCurrentOwner,tt=Tt.ReactCurrentBatchConfig,K=0,ye=null,me=null,ke=0,Be=0,Mn=Jt(0),ve=0,Dr=null,hn=0,zo=0,Fs=0,br=null,Ie=null,Ms=0,Yn=1/0,yt=null,eo=!1,Pa=null,Qt=null,mi=!1,Dt=null,to=0,Sr=0,_a=null,Oi=-1,Ei=0;function Le(){return K&6?he():Oi!==-1?Oi:Oi=he()}function Yt(e){return e.mode&1?K&2&&ke!==0?ke&-ke:og.transition!==null?(Ei===0&&(Ei=_d()),Ei):(e=q,e!==0||(e=window.event,e=e===void 0?16:Ld(e.type)),e):1}function ct(e,t,n,r){if(50<Sr)throw Sr=0,_a=null,Error(T(185));Yr(e,n,r),(!(K&2)||e!==ye)&&(e===ye&&(!(K&2)&&(zo|=n),ve===4&&$t(e,ke)),He(e,r),n===1&&K===0&&!(t.mode&1)&&(Yn=he()+500,ko&&en()))}function He(e,t){var n=e.callbackNode;om(e,t);var r=$i(e,e===ye?ke:0);if(r===0)n!==null&&mc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mc(n),t===1)e.tag===0?ig(au.bind(null,e)):Zd(au.bind(null,e)),eg(function(){!(K&6)&&en()}),n=null;else{switch(zd(r)){case 1:n=is;break;case 4:n=Cd;break;case 16:n=Ii;break;case 536870912:n=Pd;break;default:n=Ii}n=Zf(n,Vf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vf(e,t){if(Oi=-1,Ei=0,K&6)throw Error(T(327));var n=e.callbackNode;if($n()&&e.callbackNode!==n)return null;var r=$i(e,e===ye?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=no(e,r);else{t=r;var i=K;K|=2;var o=Yf();(ye!==e||ke!==t)&&(yt=null,Yn=he()+500,an(e,t));do try{Pg();break}catch(s){Qf(e,s)}while(1);vs(),Ji.current=o,K=i,me!==null?t=0:(ye=null,ke=0,t=ve)}if(t!==0){if(t===2&&(i=Jl(e),i!==0&&(r=i,t=za(e,i))),t===1)throw n=Dr,an(e,0),$t(e,r),He(e,he()),n;if(t===6)$t(e,r);else{if(i=e.current.alternate,!(r&30)&&!kg(i)&&(t=no(e,r),t===2&&(o=Jl(e),o!==0&&(r=o,t=za(e,o))),t===1))throw n=Dr,an(e,0),$t(e,r),He(e,he()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:nn(e,Ie,yt);break;case 3:if($t(e,r),(r&130023424)===r&&(t=Ms+500-he(),10<t)){if($i(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=aa(nn.bind(null,e,Ie,yt),t);break}nn(e,Ie,yt);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-st(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sg(r/1960))-r,10<r){e.timeoutHandle=aa(nn.bind(null,e,Ie,yt),r);break}nn(e,Ie,yt);break;case 5:nn(e,Ie,yt);break;default:throw Error(T(329))}}}return He(e,he()),e.callbackNode===n?Vf.bind(null,e):null}function za(e,t){var n=br;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=no(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Oa(t)),e}function Oa(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function kg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ut(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~Fs,t&=~zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function au(e){if(K&6)throw Error(T(327));$n();var t=$i(e,0);if(!(t&1))return He(e,he()),null;var n=no(e,t);if(e.tag!==0&&n===2){var r=Jl(e);r!==0&&(t=r,n=za(e,r))}if(n===1)throw n=Dr,an(e,0),$t(e,t),He(e,he()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nn(e,Ie,yt),He(e,he()),null}function Ls(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(Yn=he()+500,ko&&en())}}function pn(e){Dt!==null&&Dt.tag===0&&!(K&6)&&$n();var t=K;K|=1;var n=tt.transition,r=q;try{if(tt.transition=null,q=1,e)return e()}finally{q=r,tt.transition=n,K=t,!(K&6)&&en()}}function Rs(){Be=Mn.current,ne(Mn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jm(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(ps(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ui();break;case 3:Vn(),ne(Ae),ne(Te),ks();break;case 5:Ss(r);break;case 4:Vn();break;case 13:ne(se);break;case 19:ne(se);break;case 10:ws(r.type._context);break;case 22:case 23:Rs()}n=n.return}if(ye=e,me=e=Kt(e.current,null),ke=Be=t,ve=0,Dr=null,Fs=zo=hn=0,Ie=br=null,on!==null){for(t=0;t<on.length;t++)if(n=on[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}on=null}return e}function Qf(e,t){do{var n=me;try{if(vs(),Pi.current=Zi,qi){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qi=!1}if(fn=0,we=ge=ce=null,yr=!1,Ir=0,Ts.current=null,n===null||n.return===null){ve=1,Dr=t,me=null;break}e:{var o=e,l=n.return,s=n,c=t;if(t=ke,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,g=s,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var v=g.alternate;v?(g.updateQueue=v.updateQueue,g.memoizedState=v.memoizedState,g.lanes=v.lanes):(g.updateQueue=null,g.memoizedState=null)}var S=Kc(l);if(S!==null){S.flags&=-257,Gc(S,l,s,o,t),S.mode&1&&Yc(o,d,t),t=S,c=d;var y=t.updateQueue;if(y===null){var w=new Set;w.add(c),t.updateQueue=w}else y.add(c);break e}else{if(!(t&1)){Yc(o,d,t),Ns();break e}c=Error(T(426))}}else if(ie&&s.mode&1){var _=Kc(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Gc(_,l,s,o,t),ms(Qn(c,s));break e}}o=c=Qn(c,s),ve!==4&&(ve=2),br===null?br=[o]:br.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Ef(o,c,t);Dc(o,f);break e;case 1:s=c;var u=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Qt===null||!Qt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=Tf(o,s,t);Dc(o,b);break e}}o=o.return}while(o!==null)}Gf(n)}catch(k){t=k,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function Yf(){var e=Ji.current;return Ji.current=Zi,e===null?Zi:e}function Ns(){(ve===0||ve===3||ve===2)&&(ve=4),ye===null||!(hn&268435455)&&!(zo&268435455)||$t(ye,ke)}function no(e,t){var n=K;K|=2;var r=Yf();(ye!==e||ke!==t)&&(yt=null,an(e,t));do try{Cg();break}catch(i){Qf(e,i)}while(1);if(vs(),K=n,Ji.current=r,me!==null)throw Error(T(261));return ye=null,ke=0,ve}function Cg(){for(;me!==null;)Kf(me)}function Pg(){for(;me!==null&&!Xp();)Kf(me)}function Kf(e){var t=qf(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?Gf(e):me=t,Ts.current=null}function Gf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=wg(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,me=null;return}}else if(n=vg(n,t,Be),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ve===0&&(ve=5)}function nn(e,t,n){var r=q,i=tt.transition;try{tt.transition=null,q=1,_g(e,t,n,r)}finally{tt.transition=i,q=r}return null}function _g(e,t,n,r){do $n();while(Dt!==null);if(K&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(lm(e,o),e===ye&&(me=ye=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mi||(mi=!0,Zf(Ii,function(){return $n(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tt.transition,tt.transition=null;var l=q;q=1;var s=K;K|=4,Ts.current=null,xg(e,n),Uf(n,e),Qm(oa),Ai=!!ia,oa=ia=null,e.current=n,bg(n),qp(),K=s,q=l,tt.transition=o}else e.current=n;if(mi&&(mi=!1,Dt=e,to=i),o=e.pendingLanes,o===0&&(Qt=null),em(n.stateNode),He(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(eo)throw eo=!1,e=Pa,Pa=null,e;return to&1&&e.tag!==0&&$n(),o=e.pendingLanes,o&1?e===_a?Sr++:(Sr=0,_a=e):Sr=0,en(),null}function $n(){if(Dt!==null){var e=zd(to),t=tt.transition,n=q;try{if(tt.transition=null,q=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,to=0,K&6)throw Error(T(331));var i=K;for(K|=4,R=e.current;R!==null;){var o=R,l=o.child;if(R.flags&16){var s=o.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for(R=d;R!==null;){var g=R;switch(g.tag){case 0:case 11:case 15:xr(8,g,o)}var h=g.child;if(h!==null)h.return=g,R=h;else for(;R!==null;){g=R;var v=g.sibling,S=g.return;if(Df(g),g===d){R=null;break}if(v!==null){v.return=S,R=v;break}R=S}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}R=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,R=l;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,R=f;break e}R=o.return}}var u=e.current;for(R=u;R!==null;){l=R;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,R=p;else e:for(l=u;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_o(9,s)}}catch(k){fe(s,s.return,k)}if(s===l){R=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,R=b;break e}R=s.return}}if(K=i,en(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(wo,e)}catch{}r=!0}return r}finally{q=n,tt.transition=t}}return!1}function su(e,t,n){t=Qn(n,t),t=Ef(e,t,1),e=Vt(e,t,1),t=Le(),e!==null&&(Yr(e,1,t),He(e,t))}function fe(e,t,n){if(e.tag===3)su(e,e,n);else for(;t!==null;){if(t.tag===3){su(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r))){e=Qn(n,e),e=Tf(t,e,1),t=Vt(t,e,1),e=Le(),t!==null&&(Yr(t,1,e),He(t,e));break}}t=t.return}}function zg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(ke&n)===n&&(ve===4||ve===3&&(ke&130023424)===ke&&500>he()-Ms?an(e,0):Fs|=n),He(e,t)}function Xf(e,t){t===0&&(e.mode&1?(t=oi,oi<<=1,!(oi&130023424)&&(oi=4194304)):t=1);var n=Le();e=Ot(e,t),e!==null&&(Yr(e,t,n),He(e,n))}function Og(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xf(e,n)}function Eg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Xf(e,n)}var qf;qf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,gg(e,t,n);$e=!!(e.flags&131072)}else $e=!1,ie&&t.flags&1048576&&Jd(t,Qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zi(e,t),e=t.pendingProps;var i=Wn(t,Te.current);In(t,n),i=Ps(null,t,r,e,i,n);var o=_s();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(o=!0,Bi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xs(t),i.updater=Co,t.stateNode=i,i._reactInternals=t,pa(t,r,e,n),t=va(null,t,r,!0,o,n)):(t.tag=0,ie&&o&&hs(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fg(r),e=ot(r,e),i){case 0:t=ga(null,t,r,e,n);break e;case 1:t=Zc(null,t,r,e,n);break e;case 11:t=Xc(null,t,r,e,n);break e;case 14:t=qc(null,t,r,ot(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),ga(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Zc(e,t,r,i,n);case 3:e:{if(Rf(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,rf(e,t),Gi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Qn(Error(T(423)),t),t=Jc(e,t,r,n,i);break e}else if(r!==i){i=Qn(Error(T(424)),t),t=Jc(e,t,r,n,i);break e}else for(Ve=Bt(t.stateNode.containerInfo.firstChild),Qe=t,ie=!0,at=null,n=sf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),r===i){t=Et(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return cf(t),e===null&&da(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,la(r,i)?l=null:o!==null&&la(r,o)&&(t.flags|=32),Lf(e,t),Me(e,t,l,n),t.child;case 6:return e===null&&da(t),null;case 13:return Nf(e,t,n);case 4:return bs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bn(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Xc(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,J(Yi,r._currentValue),r._currentValue=l,o!==null)if(ut(o.value,l)){if(o.children===i.children&&!Ae.current){t=Et(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Pt(-1,n&-n),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?c.next=c:(c.next=g.next,g.next=c),d.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),fa(o.return,n,t),s.lanes|=n;break}c=c.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(T(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),fa(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,In(t,n),i=nt(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=ot(r,t.pendingProps),i=ot(r.type,i),qc(e,t,r,i,n);case 15:return Ff(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),zi(e,t),t.tag=1,De(r)?(e=!0,Bi(t)):e=!1,In(t,n),lf(t,r,i),pa(t,r,i,n),va(null,t,r,!0,e,n);case 19:return jf(e,t,n);case 22:return Mf(e,t,n)}throw Error(T(156,t.tag))};function Zf(e,t){return kd(e,t)}function Tg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new Tg(e,t,n,r)}function js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fg(e){if(typeof e=="function")return js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ts)return 11;if(e===ns)return 14}return 2}function Kt(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ti(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")js(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Sn:return sn(n.children,i,o,t);case es:l=8,i|=8;break;case $l:return e=et(12,n,t,i|2),e.elementType=$l,e.lanes=o,e;case Al:return e=et(13,n,t,i),e.elementType=Al,e.lanes=o,e;case Dl:return e=et(19,n,t,i),e.elementType=Dl,e.lanes=o,e;case ld:return Oo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case id:l=10;break e;case od:l=9;break e;case ts:l=11;break e;case ns:l=14;break e;case Rt:l=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=et(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function sn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function Oo(e,t,n,r){return e=et(22,e,r,t),e.elementType=ld,e.lanes=n,e.stateNode={isHidden:!1},e}function kl(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function Cl(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=il(0),this.expirationTimes=il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Is(e,t,n,r,i,o,l,s,c){return e=new Mg(e,t,n,s,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=et(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xs(o),e}function Lg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jf(e){if(!e)return qt;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(De(n))return qd(e,n,t)}return t}function eh(e,t,n,r,i,o,l,s,c){return e=Is(n,r,!0,e,i,o,l,s,c),e.context=Jf(null),n=e.current,r=Le(),i=Yt(n),o=Pt(r,i),o.callback=t??null,Vt(n,o,i),e.current.lanes=i,Yr(e,i,r),He(e,r),e}function Eo(e,t,n,r){var i=t.current,o=Le(),l=Yt(i);return n=Jf(n),t.context===null?t.context=n:t.pendingContext=n,t=Pt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(i,t,l),e!==null&&(ct(e,i,l,o),Ci(e,i,l)),l}function ro(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $s(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function Rg(){return null}var th=typeof reportError=="function"?reportError:function(e){console.error(e)};function As(e){this._internalRoot=e}To.prototype.render=As.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Eo(e,t,null,null)};To.prototype.unmount=As.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Eo(null,e,null,null)}),t[zt]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var t=Td();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&t!==0&&t<It[n].priority;n++);It.splice(n,0,e),n===0&&Md(e)}};function Ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uu(){}function Ng(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=ro(l);o.call(d)}}var l=eh(t,r,e,0,null,!1,!1,"",uu);return e._reactRootContainer=l,e[zt]=l.current,Mr(e.nodeType===8?e.parentNode:e),pn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=ro(c);s.call(d)}}var c=Is(e,0,!1,null,null,!1,!1,"",uu);return e._reactRootContainer=c,e[zt]=c.current,Mr(e.nodeType===8?e.parentNode:e),pn(function(){Eo(t,c,n,r)}),c}function Mo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var c=ro(l);s.call(c)}}Eo(t,l,e,i)}else l=Ng(n,t,e,i,r);return ro(l)}Od=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(os(t,n|1),He(t,he()),!(K&6)&&(Yn=he()+500,en()))}break;case 13:pn(function(){var r=Ot(e,1);if(r!==null){var i=Le();ct(r,e,1,i)}}),$s(e,1)}};ls=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=Le();ct(t,e,134217728,n)}$s(e,134217728)}};Ed=function(e){if(e.tag===13){var t=Yt(e),n=Ot(e,t);if(n!==null){var r=Le();ct(n,e,t,r)}$s(e,t)}};Td=function(){return q};Fd=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Xl=function(e,t,n){switch(t){case"input":if(Ul(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=So(r);if(!i)throw Error(T(90));sd(r),Ul(r,i)}}}break;case"textarea":ud(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};vd=Ls;wd=pn;var jg={usingClientEntryPoint:!1,Events:[Gr,_n,So,md,gd,Ls]},sr={findFiberByHostInstance:rn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ig={bundleType:sr.bundleType,version:sr.version,rendererPackageName:sr.rendererPackageName,rendererConfig:sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bd(e),e===null?null:e.stateNode},findFiberByHostInstance:sr.findFiberByHostInstance||Rg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gi.isDisabled&&gi.supportsFiber)try{wo=gi.inject(Ig),gt=gi}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jg;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ds(t))throw Error(T(200));return Lg(e,t,null,n)};Ge.createRoot=function(e,t){if(!Ds(e))throw Error(T(299));var n=!1,r="",i=th;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Is(e,1,!1,null,null,n,!1,r,i),e[zt]=t.current,Mr(e.nodeType===8?e.parentNode:e),new As(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=bd(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return pn(e)};Ge.hydrate=function(e,t,n){if(!Fo(t))throw Error(T(200));return Mo(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!Ds(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=th;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=eh(t,null,e,1,n??null,i,!1,o,l),e[zt]=t.current,Mr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new To(t)};Ge.render=function(e,t,n){if(!Fo(t))throw Error(T(200));return Mo(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(T(40));return e._reactRootContainer?(pn(function(){Mo(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};Ge.unstable_batchedUpdates=Ls;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fo(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Mo(e,t,n,!1,r)};Ge.version="18.2.0-next-9e3b772b8-20220608";function nh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nh)}catch(e){console.error(e)}}nh(),Ju.exports=Ge;var $g=Ju.exports,du=$g;jl.createRoot=du.createRoot,jl.hydrateRoot=du.hydrateRoot;function Ag(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Dg(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Hg=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Dg(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Ag(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Oe="-ms-",io="-moz-",G="-webkit-",rh="comm",Hs="rule",Ws="decl",Wg="@import",ih="@keyframes",Ug="@layer",Bg=Math.abs,Lo=String.fromCharCode,Vg=Object.assign;function Qg(e,t){return Se(e,0)^45?(((t<<2^Se(e,0))<<2^Se(e,1))<<2^Se(e,2))<<2^Se(e,3):0}function oh(e){return e.trim()}function Yg(e,t){return(e=t.exec(e))?e[0]:e}function X(e,t,n){return e.replace(t,n)}function Ea(e,t){return e.indexOf(t)}function Se(e,t){return e.charCodeAt(t)|0}function Hr(e,t,n){return e.slice(t,n)}function ht(e){return e.length}function Us(e){return e.length}function vi(e,t){return t.push(e),e}function Kg(e,t){return e.map(t).join("")}var Ro=1,Kn=1,lh=0,We=0,pe=0,er="";function No(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ro,column:Kn,length:l,return:""}}function cr(e,t){return Vg(No("",null,null,"",null,null,0),e,{length:-e.length},t)}function Gg(){return pe}function Xg(){return pe=We>0?Se(er,--We):0,Kn--,pe===10&&(Kn=1,Ro--),pe}function Ye(){return pe=We<lh?Se(er,We++):0,Kn++,pe===10&&(Kn=1,Ro++),pe}function wt(){return Se(er,We)}function Fi(){return We}function qr(e,t){return Hr(er,e,t)}function Wr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ah(e){return Ro=Kn=1,lh=ht(er=e),We=0,[]}function sh(e){return er="",e}function Mi(e){return oh(qr(We-1,Ta(e===91?e+2:e===40?e+1:e)))}function qg(e){for(;(pe=wt())&&pe<33;)Ye();return Wr(e)>2||Wr(pe)>3?"":" "}function Zg(e,t){for(;--t&&Ye()&&!(pe<48||pe>102||pe>57&&pe<65||pe>70&&pe<97););return qr(e,Fi()+(t<6&&wt()==32&&Ye()==32))}function Ta(e){for(;Ye();)switch(pe){case e:return We;case 34:case 39:e!==34&&e!==39&&Ta(pe);break;case 40:e===41&&Ta(e);break;case 92:Ye();break}return We}function Jg(e,t){for(;Ye()&&e+pe!==47+10;)if(e+pe===42+42&&wt()===47)break;return"/*"+qr(t,We-1)+"*"+Lo(e===47?e:Ye())}function e0(e){for(;!Wr(wt());)Ye();return qr(e,We)}function t0(e){return sh(Li("",null,null,null,[""],e=ah(e),0,[0],e))}function Li(e,t,n,r,i,o,l,s,c){for(var d=0,g=0,h=l,v=0,S=0,y=0,w=1,_=1,f=1,u=0,p="",b=i,k=o,C=r,z=p;_;)switch(y=u,u=Ye()){case 40:if(y!=108&&Se(z,h-1)==58){Ea(z+=X(Mi(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:z+=Mi(u);break;case 9:case 10:case 13:case 32:z+=qg(y);break;case 92:z+=Zg(Fi()-1,7);continue;case 47:switch(wt()){case 42:case 47:vi(n0(Jg(Ye(),Fi()),t,n),c);break;default:z+="/"}break;case 123*w:s[d++]=ht(z)*f;case 125*w:case 59:case 0:switch(u){case 0:case 125:_=0;case 59+g:f==-1&&(z=X(z,/\f/g,"")),S>0&&ht(z)-h&&vi(S>32?hu(z+";",r,n,h-1):hu(X(z," ","")+";",r,n,h-2),c);break;case 59:z+=";";default:if(vi(C=fu(z,t,n,d,g,i,s,p,b=[],k=[],h),o),u===123)if(g===0)Li(z,t,C,C,b,o,h,s,k);else switch(v===99&&Se(z,3)===110?100:v){case 100:case 108:case 109:case 115:Li(e,C,C,r&&vi(fu(e,C,C,0,0,i,s,p,i,b=[],h),k),i,k,h,s,r?b:k);break;default:Li(z,C,C,C,[""],k,0,s,k)}}d=g=S=0,w=f=1,p=z="",h=l;break;case 58:h=1+ht(z),S=y;default:if(w<1){if(u==123)--w;else if(u==125&&w++==0&&Xg()==125)continue}switch(z+=Lo(u),u*w){case 38:f=g>0?1:(z+="\f",-1);break;case 44:s[d++]=(ht(z)-1)*f,f=1;break;case 64:wt()===45&&(z+=Mi(Ye())),v=wt(),g=h=ht(p=z+=e0(Fi())),u++;break;case 45:y===45&&ht(z)==2&&(w=0)}}return o}function fu(e,t,n,r,i,o,l,s,c,d,g){for(var h=i-1,v=i===0?o:[""],S=Us(v),y=0,w=0,_=0;y<r;++y)for(var f=0,u=Hr(e,h+1,h=Bg(w=l[y])),p=e;f<S;++f)(p=oh(w>0?v[f]+" "+u:X(u,/&\f/g,v[f])))&&(c[_++]=p);return No(e,t,n,i===0?Hs:s,c,d,g)}function n0(e,t,n){return No(e,t,n,rh,Lo(Gg()),Hr(e,2,-2),0)}function hu(e,t,n,r){return No(e,t,n,Ws,Hr(e,0,r),Hr(e,r+1,-1),r)}function An(e,t){for(var n="",r=Us(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function r0(e,t,n,r){switch(e.type){case Ug:if(e.children.length)break;case Wg:case Ws:return e.return=e.return||e.value;case rh:return"";case ih:return e.return=e.value+"{"+An(e.children,r)+"}";case Hs:e.value=e.props.join(",")}return ht(n=An(e.children,r))?e.return=e.value+"{"+n+"}":""}function i0(e){var t=Us(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function o0(e){return function(t){t.root||(t=t.return)&&e(t)}}function ch(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var l0=function(t,n,r){for(var i=0,o=0;i=o,o=wt(),i===38&&o===12&&(n[r]=1),!Wr(o);)Ye();return qr(t,We)},a0=function(t,n){var r=-1,i=44;do switch(Wr(i)){case 0:i===38&&wt()===12&&(n[r]=1),t[r]+=l0(We-1,n,r);break;case 2:t[r]+=Mi(i);break;case 4:if(i===44){t[++r]=wt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Lo(i)}while(i=Ye());return t},s0=function(t,n){return sh(a0(ah(t),n))},pu=new WeakMap,c0=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!pu.get(r))&&!i){pu.set(t,!0);for(var o=[],l=s0(n,o),s=r.props,c=0,d=0;c<l.length;c++)for(var g=0;g<s.length;g++,d++)t.props[d]=o[c]?l[c].replace(/&\f/g,s[g]):s[g]+" "+l[c]}}},u0=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function uh(e,t){switch(Qg(e,t)){case 5103:return G+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return G+e+io+e+Oe+e+e;case 6828:case 4268:return G+e+Oe+e+e;case 6165:return G+e+Oe+"flex-"+e+e;case 5187:return G+e+X(e,/(\w+).+(:[^]+)/,G+"box-$1$2"+Oe+"flex-$1$2")+e;case 5443:return G+e+Oe+"flex-item-"+X(e,/flex-|-self/,"")+e;case 4675:return G+e+Oe+"flex-line-pack"+X(e,/align-content|flex-|-self/,"")+e;case 5548:return G+e+Oe+X(e,"shrink","negative")+e;case 5292:return G+e+Oe+X(e,"basis","preferred-size")+e;case 6060:return G+"box-"+X(e,"-grow","")+G+e+Oe+X(e,"grow","positive")+e;case 4554:return G+X(e,/([^-])(transform)/g,"$1"+G+"$2")+e;case 6187:return X(X(X(e,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),e,"")+e;case 5495:case 3959:return X(e,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return X(X(e,/(.+:)(flex-)?(.*)/,G+"box-pack:$3"+Oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+e+e;case 4095:case 3583:case 4068:case 2532:return X(e,/(.+)-inline(.+)/,G+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ht(e)-1-t>6)switch(Se(e,t+1)){case 109:if(Se(e,t+4)!==45)break;case 102:return X(e,/(.+:)(.+)-([^]+)/,"$1"+G+"$2-$3$1"+io+(Se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ea(e,"stretch")?uh(X(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Se(e,t+1)!==115)break;case 6444:switch(Se(e,ht(e)-3-(~Ea(e,"!important")&&10))){case 107:return X(e,":",":"+G)+e;case 101:return X(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+G+(Se(e,14)===45?"inline-":"")+"box$3$1"+G+"$2$3$1"+Oe+"$2box$3")+e}break;case 5936:switch(Se(e,t+11)){case 114:return G+e+Oe+X(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return G+e+Oe+X(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return G+e+Oe+X(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return G+e+Oe+e+e}return e}var d0=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Ws:t.return=uh(t.value,t.length);break;case ih:return An([cr(t,{value:X(t.value,"@","@"+G)})],i);case Hs:if(t.length)return Kg(t.props,function(o){switch(Yg(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return An([cr(t,{props:[X(o,/:(read-\w+)/,":"+io+"$1")]})],i);case"::placeholder":return An([cr(t,{props:[X(o,/:(plac\w+)/,":"+G+"input-$1")]}),cr(t,{props:[X(o,/:(plac\w+)/,":"+io+"$1")]}),cr(t,{props:[X(o,/:(plac\w+)/,Oe+"input-$1")]})],i)}return""})}},f0=[d0],h0=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(w){var _=w.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var i=t.stylisPlugins||f0,o={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(w){for(var _=w.getAttribute("data-emotion").split(" "),f=1;f<_.length;f++)o[_[f]]=!0;s.push(w)});var c,d=[c0,u0];{var g,h=[r0,o0(function(w){g.insert(w)})],v=i0(d.concat(i,h)),S=function(_){return An(t0(_),v)};c=function(_,f,u,p){g=u,S(_?_+"{"+f.styles+"}":f.styles),p&&(y.inserted[f.name]=!0)}}var y={key:n,sheet:new Hg({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:c};return y.sheet.hydrate(s),y};function Fa(){return Fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fa.apply(this,arguments)}var dh={exports:{}},Z={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=typeof Symbol=="function"&&Symbol.for,Bs=xe?Symbol.for("react.element"):60103,Vs=xe?Symbol.for("react.portal"):60106,jo=xe?Symbol.for("react.fragment"):60107,Io=xe?Symbol.for("react.strict_mode"):60108,$o=xe?Symbol.for("react.profiler"):60114,Ao=xe?Symbol.for("react.provider"):60109,Do=xe?Symbol.for("react.context"):60110,Qs=xe?Symbol.for("react.async_mode"):60111,Ho=xe?Symbol.for("react.concurrent_mode"):60111,Wo=xe?Symbol.for("react.forward_ref"):60112,Uo=xe?Symbol.for("react.suspense"):60113,p0=xe?Symbol.for("react.suspense_list"):60120,Bo=xe?Symbol.for("react.memo"):60115,Vo=xe?Symbol.for("react.lazy"):60116,m0=xe?Symbol.for("react.block"):60121,g0=xe?Symbol.for("react.fundamental"):60117,v0=xe?Symbol.for("react.responder"):60118,w0=xe?Symbol.for("react.scope"):60119;function qe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Bs:switch(e=e.type,e){case Qs:case Ho:case jo:case $o:case Io:case Uo:return e;default:switch(e=e&&e.$$typeof,e){case Do:case Wo:case Vo:case Bo:case Ao:return e;default:return t}}case Vs:return t}}}function fh(e){return qe(e)===Ho}Z.AsyncMode=Qs;Z.ConcurrentMode=Ho;Z.ContextConsumer=Do;Z.ContextProvider=Ao;Z.Element=Bs;Z.ForwardRef=Wo;Z.Fragment=jo;Z.Lazy=Vo;Z.Memo=Bo;Z.Portal=Vs;Z.Profiler=$o;Z.StrictMode=Io;Z.Suspense=Uo;Z.isAsyncMode=function(e){return fh(e)||qe(e)===Qs};Z.isConcurrentMode=fh;Z.isContextConsumer=function(e){return qe(e)===Do};Z.isContextProvider=function(e){return qe(e)===Ao};Z.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bs};Z.isForwardRef=function(e){return qe(e)===Wo};Z.isFragment=function(e){return qe(e)===jo};Z.isLazy=function(e){return qe(e)===Vo};Z.isMemo=function(e){return qe(e)===Bo};Z.isPortal=function(e){return qe(e)===Vs};Z.isProfiler=function(e){return qe(e)===$o};Z.isStrictMode=function(e){return qe(e)===Io};Z.isSuspense=function(e){return qe(e)===Uo};Z.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===jo||e===Ho||e===$o||e===Io||e===Uo||e===p0||typeof e=="object"&&e!==null&&(e.$$typeof===Vo||e.$$typeof===Bo||e.$$typeof===Ao||e.$$typeof===Do||e.$$typeof===Wo||e.$$typeof===g0||e.$$typeof===v0||e.$$typeof===w0||e.$$typeof===m0)};Z.typeOf=qe;dh.exports=Z;var y0=dh.exports,hh=y0,x0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},b0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ph={};ph[hh.ForwardRef]=x0;ph[hh.Memo]=b0;var S0=!0;function mh(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Ys=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||S0===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},gh=function(t,n,r){Ys(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function k0(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var C0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},P0=/[A-Z]|^ms/g,_0=/_EMO_([^_]+?)_([^]*?)_EMO_/g,vh=function(t){return t.charCodeAt(1)===45},mu=function(t){return t!=null&&typeof t!="boolean"},Pl=ch(function(e){return vh(e)?e:e.replace(P0,"-$&").toLowerCase()}),gu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(_0,function(r,i,o){return pt={name:i,styles:o,next:pt},i})}return C0[t]!==1&&!vh(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ur(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return pt={name:n.name,styles:n.styles,next:pt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)pt={name:r.name,styles:r.styles,next:pt},r=r.next;var i=n.styles+";";return i}return z0(e,t,n)}case"function":{if(e!==void 0){var o=pt,l=n(e);return pt=o,Ur(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function z0(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ur(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=o+"{"+t[l]+"}":mu(l)&&(r+=Pl(o)+":"+gu(o,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)mu(l[s])&&(r+=Pl(o)+":"+gu(o,l[s])+";");else{var c=Ur(e,t,l);switch(o){case"animation":case"animationName":{r+=Pl(o)+":"+c+";";break}default:r+=o+"{"+c+"}"}}}return r}var vu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,pt,Ks=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";pt=void 0;var l=t[0];l==null||l.raw===void 0?(i=!1,o+=Ur(r,n,l)):o+=l[0];for(var s=1;s<t.length;s++)o+=Ur(r,n,t[s]),i&&(o+=l[s]);vu.lastIndex=0;for(var c="",d;(d=vu.exec(o))!==null;)c+="-"+d[1];var g=k0(o)+c;return{name:g,styles:o,next:pt}},O0=function(t){return t()},E0=oc["useInsertionEffect"]?oc["useInsertionEffect"]:!1,wh=E0||O0,Qo={}.hasOwnProperty,yh=V.createContext(typeof HTMLElement<"u"?h0({key:"css"}):null);yh.Provider;var xh=function(t){return V.forwardRef(function(n,r){var i=V.useContext(yh);return t(n,i,r)})},bh=V.createContext({}),Ma="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Sh=function(t,n){var r={};for(var i in n)Qo.call(n,i)&&(r[i]=n[i]);return r[Ma]=t,r},T0=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Ys(n,r,i),wh(function(){return gh(n,r,i)}),null},F0=xh(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Ma],o=[r],l="";typeof e.className=="string"?l=mh(t.registered,o,e.className):e.className!=null&&(l=e.className+" ");var s=Ks(o,void 0,V.useContext(bh));l+=t.key+"-"+s.name;var c={};for(var d in e)Qo.call(e,d)&&d!=="css"&&d!==Ma&&(c[d]=e[d]);return c.ref=n,c.className=l,V.createElement(V.Fragment,null,V.createElement(T0,{cache:t,serialized:s,isStringTag:typeof i=="string"}),V.createElement(i,c))}),kh=F0,de=bt.Fragment;function a(e,t,n){return Qo.call(t,"css")?bt.jsx(kh,Sh(e,t),n):bt.jsx(e,t,n)}function x(e,t,n){return Qo.call(t,"css")?bt.jsxs(kh,Sh(e,t),n):bt.jsxs(e,t,n)}function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ks(t)}var Ch={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},wu=Ct.createContext&&Ct.createContext(Ch),Gt=globalThis&&globalThis.__assign||function(){return Gt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Gt.apply(this,arguments)},M0=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Ph(e){return e&&e.map(function(t,n){return Ct.createElement(t.tag,Gt({key:n},t.attr),Ph(t.child))})}function vn(e){return function(t){return Ct.createElement(L0,Gt({attr:Gt({},e.attr)},t),Ph(e.child))}}function L0(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,l=M0(e,["attr","size","title"]),s=i||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),Ct.createElement("svg",Gt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:c,style:Gt(Gt({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&Ct.createElement("title",null,o),e.children)};return wu!==void 0?Ct.createElement(wu.Consumer,null,function(n){return t(n)}):t(Ch)}function R0(e){return vn({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"}}]})(e)}const N0=()=>{const[e,t]=V.useState(!1);V.useEffect(()=>{const le=()=>{window.scrollY>0?t(!0):t(!1)};return window.addEventListener("scroll",le),()=>{window.removeEventListener("scroll",le)}},[]);const[n,r]=V.useState(!1),i=m`
        position: fixed;
        top: 0;
        left: 0;
        z-index: 443;
        background: 0 0;
        box-shadow: none;
        width: 100%;
        height: 64px;
        display: flex;
        background-color: ${e?"#fff":""};
        
        
       
        @media screen and (max-width: 1440px){
            width: 100%;
    height: 3.333vw;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 443;
    background: 0 0;
    box-shadow: none;
    background-color: ${e?"#fff":""};
        }
        @media screen and (max-width: 750px){
            position: sticky;
            height: 1.24rem;
        z-index: 2022;
        }
        
    `,o=m`
        max-width: 1440px;
        margin: 0 auto;
        flex-direction: row;
        justify-content: flex-start;
        padding: 0 0 0 7px;
        align-items: center;
        @media screen and (max-width: 1440px){
            max-width: 75vw;
    margin: 0 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: start;
    justify-content: flex-start;
    padding: 0 0 0 0.365vw;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 3.333vw;
    display: flex;
        }
        @media screen and (max-width: 750px){
            display: none;
           
        }
    
    `,l=m`
        display: flex;
        justify-content: flex-start;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start; 
        }
    `,s=m`
        display: flex;
        margin-left: 56px;
        
        @media screen and (max-width: 1440px){
            display: flex;
    margin-left: 2.917vw;
        }
    `,c=m`
        display: flex;
        height: 64px;
        align-items: center;
        width: 1256px;
        flex-direction: row;
        justify-content: space-between;
        
        @media screen and (max-width: 1440px){
            display: flex;
    height: 3.333vw;
    -webkit-box-align: center;
    align-items: center;
    width: 65.417vw;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
        }
    `,d=m`
        display: flex;
        height: 64px;
        align-items: center;
   
    `,g=m`
        position: relative;
        justify-content: center;
        width: max-content;
        padding: 0 24px;
        font-weight: 600;
        font-size: 14px;
        color: ${e?"black":"white"};
        height: 40px;
        cursor: pointer;
        display: flex;
        align-items: center;
        @media screen and (max-width: 1440px){
            position: relative;
    -webkit-box-pack: center;
    justify-content: center;
    width: max-content;
    padding: 0 1.25vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    font-size: .729vw;
    color: #fff;
    height: 2.083vw;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
        }
        span{
            @media screen and (max-width: 1440px){
                font-size: .729vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: ${e?"black":"white"};
            }
        }

    `,h=m`
        display: flex;
        flex-direction: row;
        align-items: center;
        
    `,v=m`
        height: 64px;
        display: flex;
        align-items: center;
        margin-right: 22px;
        position: relative;
        cursor: pointer;
        
        @media screen and (max-width: 1440px){
            height: 3.333vw;
            display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 1.146vw;
    position: relative;
    cursor: pointer;
        }
    `,S=m`
        margin-left: 4px;
        line-height: 20px;
        font-weight: 600;
        font-size: 14px;
        color: ${e?"black":"white"};
        @media screen and (max-width: 1440px){
            margin-left: 0.208vw;
    line-height: 1.042vw;
    font-family: PingFangSC-SNaN0vwibold;
    font-weight: 600;
    font-size: .729vw;
    color: ${e?"black":"white"};
        }
    `,y=m`
        width: 20px;
        height: 20px;
        color: ${e?"black":"white"};
        @media screen and (max-width: 1440px){
            width: 1.042vw;
    height: 1.042vw;
    content: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/activity/lxwm/icon_call_nav_nor%402x.png);  
        }
    `,w=m`
        width: 134px;
        height: 40px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        text-decoration: none;
        background:${e?"rgba(0,85,255,.9)":"hsla(0,0%,100%,.9)"};
        color: ${e?"#fff":"#05f"};
        
        @media screen and (max-width: 1440px){
            height: 2.083vw;
    border-radius: 1.042vw;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: .729vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 1.042vw;
    background: hsla(0,0%,100%,.9);
    color: #05f;
    float: left;
    text-align: center;
    word-break: keep-all;
    cursor: pointer;
        }
        @media screen and (max-width: 890px){
            width: 70px;
        }
    `,_=m`
        
        @media screen and (max-width: 750px){
            display: flex;
    height: 1.24rem;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding: 0 0.32rem;
    background: #fff;
        }
    `,f=m`
        @media screen and (max-width: 750px){
            width: inherit; 
        }
    `,u=m`
        display: none;
    
    @media screen and (max-width: 750px){
        -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    display: inline-flex;
    width: 100%;
    }
    `,p=m`
        @media screen and (max-width: 750px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
        }
    `,b=m`
        
    @media screen and (max-width: 750px){
        display: block;
    width: 0.48rem;
    height: 0.48rem;
    margin-right: 0.48rem;
    }
    `,k=m`
        @media screen and (max-width: 750px){
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAABZElEQVR4Xu3cwQnCQBRF0UkJFmE11ms1FmEJ2oCLMHAgfq5ruSaHpygDHqsHFThovfgKGI8g4ICxAM634ICxAM634ICxAM634ICxAM634ICxAM634ICxAM634KsC3+6PD762S+ffr+epcZ560q87DThg+g5owZR3rYADxgI434IDxgI4zxeMr39Mfvt78BgBfCMBB4wFcL4FB4wFcL4FB4wFcL4FB4wFcL4FB4wFcL4FB4wFcL4FB4wFcH57wR3bd2xPt8lPNFpwC27BVADH+4gIGAvgfAv+d2B8/WPy2z80xgjgGwk4YCyA8y04YCyA8y04YCyA8y04YCyA8y04YCyA8y04YCyA8y04YCyA89sL7lS5U2W6zY6MKG9/Z4B5Aw6YC+AX6DM4YCyA83zB+PrH5Ld/aIwRwDcScMBYAOdbcMBYAOdbcMBYAOdbcMBYAOdbcMBYAOdbcMBYAOdbcMBYAOe/ps1gWVVa3EUAAAAASUVORK5CYII=);
    background-size: 100% 100%;
    width: 0.48rem;
    height: 0.48rem;
    transition: transform .9s linear,-webkit-transform .9s linear;
        }
    `,C=m`
    position: absolute;
    display: ${n?"block":"none"};
    left: 0;
    top: 64px;
    background:${n?"#f4f5f7":"#fff"};
    z-index: 43;
    width: 100vw;
    height: ${n?"458px":"0"};
    border-radius: 4px;
    padding: 0;
    will-change: height;
    transition: height 1s ease-in-out;
    opacity: ${n?"1":"0"};
   
`,z=m`
    width: 100%;
    margin: 0 auto;
    display: flex;
    max-width: 1440px;
    height: 100%;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
`,P=m`
    width: auto;
    padding: 46px 28px 46px 0;
    z-index: 10;
    display: -webkit-box;
    display: flex;
    position: relative;
`,E=m`
    width: 158px;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: start;
    align-items: flex-start;
    z-index: 10;
`,O=m`
   font-size: 16px;
    font-family: PingFangSC-Semibold,PingFang SC;
    color: #28292e;
    line-height: 22px;
    font-weight: 600;
    margin-bottom: 20px; 
`,N=m`
   display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 16px;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #28292e; 
`,M=m`
    font-size: 14px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: #28292e;
    line-height: 20px;
    height: 34px;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    -webkit-box-pack: start;
    justify-content: flex-start;
`,j=m`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 196px;
    height: 206px;
    z-index: 1;
    background: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego-commons/bg/bg_tab2.png) no-repeat;
    background-size: cover;
`,D=m`
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    padding: 46px 0 46px 72px;
    background: #fff;
    width: 100%;
`,A=m`
    font-size: 16px;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #28292e;
    line-height: 22px;
    width: max-content;
    margin-bottom: 24px;
`,oe=m`
    width: 1032px;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 10;
    max-height: 200px;
`,ee=m`
   width: 222px;
    height: 126px;
    padding-top: 26px;
    padding-left: 16px;
    margin-right: 32px;
    margin-bottom: 32px; 
    position: relative;
    padding: 16px 24px;
    border-radius: 8px;
    text-decoration: none;
`,F=m`
    z-index: -1;
    width: 222px;
    height: 126px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 8px;
    overflow: hidden;
    img{
        width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0; 
    }
`,I=m`
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin-bottom: 6px;
`,$=m`
    font-size: 15px;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: 21px;
    white-space: nowrap;
`,W=m`
   max-width: 96px;
    font-size: 13px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: #fff;
    line-height: 19px; 
`,Y=m`
    position: absolute;
    top: -3px;
    left: 0;
    animation: run-gif-data-v-2bd7e930 1.4s steps(29) 0s infinite;
    width: 67px;
    height: 21px;
    background-image: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/index/tag_gif.png);
    background-size: cover;
  
`,Ue=m`
  width: 1020px;
    height: 100%;
    position: absolute;
    background: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego-commons/bg/bg_picture.jpg) no-repeat 50%;
    background-size: cover;
    top: 0;
    right: 0;
    z-index: 1;  
`;return a(de,{children:a("div",{children:x("header",{css:i,children:[a("div",{css:o,children:a("div",{css:l,children:a("nav",{css:s,children:x("div",{css:c,children:[x("div",{css:d,onMouseLeave:()=>r(!1),children:[a("div",{css:g,onMouseEnter:()=>r(!0),children:a("span",{children:"產品"})}),a("div",{css:C,children:x("div",{css:z,children:[a("div",{css:P,children:x("div",{css:E,children:[a("div",{css:O,children:a("a",{href:"#",target:"_blank",css:N,children:"全部產品"})}),a("div",{css:M,children:"精選推薦"}),a("div",{css:M,children:"雲通訊服務"}),a("div",{css:M,children:"Meta 元宇宙"}),a("div",{css:M,children:"擴展服務"}),a("div",{css:M,children:"低代碼產品"}),a("div",{css:M,children:"軟件工具"}),a("div",{css:j})]})}),x("div",{css:D,children:[a("div",{css:A,children:"熱門推薦"}),x("div",{css:oe,children:[x("a",{href:"#",target:"_blank",css:ee,children:[a("div",{css:F,children:a("img",{src:"https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/product/pic_video.png"})}),a("div",{css:I,children:a("div",{css:$,children:"實時音視頻"})}),a("div",{css:W,children:"一對一、多對多視頻通話"}),a("div",{css:Y})]}),x("a",{href:"#",target:"_blank",css:ee,children:[a("div",{css:F,children:a("img",{src:"https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/product/pic_ktv.png"})}),a("div",{css:I,children:a("div",{css:$,children:"在線KTV"})}),a("div",{css:W,children:"線上正版曲庫K歌房"})]}),x("a",{href:"#",target:"_blank",css:ee,children:[a("div",{css:F,children:a("img",{src:"https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/product/pic_game.png"})}),a("div",{css:I,children:a("div",{css:$,children:"小遊戲"})}),a("div",{css:W,children:"遊戲化互動玩法升級"})]}),x("a",{href:"#",target:"_blank",css:ee,children:[a("div",{css:F,children:a("img",{src:"https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/product/pic_avatar.png"})}),a("div",{css:I,children:a("div",{css:$,children:"Avatar 虛擬形象"})}),a("div",{css:W,children:"實時互動的虛擬形象引擎"})]}),x("a",{href:"#",target:"_blank",css:ee,children:[a("div",{css:F,children:a("img",{src:"https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/app/banner_shuzhiren%20.png"})}),a("div",{css:I,children:a("div",{css:$,children:"數字人"})}),a("div",{css:W,children:"提效視頻創作，降低直播成本"})]})]})]}),a("div",{css:Ue})]})}),a("div",{css:g,onMouseEnter:()=>r(!0),children:a("span",{children:"解決方案"})}),a("div",{css:C,children:x("div",{css:z,children:[a("div",{css:P,children:x("div",{css:E,children:[a("div",{css:O,children:a("a",{href:"#",target:"_blank",css:N,children:"全部產品"})}),a("div",{css:M,children:"精選推薦"}),a("div",{css:M,children:"雲通訊服務"}),a("div",{css:M,children:"Meta 元宇宙"}),a("div",{css:M,children:"擴展服務"}),a("div",{css:M,children:"低代碼產品"}),a("div",{css:M,children:"軟件工具"}),a("div",{css:j})]})}),x("div",{css:D,children:[a("div",{css:A,children:"熱門推薦"}),x("div",{css:oe,children:[x("a",{href:"#",target:"_blank",css:ee,children:[a("div",{css:F,children:a("img",{src:"https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/product/pic_video.png"})}),a("div",{css:I,children:a("div",{css:$,children:"123"})}),a("div",{css:W,children:"一對一、多對多視頻通話"}),a("div",{css:Y})]}),x("a",{href:"#",target:"_blank",css:ee,children:[a("div",{css:F,children:a("img",{src:"https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/product/pic_ktv.png"})}),a("div",{css:I,children:a("div",{css:$,children:"在線KTV"})}),a("div",{css:W,children:"線上正版曲庫K歌房"})]}),x("a",{href:"#",target:"_blank",css:ee,children:[a("div",{css:F,children:a("img",{src:"https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/product/pic_game.png"})}),a("div",{css:I,children:a("div",{css:$,children:"小遊戲"})}),a("div",{css:W,children:"遊戲化互動玩法升級"})]}),x("a",{href:"#",target:"_blank",css:ee,children:[a("div",{css:F,children:a("img",{src:"https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/product/pic_avatar.png"})}),a("div",{css:I,children:a("div",{css:$,children:"Avatar 虛擬形象"})}),a("div",{css:W,children:"實時互動的虛擬形象引擎"})]}),x("a",{href:"#",target:"_blank",css:ee,children:[a("div",{css:F,children:a("img",{src:"https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/official-website/zego/digitalHuman/app/banner_shuzhiren%20.png"})}),a("div",{css:I,children:a("div",{css:$,children:"數字人"})}),a("div",{css:W,children:"提效視頻創作，降低直播成本"})]})]})]}),a("div",{css:Ue})]})}),a("div",{css:g,children:a("span",{children:"體驗aPP"})}),a("div",{css:g,children:a("span",{children:"產業中心"})}),a("div",{css:g,children:a("span",{children:"價格"})})]}),x("div",{css:h,children:[x("div",{css:v,children:[a(R0,{css:y}),a("span",{css:S,children:"聯繫我們"})]}),a("a",{href:"#",target:"_blank",css:w,children:"登錄/註冊"})]})]})})})}),a("div",{css:_,children:a("div",{css:f,children:x("div",{css:u,children:[a("a",{href:"#",children:a("div",{children:"NU"})}),x("div",{css:p,children:[a("img",{css:b,src:"https://www.zego.im/_nuxt/img/b5a8986.png"}),a("div",{css:k})]})]})})}),a("div",{})]})})})};var j0={},_h={},Yo={},zh={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=t;e.default=n})(zh);var I0="Expected a function",yu=0/0,$0="[object Symbol]",A0=/^\s+|\s+$/g,D0=/^[-+]0x[0-9a-f]+$/i,H0=/^0b[01]+$/i,W0=/^0o[0-7]+$/i,U0=parseInt,B0=typeof Jr=="object"&&Jr&&Jr.Object===Object&&Jr,V0=typeof self=="object"&&self&&self.Object===Object&&self,Q0=B0||V0||Function("return this")(),Y0=Object.prototype,K0=Y0.toString,G0=Math.max,X0=Math.min,_l=function(){return Q0.Date.now()};function q0(e,t,n){var r,i,o,l,s,c,d=0,g=!1,h=!1,v=!0;if(typeof e!="function")throw new TypeError(I0);t=xu(t)||0,La(n)&&(g=!!n.leading,h="maxWait"in n,o=h?G0(xu(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v);function S(C){var z=r,P=i;return r=i=void 0,d=C,l=e.apply(P,z),l}function y(C){return d=C,s=setTimeout(f,t),g?S(C):l}function w(C){var z=C-c,P=C-d,E=t-z;return h?X0(E,o-P):E}function _(C){var z=C-c,P=C-d;return c===void 0||z>=t||z<0||h&&P>=o}function f(){var C=_l();if(_(C))return u(C);s=setTimeout(f,w(C))}function u(C){return s=void 0,v&&r?S(C):(r=i=void 0,l)}function p(){s!==void 0&&clearTimeout(s),d=0,r=c=i=s=void 0}function b(){return s===void 0?l:u(_l())}function k(){var C=_l(),z=_(C);if(r=arguments,i=this,c=C,z){if(s===void 0)return y(c);if(h)return s=setTimeout(f,t),S(c)}return s===void 0&&(s=setTimeout(f,t)),l}return k.cancel=p,k.flush=b,k}function La(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Z0(e){return!!e&&typeof e=="object"}function J0(e){return typeof e=="symbol"||Z0(e)&&K0.call(e)==$0}function xu(e){if(typeof e=="number")return e;if(J0(e))return yu;if(La(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=La(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(A0,"");var n=H0.test(e);return n||W0.test(e)?U0(e.slice(2),n?2:8):D0.test(e)?yu:+e}var ev=q0,Oh={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var l=typeof o;if(l==="string"||l==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var s=n.apply(null,o);s&&r.push(s)}}else if(l==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var c in o)t.call(o,c)&&o[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Oh);var Ko=Oh.exports,L={};Object.defineProperty(L,"__esModule",{value:!0});L.checkSpecKeys=L.checkNavigable=L.changeSlide=L.canUseDOM=L.canGoNext=void 0;L.clamp=Eh;L.swipeStart=L.swipeMove=L.swipeEnd=L.slidesOnRight=L.slidesOnLeft=L.slideHandler=L.siblingDirection=L.safePreventDefault=L.lazyStartIndex=L.lazySlidesOnRight=L.lazySlidesOnLeft=L.lazyEndIndex=L.keyHandler=L.initializedState=L.getWidth=L.getTrackLeft=L.getTrackCSS=L.getTrackAnimateCSS=L.getTotalSlides=L.getSwipeDirection=L.getSlideCount=L.getRequiredLazySlides=L.getPreClones=L.getPostClones=L.getOnDemandLazySlides=L.getNavigableIndexes=L.getHeight=L.extractObject=void 0;var tv=nv(V);function nv(e){return e&&e.__esModule?e:{default:e}}function bu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bu(Object(n),!0).forEach(function(r){rv(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rv(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Eh(e,t,n){return Math.max(t,Math.min(e,n))}var cn=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()};L.safePreventDefault=cn;var Gs=function(t){for(var n=[],r=Xs(t),i=qs(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};L.getOnDemandLazySlides=Gs;var iv=function(t){for(var n=[],r=Xs(t),i=qs(t),o=r;o<i;o++)n.push(o);return n};L.getRequiredLazySlides=iv;var Xs=function(t){return t.currentSlide-Th(t)};L.lazyStartIndex=Xs;var qs=function(t){return t.currentSlide+Fh(t)};L.lazyEndIndex=qs;var Th=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0};L.lazySlidesOnLeft=Th;var Fh=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow};L.lazySlidesOnRight=Fh;var oo=function(t){return t&&t.offsetWidth||0};L.getWidth=oo;var Zs=function(t){return t&&t.offsetHeight||0};L.getHeight=Zs;var Js=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"};L.getSwipeDirection=Js;var ec=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};L.canGoNext=ec;var ov=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};L.extractObject=ov;var lv=function(t){var n=tv.default.Children.count(t.children),r=t.listRef,i=Math.ceil(oo(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(oo(o)),s;if(t.vertical)s=i;else{var c=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(c*=i/100),s=Math.ceil((i-c)/t.slidesToShow)}var d=r&&Zs(r.querySelector('[data-index="0"]')),g=d*t.slidesToShow,h=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(h=n-1-t.initialSlide);var v=t.lazyLoadedList||[],S=Gs(re(re({},t),{},{currentSlide:h,lazyLoadedList:v}));v=v.concat(S);var y={slideCount:n,slideWidth:s,listWidth:i,trackWidth:l,currentSlide:h,slideHeight:d,listHeight:g,lazyLoadedList:v};return t.autoplaying===null&&t.autoplay&&(y.autoplaying="playing"),y};L.initializedState=lv;var av=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,s=t.slideCount,c=t.lazyLoad,d=t.currentSlide,g=t.centerMode,h=t.slidesToScroll,v=t.slidesToShow,S=t.useCSS,y=t.lazyLoadedList;if(n&&r)return{};var w=l,_,f,u,p={},b={},k=o?l:Eh(l,0,s-1);if(i){if(!o&&(l<0||l>=s))return{};l<0?w=l+s:l>=s&&(w=l-s),c&&y.indexOf(w)<0&&(y=y.concat(w)),p={animating:!0,currentSlide:w,lazyLoadedList:y,targetSlide:w},b={animating:!1,targetSlide:w}}else _=w,w<0?(_=w+s,o?s%h!==0&&(_=s-s%h):_=0):!ec(t)&&w>d?w=_=d:g&&w>=s?(w=o?s:s-1,_=o?0:s-1):w>=s&&(_=w-s,o?s%h!==0&&(_=0):_=s-v),!o&&w+v>=s&&(_=s-v),f=Vr(re(re({},t),{},{slideIndex:w})),u=Vr(re(re({},t),{},{slideIndex:_})),o||(f===u&&(w=_),f=u),c&&(y=y.concat(Gs(re(re({},t),{},{currentSlide:w})))),S?(p={animating:!0,currentSlide:_,trackStyle:tc(re(re({},t),{},{left:f})),lazyLoadedList:y,targetSlide:k},b={animating:!1,currentSlide:_,trackStyle:Br(re(re({},t),{},{left:u})),swipeLeft:null,targetSlide:k}):p={currentSlide:_,trackStyle:Br(re(re({},t),{},{left:u})),lazyLoadedList:y,targetSlide:k};return{state:p,nextState:b}};L.slideHandler=av;var sv=function(t,n){var r,i,o,l,s,c=t.slidesToScroll,d=t.slidesToShow,g=t.slideCount,h=t.currentSlide,v=t.targetSlide,S=t.lazyLoad,y=t.infinite;if(l=g%c!==0,r=l?0:(g-h)%c,n.message==="previous")o=r===0?c:d-r,s=h-o,S&&!y&&(i=h-o,s=i===-1?g-1:i),y||(s=v-c);else if(n.message==="next")o=r===0?c:r,s=h+o,S&&!y&&(s=(h+c)%g+r),y||(s=v+c);else if(n.message==="dots")s=n.index*n.slidesToScroll;else if(n.message==="children"){if(s=n.index,y){var w=Nh(re(re({},t),{},{targetSlide:s}));s>n.currentSlide&&w==="left"?s=s-g:s<n.currentSlide&&w==="right"&&(s=s+g)}}else n.message==="index"&&(s=Number(n.index));return s};L.changeSlide=sv;var cv=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};L.keyHandler=cv;var uv=function(t,n,r){return t.target.tagName==="IMG"&&cn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};L.swipeStart=uv;var dv=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,s=n.verticalSwiping,c=n.rtl,d=n.currentSlide,g=n.edgeFriction,h=n.edgeDragged,v=n.onEdge,S=n.swiped,y=n.swiping,w=n.slideCount,_=n.slidesToScroll,f=n.infinite,u=n.touchObject,p=n.swipeEvent,b=n.listHeight,k=n.listWidth;if(!r){if(i)return cn(t);o&&l&&s&&cn(t);var C,z={},P=Vr(n);u.curX=t.touches?t.touches[0].pageX:t.clientX,u.curY=t.touches?t.touches[0].pageY:t.clientY,u.swipeLength=Math.round(Math.sqrt(Math.pow(u.curX-u.startX,2)));var E=Math.round(Math.sqrt(Math.pow(u.curY-u.startY,2)));if(!s&&!y&&E>10)return{scrolling:!0};s&&(u.swipeLength=E);var O=(c?-1:1)*(u.curX>u.startX?1:-1);s&&(O=u.curY>u.startY?1:-1);var N=Math.ceil(w/_),M=Js(n.touchObject,s),j=u.swipeLength;return f||(d===0&&(M==="right"||M==="down")||d+1>=N&&(M==="left"||M==="up")||!ec(n)&&(M==="left"||M==="up"))&&(j=u.swipeLength*g,h===!1&&v&&(v(M),z.edgeDragged=!0)),!S&&p&&(p(M),z.swiped=!0),o?C=P+j*(b/k)*O:c?C=P-j*O:C=P+j*O,s&&(C=P+j*O),z=re(re({},z),{},{touchObject:u,swipeLeft:C,trackStyle:Br(re(re({},n),{},{left:C}))}),Math.abs(u.curX-u.startX)<Math.abs(u.curY-u.startY)*.8||u.swipeLength>10&&(z.swiping=!0,cn(t)),z}};L.swipeMove=dv;var fv=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,s=n.touchThreshold,c=n.verticalSwiping,d=n.listHeight,g=n.swipeToSlide,h=n.scrolling,v=n.onSwipe,S=n.targetSlide,y=n.currentSlide,w=n.infinite;if(!r)return i&&cn(t),{};var _=c?d/s:l/s,f=Js(o,c),u={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(h||!o.swipeLength)return u;if(o.swipeLength>_){cn(t),v&&v(f);var p,b,k=w?y:S;switch(f){case"left":case"up":b=k+Na(n),p=g?Ra(n,b):b,u.currentDirection=0;break;case"right":case"down":b=k-Na(n),p=g?Ra(n,b):b,u.currentDirection=1;break;default:p=k}u.triggerSlideHandler=p}else{var C=Vr(n);u.trackStyle=tc(re(re({},n),{},{left:C}))}return u};L.swipeEnd=fv;var Mh=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o};L.getNavigableIndexes=Mh;var Ra=function(t,n){var r=Mh(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n};L.checkNavigable=Ra;var Na=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(c){if(t.vertical){if(c.offsetTop+Zs(c)/2>t.swipeLeft*-1)return r=c,!1}else if(c.offsetLeft-n+oo(c)/2>t.swipeLeft*-1)return r=c,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,s=Math.abs(r.dataset.index-l)||1;return s}else return t.slidesToScroll};L.getSlideCount=Na;var Go=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)};L.checkSpecKeys=Go;var Br=function(t){Go(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=Rh(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",c=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=re(re({},o),{},{WebkitTransform:l,transform:s,msTransform:c})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o};L.getTrackCSS=Br;var tc=function(t){Go(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Br(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n};L.getTrackAnimateCSS=tc;var Vr=function(t){if(t.unslick)return 0;Go(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,s=t.slidesToShow,c=t.slidesToScroll,d=t.slideWidth,g=t.listWidth,h=t.variableWidth,v=t.slideHeight,S=t.fade,y=t.vertical,w=0,_,f,u=0;if(S||t.slideCount===1)return 0;var p=0;if(i?(p=-kr(t),l%c!==0&&n+c>l&&(p=-(n>l?s-(n-l):l%c)),o&&(p+=parseInt(s/2))):(l%c!==0&&n+c>l&&(p=s-l%c),o&&(p=parseInt(s/2))),w=p*d,u=p*v,y?_=n*v*-1+u:_=n*d*-1+w,h===!0){var b,k=r&&r.node;if(b=n+kr(t),f=k&&k.childNodes[b],_=f?f.offsetLeft*-1:0,o===!0){b=i?n+kr(t):n,f=k&&k.children[b],_=0;for(var C=0;C<b;C++)_-=k&&k.children[C]&&k.children[C].offsetWidth;_-=parseInt(t.centerPadding),_+=f&&(g-f.offsetWidth)/2}}return _};L.getTrackLeft=Vr;var kr=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)};L.getPreClones=kr;var Lh=function(t){return t.unslick||!t.infinite?0:t.slideCount};L.getPostClones=Lh;var Rh=function(t){return t.slideCount===1?1:kr(t)+t.slideCount+Lh(t)};L.getTotalSlides=Rh;var Nh=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+jh(t)?"left":"right":t.targetSlide<t.currentSlide-Ih(t)?"right":"left"};L.siblingDirection=Nh;var jh=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1};L.slidesOnRight=jh;var Ih=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};L.slidesOnLeft=Ih;var hv=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};L.canUseDOM=hv;var Xo={};function ja(e){"@babel/helpers - typeof";return ja=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ja(e)}Object.defineProperty(Xo,"__esModule",{value:!0});Xo.Track=void 0;var jt=$h(V),zl=$h(Ko),Ol=L;function $h(e){return e&&e.__esModule?e:{default:e}}function Ia(){return Ia=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ia.apply(this,arguments)}function pv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Su(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function mv(e,t,n){return t&&Su(e.prototype,t),n&&Su(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function gv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$a(e,t)}function $a(e,t){return $a=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},$a(e,t)}function vv(e){var t=yv();return function(){var r=lo(e),i;if(t){var o=lo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return wv(this,i)}}function wv(e,t){if(t&&(ja(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Aa(e)}function Aa(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function yv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function lo(e){return lo=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},lo(e)}function ku(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ku(Object(n),!0).forEach(function(r){Da(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ku(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Da(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var El=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var s;t.targetSlide<0?s=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?s=t.targetSlide-t.slideCount:s=t.targetSlide;var c=l===s;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":c}},xv=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},Tl=function(t,n){return t.key||n},bv=function(t){var n,r=[],i=[],o=[],l=jt.default.Children.count(t.children),s=(0,Ol.lazyStartIndex)(t),c=(0,Ol.lazyEndIndex)(t);return jt.default.Children.forEach(t.children,function(d,g){var h,v={message:"children",index:g,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(g)>=0?h=d:h=jt.default.createElement("div",null);var S=xv(je(je({},t),{},{index:g})),y=h.props.className||"",w=El(je(je({},t),{},{index:g}));if(r.push(jt.default.cloneElement(h,{key:"original"+Tl(h,g),"data-index":g,className:(0,zl.default)(w,y),tabIndex:"-1","aria-hidden":!w["slick-active"],style:je(je({outline:"none"},h.props.style||{}),S),onClick:function(u){h.props&&h.props.onClick&&h.props.onClick(u),t.focusOnSelect&&t.focusOnSelect(v)}})),t.infinite&&t.fade===!1){var _=l-g;_<=(0,Ol.getPreClones)(t)&&l!==t.slidesToShow&&(n=-_,n>=s&&(h=d),w=El(je(je({},t),{},{index:n})),i.push(jt.default.cloneElement(h,{key:"precloned"+Tl(h,n),"data-index":n,tabIndex:"-1",className:(0,zl.default)(w,y),"aria-hidden":!w["slick-active"],style:je(je({},h.props.style||{}),S),onClick:function(u){h.props&&h.props.onClick&&h.props.onClick(u),t.focusOnSelect&&t.focusOnSelect(v)}}))),l!==t.slidesToShow&&(n=l+g,n<c&&(h=d),w=El(je(je({},t),{},{index:n})),o.push(jt.default.cloneElement(h,{key:"postcloned"+Tl(h,n),"data-index":n,tabIndex:"-1",className:(0,zl.default)(w,y),"aria-hidden":!w["slick-active"],style:je(je({},h.props.style||{}),S),onClick:function(u){h.props&&h.props.onClick&&h.props.onClick(u),t.focusOnSelect&&t.focusOnSelect(v)}})))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)},Sv=function(e){gv(n,e);var t=vv(n);function n(){var r;pv(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),Da(Aa(r),"node",null),Da(Aa(r),"handleRef",function(s){r.node=s}),r}return mv(n,[{key:"render",value:function(){var i=bv(this.props),o=this.props,l=o.onMouseEnter,s=o.onMouseOver,c=o.onMouseLeave,d={onMouseEnter:l,onMouseOver:s,onMouseLeave:c};return jt.default.createElement("div",Ia({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},d),i)}}]),n}(jt.default.PureComponent);Xo.Track=Sv;var qo={};function Ha(e){"@babel/helpers - typeof";return Ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ha(e)}Object.defineProperty(qo,"__esModule",{value:!0});qo.Dots=void 0;var wi=Ah(V),kv=Ah(Ko),Cu=L;function Ah(e){return e&&e.__esModule?e:{default:e}}function Pu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Cv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pu(Object(n),!0).forEach(function(r){Pv(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Pv(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function zv(e,t,n){return t&&_u(e.prototype,t),n&&_u(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ov(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Wa(e,t)}function Wa(e,t){return Wa=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Wa(e,t)}function Ev(e){var t=Mv();return function(){var r=ao(e),i;if(t){var o=ao(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Tv(this,i)}}function Tv(e,t){if(t&&(Ha(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Fv(e)}function Fv(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Mv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ao(e){return ao=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ao(e)}var Lv=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n},Rv=function(e){Ov(n,e);var t=Ev(n);function n(){return _v(this,n),t.apply(this,arguments)}return zv(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,s=i.onMouseLeave,c=i.infinite,d=i.slidesToScroll,g=i.slidesToShow,h=i.slideCount,v=i.currentSlide,S=Lv({slideCount:h,slidesToScroll:d,slidesToShow:g,infinite:c}),y={onMouseEnter:o,onMouseOver:l,onMouseLeave:s},w=[],_=0;_<S;_++){var f=(_+1)*d-1,u=c?f:(0,Cu.clamp)(f,0,h-1),p=u-(d-1),b=c?p:(0,Cu.clamp)(p,0,h-1),k=(0,kv.default)({"slick-active":c?v>=b&&v<=u:v===b}),C={message:"dots",index:_,slidesToScroll:d,currentSlide:v},z=this.clickHandler.bind(this,C);w=w.concat(wi.default.createElement("li",{key:_,className:k},wi.default.cloneElement(this.props.customPaging(_),{onClick:z})))}return wi.default.cloneElement(this.props.appendDots(w),Cv({className:this.props.dotsClass},y))}}]),n}(wi.default.PureComponent);qo.Dots=Rv;var Gn={};function Ua(e){"@babel/helpers - typeof";return Ua=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ua(e)}Object.defineProperty(Gn,"__esModule",{value:!0});Gn.PrevArrow=Gn.NextArrow=void 0;var Dn=Hh(V),Dh=Hh(Ko),Nv=L;function Hh(e){return e&&e.__esModule?e:{default:e}}function so(){return so=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(this,arguments)}function zu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function co(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zu(Object(n),!0).forEach(function(r){jv(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jv(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wh(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ou(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Uh(e,t,n){return t&&Ou(e.prototype,t),n&&Ou(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Bh(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ba(e,t)}function Ba(e,t){return Ba=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ba(e,t)}function Vh(e){var t=Av();return function(){var r=uo(e),i;if(t){var o=uo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Iv(this,i)}}function Iv(e,t){if(t&&(Ua(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $v(e)}function $v(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Av(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function uo(e){return uo=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},uo(e)}var Dv=function(e){Bh(n,e);var t=Vh(n);function n(){return Wh(this,n),t.apply(this,arguments)}return Uh(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,Dh.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},c;return this.props.prevArrow?c=Dn.default.cloneElement(this.props.prevArrow,co(co({},l),s)):c=Dn.default.createElement("button",so({key:"0",type:"button"},l)," ","Previous"),c}}]),n}(Dn.default.PureComponent);Gn.PrevArrow=Dv;var Hv=function(e){Bh(n,e);var t=Vh(n);function n(){return Wh(this,n),t.apply(this,arguments)}return Uh(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,Nv.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,Dh.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},c;return this.props.nextArrow?c=Dn.default.cloneElement(this.props.nextArrow,co(co({},l),s)):c=Dn.default.createElement("button",so({key:"1",type:"button"},l)," ","Next"),c}}]),n}(Dn.default.PureComponent);Gn.NextArrow=Hv;var Qh=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),Va=typeof window<"u"&&typeof document<"u"&&window.document===document,fo=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Wv=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(fo):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Uv=2;function Bv(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&s()}function l(){Wv(o)}function s(){var c=Date.now();if(n){if(c-i<Uv)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=c}return s}var Vv=20,Qv=["top","right","bottom","left","width","height","size","weight"],Yv=typeof MutationObserver<"u",Kv=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Bv(this.refresh.bind(this),Vv)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Va||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Yv?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Va||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=Qv.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Yh=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},Xn=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||fo},Kh=Zo(0,0,0,0);function ho(e){return parseFloat(e)||0}function Eu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+ho(o)},0)}function Gv(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=ho(l)}return n}function Xv(e){var t=e.getBBox();return Zo(0,0,t.width,t.height)}function qv(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Kh;var r=Xn(e).getComputedStyle(e),i=Gv(r),o=i.left+i.right,l=i.top+i.bottom,s=ho(r.width),c=ho(r.height);if(r.boxSizing==="border-box"&&(Math.round(s+o)!==t&&(s-=Eu(r,"left","right")+o),Math.round(c+l)!==n&&(c-=Eu(r,"top","bottom")+l)),!Jv(e)){var d=Math.round(s+o)-t,g=Math.round(c+l)-n;Math.abs(d)!==1&&(s-=d),Math.abs(g)!==1&&(c-=g)}return Zo(i.left,i.top,s,c)}var Zv=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Xn(e).SVGGraphicsElement}:function(e){return e instanceof Xn(e).SVGElement&&typeof e.getBBox=="function"}}();function Jv(e){return e===Xn(e).document.documentElement}function ew(e){return Va?Zv(e)?Xv(e):qv(e):Kh}function tw(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return Yh(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function Zo(e,t,n,r){return{x:e,y:t,width:n,height:r}}var nw=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Zo(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=ew(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),rw=function(){function e(t,n){var r=tw(n);Yh(this,{target:t,contentRect:r})}return e}(),iw=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Qh,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Xn(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new nw(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Xn(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new rw(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Gh=typeof WeakMap<"u"?new WeakMap:new Qh,Xh=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Kv.getInstance(),r=new iw(t,n,this);Gh.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Xh.prototype[e]=function(){var t;return(t=Gh.get(this))[e].apply(t,arguments)}});var ow=function(){return typeof fo.ResizeObserver<"u"?fo.ResizeObserver:Xh}();const lw=Object.freeze(Object.defineProperty({__proto__:null,default:ow},Symbol.toStringTag,{value:"Module"})),aw=hp(lw);Object.defineProperty(Yo,"__esModule",{value:!0});Yo.InnerSlider=void 0;var Fe=Zr(V),sw=Zr(zh),cw=Zr(ev),uw=Zr(Ko),ae=L,dw=Xo,fw=qo,Tu=Gn,hw=Zr(aw);function Zr(e){return e&&e.__esModule?e:{default:e}}function po(e){"@babel/helpers - typeof";return po=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},po(e)}function mo(){return mo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mo.apply(this,arguments)}function pw(e,t){if(e==null)return{};var n=mw(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function mw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Fu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fu(Object(n),!0).forEach(function(r){B(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Mu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function vw(e,t,n){return t&&Mu(e.prototype,t),n&&Mu(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ww(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qa(e,t)}function Qa(e,t){return Qa=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Qa(e,t)}function yw(e){var t=bw();return function(){var r=go(e),i;if(t){var o=go(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return xw(this,i)}}function xw(e,t){if(t&&(po(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return U(e)}function U(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function go(e){return go=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},go(e)}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Sw=function(e){ww(n,e);var t=yw(n);function n(r){var i;gw(this,n),i=t.call(this,r),B(U(i),"listRefHandler",function(l){return i.list=l}),B(U(i),"trackRefHandler",function(l){return i.track=l}),B(U(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,ae.getHeight)(l)+"px"}}),B(U(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,ae.getOnDemandLazySlides)(H(H({},i.props),i.state));l.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var s=H({listRef:i.list,trackRef:i.track},i.props);i.updateState(s,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new hw.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(c){c.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,c.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),B(U(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),B(U(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var s=(0,ae.getOnDemandLazySlides)(H(H({},i.props),i.state));s.length>0&&(i.setState(function(g){return{lazyLoadedList:g.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}i.adaptHeight();var c=H(H({listRef:i.list,trackRef:i.track},i.props),i.state),d=i.didPropsChange(l);d&&i.updateState(c,d,function(){i.state.currentSlide>=Fe.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Fe.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),B(U(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,cw.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),B(U(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,s=!!(i.track&&i.track.node);if(s){var c=H(H({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(c,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),B(U(i),"updateState",function(l,s,c){var d=(0,ae.initializedState)(l);l=H(H(H({},l),d),{},{slideIndex:d.currentSlide});var g=(0,ae.getTrackLeft)(l);l=H(H({},l),{},{left:g});var h=(0,ae.getTrackCSS)(l);(s||Fe.default.Children.count(i.props.children)!==Fe.default.Children.count(l.children))&&(d.trackStyle=h),i.setState(d,c)}),B(U(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,s=0,c=[],d=(0,ae.getPreClones)(H(H(H({},i.props),i.state),{},{slideCount:i.props.children.length})),g=(0,ae.getPostClones)(H(H(H({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(z){c.push(z.props.style.width),l+=z.props.style.width});for(var h=0;h<d;h++)s+=c[c.length-1-h],l+=c[c.length-1-h];for(var v=0;v<g;v++)l+=c[v];for(var S=0;S<i.state.currentSlide;S++)s+=c[S];var y={width:l+"px",left:-s+"px"};if(i.props.centerMode){var w="".concat(c[i.state.currentSlide],"px");y.left="calc(".concat(y.left," + (100% - ").concat(w,") / 2 ) ")}return{trackStyle:y}}var _=Fe.default.Children.count(i.props.children),f=H(H(H({},i.props),i.state),{},{slideCount:_}),u=(0,ae.getPreClones)(f)+(0,ae.getPostClones)(f)+_,p=100/i.props.slidesToShow*u,b=100/u,k=-b*((0,ae.getPreClones)(f)+i.state.currentSlide)*p/100;i.props.centerMode&&(k+=(100-b*p/100)/2);var C={width:p+"%",left:k+"%"};return{slideWidth:b+"%",trackStyle:C}}),B(U(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],s=l.length,c=0;Array.prototype.forEach.call(l,function(d){var g=function(){return++c&&c>=s&&i.onWindowResized()};if(!d.onclick)d.onclick=function(){return d.parentNode.focus()};else{var h=d.onclick;d.onclick=function(){h(),d.parentNode.focus()}}d.onload||(i.props.lazyLoad?d.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(d.onload=g,d.onerror=function(){g(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),B(U(i),"progressiveLazyLoad",function(){for(var l=[],s=H(H({},i.props),i.state),c=i.state.currentSlide;c<i.state.slideCount+(0,ae.getPostClones)(s);c++)if(i.state.lazyLoadedList.indexOf(c)<0){l.push(c);break}for(var d=i.state.currentSlide-1;d>=-(0,ae.getPreClones)(s);d--)if(i.state.lazyLoadedList.indexOf(d)<0){l.push(d);break}l.length>0?(i.setState(function(g){return{lazyLoadedList:g.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),B(U(i),"slideHandler",function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=i.props,d=c.asNavFor,g=c.beforeChange,h=c.onLazyLoad,v=c.speed,S=c.afterChange,y=i.state.currentSlide,w=(0,ae.slideHandler)(H(H(H({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!s})),_=w.state,f=w.nextState;if(_){g&&g(y,_.currentSlide);var u=_.lazyLoadedList.filter(function(p){return i.state.lazyLoadedList.indexOf(p)<0});h&&u.length>0&&h(u),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),S&&S(y),delete i.animationEndCallback),i.setState(_,function(){d&&i.asNavForIndex!==l&&(i.asNavForIndex=l,d.innerSlider.slideHandler(l)),f&&(i.animationEndCallback=setTimeout(function(){var p=f.animating,b=pw(f,["animating"]);i.setState(b,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:p})},10)),S&&S(_.currentSlide),delete i.animationEndCallback})},v))})}}),B(U(i),"changeSlide",function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=H(H({},i.props),i.state),d=(0,ae.changeSlide)(c,l);if(!(d!==0&&!d)&&(s===!0?i.slideHandler(d,s):i.slideHandler(d),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var g=i.list.querySelectorAll(".slick-current");g[0]&&g[0].focus()}}),B(U(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),B(U(i),"keyHandler",function(l){var s=(0,ae.keyHandler)(l,i.props.accessibility,i.props.rtl);s!==""&&i.changeSlide({message:s})}),B(U(i),"selectHandler",function(l){i.changeSlide(l)}),B(U(i),"disableBodyScroll",function(){var l=function(c){c=c||window.event,c.preventDefault&&c.preventDefault(),c.returnValue=!1};window.ontouchmove=l}),B(U(i),"enableBodyScroll",function(){window.ontouchmove=null}),B(U(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var s=(0,ae.swipeStart)(l,i.props.swipe,i.props.draggable);s!==""&&i.setState(s)}),B(U(i),"swipeMove",function(l){var s=(0,ae.swipeMove)(l,H(H(H({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));s&&(s.swiping&&(i.clickable=!1),i.setState(s))}),B(U(i),"swipeEnd",function(l){var s=(0,ae.swipeEnd)(l,H(H(H({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(s){var c=s.triggerSlideHandler;delete s.triggerSlideHandler,i.setState(s),c!==void 0&&(i.slideHandler(c),i.props.verticalSwiping&&i.enableBodyScroll())}}),B(U(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),B(U(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),B(U(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),B(U(i),"slickGoTo",function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},s)},0))}),B(U(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,ae.canGoNext)(H(H({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),B(U(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var s=i.state.autoplaying;if(l==="update"){if(s==="hovered"||s==="focused"||s==="paused")return}else if(l==="leave"){if(s==="paused"||s==="focused")return}else if(l==="blur"&&(s==="paused"||s==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),B(U(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var s=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(s==="hovered"||s==="playing")&&i.setState({autoplaying:"focused"}):s==="playing"&&i.setState({autoplaying:"hovered"})}),B(U(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),B(U(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),B(U(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),B(U(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),B(U(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),B(U(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),B(U(i),"render",function(){var l=(0,uw.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),s=H(H({},i.props),i.state),c=(0,ae.extractObject)(s,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),d=i.props.pauseOnHover;c=H(H({},c),{},{onMouseEnter:d?i.onTrackOver:null,onMouseLeave:d?i.onTrackLeave:null,onMouseOver:d?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var g;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var h=(0,ae.extractObject)(s,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),v=i.props.pauseOnDotsHover;h=H(H({},h),{},{clickHandler:i.changeSlide,onMouseEnter:v?i.onDotsLeave:null,onMouseOver:v?i.onDotsOver:null,onMouseLeave:v?i.onDotsLeave:null}),g=Fe.default.createElement(fw.Dots,h)}var S,y,w=(0,ae.extractObject)(s,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);w.clickHandler=i.changeSlide,i.props.arrows&&(S=Fe.default.createElement(Tu.PrevArrow,w),y=Fe.default.createElement(Tu.NextArrow,w));var _=null;i.props.vertical&&(_={height:i.state.listHeight});var f=null;i.props.vertical===!1?i.props.centerMode===!0&&(f={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(f={padding:i.props.centerPadding+" 0px"});var u=H(H({},_),f),p=i.props.touchMove,b={className:"slick-list",style:u,onClick:i.clickHandler,onMouseDown:p?i.swipeStart:null,onMouseMove:i.state.dragging&&p?i.swipeMove:null,onMouseUp:p?i.swipeEnd:null,onMouseLeave:i.state.dragging&&p?i.swipeEnd:null,onTouchStart:p?i.swipeStart:null,onTouchMove:i.state.dragging&&p?i.swipeMove:null,onTouchEnd:p?i.touchEnd:null,onTouchCancel:i.state.dragging&&p?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},k={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(b={className:"slick-list"},k={className:l}),Fe.default.createElement("div",k,i.props.unslick?"":S,Fe.default.createElement("div",mo({ref:i.listRefHandler},b),Fe.default.createElement(dw.Track,mo({ref:i.trackRefHandler},c),i.props.children)),i.props.unslick?"":y,i.props.unslick?"":g)}),i.list=null,i.track=null,i.state=H(H({},sw.default),{},{currentSlide:i.props.initialSlide,slideCount:Fe.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=H(H({},i.state),o),i}return vw(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,s=Object.keys(this.props);l<s.length;l++){var c=s[l];if(!i.hasOwnProperty(c)){o=!0;break}if(!(po(i[c])==="object"||typeof i[c]=="function")&&i[c]!==this.props[c]){o=!0;break}}return o||Fe.default.Children.count(this.props.children)!==Fe.default.Children.count(i.children)}}]),n}(Fe.default.Component);Yo.InnerSlider=Sw;var kw=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},Cw=kw,Pw=Cw,_w=function(e){var t=/[height|width]$/;return t.test(e)},Lu=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=Pw(r),_w(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},zw=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=Lu(n),r<e.length-1&&(t+=", ")}),t):Lu(e)},Ow=zw,qh={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(V);function n(o){return o&&o.__esModule?o:{default:o}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return t.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return t.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;e.default=i})(qh);var Fl,Ru;function Ew(){if(Ru)return Fl;Ru=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Fl=e,Fl}var Ml,Nu;function Zh(){if(Nu)return Ml;Nu=1;function e(r,i){var o=0,l=r.length,s;for(o;o<l&&(s=i(r[o],o),s!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Ml={isFunction:n,isArray:t,each:e},Ml}var Ll,ju;function Tw(){if(ju)return Ll;ju=1;var e=Ew(),t=Zh().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},Ll=n,Ll}var Rl,Iu;function Fw(){if(Iu)return Rl;Iu=1;var e=Tw(),t=Zh(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,s,c){var d=this.queries,g=c&&this.browserIsIncapable;return d[l]||(d[l]=new e(l,g)),r(s)&&(s={match:s}),i(s)||(s=[s]),n(s,function(h){r(h)&&(h={match:h}),d[l].addHandler(h)}),this},unregister:function(l,s){var c=this.queries[l];return c&&(s?c.removeHandler(s):(c.clear(),delete this.queries[l])),this}},Rl=o,Rl}var Nl,$u;function Mw(){if($u)return Nl;$u=1;var e=Fw();return Nl=new e,Nl}(function(e){function t(P){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},t(P)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(V),r=Yo,i=s(Ow),o=s(qh),l=L;function s(P){return P&&P.__esModule?P:{default:P}}function c(){return c=Object.assign||function(P){for(var E=1;E<arguments.length;E++){var O=arguments[E];for(var N in O)Object.prototype.hasOwnProperty.call(O,N)&&(P[N]=O[N])}return P},c.apply(this,arguments)}function d(P,E){var O=Object.keys(P);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(P);E&&(N=N.filter(function(M){return Object.getOwnPropertyDescriptor(P,M).enumerable})),O.push.apply(O,N)}return O}function g(P){for(var E=1;E<arguments.length;E++){var O=arguments[E]!=null?arguments[E]:{};E%2?d(Object(O),!0).forEach(function(N){k(P,N,O[N])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(O)):d(Object(O)).forEach(function(N){Object.defineProperty(P,N,Object.getOwnPropertyDescriptor(O,N))})}return P}function h(P,E){if(!(P instanceof E))throw new TypeError("Cannot call a class as a function")}function v(P,E){for(var O=0;O<E.length;O++){var N=E[O];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(P,N.key,N)}}function S(P,E,O){return E&&v(P.prototype,E),O&&v(P,O),Object.defineProperty(P,"prototype",{writable:!1}),P}function y(P,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function");P.prototype=Object.create(E&&E.prototype,{constructor:{value:P,writable:!0,configurable:!0}}),Object.defineProperty(P,"prototype",{writable:!1}),E&&w(P,E)}function w(P,E){return w=Object.setPrototypeOf||function(N,M){return N.__proto__=M,N},w(P,E)}function _(P){var E=p();return function(){var N=b(P),M;if(E){var j=b(this).constructor;M=Reflect.construct(N,arguments,j)}else M=N.apply(this,arguments);return f(this,M)}}function f(P,E){if(E&&(t(E)==="object"||typeof E=="function"))return E;if(E!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return u(P)}function u(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}function p(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function b(P){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(O){return O.__proto__||Object.getPrototypeOf(O)},b(P)}function k(P,E,O){return E in P?Object.defineProperty(P,E,{value:O,enumerable:!0,configurable:!0,writable:!0}):P[E]=O,P}var C=(0,l.canUseDOM)()&&Mw(),z=function(P){y(O,P);var E=_(O);function O(N){var M;return h(this,O),M=E.call(this,N),k(u(M),"innerSliderRefHandler",function(j){return M.innerSlider=j}),k(u(M),"slickPrev",function(){return M.innerSlider.slickPrev()}),k(u(M),"slickNext",function(){return M.innerSlider.slickNext()}),k(u(M),"slickGoTo",function(j){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return M.innerSlider.slickGoTo(j,D)}),k(u(M),"slickPause",function(){return M.innerSlider.pause("paused")}),k(u(M),"slickPlay",function(){return M.innerSlider.autoPlay("play")}),M.state={breakpoint:null},M._responsiveMediaHandlers=[],M}return S(O,[{key:"media",value:function(M,j){C.register(M,j),this._responsiveMediaHandlers.push({query:M,handler:j})}},{key:"componentDidMount",value:function(){var M=this;if(this.props.responsive){var j=this.props.responsive.map(function(A){return A.breakpoint});j.sort(function(A,oe){return A-oe}),j.forEach(function(A,oe){var ee;oe===0?ee=(0,i.default)({minWidth:0,maxWidth:A}):ee=(0,i.default)({minWidth:j[oe-1]+1,maxWidth:A}),(0,l.canUseDOM)()&&M.media(ee,function(){M.setState({breakpoint:A})})});var D=(0,i.default)({minWidth:j.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(D,function(){M.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(M){C.unregister(M.query,M.handler)})}},{key:"render",value:function(){var M=this,j,D;this.state.breakpoint?(D=this.props.responsive.filter(function(le){return le.breakpoint===M.state.breakpoint}),j=D[0].settings==="unslick"?"unslick":g(g(g({},o.default),this.props),D[0].settings)):j=g(g({},o.default),this.props),j.centerMode&&(j.slidesToScroll>1,j.slidesToScroll=1),j.fade&&(j.slidesToShow>1,j.slidesToScroll>1,j.slidesToShow=1,j.slidesToScroll=1);var A=n.default.Children.toArray(this.props.children);A=A.filter(function(le){return typeof le=="string"?!!le.trim():!!le}),j.variableWidth&&(j.rows>1||j.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),j.variableWidth=!1);for(var oe=[],ee=null,F=0;F<A.length;F+=j.rows*j.slidesPerRow){for(var I=[],$=F;$<F+j.rows*j.slidesPerRow;$+=j.slidesPerRow){for(var W=[],Y=$;Y<$+j.slidesPerRow&&(j.variableWidth&&A[Y].props.style&&(ee=A[Y].props.style.width),!(Y>=A.length));Y+=1)W.push(n.default.cloneElement(A[Y],{key:100*F+10*$+Y,tabIndex:-1,style:{width:"".concat(100/j.slidesPerRow,"%"),display:"inline-block"}}));I.push(n.default.createElement("div",{key:10*F+$},W))}j.variableWidth?oe.push(n.default.createElement("div",{key:F,style:{width:ee}},I)):oe.push(n.default.createElement("div",{key:F},I))}if(j==="unslick"){var Ue="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:Ue},A)}else oe.length<=j.slidesToShow&&(j.unslick=!0);return n.default.createElement(r.InnerSlider,c({style:this.props.style,ref:this.innerSliderRefHandler},j),oe)}}]),O}(n.default.Component);e.default=z})(_h);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(_h);function n(i){return i&&i.__esModule?i:{default:i}}var r=t.default;e.default=r})(j0);var Lw=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Rw=ch(function(e){return Lw.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Nw=Rw,jw=function(t){return t!=="theme"},Au=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Nw:jw},Du=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(l){return t.__emotion_forwardProp(l)&&o(l)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},Iw=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Ys(n,r,i),wh(function(){return gh(n,r,i)}),null},$w=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,l;n!==void 0&&(o=n.label,l=n.target);var s=Du(t,n,r),c=s||Au(i),d=!c("as");return function(){var g=arguments,h=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&h.push("label:"+o+";"),g[0]==null||g[0].raw===void 0)h.push.apply(h,g);else{h.push(g[0][0]);for(var v=g.length,S=1;S<v;S++)h.push(g[S],g[0][S])}var y=xh(function(w,_,f){var u=d&&w.as||i,p="",b=[],k=w;if(w.theme==null){k={};for(var C in w)k[C]=w[C];k.theme=V.useContext(bh)}typeof w.className=="string"?p=mh(_.registered,b,w.className):w.className!=null&&(p=w.className+" ");var z=Ks(h.concat(b),_.registered,k);p+=_.key+"-"+z.name,l!==void 0&&(p+=" "+l);var P=d&&s===void 0?Au(u):c,E={};for(var O in w)d&&O==="as"||P(O)&&(E[O]=w[O]);return E.className=p,E.ref=f,V.createElement(V.Fragment,null,V.createElement(Iw,{cache:_,serialized:z,isStringTag:typeof u=="string"}),V.createElement(u,E))});return y.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=h,y.__emotion_forwardProp=s,Object.defineProperty(y,"toString",{value:function(){return"."+l}}),y.withComponent=function(w,_){return e(w,Fa({},n,_,{shouldForwardProp:Du(y,_,!0)})).apply(void 0,h)},y}},Aw=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Hu=$w.bind();Aw.forEach(function(e){Hu[e]=Hu(e)});function Wu(e){return vn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]})(e)}function Dw(e){return vn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}}]})(e)}function Hw(e){return vn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"}}]})(e)}function Ww(e){return vn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm352 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 0 1 775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 0 0-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 0 0-8-8.4z"}}]})(e)}function Uw(e){return vn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]})(e)}const Bw=()=>{const e=m`
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    line-height: 56px;
    margin-bottom: 16px;
    @media screen and (max-width: 1440px){
        font-size: 2.083vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    color: #fff;
    line-height: 2.917vw;
    margin-bottom: 0.833vw;  
    }
    @media screen and (max-width: 750px){
        font-size: .48rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: .72rem;
    margin-bottom: 0.2rem;
    }
    
`,t=m`
    display: flex;
    
    div{
    margin-right:24px;
    width: 140px;
    height: 48px;
    border-radius: 24px;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #fff;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :first-of-type{
        background-color: white;
        color: #7e14ff;
        @media screen and (max-width: 1440px){
        
            width: 7.292vw;
    height: 2.5vw; 
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 1.25vw;
    background: #fff;
    box-shadow: 0 0.729vw 0.52vw 0 rgba(19,24,178,.1);
    border-radius: 1.25vw;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #7e14ff;
    line-height: 1.146vw;
        }
        @media screen and (max-width: 750px){
            background: #6f2aff;
    margin-right: 0.24rem;
    width: 2.08rem;
    height: 0.72rem;
    border-radius: 0.48rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .32rem;

        }
        
    }
    :nth-of-type(2){
        background: hsla(0,0%,100%,.2);
        color: white;
        @media screen and (max-width: 1440px){
            width: 7.292vw;
    height: 2.5vw;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 0.885vw;
    background: hsla(0,0%,100%,.2);
    border-radius: 1.25vw;
    border: 0.052vw solid #fff;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 1.146vw;}
    @media screen and (max-width: 750px){
        width: 2.08rem;
    height: 0.72rem;
    background: #fff;
    border-radius: 0.48rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #6a35e9;
    line-height: .32rem;
        }
    }
    }
    @media screen and (max-width: 750px){
        display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    margin-top: 8rem; 
    }
    
    
    
`,n=m`
    max-width: 430px;
    font-size: 20px;
    font-weight: 500;
    color: hsla(0,0%,100%,.8);
    line-height: 28px;
    margin-bottom: 60px;
    @media screen and (max-width: 1440px){
        max-width: 22.396vw;
    font-size: 1.042vw;
    font-family: PingFangSC-Regular,PingFang SC;
    color: hsla(0,0%,100%,.8);
    line-height: 1.458vw;
    margin-bottom: 3.125vw;
    }
    @media screen and (max-width: 750px){
        max-width: 100%;
        font-size: .28rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: hsla(0,0%,100%,.8);
    line-height: .44rem;  
    margin-bottom: 0;
    }
    
`,r=m`
    position: absolute;
    width: 648px;
    height: auto;
    right: -20px;
    bottom: 0;
    overflow: clip;
    animation: leftIn 300ms, fade 2s;
    @keyframes leftIn {
        from {
            transform: translate3d(20%, 0, 0);
        }
        to {
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @media screen and (max-width: 1440px){
        position: absolute;
    width: 33.75vw;
    height: auto;
    right: -1.1vw;
    bottom: -50px;
    }
    @media screen and (max-width: 750px){
        width: 100%;
    height: auto;
        bottom: 20px;
    }
    
    
`,i=m`
    animation: fade 2s;
    @media screen and (max-width: 750px){
        width: 6.84rem;
    height: 7.2rem;
    border-radius: 0.32rem;
    border: 0.02rem solid hsla(0,0%,100%,.1);
    padding: 0.64rem 1.18rem 0 0.48rem;
    background: rgba(133,107,255,.1);
    }
    @keyframes fade {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    `,o=m`
        @media screen and (max-width: 750px){
            width: 6.86rem;
    height: auto;
    margin: -4.68rem auto 0;
        }
    `;return x(de,{children:[x("div",{css:i,children:[a("div",{css:e,children:"實時表情互動"}),a("div",{css:n,children:"精準捕獲面部表情，基於52個基礎表情為杜，實時還原渲染表情隨動效果"})]}),a("div",{css:o,children:a("img",{css:r,src:"https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/img_live_characteristic2.png"})}),x("div",{css:t,children:[a("div",{children:"免費試用"}),a("div",{children:"方案諮詢"})]})]})},Vw=()=>{const e=m`
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    line-height: 56px;
    margin-bottom: 16px;
    @media screen and (max-width: 1440px){
        font-size: 2.083vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    color: #fff;
    line-height: 2.917vw;
    margin-bottom: 0.833vw;  
    }
    @media screen and (max-width: 750px){
        font-size: .48rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: .72rem;
    margin-bottom: 0.2rem;
    }
    
`,t=m`
    display: flex;
    
    div{
    margin-right:24px;
    width: 140px;
    height: 48px;
    border-radius: 24px;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #fff;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :first-of-type{
        background-color: white;
        color: #7e14ff;
        @media screen and (max-width: 1440px){
        
            width: 7.292vw;
    height: 2.5vw; 
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 1.25vw;
    background: #fff;
    box-shadow: 0 0.729vw 0.52vw 0 rgba(19,24,178,.1);
    border-radius: 1.25vw;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #7e14ff;
    line-height: 1.146vw;
        }
        @media screen and (max-width: 750px){
            background: #6f2aff;
    margin-right: 0.24rem;
    width: 2.08rem;
    height: 0.72rem;
    border-radius: 0.48rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .32rem;

        }
        
    }
    :nth-of-type(2){
        background: hsla(0,0%,100%,.2);
        color: white;
        @media screen and (max-width: 1440px){
            width: 7.292vw;
    height: 2.5vw;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 0.885vw;
    background: hsla(0,0%,100%,.2);
    border-radius: 1.25vw;
    border: 0.052vw solid #fff;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 1.146vw;}
    @media screen and (max-width: 750px){
        width: 2.08rem;
    height: 0.72rem;
    background: #fff;
    border-radius: 0.48rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #6a35e9;
    line-height: .32rem;
        }
    }
    }
    @media screen and (max-width: 750px){
        display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    margin-top: 8rem; 
    }
    
    
    
`,n=m`
    max-width: 430px;
    font-size: 20px;
    font-weight: 500;
    color: hsla(0,0%,100%,.8);
    line-height: 28px;
    margin-bottom: 60px;
    @media screen and (max-width: 1440px){
        max-width: 22.396vw;
    font-size: 1.042vw;
    font-family: PingFangSC-Regular,PingFang SC;
    color: hsla(0,0%,100%,.8);
    line-height: 1.458vw;
    margin-bottom: 3.125vw;
    }
    @media screen and (max-width: 750px){
        max-width: 100%;
        font-size: .28rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: hsla(0,0%,100%,.8);
    line-height: .44rem;  
    margin-bottom: 0;
    }
    
`,r=m`
    position: absolute;
    width: 648px;
    height: auto;
    right: -20px;
    bottom: 0;
    overflow: clip;
    animation: leftIn 300ms, fade 2s;
    @keyframes leftIn {
        from {
            transform: translate3d(20%, 0, 0);
        }
        to {
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @media screen and (max-width: 1440px){
        position: absolute;
    width: 33.75vw;
    height: auto;
    right: -1.1vw;
    bottom: -50px;
    }
    @media screen and (max-width: 750px){
        width: 100%;
    height: auto;
        bottom: 20px;
    }
    
    
`,i=m`
    animation: fade 2s;
    @media screen and (max-width: 750px){
        width: 6.84rem;
    height: 7.2rem;
    border-radius: 0.32rem;
    border: 0.02rem solid hsla(0,0%,100%,.1);
    padding: 0.64rem 1.18rem 0 0.48rem;
    background: rgba(133,107,255,.1);
    }
    @keyframes fade {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    `,o=m`
        @media screen and (max-width: 750px){
            width: 6.86rem;
    height: auto;
    margin: -4.68rem auto 0;
        }
    `;return x(de,{children:[x("article",{css:i,children:[a("div",{css:e,children:"個性虛擬形象"}),a("div",{css:n,children:"朔造全新的個性化虛擬形象，自由表達內心情感"})]}),a("div",{css:o,children:a("img",{css:r,src:"https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/img_live_characteristic1.png"})}),x("div",{css:t,children:[a("div",{children:"免費試用"}),a("div",{children:"方案諮詢"})]})]})},Qw=()=>{const e=m`
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    line-height: 56px;
    margin-bottom: 16px;
    @media screen and (max-width: 1440px){
        font-size: 2.083vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    color: #fff;
    line-height: 2.917vw;
    margin-bottom: 0.833vw;  
    }
    @media screen and (max-width: 750px){
        font-size: .48rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: .72rem;
    margin-bottom: 0.2rem;
    }
    
`,t=m`
    display: flex;
    
    div{
    margin-right:24px;
    width: 140px;
    height: 48px;
    border-radius: 24px;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #fff;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :first-of-type{
        background-color: white;
        color: #7e14ff;
        @media screen and (max-width: 1440px){
        
            width: 7.292vw;
    height: 2.5vw; 
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 1.25vw;
    background: #fff;
    box-shadow: 0 0.729vw 0.52vw 0 rgba(19,24,178,.1);
    border-radius: 1.25vw;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #7e14ff;
    line-height: 1.146vw;
        }
        @media screen and (max-width: 750px){
            background: #6f2aff;
    margin-right: 0.24rem;
    width: 2.08rem;
    height: 0.72rem;
    border-radius: 0.48rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .32rem;

        }
        
    }
    :nth-of-type(2){
        background: hsla(0,0%,100%,.2);
        color: white;
        @media screen and (max-width: 1440px){
            width: 7.292vw;
    height: 2.5vw;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 0.885vw;
    background: hsla(0,0%,100%,.2);
    border-radius: 1.25vw;
    border: 0.052vw solid #fff;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 1.146vw;}
    @media screen and (max-width: 750px){
        width: 2.08rem;
    height: 0.72rem;
    background: #fff;
    border-radius: 0.48rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #6a35e9;
    line-height: .32rem;
        }
    }
    }
    @media screen and (max-width: 750px){
        display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    margin-top: 8rem; 
    }
    
    
    
`,n=m`
    max-width: 430px;
    font-size: 20px;
    font-weight: 500;
    color: hsla(0,0%,100%,.8);
    line-height: 28px;
    margin-bottom: 60px;
    @media screen and (max-width: 1440px){
        max-width: 22.396vw;
    font-size: 1.042vw;
    font-family: PingFangSC-Regular,PingFang SC;
    color: hsla(0,0%,100%,.8);
    line-height: 1.458vw;
    margin-bottom: 3.125vw;
    }
    @media screen and (max-width: 750px){
        max-width: 100%;
        font-size: .28rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: hsla(0,0%,100%,.8);
    line-height: .44rem;  
    margin-bottom: 0;
    }
    
`,r=m`
    position: absolute;
    width: 648px;
    height: auto;
    right: -20px;
    bottom: 0;
    overflow: clip;
    animation: leftIn 300ms, fade 2s;
    @keyframes leftIn {
        from {
            transform: translate3d(20%, 0, 0);
        }
        to {
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @media screen and (max-width: 1440px){
        position: absolute;
    width: 33.75vw;
    height: auto;
    right: -1.1vw;
    bottom: -50px;
    }
    @media screen and (max-width: 750px){
        width: 100%;
    height: auto;
        bottom: 20px;
    }
    
    
`,i=m`
    animation: fade 2s;
    @media screen and (max-width: 750px){
        width: 6.84rem;
    height: 7.2rem;
    border-radius: 0.32rem;
    border: 0.02rem solid hsla(0,0%,100%,.1);
    padding: 0.64rem 1.18rem 0 0.48rem;
    background: rgba(133,107,255,.1);
    }
    @keyframes fade {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    `,o=m`
        @media screen and (max-width: 750px){
            width: 6.86rem;
    height: auto;
    margin: -4.68rem auto 0;
        }
    `;return x(de,{children:[x("div",{css:i,children:[a("div",{css:e,children:"手勢識別"}),a("div",{css:n,children:"支持20+手勢種類識別，滿足豐富的業務場景"})]}),a("div",{css:o,children:a("img",{css:r,src:"https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/img_live_characteristic3.png"})}),x("div",{css:t,children:[a("div",{children:"免費試用"}),a("div",{children:"方案諮詢"})]})]})},Yw=()=>{const e=m`
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    line-height: 56px;
    margin-bottom: 16px;
    @media screen and (max-width: 1440px){
        font-size: 2.083vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    color: #fff;
    line-height: 2.917vw;
    margin-bottom: 0.833vw;  
    }
    @media screen and (max-width: 750px){
        font-size: .48rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: .72rem;
    margin-bottom: 0.2rem;
    }
    
`,t=m`
    display: flex;
    
    div{
    margin-right:24px;
    width: 140px;
    height: 48px;
    border-radius: 24px;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #fff;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :first-of-type{
        background-color: white;
        color: #7e14ff;
        @media screen and (max-width: 1440px){
        
            width: 7.292vw;
    height: 2.5vw; 
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 1.25vw;
    background: #fff;
    box-shadow: 0 0.729vw 0.52vw 0 rgba(19,24,178,.1);
    border-radius: 1.25vw;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #7e14ff;
    line-height: 1.146vw;
        }
        @media screen and (max-width: 750px){
            background: #6f2aff;
    margin-right: 0.24rem;
    width: 2.08rem;
    height: 0.72rem;
    border-radius: 0.48rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .32rem;

        }
        
    }
    :nth-of-type(2){
        background: hsla(0,0%,100%,.2);
        color: white;
        @media screen and (max-width: 1440px){
            width: 7.292vw;
    height: 2.5vw;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 0.885vw;
    background: hsla(0,0%,100%,.2);
    border-radius: 1.25vw;
    border: 0.052vw solid #fff;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 1.146vw;}
    @media screen and (max-width: 750px){
        width: 2.08rem;
    height: 0.72rem;
    background: #fff;
    border-radius: 0.48rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #6a35e9;
    line-height: .32rem;
        }
    }
    }
    @media screen and (max-width: 750px){
        display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    margin-top: 8rem; 
    }
    
    
    
`,n=m`
    max-width: 430px;
    font-size: 20px;
    font-weight: 500;
    color: hsla(0,0%,100%,.8);
    line-height: 28px;
    margin-bottom: 60px;
    @media screen and (max-width: 1440px){
        max-width: 22.396vw;
    font-size: 1.042vw;
    font-family: PingFangSC-Regular,PingFang SC;
    color: hsla(0,0%,100%,.8);
    line-height: 1.458vw;
    margin-bottom: 3.125vw;
    }
    @media screen and (max-width: 750px){
        max-width: 100%;
        font-size: .28rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: hsla(0,0%,100%,.8);
    line-height: .44rem;  
    margin-bottom: 0;
    }
    
`,r=m`
    position: absolute;
    width: 648px;
    height: auto;
    right: -20px;
    bottom: 0;
    overflow: clip;
    animation: leftIn 300ms, fade 2s;
    @keyframes leftIn {
        from {
            transform: translate3d(20%, 0, 0);
        }
        to {
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @media screen and (max-width: 1440px){
        position: absolute;
    width: 33.75vw;
    height: auto;
    right: -1.1vw;
    bottom: -50px;
    }
    @media screen and (max-width: 750px){
        width: 100%;
    height: auto;
        bottom: 20px;
    }
    
    
`,i=m`
    animation: fade 2s;
    @media screen and (max-width: 750px){
        width: 6.84rem;
    height: 7.2rem;
    border-radius: 0.32rem;
    border: 0.02rem solid hsla(0,0%,100%,.1);
    padding: 0.64rem 1.18rem 0 0.48rem;
    background: rgba(133,107,255,.1);
    }
    @keyframes fade {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    `,o=m`
        @media screen and (max-width: 750px){
            width: 6.86rem;
    height: auto;
    margin: -4.68rem auto 0;
        }
    `;return x(de,{children:[x("div",{css:i,children:[a("div",{css:e,children:"肢體隨動"}),a("div",{css:n,children:"全方位採集身體動作，實時驅動虛擬形象還原對應的動作效果"})]}),a("div",{css:o,children:a("img",{css:r,src:"https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/img_live_characteristic4.png"})}),x("div",{css:t,children:[a("div",{children:"免費試用"}),a("div",{children:"方案諮詢"})]})]})},Kw=()=>{const e=m`
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    line-height: 56px;
    margin-bottom: 16px;
    @media screen and (max-width: 1440px){
        font-size: 2.083vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    color: #fff;
    line-height: 2.917vw;
    margin-bottom: 0.833vw;  
    }
    @media screen and (max-width: 750px){
        font-size: .48rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: .72rem;
    margin-bottom: 0.2rem;
    }
    
`,t=m`
    display: flex;
    
    div{
    margin-right:24px;
    width: 140px;
    height: 48px;
    border-radius: 24px;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #fff;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :first-of-type{
        background-color: white;
        color: #7e14ff;
        @media screen and (max-width: 1440px){
        
            width: 7.292vw;
    height: 2.5vw; 
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 1.25vw;
    background: #fff;
    box-shadow: 0 0.729vw 0.52vw 0 rgba(19,24,178,.1);
    border-radius: 1.25vw;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #7e14ff;
    line-height: 1.146vw;
        }
        @media screen and (max-width: 750px){
            background: #6f2aff;
    margin-right: 0.24rem;
    width: 2.08rem;
    height: 0.72rem;
    border-radius: 0.48rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .32rem;

        }
        
    }
    :nth-of-type(2){
        background: hsla(0,0%,100%,.2);
        color: white;
        @media screen and (max-width: 1440px){
            width: 7.292vw;
    height: 2.5vw;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 0.885vw;
    background: hsla(0,0%,100%,.2);
    border-radius: 1.25vw;
    border: 0.052vw solid #fff;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 1.146vw;}
    @media screen and (max-width: 750px){
        width: 2.08rem;
    height: 0.72rem;
    background: #fff;
    border-radius: 0.48rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #6a35e9;
    line-height: .32rem;
        }
    }
    }
    @media screen and (max-width: 750px){
        display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    margin-top: 8rem; 
    }
    
    
    
`,n=m`
    max-width: 430px;
    font-size: 20px;
    font-weight: 500;
    color: hsla(0,0%,100%,.8);
    line-height: 28px;
    margin-bottom: 60px;
    @media screen and (max-width: 1440px){
        max-width: 22.396vw;
    font-size: 1.042vw;
    font-family: PingFangSC-Regular,PingFang SC;
    color: hsla(0,0%,100%,.8);
    line-height: 1.458vw;
    margin-bottom: 3.125vw;
    }
    @media screen and (max-width: 750px){
        max-width: 100%;
        font-size: .28rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: hsla(0,0%,100%,.8);
    line-height: .44rem;  
    margin-bottom: 0;
    }
    
`,r=m`
    position: absolute;
    width: 648px;
    height: auto;
    right: -20px;
    bottom: 0;
    overflow: clip;
    animation: leftIn 300ms, fade 2s;
    @keyframes leftIn {
        from {
            transform: translate3d(20%, 0, 0);
        }
        to {
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @media screen and (max-width: 1440px){
        position: absolute;
    width: 33.75vw;
    height: auto;
    right: -1.1vw;
    bottom: -50px;
    }
    @media screen and (max-width: 750px){
        width: 100%;
    height: auto;
        bottom: 20px;
    }
    
    
`,i=m`
    animation: fade 2s;
    @media screen and (max-width: 750px){
        width: 6.84rem;
    height: 7.2rem;
    border-radius: 0.32rem;
    border: 0.02rem solid hsla(0,0%,100%,.1);
    padding: 0.64rem 1.18rem 0 0.48rem;
    background: rgba(133,107,255,.1);
    }
    @keyframes fade {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    `,o=m`
        @media screen and (max-width: 750px){
            width: 6.86rem;
    height: auto;
    margin: -4.68rem auto 0;
        }
    `;return x(de,{children:[x("div",{css:i,children:[a("div",{css:e,children:"無感延遲"}),a("div",{css:n,children:"超低時延，時延低于 300ms，提升實時互動玩法體驗"})]}),a("div",{css:o,children:a("img",{css:r,src:"https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/img_live_characteristic5.png"})}),x("div",{css:t,children:[a("div",{children:"免費試用"}),a("div",{children:"方案諮詢"})]})]})},Gw=()=>{const[e,t]=V.useState(1),n=[{id:1,text:a(Vw,{})},{id:2,text:a(Bw,{})},{id:3,text:a(Qw,{})},{id:4,text:a(Yw,{})},{id:5,text:a(Kw,{})}],r=[{icon:a(Wu,{}),text:"個性虛擬影像"},{icon:a(Uw,{}),text:"實時表情互動"},{icon:a(Dw,{}),text:"手勢識別"},{icon:a(Ww,{}),text:"肢體隨動"},{icon:a(Wu,{}),text:"無感延遲"}],i=k=>{t(k)},o=m`
    @media screen and (max-width: 1440px){
        margin: 0 auto;
    padding-bottom: 1.771vw;
       }
       @media screen and (max-width: 750px){
        display: none;
       }
       
       
    `,l=m`
  
    display: flex;
    flex-direction: column;
    width: 260px;
    transform: unset;
    margin-right: 50px;
    margin-top: 0;
    @media screen and (max-width: 1440px){
        display: block;
    width: 13.542vw; 
    margin-right: 2.604vw;
    margin-top: 6.25vw;
    }
    @media screen and (max-width: 750px){
        height: 0.8rem;
    margin-bottom: 0.6rem;
    width: 100%;
    padding-left: 0.32rem;
    padding-right: 0.32rem;
    position: relative;
    display: flex;
    transform: unset;
    margin-right: 2.604vw;
    margin-top: 6.25vw;
    }
    
   

    /* 选中按钮的样式 */
   
        
  `,s=m`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    font-size: 22px;
    font-weight: 600;
    width: 260px;
    height: 80px;
    padding: 20px 0 20px 35px;
    margin: 0 0 28px;
    text-align: center;
    border-radius: 16px;
    border: 1px solid #343864;
    background-color: rgba(133,107,255,.1);
    color:white;
    position: relative;
    &.active {
        
        background-color: white; /* 修改选中按钮的背景颜色 */
        color: #7c5bf1; /* 修改选中按钮的文字颜色 */
    }
    cursor: pointer;
    :hover{
        background: rgba(179, 163, 243, 0.2);
    }
    @media screen and (max-width: 1440px){
        width: 13.542vw;
    height: 4.167vw;
    padding: 1.042vw 0 1.042vw 1.823vw;
    margin-bottom: 1.458vw;
    text-align: center;
    position: relative;
    display: inline-flex;
    justify-self: start;
    -webkit-box-align: center;
    align-items: center;
    &.active {
        
        background-color: white; /* 修改选中按钮的背景颜色 */
        color: #7c5bf1; /* 修改选中按钮的文字颜色 */
    }
    }
    @media screen and (max-width: 750px){
    font-size: .28rem;
    font-weight: 600;
    color:white;
    line-height: .4rem;
    vertical-align: middle;
    white-space: nowrap;  
    max-width: 2.56rem;
    width: auto;
    padding: 0 0.44rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 0.8rem;
    border-radius: 0.16rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    margin: 0 0.24rem 0 0;
    border: 0.02rem solid hsla(0,0%,100%,.1);
    
    }
    

    
  `,c=m`
    
    width: 100%;
    height: 746px;
    position: relative;
    overflow: hidden; /* 隐藏超出容器部分 */
    transition-duration: 300ms;
    transform: translateZ(0);
    @media screen and (max-width: 1440px){
        height: 38.854vw;
    -webkit-box-flex: 1;
    flex: 1;
    }
    @media screen and (max-width: 750px){
        height: auto;
        padding: 0 0.32rem; 
    }
    

  `,d=m`
    display:flex;
    flex-direction: row;
    width:1440px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding: 0;
    overflow: inherit;
    transform: translate3d(0px, 0px, 0px);
    transition-duration: 300ms;
    transition-property: opacity;
    @media screen and (max-width: 1440px){
        display: flex;
        flex-direction: row;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal; 
    width: 75vw;
    overflow: inherit;
    
    }
  `,g=m`
    align-items: center;
    font-size: 40px;
    display: block;
    width: 40px;
    height: 50px;
    position: relative;
    margin-right: 18px;
    @media screen and (max-width: 1440px){
        background-position: 0 0;
        font-size:  2.167vw;
        display: block;
    width: 2.083vw;
    height: 2.083vw;
    position: relative;
    margin-right: 0.9375vw;
    
    }
    @media screen and (max-width: 750px){
        display:none;
    }
    
  `,h=m`
    
    border-radius: 20px;
    border: 1px solid #343864;
    background: rgba(133,107,255,.1);
    color:white;   
    background-position: 140px 210px;
    background-size: 468px 570px;
    height: 518px;
    width: 1130px;
  
    padding: 70px 0 0 80px;
    @media screen and (max-width: 1440px){
        background: rgba(133,107,255,.1) url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/img_live_microphone.png) no-repeat;
    background-size: 24.375vw 29.6875vw;
    background-position: 7.292vw 10.9375vw;
    border-radius: 1.042vw;
    border: 0.052vw solid #343864;  
    display: flex;
    padding: 3.646vw 0 0 4.167vw;
    width: 58.854vw;
    height: 26.979vw;
    margin-top: 6.25vw;
    position: relative;
    }
    
   
  `,v=m`
    margin-top: 0;
    max-width: 500px;
    display: inline-block;
    text-align: left;
   
    
   
    
  `,S=m`
    display:none;
    @media screen and (max-width: 750px){
        display: block;
    }
  `,y=m`
    margin: 0 auto;
    padding-bottom: 34px;
    @media screen and (max-width: 1440px){
        padding-bottom: 1.771vw;
    }
    @media screen and (max-width: 750px){
        margin: auto;
    position: relative;
    width: 100%;
    }
    
  `,w=m`
  @media screen and (max-width: 750px){
    display: block;
  }
    
  `,_=m`
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    @media screen and (max-width: 750px){
        transform: translate3d(0px, 0px, 0px);
    transition-duration: 0ms;
   
    overflow: auto;
        height: 0.8rem;
    margin-bottom: 0.6rem;
    width: 100%;
    padding-left: 0.32rem;
    padding-right: 0.32rem;  
    position: relative;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
    }
  `,f=m`
   
   @media screen and (max-width: 1440px){
    
    font-size: 1.146vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 600;
    line-height: 1.5625vw;
    width: fit-content;
   }
   @media screen and (max-width: 750px){
    font-size: .28rem;
    font-weight: 600;
   
    line-height: .4rem;
    vertical-align: middle;
    white-space: nowrap;
    height: 0.4rem;
    &.active {
        
        background-color: white; /* 修改选中按钮的背景颜色 */
        color: #7c5bf1; /* 修改选中按钮的文字颜色 */
    }
   }
  `,u=m`
    @media screen and (max-width: 750px){
        transform: translate3d(0px, 0px, 0px);
        width: auto;
    -webkit-box-align: start;
    align-items: flex-start;
    flex-wrap: nowrap; 
    
    
    }
  `,p=m`
  margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    @media screen and (max-width: 750px){
        margin-top: 0; 
    }
  `,b=m`
  @media screen and (max-width: 750px){
    width: 6.84rem;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
  `;return x(de,{children:[a("div",{css:o,children:x("div",{css:d,children:[a("div",{css:l,children:r.map((k,C)=>x("button",{css:m`
                        ${s}; /* 应用共享按钮样式 */
                    `,className:e===C+1?"active":"",onClick:()=>i(C+1),children:[a("span",{css:g,children:k.icon}),a("span",{css:f,children:k.text})]},C))}),a("div",{css:c,children:a("div",{css:h,children:a("div",{css:v,children:n[e-1].text})})})]})}),a("div",{css:S,children:a("div",{css:y,children:x("div",{css:w,children:[a("div",{css:_,children:r.map((k,C)=>x("button",{css:m`
                                ${s}; /* 应用共享按钮样式 */
                            `,className:e===C+1?"active":"",onClick:()=>i(C+1),children:[a("span",{css:g,children:k.icon}),a("span",{css:f,children:k.text})]},C))}),a("div",{css:p,children:a("div",{css:u,children:a("section",{css:c,children:a("div",{css:b,children:n[e-1].text})})})})]})})})]})},Xw=()=>{const[e,t]=V.useState("tab-first"),n=O=>{t(O)},r=m`
        background: #0e041e;
        padding: 100px 0;
        @media screen and (max-width: 1440px){
            background: #0e041e;
            padding: 5.208vw 0;
        }
        @media screen and (max-width: 750px){
            padding: 1.2rem 0 0;
            height: 13.6rem;

        }
        
    `,i=m`
        margin-bottom: 80px;
        font-size: 40px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 600;
        color: #28292e;
        line-height: 56px;
        text-align: center;
        color: #fff;
        @media screen and (max-width: 1440px){
            margin-bottom: 4.167vw;
    font-size: 2.083vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 600;
    line-height: 2.917vw;
    text-align: center;
    color: #fff;
        }
        @media screen and (max-width: 750px){
            margin-bottom: 0.6rem;
    font-size: .56rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: .9rem;
    text-align: center;
        }
        
       
    `,o=m`
        width: 1440px;
        background: rgba(133,107,255,.06);
        border-radius: 20px;
        border: 1px solid #343864;
        max-width: 1440px;
        margin: 0 auto;
        @media screen and (max-width: 1440px){
            width: 75vw;
    background: rgba(133,107,255,.06);
    border-radius: 1.042vw;
    border: 0.052vw solid #343864; 
    margin: 0 auto;
        }
        @media screen and (max-width: 750px){
            width: 100%;
    max-width: 7.5rem;
    border: none;
    background: #0e041e;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
        }
        
    `,l=m`
        display: flex;
        flex-direction: row;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
        }
        @media screen and (max-width: 750px){
            display: none;
        }
        
    `,s=m`
        padding: 42px 49px;
        @media screen and (max-width: 1440px){
            padding: 2.1875vw 2.552vw;
        }
    `,c=m`
        width: 1120px;
        height: auto;
        @media screen and (max-width: 1440px){
            width: 58.333vw;
    height: auto;
        }
    `,d=m`
        background: rgba(249,252,253,.05) url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/bg_live_product.png) no-repeat;
        background-size: 210px 500px;
        background-position-y: 224px;
        border-radius: 0 19px 19px 0;
        padding: 44px 0 0 36px;
        height: 726px;
        width: 220px;
        @media screen and (max-width: 1440px){
            background: rgba(249,252,253,.05) url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/bg_live_product.png) no-repeat;
    background-size: 10.9375vw 26.042vw;
    background-position-y: 11.667vw;
    border-radius: 0 0.99vw 0.99vw 0;
    padding-left: 1.875vw;
    padding: 2.292vw 0 0 1.719vw;
    height: 37.8125vw;
    width: 11.458vw;
        }
    `,g=m`
        color: #737ac4;
        font-size: 14px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 500;
        line-height: 20px;
        margin-bottom: 28px;
        @media screen and (max-width: 1440px){
            color: #737ac4;
            font-size: .729vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    line-height: 1.042vw;
    margin-bottom: 1.458vw;
        }
    `,h=m`
        font-size: 18px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        margin-bottom: 20px;
        @media screen and (max-width: 1440px){
            font-size: .9375vw;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    margin-bottom: 1.042vw;
        }
    `,v=m`
        color: #fff;
        font-size: 18px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        line-height: 25px;
        text-decoration: none;
    outline: 0;
    box-shadow: none;
    outline-offset: 0;
    @media screen and (max-width: 1440px){
        color: #fff;
        font-size: .9375vw;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    line-height: 1.302vw;
    }
    `,S=m`
        display: none;
        @media screen and (max-width: 750px){
            display: block;
    width: 7.5rem;
        }
    `,y=m`
        
    `,w=m`
        padding: 0;
    position: relative;
    margin: 0 0 15px;
    @media screen and (max-width: 750px){
        background: hsla(0,0%,100%,.15);
        width: max-content;
    height: 0.92rem;
    border-radius: 0.54rem;
    margin: 0 auto;
    padding: 0.08rem;
    }
    `,_=m`
        overflow: hidden;
    position: relative;
    `,f=m`
        overflow: hidden;
    margin-bottom: -1px;
    position: relative;
    @media screen and (max-width: 750px){
        height: 100%;
    width: 100%;
    }
    `,u=m`
        overflow: hidden;
        @media screen and (max-width: 750px){
            height: 100%;
            display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
        }
    `,p=m`
        transform: translateX(0px);
        white-space: nowrap;
    position: relative;
    transition: transform .3s,-webkit-transform .3s;
    float: left;
    z-index: 2;
    @media screen and (max-width: 750px){
        height: 100%;
        display: flex;
    flex-direction: row;
    align-items: center;
    }
    `,b=m`
        width: 123px;
    transform: translateX(0px);
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #409eff;
    z-index: 1;
    transition: transform .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    list-style: none;
    @media screen and (max-width: 750px){
        display: none;
    }

    `,k=m`
        padding-left: 0;
        color: #409eff;
        padding: 0 20px;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    @media screen and (max-width: 750px){
        font-size: .28rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    line-height: .4rem;
    background: ${e==="tab-first"?"#fff":""};
    
    border-radius: 0.54rem;
    width: 2.36rem;
    height: 0.76rem;
    display: flex;
    justify-content: center;
    padding: 0.18rem 0;
    color: ${e==="tab-first"?"#28292e":"hsla(0,0%,100%,.4)"}!important;
    
    
    }
    `,C=m`
       padding-right: 0; 
       padding: 0 20px;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    position: relative;
    @media screen and (max-width: 750px){
        background: ${e==="tab-second"?"#fff":""};
        width: 2.36rem;
        border-radius: 0.54rem;
    height: 0.76rem;
    display: flex;
    justify-content: center;
    padding: 0.18rem 0;
    font-size: .28rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    line-height: .4rem;
    color: ${e==="tab-second"?"#28292e":"hsla(0,0%,100%,.4)"}!important;

    }
    `,z=m`
        @media screen and (max-width: 750px){
            overflow-x: scroll;
    padding-top: 0.44rem;
    padding-bottom: 1.58rem;
        }
    `,P=m`
        @media screen and (max-width: 750px){
            height: 7.6rem;
    width: auto;
        }
    `,E=m`
        display: block;
        @media screen and (max-width: 750px){
            padding-top: 0.6rem;
    padding-bottom: 1.22rem; 
    div{
        margin-bottom: 0.24rem;
        a{
            background: rgba(133,107,255,.15);
    color: #fff;
    width: 5rem;
    margin: 0 auto;
    height: 1.16rem;
    box-shadow: 0 0.08rem 0.16rem 0 rgba(0,85,255,.08);
    border-radius: 0.16rem;
    backdrop-filter: blur(50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: .32rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    line-height: .44rem;
        }
    }
        }
    `;return x("div",{css:r,children:[a("div",{css:i,children:"方案架構"}),x("div",{css:o,children:[x("div",{css:l,children:[a("div",{css:s,children:a("img",{css:c,src:"https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/img_live_architecture.png"})}),x("div",{css:d,children:[a("div",{id:"tab-second","aria-controls":"pane-second",role:"tab",tabIndex:"0","aria-selected":"true",css:g,children:"相關產品"}),x("div",{role:"tabpanel",id:"pane-second","aria-labelledby":"tab-second",children:[a("div",{css:h,children:a("a",{href:"#",target:"_blank",css:v,children:"MetaWorld虛擬世界"})}),a("div",{css:h,children:a("a",{href:"#",target:"_blank",css:v,children:"Avatar虛擬形象"})}),a("div",{css:h,children:a("a",{href:"#",target:"_blank",css:v,children:"實時音視頻"})}),a("div",{css:h,children:a("a",{href:"#",target:"_blank",css:v,children:"即時通訊IM"})}),a("div",{css:h,children:a("a",{href:"#",target:"_blank",css:v,children:"CDN直播"})}),a("div",{css:h,children:a("a",{href:"#",target:"_blank",css:v,children:"低延遲直播"})}),a("div",{css:h,children:a("a",{href:"#",target:"_blank",css:v,children:"實時錄製"})})]})]})]}),a("div",{css:S,children:x("div",{css:y,children:[a("div",{css:w,children:a("div",{css:f,children:a("div",{css:u,children:x("div",{css:p,role:"tablist",children:[a("div",{css:b}),a("div",{css:k,"aria-controls":"pane-first",role:"tab",id:"tab-first",tabIndex:0,onClick:()=>n("tab-first"),children:"架構圖"}),a("div",{css:C,"aria-controls":"pane-second",role:"tab",id:"tab-second",tabIndex:-1,onClick:()=>n("tab-second"),children:"相關雲產品"})]})})})}),x("div",{css:_,children:[e==="tab-first"&&a("div",{css:z,id:"pane-first",role:"tabpanel","aria-labelledby":"tab-first",children:a("img",{css:P,src:"https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_img_live_architecture.png"})}),e==="tab-second"&&x("div",{css:E,id:"pane-second",role:"tabpanel","aria-labelledby":"tab-second","aria-hidden":"true",children:[a("div",{css:h,children:a("a",{href:"#",target:"_blank",css:v,children:"MetaWorld虛擬世界"})}),a("div",{css:h,children:a("a",{href:"#",target:"_blank",css:v,children:"Avatar虛擬形象"})}),a("div",{css:h,children:a("a",{href:"#",target:"_blank",css:v,children:"實時音視頻"})}),a("div",{css:h,children:a("a",{href:"#",target:"_blank",css:v,children:"即時通訊IM"})}),a("div",{css:h,children:a("a",{href:"#",target:"_blank",css:v,children:"CDN直播"})}),a("div",{css:h,children:a("a",{href:"#",target:"_blank",css:v,children:"低延遲直播"})}),a("div",{css:h,children:a("a",{href:"#",target:"_blank",css:v,children:"實時錄製"})})]})]})]})})]})]})},qw=()=>{const[e,t]=V.useState(!1),[n,r]=V.useState(!1),[i,o]=V.useState(!1),[l,s]=V.useState(!1),[c,d]=V.useState(!1),[g,h]=V.useState(!1),v=()=>{t(!1),r(!1),o(!1),s(!1),d(!1),h(!1)},S=up=>{switch(v(),up){case 1:t(!0);break;case 2:r(!0);break;case 3:o(!0);break;case 4:s(!0);break;case 5:d(!0);break;case 6:h(!0);break}},y=m`
        height: 100%;
        width: 100%;
        background: url(https://www.zego.im/_nuxt/img/a18a38f.jpg) no-repeat 50%;
        background-size: cover;
        overflow-y: hidden;
        @media screen and (max-width: 1440px){
            height: 100%;
    width: 100%;
    background: url(https://www.zego.im/_nuxt/img/a18a38f.jpg) no-repeat 50%;
    background-size: cover;
    overflow-y: hidden;
        }
    `,w=m`
        display: flex;
        flex-direction: row;
        max-width: 1440px;
        margin: 0 auto;
        height: 100%;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
            max-width: 75vw;
    margin: 0 auto;
    height: 100%;
        }
        @media screen and (max-width: 750px){
            display: none;  
        }
        
    `,_=m`
        margin-top: 137px;
        margin-right: 50px;
        @media screen and (max-width: 1440px){
            margin-top: 7.135vw;
    margin-right: auto; 
        }
    `,f=m`
        font-size: 40px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: #fff;
        line-height: 64px;
        @media screen and (max-width: 1440px){
            font-size: 2.083vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: 3.333vw; 
        }
    `,u=m`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 1110px;
        height: 100%;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 57.8125vw;
    height: 100%; 
        }
    `,p=m`
        height: 100%;
        display: flex;
        flex-direction: column;
    `,b=m`
        border-right: 0;
        border-bottom: 0;
        border: 1px solid rgba(86,80,157,.6);
        width: 370px;
        height: ${e?"84%":"50%"} ;
        background: ${e?"url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/bg_live_interactive.png) no-repeat":"hsla(0,0%,100%,.05)"}  ;
        background-size:${e?"100%":"auto"};
        padding: 53px 36px 0 40px;
        transition: height .5s;
        @media screen and (max-width: 1440px){
            border:0.052vw solid rgba(86,80,157,.6); 
            width: 19.271vw;
            height: ${e?"84%":"50%"} ;
            background: ${e?"url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/bg_live_interactive.png) no-repeat":"hsla(0,0%,100%,.05)"}  ;
            background-size:${e?"100%":"auto"};
    padding: 2.76vw 1.875vw 0 2.083vw;
    transition: height .5s;
        }
    `,k=m`
        border-right: 0;
        border-bottom: 0;
        border: 1px solid rgba(86,80,157,.6);
        width: 370px;
        height: ${n?"84%":"50%"} ;
        background: ${n?"url(https://www.zego.im/_nuxt/img/40da607.png) no-repeat":"hsla(0,0%,100%,.05)"}  ;
        background-size:${n?"cover":"auto"};
        padding: 53px 36px 0 40px;
        transition: height .5s;
        @media screen and (max-width: 1440px){
            border:0.052vw solid rgba(86,80,157,.6); 
            width: 19.271vw;
            height: ${n?"84%":"50%"} ;
            background: ${n?"url(https://www.zego.im/_nuxt/img/40da607.png) no-repeat":"hsla(0,0%,100%,.05)"}  ;
            background-size:${n?"100%":"auto"};
    padding: 2.76vw 1.875vw 0 2.083vw;
    transition: height .5s;
        }
    `,C=m`
        border-right: 0;
        border-bottom: 0;
        border: 1px solid rgba(86,80,157,.6);
        width: 370px;
        height: ${i?"84%":"50%"} ;
        background: ${i?"url(https://www.zego.im/_nuxt/img/0127701.png) no-repeat":"hsla(0,0%,100%,.05)"}  ;
        background-size:${i?"cover":"auto"};
        padding: 53px 36px 0 40px;
        transition: height .5s;
        @media screen and (max-width: 1440px){
            border:0.052vw solid rgba(86,80,157,.6); 
            width: 19.271vw;
            height: ${i?"84%":"50%"} ;
            background: ${i?"url(https://www.zego.im/_nuxt/img/0127701.png) no-repeat":"hsla(0,0%,100%,.05)"}  ;
            background-size:${i?"100%":"auto"};
    padding: 2.76vw 1.875vw 0 2.083vw;
    transition: height .5s;
        }
    `,z=m`
        border-right: 0;
        border-bottom: 0;
        border: 1px solid rgba(86,80,157,.6);
        width: 370px;
        height: ${l?"84%":"50%"} ;
        background: ${l?"url(https://www.zego.im/_nuxt/img/190f8d2.png) no-repeat":"hsla(0,0%,100%,.05)"}  ;
        background-size:${l?"cover":"auto"};
        padding: 53px 36px 0 40px;
        transition: height .5s;
        @media screen and (max-width: 1440px){
            border:0.052vw solid rgba(86,80,157,.6); 
            width: 19.271vw;
            height: ${l?"84%":"50%"} ;
            background: ${l?"url(https://www.zego.im/_nuxt/img/190f8d2.png) no-repeat":"hsla(0,0%,100%,.05)"}  ;
            background-size:${l?"100%":"auto"};
    padding: 2.76vw 1.875vw 0 2.083vw;
    transition: height .5s;
        }
    `,P=m`
        border-right: 0;
        border-bottom: 0;
        border: 1px solid rgba(86,80,157,.6);
        width: 370px;
        height: ${c?"84%":"50%"} ;
        background: ${c?"url(https://www.zego.im/_nuxt/img/04c508c.png) no-repeat":"hsla(0,0%,100%,.05)"}  ;
        background-size:${c?"cover":"auto"};
        padding: 53px 36px 0 40px;
        transition: height .5s;
        @media screen and (max-width: 1440px){
            border:0.052vw solid rgba(86,80,157,.6); 
            width: 19.271vw;
            height: ${c?"84%":"50%"} ;
            background: ${c?"url(https://www.zego.im/_nuxt/img/04c508c.png) no-repeat":"hsla(0,0%,100%,.05)"}  ;
            background-size:${c?"100%":"auto"};
    padding: 2.76vw 1.875vw 0 2.083vw;
    transition: height .5s;
        }
    `,E=m`
        border-right: 0;
        border-bottom: 0;
        border: 1px solid rgba(86,80,157,.6);
        width: 370px;
        height: ${g?"84%":"50%"} ;
        background: ${g?"url(https://www.zego.im/_nuxt/img/9e01af7.png) no-repeat":"hsla(0,0%,100%,.05)"}  ;
        background-size:${g?"cover":"auto"};
        padding: 53px 36px 0 40px;
        transition: height .5s;
        @media screen and (max-width: 1440px){
            border:0.052vw solid rgba(86,80,157,.6); 
            width: 19.271vw;
            height: ${g?"84%":"50%"} ;
            background: ${g?"url(https://www.zego.im/_nuxt/img/9e01af7.png) no-repeat":"hsla(0,0%,100%,.05)"}  ;
            background-size:${g?"100%":"auto"};
    padding: 2.76vw 1.875vw 0 2.083vw;
    transition: height .5s;
        }
    `,O=m`
        font-size: 50px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: #fff;
        line-height: 46px;
        margin-bottom: 45px;
        display:block ;
        @media screen and (max-width: 1440px){
            font-size: 2.604vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: 2.396vw;
    margin-bottom: 2.34375vw;
    display: block;
        }
    `,N=m`
        color: #fff;
        max-width: 270px;
        font-size: 20px;
        font-family: PingFangSC-Light,PingFang SC;
        font-weight: 400;
        line-height: 30px;
        @media screen and (max-width: 1440px){
            max-width: 14.0625vw;
    font-size: 1.042vw;
    font-weight: 400;
    line-height: 1.5625vw;
        }
    `,M=m`
        display: block;
        font-size: 46px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: #fff;
        line-height: 60px;
        margin-bottom: 28px;
        @media screen and (max-width: 1440px){
            display: block;
            font-size: 2.396vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: 3.125vw;
    margin-bottom: 1.458vw;
        }
    `,j=m`
        display: none;
        @media screen and (max-width: 750px){
            display: block;
        }
    `,D=m`
        @media screen and (max-width: 750px){
            padding: 1.2rem 0 0.6rem;
        }
    `,A=m`
        @media screen and (max-width: 750px){
            padding-bottom: 1.2rem;
        }
    `,oe=m`
        @media screen and (max-width: 750px){
            text-align: center;
    font-size: .56rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: .9rem;
        }
    `,ee=m`
    display: none;
        @media screen and (max-width: 750px){
            display: block; 
        }
    `,F=m`
        @media screen and (max-width: 750px){
            max-width: 6.86rem;
    margin: 0 auto;
        }
    `,I=m`
        border-top: 1px solid #ebeef5;
    border-bottom: 1px solid #ebeef5;
    @media screen and (max-width: 750px){
        display: flex;
    flex-wrap: wrap;
    border-top: unset;
    border-bottom: unset;
    }
    `,$=m`
        @media screen and (max-width: 750px){
            width: 6.86rem; 
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-bottom: 0.2rem;
    background:${e?"url(https://www.zego.im/_nuxt/img/e47b3fd.png)":"hsla(0,0%,100%,.05)"} ;
    border-radius: 0.16rem;
    border: 0.02rem solid #56509d;
    padding-bottom: 0.48rem;
    position: relative;
    height:${e?"2.36rem":"1.52rem"} ;
        }
    `,W=m`
        @media screen and (max-width: 750px){
            width: 6.86rem; 
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-bottom: 0.2rem;
    background:${n?"url(https://www.zego.im/_nuxt/img/e47b3fd.png)":"hsla(0,0%,100%,.05)"} ;
    border-radius: 0.16rem;
    border: 0.02rem solid #56509d;
    padding-bottom: 0.48rem;
    position: relative;
    height:${n?"2.36rem":"1.52rem"} ;
        }
    `,Y=m`
        @media screen and (max-width: 750px){
            width: 6.86rem; 
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-bottom: 0.2rem;
    background:${i?"url(https://www.zego.im/_nuxt/img/e47b3fd.png)":"hsla(0,0%,100%,.05)"} ;
    border-radius: 0.16rem;
    border: 0.02rem solid #56509d;
    padding-bottom: 0.48rem;
    position: relative;
    height:${i?"2.36rem":"1.52rem"} ;
        }
    `,Ue=m`
        @media screen and (max-width: 750px){
            width: 6.86rem; 
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-bottom: 0.2rem;
    background:${l?"url(https://www.zego.im/_nuxt/img/e47b3fd.png)":"hsla(0,0%,100%,.05)"} ;
    border-radius: 0.16rem;
    border: 0.02rem solid #56509d;
    padding-bottom: 0.48rem;
    position: relative;
    height:${l?"2.36rem":"1.52rem"} ;
        }
    `,le=m`
        @media screen and (max-width: 750px){
            width: 6.86rem; 
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-bottom: 0.2rem;
    background:${c?"url(https://www.zego.im/_nuxt/img/e47b3fd.png)":"hsla(0,0%,100%,.05)"} ;
    border-radius: 0.16rem;
    border: 0.02rem solid #56509d;
    padding-bottom: 0.48rem;
    position: relative;
    height:${c?"2.36rem":"1.52rem"} ;
        }
    `,Ft=m`
        @media screen and (max-width: 750px){
            width: 6.86rem; 
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-bottom: 0.2rem;
    background:${g?"url(https://www.zego.im/_nuxt/img/e47b3fd.png)":"hsla(0,0%,100%,.05)"} ;
    border-radius: 0.16rem;
    border: 0.02rem solid #56509d;
    padding-bottom: 0.48rem;
    position: relative;
    height:${g?"2.36rem":"1.52rem"} ;
        }
    `,Pe=m`
        display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    color: #303133;
    cursor: pointer;
    border-bottom: 1px solid #ebeef5;
    font-size: 13px;
    font-weight: 500;
    transition: border-bottom-color .3s;
    outline: 0;
    @media screen and (max-width: 750px){
        height: auto;
    background: 0 0;
    padding-left: 0.48rem;
    padding-top: 0.48rem;
    position: relative;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: start;
    align-items: flex-start;
    border-bottom: unset;
    }
    `,Mt=m`
    @media screen and (max-width: 750px){
        background: ${n?"url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_unfold.png)":"url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_closed.png)"} no-repeat;
    background-size: cover;
    background-position-x: -2.6rem;
    opacity: 1;
    transition: opacity .2s;
    transition-delay: .7s;
    width: 2.6rem;
    height: ${n?"2.36rem":"1.5rem"};
    position: absolute;
    right: 0;
    top: 0;
    }
    `,Jh=m`
    @media screen and (max-width: 750px){
        background: ${i?"url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_unfold.png)":"url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_closed.png)"} no-repeat;
    background-size: cover;
    background-position-x: -5.2rem;
    width: 2.6rem;
    height: ${i?"2.36rem":"1.5rem"};
    position: absolute;
    right: 0;
    top: 0;  
    }
    `,ep=m`
    @media screen and (max-width: 750px){
        background: ${l?"url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_unfold.png)":"url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_closed.png)"} no-repeat;
    background-size: cover;
    background-position-x: -7.8rem;
    width: 2.6rem;
    height: ${l?"2.36rem":"1.5rem"};
    position: absolute;
    right: 0;
    top: 0;  
    }
    `,tp=m`
    @media screen and (max-width: 750px){
        background: ${c?"url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_unfold.png)":"url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_closed.png)"} no-repeat;
    background-size: cover;
    background-position-x: -10.4rem;
    width: 2.6rem;
    height: ${c?"2.36rem":"1.5rem"};
    position: absolute;
    right: 0;
    top: 0;  
    }
    `,np=m`
    @media screen and (max-width: 750px){
        background: ${g?"url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_unfold.png)":"url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_closed.png)"} no-repeat;
    background-size: cover;
    background-position-x: -13rem;
    width: 2.6rem;
    height: ${g?"2.36rem":"1.5rem"};
    position: absolute;
    right: 0;
    top: 0;  
    }
    `,rp=m`
    @media screen and (max-width: 750px){
        background: ${e?"url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_unfold.png)":"url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_solution_closed.png)"} no-repeat;
    background-size: cover;
    width: 2.6rem;
    height: ${e?"2.36rem":"1.5rem"};
    position: absolute;
    right: 0;
    top: 0;  
    }
    `,wn=m`
      @media screen and (max-width: 750px){
        display: flex;
    -webkit-box-align: center;
    align-items: center;
      }  
    `,yn=m`
        @media screen and (max-width: 750px){
            font-size: .36rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: .56rem;
    text-align: left;
        }
    `,ip=m`
    
       @media screen and (max-width: 750px){
        display:${n?"block":"none"};
        
    max-width: 3.7rem;
    font-size: .24rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .36rem;
    margin-top: 0.12rem;
       } 
    `,op=m`
    
       @media screen and (max-width: 750px){
        display:${i?"block":"none"};
        
    max-width: 3.7rem;
    font-size: .24rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .36rem;
    margin-top: 0.12rem;
       } 
    `,lp=m`
    
       @media screen and (max-width: 750px){
        display:${l?"block":"none"};
        
    max-width: 3.7rem;
    font-size: .24rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .36rem;
    margin-top: 0.12rem;
       } 
    `,ap=m`
    
       @media screen and (max-width: 750px){
        display:${c?"block":"none"};
        
    max-width: 3.7rem;
    font-size: .24rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .36rem;
    margin-top: 0.12rem;
       } 
    `,sp=m`
    
       @media screen and (max-width: 750px){
        display:${g?"block":"none"};
        
    max-width: 3.7rem;
    font-size: .24rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .36rem;
    margin-top: 0.12rem;
       } 
    `,cp=m`
    
       @media screen and (max-width: 750px){
        display:${e?"block":"none"};
        
    max-width: 3.7rem;
    font-size: .24rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .36rem;
    margin-top: 0.12rem;
       } 
    `;return x("div",{css:y,children:[x("div",{css:w,children:[a("div",{css:_,children:x("div",{css:f,children:[a("div",{children:"專業技術"}),a("div",{children:"保障高品質服務"})]})}),x("div",{css:u,children:[x("div",{css:p,children:[a("div",{css:b,onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:e?x(de,{children:[x("div",{css:M,children:[a("div",{children:"豐富的虛擬形"}),a("div",{children:"象互動玩法"})]}),a("div",{css:N,children:" 多样化互动玩法，让虚拟形象能够更好地表达"})]}):x(de,{children:[a("div",{css:O,children:"可互動"}),a("div",{css:N,children:" 多样化互动玩法，让虚拟形象能够更好地表达"})]})}),a("div",{css:k,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:n?x(de,{children:[x("div",{css:M,children:[a("div",{children:"全終端跨平台"}),a("div",{children:"的完美適配"})]}),a("div",{css:N,children:" 支持多種主流開發平台接入，深度兼容15000+終端設備"})]}):x(de,{children:[a("div",{css:O,children:"跨平台"}),a("div",{css:N,children:" 支持多種主流開發平台接入，深度兼容15000+終端設備"})]})})]}),x("div",{css:p,children:[a("div",{css:C,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:i?x(de,{children:[x("div",{css:M,children:[a("div",{children:"齊全的美聲"}),a("div",{children:"美顏應用插件"})]}),a("div",{css:N,children:" 多样化插件应用，满足各类视频场景美颜美声特效需求"})]}):x(de,{children:[a("div",{css:O,children:"多插件"}),a("div",{css:N,children:" 多样化插件应用，满足各类视频场景美颜美声特效需求"})]})}),a("div",{css:z,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:l?x(de,{children:[x("div",{css:M,children:[a("div",{children:"高可用全球"}),a("div",{children:"實時傳輸網路"})]}),a("div",{css:N,children:" 212个国家地区网络全覆盖，构建全球海量有序数据网络"})]}):x(de,{children:[a("div",{css:O,children:"覆全球"}),a("div",{css:N,children:" 212个国家地区网络全覆盖，构建全球海量有序数据网络"})]})})]}),x("div",{css:p,children:[a("div",{css:P,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:c?x(de,{children:[x("div",{css:M,children:[a("div",{children:"超低延遲"}),a("div",{children:"流暢通話"})]}),a("div",{css:N,children:" 端到端超低延迟，优秀抗弱网能力，70%丢包下保持流畅通话"})]}):x(de,{children:[a("div",{css:O,children:"低延遲"}),a("div",{css:N,children:" 端到端超低延迟，优秀抗弱网能力，70%丢包下保持流畅通话"})]})}),a("div",{css:E,onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:g?x(de,{children:[x("div",{css:M,children:[a("div",{children:"完善的運營"}),a("div",{children:"跟蹤體系"})]}),a("div",{css:N,children:" 星图质量平台实时跟踪服务质量，技术团队7* 24小时在线敏捷响应"})]}):x(de,{children:[a("div",{css:O,children:"助運營"}),a("div",{css:N,children:" 星图质量平台实时跟踪服务质量，技术团队7* 24小时在线敏捷响应"})]})})]})]})]}),x("div",{css:j,children:[a("div",{css:D,children:a("div",{css:oe,children:a("div",{css:ee,children:x("div",{children:[a("div",{children:"專業技術"}),a("div",{children:"保障高品質服務"})]})})})}),a("div",{css:A,children:a("div",{css:F,children:a("div",{children:x("div",{css:I,role:"tablist","aria-multiselectable":"true",children:[a("div",{css:$,onClick:()=>S(1),children:a("div",{role:"tab","aria-controls":"elcollapsecontent5411","aria-describedby":"elcollapsecontent5411",children:x("div",{css:Pe,role:"button",id:"elcollapsehead5411","aria-expanded":"false",tabIndex:0,children:[a("div",{css:rp}),a("div",{css:wn,children:a("div",{css:yn,children:"豐富的虛擬形象互動玩法"})}),a("div",{css:cp,children:"多樣化互動玩法，讓虛擬形象能夠更好地表達自我"})]})})}),a("div",{css:W,onClick:()=>S(2),children:a("div",{role:"tab","aria-controls":"elcollapsecontent5411","aria-describedby":"elcollapsecontent5411",children:x("div",{css:Pe,role:"button",id:"elcollapsehead5411","aria-expanded":"false",tabIndex:0,children:[a("div",{css:Mt}),a("div",{css:wn,children:a("div",{css:yn,children:"齊全的美聲美顏應用插件"})}),a("div",{css:ip,children:"多样化插件应用，满足各类视频场景美颜美声特效需求"})]})})}),a("div",{css:Y,onClick:()=>S(3),children:a("div",{role:"tab","aria-controls":"elcollapsecontent5411","aria-describedby":"elcollapsecontent5411",children:x("div",{css:Pe,role:"button",id:"elcollapsehead5411","aria-expanded":"false",tabIndex:0,children:[a("div",{css:Jh}),a("div",{css:wn,children:a("div",{css:yn,children:"超低延遲，流暢通話"})}),a("div",{css:op,children:"端到端超低延迟，优秀抗弱网能力，70%丢包下保持流畅通话"})]})})}),a("div",{css:Ue,onClick:()=>S(4),children:a("div",{role:"tab","aria-controls":"elcollapsecontent5411","aria-describedby":"elcollapsecontent5411",children:x("div",{css:Pe,role:"button",id:"elcollapsehead5411","aria-expanded":"false",tabIndex:0,children:[a("div",{css:ep}),a("div",{css:wn,children:a("div",{css:yn,children:"全終端跨平台的完美適配"})}),a("div",{css:lp,children:"支持多種主流開發平台接入，深度兼容15000+終端設備"})]})})}),a("div",{css:le,onClick:()=>S(5),children:a("div",{role:"tab","aria-controls":"elcollapsecontent5411","aria-describedby":"elcollapsecontent5411",children:x("div",{css:Pe,role:"button",id:"elcollapsehead5411","aria-expanded":"false",tabIndex:0,children:[a("div",{css:tp}),a("div",{css:wn,children:a("div",{css:yn,children:"高可用全球實時傳輸網路"})}),a("div",{css:ap,children:"212个国家地区网络全覆盖，构建全球海量有序数据网络"})]})})}),a("div",{css:Ft,onClick:()=>S(6),children:a("div",{role:"tab","aria-controls":"elcollapsecontent5411","aria-describedby":"elcollapsecontent5411",children:x("div",{css:Pe,role:"button",id:"elcollapsehead5411","aria-expanded":"false",tabIndex:0,children:[a("div",{css:np}),a("div",{css:wn,children:a("div",{css:yn,children:"完善的運營跟蹤體系"})}),a("div",{css:sp,children:"星图质量平台实时跟踪服务质量，技术团队7* 24小时在线敏捷响应"})]})})})]})})})})]})]})},Zw=()=>{const e=m`
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: #fff; 
        font-size: 40px;
        line-height: 56px;
        margin-top: 100px;
        margin-bottom: 10px;
        text-align: center;
        @media screen and (max-width: 1440px){
            font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;  
    margin-top: 5.208vw;
    margin-bottom: 0.521vw;
    text-align: center;
    font-size: 2.083vw;
    line-height: 2.917vw;
        }
        @media screen and (max-width: 750px){
            font-size: .56rem;
            line-height: .9rem;
    margin-bottom: 0.8rem;
    padding-top: 1.2rem;
    margin-top: 0;
        }
        
    `,t=m`
        display: flex;
        flex-direction: row;
        width: 1440px;
        margin: 80px auto 0;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    width: 75vw;
    margin: 4.167vw auto 0;   
        }
        @media screen and (max-width: 750px){
            display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0.28rem;
    grid-row-gap: 0.28rem;
    width: 100%;
    margin-top: 0;
    padding: 0 0.32rem;  
        }
        

    `,n=m`
        background: rgba(133,107,255,.1);
        border-radius: 8px;
        border: 1px solid #343864;
        box-shadow: none;
        width: 280px;
        height: 110px;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        padding-left: 32px;
        padding-top: 20px;
        position: relative;
        :last-of-type{
            margin-right: 0;
            ::after{
                display: none;
            }
        }
        ::after{
            content: "";
            width: 35px;
            height: 24px;
            background: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/icon_arrow.png) no-repeat;
            position: absolute;
            left: 319px;
            top: 50%;
            transform: translateY(-50%);
            background-size: cover;
            @media screen and (max-width: 750px){
                display:none;
            }
            @media screen and (max-width: 1440px){
                content: "";
    width: 1.823vw;
    height: 1.25vw;
    background: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/icon_arrow.png) no-repeat;
    position: absolute;
    left: 16.615vw;
    top: 50%;
    transform: translateY(-50%);
    background-size: cover;
            }
        }
        @media screen and (max-width: 1440px){
            background: rgba(133,107,255,.1);
            border-radius: 0.417vw;
    border: 0.052vw solid #343864;
    box-shadow: none;
    width: 14.583vw;
    height: 5.729vw;
    margin-right: auto;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    padding-left: 1.667vw;
    padding-top: 1.042vw;
    position: relative;
        }
        @media screen and (max-width: 750px){
            border-radius: 0.16rem;
        border: 0.02rem solid #343864;
        width: 3.28rem;
    height: 2.96rem;
    padding: 0.24rem 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        }
        
    `,r=m`
        display:none;
        @media screen and (max-width: 1440px){
            display: none;
        }
        @media screen and (max-width: 750px){
            display: block;
    width: 1.12rem;
    height: auto;  
        }
       
    `,i=m`
        margin-bottom: 12px;
        @media screen and (max-width: 1440px){
            margin-bottom: 0.625vw;
        }
        @media screen and (max-width: 750px){
            margin-top: 0.2rem;
    margin-bottom: 0.08rem;
        }
       
    `,o=m`
        color: #fff;
        font-size: 22px;
        font-family: Rubik-SemiBoldItalic,Rubik;
        font-weight: 400;
        line-height: 27px;
        text-shadow: 0 5px 13px rgba(134,162,255,.14);
        margin-right: 14px;
        font-style: oblique;
        @media screen and (max-width: 1440px){
            color: #fff;
            font-style: oblique;
            font-size: 1.146vw;
    font-family: Rubik-SemiBoldItalic,Rubik;
    font-weight: 400;
    line-height: 1.40625vw;
    text-shadow: 0 0.26vw 0.677vw rgba(134,162,255,.14);
    margin-right: 0.729vw;
        }
        @media screen and (max-width: 750px){
            font-size: .3rem;
    font-family: Rubik-SemiBoldItalic,Rubik;
    font-weight: 400;
    line-height: .36rem;
    text-shadow: 0 0 0 rgba(134,162,255,.14);
    margin-right: 0.06rem;
        }

    `,l=m`
        color: #fff;
        font-size: 20px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        line-height: 28px;
        @media screen and (max-width: 1440px){
            color: #fff; 
            font-size: 1.042vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    line-height: 1.458vw;
        }
        @media screen and (max-width: 750px){
            font-size: .28rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    line-height: .4rem;
        }
    `,s=m`
        color: #a7a4b5;
        font-size: 16px;
        font-family: PingFangSC-Light,PingFang SC;
        font-weight: 400;
        line-height: 24px;
        @media screen and (max-width: 1440px){
            color: #a7a4b5;
            font-size: .833vw;
    font-family: PingFangSC-Light,PingFang SC;
    font-weight: 400;
    line-height: 1.25vw;
        }
        @media screen and (max-width: 750px){
            max-width: 2.5rem;
    font-size: .24rem;
    font-family: PingFangSC-Light,PingFang SC;
    font-weight: 400;
    line-height: .34rem;
    text-align: center;
        }
    `,c=m`
        background: rgba(133,107,255,.1);
        border-radius: 8px;
        border: 1px solid #343864;
        box-shadow: none;
        display: block;
        width: 1440px;
        height: 240px;
        margin: 60px auto 0;
        position: relative;
        padding: 34px 140px 57px 420px;
        @media screen and (max-width: 1440px){
            background: rgba(133,107,255,.1);
    border-radius: 0.417vw;
    border: 0.052vw solid #343864;
    box-shadow: none;
    display: block;
    width: 75vw;
    height: 12.5vw;
    margin: 3.125vw auto 0;
    position: relative;
    padding: 1.771vw 7.292vw 2.96875vw 21.875vw;
        }
        @media screen and (max-width: 750px){
            display: none;  
        }

    `,d=m`
        display: none;
        @media screen and (max-width: 750px){
            display: block;
    padding-bottom: 1.28rem;  
        }
    `,g=m`
        position: absolute;
        width: 294px;
        height: auto;
        top: 16px;
        left: 76px;
        border: 0;
        @media screen and (max-width: 1440px){
            position: absolute;
    width: 15.313vw;
    height: auto;
    top: 0.833vw;
    left: 3.958vw;
        }
    `,h=m`
        display: block;
        @media screen and (max-width: 1440px){
            display: block;
        }
        @media screen and (max-width: 750px){
            display: none;
        }
        
    `,v=m`
        color: #fff;
        font-size: 24px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        line-height: 33px;
        margin-bottom: 18px;
        @media screen and (max-width: 1440px){
            color: #fff;
            font-size: 1.25vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    line-height: 1.719vw;
    margin-bottom: 0.9375vw;
        }
        @media screen and (max-width: 750px){
            font-size: .42rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    
    line-height: .58rem;
    text-align: center;
    color: #fff;
        }
    `,S=m`
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
        }
    `,y=m`
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
        }
    `,w=m`
        width: max-content;
        align-items: center;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 20px;
        @media screen and (max-width: 1440px){
            width: max-content;
            align-items: center; 
            display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1.4458vw;
        }
        @media screen and (max-width: 750px){
            width: auto; 
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    grid-column-gap: 0;
    grid-row-gap: 0;
        }
       
    `,_=m`
        margin-right: 20px;
        margin-bottom: 0;
        ::before{
            display: table;
            content: "";
        ::after{
            clear: both;
            display: table;
            content: "";
            }
        }
        @media screen and (max-width: 1440px){
            margin-right: 1.042vw;
    margin-bottom: 0;
        }
        @media screen and (max-width: 750px){
            margin-bottom: 0.32rem!important;
    margin-right: 0;
        }
       
    `,f=m`
        margin-left: 0px;
        line-height: 1.2;
        position: relative;
        font-size: 14px;
        ::before{
            display: table;
            content: "";
        }
        ::after{
            clear: both;
            display: table;
            content: "";
        }
    `,u=m`
        font-size: 14px;
        position: relative;
        display: inline-block;
        width: 100%;
        @media screen and (max-width: 1440px){
            font-size: .729vw;
        }
    `,p=m`
        background: #241a48;
        color: #fff;
        border: 2px solid transparent;
        box-sizing: border-box;
        line-height: 1.5;
        width: 280px;
        height: 48px;
        border-radius: 26px;
        padding: 0 22px;
        display: inline-block;
        font-size: inherit;
        outline: 0;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        @media screen and (max-width: 1440px){
            background: #241a48;
    color: #fff;
    border: 0.104vw solid transparent;
    box-sizing: border-box; 
    line-height: 1.5;
    width: 14.583vw;
    height: 2.5vw;
    border-radius: 1.354vw;
    padding: 0 1.146vw;
        }
        @media screen and (max-width: 750px){
            width: 6.38rem;
    height: 0.88rem;
    margin: 0 auto; 
    border-radius: 0.52rem;
    padding: 0 0.48rem;
    font-size: .28rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    line-height: .48rem;
        }
    `,b=m`
        position: absolute;
        top: 153px;
        right: 214px;
        margin-right: 0;
        margin-bottom: 0;
        ::before{
            display: table;
            content: "";
        }
        @media screen and (max-width: 1440px){
            position: absolute;
    top: 7.969vw;
    right: 11.146vw;
            margin-right: 0;
            margin-bottom: 0;
        }
        @media screen and (max-width: 750px){
            margin-top: 0.08rem;
    margin-bottom: 0!important;
    position: relative;
    top: 0;
    right: 0; 
        }
       
    `,k=m`
        margin-left: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1.2;
        position: relative;
        font-size: 14px;
        ::before{
            display: table;
            content: "";
        }
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
        }
    `,C=m`
       background: #fff;
       border-radius: 26px;
        font-size: 14px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 500;
        color: #28292e;
        border: none;
        width: 180px;
        height: 48px;
        line-height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: not-allowed;
        white-space: nowrap;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        transition: .1s;
        padding: 12px 20px;
        @media screen and (max-width: 1440px){
            background: #fff;  
            border-radius: 1.354vw;
    font-size: .729vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #28292e;
    border: none;
    width: 9.375vw;
    height: 2.5vw;
    line-height: 1.042vw;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
        }
        @media screen and (max-width: 750px){
            background: #fff; 
            width: 2.56rem;
    height: 0.88rem;
    border-radius: 0.52rem;
    border: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #28292e;
    font-size: .24rem;
    line-height: .48rem;
    letter-spacing: 0;
        }
        
    `,z=m`
        display: none;
        @media screen and (max-width: 750px){
            display: block;
    position: relative;
        }
    `,P=m`
        @media screen and (max-width: 750px){
            margin-bottom: 0.4rem;
        }
    `,E=m`
        @media screen and (max-width: 750px){
            width: 6.86rem;
    height: 7.7rem;
    background: rgba(133,107,255,.1);
    border-radius: 0.16rem;
    border: 0.02rem solid #343864;
    box-shadow: none;
    padding: 0.48rem 0.24rem;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0.4rem auto 0;
        }
    `;return m`
       display: none; 
       @media screen and (max-width: 750px){
        display: block;
    position: relative;
       }
    `,x(de,{children:[x("div",{children:[a("div",{css:e,children:"简单4步 • 探索新可能"}),x("div",{css:t,children:[x("div",{css:n,children:[a("img",{css:r,src:"https://www.zego.im/_nuxt/img/fcdbe8c.png"}),x("div",{css:i,children:[a("span",{css:o,children:"01"}),a("span",{css:l,children:"業務探索"})]}),a("div",{css:s,children:a("div",{children:"根据业务需要选择合适的方案"})})]}),x("div",{css:n,children:[a("img",{css:r,src:"https://www.zego.im/_nuxt/img/18b20cb.png"}),x("div",{css:i,children:[a("span",{css:o,children:"02"}),a("span",{css:l,children:"方案設計"})]}),a("div",{css:s,children:a("div",{children:"技术专家设计规划成熟方案"})})]}),x("div",{css:n,children:[a("img",{css:r,src:"https://www.zego.im/_nuxt/img/8c63d88.png"}),x("div",{css:i,children:[a("span",{css:o,children:"03"}),a("span",{css:l,children:"服務接入"})]}),a("div",{css:s,children:a("div",{children:"技术团队7*24小时提供协助"})})]}),x("div",{css:n,children:[a("img",{css:r,src:"https://www.zego.im/_nuxt/img/e7b2430.png"}),x("div",{css:i,children:[a("span",{css:o,children:"04"}),a("span",{css:l,children:"運營支撐"})]}),a("div",{css:s,children:a("div",{children:"提供可靠的质量分析产品运营"})})]})]})]}),x("div",{children:[x("div",{css:c,children:[a("img",{css:g,src:"https://www.zego.im/_nuxt/img/9120ff8.png"}),x("div",{css:h,children:[a("div",{css:v,children:"开启你的第一步"}),a("div",{css:S,children:a("div",{css:y,children:x("form",{css:w,children:[a("div",{css:_,children:a("div",{css:f,children:a("div",{css:u,children:a("input",{type:"text",placeholder:"請輸入你的姓名",autoComplete:"off",maxLength:30,id:"userInput",css:p})})})}),a("div",{css:_,children:a("div",{css:f,children:a("div",{css:u,children:a("input",{type:"text",placeholder:"請輸入你的電話",autoComplete:"off",maxLength:30,id:"userInput",css:p})})})}),a("div",{css:_,children:a("div",{css:f,children:a("div",{css:u,children:a("input",{type:"text",placeholder:"請輸入公司名稱",autoComplete:"off",maxLength:30,id:"userInput",css:p})})})}),a("div",{css:_,children:a("div",{css:f,children:a("div",{css:u,children:a("input",{type:"text",placeholder:"請輸入你的郵箱",autoComplete:"off",maxLength:30,id:"userInput",css:p})})})}),a("div",{css:b,children:a("div",{css:k,children:a("button",{type:"button",disabled:"disabled",css:C,children:"預約專屬專案"})})})]})})})]}),a("div",{css:z,children:x("div",{css:P,children:[a("div",{css:v,children:"開啟你的第一步"}),a("div",{children:a("div",{children:a("div",{children:a("div",{children:x("form",{css:w,children:[a("div",{css:_,children:a("div",{css:f,children:a("div",{css:u,children:a("input",{type:"text",placeholder:"請輸入你的姓名",autoComplete:"off",maxLength:30,id:"userInput",css:p})})})}),a("div",{css:_,children:a("div",{css:f,children:a("div",{css:u,children:a("input",{type:"text",placeholder:"請輸入你的電話",autoComplete:"off",maxLength:30,id:"userInput",css:p})})})}),a("div",{css:_,children:a("div",{css:f,children:a("div",{css:u,children:a("input",{type:"text",placeholder:"請輸入公司名稱",autoComplete:"off",maxLength:30,id:"userInput",css:p})})})}),a("div",{css:_,children:a("div",{css:f,children:a("div",{css:u,children:a("input",{type:"text",placeholder:"請輸入你的郵箱",autoComplete:"off",maxLength:30,id:"userInput",css:p})})})}),a("div",{css:b,children:a("div",{css:k,children:a("button",{type:"button",disabled:"disabled",css:C,children:"預約專屬專案"})})})]})})})})})]})})]}),a("div",{css:d,children:a("div",{css:E,children:x("div",{css:z,children:[a("div",{css:P,children:a("div",{css:v,children:"開啟你的第一步"})}),a("div",{children:a("div",{children:a("div",{children:a("div",{children:x("form",{css:w,children:[a("div",{css:_,children:a("div",{css:f,children:a("div",{css:u,children:a("input",{type:"text",placeholder:"請輸入你的姓名",autoComplete:"off",maxLength:30,id:"userInput",css:p})})})}),a("div",{css:_,children:a("div",{css:f,children:a("div",{css:u,children:a("input",{type:"text",placeholder:"請輸入你的電話",autoComplete:"off",maxLength:30,id:"userInput",css:p})})})}),a("div",{css:_,children:a("div",{css:f,children:a("div",{css:u,children:a("input",{type:"text",placeholder:"請輸入公司名稱",autoComplete:"off",maxLength:30,id:"userInput",css:p})})})}),a("div",{css:_,children:a("div",{css:f,children:a("div",{css:u,children:a("input",{type:"text",placeholder:"請輸入你的郵箱",autoComplete:"off",maxLength:30,id:"userInput",css:p})})})}),a("div",{css:b,children:a("div",{css:k,children:a("button",{type:"button",disabled:"disabled",css:C,children:"預約專屬專案"})})})]})})})})})]})})})]})]})},Jw=()=>{const e=m`
       
       background-color:#0e041e ;
       @media screen and (max-width: 1440px){
        background-color: #0e041e;
       }
       @media screen and (max-width: 750px){
        margin-top: 0;
       }
       
        
    `,t=m`
        padding-top: 64px;
        height: 840px;
        position: relative;
        @media screen and (max-width: 1440px){
        
        background-size: auto 100%;
        padding-top: 3.333vw;
        height: 43.75vw;
            position: relative;
           }
        @media screen and (max-width: 750px){
        background: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_img_live_banner.jpg) no-repeat;
        background-size: 100% auto;
        background-position: 100% 100%;
        padding-top: 0;
        height: 9.9rem;
        width: 100%;
       
       }
       
    `,n=m`
        max-width: 1920px;
        margin: 0 auto;
        padding-top: 130px;
        position: relative;
        @media screen and (max-width: 1440px){
            max-width: 100vw;
    margin: 0 auto;
    padding-top: 6.771vw;  
        }
        @media screen and (max-width: 750px){
        max-width: 7.5rem;
        margin: 0 auto;
        padding-top: 0.84rem;
        position: relative;
        padding-left: 0.32rem;
        background-size: auto 9.9rem;
        }
        
        
    `,r=m`
        position: relative;
        z-index: 4;
        max-width: 1440px;
        margin: 0 auto;
        @media screen and (max-width: 1440px){
            max-width: 75vw;
    margin: 0 auto;
        }
        @media screen and (max-width: 750px){
            max-width: 7.5rem; 
            margin: 0 auto;
          
        }
        
        
    `,i=m`
        display: block;
        width: max-content;
        height: 38px;
        background: linear-gradient(180deg,#fffefd,#fcf0e4);
        box-shadow: inset -1px -1px 1px 0 #ffd3a7;
        border-radius: 0 19px 19px 0;
        font-size: 16px;
        font-weight: 600;
        color: #f14a23;
        line-height: 22px;
        padding: 8px 29px 8px 56px;
        margin-bottom: 30px;
        position: relative;
        @media screen and (max-width: 1440px){
            display: block;
        width: max-content;
        height: 1.979vw; 
        background: linear-gradient(180deg,#fffefd,#fcf0e4);
        box-shadow: inset -0.052vw -0.052vw 0.052vw 0 #ffd3a7;
        border-radius: 0 0.99vw 0.99vw 0;
        font-size: .833vw;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: #f14a23;
        line-height: 1.146vw;
        padding: 0.417vw 1.51vw 0.417vw 2.917vw;
        margin-bottom: 1.5625vw;
        position: relative; 
        }
        @media screen and (max-width: 750px){
        display: none; 
        
        }
        
    `,o=m`
        position: absolute;
        top: -30px;
        left: -20px;
        width: 68px;
        height: auto;
        @media screen and (max-width: 1440px){
        position: absolute;
        top: -1.5625vw;
        left: -1.042vw;
        width: 3.542vw;
        height: auto;
        }
    `,l=m`
        width: max-content;
        font-size: 80px;
        font-weight: 600;
        color: #fff; 
        letter-spacing: 2px;
        margin-bottom: 20px;
        line-height: 112px;
        @media screen and (max-width: 1440px){
            width: max-content;
    font-size: 4.167vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    letter-spacing: .104vw;
    margin-bottom: 1.042vw;
    line-height: 5.833vw;
        }
        @media screen and (max-width: 750px){
        font-size: .72rem;
        font-family: PingFangSC-Semibold,PingFang SC;
        color: #fff;
        line-height: .72rem;
        margin-bottom: 0.4rem; 
        
        }
        
    `,s=m`
        max-width: 623px;
        font-size: 20px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 500;
        color: hsla(0,0%,100%,.9);
        line-height: 30px;
        @media screen and (max-width: 1440px){
            max-width: 30.156vw;
    font-size: 1.042vw;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: hsla(0,0%,100%,.9);
    line-height: 1.5625vw;   
        }
        @media screen and (max-width: 750px){
        font-size: .32rem;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 600;
        color: #fff;
        line-height: .48rem;
        max-width: 6.24rem!important;
        }
       
        
    `,c=m`
        display: flex;
        flex-direction: row;
        margin-top: 30px;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    margin-top: 1.5625vw;
        }
        @media screen and (max-width: 750px){
        display: flex;
        flex-direction: row;
        margin-top: 0.36rem;
        }
        
        
    `,d=m`
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        line-height: 20px;
        padding: 4px 8px;
        margin-right: 8px;
        background: hsla(0,0%,100%,.1);
        border-radius: 2px;
        @media screen and (max-width: 1440px){
            font-size: .729vw;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 1.042vw;
    padding: 0.208vw 0.417vw;
    margin-right: 0.417vw;
    background: hsla(0,0%,100%,.1);
    border-radius: 0.104vw; 
        }
        @media screen and (max-width: 750px){
        padding: 0.06rem 0.12rem;
        font-size: .2rem;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 500;
        color: #fff;
        line-height: .28rem;
        margin-right: 0.12rem;
        background: hsla(0,0%,100%,.1);
        border-radius: 0.04rem;  
        }
        
    `,g=m`
        margin-top: 54px;
        @media screen and (max-width: 1440px){
            margin-top: 2.8125vw;
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
        }
        display: flex;
        flex-direction: row;
        @media screen and (max-width: 750px){
            margin-top: 0.58rem;
            display: flex;
            flex-direction: row;
        }
    `,h=m`
        color: #28292e;
        box-shadow: none;
        
        :first-of-type{
        width: 146px;
        height: 48px;
        background: hsla(0,0%,100%,.9);
        border-radius: 28px;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 7px;
        }
        :nth-of-type(2){
        width: 146px;
        height: 48px;
        font-size: 16px;
        font-weight: 500;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        }
        @media screen and (max-width: 1440px){
            :first-of-type{
        color: #28292e;
        box-shadow: none;
        width: 7.604vw;
    height: 2.5vw;
    background: hsla(0,0%,100%,.9);
    border-radius: 1.458vw;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 0.365vw;}
    :nth-of-type(2){
        width: 7.604vw;
    height: 2.5vw;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    }
    position: relative;
        }
        @media screen and (max-width: 750px){
        :first-of-type{
            width: 2.56rem;
    height: 0.8rem;
    background: #fff;
    border-radius: 0.56rem;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    line-height: .34rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 0;
        }
        :nth-of-type(2){
            width: 2.5rem;
    height: 0.8rem;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .34rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
        }
        }
    `,v=m`
        width: 1209px;
        position: absolute;
        top: 14px;
        right: 0;
        height: 840px;
        @media screen and (max-width: 1440px){
        width: 62.969vw;
        height: 43.75vw;
        position: absolute;
        top: -3.33vw;
        right: 0; 
        }
        @media screen and (max-width: 750px){
            display: none;
        }
    `,S=m`
        width: 861px;
        position: absolute;
        top: 0;
        right: 0;
        height: 840px;
        @media screen and (max-width: 1440px){
            width: 62.969vw; 
            height: 43.75vw;
            
        }
    `,y=m`
        background-color: #0e041e;
        @media screen and (max-width: 1440px){
            background: #0e041e;
        }
        @media screen and (max-width: 750px){
            height: 16.4rem; 
        }
        
        `,w=m`
        font-size: 40px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 600;
        color: #fff;
        line-height: 56px;
        padding-top: 100px;
        padding-bottom: 13px;
        text-align: center;
        position: relative;
        z-index: 1;
        @media screen and (max-width: 1440px){
        font-size: 2.083vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: 2.917vw;
    padding-top: 5.208vw;
    padding-bottom: 0.677vw;
    text-align: center;
    position: relative;
    z-index: 1;
    }
        
        @media screen and (max-width: 750px){
        font-size: .56rem;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: #fff;
        line-height: .9rem;
        padding-top: 1.2rem;
        padding-bottom: 0.6rem;
        }

    `,_=m`
     @media screen and (max-width: 1440px){
        padding-bottom: 1.771vw;
       }
       @media screen and (max-width: 750px){
        margin: auto;
        position: relative;
        width: 100%;
       }
      
        
    `,f=m`
        height: 890px;
        @media screen and (max-width: 1440px){
            height: 46.354vw; 
        }
    `,u=m`
        background: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/xunizhibo-pc.png);
        background-size: cover;
        width: 100%;
        height: 660px;
        @media screen and (max-width: 1440px){
            background: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/xunizhibo-pc.png);
    background-size: cover;
    width: 100%;
    height: 34.375vw;
        }
        @media screen and (max-width: 750px){
            background: url(https://zego-platform-growth.oss-cn-shanghai.aliyuncs.com/cdn-source/images/virtual-streaming/m_live_purple.jpg) no-repeat 50%;
    background-size: cover;
    width: 100%;
    height: auto;
        }
        
    `;return a(de,{children:x("div",{css:e,children:[a("div",{css:t,children:x("div",{css:n,children:[x("div",{css:r,children:[x("a",{href:"#",target:"_blank",css:i,children:['"暢享實時互動 全線產品1折起"',a("img",{src:"https://www.zego.im/_nuxt/img/e59189b.png",css:o})]}),a("div",{css:l,children:a("h1",{children:"虛擬直播"})}),a("div",{css:s,children:a("h2",{children:"全新直播方式，虚擬形象替代真人出镜，打造不一樣的直播體驗，支持表情随動、手势識別觸發特效等多種玩法"})}),x("div",{css:c,children:[a("span",{css:d,children:"虛擬形象"}),a("span",{css:d,children:"超低延遲"}),a("span",{css:d,children:"實時互動"})]}),x("div",{css:g,children:[a("div",{css:h,children:"免費試用"}),a("div",{css:h,children:"方案諮詢"})]})]}),a("div",{css:v,children:a("img",{src:"src\\1fcaea26-f886-411b-b522-a0f015891402 (1).png",css:S})})]})}),x("div",{css:y,children:[a("div",{css:w,children:"方案優勢"}),a("div",{css:_,children:a(Gw,{})})]}),a("div",{children:a(Xw,{})}),a("div",{css:f,children:a(qw,{})}),a("div",{css:u,children:a(Zw,{})})]})})};function e1(e){return vn({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}const t1=()=>{const e=m`
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
        }
        @media screen and (max-width: 750px){
            display: none;
        }
       
    `,t=m`
        height: 350px;
        background: #000002;
        width: 100%;
        margin: 0 auto;
        @media screen and (max-width: 1440px){
            height: 18.229vw;  
            background: #000002;
    width: 100%;
    margin: 0 auto;
        }
    `,n=m`
        height: 350px;
        width: 100%;
        background: url(https://www.zego.im/_nuxt/img/4580834.png) no-repeat 50%;
        background-size: cover;
        @media screen and (max-width: 1440px){
            height: 18.229vw; 
            width: 100%;
            background: url(https://www.zego.im/_nuxt/img/4580834.png) no-repeat 50%;
    background-size: cover;
        }
    `,r=m`
        padding-top: 67px;
        max-width: 1440px;
        margin: 0 auto;
        @media screen and (max-width: 1440px){
            padding-top: 3.49vw;
    max-width: 75vw;
    margin: 0 auto; 
        }

        @media screen and (max-width: 750px){
            max-width: 100%;
            height: 5.22rem;
    background: url(https://www.zego.im/_nuxt/img/741269e.png) no-repeat;
    background-size: cover;
    padding: 0.84rem 0 0.8rem 0.32rem;
        }
        
    `,i=m`
        font-size: 32px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: #fff;
        line-height: 45px;
        text-align: left;
        margin-bottom: 24px;
        @media screen and (max-width: 1440px){
            font-size: 1.667vw;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: 2.34375vw;
    text-align: left;
    margin-bottom: 1.25vw;
        }
    `,o=m`
        display: flex;
        flex-direction: row;
        @media screen and (max-width: 1440px){
            display: flex;
    flex-direction: row; 
        }
        @media screen and (max-width: 750px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
        }
        
    `,l=m`
        width: 140px;
        height: 48px;
        margin-right: 16px;
        background: #05f;
        border-radius: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 500;
        color: #fff;
        line-height: 24px;
        text-decoration: none;
        @media screen and (max-width: 1440px){
            width: 7.292vw;
    height: 2.5vw;
    margin-right: 0.833vw;
    background: #05f;
    border-radius: 1.354vw;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 1.25vw;
        }
        @media screen and (max-width: 750px){
            display: flex;
    width: 2.08rem;
    height: 0.72rem;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .48rem;
    align-items: center;
    justify-content: center;
    background: #05f;
    border-radius: 0.52rem;
    margin-right: 0.18rem;
        }
    `,s=m`
        width: 140px;
        height: 48px;
        border-radius: 26px;
        border: 1px solid #fff;
        font-size: 16px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 500;
        color: #fff;
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 1440px){
            width: 7.292vw;
    height: 2.5vw; 
    border-radius: 1.354vw;
    border: 0.052vw solid #fff;
    font-size: .833vw;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 1.25vw;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
        }
        @media screen and (max-width: 750px){
            width: 2.08rem;
    border-radius: 0.52rem;
    border: 0.02rem solid #fff;
    height: 0.72rem;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: .48rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
        }
    `,c=m`
        display: flex;
        flex-direction: row;
        margin-top: 70px;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    margin-top: 3.646vw; 
        }
        @media screen and (max-width: 750px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    margin-top: 0.94rem;
        }
        

    `,d=m`
        display: flex;
        flex-direction: column;
        margin-right: 64px;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-right: 3.333vw;
        }
        @media screen and (max-width: 750px){
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-right: 0.12rem; 
    :last-of-type{
        margin-right: 0;
    }
        }
    `,g=m`
        font-size: 24px;
        font-weight: 500;
        color: #fff;
        line-height: 35px;
        margin-bottom: 2px;
        text-align: left;
        @media screen and (max-width: 1440px){
            font-size: 1.25vw;
            font-weight: 500;
    color: #fff;
    line-height: 1.823vw;
    margin-bottom: 0.104vw;
        }
        @media screen and (max-width: 750px){
            font-size: .28rem; 
            font-weight: 500;
    color: #fff;
    line-height: .42rem;
    margin-bottom: 0.08rem;
    max-width: 3.48rem;
        }
       
    `,h=m`
        font-size: 14px;
        font-family: PingFangSC-Light,PingFang SC;
        font-weight: 400;
        color: #fff;
        line-height: 20px;
        @media screen and (max-width: 1440px){
            font-size: .729vw;
    font-family: PingFangSC-Light,PingFang SC;
    font-weight: 400;
    color: #fff;
    line-height: 1.042vw;
        }
        @media screen and (max-width: 750px){
            font-size: .24rem;
    line-height: .28rem;
    font-family: PingFangSC-Light,PingFang SC;
    font-weight: 400;
    color: #fff;
    transform: scale(.8);
    transform-origin: 0;
        }
    `,v=m`
        background: #000404;
        @media screen and (max-width: 1440px){
            background: #000404;
        }
    `,S=m`
        display: flex;
        flex-direction: column;
        min-width: 925px;
        max-width: 1440px;
        padding-top: 66px;
        margin: 0 auto 34px;
        justify-content: space-between;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    min-width: 48.177vw;
    max-width: 75vw;
    padding-top: 3.438vw;
    margin: 0 auto 1.771vw;
    -webkit-box-pack: justify;
    justify-content: space-between; 
        }
        
    `,y=m`
        padding-bottom: 43px;
        border-bottom: 1px solid hsla(0,0%,100%,.2);
        @media screen and (max-width: 1440px){
            padding-bottom: 2.24vw;
    border-bottom: 0.052vw solid hsla(0,0%,100%,.2); 
        }
    `,w=m`
        display: flex;
        flex-direction: row;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
        }
    `,_=m`
        margin-right: 102px;
        @media screen and (max-width: 1440px){
            margin-right: 5.3125vw; 
        }
    `,f=m`
        margin-top: 12px;
        width: max-content;
        font-size: 14px;
        font-weight: 400;
        color: hsla(0,0%,100%,.8);
        line-height: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        @media screen and (max-width: 1440px){
            margin-top: 0.625vw;
            width: max-content;
    font-size: .729vw;
    font-family: PingFangSC-Light,PingFang SC;
    font-weight: 400;
    color: hsla(0,0%,100%,.8);
    line-height: 1.042vw;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
         }
    `,u=m`
        margin-top: 24px;
        margin-bottom: 14px;
        width: max-content;
        font-size: 14px;
        font-family: PingFangSC-Light,PingFang SC;
        font-weight: 400;
        color: hsla(0,0%,100%,.8);
        line-height: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
         span{
            font-weight: 600;
         }
         @media screen and (max-width: 1440px){
            margin-top: 1.25vw;
    margin-bottom: 0.729vw;
    width: max-content;
    font-size: .729vw;
    font-family: PingFangSC-Light,PingFang SC;
    font-weight: 400;
    color: hsla(0,0%,100%,.8);
    line-height: 1.042vw;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
         }
         
    `,p=m`
        width: 20px;
        height: 20px;
        margin-right: 8px;
        @media screen and (max-width: 1440px){
            width: 1.042vw;
    height: 1.042vw;
    margin-right: 0.417vw;
        }
    `,b=m`
        width: max-content;
        font-size: 14px;
        font-family: PingFangSC-Light,PingFang SC;
        font-weight: 400;
        color: hsla(0,0%,100%,.8);
        line-height: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        @media screen and (max-width: 1440px){
            width: max-content;
    font-size: .729vw;
    font-family: PingFangSC-Light,PingFang SC;
    font-weight: 400;
    color: hsla(0,0%,100%,.8);
    line-height: 1.042vw;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
        }
    `,k=m`
        display: flex;
        justify-content: space-between;
        max-width: 1440px;
        color: #000;
        @media screen and (max-width: 1440px){
            display: flex;
            max-width: 75vw;
    color: #000;
        }
        @media screen and (max-width: 750px){
            -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0 0.32rem; 
        }
        
        `,C=m`
            margin-right: 156px;  
            @media screen and (max-width: 1440px){
                margin-right: 8.125vw;
            }
        `,z=m`
            margin-right: 138px;
            margin-left: 0;
            @media screen and (max-width: 1440px){
                margin-right: 8.125vw;
            }
        `,P=m`
            margin-right: 85px;
            margin-left: 0;
            @media screen and (max-width: 1440px){
                margin-right: 4.0625vw;
            }
        `,E=m`
            margin-right: 85px;
            margin-left: 0;
            @media screen and (max-width: 1440px){
                margin-right: 4.0625vw;
            }
            
        `,O=m`
            margin-right: 85px;
            margin-left: 0;
            @media screen and (max-width: 1440px){
                margin-right: 4.0625vw;
            }
        `,N=m`
            margin-right: 0;
            margin-left: 0;
            ul{
                max-height: 232px;  
            }
        `,M=m`
        margin-bottom: 26px;
        font-size: 16px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        color: hsla(0,0%,100%,.8);
        line-height: 22px;
        width: max-content;
        @media screen and (max-width: 1440px){
            margin-bottom: 1.042vw;
            width: max-content;
            font-size: .833vw;
            font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: hsla(0,0%,100%,.8);
    line-height: 1.146vw;
        }
        @media screen and (max-width: 750px){
            font-size: .2rem;
        }
        
    `,j=m`
        max-height: 217px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style: none;
        @media screen and (max-width: 1440px){
            display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    max-height: 11.502vw;
    flex-wrap: wrap; 
        }
    `,D=m`
        line-height: 17px;
        margin-bottom: 12px;
        width: max-content;
        list-style: none;
        :nth-of-type(n+7){
            margin-left: 36px;
            @media screen and (max-width: 1440px){
                margin-left: 1.875vw;   
            }
        }
        :last-of-type{
            margin-bottom: 0;
        }
        @media screen and (max-width: 750px){
            padding-left: 3em;
    text-indent: -3em;
    line-height: 1;
    margin-bottom: 0.2rem;
    width: auto;
        }
        @media screen and (max-width: 1440px){
            width: max-content;
    line-height: .885vw;
    margin-bottom: 0.833vw;
        }
        
    `,A=m`
        font-size: 14px;
        font-family: PingFangSC-Light,PingFang SC;
        font-weight: 400;
        color: hsla(0,0%,80%,.8);
        line-height: 20px;
        width: max-content;
        @media screen and (max-width: 1440px){
            width: max-content;
    font-size: .729vw;
    font-family: PingFangSC-Light,PingFang SC;
    font-weight: 400;
    color: hsla(0,0%,80%,.8);
    line-height: 1.042vw;
        }
    `,oe=m`
        width: 44px;
        height: 44px;  
        @media screen and (max-width: 1440px){
            width: 2.292vw;
    height: 2.292vw;  
        }
    `,ee=m`
        display: none;
        @media screen and (max-width: 750px){
            display: flex;
    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    background: #000404; 
        }
    `,F=m`
        @media screen and (max-width: 750px){
            max-width: 3.48rem;
    margin-bottom: 0.36rem;
    font-size: .28rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: #fff;
    line-height: .4rem; 
        }
    `,I=m`
    @media screen and (max-width: 750px){
        padding: 0.48rem 0 0.4rem 0.32rem;
    }
    `,$=m`
        @media screen and (max-width: 750px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    margin-top: 0.32rem; 
        }
    `,W=m`
        @media screen and (max-width: 750px){
            font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 600;
    color: #fff;
    line-height: .34rem;
    margin-right: 0.48rem;  
        }
    `,Y=m`
        @media screen and (max-width: 750px){
            display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    position: relative;
        }
    `,Ue=m`
        @media screen and (max-width: 750px){
            position: relative; 
        }
    `,le=m`
       @media screen and (max-width: 750px){
        display: block;
        width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.4rem;
       } 
    `,Ft=m`
        @media screen and (max-width: 750px){
            position: absolute;
    bottom: 1rem;
    left: 0;
    display: none; 
    width: max-content;
    background: #fff;
    border-radius: 0.08rem;
    padding: 0.18rem 0.32rem;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #28292e;
    line-height: .34rem;
        }
    `,Pe=m`
        @media screen and (max-width: 750px){
            position: relative;  
        }
    `,Mt=m`
        @media screen and (max-width: 750px){
            display: none; 
            position: absolute;
    bottom: 1rem;
    left: -2rem;
    width: max-content;
    background: #fff;
    border-radius: 0.08rem;
    padding: 0.18rem 0.32rem;
    font-size: .24rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #28292e;
    line-height: .34rem;
        }
    `;return a(de,{children:x("footer",{children:[x("div",{css:e,children:[a("div",{css:t,children:a("div",{css:n,children:x("div",{css:r,children:[a("div",{css:i,children:"开启业务增长之旅，即享120,000分钟"}),x("div",{css:o,children:[a("a",{href:"#",target:"_blank",css:l,children:"免费试用"}),a("div",{css:s,children:"方案諮詢"})]}),x("div",{css:c,children:[x("div",{css:d,children:[a("div",{css:g,children:"7*24h"}),a("div",{css:h,children:"技術團隊支持"})]}),x("div",{css:d,children:[a("div",{css:g,children:"99.99%"}),a("div",{css:h,children:"全年服務可用性"})]}),x("div",{css:d,children:[a("div",{css:g,children:"212個"}),a("div",{css:h,children:"國家地區全覆蓋"})]}),x("div",{css:d,children:[a("div",{css:g,children:"100+"}),a("div",{css:h,children:"行業技術解決方案"})]})]})]})})}),a("div",{css:v,children:a("div",{css:S,children:a("div",{css:y,children:x("div",{css:w,children:[x("div",{css:_,children:[a("a",{href:"#",children:"Nu"}),a("div",{css:f,children:"關注或連繫我們"}),x("div",{css:u,children:[a(Hw,{css:p}),"諮詢電話 :",a("span",{children:" 02-8913-1553 "})]}),x("div",{css:b,children:[a(e1,{css:p}),"地址 : 新北市新店區北新路三段207之3號7樓"]})]}),x("div",{css:k,children:[x("div",{css:C,children:[a("h3",{css:M,children:"產品"}),x("ul",{css:j,children:[a("li",{css:D,children:a("div",{css:A,children:"Avatar虛擬形象"})}),a("li",{css:D,children:a("div",{css:A,children:"實時音視頻"})}),a("li",{css:D,children:a("div",{css:A,children:"實時語音"})}),a("li",{css:D,children:a("div",{css:A,children:"即時通訊IM"})}),a("li",{css:D,children:a("div",{css:A,children:"暢直播"})}),a("li",{css:D,children:a("div",{css:A,children:"超級白板"})}),a("li",{css:D,children:a("div",{css:A,children:"AI視覺"})}),a("li",{css:D,children:a("div",{css:A,children:"實時錄製"})}),a("li",{css:D,children:a("div",{css:A,children:"星圖"})})]})]}),x("div",{css:z,children:[a("h3",{css:M,children:"解決方案"}),x("ul",{css:j,children:[a("li",{css:D,children:a("div",{css:A,children:"秀場直播"})}),a("li",{css:D,children:a("div",{css:A,children:"語聊房"})}),a("li",{css:D,children:a("div",{css:A,children:"視頻會議"})}),a("li",{css:D,children:a("div",{css:A,children:"在線KTV"})}),a("li",{css:D,children:a("div",{css:A,children:"在線教育"})}),a("li",{css:D,children:a("div",{css:A,children:"電商直播"})}),a("li",{css:D,children:a("div",{css:A,children:"遊戲競技"})}),a("li",{css:D,children:a("div",{css:A,children:"物聯網"})}),a("li",{css:D,children:a("div",{css:A,children:"遠程醫療"})}),a("li",{css:D,children:a("div",{css:A,children:"在線健身"})}),a("li",{css:D,children:a("div",{css:A,children:"出海"})})]})]}),x("div",{css:P,children:[a("h3",{css:M,children:"產業中心"}),x("ul",{css:j,children:[a("li",{css:D,children:a("div",{css:A,children:"私有化部屬"})}),a("li",{css:D,children:a("div",{css:A,children:"信創產品"})}),a("li",{css:D,children:a("div",{css:A,children:"即構會議"})}),a("li",{css:D,children:a("div",{css:A,children:"呼叫中心"})}),a("li",{css:D,children:a("div",{css:A,children:"Go直播"})}),a("li",{css:D,children:a("div",{css:A,children:"企業通訊"})})]})]}),x("div",{css:E,children:[a("h3",{css:M,children:"開發者中心"}),x("ul",{css:j,children:[a("li",{css:D,children:a("div",{css:A,children:"文檔中心"})}),a("li",{css:D,children:a("div",{css:A,children:"SDK中心"})}),a("li",{css:D,children:a("div",{css:A,children:"API中心"})})]})]}),x("div",{css:O,children:[a("h3",{css:M,children:"公司"}),x("ul",{css:j,children:[a("li",{css:D,children:a("div",{css:A,children:"關於我們"})}),a("li",{css:D,children:a("div",{css:A,children:"市場活動"})}),a("li",{css:D,children:a("div",{css:A,children:"熱門文章"})}),a("li",{css:D,children:a("div",{css:A,children:"校園招聘"})}),a("li",{css:D,children:a("div",{css:A,children:"社會招聘"})})]})]}),x("div",{css:N,children:[a("h3",{css:M,children:"認證"}),x("ul",{css:j,children:[a("li",{css:D,children:a("img",{css:oe,src:"https://www.zego.im/_nuxt/img/67fa300.png"})}),a("li",{css:D,children:a("img",{css:oe,src:"https://www.zego.im/_nuxt/img/4a0cad2.png"})}),a("li",{css:D,children:a("img",{css:oe,src:"https://www.zego.im/_nuxt/img/510ebd6.png"})}),a("li",{css:D,children:a("img",{css:oe,src:"https://www.zego.im/_nuxt/img/4c4d905.png"})})]})]})]})]})})})})]}),x("div",{css:ee,children:[a("div",{children:a("div",{children:x("div",{css:r,children:[x("div",{css:F,children:["开启业务增长之旅",a("br",{}),"即享120,000分钟免费试用"]}),x("div",{css:o,children:[a("a",{href:"#",target:"_blank",css:l,children:"免费试用"}),a("div",{css:s,children:"方案諮詢"})]}),x("div",{css:c,children:[x("div",{css:d,children:[a("div",{css:g,children:"7*24h"}),a("div",{css:h,children:"技術團隊支持"})]}),x("div",{css:d,children:[a("div",{css:g,children:"99.99%"}),a("div",{css:h,children:"全年服務可用性"})]}),x("div",{css:d,children:[a("div",{css:g,children:"212個"}),a("div",{css:h,children:"國家地區全覆蓋"})]}),x("div",{css:d,children:[a("div",{css:g,children:"100+"}),a("div",{css:h,children:"行業技術解決方案"})]})]})]})})}),a("div",{css:v,children:a("div",{children:a("div",{children:x("div",{css:I,children:[x("div",{css:$,children:[a("div",{css:W,children:"熱門產品"}),a("div",{css:W,children:"解決方案"}),a("div",{css:W,children:"開發者中心"}),a("div",{css:W,children:"價格"})]}),x("div",{css:Y,children:[x("div",{css:Ue,children:[a("img",{css:le,src:"https://www.zego.im/_nuxt/img/b4d4660.png",lazy:"loaded"}),a("div",{css:Ft,children:"02-8913-1553"})]}),a("div",{children:a("img",{css:le,src:"https://www.zego.im/_nuxt/img/b1fabe9.png"})}),x("div",{css:Pe,children:[a("img",{css:le,src:"https://www.zego.im/_nuxt/img/c05ba74.png"}),a("div",{css:Mt,children:"新北市新店區北新路三段207之3號7樓"})]}),a("a",{href:"#",target:"_blank",children:a("img",{css:le,src:"https://www.zego.im/_nuxt/img/4f41c18.png"})})]})]})})})})]})]})})};jl.createRoot(document.getElementById("root")).render(bt.jsxs(Ct.StrictMode,{children:[bt.jsx(N0,{}),bt.jsx(Jw,{}),bt.jsx(t1,{})]}));
