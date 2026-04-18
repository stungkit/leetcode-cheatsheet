(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))d(N);new MutationObserver(N=>{for(const D of N)if(D.type==="childList")for(const C of D.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&d(C)}).observe(document,{childList:!0,subtree:!0});function x(N){const D={};return N.integrity&&(D.integrity=N.integrity),N.referrerPolicy&&(D.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?D.credentials="include":N.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function d(N){if(N.ep)return;N.ep=!0;const D=x(N);fetch(N.href,D)}})();function Ba(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var vc={exports:{}},Di={};var hh;function nm(){if(hh)return Di;hh=1;var u=Symbol.for("react.transitional.element"),_=Symbol.for("react.fragment");function x(d,N,D){var C=null;if(D!==void 0&&(C=""+D),N.key!==void 0&&(C=""+N.key),"key"in N){D={};for(var Q in N)Q!=="key"&&(D[Q]=N[Q])}else D=N;return N=D.ref,{$$typeof:u,type:d,key:C,ref:N!==void 0?N:null,props:D}}return Di.Fragment=_,Di.jsx=x,Di.jsxs=x,Di}var gh;function rm(){return gh||(gh=1,vc.exports=nm()),vc.exports}var a=rm(),yc={exports:{}},Bi={},Tc={exports:{}},Sc={};var ph;function em(){return ph||(ph=1,(function(u){function _(E,q){var K=E.length;E.push(q);n:for(;0<K;){var yn=K-1>>>1,Tn=E[yn];if(0<N(Tn,q))E[yn]=q,E[K]=Tn,K=yn;else break n}}function x(E){return E.length===0?null:E[0]}function d(E){if(E.length===0)return null;var q=E[0],K=E.pop();if(K!==q){E[0]=K;n:for(var yn=0,Tn=E.length,p=Tn>>>1;yn<p;){var w=2*(yn+1)-1,Y=E[w],I=w+1,ln=E[I];if(0>N(Y,K))I<Tn&&0>N(ln,Y)?(E[yn]=ln,E[I]=K,yn=I):(E[yn]=Y,E[w]=K,yn=w);else if(I<Tn&&0>N(ln,K))E[yn]=ln,E[I]=K,yn=I;else break n}}return q}function N(E,q){var K=E.sortIndex-q.sortIndex;return K!==0?K:E.id-q.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var D=performance;u.unstable_now=function(){return D.now()}}else{var C=Date,Q=C.now();u.unstable_now=function(){return C.now()-Q}}var z=[],T=[],U=1,O=null,L=3,J=!1,tn=!1,F=!1,Sn=!1,An=typeof setTimeout=="function"?setTimeout:null,vn=typeof clearTimeout=="function"?clearTimeout:null,an=typeof setImmediate<"u"?setImmediate:null;function un(E){for(var q=x(T);q!==null;){if(q.callback===null)d(T);else if(q.startTime<=E)d(T),q.sortIndex=q.expirationTime,_(z,q);else break;q=x(T)}}function Cn(E){if(F=!1,un(E),!tn)if(x(z)!==null)tn=!0,_n||(_n=!0,tr());else{var q=x(T);q!==null&&jr(Cn,q.startTime-E)}}var _n=!1,fn=-1,Jn=5,hr=-1;function Sr(){return Sn?!0:!(u.unstable_now()-hr<Jn)}function gr(){if(Sn=!1,_n){var E=u.unstable_now();hr=E;var q=!0;try{n:{tn=!1,F&&(F=!1,vn(fn),fn=-1),J=!0;var K=L;try{r:{for(un(E),O=x(z);O!==null&&!(O.expirationTime>E&&Sr());){var yn=O.callback;if(typeof yn=="function"){O.callback=null,L=O.priorityLevel;var Tn=yn(O.expirationTime<=E);if(E=u.unstable_now(),typeof Tn=="function"){O.callback=Tn,un(E),q=!0;break r}O===x(z)&&d(z),un(E)}else d(z);O=x(z)}if(O!==null)q=!0;else{var p=x(T);p!==null&&jr(Cn,p.startTime-E),q=!1}}break n}finally{O=null,L=K,J=!1}q=void 0}}finally{q?tr():_n=!1}}}var tr;if(typeof an=="function")tr=function(){an(gr)};else if(typeof MessageChannel<"u"){var zr=new MessageChannel,lr=zr.port2;zr.port1.onmessage=gr,tr=function(){lr.postMessage(null)}}else tr=function(){An(gr,0)};function jr(E,q){fn=An(function(){E(u.unstable_now())},q)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(E){E.callback=null},u.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Jn=0<E?Math.floor(1e3/E):5},u.unstable_getCurrentPriorityLevel=function(){return L},u.unstable_next=function(E){switch(L){case 1:case 2:case 3:var q=3;break;default:q=L}var K=L;L=q;try{return E()}finally{L=K}},u.unstable_requestPaint=function(){Sn=!0},u.unstable_runWithPriority=function(E,q){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var K=L;L=E;try{return q()}finally{L=K}},u.unstable_scheduleCallback=function(E,q,K){var yn=u.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?yn+K:yn):K=yn,E){case 1:var Tn=-1;break;case 2:Tn=250;break;case 5:Tn=1073741823;break;case 4:Tn=1e4;break;default:Tn=5e3}return Tn=K+Tn,E={id:U++,callback:q,priorityLevel:E,startTime:K,expirationTime:Tn,sortIndex:-1},K>yn?(E.sortIndex=K,_(T,E),x(z)===null&&E===x(T)&&(F?(vn(fn),fn=-1):F=!0,jr(Cn,K-yn))):(E.sortIndex=Tn,_(z,E),tn||J||(tn=!0,_n||(_n=!0,tr()))),E},u.unstable_shouldYield=Sr,u.unstable_wrapCallback=function(E){var q=L;return function(){var K=L;L=q;try{return E.apply(this,arguments)}finally{L=K}}}})(Sc)),Sc}var mh;function tm(){return mh||(mh=1,Tc.exports=em()),Tc.exports}var jc={exports:{}},gn={};var bh;function am(){if(bh)return gn;bh=1;var u=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),C=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),L=Symbol.iterator;function J(p){return p===null||typeof p!="object"?null:(p=L&&p[L]||p["@@iterator"],typeof p=="function"?p:null)}var tn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,Sn={};function An(p,w,Y){this.props=p,this.context=w,this.refs=Sn,this.updater=Y||tn}An.prototype.isReactComponent={},An.prototype.setState=function(p,w){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,w,"setState")},An.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function vn(){}vn.prototype=An.prototype;function an(p,w,Y){this.props=p,this.context=w,this.refs=Sn,this.updater=Y||tn}var un=an.prototype=new vn;un.constructor=an,F(un,An.prototype),un.isPureReactComponent=!0;var Cn=Array.isArray;function _n(){}var fn={H:null,A:null,T:null,S:null},Jn=Object.prototype.hasOwnProperty;function hr(p,w,Y){var I=Y.ref;return{$$typeof:u,type:p,key:w,ref:I!==void 0?I:null,props:Y}}function Sr(p,w){return hr(p.type,w,p.props)}function gr(p){return typeof p=="object"&&p!==null&&p.$$typeof===u}function tr(p){var w={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(Y){return w[Y]})}var zr=/\/+/g;function lr(p,w){return typeof p=="object"&&p!==null&&p.key!=null?tr(""+p.key):w.toString(36)}function jr(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(_n,_n):(p.status="pending",p.then(function(w){p.status==="pending"&&(p.status="fulfilled",p.value=w)},function(w){p.status==="pending"&&(p.status="rejected",p.reason=w)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function E(p,w,Y,I,ln){var mn=typeof p;(mn==="undefined"||mn==="boolean")&&(p=null);var hn=!1;if(p===null)hn=!0;else switch(mn){case"bigint":case"string":case"number":hn=!0;break;case"object":switch(p.$$typeof){case u:case _:hn=!0;break;case U:return hn=p._init,E(hn(p._payload),w,Y,I,ln)}}if(hn)return ln=ln(p),hn=I===""?"."+lr(p,0):I,Cn(ln)?(Y="",hn!=null&&(Y=hn.replace(zr,"$&/")+"/"),E(ln,w,Y,"",function(Fr){return Fr})):ln!=null&&(gr(ln)&&(ln=Sr(ln,Y+(ln.key==null||p&&p.key===ln.key?"":(""+ln.key).replace(zr,"$&/")+"/")+hn)),w.push(ln)),1;hn=0;var Rn=I===""?".":I+":";if(Cn(p))for(var Zn=0;Zn<p.length;Zn++)I=p[Zn],mn=Rn+lr(I,Zn),hn+=E(I,w,Y,mn,ln);else if(Zn=J(p),typeof Zn=="function")for(p=Zn.call(p),Zn=0;!(I=p.next()).done;)I=I.value,mn=Rn+lr(I,Zn++),hn+=E(I,w,Y,mn,ln);else if(mn==="object"){if(typeof p.then=="function")return E(jr(p),w,Y,I,ln);throw w=String(p),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return hn}function q(p,w,Y){if(p==null)return p;var I=[],ln=0;return E(p,I,"","",function(mn){return w.call(Y,mn,ln++)}),I}function K(p){if(p._status===-1){var w=p._result;w=w(),w.then(function(Y){(p._status===0||p._status===-1)&&(p._status=1,p._result=Y)},function(Y){(p._status===0||p._status===-1)&&(p._status=2,p._result=Y)}),p._status===-1&&(p._status=0,p._result=w)}if(p._status===1)return p._result.default;throw p._result}var yn=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)},Tn={map:q,forEach:function(p,w,Y){q(p,function(){w.apply(this,arguments)},Y)},count:function(p){var w=0;return q(p,function(){w++}),w},toArray:function(p){return q(p,function(w){return w})||[]},only:function(p){if(!gr(p))throw Error("React.Children.only expected to receive a single React element child.");return p}};return gn.Activity=O,gn.Children=Tn,gn.Component=An,gn.Fragment=x,gn.Profiler=N,gn.PureComponent=an,gn.StrictMode=d,gn.Suspense=z,gn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=fn,gn.__COMPILER_RUNTIME={__proto__:null,c:function(p){return fn.H.useMemoCache(p)}},gn.cache=function(p){return function(){return p.apply(null,arguments)}},gn.cacheSignal=function(){return null},gn.cloneElement=function(p,w,Y){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var I=F({},p.props),ln=p.key;if(w!=null)for(mn in w.key!==void 0&&(ln=""+w.key),w)!Jn.call(w,mn)||mn==="key"||mn==="__self"||mn==="__source"||mn==="ref"&&w.ref===void 0||(I[mn]=w[mn]);var mn=arguments.length-2;if(mn===1)I.children=Y;else if(1<mn){for(var hn=Array(mn),Rn=0;Rn<mn;Rn++)hn[Rn]=arguments[Rn+2];I.children=hn}return hr(p.type,ln,I)},gn.createContext=function(p){return p={$$typeof:C,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:D,_context:p},p},gn.createElement=function(p,w,Y){var I,ln={},mn=null;if(w!=null)for(I in w.key!==void 0&&(mn=""+w.key),w)Jn.call(w,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(ln[I]=w[I]);var hn=arguments.length-2;if(hn===1)ln.children=Y;else if(1<hn){for(var Rn=Array(hn),Zn=0;Zn<hn;Zn++)Rn[Zn]=arguments[Zn+2];ln.children=Rn}if(p&&p.defaultProps)for(I in hn=p.defaultProps,hn)ln[I]===void 0&&(ln[I]=hn[I]);return hr(p,mn,ln)},gn.createRef=function(){return{current:null}},gn.forwardRef=function(p){return{$$typeof:Q,render:p}},gn.isValidElement=gr,gn.lazy=function(p){return{$$typeof:U,_payload:{_status:-1,_result:p},_init:K}},gn.memo=function(p,w){return{$$typeof:T,type:p,compare:w===void 0?null:w}},gn.startTransition=function(p){var w=fn.T,Y={};fn.T=Y;try{var I=p(),ln=fn.S;ln!==null&&ln(Y,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(_n,yn)}catch(mn){yn(mn)}finally{w!==null&&Y.types!==null&&(w.types=Y.types),fn.T=w}},gn.unstable_useCacheRefresh=function(){return fn.H.useCacheRefresh()},gn.use=function(p){return fn.H.use(p)},gn.useActionState=function(p,w,Y){return fn.H.useActionState(p,w,Y)},gn.useCallback=function(p,w){return fn.H.useCallback(p,w)},gn.useContext=function(p){return fn.H.useContext(p)},gn.useDebugValue=function(){},gn.useDeferredValue=function(p,w){return fn.H.useDeferredValue(p,w)},gn.useEffect=function(p,w){return fn.H.useEffect(p,w)},gn.useEffectEvent=function(p){return fn.H.useEffectEvent(p)},gn.useId=function(){return fn.H.useId()},gn.useImperativeHandle=function(p,w,Y){return fn.H.useImperativeHandle(p,w,Y)},gn.useInsertionEffect=function(p,w){return fn.H.useInsertionEffect(p,w)},gn.useLayoutEffect=function(p,w){return fn.H.useLayoutEffect(p,w)},gn.useMemo=function(p,w){return fn.H.useMemo(p,w)},gn.useOptimistic=function(p,w){return fn.H.useOptimistic(p,w)},gn.useReducer=function(p,w,Y){return fn.H.useReducer(p,w,Y)},gn.useRef=function(p){return fn.H.useRef(p)},gn.useState=function(p){return fn.H.useState(p)},gn.useSyncExternalStore=function(p,w,Y){return fn.H.useSyncExternalStore(p,w,Y)},gn.useTransition=function(){return fn.H.useTransition()},gn.version="19.2.3",gn}var _h;function zc(){return _h||(_h=1,jc.exports=am()),jc.exports}var Nc={exports:{}},Lr={};var xh;function im(){if(xh)return Lr;xh=1;var u=zc();function _(z){var T="https://react.dev/errors/"+z;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var U=2;U<arguments.length;U++)T+="&args[]="+encodeURIComponent(arguments[U])}return"Minified React error #"+z+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(){}var d={d:{f:x,r:function(){throw Error(_(522))},D:x,C:x,L:x,m:x,X:x,S:x,M:x},p:0,findDOMNode:null},N=Symbol.for("react.portal");function D(z,T,U){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:O==null?null:""+O,children:z,containerInfo:T,implementation:U}}var C=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Q(z,T){if(z==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Lr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Lr.createPortal=function(z,T){var U=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(_(299));return D(z,T,null,U)},Lr.flushSync=function(z){var T=C.T,U=d.p;try{if(C.T=null,d.p=2,z)return z()}finally{C.T=T,d.p=U,d.d.f()}},Lr.preconnect=function(z,T){typeof z=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,d.d.C(z,T))},Lr.prefetchDNS=function(z){typeof z=="string"&&d.d.D(z)},Lr.preinit=function(z,T){if(typeof z=="string"&&T&&typeof T.as=="string"){var U=T.as,O=Q(U,T.crossOrigin),L=typeof T.integrity=="string"?T.integrity:void 0,J=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;U==="style"?d.d.S(z,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:O,integrity:L,fetchPriority:J}):U==="script"&&d.d.X(z,{crossOrigin:O,integrity:L,fetchPriority:J,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Lr.preinitModule=function(z,T){if(typeof z=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var U=Q(T.as,T.crossOrigin);d.d.M(z,{crossOrigin:U,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&d.d.M(z)},Lr.preload=function(z,T){if(typeof z=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var U=T.as,O=Q(U,T.crossOrigin);d.d.L(z,U,{crossOrigin:O,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Lr.preloadModule=function(z,T){if(typeof z=="string")if(T){var U=Q(T.as,T.crossOrigin);d.d.m(z,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:U,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else d.d.m(z)},Lr.requestFormReset=function(z){d.d.r(z)},Lr.unstable_batchedUpdates=function(z,T){return z(T)},Lr.useFormState=function(z,T,U){return C.H.useFormState(z,T,U)},Lr.useFormStatus=function(){return C.H.useHostTransitionStatus()},Lr.version="19.2.3",Lr}var vh;function Uh(){if(vh)return Nc.exports;vh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(_){console.error(_)}}return u(),Nc.exports=im(),Nc.exports}var yh;function lm(){if(yh)return Bi;yh=1;var u=tm(),_=zc(),x=Uh();function d(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)r+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function D(n){var r=n,e=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(e=r.return),n=r.return;while(n)}return r.tag===3?e:null}function C(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Q(n){if(n.tag===31){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function z(n){if(D(n)!==n)throw Error(d(188))}function T(n){var r=n.alternate;if(!r){if(r=D(n),r===null)throw Error(d(188));return r!==n?null:n}for(var e=n,t=r;;){var i=e.return;if(i===null)break;var l=i.alternate;if(l===null){if(t=i.return,t!==null){e=t;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===e)return z(i),n;if(l===t)return z(i),r;l=l.sibling}throw Error(d(188))}if(e.return!==t.return)e=i,t=l;else{for(var s=!1,c=i.child;c;){if(c===e){s=!0,e=i,t=l;break}if(c===t){s=!0,t=i,e=l;break}c=c.sibling}if(!s){for(c=l.child;c;){if(c===e){s=!0,e=l,t=i;break}if(c===t){s=!0,t=l,e=i;break}c=c.sibling}if(!s)throw Error(d(189))}}if(e.alternate!==t)throw Error(d(190))}if(e.tag!==3)throw Error(d(188));return e.stateNode.current===e?n:r}function U(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=U(n),r!==null)return r;n=n.sibling}return null}var O=Object.assign,L=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),tn=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),Sn=Symbol.for("react.strict_mode"),An=Symbol.for("react.profiler"),vn=Symbol.for("react.consumer"),an=Symbol.for("react.context"),un=Symbol.for("react.forward_ref"),Cn=Symbol.for("react.suspense"),_n=Symbol.for("react.suspense_list"),fn=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),hr=Symbol.for("react.activity"),Sr=Symbol.for("react.memo_cache_sentinel"),gr=Symbol.iterator;function tr(n){return n===null||typeof n!="object"?null:(n=gr&&n[gr]||n["@@iterator"],typeof n=="function"?n:null)}var zr=Symbol.for("react.client.reference");function lr(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===zr?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case An:return"Profiler";case Sn:return"StrictMode";case Cn:return"Suspense";case _n:return"SuspenseList";case hr:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case tn:return"Portal";case an:return n.displayName||"Context";case vn:return(n._context.displayName||"Context")+".Consumer";case un:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fn:return r=n.displayName||null,r!==null?r:lr(n.type)||"Memo";case Jn:r=n._payload,n=n._init;try{return lr(n(r))}catch{}}return null}var jr=Array.isArray,E=_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},yn=[],Tn=-1;function p(n){return{current:n}}function w(n){0>Tn||(n.current=yn[Tn],yn[Tn]=null,Tn--)}function Y(n,r){Tn++,yn[Tn]=n.current,n.current=r}var I=p(null),ln=p(null),mn=p(null),hn=p(null);function Rn(n,r){switch(Y(mn,r),Y(ln,n),Y(I,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?Bf(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=Bf(r),n=Cf(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}w(I),Y(I,n)}function Zn(){w(I),w(ln),w(mn)}function Fr(n){n.memoizedState!==null&&Y(hn,n);var r=I.current,e=Cf(r,n.type);r!==e&&(Y(ln,n),Y(I,e))}function ve(n){ln.current===n&&(w(I),w(ln)),hn.current===n&&(w(hn),Mi._currentValue=K)}var Tt,St;function pe(n){if(Tt===void 0)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);Tt=r&&r[1]||"",St=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tt+n+St}var Ca=!1;function Ua(n,r){if(!n||Ca)return"";Ca=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(r){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(j){var S=j}Reflect.construct(n,[],R)}else{try{R.call()}catch(j){S=j}n.call(R.prototype)}}else{try{throw Error()}catch(j){S=j}(R=n())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(j){if(j&&S&&typeof j.stack=="string")return[j.stack,S.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=t.DetermineComponentFrameRoot(),s=l[0],c=l[1];if(s&&c){var f=s.split(`
`),y=c.split(`
`);for(i=t=0;t<f.length&&!f[t].includes("DetermineComponentFrameRoot");)t++;for(;i<y.length&&!y[i].includes("DetermineComponentFrameRoot");)i++;if(t===f.length||i===y.length)for(t=f.length-1,i=y.length-1;1<=t&&0<=i&&f[t]!==y[i];)i--;for(;1<=t&&0<=i;t--,i--)if(f[t]!==y[i]){if(t!==1||i!==1)do if(t--,i--,0>i||f[t]!==y[i]){var A=`
`+f[t].replace(" at new "," at ");return n.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",n.displayName)),A}while(1<=t&&0<=i);break}}}finally{Ca=!1,Error.prepareStackTrace=e}return(e=n?n.displayName||n.name:"")?pe(e):""}function fs(n,r){switch(n.tag){case 26:case 27:case 5:return pe(n.type);case 16:return pe("Lazy");case 13:return n.child!==r&&r!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return Ua(n.type,!1);case 11:return Ua(n.type.render,!1);case 1:return Ua(n.type,!0);case 31:return pe("Activity");default:return""}}function Ui(n){try{var r="",e=null;do r+=fs(n,e),e=n,n=n.return;while(n);return r}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var Ha=Object.prototype.hasOwnProperty,Wt=u.unstable_scheduleCallback,qa=u.unstable_cancelCallback,hs=u.unstable_shouldYield,Hi=u.unstable_requestPaint,sr=u.unstable_now,qi=u.unstable_getCurrentPriorityLevel,Ae=u.unstable_ImmediatePriority,jt=u.unstable_UserBlockingPriority,Nt=u.unstable_NormalPriority,gs=u.unstable_LowPriority,Yi=u.unstable_IdlePriority,ps=u.log,ms=u.unstable_setDisableYieldValue,Et=null,kr=null;function ye(n){if(typeof ps=="function"&&ms(n),kr&&typeof kr.setStrictMode=="function")try{kr.setStrictMode(Et,n)}catch{}}var Dr=Math.clz32?Math.clz32:Gi,bs=Math.log,Ya=Math.LN2;function Gi(n){return n>>>=0,n===0?32:31-(bs(n)/Ya|0)|0}var At=256,Pt=262144,Ot=4194304;function qr(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function h(n,r,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,l=n.suspendedLanes,s=n.pingedLanes;n=n.warmLanes;var c=t&134217727;return c!==0?(t=c&~l,t!==0?i=qr(t):(s&=c,s!==0?i=qr(s):e||(e=c&~n,e!==0&&(i=qr(e))))):(c=t&~l,c!==0?i=qr(c):s!==0?i=qr(s):e||(e=t&~n,e!==0&&(i=qr(e)))),i===0?0:r!==0&&r!==i&&(r&l)===0&&(l=i&-i,e=r&-r,l>=e||l===32&&(e&4194048)!==0)?r:i}function k(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function G(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dn(){var n=Ot;return Ot<<=1,(Ot&62914560)===0&&(Ot=4194304),n}function Wn(n){for(var r=[],e=0;31>e;e++)r.push(n);return r}function Xn(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function W(n,r,e,t,i,l){var s=n.pendingLanes;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0;var c=n.entanglements,f=n.expirationTimes,y=n.hiddenUpdates;for(e=s&~e;0<e;){var A=31-Dr(e),R=1<<A;c[A]=0,f[A]=-1;var S=y[A];if(S!==null)for(y[A]=null,A=0;A<S.length;A++){var j=S[A];j!==null&&(j.lane&=-536870913)}e&=~R}t!==0&&X(n,t,0),l!==0&&i===0&&n.tag!==0&&(n.suspendedLanes|=l&~(s&~r))}function X(n,r,e){n.pendingLanes|=r,n.suspendedLanes&=~r;var t=31-Dr(r);n.entangledLanes|=r,n.entanglements[t]=n.entanglements[t]|1073741824|e&261930}function cn(n,r){var e=n.entangledLanes|=r;for(n=n.entanglements;e;){var t=31-Dr(e),i=1<<t;i&r|n[t]&r&&(n[t]|=r),e&=~i}}function or(n,r){var e=r&-r;return e=(e&42)!==0?1:nr(e),(e&(n.suspendedLanes|r))!==0?0:e}function nr(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Oe(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function $t(){var n=q.p;return n!==0?n:(n=window.event,n===void 0?32:lh(n.type))}function na(n,r){var e=q.p;try{return q.p=n,r()}finally{q.p=e}}var Te=Math.random().toString(36).slice(2),cr="__reactFiber$"+Te,Mr="__reactProps$"+Te,Ie="__reactContainer$"+Te,Ga="__reactEvents$"+Te,Vi="__reactListeners$"+Te,ra="__reactHandles$"+Te,Ki="__reactResources$"+Te,wt="__reactMarker$"+Te;function Va(n){delete n[cr],delete n[Mr],delete n[Ga],delete n[Vi],delete n[ra]}function Br(n){var r=n[cr];if(r)return r;for(var e=n.parentNode;e;){if(r=e[Ie]||e[cr]){if(e=r.alternate,r.child!==null||e!==null&&e.child!==null)for(n=Kf(n);n!==null;){if(e=n[cr])return e;n=Kf(n)}return r}n=e,e=n.parentNode}return null}function we(n){if(n=n[cr]||n[Ie]){var r=n.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return n}return null}function Ze(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(d(33))}function Fe(n){var r=n[Ki];return r||(r=n[Ki]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function pr(n){n[wt]=!0}var Qi=new Set,kt={};function ke(n,r){B(n,r),B(n+"Capture",r)}function B(n,r){for(kt[n]=r,n=0;n<r.length;n++)Qi.add(r[n])}var rn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jn={},Hn={};function ur(n){return Ha.call(Hn,n)?!0:Ha.call(jn,n)?!1:rn.test(n)?Hn[n]=!0:(jn[n]=!0,!1)}function Rr(n,r,e){if(ur(r))if(e===null)n.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var t=r.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+e)}}function Wr(n,r,e){if(e===null)n.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+e)}}function Yr(n,r,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttributeNS(r,e,""+t)}}function Fn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Pr(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ji(n,r,e){var t=Object.getOwnPropertyDescriptor(n.constructor.prototype,r);if(!n.hasOwnProperty(r)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return i.call(this)},set:function(s){e=""+s,l.call(this,s)}}),Object.defineProperty(n,r,{enumerable:t.enumerable}),{getValue:function(){return e},setValue:function(s){e=""+s},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ea(n){if(!n._valueTracker){var r=Pr(n)?"checked":"value";n._valueTracker=Ji(n,r,""+n[r])}}function Ka(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var e=r.getValue(),t="";return n&&(t=Pr(n)?n.checked?"true":"false":n.value),n=t,n!==e?(r.setValue(n),!0):!1}function ta(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var _s=/[\n"\\]/g;function Gr(n){return n.replace(_s,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Qa(n,r,e,t,i,l,s,c){n.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?n.type=s:n.removeAttribute("type"),r!=null?s==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+Fn(r)):n.value!==""+Fn(r)&&(n.value=""+Fn(r)):s!=="submit"&&s!=="reset"||n.removeAttribute("value"),r!=null?aa(n,s,Fn(r)):e!=null?aa(n,s,Fn(e)):t!=null&&n.removeAttribute("value"),i==null&&l!=null&&(n.defaultChecked=!!l),i!=null&&(n.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.name=""+Fn(c):n.removeAttribute("name")}function Mt(n,r,e,t,i,l,s,c){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),r!=null||e!=null){if(!(l!=="submit"&&l!=="reset"||r!=null)){ea(n);return}e=e!=null?""+Fn(e):"",r=r!=null?""+Fn(r):e,c||r===n.value||(n.value=r),n.defaultValue=r}t=t??i,t=typeof t!="function"&&typeof t!="symbol"&&!!t,n.checked=c?n.checked:!!t,n.defaultChecked=!!t,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(n.name=s),ea(n)}function aa(n,r,e){r==="number"&&ta(n.ownerDocument)===n||n.defaultValue===""+e||(n.defaultValue=""+e)}function Nr(n,r,e,t){if(n=n.options,r){r={};for(var i=0;i<e.length;i++)r["$"+e[i]]=!0;for(e=0;e<n.length;e++)i=r.hasOwnProperty("$"+n[e].value),n[e].selected!==i&&(n[e].selected=i),i&&t&&(n[e].defaultSelected=!0)}else{for(e=""+Fn(e),r=null,i=0;i<n.length;i++){if(n[i].value===e){n[i].selected=!0,t&&(n[i].defaultSelected=!0);return}r!==null||n[i].disabled||(r=n[i])}r!==null&&(r.selected=!0)}}function Xi(n,r,e){if(r!=null&&(r=""+Fn(r),r!==n.value&&(n.value=r),e==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=e!=null?""+Fn(e):""}function ia(n,r,e,t){if(r==null){if(t!=null){if(e!=null)throw Error(d(92));if(jr(t)){if(1<t.length)throw Error(d(93));t=t[0]}e=t}e==null&&(e=""),r=e}e=Fn(r),n.defaultValue=e,t=n.textContent,t===e&&t!==""&&t!==null&&(n.value=t),ea(n)}function on(n,r){if(r){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=r;return}}n.textContent=r}var Ii=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mr(n,r,e){var t=r.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?t?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":t?n.setProperty(r,e):typeof e!="number"||e===0||Ii.has(r)?r==="float"?n.cssFloat=e:n[r]=(""+e).trim():n[r]=e+"px"}function qn(n,r,e){if(r!=null&&typeof r!="object")throw Error(d(62));if(n=n.style,e!=null){for(var t in e)!e.hasOwnProperty(t)||r!=null&&r.hasOwnProperty(t)||(t.indexOf("--")===0?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="");for(var i in r)t=r[i],r.hasOwnProperty(i)&&e[i]!==t&&mr(n,i,t)}else for(var l in r)r.hasOwnProperty(l)&&mr(n,l,r[l])}function We(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Me=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ja=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pe(n){return Ja.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function H(){}var P=null;function pn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var On=null,er=null;function le(n){var r=we(n);if(r&&(n=r.stateNode)){var e=n[Mr]||null;n:switch(n=r.stateNode,r.type){case"input":if(Qa(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),r=e.name,e.type==="radio"&&r!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Gr(""+r)+'"][type="radio"]'),r=0;r<e.length;r++){var t=e[r];if(t!==n&&t.form===n.form){var i=t[Mr]||null;if(!i)throw Error(d(90));Qa(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(r=0;r<e.length;r++)t=e[r],t.form===n.form&&Ka(t)}break n;case"textarea":Xi(n,e.value,e.defaultValue);break n;case"select":r=e.value,r!=null&&Nr(n,!!e.multiple,r,!1)}}}var Xa=!1;function Zi(n,r,e){if(Xa)return n(r,e);Xa=!0;try{var t=n(r);return t}finally{if(Xa=!1,(On!==null||er!==null)&&(Bl(),On&&(r=On,n=er,er=On=null,le(r),n)))for(r=0;r<n.length;r++)le(n[r])}}function Ia(n,r){var e=n.stateNode;if(e===null)return null;var t=e[Mr]||null;if(t===null)return null;e=t[r];n:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(d(231,r,typeof e));return e}var Re=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xs=!1;if(Re)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){xs=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{xs=!1}var $e=null,vs=null,Fi=null;function Bc(){if(Fi)return Fi;var n,r=vs,e=r.length,t,i="value"in $e?$e.value:$e.textContent,l=i.length;for(n=0;n<e&&r[n]===i[n];n++);var s=e-n;for(t=1;t<=s&&r[e-t]===i[l-t];t++);return Fi=i.slice(n,1<t?1-t:void 0)}function Wi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Pi(){return!0}function Cc(){return!1}function Vr(n){function r(e,t,i,l,s){this._reactName=e,this._targetInst=i,this.type=t,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var c in n)n.hasOwnProperty(c)&&(e=n[c],this[c]=e?e(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Pi:Cc,this.isPropagationStopped=Cc,this}return O(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),r}var Rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$i=Vr(Rt),Fa=O({},Rt,{view:0,detail:0}),Ph=Vr(Fa),ys,Ts,Wa,nl=O({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:js,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wa&&(Wa&&n.type==="mousemove"?(ys=n.screenX-Wa.screenX,Ts=n.screenY-Wa.screenY):Ts=ys=0,Wa=n),ys)},movementY:function(n){return"movementY"in n?n.movementY:Ts}}),Uc=Vr(nl),$h=O({},nl,{dataTransfer:0}),ng=Vr($h),rg=O({},Fa,{relatedTarget:0}),Ss=Vr(rg),eg=O({},Rt,{animationName:0,elapsedTime:0,pseudoElement:0}),tg=Vr(eg),ag=O({},Rt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ig=Vr(ag),lg=O({},Rt,{data:0}),Hc=Vr(lg),sg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ug(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=cg[n])?!!r[n]:!1}function js(){return ug}var dg=O({},Fa,{key:function(n){if(n.key){var r=sg[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Wi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?og[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:js,charCode:function(n){return n.type==="keypress"?Wi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Wi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fg=Vr(dg),hg=O({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qc=Vr(hg),gg=O({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:js}),pg=Vr(gg),mg=O({},Rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),bg=Vr(mg),_g=O({},nl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xg=Vr(_g),vg=O({},Rt,{newState:0,oldState:0}),yg=Vr(vg),Tg=[9,13,27,32],Ns=Re&&"CompositionEvent"in window,Pa=null;Re&&"documentMode"in document&&(Pa=document.documentMode);var Sg=Re&&"TextEvent"in window&&!Pa,Yc=Re&&(!Ns||Pa&&8<Pa&&11>=Pa),Gc=" ",Vc=!1;function Kc(n,r){switch(n){case"keyup":return Tg.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qc(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var la=!1;function jg(n,r){switch(n){case"compositionend":return Qc(r);case"keypress":return r.which!==32?null:(Vc=!0,Gc);case"textInput":return n=r.data,n===Gc&&Vc?null:n;default:return null}}function Ng(n,r){if(la)return n==="compositionend"||!Ns&&Kc(n,r)?(n=Bc(),Fi=vs=$e=null,la=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Yc&&r.locale!=="ko"?null:r.data;default:return null}}var Eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Eg[n.type]:r==="textarea"}function Xc(n,r,e,t){On?er?er.push(t):er=[t]:On=t,r=Vl(r,"onChange"),0<r.length&&(e=new $i("onChange","change",null,e,t),n.push({event:e,listeners:r}))}var $a=null,ni=null;function Ag(n){kf(n,0)}function rl(n){var r=Ze(n);if(Ka(r))return n}function Ic(n,r){if(n==="change")return r}var Zc=!1;if(Re){var Es;if(Re){var As="oninput"in document;if(!As){var Fc=document.createElement("div");Fc.setAttribute("oninput","return;"),As=typeof Fc.oninput=="function"}Es=As}else Es=!1;Zc=Es&&(!document.documentMode||9<document.documentMode)}function Wc(){$a&&($a.detachEvent("onpropertychange",Pc),ni=$a=null)}function Pc(n){if(n.propertyName==="value"&&rl(ni)){var r=[];Xc(r,ni,n,pn(n)),Zi(Ag,r)}}function Og(n,r,e){n==="focusin"?(Wc(),$a=r,ni=e,$a.attachEvent("onpropertychange",Pc)):n==="focusout"&&Wc()}function wg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return rl(ni)}function kg(n,r){if(n==="click")return rl(r)}function Mg(n,r){if(n==="input"||n==="change")return rl(r)}function Rg(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var $r=typeof Object.is=="function"?Object.is:Rg;function ri(n,r){if($r(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var e=Object.keys(n),t=Object.keys(r);if(e.length!==t.length)return!1;for(t=0;t<e.length;t++){var i=e[t];if(!Ha.call(r,i)||!$r(n[i],r[i]))return!1}return!0}function $c(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function nu(n,r){var e=$c(n);n=0;for(var t;e;){if(e.nodeType===3){if(t=n+e.textContent.length,n<=r&&t>=r)return{node:e,offset:r-n};n=t}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=$c(e)}}function ru(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?ru(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function eu(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=ta(n.document);r instanceof n.HTMLIFrameElement;){try{var e=typeof r.contentWindow.location.href=="string"}catch{e=!1}if(e)n=r.contentWindow;else break;r=ta(n.document)}return r}function Os(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var Lg=Re&&"documentMode"in document&&11>=document.documentMode,sa=null,ws=null,ei=null,ks=!1;function tu(n,r,e){var t=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;ks||sa==null||sa!==ta(t)||(t=sa,"selectionStart"in t&&Os(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),ei&&ri(ei,t)||(ei=t,t=Vl(ws,"onSelect"),0<t.length&&(r=new $i("onSelect","select",null,r,e),n.push({event:r,listeners:t}),r.target=sa)))}function Lt(n,r){var e={};return e[n.toLowerCase()]=r.toLowerCase(),e["Webkit"+n]="webkit"+r,e["Moz"+n]="moz"+r,e}var oa={animationend:Lt("Animation","AnimationEnd"),animationiteration:Lt("Animation","AnimationIteration"),animationstart:Lt("Animation","AnimationStart"),transitionrun:Lt("Transition","TransitionRun"),transitionstart:Lt("Transition","TransitionStart"),transitioncancel:Lt("Transition","TransitionCancel"),transitionend:Lt("Transition","TransitionEnd")},Ms={},au={};Re&&(au=document.createElement("div").style,"AnimationEvent"in window||(delete oa.animationend.animation,delete oa.animationiteration.animation,delete oa.animationstart.animation),"TransitionEvent"in window||delete oa.transitionend.transition);function zt(n){if(Ms[n])return Ms[n];if(!oa[n])return n;var r=oa[n],e;for(e in r)if(r.hasOwnProperty(e)&&e in au)return Ms[n]=r[e];return n}var iu=zt("animationend"),lu=zt("animationiteration"),su=zt("animationstart"),zg=zt("transitionrun"),Dg=zt("transitionstart"),Bg=zt("transitioncancel"),ou=zt("transitionend"),cu=new Map,Rs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rs.push("scrollEnd");function me(n,r){cu.set(n,r),ke(r,[n])}var el=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},se=[],ca=0,Ls=0;function tl(){for(var n=ca,r=Ls=ca=0;r<n;){var e=se[r];se[r++]=null;var t=se[r];se[r++]=null;var i=se[r];se[r++]=null;var l=se[r];if(se[r++]=null,t!==null&&i!==null){var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}l!==0&&uu(e,i,l)}}function al(n,r,e,t){se[ca++]=n,se[ca++]=r,se[ca++]=e,se[ca++]=t,Ls|=t,n.lanes|=t,n=n.alternate,n!==null&&(n.lanes|=t)}function zs(n,r,e,t){return al(n,r,e,t),il(n)}function Dt(n,r){return al(n,null,null,r),il(n)}function uu(n,r,e){n.lanes|=e;var t=n.alternate;t!==null&&(t.lanes|=e);for(var i=!1,l=n.return;l!==null;)l.childLanes|=e,t=l.alternate,t!==null&&(t.childLanes|=e),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(i=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,i&&r!==null&&(i=31-Dr(e),n=l.hiddenUpdates,t=n[i],t===null?n[i]=[r]:t.push(r),r.lane=e|536870912),l):null}function il(n){if(50<ji)throw ji=0,Ko=null,Error(d(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var ua={};function Cg(n,r,e,t){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ne(n,r,e,t){return new Cg(n,r,e,t)}function Ds(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Le(n,r){var e=n.alternate;return e===null?(e=ne(n.tag,r,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=r,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&65011712,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,r=n.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.refCleanup=n.refCleanup,e}function du(n,r){n.flags&=65011714;var e=n.alternate;return e===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.type=e.type,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function ll(n,r,e,t,i,l){var s=0;if(t=n,typeof n=="function")Ds(n)&&(s=1);else if(typeof n=="string")s=Gp(n,e,I.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case hr:return n=ne(31,e,r,i),n.elementType=hr,n.lanes=l,n;case F:return Bt(e.children,i,l,r);case Sn:s=8,i|=24;break;case An:return n=ne(12,e,r,i|2),n.elementType=An,n.lanes=l,n;case Cn:return n=ne(13,e,r,i),n.elementType=Cn,n.lanes=l,n;case _n:return n=ne(19,e,r,i),n.elementType=_n,n.lanes=l,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case an:s=10;break n;case vn:s=9;break n;case un:s=11;break n;case fn:s=14;break n;case Jn:s=16,t=null;break n}s=29,e=Error(d(130,n===null?"null":typeof n,"")),t=null}return r=ne(s,e,r,i),r.elementType=n,r.type=t,r.lanes=l,r}function Bt(n,r,e,t){return n=ne(7,n,t,r),n.lanes=e,n}function Bs(n,r,e){return n=ne(6,n,null,r),n.lanes=e,n}function fu(n){var r=ne(18,null,null,0);return r.stateNode=n,r}function Cs(n,r,e){return r=ne(4,n.children!==null?n.children:[],n.key,r),r.lanes=e,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var hu=new WeakMap;function oe(n,r){if(typeof n=="object"&&n!==null){var e=hu.get(n);return e!==void 0?e:(r={value:n,source:r,stack:Ui(r)},hu.set(n,r),r)}return{value:n,source:r,stack:Ui(r)}}var da=[],fa=0,sl=null,ti=0,ce=[],ue=0,nt=null,Se=1,je="";function ze(n,r){da[fa++]=ti,da[fa++]=sl,sl=n,ti=r}function gu(n,r,e){ce[ue++]=Se,ce[ue++]=je,ce[ue++]=nt,nt=n;var t=Se;n=je;var i=32-Dr(t)-1;t&=~(1<<i),e+=1;var l=32-Dr(r)+i;if(30<l){var s=i-i%5;l=(t&(1<<s)-1).toString(32),t>>=s,i-=s,Se=1<<32-Dr(r)+i|e<<i|t,je=l+n}else Se=1<<l|e<<i|t,je=n}function Us(n){n.return!==null&&(ze(n,1),gu(n,1,0))}function Hs(n){for(;n===sl;)sl=da[--fa],da[fa]=null,ti=da[--fa],da[fa]=null;for(;n===nt;)nt=ce[--ue],ce[ue]=null,je=ce[--ue],ce[ue]=null,Se=ce[--ue],ce[ue]=null}function pu(n,r){ce[ue++]=Se,ce[ue++]=je,ce[ue++]=nt,Se=r.id,je=r.overflow,nt=n}var Er=null,Pn=null,Mn=!1,rt=null,de=!1,qs=Error(d(519));function et(n){var r=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ai(oe(r,n)),qs}function mu(n){var r=n.stateNode,e=n.type,t=n.memoizedProps;switch(r[cr]=n,r[Mr]=t,e){case"dialog":En("cancel",r),En("close",r);break;case"iframe":case"object":case"embed":En("load",r);break;case"video":case"audio":for(e=0;e<Ei.length;e++)En(Ei[e],r);break;case"source":En("error",r);break;case"img":case"image":case"link":En("error",r),En("load",r);break;case"details":En("toggle",r);break;case"input":En("invalid",r),Mt(r,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":En("invalid",r);break;case"textarea":En("invalid",r),ia(r,t.value,t.defaultValue,t.children)}e=t.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||r.textContent===""+e||t.suppressHydrationWarning===!0||zf(r.textContent,e)?(t.popover!=null&&(En("beforetoggle",r),En("toggle",r)),t.onScroll!=null&&En("scroll",r),t.onScrollEnd!=null&&En("scrollend",r),t.onClick!=null&&(r.onclick=H),r=!0):r=!1,r||et(n,!0)}function bu(n){for(Er=n.return;Er;)switch(Er.tag){case 5:case 31:case 13:de=!1;return;case 27:case 3:de=!0;return;default:Er=Er.return}}function ha(n){if(n!==Er)return!1;if(!Mn)return bu(n),Mn=!0,!1;var r=n.tag,e;if((e=r!==3&&r!==27)&&((e=r===5)&&(e=n.type,e=!(e!=="form"&&e!=="button")||ic(n.type,n.memoizedProps)),e=!e),e&&Pn&&et(n),bu(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));Pn=Vf(n)}else if(r===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));Pn=Vf(n)}else r===27?(r=Pn,mt(n.type)?(n=uc,uc=null,Pn=n):Pn=r):Pn=Er?he(n.stateNode.nextSibling):null;return!0}function Ct(){Pn=Er=null,Mn=!1}function Ys(){var n=rt;return n!==null&&(Xr===null?Xr=n:Xr.push.apply(Xr,n),rt=null),n}function ai(n){rt===null?rt=[n]:rt.push(n)}var Gs=p(null),Ut=null,De=null;function tt(n,r,e){Y(Gs,r._currentValue),r._currentValue=e}function Be(n){n._currentValue=Gs.current,w(Gs)}function Vs(n,r,e){for(;n!==null;){var t=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,t!==null&&(t.childLanes|=r)):t!==null&&(t.childLanes&r)!==r&&(t.childLanes|=r),n===e)break;n=n.return}}function Ks(n,r,e,t){var i=n.child;for(i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;n:for(;l!==null;){var c=l;l=i;for(var f=0;f<r.length;f++)if(c.context===r[f]){l.lanes|=e,c=l.alternate,c!==null&&(c.lanes|=e),Vs(l.return,e,n),t||(s=null);break n}l=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(d(341));s.lanes|=e,l=s.alternate,l!==null&&(l.lanes|=e),Vs(s,e,n),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===n){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function ga(n,r,e,t){n=null;for(var i=r,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var c=i.type;$r(i.pendingProps.value,s.value)||(n!==null?n.push(c):n=[c])}}else if(i===hn.current){if(s=i.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(n!==null?n.push(Mi):n=[Mi])}i=i.return}n!==null&&Ks(r,n,e,t),r.flags|=262144}function ol(n){for(n=n.firstContext;n!==null;){if(!$r(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ht(n){Ut=n,De=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Ar(n){return _u(Ut,n)}function cl(n,r){return Ut===null&&Ht(n),_u(n,r)}function _u(n,r){var e=r._currentValue;if(r={context:r,memoizedValue:e,next:null},De===null){if(n===null)throw Error(d(308));De=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else De=De.next=r;return e}var Ug=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(e,t){n.push(t)}};this.abort=function(){r.aborted=!0,n.forEach(function(e){return e()})}},Hg=u.unstable_scheduleCallback,qg=u.unstable_NormalPriority,br={$$typeof:an,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qs(){return{controller:new Ug,data:new Map,refCount:0}}function ii(n){n.refCount--,n.refCount===0&&Hg(qg,function(){n.controller.abort()})}var li=null,Js=0,pa=0,ma=null;function Yg(n,r){if(li===null){var e=li=[];Js=0,pa=Fo(),ma={status:"pending",value:void 0,then:function(t){e.push(t)}}}return Js++,r.then(xu,xu),r}function xu(){if(--Js===0&&li!==null){ma!==null&&(ma.status="fulfilled");var n=li;li=null,pa=0,ma=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function Gg(n,r){var e=[],t={status:"pending",value:null,reason:null,then:function(i){e.push(i)}};return n.then(function(){t.status="fulfilled",t.value=r;for(var i=0;i<e.length;i++)(0,e[i])(r)},function(i){for(t.status="rejected",t.reason=i,i=0;i<e.length;i++)(0,e[i])(void 0)}),t}var vu=E.S;E.S=function(n,r){tf=sr(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&Yg(n,r),vu!==null&&vu(n,r)};var qt=p(null);function Xs(){var n=qt.current;return n!==null?n:In.pooledCache}function ul(n,r){r===null?Y(qt,qt.current):Y(qt,r.pool)}function yu(){var n=Xs();return n===null?null:{parent:br._currentValue,pool:n}}var ba=Error(d(460)),Is=Error(d(474)),dl=Error(d(542)),fl={then:function(){}};function Tu(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Su(n,r,e){switch(e=n[e],e===void 0?n.push(r):e!==r&&(r.then(H,H),r=e),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Nu(n),n;default:if(typeof r.status=="string")r.then(H,H);else{if(n=In,n!==null&&100<n.shellSuspendCounter)throw Error(d(482));n=r,n.status="pending",n.then(function(t){if(r.status==="pending"){var i=r;i.status="fulfilled",i.value=t}},function(t){if(r.status==="pending"){var i=r;i.status="rejected",i.reason=t}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Nu(n),n}throw Gt=r,ba}}function Yt(n){try{var r=n._init;return r(n._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Gt=e,ba):e}}var Gt=null;function ju(){if(Gt===null)throw Error(d(459));var n=Gt;return Gt=null,n}function Nu(n){if(n===ba||n===dl)throw Error(d(483))}var _a=null,si=0;function hl(n){var r=si;return si+=1,_a===null&&(_a=[]),Su(_a,n,r)}function oi(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function gl(n,r){throw r.$$typeof===L?Error(d(525)):(n=Object.prototype.toString.call(r),Error(d(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function Eu(n){function r(b,m){if(n){var v=b.deletions;v===null?(b.deletions=[m],b.flags|=16):v.push(m)}}function e(b,m){if(!n)return null;for(;m!==null;)r(b,m),m=m.sibling;return null}function t(b){for(var m=new Map;b!==null;)b.key!==null?m.set(b.key,b):m.set(b.index,b),b=b.sibling;return m}function i(b,m){return b=Le(b,m),b.index=0,b.sibling=null,b}function l(b,m,v){return b.index=v,n?(v=b.alternate,v!==null?(v=v.index,v<m?(b.flags|=67108866,m):v):(b.flags|=67108866,m)):(b.flags|=1048576,m)}function s(b){return n&&b.alternate===null&&(b.flags|=67108866),b}function c(b,m,v,M){return m===null||m.tag!==6?(m=Bs(v,b.mode,M),m.return=b,m):(m=i(m,v),m.return=b,m)}function f(b,m,v,M){var en=v.type;return en===F?A(b,m,v.props.children,M,v.key):m!==null&&(m.elementType===en||typeof en=="object"&&en!==null&&en.$$typeof===Jn&&Yt(en)===m.type)?(m=i(m,v.props),oi(m,v),m.return=b,m):(m=ll(v.type,v.key,v.props,null,b.mode,M),oi(m,v),m.return=b,m)}function y(b,m,v,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Cs(v,b.mode,M),m.return=b,m):(m=i(m,v.children||[]),m.return=b,m)}function A(b,m,v,M,en){return m===null||m.tag!==7?(m=Bt(v,b.mode,M,en),m.return=b,m):(m=i(m,v),m.return=b,m)}function R(b,m,v){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Bs(""+m,b.mode,v),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case J:return v=ll(m.type,m.key,m.props,null,b.mode,v),oi(v,m),v.return=b,v;case tn:return m=Cs(m,b.mode,v),m.return=b,m;case Jn:return m=Yt(m),R(b,m,v)}if(jr(m)||tr(m))return m=Bt(m,b.mode,v,null),m.return=b,m;if(typeof m.then=="function")return R(b,hl(m),v);if(m.$$typeof===an)return R(b,cl(b,m),v);gl(b,m)}return null}function S(b,m,v,M){var en=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return en!==null?null:c(b,m,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case J:return v.key===en?f(b,m,v,M):null;case tn:return v.key===en?y(b,m,v,M):null;case Jn:return v=Yt(v),S(b,m,v,M)}if(jr(v)||tr(v))return en!==null?null:A(b,m,v,M,null);if(typeof v.then=="function")return S(b,m,hl(v),M);if(v.$$typeof===an)return S(b,m,cl(b,v),M);gl(b,v)}return null}function j(b,m,v,M,en){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return b=b.get(v)||null,c(m,b,""+M,en);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case J:return b=b.get(M.key===null?v:M.key)||null,f(m,b,M,en);case tn:return b=b.get(M.key===null?v:M.key)||null,y(m,b,M,en);case Jn:return M=Yt(M),j(b,m,v,M,en)}if(jr(M)||tr(M))return b=b.get(v)||null,A(m,b,M,en,null);if(typeof M.then=="function")return j(b,m,v,hl(M),en);if(M.$$typeof===an)return j(b,m,v,cl(m,M),en);gl(m,M)}return null}function Z(b,m,v,M){for(var en=null,Ln=null,$=m,xn=m=0,kn=null;$!==null&&xn<v.length;xn++){$.index>xn?(kn=$,$=null):kn=$.sibling;var zn=S(b,$,v[xn],M);if(zn===null){$===null&&($=kn);break}n&&$&&zn.alternate===null&&r(b,$),m=l(zn,m,xn),Ln===null?en=zn:Ln.sibling=zn,Ln=zn,$=kn}if(xn===v.length)return e(b,$),Mn&&ze(b,xn),en;if($===null){for(;xn<v.length;xn++)$=R(b,v[xn],M),$!==null&&(m=l($,m,xn),Ln===null?en=$:Ln.sibling=$,Ln=$);return Mn&&ze(b,xn),en}for($=t($);xn<v.length;xn++)kn=j($,b,xn,v[xn],M),kn!==null&&(n&&kn.alternate!==null&&$.delete(kn.key===null?xn:kn.key),m=l(kn,m,xn),Ln===null?en=kn:Ln.sibling=kn,Ln=kn);return n&&$.forEach(function(yt){return r(b,yt)}),Mn&&ze(b,xn),en}function sn(b,m,v,M){if(v==null)throw Error(d(151));for(var en=null,Ln=null,$=m,xn=m=0,kn=null,zn=v.next();$!==null&&!zn.done;xn++,zn=v.next()){$.index>xn?(kn=$,$=null):kn=$.sibling;var yt=S(b,$,zn.value,M);if(yt===null){$===null&&($=kn);break}n&&$&&yt.alternate===null&&r(b,$),m=l(yt,m,xn),Ln===null?en=yt:Ln.sibling=yt,Ln=yt,$=kn}if(zn.done)return e(b,$),Mn&&ze(b,xn),en;if($===null){for(;!zn.done;xn++,zn=v.next())zn=R(b,zn.value,M),zn!==null&&(m=l(zn,m,xn),Ln===null?en=zn:Ln.sibling=zn,Ln=zn);return Mn&&ze(b,xn),en}for($=t($);!zn.done;xn++,zn=v.next())zn=j($,b,xn,zn.value,M),zn!==null&&(n&&zn.alternate!==null&&$.delete(zn.key===null?xn:zn.key),m=l(zn,m,xn),Ln===null?en=zn:Ln.sibling=zn,Ln=zn);return n&&$.forEach(function($p){return r(b,$p)}),Mn&&ze(b,xn),en}function Qn(b,m,v,M){if(typeof v=="object"&&v!==null&&v.type===F&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case J:n:{for(var en=v.key;m!==null;){if(m.key===en){if(en=v.type,en===F){if(m.tag===7){e(b,m.sibling),M=i(m,v.props.children),M.return=b,b=M;break n}}else if(m.elementType===en||typeof en=="object"&&en!==null&&en.$$typeof===Jn&&Yt(en)===m.type){e(b,m.sibling),M=i(m,v.props),oi(M,v),M.return=b,b=M;break n}e(b,m);break}else r(b,m);m=m.sibling}v.type===F?(M=Bt(v.props.children,b.mode,M,v.key),M.return=b,b=M):(M=ll(v.type,v.key,v.props,null,b.mode,M),oi(M,v),M.return=b,b=M)}return s(b);case tn:n:{for(en=v.key;m!==null;){if(m.key===en)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){e(b,m.sibling),M=i(m,v.children||[]),M.return=b,b=M;break n}else{e(b,m);break}else r(b,m);m=m.sibling}M=Cs(v,b.mode,M),M.return=b,b=M}return s(b);case Jn:return v=Yt(v),Qn(b,m,v,M)}if(jr(v))return Z(b,m,v,M);if(tr(v)){if(en=tr(v),typeof en!="function")throw Error(d(150));return v=en.call(v),sn(b,m,v,M)}if(typeof v.then=="function")return Qn(b,m,hl(v),M);if(v.$$typeof===an)return Qn(b,m,cl(b,v),M);gl(b,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,m!==null&&m.tag===6?(e(b,m.sibling),M=i(m,v),M.return=b,b=M):(e(b,m),M=Bs(v,b.mode,M),M.return=b,b=M),s(b)):e(b,m)}return function(b,m,v,M){try{si=0;var en=Qn(b,m,v,M);return _a=null,en}catch($){if($===ba||$===dl)throw $;var Ln=ne(29,$,null,b.mode);return Ln.lanes=M,Ln.return=b,Ln}}}var Vt=Eu(!0),Au=Eu(!1),at=!1;function Zs(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fs(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function it(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function lt(n,r,e){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,(Dn&2)!==0){var i=t.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),t.pending=r,r=il(n),uu(n,null,e),r}return al(n,t,r,e),il(n)}function ci(n,r,e){if(r=r.updateQueue,r!==null&&(r=r.shared,(e&4194048)!==0)){var t=r.lanes;t&=n.pendingLanes,e|=t,r.lanes=e,cn(n,e)}}function Ws(n,r){var e=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,e===t)){var i=null,l=null;if(e=e.firstBaseUpdate,e!==null){do{var s={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,e=e.next}while(e!==null);l===null?i=l=r:l=l.next=r}else i=l=r;e={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:t.shared,callbacks:t.callbacks},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=r:n.next=r,e.lastBaseUpdate=r}var Ps=!1;function ui(){if(Ps){var n=ma;if(n!==null)throw n}}function di(n,r,e,t){Ps=!1;var i=n.updateQueue;at=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var f=c,y=f.next;f.next=null,s===null?l=y:s.next=y,s=f;var A=n.alternate;A!==null&&(A=A.updateQueue,c=A.lastBaseUpdate,c!==s&&(c===null?A.firstBaseUpdate=y:c.next=y,A.lastBaseUpdate=f))}if(l!==null){var R=i.baseState;s=0,A=y=f=null,c=l;do{var S=c.lane&-536870913,j=S!==c.lane;if(j?(wn&S)===S:(t&S)===S){S!==0&&S===pa&&(Ps=!0),A!==null&&(A=A.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});n:{var Z=n,sn=c;S=r;var Qn=e;switch(sn.tag){case 1:if(Z=sn.payload,typeof Z=="function"){R=Z.call(Qn,R,S);break n}R=Z;break n;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=sn.payload,S=typeof Z=="function"?Z.call(Qn,R,S):Z,S==null)break n;R=O({},R,S);break n;case 2:at=!0}}S=c.callback,S!==null&&(n.flags|=64,j&&(n.flags|=8192),j=i.callbacks,j===null?i.callbacks=[S]:j.push(S))}else j={lane:S,tag:c.tag,payload:c.payload,callback:c.callback,next:null},A===null?(y=A=j,f=R):A=A.next=j,s|=S;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;j=c,c=j.next,j.next=null,i.lastBaseUpdate=j,i.shared.pending=null}}while(!0);A===null&&(f=R),i.baseState=f,i.firstBaseUpdate=y,i.lastBaseUpdate=A,l===null&&(i.shared.lanes=0),dt|=s,n.lanes=s,n.memoizedState=R}}function Ou(n,r){if(typeof n!="function")throw Error(d(191,n));n.call(r)}function wu(n,r){var e=n.callbacks;if(e!==null)for(n.callbacks=null,n=0;n<e.length;n++)Ou(e[n],r)}var xa=p(null),pl=p(0);function ku(n,r){n=Qe,Y(pl,n),Y(xa,r),Qe=n|r.baseLanes}function $s(){Y(pl,Qe),Y(xa,xa.current)}function no(){Qe=pl.current,w(xa),w(pl)}var re=p(null),fe=null;function st(n){var r=n.alternate;Y(dr,dr.current&1),Y(re,n),fe===null&&(r===null||xa.current!==null||r.memoizedState!==null)&&(fe=n)}function ro(n){Y(dr,dr.current),Y(re,n),fe===null&&(fe=n)}function Mu(n){n.tag===22?(Y(dr,dr.current),Y(re,n),fe===null&&(fe=n)):ot()}function ot(){Y(dr,dr.current),Y(re,re.current)}function ee(n){w(re),fe===n&&(fe=null),w(dr)}var dr=p(0);function ml(n){for(var r=n;r!==null;){if(r.tag===13){var e=r.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||oc(e)||cc(e)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ce=0,bn=null,Vn=null,_r=null,bl=!1,va=!1,Kt=!1,_l=0,fi=0,ya=null,Vg=0;function ar(){throw Error(d(321))}function eo(n,r){if(r===null)return!1;for(var e=0;e<r.length&&e<n.length;e++)if(!$r(n[e],r[e]))return!1;return!0}function to(n,r,e,t,i,l){return Ce=l,bn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,E.H=n===null||n.memoizedState===null?gd:xo,Kt=!1,l=e(t,i),Kt=!1,va&&(l=Lu(r,e,t,i)),Ru(n),l}function Ru(n){E.H=pi;var r=Vn!==null&&Vn.next!==null;if(Ce=0,_r=Vn=bn=null,bl=!1,fi=0,ya=null,r)throw Error(d(300));n===null||xr||(n=n.dependencies,n!==null&&ol(n)&&(xr=!0))}function Lu(n,r,e,t){bn=n;var i=0;do{if(va&&(ya=null),fi=0,va=!1,25<=i)throw Error(d(301));if(i+=1,_r=Vn=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}E.H=pd,l=r(e,t)}while(va);return l}function Kg(){var n=E.H,r=n.useState()[0];return r=typeof r.then=="function"?hi(r):r,n=n.useState()[0],(Vn!==null?Vn.memoizedState:null)!==n&&(bn.flags|=1024),r}function ao(){var n=_l!==0;return _l=0,n}function io(n,r,e){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~e}function lo(n){if(bl){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}bl=!1}Ce=0,_r=Vn=bn=null,va=!1,fi=_l=0,ya=null}function Cr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _r===null?bn.memoizedState=_r=n:_r=_r.next=n,_r}function fr(){if(Vn===null){var n=bn.alternate;n=n!==null?n.memoizedState:null}else n=Vn.next;var r=_r===null?bn.memoizedState:_r.next;if(r!==null)_r=r,Vn=n;else{if(n===null)throw bn.alternate===null?Error(d(467)):Error(d(310));Vn=n,n={memoizedState:Vn.memoizedState,baseState:Vn.baseState,baseQueue:Vn.baseQueue,queue:Vn.queue,next:null},_r===null?bn.memoizedState=_r=n:_r=_r.next=n}return _r}function xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hi(n){var r=fi;return fi+=1,ya===null&&(ya=[]),n=Su(ya,n,r),r=bn,(_r===null?r.memoizedState:_r.next)===null&&(r=r.alternate,E.H=r===null||r.memoizedState===null?gd:xo),n}function vl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return hi(n);if(n.$$typeof===an)return Ar(n)}throw Error(d(438,String(n)))}function so(n){var r=null,e=bn.updateQueue;if(e!==null&&(r=e.memoCache),r==null){var t=bn.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(r={data:t.data.map(function(i){return i.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),e===null&&(e=xl(),bn.updateQueue=e),e.memoCache=r,e=r.data[r.index],e===void 0)for(e=r.data[r.index]=Array(n),t=0;t<n;t++)e[t]=Sr;return r.index++,e}function Ue(n,r){return typeof r=="function"?r(n):r}function yl(n){var r=fr();return oo(r,Vn,n)}function oo(n,r,e){var t=n.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var i=n.baseQueue,l=t.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,t.pending=null}if(l=n.baseState,i===null)n.memoizedState=l;else{r=i.next;var c=s=null,f=null,y=r,A=!1;do{var R=y.lane&-536870913;if(R!==y.lane?(wn&R)===R:(Ce&R)===R){var S=y.revertLane;if(S===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),R===pa&&(A=!0);else if((Ce&S)===S){y=y.next,S===pa&&(A=!0);continue}else R={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(c=f=R,s=l):f=f.next=R,bn.lanes|=S,dt|=S;R=y.action,Kt&&e(l,R),l=y.hasEagerState?y.eagerState:e(l,R)}else S={lane:R,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(c=f=S,s=l):f=f.next=S,bn.lanes|=R,dt|=R;y=y.next}while(y!==null&&y!==r);if(f===null?s=l:f.next=c,!$r(l,n.memoizedState)&&(xr=!0,A&&(e=ma,e!==null)))throw e;n.memoizedState=l,n.baseState=s,n.baseQueue=f,t.lastRenderedState=l}return i===null&&(t.lanes=0),[n.memoizedState,t.dispatch]}function co(n){var r=fr(),e=r.queue;if(e===null)throw Error(d(311));e.lastRenderedReducer=n;var t=e.dispatch,i=e.pending,l=r.memoizedState;if(i!==null){e.pending=null;var s=i=i.next;do l=n(l,s.action),s=s.next;while(s!==i);$r(l,r.memoizedState)||(xr=!0),r.memoizedState=l,r.baseQueue===null&&(r.baseState=l),e.lastRenderedState=l}return[l,t]}function zu(n,r,e){var t=bn,i=fr(),l=Mn;if(l){if(e===void 0)throw Error(d(407));e=e()}else e=r();var s=!$r((Vn||i).memoizedState,e);if(s&&(i.memoizedState=e,xr=!0),i=i.queue,ho(Cu.bind(null,t,i,n),[n]),i.getSnapshot!==r||s||_r!==null&&_r.memoizedState.tag&1){if(t.flags|=2048,Ta(9,{destroy:void 0},Bu.bind(null,t,i,e,r),null),In===null)throw Error(d(349));l||(Ce&127)!==0||Du(t,r,e)}return e}function Du(n,r,e){n.flags|=16384,n={getSnapshot:r,value:e},r=bn.updateQueue,r===null?(r=xl(),bn.updateQueue=r,r.stores=[n]):(e=r.stores,e===null?r.stores=[n]:e.push(n))}function Bu(n,r,e,t){r.value=e,r.getSnapshot=t,Uu(r)&&Hu(n)}function Cu(n,r,e){return e(function(){Uu(r)&&Hu(n)})}function Uu(n){var r=n.getSnapshot;n=n.value;try{var e=r();return!$r(n,e)}catch{return!0}}function Hu(n){var r=Dt(n,2);r!==null&&Ir(r,n,2)}function uo(n){var r=Cr();if(typeof n=="function"){var e=n;if(n=e(),Kt){ye(!0);try{e()}finally{ye(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ue,lastRenderedState:n},r}function qu(n,r,e,t){return n.baseState=e,oo(n,Vn,typeof t=="function"?t:Ue)}function Qg(n,r,e,t,i){if(jl(n))throw Error(d(485));if(n=r.action,n!==null){var l={payload:i,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};E.T!==null?e(!0):l.isTransition=!1,t(l),e=r.pending,e===null?(l.next=r.pending=l,Yu(r,l)):(l.next=e.next,r.pending=e.next=l)}}function Yu(n,r){var e=r.action,t=r.payload,i=n.state;if(r.isTransition){var l=E.T,s={};E.T=s;try{var c=e(i,t),f=E.S;f!==null&&f(s,c),Gu(n,r,c)}catch(y){fo(n,r,y)}finally{l!==null&&s.types!==null&&(l.types=s.types),E.T=l}}else try{l=e(i,t),Gu(n,r,l)}catch(y){fo(n,r,y)}}function Gu(n,r,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(t){Vu(n,r,t)},function(t){return fo(n,r,t)}):Vu(n,r,e)}function Vu(n,r,e){r.status="fulfilled",r.value=e,Ku(r),n.state=e,r=n.pending,r!==null&&(e=r.next,e===r?n.pending=null:(e=e.next,r.next=e,Yu(n,e)))}function fo(n,r,e){var t=n.pending;if(n.pending=null,t!==null){t=t.next;do r.status="rejected",r.reason=e,Ku(r),r=r.next;while(r!==t)}n.action=null}function Ku(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Qu(n,r){return r}function Ju(n,r){if(Mn){var e=In.formState;if(e!==null){n:{var t=bn;if(Mn){if(Pn){r:{for(var i=Pn,l=de;i.nodeType!==8;){if(!l){i=null;break r}if(i=he(i.nextSibling),i===null){i=null;break r}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){Pn=he(i.nextSibling),t=i.data==="F!";break n}}et(t)}t=!1}t&&(r=e[0])}}return e=Cr(),e.memoizedState=e.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qu,lastRenderedState:r},e.queue=t,e=dd.bind(null,bn,t),t.dispatch=e,t=uo(!1),l=_o.bind(null,bn,!1,t.queue),t=Cr(),i={state:r,dispatch:null,action:n,pending:null},t.queue=i,e=Qg.bind(null,bn,i,l,e),i.dispatch=e,t.memoizedState=n,[r,e,!1]}function Xu(n){var r=fr();return Iu(r,Vn,n)}function Iu(n,r,e){if(r=oo(n,r,Qu)[0],n=yl(Ue)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var t=hi(r)}catch(s){throw s===ba?dl:s}else t=r;r=fr();var i=r.queue,l=i.dispatch;return e!==r.memoizedState&&(bn.flags|=2048,Ta(9,{destroy:void 0},Jg.bind(null,i,e),null)),[t,l,n]}function Jg(n,r){n.action=r}function Zu(n){var r=fr(),e=Vn;if(e!==null)return Iu(r,e,n);fr(),r=r.memoizedState,e=fr();var t=e.queue.dispatch;return e.memoizedState=n,[r,t,!1]}function Ta(n,r,e,t){return n={tag:n,create:e,deps:t,inst:r,next:null},r=bn.updateQueue,r===null&&(r=xl(),bn.updateQueue=r),e=r.lastEffect,e===null?r.lastEffect=n.next=n:(t=e.next,e.next=n,n.next=t,r.lastEffect=n),n}function Fu(){return fr().memoizedState}function Tl(n,r,e,t){var i=Cr();bn.flags|=n,i.memoizedState=Ta(1|r,{destroy:void 0},e,t===void 0?null:t)}function Sl(n,r,e,t){var i=fr();t=t===void 0?null:t;var l=i.memoizedState.inst;Vn!==null&&t!==null&&eo(t,Vn.memoizedState.deps)?i.memoizedState=Ta(r,l,e,t):(bn.flags|=n,i.memoizedState=Ta(1|r,l,e,t))}function Wu(n,r){Tl(8390656,8,n,r)}function ho(n,r){Sl(2048,8,n,r)}function Xg(n){bn.flags|=4;var r=bn.updateQueue;if(r===null)r=xl(),bn.updateQueue=r,r.events=[n];else{var e=r.events;e===null?r.events=[n]:e.push(n)}}function Pu(n){var r=fr().memoizedState;return Xg({ref:r,nextImpl:n}),function(){if((Dn&2)!==0)throw Error(d(440));return r.impl.apply(void 0,arguments)}}function $u(n,r){return Sl(4,2,n,r)}function nd(n,r){return Sl(4,4,n,r)}function rd(n,r){if(typeof r=="function"){n=n();var e=r(n);return function(){typeof e=="function"?e():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function ed(n,r,e){e=e!=null?e.concat([n]):null,Sl(4,4,rd.bind(null,r,n),e)}function go(){}function td(n,r){var e=fr();r=r===void 0?null:r;var t=e.memoizedState;return r!==null&&eo(r,t[1])?t[0]:(e.memoizedState=[n,r],n)}function ad(n,r){var e=fr();r=r===void 0?null:r;var t=e.memoizedState;if(r!==null&&eo(r,t[1]))return t[0];if(t=n(),Kt){ye(!0);try{n()}finally{ye(!1)}}return e.memoizedState=[t,r],t}function po(n,r,e){return e===void 0||(Ce&1073741824)!==0&&(wn&261930)===0?n.memoizedState=r:(n.memoizedState=e,n=lf(),bn.lanes|=n,dt|=n,e)}function id(n,r,e,t){return $r(e,r)?e:xa.current!==null?(n=po(n,e,t),$r(n,r)||(xr=!0),n):(Ce&42)===0||(Ce&1073741824)!==0&&(wn&261930)===0?(xr=!0,n.memoizedState=e):(n=lf(),bn.lanes|=n,dt|=n,r)}function ld(n,r,e,t,i){var l=q.p;q.p=l!==0&&8>l?l:8;var s=E.T,c={};E.T=c,_o(n,!1,r,e);try{var f=i(),y=E.S;if(y!==null&&y(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var A=Gg(f,t);gi(n,r,A,ie(n))}else gi(n,r,t,ie(n))}catch(R){gi(n,r,{then:function(){},status:"rejected",reason:R},ie())}finally{q.p=l,s!==null&&c.types!==null&&(s.types=c.types),E.T=s}}function Ig(){}function mo(n,r,e,t){if(n.tag!==5)throw Error(d(476));var i=sd(n).queue;ld(n,i,r,K,e===null?Ig:function(){return od(n),e(t)})}function sd(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ue,lastRenderedState:K},next:null};var e={};return r.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ue,lastRenderedState:e},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function od(n){var r=sd(n);r.next===null&&(r=n.alternate.memoizedState),gi(n,r.next.queue,{},ie())}function bo(){return Ar(Mi)}function cd(){return fr().memoizedState}function ud(){return fr().memoizedState}function Zg(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var e=ie();n=it(e);var t=lt(r,n,e);t!==null&&(Ir(t,r,e),ci(t,r,e)),r={cache:Qs()},n.payload=r;return}r=r.return}}function Fg(n,r,e){var t=ie();e={lane:t,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},jl(n)?fd(r,e):(e=zs(n,r,e,t),e!==null&&(Ir(e,n,t),hd(e,r,t)))}function dd(n,r,e){var t=ie();gi(n,r,e,t)}function gi(n,r,e,t){var i={lane:t,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(jl(n))fd(r,i);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=r.lastRenderedReducer,l!==null))try{var s=r.lastRenderedState,c=l(s,e);if(i.hasEagerState=!0,i.eagerState=c,$r(c,s))return al(n,r,i,0),In===null&&tl(),!1}catch{}if(e=zs(n,r,i,t),e!==null)return Ir(e,n,t),hd(e,r,t),!0}return!1}function _o(n,r,e,t){if(t={lane:2,revertLane:Fo(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},jl(n)){if(r)throw Error(d(479))}else r=zs(n,e,t,2),r!==null&&Ir(r,n,2)}function jl(n){var r=n.alternate;return n===bn||r!==null&&r===bn}function fd(n,r){va=bl=!0;var e=n.pending;e===null?r.next=r:(r.next=e.next,e.next=r),n.pending=r}function hd(n,r,e){if((e&4194048)!==0){var t=r.lanes;t&=n.pendingLanes,e|=t,r.lanes=e,cn(n,e)}}var pi={readContext:Ar,use:vl,useCallback:ar,useContext:ar,useEffect:ar,useImperativeHandle:ar,useLayoutEffect:ar,useInsertionEffect:ar,useMemo:ar,useReducer:ar,useRef:ar,useState:ar,useDebugValue:ar,useDeferredValue:ar,useTransition:ar,useSyncExternalStore:ar,useId:ar,useHostTransitionStatus:ar,useFormState:ar,useActionState:ar,useOptimistic:ar,useMemoCache:ar,useCacheRefresh:ar};pi.useEffectEvent=ar;var gd={readContext:Ar,use:vl,useCallback:function(n,r){return Cr().memoizedState=[n,r===void 0?null:r],n},useContext:Ar,useEffect:Wu,useImperativeHandle:function(n,r,e){e=e!=null?e.concat([n]):null,Tl(4194308,4,rd.bind(null,r,n),e)},useLayoutEffect:function(n,r){return Tl(4194308,4,n,r)},useInsertionEffect:function(n,r){Tl(4,2,n,r)},useMemo:function(n,r){var e=Cr();r=r===void 0?null:r;var t=n();if(Kt){ye(!0);try{n()}finally{ye(!1)}}return e.memoizedState=[t,r],t},useReducer:function(n,r,e){var t=Cr();if(e!==void 0){var i=e(r);if(Kt){ye(!0);try{e(r)}finally{ye(!1)}}}else i=r;return t.memoizedState=t.baseState=i,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},t.queue=n,n=n.dispatch=Fg.bind(null,bn,n),[t.memoizedState,n]},useRef:function(n){var r=Cr();return n={current:n},r.memoizedState=n},useState:function(n){n=uo(n);var r=n.queue,e=dd.bind(null,bn,r);return r.dispatch=e,[n.memoizedState,e]},useDebugValue:go,useDeferredValue:function(n,r){var e=Cr();return po(e,n,r)},useTransition:function(){var n=uo(!1);return n=ld.bind(null,bn,n.queue,!0,!1),Cr().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,e){var t=bn,i=Cr();if(Mn){if(e===void 0)throw Error(d(407));e=e()}else{if(e=r(),In===null)throw Error(d(349));(wn&127)!==0||Du(t,r,e)}i.memoizedState=e;var l={value:e,getSnapshot:r};return i.queue=l,Wu(Cu.bind(null,t,l,n),[n]),t.flags|=2048,Ta(9,{destroy:void 0},Bu.bind(null,t,l,e,r),null),e},useId:function(){var n=Cr(),r=In.identifierPrefix;if(Mn){var e=je,t=Se;e=(t&~(1<<32-Dr(t)-1)).toString(32)+e,r="_"+r+"R_"+e,e=_l++,0<e&&(r+="H"+e.toString(32)),r+="_"}else e=Vg++,r="_"+r+"r_"+e.toString(32)+"_";return n.memoizedState=r},useHostTransitionStatus:bo,useFormState:Ju,useActionState:Ju,useOptimistic:function(n){var r=Cr();r.memoizedState=r.baseState=n;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=e,r=_o.bind(null,bn,!0,e),e.dispatch=r,[n,r]},useMemoCache:so,useCacheRefresh:function(){return Cr().memoizedState=Zg.bind(null,bn)},useEffectEvent:function(n){var r=Cr(),e={impl:n};return r.memoizedState=e,function(){if((Dn&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}},xo={readContext:Ar,use:vl,useCallback:td,useContext:Ar,useEffect:ho,useImperativeHandle:ed,useInsertionEffect:$u,useLayoutEffect:nd,useMemo:ad,useReducer:yl,useRef:Fu,useState:function(){return yl(Ue)},useDebugValue:go,useDeferredValue:function(n,r){var e=fr();return id(e,Vn.memoizedState,n,r)},useTransition:function(){var n=yl(Ue)[0],r=fr().memoizedState;return[typeof n=="boolean"?n:hi(n),r]},useSyncExternalStore:zu,useId:cd,useHostTransitionStatus:bo,useFormState:Xu,useActionState:Xu,useOptimistic:function(n,r){var e=fr();return qu(e,Vn,n,r)},useMemoCache:so,useCacheRefresh:ud};xo.useEffectEvent=Pu;var pd={readContext:Ar,use:vl,useCallback:td,useContext:Ar,useEffect:ho,useImperativeHandle:ed,useInsertionEffect:$u,useLayoutEffect:nd,useMemo:ad,useReducer:co,useRef:Fu,useState:function(){return co(Ue)},useDebugValue:go,useDeferredValue:function(n,r){var e=fr();return Vn===null?po(e,n,r):id(e,Vn.memoizedState,n,r)},useTransition:function(){var n=co(Ue)[0],r=fr().memoizedState;return[typeof n=="boolean"?n:hi(n),r]},useSyncExternalStore:zu,useId:cd,useHostTransitionStatus:bo,useFormState:Zu,useActionState:Zu,useOptimistic:function(n,r){var e=fr();return Vn!==null?qu(e,Vn,n,r):(e.baseState=n,[n,e.queue.dispatch])},useMemoCache:so,useCacheRefresh:ud};pd.useEffectEvent=Pu;function vo(n,r,e,t){r=n.memoizedState,e=e(t,r),e=e==null?r:O({},r,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var yo={enqueueSetState:function(n,r,e){n=n._reactInternals;var t=ie(),i=it(t);i.payload=r,e!=null&&(i.callback=e),r=lt(n,i,t),r!==null&&(Ir(r,n,t),ci(r,n,t))},enqueueReplaceState:function(n,r,e){n=n._reactInternals;var t=ie(),i=it(t);i.tag=1,i.payload=r,e!=null&&(i.callback=e),r=lt(n,i,t),r!==null&&(Ir(r,n,t),ci(r,n,t))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var e=ie(),t=it(e);t.tag=2,r!=null&&(t.callback=r),r=lt(n,t,e),r!==null&&(Ir(r,n,e),ci(r,n,e))}};function md(n,r,e,t,i,l,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,l,s):r.prototype&&r.prototype.isPureReactComponent?!ri(e,t)||!ri(i,l):!0}function bd(n,r,e,t){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(e,t),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(e,t),r.state!==n&&yo.enqueueReplaceState(r,r.state,null)}function Qt(n,r){var e=r;if("ref"in r){e={};for(var t in r)t!=="ref"&&(e[t]=r[t])}if(n=n.defaultProps){e===r&&(e=O({},e));for(var i in n)e[i]===void 0&&(e[i]=n[i])}return e}function _d(n){el(n)}function xd(n){console.error(n)}function vd(n){el(n)}function Nl(n,r){try{var e=n.onUncaughtError;e(r.value,{componentStack:r.stack})}catch(t){setTimeout(function(){throw t})}}function yd(n,r,e){try{var t=n.onCaughtError;t(e.value,{componentStack:e.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function To(n,r,e){return e=it(e),e.tag=3,e.payload={element:null},e.callback=function(){Nl(n,r)},e}function Td(n){return n=it(n),n.tag=3,n}function Sd(n,r,e,t){var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var l=t.value;n.payload=function(){return i(l)},n.callback=function(){yd(r,e,t)}}var s=e.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yd(r,e,t),typeof i!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})})}function Wg(n,r,e,t,i){if(e.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(r=e.alternate,r!==null&&ga(r,e,i,!0),e=re.current,e!==null){switch(e.tag){case 31:case 13:return fe===null?Cl():e.alternate===null&&ir===0&&(ir=3),e.flags&=-257,e.flags|=65536,e.lanes=i,t===fl?e.flags|=16384:(r=e.updateQueue,r===null?e.updateQueue=new Set([t]):r.add(t),Xo(n,t,i)),!1;case 22:return e.flags|=65536,t===fl?e.flags|=16384:(r=e.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([t])},e.updateQueue=r):(e=r.retryQueue,e===null?r.retryQueue=new Set([t]):e.add(t)),Xo(n,t,i)),!1}throw Error(d(435,e.tag))}return Xo(n,t,i),Cl(),!1}if(Mn)return r=re.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=i,t!==qs&&(n=Error(d(422),{cause:t}),ai(oe(n,e)))):(t!==qs&&(r=Error(d(423),{cause:t}),ai(oe(r,e))),n=n.current.alternate,n.flags|=65536,i&=-i,n.lanes|=i,t=oe(t,e),i=To(n.stateNode,t,i),Ws(n,i),ir!==4&&(ir=2)),!1;var l=Error(d(520),{cause:t});if(l=oe(l,e),Si===null?Si=[l]:Si.push(l),ir!==4&&(ir=2),r===null)return!0;t=oe(t,e),e=r;do{switch(e.tag){case 3:return e.flags|=65536,n=i&-i,e.lanes|=n,n=To(e.stateNode,t,n),Ws(e,n),!1;case 1:if(r=e.type,l=e.stateNode,(e.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ft===null||!ft.has(l))))return e.flags|=65536,i&=-i,e.lanes|=i,i=Td(i),Sd(i,n,e,t),Ws(e,i),!1}e=e.return}while(e!==null);return!1}var So=Error(d(461)),xr=!1;function Or(n,r,e,t){r.child=n===null?Au(r,null,e,t):Vt(r,n.child,e,t)}function jd(n,r,e,t,i){e=e.render;var l=r.ref;if("ref"in t){var s={};for(var c in t)c!=="ref"&&(s[c]=t[c])}else s=t;return Ht(r),t=to(n,r,e,s,l,i),c=ao(),n!==null&&!xr?(io(n,r,i),He(n,r,i)):(Mn&&c&&Us(r),r.flags|=1,Or(n,r,t,i),r.child)}function Nd(n,r,e,t,i){if(n===null){var l=e.type;return typeof l=="function"&&!Ds(l)&&l.defaultProps===void 0&&e.compare===null?(r.tag=15,r.type=l,Ed(n,r,l,t,i)):(n=ll(e.type,null,t,r,r.mode,i),n.ref=r.ref,n.return=r,r.child=n)}if(l=n.child,!Mo(n,i)){var s=l.memoizedProps;if(e=e.compare,e=e!==null?e:ri,e(s,t)&&n.ref===r.ref)return He(n,r,i)}return r.flags|=1,n=Le(l,t),n.ref=r.ref,n.return=r,r.child=n}function Ed(n,r,e,t,i){if(n!==null){var l=n.memoizedProps;if(ri(l,t)&&n.ref===r.ref)if(xr=!1,r.pendingProps=t=l,Mo(n,i))(n.flags&131072)!==0&&(xr=!0);else return r.lanes=n.lanes,He(n,r,i)}return jo(n,r,e,t,i)}function Ad(n,r,e,t){var i=t.children,l=n!==null?n.memoizedState:null;if(n===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((r.flags&128)!==0){if(l=l!==null?l.baseLanes|e:e,n!==null){for(t=r.child=n.child,i=0;t!==null;)i=i|t.lanes|t.childLanes,t=t.sibling;t=i&~l}else t=0,r.child=null;return Od(n,r,l,e,t)}if((e&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&ul(r,l!==null?l.cachePool:null),l!==null?ku(r,l):$s(),Mu(r);else return t=r.lanes=536870912,Od(n,r,l!==null?l.baseLanes|e:e,e,t)}else l!==null?(ul(r,l.cachePool),ku(r,l),ot(),r.memoizedState=null):(n!==null&&ul(r,null),$s(),ot());return Or(n,r,i,e),r.child}function mi(n,r){return n!==null&&n.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function Od(n,r,e,t,i){var l=Xs();return l=l===null?null:{parent:br._currentValue,pool:l},r.memoizedState={baseLanes:e,cachePool:l},n!==null&&ul(r,null),$s(),Mu(r),n!==null&&ga(n,r,t,!0),r.childLanes=i,null}function El(n,r){return r=Ol({mode:r.mode,children:r.children},n.mode),r.ref=n.ref,n.child=r,r.return=n,r}function wd(n,r,e){return Vt(r,n.child,null,e),n=El(r,r.pendingProps),n.flags|=2,ee(r),r.memoizedState=null,n}function Pg(n,r,e){var t=r.pendingProps,i=(r.flags&128)!==0;if(r.flags&=-129,n===null){if(Mn){if(t.mode==="hidden")return n=El(r,t),r.lanes=536870912,mi(null,n);if(ro(r),(n=Pn)?(n=Gf(n,de),n=n!==null&&n.data==="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:nt!==null?{id:Se,overflow:je}:null,retryLane:536870912,hydrationErrors:null},e=fu(n),e.return=r,r.child=e,Er=r,Pn=null)):n=null,n===null)throw et(r);return r.lanes=536870912,null}return El(r,t)}var l=n.memoizedState;if(l!==null){var s=l.dehydrated;if(ro(r),i)if(r.flags&256)r.flags&=-257,r=wd(n,r,e);else if(r.memoizedState!==null)r.child=n.child,r.flags|=128,r=null;else throw Error(d(558));else if(xr||ga(n,r,e,!1),i=(e&n.childLanes)!==0,xr||i){if(t=In,t!==null&&(s=or(t,e),s!==0&&s!==l.retryLane))throw l.retryLane=s,Dt(n,s),Ir(t,n,s),So;Cl(),r=wd(n,r,e)}else n=l.treeContext,Pn=he(s.nextSibling),Er=r,Mn=!0,rt=null,de=!1,n!==null&&pu(r,n),r=El(r,t),r.flags|=4096;return r}return n=Le(n.child,{mode:t.mode,children:t.children}),n.ref=r.ref,r.child=n,n.return=r,n}function Al(n,r){var e=r.ref;if(e===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(d(284));(n===null||n.ref!==e)&&(r.flags|=4194816)}}function jo(n,r,e,t,i){return Ht(r),e=to(n,r,e,t,void 0,i),t=ao(),n!==null&&!xr?(io(n,r,i),He(n,r,i)):(Mn&&t&&Us(r),r.flags|=1,Or(n,r,e,i),r.child)}function kd(n,r,e,t,i,l){return Ht(r),r.updateQueue=null,e=Lu(r,t,e,i),Ru(n),t=ao(),n!==null&&!xr?(io(n,r,l),He(n,r,l)):(Mn&&t&&Us(r),r.flags|=1,Or(n,r,e,l),r.child)}function Md(n,r,e,t,i){if(Ht(r),r.stateNode===null){var l=ua,s=e.contextType;typeof s=="object"&&s!==null&&(l=Ar(s)),l=new e(t,l),r.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=yo,r.stateNode=l,l._reactInternals=r,l=r.stateNode,l.props=t,l.state=r.memoizedState,l.refs={},Zs(r),s=e.contextType,l.context=typeof s=="object"&&s!==null?Ar(s):ua,l.state=r.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vo(r,e,s,t),l.state=r.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&yo.enqueueReplaceState(l,l.state,null),di(r,t,l,i),ui(),l.state=r.memoizedState),typeof l.componentDidMount=="function"&&(r.flags|=4194308),t=!0}else if(n===null){l=r.stateNode;var c=r.memoizedProps,f=Qt(e,c);l.props=f;var y=l.context,A=e.contextType;s=ua,typeof A=="object"&&A!==null&&(s=Ar(A));var R=e.getDerivedStateFromProps;A=typeof R=="function"||typeof l.getSnapshotBeforeUpdate=="function",c=r.pendingProps!==c,A||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c||y!==s)&&bd(r,l,t,s),at=!1;var S=r.memoizedState;l.state=S,di(r,t,l,i),ui(),y=r.memoizedState,c||S!==y||at?(typeof R=="function"&&(vo(r,e,R,t),y=r.memoizedState),(f=at||md(r,e,f,t,S,y,s))?(A||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=t,r.memoizedState=y),l.props=t,l.state=y,l.context=s,t=f):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),t=!1)}else{l=r.stateNode,Fs(n,r),s=r.memoizedProps,A=Qt(e,s),l.props=A,R=r.pendingProps,S=l.context,y=e.contextType,f=ua,typeof y=="object"&&y!==null&&(f=Ar(y)),c=e.getDerivedStateFromProps,(y=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==R||S!==f)&&bd(r,l,t,f),at=!1,S=r.memoizedState,l.state=S,di(r,t,l,i),ui();var j=r.memoizedState;s!==R||S!==j||at||n!==null&&n.dependencies!==null&&ol(n.dependencies)?(typeof c=="function"&&(vo(r,e,c,t),j=r.memoizedState),(A=at||md(r,e,A,t,S,j,f)||n!==null&&n.dependencies!==null&&ol(n.dependencies))?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(t,j,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(t,j,f)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&S===n.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&S===n.memoizedState||(r.flags|=1024),r.memoizedProps=t,r.memoizedState=j),l.props=t,l.state=j,l.context=f,t=A):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&S===n.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&S===n.memoizedState||(r.flags|=1024),t=!1)}return l=t,Al(n,r),t=(r.flags&128)!==0,l||t?(l=r.stateNode,e=t&&typeof e.getDerivedStateFromError!="function"?null:l.render(),r.flags|=1,n!==null&&t?(r.child=Vt(r,n.child,null,i),r.child=Vt(r,null,e,i)):Or(n,r,e,i),r.memoizedState=l.state,n=r.child):n=He(n,r,i),n}function Rd(n,r,e,t){return Ct(),r.flags|=256,Or(n,r,e,t),r.child}var No={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eo(n){return{baseLanes:n,cachePool:yu()}}function Ao(n,r,e){return n=n!==null?n.childLanes&~e:0,r&&(n|=ae),n}function Ld(n,r,e){var t=r.pendingProps,i=!1,l=(r.flags&128)!==0,s;if((s=l)||(s=n!==null&&n.memoizedState===null?!1:(dr.current&2)!==0),s&&(i=!0,r.flags&=-129),s=(r.flags&32)!==0,r.flags&=-33,n===null){if(Mn){if(i?st(r):ot(),(n=Pn)?(n=Gf(n,de),n=n!==null&&n.data!=="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:nt!==null?{id:Se,overflow:je}:null,retryLane:536870912,hydrationErrors:null},e=fu(n),e.return=r,r.child=e,Er=r,Pn=null)):n=null,n===null)throw et(r);return cc(n)?r.lanes=32:r.lanes=536870912,null}var c=t.children;return t=t.fallback,i?(ot(),i=r.mode,c=Ol({mode:"hidden",children:c},i),t=Bt(t,i,e,null),c.return=r,t.return=r,c.sibling=t,r.child=c,t=r.child,t.memoizedState=Eo(e),t.childLanes=Ao(n,s,e),r.memoizedState=No,mi(null,t)):(st(r),Oo(r,c))}var f=n.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(l)r.flags&256?(st(r),r.flags&=-257,r=wo(n,r,e)):r.memoizedState!==null?(ot(),r.child=n.child,r.flags|=128,r=null):(ot(),c=t.fallback,i=r.mode,t=Ol({mode:"visible",children:t.children},i),c=Bt(c,i,e,null),c.flags|=2,t.return=r,c.return=r,t.sibling=c,r.child=t,Vt(r,n.child,null,e),t=r.child,t.memoizedState=Eo(e),t.childLanes=Ao(n,s,e),r.memoizedState=No,r=mi(null,t));else if(st(r),cc(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var y=s.dgst;s=y,t=Error(d(419)),t.stack="",t.digest=s,ai({value:t,source:null,stack:null}),r=wo(n,r,e)}else if(xr||ga(n,r,e,!1),s=(e&n.childLanes)!==0,xr||s){if(s=In,s!==null&&(t=or(s,e),t!==0&&t!==f.retryLane))throw f.retryLane=t,Dt(n,t),Ir(s,n,t),So;oc(c)||Cl(),r=wo(n,r,e)}else oc(c)?(r.flags|=192,r.child=n.child,r=null):(n=f.treeContext,Pn=he(c.nextSibling),Er=r,Mn=!0,rt=null,de=!1,n!==null&&pu(r,n),r=Oo(r,t.children),r.flags|=4096);return r}return i?(ot(),c=t.fallback,i=r.mode,f=n.child,y=f.sibling,t=Le(f,{mode:"hidden",children:t.children}),t.subtreeFlags=f.subtreeFlags&65011712,y!==null?c=Le(y,c):(c=Bt(c,i,e,null),c.flags|=2),c.return=r,t.return=r,t.sibling=c,r.child=t,mi(null,t),t=r.child,c=n.child.memoizedState,c===null?c=Eo(e):(i=c.cachePool,i!==null?(f=br._currentValue,i=i.parent!==f?{parent:f,pool:f}:i):i=yu(),c={baseLanes:c.baseLanes|e,cachePool:i}),t.memoizedState=c,t.childLanes=Ao(n,s,e),r.memoizedState=No,mi(n.child,t)):(st(r),e=n.child,n=e.sibling,e=Le(e,{mode:"visible",children:t.children}),e.return=r,e.sibling=null,n!==null&&(s=r.deletions,s===null?(r.deletions=[n],r.flags|=16):s.push(n)),r.child=e,r.memoizedState=null,e)}function Oo(n,r){return r=Ol({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Ol(n,r){return n=ne(22,n,null,r),n.lanes=0,n}function wo(n,r,e){return Vt(r,n.child,null,e),n=Oo(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function zd(n,r,e){n.lanes|=r;var t=n.alternate;t!==null&&(t.lanes|=r),Vs(n.return,r,e)}function ko(n,r,e,t,i,l){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:t,tail:e,tailMode:i,treeForkCount:l}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=t,s.tail=e,s.tailMode=i,s.treeForkCount=l)}function Dd(n,r,e){var t=r.pendingProps,i=t.revealOrder,l=t.tail;t=t.children;var s=dr.current,c=(s&2)!==0;if(c?(s=s&1|2,r.flags|=128):s&=1,Y(dr,s),Or(n,r,t,e),t=Mn?ti:0,!c&&n!==null&&(n.flags&128)!==0)n:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zd(n,e,r);else if(n.tag===19)zd(n,e,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break n;for(;n.sibling===null;){if(n.return===null||n.return===r)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(i){case"forwards":for(e=r.child,i=null;e!==null;)n=e.alternate,n!==null&&ml(n)===null&&(i=e),e=e.sibling;e=i,e===null?(i=r.child,r.child=null):(i=e.sibling,e.sibling=null),ko(r,!1,i,e,l,t);break;case"backwards":case"unstable_legacy-backwards":for(e=null,i=r.child,r.child=null;i!==null;){if(n=i.alternate,n!==null&&ml(n)===null){r.child=i;break}n=i.sibling,i.sibling=e,e=i,i=n}ko(r,!0,e,null,l,t);break;case"together":ko(r,!1,null,null,void 0,t);break;default:r.memoizedState=null}return r.child}function He(n,r,e){if(n!==null&&(r.dependencies=n.dependencies),dt|=r.lanes,(e&r.childLanes)===0)if(n!==null){if(ga(n,r,e,!1),(e&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(d(153));if(r.child!==null){for(n=r.child,e=Le(n,n.pendingProps),r.child=e,e.return=r;n.sibling!==null;)n=n.sibling,e=e.sibling=Le(n,n.pendingProps),e.return=r;e.sibling=null}return r.child}function Mo(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&ol(n)))}function $g(n,r,e){switch(r.tag){case 3:Rn(r,r.stateNode.containerInfo),tt(r,br,n.memoizedState.cache),Ct();break;case 27:case 5:Fr(r);break;case 4:Rn(r,r.stateNode.containerInfo);break;case 10:tt(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,ro(r),null;break;case 13:var t=r.memoizedState;if(t!==null)return t.dehydrated!==null?(st(r),r.flags|=128,null):(e&r.child.childLanes)!==0?Ld(n,r,e):(st(r),n=He(n,r,e),n!==null?n.sibling:null);st(r);break;case 19:var i=(n.flags&128)!==0;if(t=(e&r.childLanes)!==0,t||(ga(n,r,e,!1),t=(e&r.childLanes)!==0),i){if(t)return Dd(n,r,e);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(dr,dr.current),t)break;return null;case 22:return r.lanes=0,Ad(n,r,e,r.pendingProps);case 24:tt(r,br,n.memoizedState.cache)}return He(n,r,e)}function Bd(n,r,e){if(n!==null)if(n.memoizedProps!==r.pendingProps)xr=!0;else{if(!Mo(n,e)&&(r.flags&128)===0)return xr=!1,$g(n,r,e);xr=(n.flags&131072)!==0}else xr=!1,Mn&&(r.flags&1048576)!==0&&gu(r,ti,r.index);switch(r.lanes=0,r.tag){case 16:n:{var t=r.pendingProps;if(n=Yt(r.elementType),r.type=n,typeof n=="function")Ds(n)?(t=Qt(n,t),r.tag=1,r=Md(null,r,n,t,e)):(r.tag=0,r=jo(null,r,n,t,e));else{if(n!=null){var i=n.$$typeof;if(i===un){r.tag=11,r=jd(null,r,n,t,e);break n}else if(i===fn){r.tag=14,r=Nd(null,r,n,t,e);break n}}throw r=lr(n)||n,Error(d(306,r,""))}}return r;case 0:return jo(n,r,r.type,r.pendingProps,e);case 1:return t=r.type,i=Qt(t,r.pendingProps),Md(n,r,t,i,e);case 3:n:{if(Rn(r,r.stateNode.containerInfo),n===null)throw Error(d(387));t=r.pendingProps;var l=r.memoizedState;i=l.element,Fs(n,r),di(r,t,null,e);var s=r.memoizedState;if(t=s.cache,tt(r,br,t),t!==l.cache&&Ks(r,[br],e,!0),ui(),t=s.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:s.cache},r.updateQueue.baseState=l,r.memoizedState=l,r.flags&256){r=Rd(n,r,t,e);break n}else if(t!==i){i=oe(Error(d(424)),r),ai(i),r=Rd(n,r,t,e);break n}else for(n=r.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,Pn=he(n.firstChild),Er=r,Mn=!0,rt=null,de=!0,e=Au(r,null,t,e),r.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Ct(),t===i){r=He(n,r,e);break n}Or(n,r,t,e)}r=r.child}return r;case 26:return Al(n,r),n===null?(e=If(r.type,null,r.pendingProps,null))?r.memoizedState=e:Mn||(e=r.type,n=r.pendingProps,t=Kl(mn.current).createElement(e),t[cr]=r,t[Mr]=n,wr(t,e,n),pr(t),r.stateNode=t):r.memoizedState=If(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Fr(r),n===null&&Mn&&(t=r.stateNode=Qf(r.type,r.pendingProps,mn.current),Er=r,de=!0,i=Pn,mt(r.type)?(uc=i,Pn=he(t.firstChild)):Pn=i),Or(n,r,r.pendingProps.children,e),Al(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Mn&&((i=t=Pn)&&(t=wp(t,r.type,r.pendingProps,de),t!==null?(r.stateNode=t,Er=r,Pn=he(t.firstChild),de=!1,i=!0):i=!1),i||et(r)),Fr(r),i=r.type,l=r.pendingProps,s=n!==null?n.memoizedProps:null,t=l.children,ic(i,l)?t=null:s!==null&&ic(i,s)&&(r.flags|=32),r.memoizedState!==null&&(i=to(n,r,Kg,null,null,e),Mi._currentValue=i),Al(n,r),Or(n,r,t,e),r.child;case 6:return n===null&&Mn&&((n=e=Pn)&&(e=kp(e,r.pendingProps,de),e!==null?(r.stateNode=e,Er=r,Pn=null,n=!0):n=!1),n||et(r)),null;case 13:return Ld(n,r,e);case 4:return Rn(r,r.stateNode.containerInfo),t=r.pendingProps,n===null?r.child=Vt(r,null,t,e):Or(n,r,t,e),r.child;case 11:return jd(n,r,r.type,r.pendingProps,e);case 7:return Or(n,r,r.pendingProps,e),r.child;case 8:return Or(n,r,r.pendingProps.children,e),r.child;case 12:return Or(n,r,r.pendingProps.children,e),r.child;case 10:return t=r.pendingProps,tt(r,r.type,t.value),Or(n,r,t.children,e),r.child;case 9:return i=r.type._context,t=r.pendingProps.children,Ht(r),i=Ar(i),t=t(i),r.flags|=1,Or(n,r,t,e),r.child;case 14:return Nd(n,r,r.type,r.pendingProps,e);case 15:return Ed(n,r,r.type,r.pendingProps,e);case 19:return Dd(n,r,e);case 31:return Pg(n,r,e);case 22:return Ad(n,r,e,r.pendingProps);case 24:return Ht(r),t=Ar(br),n===null?(i=Xs(),i===null&&(i=In,l=Qs(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=e),i=l),r.memoizedState={parent:t,cache:i},Zs(r),tt(r,br,i)):((n.lanes&e)!==0&&(Fs(n,r),di(r,null,null,e),ui()),i=n.memoizedState,l=r.memoizedState,i.parent!==t?(i={parent:t,cache:t},r.memoizedState=i,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=i),tt(r,br,t)):(t=l.cache,tt(r,br,t),t!==i.cache&&Ks(r,[br],e,!0))),Or(n,r,r.pendingProps.children,e),r.child;case 29:throw r.pendingProps}throw Error(d(156,r.tag))}function qe(n){n.flags|=4}function Ro(n,r,e,t,i){if((r=(n.mode&32)!==0)&&(r=!1),r){if(n.flags|=16777216,(i&335544128)===i)if(n.stateNode.complete)n.flags|=8192;else if(uf())n.flags|=8192;else throw Gt=fl,Is}else n.flags&=-16777217}function Cd(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!$f(r))if(uf())n.flags|=8192;else throw Gt=fl,Is}function wl(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?dn():536870912,n.lanes|=r,Ea|=r)}function bi(n,r){if(!Mn)switch(n.tailMode){case"hidden":r=n.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function $n(n){var r=n.alternate!==null&&n.alternate.child===n.child,e=0,t=0;if(r)for(var i=n.child;i!==null;)e|=i.lanes|i.childLanes,t|=i.subtreeFlags&65011712,t|=i.flags&65011712,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)e|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=t,n.childLanes=e,r}function np(n,r,e){var t=r.pendingProps;switch(Hs(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $n(r),null;case 1:return $n(r),null;case 3:return e=r.stateNode,t=null,n!==null&&(t=n.memoizedState.cache),r.memoizedState.cache!==t&&(r.flags|=2048),Be(br),Zn(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(n===null||n.child===null)&&(ha(r)?qe(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ys())),$n(r),null;case 26:var i=r.type,l=r.memoizedState;return n===null?(qe(r),l!==null?($n(r),Cd(r,l)):($n(r),Ro(r,i,null,t,e))):l?l!==n.memoizedState?(qe(r),$n(r),Cd(r,l)):($n(r),r.flags&=-16777217):(n=n.memoizedProps,n!==t&&qe(r),$n(r),Ro(r,i,n,t,e)),null;case 27:if(ve(r),e=mn.current,i=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==t&&qe(r);else{if(!t){if(r.stateNode===null)throw Error(d(166));return $n(r),null}n=I.current,ha(r)?mu(r):(n=Qf(i,t,e),r.stateNode=n,qe(r))}return $n(r),null;case 5:if(ve(r),i=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==t&&qe(r);else{if(!t){if(r.stateNode===null)throw Error(d(166));return $n(r),null}if(l=I.current,ha(r))mu(r);else{var s=Kl(mn.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof t.is=="string"?s.createElement("select",{is:t.is}):s.createElement("select"),t.multiple?l.multiple=!0:t.size&&(l.size=t.size);break;default:l=typeof t.is=="string"?s.createElement(i,{is:t.is}):s.createElement(i)}}l[cr]=r,l[Mr]=t;n:for(s=r.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break n;for(;s.sibling===null;){if(s.return===null||s.return===r)break n;s=s.return}s.sibling.return=s.return,s=s.sibling}r.stateNode=l;n:switch(wr(l,i,t),i){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break n;case"img":t=!0;break n;default:t=!1}t&&qe(r)}}return $n(r),Ro(r,r.type,n===null?null:n.memoizedProps,r.pendingProps,e),null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==t&&qe(r);else{if(typeof t!="string"&&r.stateNode===null)throw Error(d(166));if(n=mn.current,ha(r)){if(n=r.stateNode,e=r.memoizedProps,t=null,i=Er,i!==null)switch(i.tag){case 27:case 5:t=i.memoizedProps}n[cr]=r,n=!!(n.nodeValue===e||t!==null&&t.suppressHydrationWarning===!0||zf(n.nodeValue,e)),n||et(r,!0)}else n=Kl(n).createTextNode(t),n[cr]=r,r.stateNode=n}return $n(r),null;case 31:if(e=r.memoizedState,n===null||n.memoizedState!==null){if(t=ha(r),e!==null){if(n===null){if(!t)throw Error(d(318));if(n=r.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(557));n[cr]=r}else Ct(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;$n(r),n=!1}else e=Ys(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=e),n=!0;if(!n)return r.flags&256?(ee(r),r):(ee(r),null);if((r.flags&128)!==0)throw Error(d(558))}return $n(r),null;case 13:if(t=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(i=ha(r),t!==null&&t.dehydrated!==null){if(n===null){if(!i)throw Error(d(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[cr]=r}else Ct(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;$n(r),i=!1}else i=Ys(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=i),i=!0;if(!i)return r.flags&256?(ee(r),r):(ee(r),null)}return ee(r),(r.flags&128)!==0?(r.lanes=e,r):(e=t!==null,n=n!==null&&n.memoizedState!==null,e&&(t=r.child,i=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(i=t.alternate.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==i&&(t.flags|=2048)),e!==n&&e&&(r.child.flags|=8192),wl(r,r.updateQueue),$n(r),null);case 4:return Zn(),n===null&&nc(r.stateNode.containerInfo),$n(r),null;case 10:return Be(r.type),$n(r),null;case 19:if(w(dr),t=r.memoizedState,t===null)return $n(r),null;if(i=(r.flags&128)!==0,l=t.rendering,l===null)if(i)bi(t,!1);else{if(ir!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(l=ml(n),l!==null){for(r.flags|=128,bi(t,!1),n=l.updateQueue,r.updateQueue=n,wl(r,n),r.subtreeFlags=0,n=e,e=r.child;e!==null;)du(e,n),e=e.sibling;return Y(dr,dr.current&1|2),Mn&&ze(r,t.treeForkCount),r.child}n=n.sibling}t.tail!==null&&sr()>zl&&(r.flags|=128,i=!0,bi(t,!1),r.lanes=4194304)}else{if(!i)if(n=ml(l),n!==null){if(r.flags|=128,i=!0,n=n.updateQueue,r.updateQueue=n,wl(r,n),bi(t,!0),t.tail===null&&t.tailMode==="hidden"&&!l.alternate&&!Mn)return $n(r),null}else 2*sr()-t.renderingStartTime>zl&&e!==536870912&&(r.flags|=128,i=!0,bi(t,!1),r.lanes=4194304);t.isBackwards?(l.sibling=r.child,r.child=l):(n=t.last,n!==null?n.sibling=l:r.child=l,t.last=l)}return t.tail!==null?(n=t.tail,t.rendering=n,t.tail=n.sibling,t.renderingStartTime=sr(),n.sibling=null,e=dr.current,Y(dr,i?e&1|2:e&1),Mn&&ze(r,t.treeForkCount),n):($n(r),null);case 22:case 23:return ee(r),no(),t=r.memoizedState!==null,n!==null?n.memoizedState!==null!==t&&(r.flags|=8192):t&&(r.flags|=8192),t?(e&536870912)!==0&&(r.flags&128)===0&&($n(r),r.subtreeFlags&6&&(r.flags|=8192)):$n(r),e=r.updateQueue,e!==null&&wl(r,e.retryQueue),e=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==e&&(r.flags|=2048),n!==null&&w(qt),null;case 24:return e=null,n!==null&&(e=n.memoizedState.cache),r.memoizedState.cache!==e&&(r.flags|=2048),Be(br),$n(r),null;case 25:return null;case 30:return null}throw Error(d(156,r.tag))}function rp(n,r){switch(Hs(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Be(br),Zn(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return ve(r),null;case 31:if(r.memoizedState!==null){if(ee(r),r.alternate===null)throw Error(d(340));Ct()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 13:if(ee(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(d(340));Ct()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return w(dr),null;case 4:return Zn(),null;case 10:return Be(r.type),null;case 22:case 23:return ee(r),no(),n!==null&&w(qt),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return Be(br),null;case 25:return null;default:return null}}function Ud(n,r){switch(Hs(r),r.tag){case 3:Be(br),Zn();break;case 26:case 27:case 5:ve(r);break;case 4:Zn();break;case 31:r.memoizedState!==null&&ee(r);break;case 13:ee(r);break;case 19:w(dr);break;case 10:Be(r.type);break;case 22:case 23:ee(r),no(),n!==null&&w(qt);break;case 24:Be(br)}}function _i(n,r){try{var e=r.updateQueue,t=e!==null?e.lastEffect:null;if(t!==null){var i=t.next;e=i;do{if((e.tag&n)===n){t=void 0;var l=e.create,s=e.inst;t=l(),s.destroy=t}e=e.next}while(e!==i)}}catch(c){Gn(r,r.return,c)}}function ct(n,r,e){try{var t=r.updateQueue,i=t!==null?t.lastEffect:null;if(i!==null){var l=i.next;t=l;do{if((t.tag&n)===n){var s=t.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,i=r;var f=e,y=c;try{y()}catch(A){Gn(i,f,A)}}}t=t.next}while(t!==l)}}catch(A){Gn(r,r.return,A)}}function Hd(n){var r=n.updateQueue;if(r!==null){var e=n.stateNode;try{wu(r,e)}catch(t){Gn(n,n.return,t)}}}function qd(n,r,e){e.props=Qt(n.type,n.memoizedProps),e.state=n.memoizedState;try{e.componentWillUnmount()}catch(t){Gn(n,r,t)}}function xi(n,r){try{var e=n.ref;if(e!==null){switch(n.tag){case 26:case 27:case 5:var t=n.stateNode;break;case 30:t=n.stateNode;break;default:t=n.stateNode}typeof e=="function"?n.refCleanup=e(t):e.current=t}}catch(i){Gn(n,r,i)}}function Ne(n,r){var e=n.ref,t=n.refCleanup;if(e!==null)if(typeof t=="function")try{t()}catch(i){Gn(n,r,i)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(i){Gn(n,r,i)}else e.current=null}function Yd(n){var r=n.type,e=n.memoizedProps,t=n.stateNode;try{n:switch(r){case"button":case"input":case"select":case"textarea":e.autoFocus&&t.focus();break n;case"img":e.src?t.src=e.src:e.srcSet&&(t.srcset=e.srcSet)}}catch(i){Gn(n,n.return,i)}}function Lo(n,r,e){try{var t=n.stateNode;Sp(t,n.type,e,r),t[Mr]=r}catch(i){Gn(n,n.return,i)}}function Gd(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&mt(n.type)||n.tag===4}function zo(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Gd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&mt(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Do(n,r,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,r?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(n,r):(r=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.appendChild(n),e=e._reactRootContainer,e!=null||r.onclick!==null||(r.onclick=H));else if(t!==4&&(t===27&&mt(n.type)&&(e=n.stateNode,r=null),n=n.child,n!==null))for(Do(n,r,e),n=n.sibling;n!==null;)Do(n,r,e),n=n.sibling}function kl(n,r,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,r?e.insertBefore(n,r):e.appendChild(n);else if(t!==4&&(t===27&&mt(n.type)&&(e=n.stateNode),n=n.child,n!==null))for(kl(n,r,e),n=n.sibling;n!==null;)kl(n,r,e),n=n.sibling}function Vd(n){var r=n.stateNode,e=n.memoizedProps;try{for(var t=n.type,i=r.attributes;i.length;)r.removeAttributeNode(i[0]);wr(r,t,e),r[cr]=n,r[Mr]=e}catch(l){Gn(n,n.return,l)}}var Ye=!1,vr=!1,Bo=!1,Kd=typeof WeakSet=="function"?WeakSet:Set,Tr=null;function ep(n,r){if(n=n.containerInfo,tc=Wl,n=eu(n),Os(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var t=e.getSelection&&e.getSelection();if(t&&t.rangeCount!==0){e=t.anchorNode;var i=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{e.nodeType,l.nodeType}catch{e=null;break n}var s=0,c=-1,f=-1,y=0,A=0,R=n,S=null;r:for(;;){for(var j;R!==e||i!==0&&R.nodeType!==3||(c=s+i),R!==l||t!==0&&R.nodeType!==3||(f=s+t),R.nodeType===3&&(s+=R.nodeValue.length),(j=R.firstChild)!==null;)S=R,R=j;for(;;){if(R===n)break r;if(S===e&&++y===i&&(c=s),S===l&&++A===t&&(f=s),(j=R.nextSibling)!==null)break;R=S,S=R.parentNode}R=j}e=c===-1||f===-1?null:{start:c,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(ac={focusedElem:n,selectionRange:e},Wl=!1,Tr=r;Tr!==null;)if(r=Tr,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Tr=n;else for(;Tr!==null;){switch(r=Tr,l=r.alternate,n=r.flags,r.tag){case 0:if((n&4)!==0&&(n=r.updateQueue,n=n!==null?n.events:null,n!==null))for(e=0;e<n.length;e++)i=n[e],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){n=void 0,e=r,i=l.memoizedProps,l=l.memoizedState,t=e.stateNode;try{var Z=Qt(e.type,i);n=t.getSnapshotBeforeUpdate(Z,l),t.__reactInternalSnapshotBeforeUpdate=n}catch(sn){Gn(e,e.return,sn)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,e=n.nodeType,e===9)sc(n);else if(e===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":sc(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(d(163))}if(n=r.sibling,n!==null){n.return=r.return,Tr=n;break}Tr=r.return}}function Qd(n,r,e){var t=e.flags;switch(e.tag){case 0:case 11:case 15:Ve(n,e),t&4&&_i(5,e);break;case 1:if(Ve(n,e),t&4)if(n=e.stateNode,r===null)try{n.componentDidMount()}catch(s){Gn(e,e.return,s)}else{var i=Qt(e.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(i,r,n.__reactInternalSnapshotBeforeUpdate)}catch(s){Gn(e,e.return,s)}}t&64&&Hd(e),t&512&&xi(e,e.return);break;case 3:if(Ve(n,e),t&64&&(n=e.updateQueue,n!==null)){if(r=null,e.child!==null)switch(e.child.tag){case 27:case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}try{wu(n,r)}catch(s){Gn(e,e.return,s)}}break;case 27:r===null&&t&4&&Vd(e);case 26:case 5:Ve(n,e),r===null&&t&4&&Yd(e),t&512&&xi(e,e.return);break;case 12:Ve(n,e);break;case 31:Ve(n,e),t&4&&Id(n,e);break;case 13:Ve(n,e),t&4&&Zd(n,e),t&64&&(n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(e=dp.bind(null,e),Mp(n,e))));break;case 22:if(t=e.memoizedState!==null||Ye,!t){r=r!==null&&r.memoizedState!==null||vr,i=Ye;var l=vr;Ye=t,(vr=r)&&!l?Ke(n,e,(e.subtreeFlags&8772)!==0):Ve(n,e),Ye=i,vr=l}break;case 30:break;default:Ve(n,e)}}function Jd(n){var r=n.alternate;r!==null&&(n.alternate=null,Jd(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Va(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var rr=null,Kr=!1;function Ge(n,r,e){for(e=e.child;e!==null;)Xd(n,r,e),e=e.sibling}function Xd(n,r,e){if(kr&&typeof kr.onCommitFiberUnmount=="function")try{kr.onCommitFiberUnmount(Et,e)}catch{}switch(e.tag){case 26:vr||Ne(e,r),Ge(n,r,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:vr||Ne(e,r);var t=rr,i=Kr;mt(e.type)&&(rr=e.stateNode,Kr=!1),Ge(n,r,e),Oi(e.stateNode),rr=t,Kr=i;break;case 5:vr||Ne(e,r);case 6:if(t=rr,i=Kr,rr=null,Ge(n,r,e),rr=t,Kr=i,rr!==null)if(Kr)try{(rr.nodeType===9?rr.body:rr.nodeName==="HTML"?rr.ownerDocument.body:rr).removeChild(e.stateNode)}catch(l){Gn(e,r,l)}else try{rr.removeChild(e.stateNode)}catch(l){Gn(e,r,l)}break;case 18:rr!==null&&(Kr?(n=rr,qf(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.stateNode),za(n)):qf(rr,e.stateNode));break;case 4:t=rr,i=Kr,rr=e.stateNode.containerInfo,Kr=!0,Ge(n,r,e),rr=t,Kr=i;break;case 0:case 11:case 14:case 15:ct(2,e,r),vr||ct(4,e,r),Ge(n,r,e);break;case 1:vr||(Ne(e,r),t=e.stateNode,typeof t.componentWillUnmount=="function"&&qd(e,r,t)),Ge(n,r,e);break;case 21:Ge(n,r,e);break;case 22:vr=(t=vr)||e.memoizedState!==null,Ge(n,r,e),vr=t;break;default:Ge(n,r,e)}}function Id(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{za(n)}catch(e){Gn(r,r.return,e)}}}function Zd(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{za(n)}catch(e){Gn(r,r.return,e)}}function tp(n){switch(n.tag){case 31:case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new Kd),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new Kd),r;default:throw Error(d(435,n.tag))}}function Ml(n,r){var e=tp(n);r.forEach(function(t){if(!e.has(t)){e.add(t);var i=fp.bind(null,n,t);t.then(i,i)}})}function Qr(n,r){var e=r.deletions;if(e!==null)for(var t=0;t<e.length;t++){var i=e[t],l=n,s=r,c=s;n:for(;c!==null;){switch(c.tag){case 27:if(mt(c.type)){rr=c.stateNode,Kr=!1;break n}break;case 5:rr=c.stateNode,Kr=!1;break n;case 3:case 4:rr=c.stateNode.containerInfo,Kr=!0;break n}c=c.return}if(rr===null)throw Error(d(160));Xd(l,s,i),rr=null,Kr=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)Fd(r,n),r=r.sibling}var be=null;function Fd(n,r){var e=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Qr(r,n),Jr(n),t&4&&(ct(3,n,n.return),_i(3,n),ct(5,n,n.return));break;case 1:Qr(r,n),Jr(n),t&512&&(vr||e===null||Ne(e,e.return)),t&64&&Ye&&(n=n.updateQueue,n!==null&&(t=n.callbacks,t!==null&&(e=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=e===null?t:e.concat(t))));break;case 26:var i=be;if(Qr(r,n),Jr(n),t&512&&(vr||e===null||Ne(e,e.return)),t&4){var l=e!==null?e.memoizedState:null;if(t=n.memoizedState,e===null)if(t===null)if(n.stateNode===null){n:{t=n.type,e=n.memoizedProps,i=i.ownerDocument||i;r:switch(t){case"title":l=i.getElementsByTagName("title")[0],(!l||l[wt]||l[cr]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(t),i.head.insertBefore(l,i.querySelector("head > title"))),wr(l,t,e),l[cr]=n,pr(l),t=l;break n;case"link":var s=Wf("link","href",i).get(t+(e.href||""));if(s){for(var c=0;c<s.length;c++)if(l=s[c],l.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&l.getAttribute("rel")===(e.rel==null?null:e.rel)&&l.getAttribute("title")===(e.title==null?null:e.title)&&l.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){s.splice(c,1);break r}}l=i.createElement(t),wr(l,t,e),i.head.appendChild(l);break;case"meta":if(s=Wf("meta","content",i).get(t+(e.content||""))){for(c=0;c<s.length;c++)if(l=s[c],l.getAttribute("content")===(e.content==null?null:""+e.content)&&l.getAttribute("name")===(e.name==null?null:e.name)&&l.getAttribute("property")===(e.property==null?null:e.property)&&l.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&l.getAttribute("charset")===(e.charSet==null?null:e.charSet)){s.splice(c,1);break r}}l=i.createElement(t),wr(l,t,e),i.head.appendChild(l);break;default:throw Error(d(468,t))}l[cr]=n,pr(l),t=l}n.stateNode=t}else Pf(i,n.type,n.stateNode);else n.stateNode=Ff(i,t,n.memoizedProps);else l!==t?(l===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):l.count--,t===null?Pf(i,n.type,n.stateNode):Ff(i,t,n.memoizedProps)):t===null&&n.stateNode!==null&&Lo(n,n.memoizedProps,e.memoizedProps)}break;case 27:Qr(r,n),Jr(n),t&512&&(vr||e===null||Ne(e,e.return)),e!==null&&t&4&&Lo(n,n.memoizedProps,e.memoizedProps);break;case 5:if(Qr(r,n),Jr(n),t&512&&(vr||e===null||Ne(e,e.return)),n.flags&32){i=n.stateNode;try{on(i,"")}catch(Z){Gn(n,n.return,Z)}}t&4&&n.stateNode!=null&&(i=n.memoizedProps,Lo(n,i,e!==null?e.memoizedProps:i)),t&1024&&(Bo=!0);break;case 6:if(Qr(r,n),Jr(n),t&4){if(n.stateNode===null)throw Error(d(162));t=n.memoizedProps,e=n.stateNode;try{e.nodeValue=t}catch(Z){Gn(n,n.return,Z)}}break;case 3:if(Xl=null,i=be,be=Ql(r.containerInfo),Qr(r,n),be=i,Jr(n),t&4&&e!==null&&e.memoizedState.isDehydrated)try{za(r.containerInfo)}catch(Z){Gn(n,n.return,Z)}Bo&&(Bo=!1,Wd(n));break;case 4:t=be,be=Ql(n.stateNode.containerInfo),Qr(r,n),Jr(n),be=t;break;case 12:Qr(r,n),Jr(n);break;case 31:Qr(r,n),Jr(n),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,Ml(n,t)));break;case 13:Qr(r,n),Jr(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(Ll=sr()),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,Ml(n,t)));break;case 22:i=n.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,y=Ye,A=vr;if(Ye=y||i,vr=A||f,Qr(r,n),vr=A,Ye=y,Jr(n),t&8192)n:for(r=n.stateNode,r._visibility=i?r._visibility&-2:r._visibility|1,i&&(e===null||f||Ye||vr||Jt(n)),e=null,r=n;;){if(r.tag===5||r.tag===26){if(e===null){f=e=r;try{if(l=f.stateNode,i)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{c=f.stateNode;var R=f.memoizedProps.style,S=R!=null&&R.hasOwnProperty("display")?R.display:null;c.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(Z){Gn(f,f.return,Z)}}}else if(r.tag===6){if(e===null){f=r;try{f.stateNode.nodeValue=i?"":f.memoizedProps}catch(Z){Gn(f,f.return,Z)}}}else if(r.tag===18){if(e===null){f=r;try{var j=f.stateNode;i?Yf(j,!0):Yf(f.stateNode,!1)}catch(Z){Gn(f,f.return,Z)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break n;for(;r.sibling===null;){if(r.return===null||r.return===n)break n;e===r&&(e=null),r=r.return}e===r&&(e=null),r.sibling.return=r.return,r=r.sibling}t&4&&(t=n.updateQueue,t!==null&&(e=t.retryQueue,e!==null&&(t.retryQueue=null,Ml(n,e))));break;case 19:Qr(r,n),Jr(n),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,Ml(n,t)));break;case 30:break;case 21:break;default:Qr(r,n),Jr(n)}}function Jr(n){var r=n.flags;if(r&2){try{for(var e,t=n.return;t!==null;){if(Gd(t)){e=t;break}t=t.return}if(e==null)throw Error(d(160));switch(e.tag){case 27:var i=e.stateNode,l=zo(n);kl(n,l,i);break;case 5:var s=e.stateNode;e.flags&32&&(on(s,""),e.flags&=-33);var c=zo(n);kl(n,c,s);break;case 3:case 4:var f=e.stateNode.containerInfo,y=zo(n);Do(n,y,f);break;default:throw Error(d(161))}}catch(A){Gn(n,n.return,A)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Wd(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Wd(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Ve(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Qd(n,r.alternate,r),r=r.sibling}function Jt(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:ct(4,r,r.return),Jt(r);break;case 1:Ne(r,r.return);var e=r.stateNode;typeof e.componentWillUnmount=="function"&&qd(r,r.return,e),Jt(r);break;case 27:Oi(r.stateNode);case 26:case 5:Ne(r,r.return),Jt(r);break;case 22:r.memoizedState===null&&Jt(r);break;case 30:Jt(r);break;default:Jt(r)}n=n.sibling}}function Ke(n,r,e){for(e=e&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var t=r.alternate,i=n,l=r,s=l.flags;switch(l.tag){case 0:case 11:case 15:Ke(i,l,e),_i(4,l);break;case 1:if(Ke(i,l,e),t=l,i=t.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(y){Gn(t,t.return,y)}if(t=l,i=t.updateQueue,i!==null){var c=t.stateNode;try{var f=i.shared.hiddenCallbacks;if(f!==null)for(i.shared.hiddenCallbacks=null,i=0;i<f.length;i++)Ou(f[i],c)}catch(y){Gn(t,t.return,y)}}e&&s&64&&Hd(l),xi(l,l.return);break;case 27:Vd(l);case 26:case 5:Ke(i,l,e),e&&t===null&&s&4&&Yd(l),xi(l,l.return);break;case 12:Ke(i,l,e);break;case 31:Ke(i,l,e),e&&s&4&&Id(i,l);break;case 13:Ke(i,l,e),e&&s&4&&Zd(i,l);break;case 22:l.memoizedState===null&&Ke(i,l,e),xi(l,l.return);break;case 30:break;default:Ke(i,l,e)}r=r.sibling}}function Co(n,r){var e=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==e&&(n!=null&&n.refCount++,e!=null&&ii(e))}function Uo(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&ii(n))}function _e(n,r,e,t){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Pd(n,r,e,t),r=r.sibling}function Pd(n,r,e,t){var i=r.flags;switch(r.tag){case 0:case 11:case 15:_e(n,r,e,t),i&2048&&_i(9,r);break;case 1:_e(n,r,e,t);break;case 3:_e(n,r,e,t),i&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&ii(n)));break;case 12:if(i&2048){_e(n,r,e,t),n=r.stateNode;try{var l=r.memoizedProps,s=l.id,c=l.onPostCommit;typeof c=="function"&&c(s,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(f){Gn(r,r.return,f)}}else _e(n,r,e,t);break;case 31:_e(n,r,e,t);break;case 13:_e(n,r,e,t);break;case 23:break;case 22:l=r.stateNode,s=r.alternate,r.memoizedState!==null?l._visibility&2?_e(n,r,e,t):vi(n,r):l._visibility&2?_e(n,r,e,t):(l._visibility|=2,Sa(n,r,e,t,(r.subtreeFlags&10256)!==0||!1)),i&2048&&Co(s,r);break;case 24:_e(n,r,e,t),i&2048&&Uo(r.alternate,r);break;default:_e(n,r,e,t)}}function Sa(n,r,e,t,i){for(i=i&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var l=n,s=r,c=e,f=t,y=s.flags;switch(s.tag){case 0:case 11:case 15:Sa(l,s,c,f,i),_i(8,s);break;case 23:break;case 22:var A=s.stateNode;s.memoizedState!==null?A._visibility&2?Sa(l,s,c,f,i):vi(l,s):(A._visibility|=2,Sa(l,s,c,f,i)),i&&y&2048&&Co(s.alternate,s);break;case 24:Sa(l,s,c,f,i),i&&y&2048&&Uo(s.alternate,s);break;default:Sa(l,s,c,f,i)}r=r.sibling}}function vi(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var e=n,t=r,i=t.flags;switch(t.tag){case 22:vi(e,t),i&2048&&Co(t.alternate,t);break;case 24:vi(e,t),i&2048&&Uo(t.alternate,t);break;default:vi(e,t)}r=r.sibling}}var yi=8192;function ja(n,r,e){if(n.subtreeFlags&yi)for(n=n.child;n!==null;)$d(n,r,e),n=n.sibling}function $d(n,r,e){switch(n.tag){case 26:ja(n,r,e),n.flags&yi&&n.memoizedState!==null&&Vp(e,be,n.memoizedState,n.memoizedProps);break;case 5:ja(n,r,e);break;case 3:case 4:var t=be;be=Ql(n.stateNode.containerInfo),ja(n,r,e),be=t;break;case 22:n.memoizedState===null&&(t=n.alternate,t!==null&&t.memoizedState!==null?(t=yi,yi=16777216,ja(n,r,e),yi=t):ja(n,r,e));break;default:ja(n,r,e)}}function nf(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Ti(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var e=0;e<r.length;e++){var t=r[e];Tr=t,ef(t,n)}nf(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)rf(n),n=n.sibling}function rf(n){switch(n.tag){case 0:case 11:case 15:Ti(n),n.flags&2048&&ct(9,n,n.return);break;case 3:Ti(n);break;case 12:Ti(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Rl(n)):Ti(n);break;default:Ti(n)}}function Rl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var e=0;e<r.length;e++){var t=r[e];Tr=t,ef(t,n)}nf(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:ct(8,r,r.return),Rl(r);break;case 22:e=r.stateNode,e._visibility&2&&(e._visibility&=-3,Rl(r));break;default:Rl(r)}n=n.sibling}}function ef(n,r){for(;Tr!==null;){var e=Tr;switch(e.tag){case 0:case 11:case 15:ct(8,e,r);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var t=e.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:ii(e.memoizedState.cache)}if(t=e.child,t!==null)t.return=e,Tr=t;else n:for(e=n;Tr!==null;){t=Tr;var i=t.sibling,l=t.return;if(Jd(t),t===e){Tr=null;break n}if(i!==null){i.return=l,Tr=i;break n}Tr=l}}}var ap={getCacheForType:function(n){var r=Ar(br),e=r.data.get(n);return e===void 0&&(e=n(),r.data.set(n,e)),e},cacheSignal:function(){return Ar(br).controller.signal}},ip=typeof WeakMap=="function"?WeakMap:Map,Dn=0,In=null,Nn=null,wn=0,Yn=0,te=null,ut=!1,Na=!1,Ho=!1,Qe=0,ir=0,dt=0,Xt=0,qo=0,ae=0,Ea=0,Si=null,Xr=null,Yo=!1,Ll=0,tf=0,zl=1/0,Dl=null,ft=null,yr=0,ht=null,Aa=null,Je=0,Go=0,Vo=null,af=null,ji=0,Ko=null;function ie(){return(Dn&2)!==0&&wn!==0?wn&-wn:E.T!==null?Fo():$t()}function lf(){if(ae===0)if((wn&536870912)===0||Mn){var n=Pt;Pt<<=1,(Pt&3932160)===0&&(Pt=262144),ae=n}else ae=536870912;return n=re.current,n!==null&&(n.flags|=32),ae}function Ir(n,r,e){(n===In&&(Yn===2||Yn===9)||n.cancelPendingCommit!==null)&&(Oa(n,0),gt(n,wn,ae,!1)),Xn(n,e),((Dn&2)===0||n!==In)&&(n===In&&((Dn&2)===0&&(Xt|=e),ir===4&&gt(n,wn,ae,!1)),Ee(n))}function sf(n,r,e){if((Dn&6)!==0)throw Error(d(327));var t=!e&&(r&127)===0&&(r&n.expiredLanes)===0||k(n,r),i=t?op(n,r):Jo(n,r,!0),l=t;do{if(i===0){Na&&!t&&gt(n,r,0,!1);break}else{if(e=n.current.alternate,l&&!lp(e)){i=Jo(n,r,!1),l=!1;continue}if(i===2){if(l=r,n.errorRecoveryDisabledLanes&l)var s=0;else s=n.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){r=s;n:{var c=n;i=Si;var f=c.current.memoizedState.isDehydrated;if(f&&(Oa(c,s).flags|=256),s=Jo(c,s,!1),s!==2){if(Ho&&!f){c.errorRecoveryDisabledLanes|=l,Xt|=l,i=4;break n}l=Xr,Xr=i,l!==null&&(Xr===null?Xr=l:Xr.push.apply(Xr,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){Oa(n,0),gt(n,r,0,!0);break}n:{switch(t=n,l=i,l){case 0:case 1:throw Error(d(345));case 4:if((r&4194048)!==r)break;case 6:gt(t,r,ae,!ut);break n;case 2:Xr=null;break;case 3:case 5:break;default:throw Error(d(329))}if((r&62914560)===r&&(i=Ll+300-sr(),10<i)){if(gt(t,r,ae,!ut),h(t,0,!0)!==0)break n;Je=r,t.timeoutHandle=Uf(of.bind(null,t,e,Xr,Dl,Yo,r,ae,Xt,Ea,ut,l,"Throttled",-0,0),i);break n}of(t,e,Xr,Dl,Yo,r,ae,Xt,Ea,ut,l,null,-0,0)}}break}while(!0);Ee(n)}function of(n,r,e,t,i,l,s,c,f,y,A,R,S,j){if(n.timeoutHandle=-1,R=r.subtreeFlags,R&8192||(R&16785408)===16785408){R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:H},$d(r,l,R);var Z=(l&62914560)===l?Ll-sr():(l&4194048)===l?tf-sr():0;if(Z=Kp(R,Z),Z!==null){Je=l,n.cancelPendingCommit=Z(mf.bind(null,n,r,l,e,t,i,s,c,f,A,R,null,S,j)),gt(n,l,s,!y);return}}mf(n,r,l,e,t,i,s,c,f)}function lp(n){for(var r=n;;){var e=r.tag;if((e===0||e===11||e===15)&&r.flags&16384&&(e=r.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var t=0;t<e.length;t++){var i=e[t],l=i.getSnapshot;i=i.value;try{if(!$r(l(),i))return!1}catch{return!1}}if(e=r.child,r.subtreeFlags&16384&&e!==null)e.return=r,r=e;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function gt(n,r,e,t){r&=~qo,r&=~Xt,n.suspendedLanes|=r,n.pingedLanes&=~r,t&&(n.warmLanes|=r),t=n.expirationTimes;for(var i=r;0<i;){var l=31-Dr(i),s=1<<l;t[l]=-1,i&=~s}e!==0&&X(n,e,r)}function Bl(){return(Dn&6)===0?(Ni(0),!1):!0}function Qo(){if(Nn!==null){if(Yn===0)var n=Nn.return;else n=Nn,De=Ut=null,lo(n),_a=null,si=0,n=Nn;for(;n!==null;)Ud(n.alternate,n),n=n.return;Nn=null}}function Oa(n,r){var e=n.timeoutHandle;e!==-1&&(n.timeoutHandle=-1,Ep(e)),e=n.cancelPendingCommit,e!==null&&(n.cancelPendingCommit=null,e()),Je=0,Qo(),In=n,Nn=e=Le(n.current,null),wn=r,Yn=0,te=null,ut=!1,Na=k(n,r),Ho=!1,Ea=ae=qo=Xt=dt=ir=0,Xr=Si=null,Yo=!1,(r&8)!==0&&(r|=r&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=r;0<t;){var i=31-Dr(t),l=1<<i;r|=n[i],t&=~l}return Qe=r,tl(),e}function cf(n,r){bn=null,E.H=pi,r===ba||r===dl?(r=ju(),Yn=3):r===Is?(r=ju(),Yn=4):Yn=r===So?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,te=r,Nn===null&&(ir=1,Nl(n,oe(r,n.current)))}function uf(){var n=re.current;return n===null?!0:(wn&4194048)===wn?fe===null:(wn&62914560)===wn||(wn&536870912)!==0?n===fe:!1}function df(){var n=E.H;return E.H=pi,n===null?pi:n}function ff(){var n=E.A;return E.A=ap,n}function Cl(){ir=4,ut||(wn&4194048)!==wn&&re.current!==null||(Na=!0),(dt&134217727)===0&&(Xt&134217727)===0||In===null||gt(In,wn,ae,!1)}function Jo(n,r,e){var t=Dn;Dn|=2;var i=df(),l=ff();(In!==n||wn!==r)&&(Dl=null,Oa(n,r)),r=!1;var s=ir;n:do try{if(Yn!==0&&Nn!==null){var c=Nn,f=te;switch(Yn){case 8:Qo(),s=6;break n;case 3:case 2:case 9:case 6:re.current===null&&(r=!0);var y=Yn;if(Yn=0,te=null,wa(n,c,f,y),e&&Na){s=0;break n}break;default:y=Yn,Yn=0,te=null,wa(n,c,f,y)}}sp(),s=ir;break}catch(A){cf(n,A)}while(!0);return r&&n.shellSuspendCounter++,De=Ut=null,Dn=t,E.H=i,E.A=l,Nn===null&&(In=null,wn=0,tl()),s}function sp(){for(;Nn!==null;)hf(Nn)}function op(n,r){var e=Dn;Dn|=2;var t=df(),i=ff();In!==n||wn!==r?(Dl=null,zl=sr()+500,Oa(n,r)):Na=k(n,r);n:do try{if(Yn!==0&&Nn!==null){r=Nn;var l=te;r:switch(Yn){case 1:Yn=0,te=null,wa(n,r,l,1);break;case 2:case 9:if(Tu(l)){Yn=0,te=null,gf(r);break}r=function(){Yn!==2&&Yn!==9||In!==n||(Yn=7),Ee(n)},l.then(r,r);break n;case 3:Yn=7;break n;case 4:Yn=5;break n;case 7:Tu(l)?(Yn=0,te=null,gf(r)):(Yn=0,te=null,wa(n,r,l,7));break;case 5:var s=null;switch(Nn.tag){case 26:s=Nn.memoizedState;case 5:case 27:var c=Nn;if(s?$f(s):c.stateNode.complete){Yn=0,te=null;var f=c.sibling;if(f!==null)Nn=f;else{var y=c.return;y!==null?(Nn=y,Ul(y)):Nn=null}break r}}Yn=0,te=null,wa(n,r,l,5);break;case 6:Yn=0,te=null,wa(n,r,l,6);break;case 8:Qo(),ir=6;break n;default:throw Error(d(462))}}cp();break}catch(A){cf(n,A)}while(!0);return De=Ut=null,E.H=t,E.A=i,Dn=e,Nn!==null?0:(In=null,wn=0,tl(),ir)}function cp(){for(;Nn!==null&&!hs();)hf(Nn)}function hf(n){var r=Bd(n.alternate,n,Qe);n.memoizedProps=n.pendingProps,r===null?Ul(n):Nn=r}function gf(n){var r=n,e=r.alternate;switch(r.tag){case 15:case 0:r=kd(e,r,r.pendingProps,r.type,void 0,wn);break;case 11:r=kd(e,r,r.pendingProps,r.type.render,r.ref,wn);break;case 5:lo(r);default:Ud(e,r),r=Nn=du(r,Qe),r=Bd(e,r,Qe)}n.memoizedProps=n.pendingProps,r===null?Ul(n):Nn=r}function wa(n,r,e,t){De=Ut=null,lo(r),_a=null,si=0;var i=r.return;try{if(Wg(n,i,r,e,wn)){ir=1,Nl(n,oe(e,n.current)),Nn=null;return}}catch(l){if(i!==null)throw Nn=i,l;ir=1,Nl(n,oe(e,n.current)),Nn=null;return}r.flags&32768?(Mn||t===1?n=!0:Na||(wn&536870912)!==0?n=!1:(ut=n=!0,(t===2||t===9||t===3||t===6)&&(t=re.current,t!==null&&t.tag===13&&(t.flags|=16384))),pf(r,n)):Ul(r)}function Ul(n){var r=n;do{if((r.flags&32768)!==0){pf(r,ut);return}n=r.return;var e=np(r.alternate,r,Qe);if(e!==null){Nn=e;return}if(r=r.sibling,r!==null){Nn=r;return}Nn=r=n}while(r!==null);ir===0&&(ir=5)}function pf(n,r){do{var e=rp(n.alternate,n);if(e!==null){e.flags&=32767,Nn=e;return}if(e=n.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!r&&(n=n.sibling,n!==null)){Nn=n;return}Nn=n=e}while(n!==null);ir=6,Nn=null}function mf(n,r,e,t,i,l,s,c,f){n.cancelPendingCommit=null;do Hl();while(yr!==0);if((Dn&6)!==0)throw Error(d(327));if(r!==null){if(r===n.current)throw Error(d(177));if(l=r.lanes|r.childLanes,l|=Ls,W(n,e,l,s,c,f),n===In&&(Nn=In=null,wn=0),Aa=r,ht=n,Je=e,Go=l,Vo=i,af=t,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,hp(Nt,function(){return yf(),null})):(n.callbackNode=null,n.callbackPriority=0),t=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||t){t=E.T,E.T=null,i=q.p,q.p=2,s=Dn,Dn|=4;try{ep(n,r,e)}finally{Dn=s,q.p=i,E.T=t}}yr=1,bf(),_f(),xf()}}function bf(){if(yr===1){yr=0;var n=ht,r=Aa,e=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||e){e=E.T,E.T=null;var t=q.p;q.p=2;var i=Dn;Dn|=4;try{Fd(r,n);var l=ac,s=eu(n.containerInfo),c=l.focusedElem,f=l.selectionRange;if(s!==c&&c&&c.ownerDocument&&ru(c.ownerDocument.documentElement,c)){if(f!==null&&Os(c)){var y=f.start,A=f.end;if(A===void 0&&(A=y),"selectionStart"in c)c.selectionStart=y,c.selectionEnd=Math.min(A,c.value.length);else{var R=c.ownerDocument||document,S=R&&R.defaultView||window;if(S.getSelection){var j=S.getSelection(),Z=c.textContent.length,sn=Math.min(f.start,Z),Qn=f.end===void 0?sn:Math.min(f.end,Z);!j.extend&&sn>Qn&&(s=Qn,Qn=sn,sn=s);var b=nu(c,sn),m=nu(c,Qn);if(b&&m&&(j.rangeCount!==1||j.anchorNode!==b.node||j.anchorOffset!==b.offset||j.focusNode!==m.node||j.focusOffset!==m.offset)){var v=R.createRange();v.setStart(b.node,b.offset),j.removeAllRanges(),sn>Qn?(j.addRange(v),j.extend(m.node,m.offset)):(v.setEnd(m.node,m.offset),j.addRange(v))}}}}for(R=[],j=c;j=j.parentNode;)j.nodeType===1&&R.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<R.length;c++){var M=R[c];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Wl=!!tc,ac=tc=null}finally{Dn=i,q.p=t,E.T=e}}n.current=r,yr=2}}function _f(){if(yr===2){yr=0;var n=ht,r=Aa,e=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||e){e=E.T,E.T=null;var t=q.p;q.p=2;var i=Dn;Dn|=4;try{Qd(n,r.alternate,r)}finally{Dn=i,q.p=t,E.T=e}}yr=3}}function xf(){if(yr===4||yr===3){yr=0,Hi();var n=ht,r=Aa,e=Je,t=af;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?yr=5:(yr=0,Aa=ht=null,vf(n,n.pendingLanes));var i=n.pendingLanes;if(i===0&&(ft=null),Oe(e),r=r.stateNode,kr&&typeof kr.onCommitFiberRoot=="function")try{kr.onCommitFiberRoot(Et,r,void 0,(r.current.flags&128)===128)}catch{}if(t!==null){r=E.T,i=q.p,q.p=2,E.T=null;try{for(var l=n.onRecoverableError,s=0;s<t.length;s++){var c=t[s];l(c.value,{componentStack:c.stack})}}finally{E.T=r,q.p=i}}(Je&3)!==0&&Hl(),Ee(n),i=n.pendingLanes,(e&261930)!==0&&(i&42)!==0?n===Ko?ji++:(ji=0,Ko=n):ji=0,Ni(0)}}function vf(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,ii(r)))}function Hl(){return bf(),_f(),xf(),yf()}function yf(){if(yr!==5)return!1;var n=ht,r=Go;Go=0;var e=Oe(Je),t=E.T,i=q.p;try{q.p=32>e?32:e,E.T=null,e=Vo,Vo=null;var l=ht,s=Je;if(yr=0,Aa=ht=null,Je=0,(Dn&6)!==0)throw Error(d(331));var c=Dn;if(Dn|=4,rf(l.current),Pd(l,l.current,s,e),Dn=c,Ni(0,!1),kr&&typeof kr.onPostCommitFiberRoot=="function")try{kr.onPostCommitFiberRoot(Et,l)}catch{}return!0}finally{q.p=i,E.T=t,vf(n,r)}}function Tf(n,r,e){r=oe(e,r),r=To(n.stateNode,r,2),n=lt(n,r,2),n!==null&&(Xn(n,2),Ee(n))}function Gn(n,r,e){if(n.tag===3)Tf(n,n,e);else for(;r!==null;){if(r.tag===3){Tf(r,n,e);break}else if(r.tag===1){var t=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(ft===null||!ft.has(t))){n=oe(e,n),e=Td(2),t=lt(r,e,2),t!==null&&(Sd(e,t,r,n),Xn(t,2),Ee(t));break}}r=r.return}}function Xo(n,r,e){var t=n.pingCache;if(t===null){t=n.pingCache=new ip;var i=new Set;t.set(r,i)}else i=t.get(r),i===void 0&&(i=new Set,t.set(r,i));i.has(e)||(Ho=!0,i.add(e),n=up.bind(null,n,r,e),r.then(n,n))}function up(n,r,e){var t=n.pingCache;t!==null&&t.delete(r),n.pingedLanes|=n.suspendedLanes&e,n.warmLanes&=~e,In===n&&(wn&e)===e&&(ir===4||ir===3&&(wn&62914560)===wn&&300>sr()-Ll?(Dn&2)===0&&Oa(n,0):qo|=e,Ea===wn&&(Ea=0)),Ee(n)}function Sf(n,r){r===0&&(r=dn()),n=Dt(n,r),n!==null&&(Xn(n,r),Ee(n))}function dp(n){var r=n.memoizedState,e=0;r!==null&&(e=r.retryLane),Sf(n,e)}function fp(n,r){var e=0;switch(n.tag){case 31:case 13:var t=n.stateNode,i=n.memoizedState;i!==null&&(e=i.retryLane);break;case 19:t=n.stateNode;break;case 22:t=n.stateNode._retryCache;break;default:throw Error(d(314))}t!==null&&t.delete(r),Sf(n,e)}function hp(n,r){return Wt(n,r)}var ql=null,ka=null,Io=!1,Yl=!1,Zo=!1,pt=0;function Ee(n){n!==ka&&n.next===null&&(ka===null?ql=ka=n:ka=ka.next=n),Yl=!0,Io||(Io=!0,pp())}function Ni(n,r){if(!Zo&&Yl){Zo=!0;do for(var e=!1,t=ql;t!==null;){if(n!==0){var i=t.pendingLanes;if(i===0)var l=0;else{var s=t.suspendedLanes,c=t.pingedLanes;l=(1<<31-Dr(42|n)+1)-1,l&=i&~(s&~c),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(e=!0,Af(t,l))}else l=wn,l=h(t,t===In?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(l&3)===0||k(t,l)||(e=!0,Af(t,l));t=t.next}while(e);Zo=!1}}function gp(){jf()}function jf(){Yl=Io=!1;var n=0;pt!==0&&Np()&&(n=pt);for(var r=sr(),e=null,t=ql;t!==null;){var i=t.next,l=Nf(t,r);l===0?(t.next=null,e===null?ql=i:e.next=i,i===null&&(ka=e)):(e=t,(n!==0||(l&3)!==0)&&(Yl=!0)),t=i}yr!==0&&yr!==5||Ni(n),pt!==0&&(pt=0)}function Nf(n,r){for(var e=n.suspendedLanes,t=n.pingedLanes,i=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var s=31-Dr(l),c=1<<s,f=i[s];f===-1?((c&e)===0||(c&t)!==0)&&(i[s]=G(c,r)):f<=r&&(n.expiredLanes|=c),l&=~c}if(r=In,e=wn,e=h(n,n===r?e:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t=n.callbackNode,e===0||n===r&&(Yn===2||Yn===9)||n.cancelPendingCommit!==null)return t!==null&&t!==null&&qa(t),n.callbackNode=null,n.callbackPriority=0;if((e&3)===0||k(n,e)){if(r=e&-e,r===n.callbackPriority)return r;switch(t!==null&&qa(t),Oe(e)){case 2:case 8:e=jt;break;case 32:e=Nt;break;case 268435456:e=Yi;break;default:e=Nt}return t=Ef.bind(null,n),e=Wt(e,t),n.callbackPriority=r,n.callbackNode=e,r}return t!==null&&t!==null&&qa(t),n.callbackPriority=2,n.callbackNode=null,2}function Ef(n,r){if(yr!==0&&yr!==5)return n.callbackNode=null,n.callbackPriority=0,null;var e=n.callbackNode;if(Hl()&&n.callbackNode!==e)return null;var t=wn;return t=h(n,n===In?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t===0?null:(sf(n,t,r),Nf(n,sr()),n.callbackNode!=null&&n.callbackNode===e?Ef.bind(null,n):null)}function Af(n,r){if(Hl())return null;sf(n,r,!0)}function pp(){Ap(function(){(Dn&6)!==0?Wt(Ae,gp):jf()})}function Fo(){if(pt===0){var n=pa;n===0&&(n=At,At<<=1,(At&261888)===0&&(At=256)),pt=n}return pt}function Of(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Pe(""+n)}function wf(n,r){var e=r.ownerDocument.createElement("input");return e.name=r.name,e.value=r.value,n.id&&e.setAttribute("form",n.id),r.parentNode.insertBefore(e,r),n=new FormData(n),e.parentNode.removeChild(e),n}function mp(n,r,e,t,i){if(r==="submit"&&e&&e.stateNode===i){var l=Of((i[Mr]||null).action),s=t.submitter;s&&(r=(r=s[Mr]||null)?Of(r.formAction):s.getAttribute("formAction"),r!==null&&(l=r,s=null));var c=new $i("action","action",null,t,i);n.push({event:c,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(pt!==0){var f=s?wf(i,s):new FormData(i);mo(e,{pending:!0,data:f,method:i.method,action:l},null,f)}}else typeof l=="function"&&(c.preventDefault(),f=s?wf(i,s):new FormData(i),mo(e,{pending:!0,data:f,method:i.method,action:l},l,f))},currentTarget:i}]})}}for(var Wo=0;Wo<Rs.length;Wo++){var Po=Rs[Wo],bp=Po.toLowerCase(),_p=Po[0].toUpperCase()+Po.slice(1);me(bp,"on"+_p)}me(iu,"onAnimationEnd"),me(lu,"onAnimationIteration"),me(su,"onAnimationStart"),me("dblclick","onDoubleClick"),me("focusin","onFocus"),me("focusout","onBlur"),me(zg,"onTransitionRun"),me(Dg,"onTransitionStart"),me(Bg,"onTransitionCancel"),me(ou,"onTransitionEnd"),B("onMouseEnter",["mouseout","mouseover"]),B("onMouseLeave",["mouseout","mouseover"]),B("onPointerEnter",["pointerout","pointerover"]),B("onPointerLeave",["pointerout","pointerover"]),ke("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ke("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ke("onBeforeInput",["compositionend","keypress","textInput","paste"]),ke("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ke("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ke("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ei));function kf(n,r){r=(r&4)!==0;for(var e=0;e<n.length;e++){var t=n[e],i=t.event;t=t.listeners;n:{var l=void 0;if(r)for(var s=t.length-1;0<=s;s--){var c=t[s],f=c.instance,y=c.currentTarget;if(c=c.listener,f!==l&&i.isPropagationStopped())break n;l=c,i.currentTarget=y;try{l(i)}catch(A){el(A)}i.currentTarget=null,l=f}else for(s=0;s<t.length;s++){if(c=t[s],f=c.instance,y=c.currentTarget,c=c.listener,f!==l&&i.isPropagationStopped())break n;l=c,i.currentTarget=y;try{l(i)}catch(A){el(A)}i.currentTarget=null,l=f}}}}function En(n,r){var e=r[Ga];e===void 0&&(e=r[Ga]=new Set);var t=n+"__bubble";e.has(t)||(Mf(r,n,2,!1),e.add(t))}function $o(n,r,e){var t=0;r&&(t|=4),Mf(e,n,t,r)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function nc(n){if(!n[Gl]){n[Gl]=!0,Qi.forEach(function(e){e!=="selectionchange"&&(xp.has(e)||$o(e,!1,n),$o(e,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Gl]||(r[Gl]=!0,$o("selectionchange",!1,r))}}function Mf(n,r,e,t){switch(lh(r)){case 2:var i=Xp;break;case 8:i=Ip;break;default:i=pc}e=i.bind(null,r,e,n),i=void 0,!xs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),t?i!==void 0?n.addEventListener(r,e,{capture:!0,passive:i}):n.addEventListener(r,e,!0):i!==void 0?n.addEventListener(r,e,{passive:i}):n.addEventListener(r,e,!1)}function rc(n,r,e,t,i){var l=t;if((r&1)===0&&(r&2)===0&&t!==null)n:for(;;){if(t===null)return;var s=t.tag;if(s===3||s===4){var c=t.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=t.return;s!==null;){var f=s.tag;if((f===3||f===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Br(c),s===null)return;if(f=s.tag,f===5||f===6||f===26||f===27){t=l=s;continue n}c=c.parentNode}}t=t.return}Zi(function(){var y=l,A=pn(e),R=[];n:{var S=cu.get(n);if(S!==void 0){var j=$i,Z=n;switch(n){case"keypress":if(Wi(e)===0)break n;case"keydown":case"keyup":j=fg;break;case"focusin":Z="focus",j=Ss;break;case"focusout":Z="blur",j=Ss;break;case"beforeblur":case"afterblur":j=Ss;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Uc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=pg;break;case iu:case lu:case su:j=tg;break;case ou:j=bg;break;case"scroll":case"scrollend":j=Ph;break;case"wheel":j=xg;break;case"copy":case"cut":case"paste":j=ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=qc;break;case"toggle":case"beforetoggle":j=yg}var sn=(r&4)!==0,Qn=!sn&&(n==="scroll"||n==="scrollend"),b=sn?S!==null?S+"Capture":null:S;sn=[];for(var m=y,v;m!==null;){var M=m;if(v=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||v===null||b===null||(M=Ia(m,b),M!=null&&sn.push(Ai(m,M,v))),Qn)break;m=m.return}0<sn.length&&(S=new j(S,Z,null,e,A),R.push({event:S,listeners:sn}))}}if((r&7)===0){n:{if(S=n==="mouseover"||n==="pointerover",j=n==="mouseout"||n==="pointerout",S&&e!==P&&(Z=e.relatedTarget||e.fromElement)&&(Br(Z)||Z[Ie]))break n;if((j||S)&&(S=A.window===A?A:(S=A.ownerDocument)?S.defaultView||S.parentWindow:window,j?(Z=e.relatedTarget||e.toElement,j=y,Z=Z?Br(Z):null,Z!==null&&(Qn=D(Z),sn=Z.tag,Z!==Qn||sn!==5&&sn!==27&&sn!==6)&&(Z=null)):(j=null,Z=y),j!==Z)){if(sn=Uc,M="onMouseLeave",b="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(sn=qc,M="onPointerLeave",b="onPointerEnter",m="pointer"),Qn=j==null?S:Ze(j),v=Z==null?S:Ze(Z),S=new sn(M,m+"leave",j,e,A),S.target=Qn,S.relatedTarget=v,M=null,Br(A)===y&&(sn=new sn(b,m+"enter",Z,e,A),sn.target=v,sn.relatedTarget=Qn,M=sn),Qn=M,j&&Z)r:{for(sn=vp,b=j,m=Z,v=0,M=b;M;M=sn(M))v++;M=0;for(var en=m;en;en=sn(en))M++;for(;0<v-M;)b=sn(b),v--;for(;0<M-v;)m=sn(m),M--;for(;v--;){if(b===m||m!==null&&b===m.alternate){sn=b;break r}b=sn(b),m=sn(m)}sn=null}else sn=null;j!==null&&Rf(R,S,j,sn,!1),Z!==null&&Qn!==null&&Rf(R,Qn,Z,sn,!0)}}n:{if(S=y?Ze(y):window,j=S.nodeName&&S.nodeName.toLowerCase(),j==="select"||j==="input"&&S.type==="file")var Ln=Ic;else if(Jc(S))if(Zc)Ln=Mg;else{Ln=wg;var $=Og}else j=S.nodeName,!j||j.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?y&&We(y.elementType)&&(Ln=Ic):Ln=kg;if(Ln&&(Ln=Ln(n,y))){Xc(R,Ln,e,A);break n}$&&$(n,S,y),n==="focusout"&&y&&S.type==="number"&&y.memoizedProps.value!=null&&aa(S,"number",S.value)}switch($=y?Ze(y):window,n){case"focusin":(Jc($)||$.contentEditable==="true")&&(sa=$,ws=y,ei=null);break;case"focusout":ei=ws=sa=null;break;case"mousedown":ks=!0;break;case"contextmenu":case"mouseup":case"dragend":ks=!1,tu(R,e,A);break;case"selectionchange":if(Lg)break;case"keydown":case"keyup":tu(R,e,A)}var xn;if(Ns)n:{switch(n){case"compositionstart":var kn="onCompositionStart";break n;case"compositionend":kn="onCompositionEnd";break n;case"compositionupdate":kn="onCompositionUpdate";break n}kn=void 0}else la?Kc(n,e)&&(kn="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(kn="onCompositionStart");kn&&(Yc&&e.locale!=="ko"&&(la||kn!=="onCompositionStart"?kn==="onCompositionEnd"&&la&&(xn=Bc()):($e=A,vs="value"in $e?$e.value:$e.textContent,la=!0)),$=Vl(y,kn),0<$.length&&(kn=new Hc(kn,n,null,e,A),R.push({event:kn,listeners:$}),xn?kn.data=xn:(xn=Qc(e),xn!==null&&(kn.data=xn)))),(xn=Sg?jg(n,e):Ng(n,e))&&(kn=Vl(y,"onBeforeInput"),0<kn.length&&($=new Hc("onBeforeInput","beforeinput",null,e,A),R.push({event:$,listeners:kn}),$.data=xn)),mp(R,n,y,e,A)}kf(R,r)})}function Ai(n,r,e){return{instance:n,listener:r,currentTarget:e}}function Vl(n,r){for(var e=r+"Capture",t=[];n!==null;){var i=n,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Ia(n,e),i!=null&&t.unshift(Ai(n,i,l)),i=Ia(n,r),i!=null&&t.push(Ai(n,i,l))),n.tag===3)return t;n=n.return}return[]}function vp(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Rf(n,r,e,t,i){for(var l=r._reactName,s=[];e!==null&&e!==t;){var c=e,f=c.alternate,y=c.stateNode;if(c=c.tag,f!==null&&f===t)break;c!==5&&c!==26&&c!==27||y===null||(f=y,i?(y=Ia(e,l),y!=null&&s.unshift(Ai(e,y,f))):i||(y=Ia(e,l),y!=null&&s.push(Ai(e,y,f)))),e=e.return}s.length!==0&&n.push({event:r,listeners:s})}var yp=/\r\n?/g,Tp=/\u0000|\uFFFD/g;function Lf(n){return(typeof n=="string"?n:""+n).replace(yp,`
`).replace(Tp,"")}function zf(n,r){return r=Lf(r),Lf(n)===r}function Kn(n,r,e,t,i,l){switch(e){case"children":typeof t=="string"?r==="body"||r==="textarea"&&t===""||on(n,t):(typeof t=="number"||typeof t=="bigint")&&r!=="body"&&on(n,""+t);break;case"className":Wr(n,"class",t);break;case"tabIndex":Wr(n,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Wr(n,e,t);break;case"style":qn(n,t,l);break;case"data":if(r!=="object"){Wr(n,"data",t);break}case"src":case"href":if(t===""&&(r!=="a"||e!=="href")){n.removeAttribute(e);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(e);break}t=Pe(""+t),n.setAttribute(e,t);break;case"action":case"formAction":if(typeof t=="function"){n.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(e==="formAction"?(r!=="input"&&Kn(n,r,"name",i.name,i,null),Kn(n,r,"formEncType",i.formEncType,i,null),Kn(n,r,"formMethod",i.formMethod,i,null),Kn(n,r,"formTarget",i.formTarget,i,null)):(Kn(n,r,"encType",i.encType,i,null),Kn(n,r,"method",i.method,i,null),Kn(n,r,"target",i.target,i,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(e);break}t=Pe(""+t),n.setAttribute(e,t);break;case"onClick":t!=null&&(n.onclick=H);break;case"onScroll":t!=null&&En("scroll",n);break;case"onScrollEnd":t!=null&&En("scrollend",n);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(d(61));if(e=t.__html,e!=null){if(i.children!=null)throw Error(d(60));n.innerHTML=e}}break;case"multiple":n.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":n.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){n.removeAttribute("xlink:href");break}e=Pe(""+t),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,""+t):n.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,""):n.removeAttribute(e);break;case"capture":case"download":t===!0?n.setAttribute(e,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,t):n.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?n.setAttribute(e,t):n.removeAttribute(e);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?n.removeAttribute(e):n.setAttribute(e,t);break;case"popover":En("beforetoggle",n),En("toggle",n),Rr(n,"popover",t);break;case"xlinkActuate":Yr(n,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":Yr(n,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":Yr(n,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":Yr(n,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":Yr(n,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":Yr(n,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":Yr(n,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":Yr(n,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":Yr(n,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Rr(n,"is",t);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Me.get(e)||e,Rr(n,e,t))}}function ec(n,r,e,t,i,l){switch(e){case"style":qn(n,t,l);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(d(61));if(e=t.__html,e!=null){if(i.children!=null)throw Error(d(60));n.innerHTML=e}}break;case"children":typeof t=="string"?on(n,t):(typeof t=="number"||typeof t=="bigint")&&on(n,""+t);break;case"onScroll":t!=null&&En("scroll",n);break;case"onScrollEnd":t!=null&&En("scrollend",n);break;case"onClick":t!=null&&(n.onclick=H);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kt.hasOwnProperty(e))n:{if(e[0]==="o"&&e[1]==="n"&&(i=e.endsWith("Capture"),r=e.slice(2,i?e.length-7:void 0),l=n[Mr]||null,l=l!=null?l[e]:null,typeof l=="function"&&n.removeEventListener(r,l,i),typeof t=="function")){typeof l!="function"&&l!==null&&(e in n?n[e]=null:n.hasAttribute(e)&&n.removeAttribute(e)),n.addEventListener(r,t,i);break n}e in n?n[e]=t:t===!0?n.setAttribute(e,""):Rr(n,e,t)}}}function wr(n,r,e){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":En("error",n),En("load",n);var t=!1,i=!1,l;for(l in e)if(e.hasOwnProperty(l)){var s=e[l];if(s!=null)switch(l){case"src":t=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,r));default:Kn(n,r,l,s,e,null)}}i&&Kn(n,r,"srcSet",e.srcSet,e,null),t&&Kn(n,r,"src",e.src,e,null);return;case"input":En("invalid",n);var c=l=s=i=null,f=null,y=null;for(t in e)if(e.hasOwnProperty(t)){var A=e[t];if(A!=null)switch(t){case"name":i=A;break;case"type":s=A;break;case"checked":f=A;break;case"defaultChecked":y=A;break;case"value":l=A;break;case"defaultValue":c=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(d(137,r));break;default:Kn(n,r,t,A,e,null)}}Mt(n,l,c,f,y,s,i,!1);return;case"select":En("invalid",n),t=s=l=null;for(i in e)if(e.hasOwnProperty(i)&&(c=e[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":s=c;break;case"multiple":t=c;default:Kn(n,r,i,c,e,null)}r=l,e=s,n.multiple=!!t,r!=null?Nr(n,!!t,r,!1):e!=null&&Nr(n,!!t,e,!0);return;case"textarea":En("invalid",n),l=i=t=null;for(s in e)if(e.hasOwnProperty(s)&&(c=e[s],c!=null))switch(s){case"value":t=c;break;case"defaultValue":i=c;break;case"children":l=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:Kn(n,r,s,c,e,null)}ia(n,t,i,l);return;case"option":for(f in e)e.hasOwnProperty(f)&&(t=e[f],t!=null)&&(f==="selected"?n.selected=t&&typeof t!="function"&&typeof t!="symbol":Kn(n,r,f,t,e,null));return;case"dialog":En("beforetoggle",n),En("toggle",n),En("cancel",n),En("close",n);break;case"iframe":case"object":En("load",n);break;case"video":case"audio":for(t=0;t<Ei.length;t++)En(Ei[t],n);break;case"image":En("error",n),En("load",n);break;case"details":En("toggle",n);break;case"embed":case"source":case"link":En("error",n),En("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in e)if(e.hasOwnProperty(y)&&(t=e[y],t!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,r));default:Kn(n,r,y,t,e,null)}return;default:if(We(r)){for(A in e)e.hasOwnProperty(A)&&(t=e[A],t!==void 0&&ec(n,r,A,t,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(t=e[c],t!=null&&Kn(n,r,c,t,e,null))}function Sp(n,r,e,t){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,c=null,f=null,y=null,A=null;for(j in e){var R=e[j];if(e.hasOwnProperty(j)&&R!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":f=R;default:t.hasOwnProperty(j)||Kn(n,r,j,null,t,R)}}for(var S in t){var j=t[S];if(R=e[S],t.hasOwnProperty(S)&&(j!=null||R!=null))switch(S){case"type":l=j;break;case"name":i=j;break;case"checked":y=j;break;case"defaultChecked":A=j;break;case"value":s=j;break;case"defaultValue":c=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(d(137,r));break;default:j!==R&&Kn(n,r,S,j,t,R)}}Qa(n,s,c,f,y,A,l,i);return;case"select":j=s=c=S=null;for(l in e)if(f=e[l],e.hasOwnProperty(l)&&f!=null)switch(l){case"value":break;case"multiple":j=f;default:t.hasOwnProperty(l)||Kn(n,r,l,null,t,f)}for(i in t)if(l=t[i],f=e[i],t.hasOwnProperty(i)&&(l!=null||f!=null))switch(i){case"value":S=l;break;case"defaultValue":c=l;break;case"multiple":s=l;default:l!==f&&Kn(n,r,i,l,t,f)}r=c,e=s,t=j,S!=null?Nr(n,!!e,S,!1):!!t!=!!e&&(r!=null?Nr(n,!!e,r,!0):Nr(n,!!e,e?[]:"",!1));return;case"textarea":j=S=null;for(c in e)if(i=e[c],e.hasOwnProperty(c)&&i!=null&&!t.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Kn(n,r,c,null,t,i)}for(s in t)if(i=t[s],l=e[s],t.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":S=i;break;case"defaultValue":j=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==l&&Kn(n,r,s,i,t,l)}Xi(n,S,j);return;case"option":for(var Z in e)S=e[Z],e.hasOwnProperty(Z)&&S!=null&&!t.hasOwnProperty(Z)&&(Z==="selected"?n.selected=!1:Kn(n,r,Z,null,t,S));for(f in t)S=t[f],j=e[f],t.hasOwnProperty(f)&&S!==j&&(S!=null||j!=null)&&(f==="selected"?n.selected=S&&typeof S!="function"&&typeof S!="symbol":Kn(n,r,f,S,t,j));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var sn in e)S=e[sn],e.hasOwnProperty(sn)&&S!=null&&!t.hasOwnProperty(sn)&&Kn(n,r,sn,null,t,S);for(y in t)if(S=t[y],j=e[y],t.hasOwnProperty(y)&&S!==j&&(S!=null||j!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(d(137,r));break;default:Kn(n,r,y,S,t,j)}return;default:if(We(r)){for(var Qn in e)S=e[Qn],e.hasOwnProperty(Qn)&&S!==void 0&&!t.hasOwnProperty(Qn)&&ec(n,r,Qn,void 0,t,S);for(A in t)S=t[A],j=e[A],!t.hasOwnProperty(A)||S===j||S===void 0&&j===void 0||ec(n,r,A,S,t,j);return}}for(var b in e)S=e[b],e.hasOwnProperty(b)&&S!=null&&!t.hasOwnProperty(b)&&Kn(n,r,b,null,t,S);for(R in t)S=t[R],j=e[R],!t.hasOwnProperty(R)||S===j||S==null&&j==null||Kn(n,r,R,S,t,j)}function Df(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jp(){if(typeof performance.getEntriesByType=="function"){for(var n=0,r=0,e=performance.getEntriesByType("resource"),t=0;t<e.length;t++){var i=e[t],l=i.transferSize,s=i.initiatorType,c=i.duration;if(l&&c&&Df(s)){for(s=0,c=i.responseEnd,t+=1;t<e.length;t++){var f=e[t],y=f.startTime;if(y>c)break;var A=f.transferSize,R=f.initiatorType;A&&Df(R)&&(f=f.responseEnd,s+=A*(f<c?1:(c-y)/(f-y)))}if(--t,r+=8*(l+s)/(i.duration/1e3),n++,10<n)break}}if(0<n)return r/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var tc=null,ac=null;function Kl(n){return n.nodeType===9?n:n.ownerDocument}function Bf(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cf(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function ic(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var lc=null;function Np(){var n=window.event;return n&&n.type==="popstate"?n===lc?!1:(lc=n,!0):(lc=null,!1)}var Uf=typeof setTimeout=="function"?setTimeout:void 0,Ep=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,Ap=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(n){return Hf.resolve(null).then(n).catch(Op)}:Uf;function Op(n){setTimeout(function(){throw n})}function mt(n){return n==="head"}function qf(n,r){var e=r,t=0;do{var i=e.nextSibling;if(n.removeChild(e),i&&i.nodeType===8)if(e=i.data,e==="/$"||e==="/&"){if(t===0){n.removeChild(i),za(r);return}t--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")t++;else if(e==="html")Oi(n.ownerDocument.documentElement);else if(e==="head"){e=n.ownerDocument.head,Oi(e);for(var l=e.firstChild;l;){var s=l.nextSibling,c=l.nodeName;l[wt]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&l.rel.toLowerCase()==="stylesheet"||e.removeChild(l),l=s}}else e==="body"&&Oi(n.ownerDocument.body);e=i}while(e);za(r)}function Yf(n,r){var e=n;n=0;do{var t=e.nextSibling;if(e.nodeType===1?r?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(r?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),t&&t.nodeType===8)if(e=t.data,e==="/$"){if(n===0)break;n--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||n++;e=t}while(e)}function sc(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var e=r;switch(r=r.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":sc(e),Va(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}n.removeChild(e)}}function wp(n,r,e,t){for(;n.nodeType===1;){var i=e;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!t&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(t){if(!n[wt])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==i.rel||n.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||n.getAttribute("title")!==(i.title==null?null:i.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(i.src==null?null:i.src)||n.getAttribute("type")!==(i.type==null?null:i.type)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=he(n.nextSibling),n===null)break}return null}function kp(n,r,e){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=he(n.nextSibling),n===null))return null;return n}function Gf(n,r){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=he(n.nextSibling),n===null))return null;return n}function oc(n){return n.data==="$?"||n.data==="$~"}function cc(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function Mp(n,r){var e=n.ownerDocument;if(n.data==="$~")n._reactRetry=r;else if(n.data!=="$?"||e.readyState!=="loading")r();else{var t=function(){r(),e.removeEventListener("DOMContentLoaded",t)};e.addEventListener("DOMContentLoaded",t),n._reactRetry=t}}function he(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return n}var uc=null;function Vf(n){n=n.nextSibling;for(var r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="/$"||e==="/&"){if(r===0)return he(n.nextSibling);r--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||r++}n=n.nextSibling}return null}function Kf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(r===0)return n;r--}else e!=="/$"&&e!=="/&"||r++}n=n.previousSibling}return null}function Qf(n,r,e){switch(r=Kl(e),n){case"html":if(n=r.documentElement,!n)throw Error(d(452));return n;case"head":if(n=r.head,!n)throw Error(d(453));return n;case"body":if(n=r.body,!n)throw Error(d(454));return n;default:throw Error(d(451))}}function Oi(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Va(n)}var ge=new Map,Jf=new Set;function Ql(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Xe=q.d;q.d={f:Rp,r:Lp,D:zp,C:Dp,L:Bp,m:Cp,X:Hp,S:Up,M:qp};function Rp(){var n=Xe.f(),r=Bl();return n||r}function Lp(n){var r=we(n);r!==null&&r.tag===5&&r.type==="form"?od(r):Xe.r(n)}var Ma=typeof document>"u"?null:document;function Xf(n,r,e){var t=Ma;if(t&&typeof r=="string"&&r){var i=Gr(r);i='link[rel="'+n+'"][href="'+i+'"]',typeof e=="string"&&(i+='[crossorigin="'+e+'"]'),Jf.has(i)||(Jf.add(i),n={rel:n,crossOrigin:e,href:r},t.querySelector(i)===null&&(r=t.createElement("link"),wr(r,"link",n),pr(r),t.head.appendChild(r)))}}function zp(n){Xe.D(n),Xf("dns-prefetch",n,null)}function Dp(n,r){Xe.C(n,r),Xf("preconnect",n,r)}function Bp(n,r,e){Xe.L(n,r,e);var t=Ma;if(t&&n&&r){var i='link[rel="preload"][as="'+Gr(r)+'"]';r==="image"&&e&&e.imageSrcSet?(i+='[imagesrcset="'+Gr(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(i+='[imagesizes="'+Gr(e.imageSizes)+'"]')):i+='[href="'+Gr(n)+'"]';var l=i;switch(r){case"style":l=Ra(n);break;case"script":l=La(n)}ge.has(l)||(n=O({rel:"preload",href:r==="image"&&e&&e.imageSrcSet?void 0:n,as:r},e),ge.set(l,n),t.querySelector(i)!==null||r==="style"&&t.querySelector(wi(l))||r==="script"&&t.querySelector(ki(l))||(r=t.createElement("link"),wr(r,"link",n),pr(r),t.head.appendChild(r)))}}function Cp(n,r){Xe.m(n,r);var e=Ma;if(e&&n){var t=r&&typeof r.as=="string"?r.as:"script",i='link[rel="modulepreload"][as="'+Gr(t)+'"][href="'+Gr(n)+'"]',l=i;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=La(n)}if(!ge.has(l)&&(n=O({rel:"modulepreload",href:n},r),ge.set(l,n),e.querySelector(i)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(ki(l)))return}t=e.createElement("link"),wr(t,"link",n),pr(t),e.head.appendChild(t)}}}function Up(n,r,e){Xe.S(n,r,e);var t=Ma;if(t&&n){var i=Fe(t).hoistableStyles,l=Ra(n);r=r||"default";var s=i.get(l);if(!s){var c={loading:0,preload:null};if(s=t.querySelector(wi(l)))c.loading=5;else{n=O({rel:"stylesheet",href:n,"data-precedence":r},e),(e=ge.get(l))&&dc(n,e);var f=s=t.createElement("link");pr(f),wr(f,"link",n),f._p=new Promise(function(y,A){f.onload=y,f.onerror=A}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Jl(s,r,t)}s={type:"stylesheet",instance:s,count:1,state:c},i.set(l,s)}}}function Hp(n,r){Xe.X(n,r);var e=Ma;if(e&&n){var t=Fe(e).hoistableScripts,i=La(n),l=t.get(i);l||(l=e.querySelector(ki(i)),l||(n=O({src:n,async:!0},r),(r=ge.get(i))&&fc(n,r),l=e.createElement("script"),pr(l),wr(l,"link",n),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(i,l))}}function qp(n,r){Xe.M(n,r);var e=Ma;if(e&&n){var t=Fe(e).hoistableScripts,i=La(n),l=t.get(i);l||(l=e.querySelector(ki(i)),l||(n=O({src:n,async:!0,type:"module"},r),(r=ge.get(i))&&fc(n,r),l=e.createElement("script"),pr(l),wr(l,"link",n),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(i,l))}}function If(n,r,e,t){var i=(i=mn.current)?Ql(i):null;if(!i)throw Error(d(446));switch(n){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(r=Ra(e.href),e=Fe(i).hoistableStyles,t=e.get(r),t||(t={type:"style",instance:null,count:0,state:null},e.set(r,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){n=Ra(e.href);var l=Fe(i).hoistableStyles,s=l.get(n);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,s),(l=i.querySelector(wi(n)))&&!l._p&&(s.instance=l,s.state.loading=5),ge.has(n)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},ge.set(n,e),l||Yp(i,n,e,s.state))),r&&t===null)throw Error(d(528,""));return s}if(r&&t!==null)throw Error(d(529,""));return null;case"script":return r=e.async,e=e.src,typeof e=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=La(e),e=Fe(i).hoistableScripts,t=e.get(r),t||(t={type:"script",instance:null,count:0,state:null},e.set(r,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,n))}}function Ra(n){return'href="'+Gr(n)+'"'}function wi(n){return'link[rel="stylesheet"]['+n+"]"}function Zf(n){return O({},n,{"data-precedence":n.precedence,precedence:null})}function Yp(n,r,e,t){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?t.loading=1:(r=n.createElement("link"),t.preload=r,r.addEventListener("load",function(){return t.loading|=1}),r.addEventListener("error",function(){return t.loading|=2}),wr(r,"link",e),pr(r),n.head.appendChild(r))}function La(n){return'[src="'+Gr(n)+'"]'}function ki(n){return"script[async]"+n}function Ff(n,r,e){if(r.count++,r.instance===null)switch(r.type){case"style":var t=n.querySelector('style[data-href~="'+Gr(e.href)+'"]');if(t)return r.instance=t,pr(t),t;var i=O({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return t=(n.ownerDocument||n).createElement("style"),pr(t),wr(t,"style",i),Jl(t,e.precedence,n),r.instance=t;case"stylesheet":i=Ra(e.href);var l=n.querySelector(wi(i));if(l)return r.state.loading|=4,r.instance=l,pr(l),l;t=Zf(e),(i=ge.get(i))&&dc(t,i),l=(n.ownerDocument||n).createElement("link"),pr(l);var s=l;return s._p=new Promise(function(c,f){s.onload=c,s.onerror=f}),wr(l,"link",t),r.state.loading|=4,Jl(l,e.precedence,n),r.instance=l;case"script":return l=La(e.src),(i=n.querySelector(ki(l)))?(r.instance=i,pr(i),i):(t=e,(i=ge.get(l))&&(t=O({},e),fc(t,i)),n=n.ownerDocument||n,i=n.createElement("script"),pr(i),wr(i,"link",t),n.head.appendChild(i),r.instance=i);case"void":return null;default:throw Error(d(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(t=r.instance,r.state.loading|=4,Jl(t,e.precedence,n));return r.instance}function Jl(n,r,e){for(var t=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=t.length?t[t.length-1]:null,l=i,s=0;s<t.length;s++){var c=t[s];if(c.dataset.precedence===r)l=c;else if(l!==i)break}l?l.parentNode.insertBefore(n,l.nextSibling):(r=e.nodeType===9?e.head:e,r.insertBefore(n,r.firstChild))}function dc(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function fc(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Xl=null;function Wf(n,r,e){if(Xl===null){var t=new Map,i=Xl=new Map;i.set(e,t)}else i=Xl,t=i.get(e),t||(t=new Map,i.set(e,t));if(t.has(n))return t;for(t.set(n,null),e=e.getElementsByTagName(n),i=0;i<e.length;i++){var l=e[i];if(!(l[wt]||l[cr]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(r)||"";s=n+s;var c=t.get(s);c?c.push(l):t.set(s,[l])}}return t}function Pf(n,r,e){n=n.ownerDocument||n,n.head.insertBefore(e,r==="title"?n.querySelector("head > title"):null)}function Gp(n,r,e){if(e===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;return r.rel==="stylesheet"?(n=r.disabled,typeof r.precedence=="string"&&n==null):!0;case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function $f(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Vp(n,r,e,t){if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=Ra(t.href),l=r.querySelector(wi(i));if(l){r=l._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(n.count++,n=Il.bind(n),r.then(n,n)),e.state.loading|=4,e.instance=l,pr(l);return}l=r.ownerDocument||r,t=Zf(t),(i=ge.get(i))&&dc(t,i),l=l.createElement("link"),pr(l);var s=l;s._p=new Promise(function(c,f){s.onload=c,s.onerror=f}),wr(l,"link",t),e.instance=l}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,r),(r=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=Il.bind(n),r.addEventListener("load",e),r.addEventListener("error",e))}}var hc=0;function Kp(n,r){return n.stylesheets&&n.count===0&&Fl(n,n.stylesheets),0<n.count||0<n.imgCount?function(e){var t=setTimeout(function(){if(n.stylesheets&&Fl(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4+r);0<n.imgBytes&&hc===0&&(hc=62500*jp());var i=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Fl(n,n.stylesheets),n.unsuspend)){var l=n.unsuspend;n.unsuspend=null,l()}},(n.imgBytes>hc?50:800)+r);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(t),clearTimeout(i)}}:null}function Il(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fl(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Zl=null;function Fl(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Zl=new Map,r.forEach(Qp,n),Zl=null,Il.call(n))}function Qp(n,r){if(!(r.state.loading&4)){var e=Zl.get(n);if(e)var t=e.get(null);else{e=new Map,Zl.set(n,e);for(var i=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(e.set(s.dataset.precedence,s),t=s)}t&&e.set(null,t)}i=r.instance,s=i.getAttribute("data-precedence"),l=e.get(s)||t,l===t&&e.set(null,i),e.set(s,i),this.count++,t=Il.bind(this),i.addEventListener("load",t),i.addEventListener("error",t),l?l.parentNode.insertBefore(i,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(i,n.firstChild)),r.state.loading|=4}}var Mi={$$typeof:an,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function Jp(n,r,e,t,i,l,s,c,f){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wn(0),this.hiddenUpdates=Wn(null),this.identifierPrefix=t,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function nh(n,r,e,t,i,l,s,c,f,y,A,R){return n=new Jp(n,r,e,s,f,y,A,R,c),r=1,l===!0&&(r|=24),l=ne(3,null,null,r),n.current=l,l.stateNode=n,r=Qs(),r.refCount++,n.pooledCache=r,r.refCount++,l.memoizedState={element:t,isDehydrated:e,cache:r},Zs(l),n}function rh(n){return n?(n=ua,n):ua}function eh(n,r,e,t,i,l){i=rh(i),t.context===null?t.context=i:t.pendingContext=i,t=it(r),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=lt(n,t,r),e!==null&&(Ir(e,n,r),ci(e,n,r))}function th(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<r?e:r}}function gc(n,r){th(n,r),(n=n.alternate)&&th(n,r)}function ah(n){if(n.tag===13||n.tag===31){var r=Dt(n,67108864);r!==null&&Ir(r,n,67108864),gc(n,67108864)}}function ih(n){if(n.tag===13||n.tag===31){var r=ie();r=nr(r);var e=Dt(n,r);e!==null&&Ir(e,n,r),gc(n,r)}}var Wl=!0;function Xp(n,r,e,t){var i=E.T;E.T=null;var l=q.p;try{q.p=2,pc(n,r,e,t)}finally{q.p=l,E.T=i}}function Ip(n,r,e,t){var i=E.T;E.T=null;var l=q.p;try{q.p=8,pc(n,r,e,t)}finally{q.p=l,E.T=i}}function pc(n,r,e,t){if(Wl){var i=mc(t);if(i===null)rc(n,r,t,Pl,e),sh(n,t);else if(Fp(i,n,r,e,t))t.stopPropagation();else if(sh(n,t),r&4&&-1<Zp.indexOf(n)){for(;i!==null;){var l=we(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=qr(l.pendingLanes);if(s!==0){var c=l;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var f=1<<31-Dr(s);c.entanglements[1]|=f,s&=~f}Ee(l),(Dn&6)===0&&(zl=sr()+500,Ni(0))}}break;case 31:case 13:c=Dt(l,2),c!==null&&Ir(c,l,2),Bl(),gc(l,2)}if(l=mc(t),l===null&&rc(n,r,t,Pl,e),l===i)break;i=l}i!==null&&t.stopPropagation()}else rc(n,r,t,null,e)}}function mc(n){return n=pn(n),bc(n)}var Pl=null;function bc(n){if(Pl=null,n=Br(n),n!==null){var r=D(n);if(r===null)n=null;else{var e=r.tag;if(e===13){if(n=C(r),n!==null)return n;n=null}else if(e===31){if(n=Q(r),n!==null)return n;n=null}else if(e===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Pl=n,null}function lh(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qi()){case Ae:return 2;case jt:return 8;case Nt:case gs:return 32;case Yi:return 268435456;default:return 32}default:return 32}}var _c=!1,bt=null,_t=null,xt=null,Ri=new Map,Li=new Map,vt=[],Zp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sh(n,r){switch(n){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Ri.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Li.delete(r.pointerId)}}function zi(n,r,e,t,i,l){return n===null||n.nativeEvent!==l?(n={blockedOn:r,domEventName:e,eventSystemFlags:t,nativeEvent:l,targetContainers:[i]},r!==null&&(r=we(r),r!==null&&ah(r)),n):(n.eventSystemFlags|=t,r=n.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),n)}function Fp(n,r,e,t,i){switch(r){case"focusin":return bt=zi(bt,n,r,e,t,i),!0;case"dragenter":return _t=zi(_t,n,r,e,t,i),!0;case"mouseover":return xt=zi(xt,n,r,e,t,i),!0;case"pointerover":var l=i.pointerId;return Ri.set(l,zi(Ri.get(l)||null,n,r,e,t,i)),!0;case"gotpointercapture":return l=i.pointerId,Li.set(l,zi(Li.get(l)||null,n,r,e,t,i)),!0}return!1}function oh(n){var r=Br(n.target);if(r!==null){var e=D(r);if(e!==null){if(r=e.tag,r===13){if(r=C(e),r!==null){n.blockedOn=r,na(n.priority,function(){ih(e)});return}}else if(r===31){if(r=Q(e),r!==null){n.blockedOn=r,na(n.priority,function(){ih(e)});return}}else if(r===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $l(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var e=mc(n.nativeEvent);if(e===null){e=n.nativeEvent;var t=new e.constructor(e.type,e);P=t,e.target.dispatchEvent(t),P=null}else return r=we(e),r!==null&&ah(r),n.blockedOn=e,!1;r.shift()}return!0}function ch(n,r,e){$l(n)&&e.delete(r)}function Wp(){_c=!1,bt!==null&&$l(bt)&&(bt=null),_t!==null&&$l(_t)&&(_t=null),xt!==null&&$l(xt)&&(xt=null),Ri.forEach(ch),Li.forEach(ch)}function ns(n,r){n.blockedOn===r&&(n.blockedOn=null,_c||(_c=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Wp)))}var rs=null;function uh(n){rs!==n&&(rs=n,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){rs===n&&(rs=null);for(var r=0;r<n.length;r+=3){var e=n[r],t=n[r+1],i=n[r+2];if(typeof t!="function"){if(bc(t||e)===null)continue;break}var l=we(e);l!==null&&(n.splice(r,3),r-=3,mo(l,{pending:!0,data:i,method:e.method,action:t},t,i))}}))}function za(n){function r(f){return ns(f,n)}bt!==null&&ns(bt,n),_t!==null&&ns(_t,n),xt!==null&&ns(xt,n),Ri.forEach(r),Li.forEach(r);for(var e=0;e<vt.length;e++){var t=vt[e];t.blockedOn===n&&(t.blockedOn=null)}for(;0<vt.length&&(e=vt[0],e.blockedOn===null);)oh(e),e.blockedOn===null&&vt.shift();if(e=(n.ownerDocument||n).$$reactFormReplay,e!=null)for(t=0;t<e.length;t+=3){var i=e[t],l=e[t+1],s=i[Mr]||null;if(typeof l=="function")s||uh(e);else if(s){var c=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[Mr]||null)c=s.formAction;else if(bc(i)!==null)continue}else c=s.action;typeof c=="function"?e[t+1]=c:(e.splice(t,3),t-=3),uh(e)}}}function dh(){function n(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function r(){i!==null&&(i(),i=null),t||setTimeout(e,20)}function e(){if(!t&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,i=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(e,100),function(){t=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),i!==null&&(i(),i=null)}}}function xc(n){this._internalRoot=n}es.prototype.render=xc.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(d(409));var e=r.current,t=ie();eh(e,t,n,r,null,null)},es.prototype.unmount=xc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;eh(n.current,2,null,n,null,null),Bl(),r[Ie]=null}};function es(n){this._internalRoot=n}es.prototype.unstable_scheduleHydration=function(n){if(n){var r=$t();n={blockedOn:null,target:n,priority:r};for(var e=0;e<vt.length&&r!==0&&r<vt[e].priority;e++);vt.splice(e,0,n),e===0&&oh(n)}};var fh=_.version;if(fh!=="19.2.3")throw Error(d(527,fh,"19.2.3"));q.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(d(188)):(n=Object.keys(n).join(","),Error(d(268,n)));return n=T(r),n=n!==null?U(n):null,n=n===null?null:n.stateNode,n};var Pp={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{Et=ts.inject(Pp),kr=ts}catch{}}return Bi.createRoot=function(n,r){if(!N(n))throw Error(d(299));var e=!1,t="",i=_d,l=xd,s=vd;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(t=r.identifierPrefix),r.onUncaughtError!==void 0&&(i=r.onUncaughtError),r.onCaughtError!==void 0&&(l=r.onCaughtError),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),r=nh(n,1,!1,null,null,e,t,null,i,l,s,dh),n[Ie]=r.current,nc(n),new xc(r)},Bi.hydrateRoot=function(n,r,e){if(!N(n))throw Error(d(299));var t=!1,i="",l=_d,s=xd,c=vd,f=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(f=e.formState)),r=nh(n,1,!0,r,e??null,t,i,f,l,s,c,dh),r.context=rh(null),e=r.current,t=ie(),t=nr(t),i=it(t),i.callback=null,lt(e,i,t),e=t,r.current.lanes=e,Xn(r,e),Ee(r),n[Ie]=r.current,nc(n),new es(r)},Bi.version="19.2.3",Bi}var Th;function sm(){if(Th)return yc.exports;Th=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(_){console.error(_)}}return u(),yc.exports=lm(),yc.exports}var om=sm();const cm=Ba(om);var nn=zc();const ds=Ba(nn),Hh=nn.createContext(void 0),um=({children:u})=>{const _=localStorage.getItem("selectedLanguage")||"python",[x,d]=nn.useState(_);return nn.useEffect(()=>{localStorage.setItem("selectedLanguage",x)},[x]),a.jsx(Hh.Provider,{value:{selectedLanguage:x,setSelectedLanguage:d},children:u})};function dm(){const u=nn.useContext(Hh);if(u===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return u}const qh=nn.createContext(void 0);function fm({children:u}){const[_,x]=nn.useState(!0),d=()=>x(!0),N=()=>x(!1),D=()=>x(!_);return a.jsx(qh.Provider,{value:{isSidebarOpen:_,showSidebar:d,hideSidebar:N,toggleSidebar:D},children:u})}function Dc(){const u=nn.useContext(qh);if(u===void 0)throw new Error("useSidebar must be used within SidebarProvider");return u}const hm="_wave_nm5to_1",as={wave:hm};function gm(){return a.jsxs("div",{className:as.background,children:[a.jsx("div",{className:as.wave}),a.jsx("div",{className:as.wave}),a.jsx("div",{className:as.wave})]})}const pm="_topbar_dxbgq_1",mm="_container_dxbgq_22",bm="_buttonContainer_dxbgq_28",_m="_title_dxbgq_35",xm="_iconLink_dxbgq_53",vm="_hamburger_dxbgq_75",ym="_hamburgerIcon_dxbgq_79",Tm="_hamburgerTop_dxbgq_88",Sm="_collapsed_dxbgq_92",jm="_hamburgerMiddle_dxbgq_96",Nm="_hamburgerBottom_dxbgq_106",xe={topbar:pm,container:mm,buttonContainer:bm,title:_m,iconLink:xm,hamburger:vm,hamburgerIcon:ym,hamburgerTop:Tm,collapsed:Sm,hamburgerMiddle:jm,hamburgerBottom:Nm};var is={},Sh;function Em(){if(Sh)return is;Sh=1,is.match=D,is.parse=C;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,_=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,x=/^(?:(min|max)-)?(.+)/,d=/(em|rem|px|cm|mm|in|pt|pc)?$/,N=/(dpi|dpcm|dppx)?$/;function D(U,O){return C(U).some(function(L){var J=L.inverse,tn=L.type==="all"||O.type===L.type;if(tn&&J||!(tn||J))return!1;var F=L.expressions.every(function(Sn){var An=Sn.feature,vn=Sn.modifier,an=Sn.value,un=O[An];if(!un)return!1;switch(An){case"orientation":case"scan":return un.toLowerCase()===an.toLowerCase();case"width":case"height":case"device-width":case"device-height":an=T(an),un=T(un);break;case"resolution":an=z(an),un=z(un);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":an=Q(an),un=Q(un);break;case"grid":case"color":case"color-index":case"monochrome":an=parseInt(an,10)||1,un=parseInt(un,10)||0;break}switch(vn){case"min":return un>=an;case"max":return un<=an;default:return un===an}});return F&&!J||!F&&J})}function C(U){return U.split(",").map(function(O){O=O.trim();var L=O.match(u),J=L[1],tn=L[2],F=L[3]||"",Sn={};return Sn.inverse=!!J&&J.toLowerCase()==="not",Sn.type=tn?tn.toLowerCase():"all",F=F.match(/\([^\)]+\)/g)||[],Sn.expressions=F.map(function(An){var vn=An.match(_),an=vn[1].toLowerCase().match(x);return{modifier:an[1],feature:an[2],value:vn[2]}}),Sn})}function Q(U){var O=Number(U),L;return O||(L=U.match(/^(\d+)\s*\/\s*(\d+)$/),O=L[1]/L[2]),O}function z(U){var O=parseFloat(U),L=String(U).match(N)[1];switch(L){case"dpcm":return O/2.54;case"dppx":return O*96;default:return O}}function T(U){var O=parseFloat(U),L=String(U).match(d)[1];switch(L){case"em":return O*16;case"rem":return O*16;case"cm":return O*96/2.54;case"mm":return O*96/2.54/10;case"in":return O*96;case"pt":return O*72;case"pc":return O*72/12;default:return O}}return is}var Ec,jh;function Am(){if(jh)return Ec;jh=1;var u=Em().match,_=typeof window<"u"?window.matchMedia:null;function x(N,D,C){var Q=this,z;_&&!C&&(z=_.call(window,N)),z?(this.matches=z.matches,this.media=z.media,z.addListener(O)):(this.matches=u(N,D),this.media=N),this.addListener=T,this.removeListener=U,this.dispose=L;function T(J){z&&z.addListener(J)}function U(J){z&&z.removeListener(J)}function O(J){Q.matches=J.matches,Q.media=J.media}function L(){z&&z.removeListener(O)}}function d(N,D,C){return new x(N,D,C)}return Ec=d,Ec}var Om=Am();const wm=Ba(Om);var km=/[A-Z]/g,Mm=/^ms-/,Ac={};function Rm(u){return"-"+u.toLowerCase()}function Yh(u){if(Ac.hasOwnProperty(u))return Ac[u];var _=u.replace(km,Rm);return Ac[u]=Mm.test(_)?"-"+_:_}function Lm(u,_){if(u===_)return!0;if(!u||!_)return!1;const x=Object.keys(u),d=Object.keys(_),N=x.length;if(d.length!==N)return!1;for(let D=0;D<N;D++){const C=x[D];if(u[C]!==_[C]||!Object.prototype.hasOwnProperty.call(_,C))return!1}return!0}var Oc={exports:{}},wc,Nh;function zm(){if(Nh)return wc;Nh=1;var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return wc=u,wc}var kc,Eh;function Dm(){if(Eh)return kc;Eh=1;var u=zm();function _(){}function x(){}return x.resetWarningCache=_,kc=function(){function d(C,Q,z,T,U,O){if(O!==u){var L=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw L.name="Invariant Violation",L}}d.isRequired=d;function N(){return d}var D={array:d,bigint:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:N,element:d,elementType:d,instanceOf:N,node:d,objectOf:N,oneOf:N,oneOfType:N,shape:N,exact:N,checkPropTypes:x,resetWarningCache:_};return D.PropTypes=D,D},kc}var Ah;function Bm(){return Ah||(Ah=1,Oc.exports=Dm()()),Oc.exports}var Cm=Bm();const Bn=Ba(Cm),Hr=Bn.oneOfType([Bn.string,Bn.number]),Gh={all:Bn.bool,grid:Bn.bool,aural:Bn.bool,braille:Bn.bool,handheld:Bn.bool,print:Bn.bool,projection:Bn.bool,screen:Bn.bool,tty:Bn.bool,tv:Bn.bool,embossed:Bn.bool},Um={orientation:Bn.oneOf(["portrait","landscape"]),scan:Bn.oneOf(["progressive","interlace"]),aspectRatio:Bn.string,deviceAspectRatio:Bn.string,height:Hr,deviceHeight:Hr,width:Hr,deviceWidth:Hr,color:Bn.bool,colorIndex:Bn.bool,monochrome:Bn.bool,resolution:Hr,type:Object.keys(Gh)},{type:qS,...Hm}=Um,qm={minAspectRatio:Bn.string,maxAspectRatio:Bn.string,minDeviceAspectRatio:Bn.string,maxDeviceAspectRatio:Bn.string,minHeight:Hr,maxHeight:Hr,minDeviceHeight:Hr,maxDeviceHeight:Hr,minWidth:Hr,maxWidth:Hr,minDeviceWidth:Hr,maxDeviceWidth:Hr,minColor:Bn.number,maxColor:Bn.number,minColorIndex:Bn.number,maxColorIndex:Bn.number,minMonochrome:Bn.number,maxMonochrome:Bn.number,minResolution:Hr,maxResolution:Hr,...Hm},Ym={...Gh,...qm};var Gm={all:Ym};const Vm=u=>`not ${u}`,Km=(u,_)=>{const x=Yh(u);return typeof _=="number"&&(_=`${_}px`),_===!0?x:_===!1?Vm(x):`(${x}: ${_})`},Qm=u=>u.join(" and "),Jm=u=>{const _=[];return Object.keys(Gm.all).forEach(x=>{const d=u[x];d!=null&&_.push(Km(x,d))}),Qm(_)},Xm=nn.createContext(void 0),Im=u=>u.query||Jm(u),Oh=u=>u?Object.keys(u).reduce((x,d)=>(x[Yh(d)]=u[d],x),{}):void 0,Vh=()=>{const u=nn.useRef(!1);return nn.useEffect(()=>{u.current=!0},[]),u.current},Zm=u=>{const _=nn.useContext(Xm),x=()=>Oh(u)||Oh(_),[d,N]=nn.useState(x);return nn.useEffect(()=>{const D=x();Lm(d,D)||N(D)},[u,_]),d},Fm=u=>{const _=()=>Im(u),[x,d]=nn.useState(_);return nn.useEffect(()=>{const N=_();x!==N&&d(N)},[u]),x},Wm=(u,_)=>{const x=()=>wm(u,_||{},!!_),[d,N]=nn.useState(x),D=Vh();return nn.useEffect(()=>{if(D){const C=x();return N(C),()=>{C&&C.dispose()}}},[u,_]),d},Pm=u=>{const[_,x]=nn.useState(u.matches);return nn.useEffect(()=>{const d=N=>{x(N.matches)};return u.addListener(d),x(u.matches),()=>{u.removeListener(d)}},[u]),_},Kh=(u,_,x)=>{const d=Zm(_),N=Fm(u);if(!N)throw new Error("Invalid or missing MediaQuery!");const D=Wm(N,d),C=Pm(D),Q=Vh();return nn.useEffect(()=>{Q&&x&&x(C)},[C]),nn.useEffect(()=>()=>{D&&D.dispose()},[]),C};function Zr(...u){let _="";for(const x of u)if(x){if(typeof x=="string"||typeof x=="number")_+=(_&&" ")+x;else if(Array.isArray(x)){const d=Zr(...x);d&&(_+=(_&&" ")+d)}else if(typeof x=="object")for(const d in x)x[d]&&(_+=(_&&" ")+d)}return _}function Qh(){const u=document.documentElement,_=getComputedStyle(u).getPropertyValue("--navbar-height");return parseFloat(_)||76}const $m=u=>u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2;function Jh(u,_=0){const x=document.querySelector(u);if(!x)return;const d=x.offsetTop,N=window.scrollY,D=d-N-_,C=performance.now(),Q=1500,z=T=>{const U=T-C,O=U/Q,L=$m(O),J=N+D*(O>1?1:L);window.scrollTo({top:J}),U<Q&&requestAnimationFrame(z)};requestAnimationFrame(z)}const n1="_brand_18f9t_1",r1="_bounce_18f9t_19",e1="_glowDisappear_18f9t_23",t1="_heartBeat_18f9t_27",a1="_rubberBand_18f9t_31",i1="_rotate_18f9t_35",It={brand:n1,bounce:r1,glowDisappear:e1,heartBeat:t1,rubberBand:a1,rotate:i1};function l1(){const[u,_]=nn.useState(It.rotate),[x,d]=nn.useState(!1),N=[It.bounce,It.glowDisappear,It.heartBeat,It.rubberBand,It.rotate],D=Zr(It.brand,x&&u),C=()=>d(!1),Q=()=>{const z=Math.floor(Math.random()*N.length),T=N[z];d(!0),_(T)};return a.jsx("div",{className:D,onClick:Q,onAnimationEnd:C,children:"JWL"})}const s1="_container_uucyv_1",o1="_input_uucyv_6",c1="_label_uucyv_16",u1="_indicator_uucyv_20",d1="_decoration_uucyv_28",Ci={container:s1,input:o1,label:c1,indicator:u1,decoration:d1};function wh(){const u=document.documentElement,[_,x]=nn.useState(!1),d=()=>{const D=new Event("themeChange");u.dispatchEvent(D)},N=()=>{x(!_),u.setAttribute("data-theme",_?"dark":"light"),d()};return nn.useEffect(()=>{const D=u.getAttribute("data-theme");x(D==="light"),d()},[]),a.jsxs("div",{className:Ci.container,children:[a.jsx("input",{className:Ci.input,"aria-label":"theme switch",id:"theme-switch",type:"checkbox",checked:_,onChange:N}),a.jsxs("label",{className:Ci.label,htmlFor:"theme-switch",children:[a.jsx("span",{className:Ci.indicator}),a.jsx("span",{className:Ci.decoration})]})]})}function f1(){return a.jsx("svg",{viewBox:"0 0 128 128",children:a.jsxs("g",{fill:"var(--svg-github-fill)",children:[a.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),a.jsx("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})]})})}function h1({forwardedRef:u}){const _=nn.useRef(null),{isSidebarOpen:x,toggleSidebar:d}=Dc(),N=Kh({maxWidth:768}),D=Zr(xe.hamburgerIcon,!x&&xe.collapsed);nn.useLayoutEffect(()=>{if(!_.current)return;const L=new ResizeObserver(J=>{for(const tn of J){const F=tn.borderBoxSize[0].blockSize;document.documentElement.style.setProperty("--topbar-height",`${F}px`)}});return L.observe(_.current),()=>L.disconnect()},[]);const C=L=>{L.preventDefault(),window.history.replaceState({},"",window.location.pathname),Jh("main",Qh()-2)},Q=()=>d(),z=()=>!N&&a.jsx(l1,{}),T=()=>!N&&a.jsx("a",{href:"main",onClick:C,role:"button",children:a.jsx("h1",{className:xe.title,children:"LeetCode Cheatsheet"})}),U=()=>a.jsx("a",{href:"/leetcode-cheatsheet","aria-label":"GitHub source",className:xe.iconLink,target:"_blank",children:a.jsx(f1,{})}),O=()=>N?a.jsxs(a.Fragment,{children:[a.jsx(wh,{}),U()]}):a.jsxs("div",{className:xe.buttonContainer,children:[U(),a.jsx(wh,{})]});return a.jsx("header",{ref:_,className:xe.topbar,children:a.jsxs("div",{className:xe.container,children:[a.jsxs("div",{ref:u,className:xe.hamburger,onClick:Q,children:[a.jsx("span",{className:Zr(D,xe.hamburgerTop)}),a.jsx("span",{className:Zr(D,xe.hamburgerMiddle)}),a.jsx("span",{className:Zr(D,xe.hamburgerBottom)})]}),z(),T(),O()]})})}const g1="_sidebar_8uy5s_1",p1="_exit_8uy5s_20",m1="_hide_8uy5s_23",b1="_scrollContainer_8uy5s_27",ls={sidebar:g1,exit:p1,hide:m1,scrollContainer:b1};function Xh(u,_){nn.useEffect(()=>{const x=d=>{const N=d.target;(Array.isArray(u)?u:[u]).every(Q=>Q.current&&!Q.current.contains(N))&&_()};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[u,_])}const _1="_accordion_1hmri_1",x1="_button_1hmri_6",v1="_open_1hmri_25",y1="_content_1hmri_29",ss={accordion:_1,button:x1,open:v1,content:y1};function T1(u){const _=parseFloat(u);return!isNaN(_)&&isFinite(_)}function kh(u){return typeof u=="string"&&u[u.length-1]==="%"&&T1(u.substring(0,u.length-1))}function Mc(u,_,x){_===0&&!x&&u?.style&&u?.children.length>0&&(u.style.display="none")}function S1(u,_){_===0&&u?.style&&(u.style.display="")}const j1={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function Mh(u,_){return[u.static,_===0&&u.staticHeightZero,typeof _=="number"&&_>0?u.staticHeightSpecific:null,_==="auto"&&u.staticHeightAuto].filter(x=>x).join(" ")}const N1=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],E1=ds.forwardRef((u,_)=>{const{animateOpacity:x=!1,animationStateClasses:d={},applyInlineTransitions:N=!0,children:D,className:C="",contentClassName:Q,delay:z=0,disableDisplayNone:T=!1,duration:U=500,easing:O="ease",height:L,onHeightAnimationEnd:J,onHeightAnimationStart:tn,style:F,contentRef:Sn}=u,An=Object.assign({},u);N1.forEach(ln=>{delete An[ln]});const vn=nn.useRef(L),an=nn.useRef(null),un=nn.useRef(),Cn=nn.useRef(),_n=nn.useRef(Object.assign(Object.assign({},j1),d)),fn=typeof window<"u",Jn=nn.useRef(fn&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),hr=Jn.current?0:z,Sr=Jn.current?0:U;let gr=L,tr="visible";typeof L=="number"?(gr=L<0?0:L,tr="hidden"):kh(gr)&&(gr=L==="0%"?0:L,tr="hidden");const[zr,lr]=nn.useState(gr),[jr,E]=nn.useState(tr),[q,K]=nn.useState(!1),[yn,Tn]=nn.useState(Mh(_n.current,L));nn.useEffect(()=>{Mc(an.current,zr,T)},[]),nn.useEffect(()=>{if(L!==vn.current&&an.current){S1(an.current,vn.current),an.current.style.overflow="hidden";const ln=an.current.offsetHeight;an.current.style.overflow="";const mn=Sr+hr;let hn,Rn,Zn="hidden",Fr;const ve=vn.current==="auto";typeof L=="number"?(hn=L<0?0:L,Rn=hn):kh(L)?(hn=L==="0%"?0:L,Rn=hn):(hn=ln,Rn="auto",Zn=void 0),ve&&(Rn=hn,hn=ln);const Tt=[_n.current.animating,(vn.current==="auto"||L<vn.current)&&_n.current.animatingUp,(L==="auto"||L>vn.current)&&_n.current.animatingDown,Rn===0&&_n.current.animatingToHeightZero,Rn==="auto"&&_n.current.animatingToHeightAuto,typeof Rn=="number"&&Rn>0?_n.current.animatingToHeightSpecific:null].filter(pe=>pe).join(" "),St=Mh(_n.current,Rn);lr(hn),E("hidden"),K(!ve),Tn(Tt),clearTimeout(Cn.current),clearTimeout(un.current),ve?(Fr=!0,Cn.current=setTimeout(()=>{lr(Rn),E(Zn),K(Fr),tn?.(Rn)},50),un.current=setTimeout(()=>{K(!1),Tn(St),Mc(an.current,Rn,T),J?.(Rn)},mn)):(tn?.(hn),Cn.current=setTimeout(()=>{lr(Rn),E(Zn),K(!1),Tn(St),L!=="auto"&&Mc(an.current,hn,T),J?.(hn)},mn))}return vn.current=L,()=>{clearTimeout(Cn.current),clearTimeout(un.current)}},[L]);const p=Object.assign(Object.assign({},F),{height:zr,overflow:jr||F?.overflow});q&&N&&(p.transition=`height ${Sr}ms ${O} ${hr}ms`,F?.transition&&(p.transition=`${F.transition}, ${p.transition}`),p.WebkitTransition=p.transition);const w={};x&&(w.transition=`opacity ${Sr}ms ${O} ${hr}ms`,w.WebkitTransition=w.transition,zr===0&&(w.opacity=0));const I=typeof An["aria-hidden"]<"u"?An["aria-hidden"]:L===0;return ds.createElement("div",Object.assign({},An,{"aria-hidden":I,className:`${yn} ${C}`,style:p,ref:_}),ds.createElement("div",{className:Q,style:w,ref:ln=>{an.current=ln,Sn&&(Sn.current=ln)}},D))});function A1(){return a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"6 9 12 15 18 9"})})}function Ur({title:u,children:_}){const[x,d]=nn.useState(!1),N=x?"auto":0,D=Zr(ss.button,x&&ss.open),C=()=>d(!x);return a.jsxs("div",{className:ss.accordion,children:[a.jsxs("button",{className:D,onClick:C,children:[a.jsx("span",{children:u}),a.jsx(A1,{})]}),a.jsx(E1,{animateOpacity:!0,height:N,duration:400,children:a.jsx("div",{className:ss.content,children:_})})]})}const O1="_linkWrapper_1logo_1",w1="_link_1logo_1",Rh={linkWrapper:O1,link:w1},k1="_tooltip_1edpy_1",M1="_exit_1edpy_13",R1="_text_1edpy_27",Rc={tooltip:k1,exit:M1,text:R1};var L1=Uh();const z1=Ba(L1);function D1({anchorRef:u,content:_,showTooltip:x}){const d=nn.useRef(null),[N,D]=nn.useState(null),[C,Q]=nn.useState(!1),z=Zr(Rc.tooltip,!x&&Rc.exit),T=()=>Q(!1),U=()=>{x||Q(!0)};return nn.useEffect(()=>{if(!x||!u.current)return;const O=u.current.getBoundingClientRect(),L=d.current?.offsetHeight??0,J=O.left+window.scrollX,tn=O.top+window.scrollY-L-4;D({top:tn,left:J})},[x]),(x||!C)&&u.current&&z1.createPortal(a.jsx("div",{ref:d,className:z,style:N??{},onAnimationStart:T,onAnimationEnd:U,children:a.jsx("span",{className:Rc.text,children:_})}),document.body)}function V({href:u,description:_}){const x=nn.useRef(null),[d,N]=nn.useState(!1);let D;const C=T=>{T.preventDefault(),window.history.replaceState({},"",u),clearTimeout(D),N(!1),Jh(u,Qh()-2)},Q=()=>{D=setTimeout(()=>{N(!0)},700)},z=()=>{clearTimeout(D),N(!1)};return a.jsxs("div",{className:Rh.linkWrapper,children:[a.jsx("a",{ref:x,href:u,className:Rh.link,onClick:C,role:"button","aria-description":_,onMouseEnter:Q,onMouseLeave:z,children:_}),a.jsx(D1,{anchorRef:x,content:_,showTooltip:d})]})}function B1(){return a.jsxs(a.Fragment,{children:[a.jsxs(Ur,{title:"Big O",children:[a.jsx(V,{href:"#bigo-chart",description:"Time/Space Complexities"}),a.jsx(V,{href:"#bigo-data-structure-operations-table",description:"Data Structure Operations"}),a.jsx(V,{href:"#bigo-sorting-algorithms-table",description:"Sorting Algorithms"})]}),a.jsxs(Ur,{title:"Array",children:[a.jsx(V,{href:"#array-two-pointers-one-input",description:"two pointers: one input, opposite ends"}),a.jsx(V,{href:"#array-two-pointers-two-inputs",description:"two pointers: two inputs, exhaust both"}),a.jsx(V,{href:"#array-sliding-window",description:"sliding window"}),a.jsx(V,{href:"#array-prefix-sum",description:"prefix sum"}),a.jsx(V,{href:"#array-string-building",description:"efficient string building"})]}),a.jsxs(Ur,{title:"Hash Map",children:[a.jsx(V,{href:"#hashmap-find-number-of-subarrays",description:"find number of subarrays that fit an exact criteria"}),a.jsx(V,{href:"#hashmap-sliding-window",description:"sliding window"})]}),a.jsxs(Ur,{title:"Linked List",children:[a.jsx(V,{href:"#linkedlist-fast-and-slow-pointer",description:"fast and slow pointer"}),a.jsx(V,{href:"#linkedlist-reverse",description:"reverse linked list"})]}),a.jsxs(Ur,{title:"Stack",children:[a.jsx(V,{href:"#stack-monotonic-increasing",description:"monotonic increasing stack"}),a.jsx(V,{href:"#stack-monotonic-decreasing",description:"monotonic decreasing stack"})]}),a.jsxs(Ur,{title:"Binary Tree",children:[a.jsx(V,{href:"#tree-dfs-recursive",description:"DFS (recursive)"}),a.jsx(V,{href:"#tree-dfs-iterative",description:"DFS (iterative)"}),a.jsx(V,{href:"#tree-bfs",description:"BFS"})]}),a.jsxs(Ur,{title:"Graph",children:[a.jsx(V,{href:"#graph-dfs-recursive",description:"DFS (recursive)"}),a.jsx(V,{href:"#graph-dfs-iterative",description:"DFS (iterative)"}),a.jsx(V,{href:"#graph-bfs",description:"BFS"}),a.jsx(V,{href:"#graph-dijkstra",description:"Dijkstra (shortest path)"}),a.jsx(V,{href:"#graph-bellman-ford",description:"Bellman-Ford (shortest path)"}),a.jsx(V,{href:"#graph-kahn",description:"Kahn (topological sort)"}),a.jsx(V,{href:"#graph-kruskal",description:"Kruskal (mst)"}),a.jsx(V,{href:"#graph-prim",description:"Prim (mst)"})]}),a.jsx(Ur,{title:"Heap",children:a.jsx(V,{href:"#heap-find-top-k-elements",description:"find top k elements with heap"})}),a.jsxs(Ur,{title:"Binary Search",children:[a.jsx(V,{href:"#binarysearch-binary-search",description:"binary search"}),a.jsx(V,{href:"#binarysearch-duplicate-elements-left-insertion",description:"duplicate elements, left-most insertion point"}),a.jsx(V,{href:"#binarysearch-duplicate-elements-right-insertion",description:"duplicate elements, right-most insertion point"}),a.jsx(V,{href:"#binarysearch-greedy-minimum",description:"greedy (minimum)"}),a.jsx(V,{href:"#binarysearch-greedy-maximum",description:"greedy (maximum)"})]}),a.jsx(Ur,{title:"Backtracking",children:a.jsx(V,{href:"#backtracking-backtracking",description:"backtracking"})}),a.jsxs(Ur,{title:"Dynamic Programming",children:[a.jsx(V,{href:"#dp-top-down",description:"top-down DP"}),a.jsx(V,{href:"#dp-bottom-up",description:"bottom-up DP"}),a.jsx(V,{href:"#dp-kadane",description:"Kadane (max-sum subarray)"})]}),a.jsxs(Ur,{title:"Bit Manipulation",children:[a.jsx(V,{href:"#bitmanipulation-test-kth-bit",description:"test kth bit"}),a.jsx(V,{href:"#bitmanipulation-set-kth-bit",description:"set kth bit"}),a.jsx(V,{href:"#bitmanipulation-clear-kth-bit",description:"clear kth bit"}),a.jsx(V,{href:"#bitmanipulation-get-rightmost-bit",description:"get rightmost bit"}),a.jsx(V,{href:"#bitmanipulation-count-set-bits",description:"count set bits"}),a.jsx(V,{href:"#bitmanipulation-multiply-power-of-two",description:"multiply by 2^k"}),a.jsx(V,{href:"#bitmanipulation-divide-power-of-two",description:"divide by 2^k"}),a.jsx(V,{href:"#bitmanipulation-check-power-of-two",description:"check if number is power of 2"}),a.jsx(V,{href:"#bitmanipulation-swap-variables",description:"swap two variables"})]}),a.jsxs(Ur,{title:"Matrix",children:[a.jsx(V,{href:"#matrix-create-copy",description:"create / copy"}),a.jsx(V,{href:"#matrix-diagonals",description:"main / anti diagonals"}),a.jsx(V,{href:"#matrix-rotate-transpose",description:"rotate / transpose"})]}),a.jsxs(Ur,{title:"Data Structures",children:[a.jsx(V,{href:"#ds-array",description:"array"}),a.jsx(V,{href:"#ds-hash-map",description:"hashmap"}),a.jsx(V,{href:"#ds-linked-list",description:"linked list"}),a.jsx(V,{href:"#ds-doubly-linked-list",description:"doubly linked list"}),a.jsx(V,{href:"#ds-binary-tree",description:"binary tree"}),a.jsx(V,{href:"#ds-binary-search-tree",description:"binary search tree"}),a.jsx(V,{href:"#ds-graph",description:"graph"}),a.jsx(V,{href:"#ds-union-find",description:"union find"}),a.jsx(V,{href:"#ds-union-find-optimized",description:"union find optimized"}),a.jsx(V,{href:"#ds-trie",description:"trie"})]}),a.jsxs(Ur,{title:"Sorting Algorithms",children:[a.jsx(V,{href:"#sort-bubble",description:"bubble sort"}),a.jsx(V,{href:"#sort-selection",description:"selection sort"}),a.jsx(V,{href:"#sort-insertion",description:"insertion sort"}),a.jsx(V,{href:"#sort-shell",description:"shell sort"}),a.jsx(V,{href:"#sort-merge",description:"mergesort"}),a.jsx(V,{href:"#sort-quick",description:"quicksort"}),a.jsx(V,{href:"#sort-tim",description:"timsort"}),a.jsx(V,{href:"#sort-heap",description:"heapsort"}),a.jsx(V,{href:"#sort-counting",description:"counting sort"}),a.jsx(V,{href:"#sort-bucket",description:"bucket sort"}),a.jsx(V,{href:"#sort-radix",description:"radix sort"}),a.jsx(V,{href:"#sort-cube",description:"cubesort"}),a.jsx(V,{href:"#sort-bogo",description:"bogo sort"}),a.jsx(V,{href:"#sort-pancake",description:"pancake sort"}),a.jsx(V,{href:"#sort-sleep",description:"sleep sort"})]})]})}function C1({hamburgerButtonRef:u}){const _=nn.useRef(null),{isSidebarOpen:x,showSidebar:d,hideSidebar:N}=Dc(),[D,C]=nn.useState(!1),Q=Zr(ls.sidebar,!x&&ls.exit,!x&&D&&ls.hide),T=Kh({maxWidth:768},void 0,J=>{J&&x?N():!J&&!x&&d()}),U=()=>{T&&x&&N()},O=()=>C(!1),L=()=>{x||C(!0)};return Xh([_,u],U),a.jsx("nav",{ref:_,className:Q,onAnimationStart:O,onAnimationEndCapture:L,children:a.jsx("div",{className:ls.scrollContainer,children:a.jsx(B1,{})})})}function U1(){const u=nn.useRef(null);return a.jsxs("div",{id:"AppBar",children:[a.jsx(h1,{forwardedRef:u}),a.jsx(C1,{hamburgerButtonRef:u})]})}const H1="_main_1p6ym_1",q1="_sidebarHidden_1p6ym_11",Lh={main:H1,sidebarHidden:q1},Y1="_container_1htmy_1",G1="_sectionHeader_1htmy_7",Un={container:Y1,sectionHeader:G1},V1="_container_13ll4_1",K1="_label_13ll4_13",Q1="_tableWrapper_13ll4_21",J1="_dataRow_13ll4_30",X1="_red_13ll4_51",I1="_oliveGreen_13ll4_55",Z1="_green_13ll4_59",F1="_orange_13ll4_63",W1="_yellow_13ll4_67",P1="_gray_13ll4_71",g={container:V1,label:K1,tableWrapper:Q1,dataRow:J1,red:X1,oliveGreen:I1,green:Z1,orange:F1,yellow:W1,gray:P1};function $1(){const u={red:"rgba(255, 77, 77, 0.7)",orange:"rgba(255, 161, 22, 0.7)",yellow:"rgba(255, 216, 102, 0.7)",oliveGreen:"rgba(169, 220, 118, 0.7)",green:"rgba(63, 200, 111, 0.7)"};return a.jsx("section",{id:"bigo-chart",children:a.jsxs("div",{className:g.container,children:[a.jsx("h3",{children:"Big-O Complexity Chart"}),a.jsxs("svg",{id:"chart",viewBox:"0 0 800 500",children:[a.jsx("path",{d:"M50 450 L 50 0 L 800 0 L 800 450 Z",fill:u.red}),a.jsx("path",{d:"M50 450 L 800 0 L 800 450 Z",fill:u.orange}),a.jsx("path",{d:"M50 450 L 800 450 L 800 330 Z",fill:u.yellow}),a.jsx("path",{d:"M50 450 L 800 450 L 800 410 Z",fill:u.oliveGreen}),a.jsx("path",{d:"M50 450 L 800 450 L 800 440 Z",fill:u.green}),a.jsx("path",{d:"M50 0 L 50 450 L 800 450",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("path",{d:"M50 448 L 800 448",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"700",y:"438",fill:"black",children:"O(log n), O(1)"}),a.jsx("path",{d:"M50 450 L 800 400",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"760",y:"390",fill:"black",children:"O(n)"}),a.jsx("path",{d:"M50 450 Q 400 350, 800 150",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"630",y:"190",fill:"black",children:"O(n log n)"}),a.jsx("path",{d:"M50 450 Q 180 380, 250 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"260",y:"30",fill:"black",children:"O(n^2)"}),a.jsx("path",{d:"M50 450 C 100 430, 120 350, 120 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"125",y:"20",fill:"black",children:"O(2^n)"}),a.jsx("path",{d:"M50 450 C 80 450, 80 350, 80 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"80",y:"20",fill:"black",children:"O(n!)"}),a.jsx("text",{className:g.label,x:"0",y:"0",transform:"translate(30 230) rotate(-90)",fill:"black",children:"Operations"}),a.jsx("text",{className:g.label,x:"0",y:"0",transform:"translate(420 470)",fill:"black",children:"Elements"})]})]})})}function n0(){return a.jsx("section",{id:"bigo-data-structure-operations-table",children:a.jsxs("div",{className:g.container,children:[a.jsx("h3",{children:"Data Structure Operations"}),a.jsx("div",{className:g.tableWrapper,children:a.jsx("table",{className:g.table,children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("th",{children:"Data Structure"}),a.jsx("th",{colSpan:8,children:"Time Complexity"}),a.jsx("th",{children:"Space Complexity"})]}),a.jsxs("tr",{children:[a.jsx("th",{}),a.jsx("th",{colSpan:4,children:"Average"}),a.jsx("th",{colSpan:4,children:"Worst"}),a.jsx("th",{children:"Worst"})]}),a.jsxs("tr",{children:[a.jsx("th",{}),a.jsx("th",{children:"Access"}),a.jsx("th",{children:"Search"}),a.jsx("th",{children:"Insertion"}),a.jsx("th",{children:"Deletion"}),a.jsx("th",{children:"Access"}),a.jsx("th",{children:"Search"}),a.jsx("th",{children:"Insertion"}),a.jsx("th",{children:"Deletion"}),a.jsx("th",{})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Array_data_structure",target:"_blank",children:"Array"})}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Stack_(abstract_data_type)",target:"_blank",children:"Stack"})}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Queue_(abstract_data_type)",target:"_blank",children:"Queue"})}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists",target:"_blank",children:"Singly-Linked List"})}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Doubly_linked_list",target:"_blank",children:"Doubly-Linked List"})}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Skip_list",target:"_blank",children:"Skip List"})}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.orange,children:"O(n log(n))"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Hash_table",target:"_blank",children:"Hash Table"})}),a.jsx("td",{className:g.gray,children:"N/A"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.gray,children:"N/A"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Binary_search_tree",target:"_blank",children:"Binary Search Tree"})}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Cartesian_tree",target:"_blank",children:"Cartesian Tree"})}),a.jsx("td",{className:g.gray,children:"N/A"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.gray,children:"N/A"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/B_tree",target:"_blank",children:"B-Tree"})}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Red-black_tree",target:"_blank",children:"Red-Black Tree"})}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Splay_tree",target:"_blank",children:"Splay Tree"})}),a.jsx("td",{className:g.gray,children:"N/A"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.gray,children:"N/A"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/AVL_tree",target:"_blank",children:"AVL Tree"})}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/K-d_tree",target:"_blank",children:"KD Tree"})}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]})]})})})]})})}function r0(){return a.jsx("section",{id:"bigo-sorting-algorithms-table",children:a.jsxs("div",{className:g.container,children:[a.jsx("h3",{children:"Array Sorting Algorithms"}),a.jsx("div",{className:g.tableWrapper,children:a.jsx("table",{children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("th",{children:"Algorithm"}),a.jsx("th",{colSpan:3,children:"Time Complexity"}),a.jsx("th",{children:"Space Complexity"})]}),a.jsxs("tr",{children:[a.jsx("th",{}),a.jsx("th",{children:"Best"}),a.jsx("th",{children:"Average"}),a.jsx("th",{children:"Worst"}),a.jsx("th",{children:"Worst"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Quicksort",target:"_blank",children:"Quicksort"})}),a.jsx("td",{className:g.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:g.red,children:"O(n^2)"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Merge_sort",target:"_blank",children:"Mergesort"})}),a.jsx("td",{className:g.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:g.orange,children:"O(n log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Timsort",target:"_blank",children:"Timsort"})}),a.jsx("td",{className:g.yellow,children:"Ω(n)"}),a.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:g.orange,children:"O(n log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Heapsort",target:"_blank",children:"Heapsort"})}),a.jsx("td",{className:g.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:g.orange,children:"O(n log(n))"}),a.jsx("td",{className:g.green,children:"O(1)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Bubble_sort",target:"_blank",children:"Bubble Sort"})}),a.jsx("td",{className:g.yellow,children:"Ω(n)"}),a.jsx("td",{className:g.red,children:"Θ(n^2)"}),a.jsx("td",{className:g.red,children:"O(n^2)"}),a.jsx("td",{className:g.green,children:"O(1)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",children:"Insertion Sort"})}),a.jsx("td",{className:g.yellow,children:"Ω(n)"}),a.jsx("td",{className:g.red,children:"Θ(n^2)"}),a.jsx("td",{className:g.red,children:"O(n^2)"}),a.jsx("td",{className:g.green,children:"O(1)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Selection_sort",target:"_blank",children:"Selection Sort"})}),a.jsx("td",{className:g.red,children:"Ω(n^2)"}),a.jsx("td",{className:g.red,children:"Θ(n^2)"}),a.jsx("td",{className:g.red,children:"O(n^2)"}),a.jsx("td",{className:g.green,children:"O(1)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Tree_sort",target:"_blank",children:"Tree Sort"})}),a.jsx("td",{className:g.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:g.red,children:"O(n^2)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Shellsort",target:"_blank",children:"Shell Sort"})}),a.jsx("td",{className:g.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:g.red,children:"Θ(n(log(n))^2)"}),a.jsx("td",{className:g.red,children:"O(n(log(n))^2)"}),a.jsx("td",{className:g.green,children:"O(1)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Bucket_sort",target:"_blank",children:"Bucket Sort"})}),a.jsx("td",{className:g.green,children:"Ω(n+k)"}),a.jsx("td",{className:g.green,children:"Θ(n+k)"}),a.jsx("td",{className:g.red,children:"O(n^2)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Radix_sort",target:"_blank",children:"Radix Sort"})}),a.jsx("td",{className:g.green,children:"Ω(nk)"}),a.jsx("td",{className:g.green,children:"Θ(nk)"}),a.jsx("td",{className:g.green,children:"O(nk)"}),a.jsx("td",{className:g.yellow,children:"O(n+k)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Counting_sort",children:"Counting Sort"})}),a.jsx("td",{className:g.green,children:"Ω(n+k)"}),a.jsx("td",{className:g.green,children:"Θ(n+k)"}),a.jsx("td",{className:g.green,children:"O(n+k)"}),a.jsx("td",{className:g.yellow,children:"O(k)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Cubesort",target:"_blank",children:"Cubesort"})}),a.jsx("td",{className:g.yellow,children:"Ω(n)"}),a.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:g.orange,children:"O(n log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]})]})})})]})})}function e0(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Big O"}),a.jsx($1,{}),a.jsx(n0,{}),a.jsx(r0,{})]})}const t0="_container_12crg_1",a0="_buttonContainer_12crg_12",i0="_tabButtonContainer_12crg_18",l0="_tabButton_12crg_18",os={container:t0,buttonContainer:a0,tabButtonContainer:i0,tabButton:l0},s0="_code_1qx6e_1",o0="_line_1qx6e_13",zh={code:s0,line:o0};var Lc,Dh;function c0(){if(Dh)return Lc;Dh=1;function u(h){return h instanceof Map?h.clear=h.delete=h.set=function(){throw new Error("map is read-only")}:h instanceof Set&&(h.add=h.clear=h.delete=function(){throw new Error("set is read-only")}),Object.freeze(h),Object.getOwnPropertyNames(h).forEach(k=>{const G=h[k],dn=typeof G;(dn==="object"||dn==="function")&&!Object.isFrozen(G)&&u(G)}),h}class _{constructor(k){k.data===void 0&&(k.data={}),this.data=k.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function x(h){return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function d(h,...k){const G=Object.create(null);for(const dn in h)G[dn]=h[dn];return k.forEach(function(dn){for(const Wn in dn)G[Wn]=dn[Wn]}),G}const N="</span>",D=h=>!!h.scope,C=(h,{prefix:k})=>{if(h.startsWith("language:"))return h.replace("language:","language-");if(h.includes(".")){const G=h.split(".");return[`${k}${G.shift()}`,...G.map((dn,Wn)=>`${dn}${"_".repeat(Wn+1)}`)].join(" ")}return`${k}${h}`};class Q{constructor(k,G){this.buffer="",this.classPrefix=G.classPrefix,k.walk(this)}addText(k){this.buffer+=x(k)}openNode(k){if(!D(k))return;const G=C(k.scope,{prefix:this.classPrefix});this.span(G)}closeNode(k){D(k)&&(this.buffer+=N)}value(){return this.buffer}span(k){this.buffer+=`<span class="${k}">`}}const z=(h={})=>{const k={children:[]};return Object.assign(k,h),k};class T{constructor(){this.rootNode=z(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(k){this.top.children.push(k)}openNode(k){const G=z({scope:k});this.add(G),this.stack.push(G)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(k){return this.constructor._walk(k,this.rootNode)}static _walk(k,G){return typeof G=="string"?k.addText(G):G.children&&(k.openNode(G),G.children.forEach(dn=>this._walk(k,dn)),k.closeNode(G)),k}static _collapse(k){typeof k!="string"&&k.children&&(k.children.every(G=>typeof G=="string")?k.children=[k.children.join("")]:k.children.forEach(G=>{T._collapse(G)}))}}class U extends T{constructor(k){super(),this.options=k}addText(k){k!==""&&this.add(k)}startScope(k){this.openNode(k)}endScope(){this.closeNode()}__addSublanguage(k,G){const dn=k.root;G&&(dn.scope=`language:${G}`),this.add(dn)}toHTML(){return new Q(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function O(h){return h?typeof h=="string"?h:h.source:null}function L(h){return F("(?=",h,")")}function J(h){return F("(?:",h,")*")}function tn(h){return F("(?:",h,")?")}function F(...h){return h.map(G=>O(G)).join("")}function Sn(h){const k=h[h.length-1];return typeof k=="object"&&k.constructor===Object?(h.splice(h.length-1,1),k):{}}function An(...h){return"("+(Sn(h).capture?"":"?:")+h.map(dn=>O(dn)).join("|")+")"}function vn(h){return new RegExp(h.toString()+"|").exec("").length-1}function an(h,k){const G=h&&h.exec(k);return G&&G.index===0}const un=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Cn(h,{joinWith:k}){let G=0;return h.map(dn=>{G+=1;const Wn=G;let Xn=O(dn),W="";for(;Xn.length>0;){const X=un.exec(Xn);if(!X){W+=Xn;break}W+=Xn.substring(0,X.index),Xn=Xn.substring(X.index+X[0].length),X[0][0]==="\\"&&X[1]?W+="\\"+String(Number(X[1])+Wn):(W+=X[0],X[0]==="("&&G++)}return W}).map(dn=>`(${dn})`).join(k)}const _n=/\b\B/,fn="[a-zA-Z]\\w*",Jn="[a-zA-Z_]\\w*",hr="\\b\\d+(\\.\\d+)?",Sr="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",gr="\\b(0b[01]+)",tr="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",zr=(h={})=>{const k=/^#![ ]*\//;return h.binary&&(h.begin=F(k,/.*\b/,h.binary,/\b.*/)),d({scope:"meta",begin:k,end:/$/,relevance:0,"on:begin":(G,dn)=>{G.index!==0&&dn.ignoreMatch()}},h)},lr={begin:"\\\\[\\s\\S]",relevance:0},jr={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[lr]},E={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[lr]},q={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},K=function(h,k,G={}){const dn=d({scope:"comment",begin:h,end:k,contains:[]},G);dn.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Wn=An("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return dn.contains.push({begin:F(/[ ]+/,"(",Wn,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),dn},yn=K("//","$"),Tn=K("/\\*","\\*/"),p=K("#","$"),w={scope:"number",begin:hr,relevance:0},Y={scope:"number",begin:Sr,relevance:0},I={scope:"number",begin:gr,relevance:0},ln={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[lr,{begin:/\[/,end:/\]/,relevance:0,contains:[lr]}]},mn={scope:"title",begin:fn,relevance:0},hn={scope:"title",begin:Jn,relevance:0},Rn={begin:"\\.\\s*"+Jn,relevance:0};var Fr=Object.freeze({__proto__:null,APOS_STRING_MODE:jr,BACKSLASH_ESCAPE:lr,BINARY_NUMBER_MODE:I,BINARY_NUMBER_RE:gr,COMMENT:K,C_BLOCK_COMMENT_MODE:Tn,C_LINE_COMMENT_MODE:yn,C_NUMBER_MODE:Y,C_NUMBER_RE:Sr,END_SAME_AS_BEGIN:function(h){return Object.assign(h,{"on:begin":(k,G)=>{G.data._beginMatch=k[1]},"on:end":(k,G)=>{G.data._beginMatch!==k[1]&&G.ignoreMatch()}})},HASH_COMMENT_MODE:p,IDENT_RE:fn,MATCH_NOTHING_RE:_n,METHOD_GUARD:Rn,NUMBER_MODE:w,NUMBER_RE:hr,PHRASAL_WORDS_MODE:q,QUOTE_STRING_MODE:E,REGEXP_MODE:ln,RE_STARTERS_RE:tr,SHEBANG:zr,TITLE_MODE:mn,UNDERSCORE_IDENT_RE:Jn,UNDERSCORE_TITLE_MODE:hn});function ve(h,k){h.input[h.index-1]==="."&&k.ignoreMatch()}function Tt(h,k){h.className!==void 0&&(h.scope=h.className,delete h.className)}function St(h,k){k&&h.beginKeywords&&(h.begin="\\b("+h.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",h.__beforeBegin=ve,h.keywords=h.keywords||h.beginKeywords,delete h.beginKeywords,h.relevance===void 0&&(h.relevance=0))}function pe(h,k){Array.isArray(h.illegal)&&(h.illegal=An(...h.illegal))}function Ca(h,k){if(h.match){if(h.begin||h.end)throw new Error("begin & end are not supported with match");h.begin=h.match,delete h.match}}function Ua(h,k){h.relevance===void 0&&(h.relevance=1)}const fs=(h,k)=>{if(!h.beforeMatch)return;if(h.starts)throw new Error("beforeMatch cannot be used with starts");const G=Object.assign({},h);Object.keys(h).forEach(dn=>{delete h[dn]}),h.keywords=G.keywords,h.begin=F(G.beforeMatch,L(G.begin)),h.starts={relevance:0,contains:[Object.assign(G,{endsParent:!0})]},h.relevance=0,delete G.beforeMatch},Ui=["of","and","for","in","not","or","if","then","parent","list","value"],Ha="keyword";function Wt(h,k,G=Ha){const dn=Object.create(null);return typeof h=="string"?Wn(G,h.split(" ")):Array.isArray(h)?Wn(G,h):Object.keys(h).forEach(function(Xn){Object.assign(dn,Wt(h[Xn],k,Xn))}),dn;function Wn(Xn,W){k&&(W=W.map(X=>X.toLowerCase())),W.forEach(function(X){const cn=X.split("|");dn[cn[0]]=[Xn,qa(cn[0],cn[1])]})}}function qa(h,k){return k?Number(k):hs(h)?0:1}function hs(h){return Ui.includes(h.toLowerCase())}const Hi={},sr=h=>{console.error(h)},qi=(h,...k)=>{console.log(`WARN: ${h}`,...k)},Ae=(h,k)=>{Hi[`${h}/${k}`]||(console.log(`Deprecated as of ${h}. ${k}`),Hi[`${h}/${k}`]=!0)},jt=new Error;function Nt(h,k,{key:G}){let dn=0;const Wn=h[G],Xn={},W={};for(let X=1;X<=k.length;X++)W[X+dn]=Wn[X],Xn[X+dn]=!0,dn+=vn(k[X-1]);h[G]=W,h[G]._emit=Xn,h[G]._multi=!0}function gs(h){if(Array.isArray(h.begin)){if(h.skip||h.excludeBegin||h.returnBegin)throw sr("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),jt;if(typeof h.beginScope!="object"||h.beginScope===null)throw sr("beginScope must be object"),jt;Nt(h,h.begin,{key:"beginScope"}),h.begin=Cn(h.begin,{joinWith:""})}}function Yi(h){if(Array.isArray(h.end)){if(h.skip||h.excludeEnd||h.returnEnd)throw sr("skip, excludeEnd, returnEnd not compatible with endScope: {}"),jt;if(typeof h.endScope!="object"||h.endScope===null)throw sr("endScope must be object"),jt;Nt(h,h.end,{key:"endScope"}),h.end=Cn(h.end,{joinWith:""})}}function ps(h){h.scope&&typeof h.scope=="object"&&h.scope!==null&&(h.beginScope=h.scope,delete h.scope)}function ms(h){ps(h),typeof h.beginScope=="string"&&(h.beginScope={_wrap:h.beginScope}),typeof h.endScope=="string"&&(h.endScope={_wrap:h.endScope}),gs(h),Yi(h)}function Et(h){function k(W,X){return new RegExp(O(W),"m"+(h.case_insensitive?"i":"")+(h.unicodeRegex?"u":"")+(X?"g":""))}class G{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(X,cn){cn.position=this.position++,this.matchIndexes[this.matchAt]=cn,this.regexes.push([cn,X]),this.matchAt+=vn(X)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const X=this.regexes.map(cn=>cn[1]);this.matcherRe=k(Cn(X,{joinWith:"|"}),!0),this.lastIndex=0}exec(X){this.matcherRe.lastIndex=this.lastIndex;const cn=this.matcherRe.exec(X);if(!cn)return null;const or=cn.findIndex((Oe,$t)=>$t>0&&Oe!==void 0),nr=this.matchIndexes[or];return cn.splice(0,or),Object.assign(cn,nr)}}class dn{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(X){if(this.multiRegexes[X])return this.multiRegexes[X];const cn=new G;return this.rules.slice(X).forEach(([or,nr])=>cn.addRule(or,nr)),cn.compile(),this.multiRegexes[X]=cn,cn}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(X,cn){this.rules.push([X,cn]),cn.type==="begin"&&this.count++}exec(X){const cn=this.getMatcher(this.regexIndex);cn.lastIndex=this.lastIndex;let or=cn.exec(X);if(this.resumingScanAtSamePosition()&&!(or&&or.index===this.lastIndex)){const nr=this.getMatcher(0);nr.lastIndex=this.lastIndex+1,or=nr.exec(X)}return or&&(this.regexIndex+=or.position+1,this.regexIndex===this.count&&this.considerAll()),or}}function Wn(W){const X=new dn;return W.contains.forEach(cn=>X.addRule(cn.begin,{rule:cn,type:"begin"})),W.terminatorEnd&&X.addRule(W.terminatorEnd,{type:"end"}),W.illegal&&X.addRule(W.illegal,{type:"illegal"}),X}function Xn(W,X){const cn=W;if(W.isCompiled)return cn;[Tt,Ca,ms,fs].forEach(nr=>nr(W,X)),h.compilerExtensions.forEach(nr=>nr(W,X)),W.__beforeBegin=null,[St,pe,Ua].forEach(nr=>nr(W,X)),W.isCompiled=!0;let or=null;return typeof W.keywords=="object"&&W.keywords.$pattern&&(W.keywords=Object.assign({},W.keywords),or=W.keywords.$pattern,delete W.keywords.$pattern),or=or||/\w+/,W.keywords&&(W.keywords=Wt(W.keywords,h.case_insensitive)),cn.keywordPatternRe=k(or,!0),X&&(W.begin||(W.begin=/\B|\b/),cn.beginRe=k(cn.begin),!W.end&&!W.endsWithParent&&(W.end=/\B|\b/),W.end&&(cn.endRe=k(cn.end)),cn.terminatorEnd=O(cn.end)||"",W.endsWithParent&&X.terminatorEnd&&(cn.terminatorEnd+=(W.end?"|":"")+X.terminatorEnd)),W.illegal&&(cn.illegalRe=k(W.illegal)),W.contains||(W.contains=[]),W.contains=[].concat(...W.contains.map(function(nr){return ye(nr==="self"?W:nr)})),W.contains.forEach(function(nr){Xn(nr,cn)}),W.starts&&Xn(W.starts,X),cn.matcher=Wn(cn),cn}if(h.compilerExtensions||(h.compilerExtensions=[]),h.contains&&h.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return h.classNameAliases=d(h.classNameAliases||{}),Xn(h)}function kr(h){return h?h.endsWithParent||kr(h.starts):!1}function ye(h){return h.variants&&!h.cachedVariants&&(h.cachedVariants=h.variants.map(function(k){return d(h,{variants:null},k)})),h.cachedVariants?h.cachedVariants:kr(h)?d(h,{starts:h.starts?d(h.starts):null}):Object.isFrozen(h)?d(h):h}var Dr="11.11.1";class bs extends Error{constructor(k,G){super(k),this.name="HTMLInjectionError",this.html=G}}const Ya=x,Gi=d,At=Symbol("nomatch"),Pt=7,Ot=function(h){const k=Object.create(null),G=Object.create(null),dn=[];let Wn=!0;const Xn="Could not find the language '{}', did you forget to load/include a language module?",W={disableAutodetect:!0,name:"Plain text",contains:[]};let X={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:U};function cn(B){return X.noHighlightRe.test(B)}function or(B){let rn=B.className+" ";rn+=B.parentNode?B.parentNode.className:"";const jn=X.languageDetectRe.exec(rn);if(jn){const Hn=Br(jn[1]);return Hn||(qi(Xn.replace("{}",jn[1])),qi("Falling back to no-highlight mode for this block.",B)),Hn?jn[1]:"no-highlight"}return rn.split(/\s+/).find(Hn=>cn(Hn)||Br(Hn))}function nr(B,rn,jn){let Hn="",ur="";typeof rn=="object"?(Hn=B,jn=rn.ignoreIllegals,ur=rn.language):(Ae("10.7.0","highlight(lang, code, ...args) has been deprecated."),Ae("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),ur=B,Hn=rn),jn===void 0&&(jn=!0);const Rr={code:Hn,language:ur};kt("before:highlight",Rr);const Wr=Rr.result?Rr.result:Oe(Rr.language,Rr.code,jn);return Wr.code=Rr.code,kt("after:highlight",Wr),Wr}function Oe(B,rn,jn,Hn){const ur=Object.create(null);function Rr(H,P){return H.keywords[P]}function Wr(){if(!on.keywords){mr.addText(qn);return}let H=0;on.keywordPatternRe.lastIndex=0;let P=on.keywordPatternRe.exec(qn),pn="";for(;P;){pn+=qn.substring(H,P.index);const On=Nr.case_insensitive?P[0].toLowerCase():P[0],er=Rr(on,On);if(er){const[le,Xa]=er;if(mr.addText(pn),pn="",ur[On]=(ur[On]||0)+1,ur[On]<=Pt&&(We+=Xa),le.startsWith("_"))pn+=P[0];else{const Zi=Nr.classNameAliases[le]||le;Pr(P[0],Zi)}}else pn+=P[0];H=on.keywordPatternRe.lastIndex,P=on.keywordPatternRe.exec(qn)}pn+=qn.substring(H),mr.addText(pn)}function Yr(){if(qn==="")return;let H=null;if(typeof on.subLanguage=="string"){if(!k[on.subLanguage]){mr.addText(qn);return}H=Oe(on.subLanguage,qn,!0,Ii[on.subLanguage]),Ii[on.subLanguage]=H._top}else H=na(qn,on.subLanguage.length?on.subLanguage:null);on.relevance>0&&(We+=H.relevance),mr.__addSublanguage(H._emitter,H.language)}function Fn(){on.subLanguage!=null?Yr():Wr(),qn=""}function Pr(H,P){H!==""&&(mr.startScope(P),mr.addText(H),mr.endScope())}function Ji(H,P){let pn=1;const On=P.length-1;for(;pn<=On;){if(!H._emit[pn]){pn++;continue}const er=Nr.classNameAliases[H[pn]]||H[pn],le=P[pn];er?Pr(le,er):(qn=le,Wr(),qn=""),pn++}}function ea(H,P){return H.scope&&typeof H.scope=="string"&&mr.openNode(Nr.classNameAliases[H.scope]||H.scope),H.beginScope&&(H.beginScope._wrap?(Pr(qn,Nr.classNameAliases[H.beginScope._wrap]||H.beginScope._wrap),qn=""):H.beginScope._multi&&(Ji(H.beginScope,P),qn="")),on=Object.create(H,{parent:{value:on}}),on}function Ka(H,P,pn){let On=an(H.endRe,pn);if(On){if(H["on:end"]){const er=new _(H);H["on:end"](P,er),er.isMatchIgnored&&(On=!1)}if(On){for(;H.endsParent&&H.parent;)H=H.parent;return H}}if(H.endsWithParent)return Ka(H.parent,P,pn)}function ta(H){return on.matcher.regexIndex===0?(qn+=H[0],1):(Pe=!0,0)}function _s(H){const P=H[0],pn=H.rule,On=new _(pn),er=[pn.__beforeBegin,pn["on:begin"]];for(const le of er)if(le&&(le(H,On),On.isMatchIgnored))return ta(P);return pn.skip?qn+=P:(pn.excludeBegin&&(qn+=P),Fn(),!pn.returnBegin&&!pn.excludeBegin&&(qn=P)),ea(pn,H),pn.returnBegin?0:P.length}function Gr(H){const P=H[0],pn=rn.substring(H.index),On=Ka(on,H,pn);if(!On)return At;const er=on;on.endScope&&on.endScope._wrap?(Fn(),Pr(P,on.endScope._wrap)):on.endScope&&on.endScope._multi?(Fn(),Ji(on.endScope,H)):er.skip?qn+=P:(er.returnEnd||er.excludeEnd||(qn+=P),Fn(),er.excludeEnd&&(qn=P));do on.scope&&mr.closeNode(),!on.skip&&!on.subLanguage&&(We+=on.relevance),on=on.parent;while(on!==On.parent);return On.starts&&ea(On.starts,H),er.returnEnd?0:P.length}function Qa(){const H=[];for(let P=on;P!==Nr;P=P.parent)P.scope&&H.unshift(P.scope);H.forEach(P=>mr.openNode(P))}let Mt={};function aa(H,P){const pn=P&&P[0];if(qn+=H,pn==null)return Fn(),0;if(Mt.type==="begin"&&P.type==="end"&&Mt.index===P.index&&pn===""){if(qn+=rn.slice(P.index,P.index+1),!Wn){const On=new Error(`0 width match regex (${B})`);throw On.languageName=B,On.badRule=Mt.rule,On}return 1}if(Mt=P,P.type==="begin")return _s(P);if(P.type==="illegal"&&!jn){const On=new Error('Illegal lexeme "'+pn+'" for mode "'+(on.scope||"<unnamed>")+'"');throw On.mode=on,On}else if(P.type==="end"){const On=Gr(P);if(On!==At)return On}if(P.type==="illegal"&&pn==="")return qn+=`
`,1;if(Ja>1e5&&Ja>P.index*3)throw new Error("potential infinite loop, way more iterations than matches");return qn+=pn,pn.length}const Nr=Br(B);if(!Nr)throw sr(Xn.replace("{}",B)),new Error('Unknown language: "'+B+'"');const Xi=Et(Nr);let ia="",on=Hn||Xi;const Ii={},mr=new X.__emitter(X);Qa();let qn="",We=0,Me=0,Ja=0,Pe=!1;try{if(Nr.__emitTokens)Nr.__emitTokens(rn,mr);else{for(on.matcher.considerAll();;){Ja++,Pe?Pe=!1:on.matcher.considerAll(),on.matcher.lastIndex=Me;const H=on.matcher.exec(rn);if(!H)break;const P=rn.substring(Me,H.index),pn=aa(P,H);Me=H.index+pn}aa(rn.substring(Me))}return mr.finalize(),ia=mr.toHTML(),{language:B,value:ia,relevance:We,illegal:!1,_emitter:mr,_top:on}}catch(H){if(H.message&&H.message.includes("Illegal"))return{language:B,value:Ya(rn),illegal:!0,relevance:0,_illegalBy:{message:H.message,index:Me,context:rn.slice(Me-100,Me+100),mode:H.mode,resultSoFar:ia},_emitter:mr};if(Wn)return{language:B,value:Ya(rn),illegal:!1,relevance:0,errorRaised:H,_emitter:mr,_top:on};throw H}}function $t(B){const rn={value:Ya(B),illegal:!1,relevance:0,_top:W,_emitter:new X.__emitter(X)};return rn._emitter.addText(B),rn}function na(B,rn){rn=rn||X.languages||Object.keys(k);const jn=$t(B),Hn=rn.filter(Br).filter(Ze).map(Fn=>Oe(Fn,B,!1));Hn.unshift(jn);const ur=Hn.sort((Fn,Pr)=>{if(Fn.relevance!==Pr.relevance)return Pr.relevance-Fn.relevance;if(Fn.language&&Pr.language){if(Br(Fn.language).supersetOf===Pr.language)return 1;if(Br(Pr.language).supersetOf===Fn.language)return-1}return 0}),[Rr,Wr]=ur,Yr=Rr;return Yr.secondBest=Wr,Yr}function Te(B,rn,jn){const Hn=rn&&G[rn]||jn;B.classList.add("hljs"),B.classList.add(`language-${Hn}`)}function cr(B){let rn=null;const jn=or(B);if(cn(jn))return;if(kt("before:highlightElement",{el:B,language:jn}),B.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",B);return}if(B.children.length>0&&(X.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(B)),X.throwUnescapedHTML))throw new bs("One of your code blocks includes unescaped HTML.",B.innerHTML);rn=B;const Hn=rn.textContent,ur=jn?nr(Hn,{language:jn,ignoreIllegals:!0}):na(Hn);B.innerHTML=ur.value,B.dataset.highlighted="yes",Te(B,jn,ur.language),B.result={language:ur.language,re:ur.relevance,relevance:ur.relevance},ur.secondBest&&(B.secondBest={language:ur.secondBest.language,relevance:ur.secondBest.relevance}),kt("after:highlightElement",{el:B,result:ur,text:Hn})}function Mr(B){X=Gi(X,B)}const Ie=()=>{ra(),Ae("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Ga(){ra(),Ae("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Vi=!1;function ra(){function B(){ra()}if(document.readyState==="loading"){Vi||window.addEventListener("DOMContentLoaded",B,!1),Vi=!0;return}document.querySelectorAll(X.cssSelector).forEach(cr)}function Ki(B,rn){let jn=null;try{jn=rn(h)}catch(Hn){if(sr("Language definition for '{}' could not be registered.".replace("{}",B)),Wn)sr(Hn);else throw Hn;jn=W}jn.name||(jn.name=B),k[B]=jn,jn.rawDefinition=rn.bind(null,h),jn.aliases&&we(jn.aliases,{languageName:B})}function wt(B){delete k[B];for(const rn of Object.keys(G))G[rn]===B&&delete G[rn]}function Va(){return Object.keys(k)}function Br(B){return B=(B||"").toLowerCase(),k[B]||k[G[B]]}function we(B,{languageName:rn}){typeof B=="string"&&(B=[B]),B.forEach(jn=>{G[jn.toLowerCase()]=rn})}function Ze(B){const rn=Br(B);return rn&&!rn.disableAutodetect}function Fe(B){B["before:highlightBlock"]&&!B["before:highlightElement"]&&(B["before:highlightElement"]=rn=>{B["before:highlightBlock"](Object.assign({block:rn.el},rn))}),B["after:highlightBlock"]&&!B["after:highlightElement"]&&(B["after:highlightElement"]=rn=>{B["after:highlightBlock"](Object.assign({block:rn.el},rn))})}function pr(B){Fe(B),dn.push(B)}function Qi(B){const rn=dn.indexOf(B);rn!==-1&&dn.splice(rn,1)}function kt(B,rn){const jn=B;dn.forEach(function(Hn){Hn[jn]&&Hn[jn](rn)})}function ke(B){return Ae("10.7.0","highlightBlock will be removed entirely in v12.0"),Ae("10.7.0","Please use highlightElement now."),cr(B)}Object.assign(h,{highlight:nr,highlightAuto:na,highlightAll:ra,highlightElement:cr,highlightBlock:ke,configure:Mr,initHighlighting:Ie,initHighlightingOnLoad:Ga,registerLanguage:Ki,unregisterLanguage:wt,listLanguages:Va,getLanguage:Br,registerAliases:we,autoDetection:Ze,inherit:Gi,addPlugin:pr,removePlugin:Qi}),h.debugMode=function(){Wn=!1},h.safeMode=function(){Wn=!0},h.versionString=Dr,h.regex={concat:F,lookahead:L,either:An,optional:tn,anyNumberOfTimes:J};for(const B in Fr)typeof Fr[B]=="object"&&u(Fr[B]);return Object.assign(h,Fr),h},qr=Ot({});return qr.newInstance=()=>Ot({}),Lc=qr,qr.HighlightJS=qr,qr.default=qr,Lc}var u0=c0();const Ft=Ba(u0),Bh="[A-Za-z$_][0-9A-Za-z$_]*",d0=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],f0=["true","false","null","undefined","NaN","Infinity"],Ih=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Zh=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Fh=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],h0=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],g0=[].concat(Fh,Ih,Zh);function p0(u){const _=u.regex,x=(K,{after:yn})=>{const Tn="</"+K[0].slice(1);return K.input.indexOf(Tn,yn)!==-1},d=Bh,N={begin:"<>",end:"</>"},D=/<[A-Za-z0-9\\._:-]+\s*\/>/,C={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(K,yn)=>{const Tn=K[0].length+K.index,p=K.input[Tn];if(p==="<"||p===","){yn.ignoreMatch();return}p===">"&&(x(K,{after:Tn})||yn.ignoreMatch());let w;const Y=K.input.substring(Tn);if(w=Y.match(/^\s*=/)){yn.ignoreMatch();return}if((w=Y.match(/^\s+extends\s+/))&&w.index===0){yn.ignoreMatch();return}}},Q={$pattern:Bh,keyword:d0,literal:f0,built_in:g0,"variable.language":h0},z="[0-9](_?[0-9])*",T=`\\.(${z})`,U="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",O={className:"number",variants:[{begin:`(\\b(${U})((${T})|\\.)?|(${T}))[eE][+-]?(${z})\\b`},{begin:`\\b(${U})\\b((${T})\\b|\\.)?|(${T})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},L={className:"subst",begin:"\\$\\{",end:"\\}",keywords:Q,contains:[]},J={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[u.BACKSLASH_ESCAPE,L],subLanguage:"xml"}},tn={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[u.BACKSLASH_ESCAPE,L],subLanguage:"css"}},F={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[u.BACKSLASH_ESCAPE,L],subLanguage:"graphql"}},Sn={className:"string",begin:"`",end:"`",contains:[u.BACKSLASH_ESCAPE,L]},vn={className:"comment",variants:[u.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:d+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),u.C_BLOCK_COMMENT_MODE,u.C_LINE_COMMENT_MODE]},an=[u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,J,tn,F,Sn,{match:/\$\d+/},O];L.contains=an.concat({begin:/\{/,end:/\}/,keywords:Q,contains:["self"].concat(an)});const un=[].concat(vn,L.contains),Cn=un.concat([{begin:/(\s*)\(/,end:/\)/,keywords:Q,contains:["self"].concat(un)}]),_n={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:Q,contains:Cn},fn={variants:[{match:[/class/,/\s+/,d,/\s+/,/extends/,/\s+/,_.concat(d,"(",_.concat(/\./,d),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,d],scope:{1:"keyword",3:"title.class"}}]},Jn={relevance:0,match:_.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Ih,...Zh]}},hr={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Sr={variants:[{match:[/function/,/\s+/,d,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[_n],illegal:/%/},gr={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function tr(K){return _.concat("(?!",K.join("|"),")")}const zr={match:_.concat(/\b/,tr([...Fh,"super","import"].map(K=>`${K}\\s*\\(`)),d,_.lookahead(/\s*\(/)),className:"title.function",relevance:0},lr={begin:_.concat(/\./,_.lookahead(_.concat(d,/(?![0-9A-Za-z$_(])/))),end:d,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},jr={match:[/get|set/,/\s+/,d,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},_n]},E="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+u.UNDERSCORE_IDENT_RE+")\\s*=>",q={match:[/const|var|let/,/\s+/,d,/\s*/,/=\s*/,/(async\s*)?/,_.lookahead(E)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[_n]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:Q,exports:{PARAMS_CONTAINS:Cn,CLASS_REFERENCE:Jn},illegal:/#(?![$_A-z])/,contains:[u.SHEBANG({label:"shebang",binary:"node",relevance:5}),hr,u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,J,tn,F,Sn,vn,{match:/\$\d+/},O,Jn,{scope:"attr",match:d+_.lookahead(":"),relevance:0},q,{begin:"("+u.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[vn,u.REGEXP_MODE,{className:"function",begin:E,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:u.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:Q,contains:Cn}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:N.begin,end:N.end},{match:D},{begin:C.begin,"on:begin":C.isTrulyOpeningTag,end:C.end}],subLanguage:"xml",contains:[{begin:C.begin,end:C.end,skip:!0,contains:["self"]}]}]},Sr,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+u.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[_n,u.inherit(u.TITLE_MODE,{begin:d,className:"title.function"})]},{match:/\.\.\./,relevance:0},lr,{match:"\\$"+d,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[_n]},zr,gr,fn,jr,{match:/\$[(.]/}]}}var Da="[0-9](_*[0-9])*",cs=`\\.(${Da})`,us="[0-9a-fA-F](_*[0-9a-fA-F])*",Ch={className:"number",variants:[{begin:`(\\b(${Da})((${cs})|\\.)?|(${cs}))[eE][+-]?(${Da})[fFdD]?\\b`},{begin:`\\b(${Da})((${cs})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${cs})[fFdD]?\\b`},{begin:`\\b(${Da})[fFdD]\\b`},{begin:`\\b0[xX]((${us})\\.?|(${us})?\\.(${us}))[pP][+-]?(${Da})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${us})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function Wh(u,_,x){return x===-1?"":u.replace(_,d=>Wh(u,_,x-1))}function m0(u){const _=u.regex,x="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",d=x+Wh("(?:<"+x+"~~~(?:\\s*,\\s*"+x+"~~~)*>)?",/~~~/g,2),z={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto","when"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},T={className:"meta",begin:"@"+x,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},U={className:"params",begin:/\(/,end:/\)/,keywords:z,relevance:0,contains:[u.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:z,illegal:/<\/|#/,contains:[u.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},u.C_LINE_COMMENT_MODE,u.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[u.BACKSLASH_ESCAPE]},u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,x],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[_.concat(/(?!else)/,x),/\s+/,x,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,x],className:{1:"keyword",3:"title.class"},contains:[U,u.C_LINE_COMMENT_MODE,u.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+d+"\\s+)",u.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:z,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:z,relevance:0,contains:[T,u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,Ch,u.C_BLOCK_COMMENT_MODE]},u.C_LINE_COMMENT_MODE,u.C_BLOCK_COMMENT_MODE]},Ch,T]}}function b0(u){const _=u.regex,x=u.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),d="decltype\\(auto\\)",N="[a-zA-Z_]\\w*::",C="(?!struct)("+d+"|"+_.optional(N)+"[a-zA-Z_]\\w*"+_.optional("<[^<>]+>")+")",Q={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},T={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[u.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},u.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},U={className:"number",variants:[{begin:"[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"},{begin:"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"}],relevance:0},O={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},u.inherit(T,{className:"string"}),{className:"string",begin:/<.*?>/},x,u.C_BLOCK_COMMENT_MODE]},L={className:"title",begin:_.optional(N)+u.IDENT_RE,relevance:0},J=_.optional(N)+u.IDENT_RE+"\\s*\\(",tn=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],F=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],Sn=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","flat_map","flat_set","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],An=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],un={type:F,keyword:tn,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:Sn},Cn={className:"function.dispatch",relevance:0,keywords:{_hint:An},begin:_.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,u.IDENT_RE,_.lookahead(/(<[^<>]+>|)\s*\(/))},_n=[Cn,O,Q,x,u.C_BLOCK_COMMENT_MODE,U,T],fn={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:un,contains:_n.concat([{begin:/\(/,end:/\)/,keywords:un,contains:_n.concat(["self"]),relevance:0}]),relevance:0},Jn={className:"function",begin:"("+C+"[\\*&\\s]+)+"+J,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:un,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:d,keywords:un,relevance:0},{begin:J,returnBegin:!0,contains:[L],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[T,U]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:un,relevance:0,contains:[x,u.C_BLOCK_COMMENT_MODE,T,U,Q,{begin:/\(/,end:/\)/,keywords:un,relevance:0,contains:["self",x,u.C_BLOCK_COMMENT_MODE,T,U,Q]}]},Q,x,u.C_BLOCK_COMMENT_MODE,O]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:un,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(fn,Jn,Cn,_n,[O,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",end:">",keywords:un,contains:["self",Q]},{begin:u.IDENT_RE+"::",keywords:un},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}function _0(u){const _=u.regex,x="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",d=_.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),N=_.concat(d,/(::\w+)*/),C={"variable.constant":["__FILE__","__LINE__","__ENCODING__"],"variable.language":["self","super"],keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield",...["include","extend","prepend","public","private","protected","raise","throw"]],built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],literal:["true","false","nil"]},Q={className:"doctag",begin:"@[A-Za-z]+"},z={begin:"#<",end:">"},T=[u.COMMENT("#","$",{contains:[Q]}),u.COMMENT("^=begin","^=end",{contains:[Q],relevance:10}),u.COMMENT("^__END__",u.MATCH_NOTHING_RE)],U={className:"subst",begin:/#\{/,end:/\}/,keywords:C},O={className:"string",contains:[u.BACKSLASH_ESCAPE,U],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:_.concat(/<<[-~]?'?/,_.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[u.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[u.BACKSLASH_ESCAPE,U]})]}]},L="[1-9](_?[0-9])*|0",J="[0-9](_?[0-9])*",tn={className:"number",relevance:0,variants:[{begin:`\\b(${L})(\\.(${J}))?([eE][+-]?(${J})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},F={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:C}]},_n=[O,{variants:[{match:[/class\s+/,N,/\s+<\s+/,N]},{match:[/\b(class|module)\s+/,N]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:C},{match:[/(include|extend)\s+/,N],scope:{2:"title.class"},keywords:C},{relevance:0,match:[N,/\.new[. (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{relevance:0,match:d,scope:"title.class"},{match:[/def/,/\s+/,x],scope:{1:"keyword",3:"title.function"},contains:[F]},{begin:u.IDENT_RE+"::"},{className:"symbol",begin:u.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[O,{begin:x}],relevance:0},tn,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|(?!=)/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:C},{begin:"("+u.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[u.BACKSLASH_ESCAPE,U],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(z,T),relevance:0}].concat(z,T);U.contains=_n,F.contains=_n;const Sr=[{begin:/^\s*=>/,starts:{end:"$",contains:_n}},{className:"meta.prompt",begin:"^("+"[>?]>"+"|"+"[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]"+"|"+"(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>"+")(?=[ ])",starts:{end:"$",keywords:C,contains:_n}}];return T.unshift(z),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:C,illegal:/\/\*/,contains:[u.SHEBANG({binary:"ruby"})].concat(Sr).concat(T).concat(_n)}}function x0(u){const _="\\[=*\\[",x="\\]=*\\]",d={begin:_,end:x,contains:["self"]},N=[u.COMMENT("--(?!"+_+")","$"),u.COMMENT("--"+_,x,{contains:[d],relevance:10})];return{name:"Lua",aliases:["pluto"],keywords:{$pattern:u.UNDERSCORE_IDENT_RE,literal:"true false nil",keyword:"and break do else elseif end for goto if in local not or repeat return then until while",built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"},contains:N.concat([{className:"function",beginKeywords:"function",end:"\\)",contains:[u.inherit(u.TITLE_MODE,{begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",begin:"\\(",endsWithParent:!0,contains:N}].concat(N)},u.C_NUMBER_MODE,u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,{className:"string",begin:_,end:x,contains:[d],relevance:5}])}}function v0(u){const _=u.regex,x=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),d=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],N=/[-+*\/%=<>&|^~]|\*\*?|\/\/?|<<=?|>>=?|\+=|-=|\*=|\/=|%=|@|<|>/,D=["bool","complex","dict","float","frozenset","int","list","set","str","tuple"],C=["add_vertex","add","append","backtrack","bit_length","clear","collect_words","connected","counting_sort","defaultdict","deque","dfs","dp","extend","find_max_index","find","heapify","heappop","heappush","insert","insertion_sort","join","ListNode","merge_sort","pop","popleft","print_trie","quick_sort","RECURRENCE_RELATION","remove","shuffle","sort","TreeNode","TrieNode","union","UnionFind","update"],Q=["BASE_CASE","BOOLEAN","CONDITION","CRITERIA","ITERATE_OVER_INPUT","MAXIMUM_POSSIBLE_ANSWER","MINIMUM_POSSIBLE_ANSWER","OTHER_ARGUMENTS","SMALLEST_SUBPROBLEM","START_NODE","STATE_FOR_WHOLE_INPUT","STATE","WINDOW_CONDITION_BROKEN"],z=["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip",...C],T=["__debug__","Ellipsis","False","None","NotImplemented","True",...Q],U=["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union",...D],O={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:d,built_in:z,literal:T,type:U},L={className:"meta",begin:/^(>>>|\.\.\.) /},J={className:"subst",begin:/\{/,end:/\}/,keywords:O,illegal:/#/},tn={begin:/\{\{/,relevance:0},F={className:"string",contains:[u.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[u.BACKSLASH_ESCAPE,L],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[u.BACKSLASH_ESCAPE,L],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[u.BACKSLASH_ESCAPE,L,tn,J]},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[u.BACKSLASH_ESCAPE,L,tn,J]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[u.BACKSLASH_ESCAPE,tn,J]},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[u.BACKSLASH_ESCAPE,tn,J]},u.APOS_STRING_MODE,u.QUOTE_STRING_MODE]},Sn="[0-9](_?[0-9])*",An=`(\\b(${Sn}))?\\.(${Sn})|\\b(${Sn})\\.`,vn=`\\b|${d.join("|")}`,an={className:"number",relevance:0,variants:[{begin:`(\\b(${Sn})|(${An}))[eE][+-]?(${Sn})[jJ]?(?=${vn})`},{begin:`(${An})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${vn})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${vn})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${vn})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${vn})`},{begin:`\\b(${Sn})[jJ](?=${vn})`}]},un={className:"comment",begin:_.lookahead(/# type:/),end:/$/,keywords:O,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},Cn={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:O,contains:["self",L,an,F,u.HASH_COMMENT_MODE,{scope:"params.operator",match:N},{scope:"params.comma",match:","},{scope:"params.self",match:/self/}]}]};return J.contains=[F,an,L],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:O,illegal:/(<\/|\?)|=>/,contains:[L,an,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},F,un,u.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,x],scope:{1:"keyword.def",3:"title.function"},contains:[Cn]},{variants:[{match:[/\bclass/,/\s+/,x,/\s*/,/\(\s*/,x,/\s*\)/]},{match:[/\bclass/,/\s+/,x]}],scope:{1:"keyword.class",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[an,Cn,F]},{scope:"operator",match:N}]}}Ft.registerLanguage("python",v0);Ft.registerLanguage("javascript",p0);Ft.registerLanguage("java",m0);Ft.registerLanguage("cpp",b0);Ft.registerLanguage("ruby",_0);Ft.registerLanguage("lua",x0);function y0({code:u,language:_}){const x=nn.useRef(null),[d,N]=nn.useState(""),[D,C]=nn.useState(""),Q=Zr("hljs",_,zh.code),z=()=>{if(x.current){const F=u.split(`
`).map((Sn,An)=>{const vn=Ft.highlight(Sn,{language:_}).value;return`<span class=${zh.line} data-line-number=${An+1}>${vn}</span>`}).join("");C(F)}},T=()=>{x.current?.querySelectorAll("span[data-line-number]")?.forEach(F=>F.addEventListener("click",L))},U=()=>{x.current?.querySelectorAll("span[data-line-number]")?.forEach(F=>F.removeEventListener("click",L))},O=()=>{x.current?.querySelector(`span[data-line-number="${d}"]`)?.removeAttribute("focused")},L=J=>{const tn=J.currentTarget,F=tn.getAttribute("data-line-number")??"";O(),F===d?N(""):(tn.setAttribute("focused",""),N(F))};return Xh(x,O),nn.useEffect(()=>(z(),T(),()=>U()),[u,D,d]),a.jsx("pre",{ref:x,children:a.jsx("code",{className:Q,dangerouslySetInnerHTML:{__html:D}})})}const T0="_copyButton_1hjzm_1",S0="_copySvg_1hjzm_25",j0="_checkSvg_1hjzm_32",N0="_checkSvgPath_1hjzm_37",E0="_enter_1hjzm_48",A0="_exit_1hjzm_52",Zt={copyButton:T0,copySvg:S0,checkSvg:j0,checkSvgPath:N0,enter:E0,exit:A0};function O0({onClick:u}){const[_,x]=nn.useState("show"),[d,N]=nn.useState("hide"),D=Zr(Zt.copySvg,_==="enter"&&Zt.enter,_==="exit"&&Zt.exit),C=Zr(Zt.checkSvg,d==="exit"&&Zt.exit),Q=Zr(Zt.checkSvgPath),z=()=>{_==="show"&&d==="hide"&&(x("exit"),u())},T=()=>{_==="enter"&&x("show"),_==="exit"&&(x("hide"),N("show"))},U=()=>{d==="show"&&setTimeout(()=>{N("exit")},500),d==="exit"&&(N("hide"),x("enter"))},O=()=>_!=="hide"&&a.jsx("svg",{className:D,viewBox:"0 0 512 512",onAnimationEnd:T,children:a.jsx("path",{d:"M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"})}),L=()=>d!=="hide"&&a.jsx("svg",{className:C,viewBox:"0 0 16 16",onAnimationEnd:U,children:a.jsx("path",{className:Q,d:"M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"})});return a.jsxs("button",{"aria-label":"copy button",className:Zt.copyButton,onClick:z,children:[O(),L()]})}function w0(){return a.jsxs("svg",{viewBox:"0 0 128 128",children:[a.jsxs("linearGradient",{id:"python_svg__a",x1:70.252,x2:170.659,y1:1237.476,y2:1151.089,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[a.jsx("stop",{offset:0,stopColor:"#5A9FD4"}),a.jsx("stop",{offset:1,stopColor:"#306998"})]}),a.jsxs("linearGradient",{id:"python_svg__b",x1:209.474,x2:173.62,y1:1098.811,y2:1149.537,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[a.jsx("stop",{offset:0,stopColor:"#FFD43B"}),a.jsx("stop",{offset:1,stopColor:"#FFE873"})]}),a.jsx("path",{fill:"url(#python_svg__a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721",transform:"translate(0 10.26)"}),a.jsx("path",{fill:"url(#python_svg__b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692",transform:"translate(0 10.26)"}),a.jsxs("radialGradient",{id:"python_svg__c",cx:1825.678,cy:444.45,r:26.743,gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[a.jsx("stop",{offset:0,stopColor:"#B8B8B8",stopOpacity:.498}),a.jsx("stop",{offset:1,stopColor:"#7F7F7F",stopOpacity:0})]}),a.jsx("path",{fill:"url(#python_svg__c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417",opacity:.444})]})}function k0(){return a.jsxs("svg",{viewBox:"0 0 128 128",children:[a.jsx("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),a.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"})]})}function M0(){return a.jsxs("svg",{id:"Layer_1",x:"0px",y:"0px",width:"306px",height:"344.35px",viewBox:"0 0 306 344.35",enableBackground:"new 0 0 306 344.35",children:[a.jsx("path",{fill:"#00599C",d:"M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175L302.107,258.262z"}),a.jsx("path",{fill:"#004482",d:"M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"}),a.jsx("path",{fill:"#659AD2",d:"M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"}),a.jsx("g",{children:a.jsx("path",{fill:"#FFFFFF",d:"M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"})}),a.jsx("g",{children:a.jsx("polygon",{fill:"#FFFFFF",points:"255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 	"})}),a.jsx("g",{children:a.jsx("polygon",{fill:"#FFFFFF",points:"297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 	"})})]})}function R0(){return a.jsxs("svg",{viewBox:"0 0 128 128",children:[a.jsx("path",{fill:"#000080",d:"M112.956.708c-7.912 0-14.335 6.424-14.335 14.336s6.424 14.335 14.335 14.335 14.335-6.41 14.335-14.335c0-7.912-6.424-14.336-14.335-14.336zM64 15.058c-27.02 0-48.956 21.935-48.956 48.955S36.979 112.97 64 112.97c27.02 0 48.956-21.935 48.956-48.956 0-27.02-21.936-48.956-48.956-48.956z"}),a.jsx("path",{fill:"#fff",d:"M84.285 29.392c-7.91 0-14.335 6.424-14.335 14.335s6.424 14.336 14.335 14.336 14.336-6.424 14.336-14.336-6.424-14.335-14.335-14.335zM30.773 56.36v32.119h19.961v-3.611H34.87V56.359Zm57.584 8.37c-3.354 0-6.126.975-7.668 2.692-1.055 1.19-1.488 2.516-1.582 4.801h3.705c.311-2.826 1.988-4.098 5.423-4.098 3.3 0 5.153 1.231 5.153 3.435v.974c0 1.542-.92 2.205-3.827 2.556-5.193.663-5.991.839-7.398 1.407-2.69 1.095-4.057 3.164-4.057 6.166 0 4.193 2.908 6.83 7.574 6.83 2.907 0 5.247-1.014 7.843-3.395.257 2.34 1.407 3.395 3.787 3.395.757 0 1.325-.081 2.515-.392v-2.773a2.917 2.917 0 0 1-.798.095c-1.284 0-1.988-.663-1.988-1.812V71.032c0-4.098-3.002-6.302-8.682-6.302zm-33.742.664V83.19c0 3.84 2.867 6.302 7.357 6.302 3.395 0 5.545-1.19 7.709-4.233v3.219h3.3V65.393h-3.652v13.09c0 4.72-2.475 7.804-6.302 7.804-2.907 0-4.76-1.772-4.76-4.544v-16.35Zm38.773 11.67v4.139c0 1.244-.365 1.988-1.46 3.002-1.502 1.366-3.3 2.07-5.464 2.07-2.867 0-4.544-1.367-4.544-3.706 0-2.42 1.636-3.665 5.558-4.233 3.881-.528 4.68-.703 5.91-1.271z"}),a.jsx("path",{fill:"#808080",d:"M61.733 0a64.06 64.06 0 0 0-5.57.436l.179 1.458a62.596 62.596 0 0 1 5.442-.426zm5.585.046-.075 1.468a62.432 62.432 0 0 1 5.433.52L72.88.578a63.91 63.91 0 0 0-5.561-.532Zm-16.665 1.31a63.301 63.301 0 0 0-5.409 1.398l.43 1.405a61.835 61.835 0 0 1 5.284-1.367Zm27.72.237-.33 1.431a62.536 62.536 0 0 1 5.262 1.455l.452-1.397a63.998 63.998 0 0 0-5.384-1.489ZM39.98 4.623a63.447 63.447 0 0 0-5.081 2.323l.668 1.308a61.98 61.98 0 0 1 4.964-2.27zm49.012.41-.573 1.353a62.539 62.539 0 0 1 4.929 2.346l.688-1.298a64.012 64.012 0 0 0-5.044-2.4ZM30.04 9.706a63.95 63.95 0 0 0-4.6 3.17l.886 1.173a62.484 62.484 0 0 1 4.494-3.098zm-8.906 6.728a64.247 64.247 0 0 0-3.983 3.918l1.075 1.001a62.774 62.774 0 0 1 3.891-3.827zm-7.61 8.165a64.04 64.04 0 0 0-3.247 4.546l1.231.8a62.571 62.571 0 0 1 3.172-4.44zm-6.086 9.357a63.459 63.459 0 0 0-2.408 5.042l1.352.574a61.99 61.99 0 0 1 2.352-4.925zm113.623.973-1.31.667a62.616 62.616 0 0 1 2.263 4.967l1.362-.55a64.073 64.073 0 0 0-2.315-5.083zM3.075 44.23a63.382 63.382 0 0 0-1.49 5.385l1.432.328a61.91 61.91 0 0 1 1.455-5.26Zm122.166 1.049-1.404.429a62.513 62.513 0 0 1 1.366 5.285l1.437-.306a63.983 63.983 0 0 0-1.399-5.409zM.574 55.108a64.093 64.093 0 0 0-.528 5.561l1.467.075a62.622 62.622 0 0 1 .516-5.434Zm126.988 1.088-1.458.179a62.465 62.465 0 0 1 .428 5.441l1.468-.05a63.916 63.916 0 0 0-.438-5.57zM1.468 66.205 0 66.255a64.082 64.082 0 0 0 .435 5.57l1.458-.179a62.61 62.61 0 0 1-.425-5.441Zm125.018 1.071a62.63 62.63 0 0 1-.518 5.434l1.455.203a64.16 64.16 0 0 0 .53-5.561zM2.79 77.031l-1.437.304a63.332 63.332 0 0 0 1.398 5.41l1.405-.43A61.864 61.864 0 0 1 2.79 77.03Zm122.188 1.046a61.966 61.966 0 0 1-1.457 5.26l1.397.454a63.43 63.43 0 0 0 1.492-5.384zM5.981 87.459l-1.362.551a63.434 63.434 0 0 0 2.323 5.082l1.307-.669a61.968 61.968 0 0 1-2.268-4.964Zm115.627.99a61.98 61.98 0 0 1-2.354 4.925l1.296.69a63.447 63.447 0 0 0 2.41-5.04zM10.944 97.17l-1.245.78a63.949 63.949 0 0 0 3.17 4.6l1.172-.885a62.481 62.481 0 0 1-3.097-4.495zm105.534.904a62.546 62.546 0 0 1-3.173 4.44l1.156.906a64.024 64.024 0 0 0 3.249-4.545zm-98.96 7.8-1.092.983a64.235 64.235 0 0 0 3.917 3.983l1.002-1.074a62.77 62.77 0 0 1-3.827-3.892zm92.24.79a62.76 62.76 0 0 1-3.893 3.826l.983 1.092a64.221 64.221 0 0 0 3.984-3.916zm-84.263 6.648-.906 1.157a64.026 64.026 0 0 0 4.546 3.248l.8-1.232a62.554 62.554 0 0 1-4.44-3.173zm76.16.654a62.475 62.475 0 0 1-4.495 3.096l.78 1.245a63.945 63.945 0 0 0 4.6-3.17zm-67.018 5.294-.691 1.296a63.45 63.45 0 0 0 5.04 2.409l.575-1.352a61.984 61.984 0 0 1-4.924-2.353zm57.775.496a61.956 61.956 0 0 1-4.964 2.268l.551 1.362a63.425 63.425 0 0 0 5.082-2.322zm-47.74 3.77-.453 1.396a63.419 63.419 0 0 0 5.385 1.49l.329-1.43a61.949 61.949 0 0 1-5.26-1.456zm37.632.322a62.05 62.05 0 0 1-5.284 1.365l.304 1.437a63.361 63.361 0 0 0 5.41-1.398zm-27.003 2.122-.203 1.455a64.093 64.093 0 0 0 5.561.529l.075-1.467a62.605 62.605 0 0 1-5.433-.517zm16.335.139a62.635 62.635 0 0 1-5.442.424l.05 1.468a64.114 64.114 0 0 0 5.57-.434z"})]})}function L0(){return a.jsxs("svg",{height:"800px",width:"800px",id:"Layer_1",viewBox:"0 0 511.998 511.998",children:[a.jsxs("g",{children:[a.jsx("path",{fill:"#DB380E",d:"M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"}),a.jsx("path",{fill:"#DB380E",d:"M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"})]}),a.jsxs("g",{children:[a.jsx("path",{fill:"#73A1FB",d:"M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"}),a.jsx("path",{fill:"#73A1FB",d:"M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"}),a.jsx("path",{fill:"#73A1FB",d:"M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"}),a.jsx("path",{fill:"#73A1FB",d:"M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"}),a.jsx("path",{fill:"#73A1FB",d:"M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"}),a.jsx("path",{fill:"#73A1FB",d:"M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"})]})]})}function z0(){return a.jsx("svg",{viewBox:"0 0 32 32",children:a.jsx("path",{fill:"#DB380E",d:"M9.456 27.25L28 29.782l-6.27-10.441L9.457 27.25zM29.755 7.705c-.548.823-1.097 1.645-1.644 2.468-1.879 2.827-3.758 5.654-5.635 8.482-.105.158-.24.283-.093.525 1.814 2.995 3.613 5.999 5.417 9 .285.474.572.946.941 1.401l1.094-21.852-.08-.023zm-24.76 9.338c.085.081.296.127.395.079 1.74-.855 3.491-1.691 5.192-2.617.555-.302.982-.842 1.46-1.281 1.583-1.452 3.164-2.907 4.744-4.362.097-.089.211-.176.269-.288.568-1.109 1.125-2.224 1.703-3.371-.689-.259-1.341-.512-2.002-.742-.089-.031-.231.031-.328.085-1.53.854-3.088 1.663-4.569 2.595-.741.466-1.345 1.154-2.001 1.752a263.561 263.561 0 0 0-3.156 2.915 5.385 5.385 0 0 0-.744.872c-.713 1.038-1.404 2.091-2.127 3.173.404.419.772.819 1.165 1.191zm6.358-1.418L8.738 26.672l12.286-7.916-9.671-3.13zM28.692 7.74L18.25 9.484l3.544 8.62L28.693 7.74zm-17.194 7.137l9.479 3.077a46701.83 46701.83 0 0 0-3.506-8.538l-5.973 5.461zm-6.372 4.298l-3.317 7.93 6.318-.187-3.001-7.744zm3.075 5.905l.079-.017c.758-3.154 1.528-6.287 2.303-9.565l-5.069 2.635c.864 2.246 1.785 4.615 2.688 6.947zM27.417 7.229l-3.027-.801c-1.451-.381-2.903-.758-4.353-1.143-.181-.048-.312-.08-.419.139-.512 1.05-1.041 2.092-1.561 3.138-.016.032-.013.074-.025.155l9.383-1.422.002-.066zm-5.853-2.388l8.223 2.275-1.359-3.872-6.852 1.519-.012.077zM8.899 27.856c-1.019-.117-2.064-.009-3.097.008-.849.015-1.697.047-2.545.073a.338.338 0 0 0-.262.114l21.044 1.946.014-.094-6.746-.921c-2.802-.383-5.599-.803-8.408-1.127zm-6.952-3.171c.904-2.097 1.804-4.197 2.712-6.292.091-.21.084-.353-.094-.522-.38-.361-.732-.751-1.147-1.182L1.763 24.86l.061.029c.042-.067.093-.131.124-.203zM19.763 4.287c1.524-.393 3.071-.701 4.608-1.044.099-.022.197-.055.295-.083l-.015-.075-6.606.889c.62.271 1.098.473 1.718.314z"})})}const D0={python:w0,javascript:k0,java:L0,cpp:M0,ruby:z0,lua:R0};function o({title:u,children:_}){const{selectedLanguage:x,setSelectedLanguage:d}=dm(),N=nn.Children.toArray(_),D=N.findIndex(O=>O.props.language===x);let C="";try{C=N[D].props.code}catch{}const Q=N[D].props.language,z=O=>{d(N[O].props.language)},T=()=>navigator.clipboard.writeText(C),U=()=>N.map((O,L)=>{const J=D0[O.props.language],tn=`view ${O.props.language} code`;return a.jsx("button",{role:"tab","aria-label":tn,"aria-selected":L===D,className:os.tabButton,onClick:()=>z(L),children:a.jsx(J,{})},L)});return a.jsxs("div",{role:"tablist",className:os.container,children:[a.jsx("h3",{children:u}),a.jsxs("div",{className:os.buttonContainer,children:[a.jsx("div",{role:"tablist",className:os.tabButtonContainer,children:U()}),a.jsx(O0,{onClick:T})]}),a.jsx("div",{role:"tabpanel",className:"tabs-content",children:a.jsx(y0,{code:C,language:Q})})]})}o.Tab=u=>a.jsx(a.Fragment,{children:u});const B0=`def fn(arr):\r
    ans = 0\r
    left = 0\r
    right = len(arr) - 1\r
\r
    while left < right:\r
        # TODO: logic with left and right\r
        if CONDITION:\r
            left += 1\r
        else:\r
            right -= 1\r
\r
    return ans\r
`,C0=`def fn(arr1, arr2):\r
    i = 0\r
    j = 0\r
    ans = 0\r
\r
    while i < len(arr1) and j < len(arr2):\r
        # TODO: logic\r
        if CONDITION:\r
            i += 1\r
        else:\r
            j += 1\r
\r
    while i < len(arr1):\r
        # TODO: logic\r
        i += 1\r
\r
    while j < len(arr2):\r
        # TODO: logic\r
        j += 1\r
\r
    return ans\r
`,U0=`def fn(arr):\r
    n = len(arr)\r
    window = 0\r
    left = 0\r
    ans = 0\r
\r
    for right in range(n):\r
        # TODO: add arr[right] to window\r
\r
        while WINDOW_CONDITION_BROKEN:\r
            # TODO: remove arr[left] from window\r
            left += 1\r
\r
        # TODO: update ans\r
\r
    return ans\r
`,H0=`def fn(arr):\r
    n = len(arr)\r
    prefix = [arr[0]]\r
\r
    for i in range(1, n):\r
        prefix.append(prefix[-1] + arr[i])\r
\r
    return prefix\r
`,q0=`def fn(strs: list[str]):\r
    ans = []\r
\r
    for char in strs:\r
        ans.append(char)\r
\r
    return ''.join(ans)\r
`,Y0=`const fn = (arr) => {\r
    let ans = 0\r
    let left = 0\r
    let right = arr.length - 1\r
\r
    while (left < right) {\r
        // TODO: logic with left and right\r
        if (CONDITION) {\r
            left++\r
        } else {\r
            right--\r
        }\r
    }\r
\r
    return ans\r
}\r
`,G0=`let fn = (arr1, arr2) => {\r
    let ans = 0\r
    let i = 0\r
    let j = 0\r
\r
    while (i < arr1.length && j < arr2.length) {\r
        // TODO: logic\r
        if (CONDITION) {\r
            i++\r
        } else {\r
            j++\r
        }\r
    }\r
\r
    while (i < arr1.length) {\r
        // TODO: logic\r
        i++\r
    }\r
\r
    while (j < arr2.length) {\r
        // TODO: logic\r
        j++\r
    }\r
\r
    return ans\r
}\r
`,V0=`const fn = (arr) => {\r
    let window = 0\r
    let ans = 0\r
    let left = 0\r
\r
    for (let right = 0; right < arr.length; right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left++\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans\r
}\r
`,K0=`const fn = (arr) => {\r
    let prefix = [arr[0]]\r
\r
    for (let i = 1; i < arr.length; i++) {\r
        prefix.push(prefix[prefix.length - 1] + arr[i])\r
    }\r
\r
    return prefix\r
}\r
`,Q0=`const fn = (arr) => {\r
    let ans = []\r
\r
    for (const c of arr) {\r
        ans.push(c)\r
    }\r
\r
    return ans.join('')\r
}\r
\r
const fn = (arr) => {\r
    let ans = ''\r
\r
    for (const c of arr) {\r
        ans += c\r
    }\r
\r
    return ans\r
}\r
`,J0=`public int fn(int[] arr) {\r
    int ans = 0;\r
    int left = 0;\r
    int right = arr.length - 1;\r
\r
    while (left < right) {\r
        // TODO: logic with left and right\r
        if (CONDITION) {\r
            left++;\r
        } else {\r
            right--;\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,X0=`public int fn(int[] arr1, int[] arr2) {\r
    int i = 0;\r
    int j = 0;\r
    int ans = 0;\r
\r
    while (i < arr1.length && j < arr2.length) {\r
        // TODO: logic\r
        if (CONDITION) {\r
            i++;\r
        } else {\r
            j++;\r
        }\r
    }\r
\r
    while (i < arr1.length) {\r
        // TODO: logic\r
        i++;\r
    }\r
\r
    while (j < arr2.length) {\r
        // TODO: logic\r
        j++;\r
    }\r
\r
    return ans;\r
}\r
`,I0=`public int fn(int[] arr) {\r
    int n = arr.length;\r
    int window = 0;\r
    int left = 0;\r
    int ans = 0;\r
\r
    for (int right = 0; right < arr.length; right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left++;\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans;\r
}\r
`,Z0=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public int[] fn(int[] arr) {\r
    int n = arr.length;\r
    int[] prefix = new int[n];\r
    prefix[0] = arr[0];\r
\r
    for (int i = 1; i < n; i++) {\r
        prefix[i] = prefix[i - 1] + arr[i];\r
    }\r
\r
    return prefix;\r
}\r
`,F0=`public String fn(char[] strs) {\r
    StringBuilder sb = new StringBuilder();\r
\r
    for (char c: strs) {\r
        sb.append(c);\r
    }\r
\r
    return sb.toString();\r
}\r
`,W0=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr) {\r
    int ans = 0;\r
    int left = 0;\r
    int right = arr.size() - 1;\r
\r
    while (left < right) {\r
        // TODO: logic with left and right\r
        if (CONDITION) {\r
            left++;\r
        } else {\r
            right--;\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,P0=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr1, vector<int>& arr2) {\r
    int i = 0;\r
    int j = 0;\r
    int ans = 0;\r
\r
    while (i < arr1.size() && j < arr2.size()) {\r
        // TODO: logic\r
        if (CONDITION) {\r
            i++;\r
        } else {\r
            j++;\r
        }\r
    }\r
\r
    while (i < arr1.size()) {\r
        // TODO: logic\r
        i++;\r
    }\r
\r
    while (j < arr2.size()) {\r
        // TODO: logic\r
        j++;\r
    }\r
\r
    return ans;\r
}\r
`,$0=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr) {\r
    int n = arr.size();\r
    int window = 0;\r
    int left = 0;\r
    int ans = 0;\r
\r
    for (int right = 0; right < n; right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left++;\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans;\r
}\r
`,nb=`#include <iostream>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
vector<int> fn(vector<int>& arr) {\r
    int n = arr.size();\r
    vector<int> prefix;\r
    prefix.push_back(arr[0]);\r
\r
    for (int i = 1; i < n; ++i) {\r
        prefix.push_back(prefix.back() + arr[i]);\r
    }\r
\r
    return prefix;\r
}\r
`,rb=`string fn(vector<char>& arr) {\r
    return string(arr.begin(), arr.end())\r
}\r
`,eb=`def fn(arr)\r
  ans   = 0\r
  left  = 0\r
  right = arr.length - 1\r
\r
  while left < right\r
    # TODO: logic with left and right\r
    if CONDITION\r
      left  += 1\r
    else\r
      right -= 1\r
    end\r
  end\r
\r
  ans\r
end`,tb=`def fn(arr1, arr2)\r
  i, j  = 0, 0\r
  ans   = 0\r
\r
  while i < arr1.length && j < arr2.length\r
    # TODO: Logic\r
    if CONDITION\r
      i += 1\r
    else\r
      j += 1\r
    end\r
  end\r
\r
  while i < arr1.length\r
    # TODO: Logic\r
    i += 1\r
  end\r
\r
  while j < arr2.length\r
    # TODO: Logic\r
    j += 1\r
  end\r
\r
  ans\r
end\r
`,ab=`def fn(arr)\r
  n       = arr.length\r
  window  = 0\r
  left    = 0\r
  result  = 0\r
\r
  (0...n).each do |right|\r
    # TODO: add arr[right] to window\r
\r
    while WINDOW_CONDITION_BROKEN\r
      # TODO: remove arr[left] from window\r
      left += 1\r
    end\r
\r
    # TODO: update result\r
  end\r
\r
  result\r
end\r
`,ib=`# This method computes the prefix sum of an array.\r
# It returns a new array where each element at index i is the sum of elements from index 0 to i-1 in the original array.\r
# # For example, given the array [1, 2, 3], the prefix sum array will be [1, 3, 6].\r
def prefix_sum(arr)\r
  n       = arr.length\r
  prefix  = [arr[0]]\r
\r
  (1...n).each do |i|\r
    prefix << (prefix.last + arr[i])\r
  end\r
\r
  prefix\r
end\r
`,lb=`def fn(strs)\r
  # array of strings/chrs\r
  ans = []\r
\r
  strs.each do |char|\r
    ans << char\r
  end\r
\r
  ans.join('')\r
end\r
\r
# simple\r
def fn2(strs)\r
  strs.join\r
end\r
`,sb=`function fn(arr)
    local ans = 0
    local left = 1
    local right = #arr

    while left < right do
        -- TODO: logic with left and right
        if CONDITION then
            left = left + 1
        else
            right = right - 1
        end
    end

    return ans
end
`,ob=`function fn(arr1, arr2)
    local i = 1
    local j = 1
    local ans = 0

    while i < #arr1 and j < #arr2 do
        -- TODO: logic
        if CONDITION then
            i = i + 1
        else
            j = j + 1
        end
    end

    while i < #arr1 do
        -- TODO: logic
        i = i + 1
    end

    while j < #arr2 do
        -- TODO: logic
        j = j + 1
    end

    return ans
end
`,cb=`function fn(arr)
    local n = #arr
    local window = 0
    local left = 1
    local ans  = 0

    for right = 1, n do
        -- TODO: add arr[right] to window

        while WINDOW_CONDITION_BROKEN do
            -- TODO: remove arr[left] from window
            left = left + 1
        end

        -- TODO: update ans
    end

    return ans
end
`,ub=`function fn(arr)
    local n = #arr
    local prefix = {arr[1]}

    for i = 2, n do
        table.insert(prefix, prefix[#prefix] + arr[i])
    end

    return prefix
end
`,db=`function fn(arr)
    local strings = {}

    for _, s in ipairs(arr) do
        table.insert(strings, s)
    end

    return table.concat(strings, '')
end
`;function fb(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Array"}),a.jsx("section",{id:"array-two-pointers-one-input",children:a.jsxs(o,{title:"two pointers: one input, opposite ends",children:[a.jsx(o.Tab,{code:B0,language:"python"}),a.jsx(o.Tab,{code:Y0,language:"javascript"}),a.jsx(o.Tab,{code:J0,language:"java"}),a.jsx(o.Tab,{code:W0,language:"cpp"}),a.jsx(o.Tab,{code:eb,language:"ruby"}),a.jsx(o.Tab,{code:sb,language:"lua"})]})}),a.jsx("section",{id:"array-two-pointers-two-inputs",children:a.jsxs(o,{title:"two pointers: two inputs, exhaust both",children:[a.jsx(o.Tab,{code:C0,language:"python"}),a.jsx(o.Tab,{code:G0,language:"javascript"}),a.jsx(o.Tab,{code:X0,language:"java"}),a.jsx(o.Tab,{code:P0,language:"cpp"}),a.jsx(o.Tab,{code:tb,language:"ruby"}),a.jsx(o.Tab,{code:ob,language:"lua"})]})}),a.jsx("section",{id:"array-sliding-window",children:a.jsxs(o,{title:"sliding window",children:[a.jsx(o.Tab,{code:U0,language:"python"}),a.jsx(o.Tab,{code:V0,language:"javascript"}),a.jsx(o.Tab,{code:I0,language:"java"}),a.jsx(o.Tab,{code:$0,language:"cpp"}),a.jsx(o.Tab,{code:ab,language:"ruby"}),a.jsx(o.Tab,{code:cb,language:"lua"})]})}),a.jsx("section",{id:"array-prefix-sum",children:a.jsxs(o,{title:"prefix sum",children:[a.jsx(o.Tab,{code:H0,language:"python"}),a.jsx(o.Tab,{code:K0,language:"javascript"}),a.jsx(o.Tab,{code:Z0,language:"java"}),a.jsx(o.Tab,{code:nb,language:"cpp"}),a.jsx(o.Tab,{code:ib,language:"ruby"}),a.jsx(o.Tab,{code:ub,language:"lua"})]})}),a.jsx("section",{id:"array-string-building",children:a.jsxs(o,{title:"efficient string building",children:[a.jsx(o.Tab,{code:q0,language:"python"}),a.jsx(o.Tab,{code:Q0,language:"javascript"}),a.jsx(o.Tab,{code:F0,language:"java"}),a.jsx(o.Tab,{code:rb,language:"cpp"}),a.jsx(o.Tab,{code:lb,language:"ruby"}),a.jsx(o.Tab,{code:db,language:"lua"})]})})]})}const hb=`from collections import defaultdict\r
\r
\r
def fn(arr, k):\r
    counts = defaultdict(int)\r
    counts[0] = 1\r
    ans = curr = 0\r
\r
    for num in arr:\r
        # TODO: logic to change curr\r
        ans += counts[curr - k]\r
        counts[curr] += 1\r
\r
    return ans\r
`,gb=`def fn(arr):\r
    window = set()\r
    ans = 0\r
    left = 0\r
\r
    for right, ELEMENT in enumerate(arr):\r
        # TODO: add arr[right] to window\r
\r
        while WINDOW_CONDITION_BROKEN:\r
            # TODO: remove arr[left] from window\r
            left += 1\r
\r
        # TODO: update ans\r
\r
    return ans\r
`,pb=`const fn = (arr, k) => {\r
    let counts = new Map()\r
    counts.set(0, 1)\r
    let ans = 0\r
    let curr = 0\r
\r
    for (const num of arr) {\r
        // TODO: logic to change curr\r
        ans += counts.get(curr - k) || 0\r
        counts.set(curr, (counts.get(curr) || 0) + 1)\r
    }\r
\r
    return ans\r
}\r
`,mb=`function fn(arr) {\r
    let window = new Set()\r
    let ans = 0\r
    let left = 0\r
\r
    for (let right = 0; right < arr.length; right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left += 1\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans\r
}\r
`,bb=`import java.util.HashMap;\r
import java.util.Map;\r
\r
\r
public int fn(int[] arr, int k) {\r
    Map<Integer, Integer> counts = new HashMap<>();\r
    counts.put(0, 1);\r
    int ans = 0;\r
    int curr = 0;\r
\r
    for (int num: arr) {\r
        // TODO: logic to change curr\r
        ans += counts.getOrDefault(curr - k, 0);\r
        counts.put(curr, counts.getOrDefault(curr, 0) + 1);\r
    }\r
\r
    return ans;\r
}\r
`,_b=`import java.util.HashSet;\r
import java.util.Set;\r
\r
\r
public int fn(int[] arr) {\r
    Set<Integer> window = new HashSet<>();\r
    int ans = 0;\r
    int left = 0;\r
\r
    for (int right = 0; right < arr.length; right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left++;\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans;\r
}\r
`,xb=`#include <vector>\r
#include <unordered_map>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr, int k) {\r
    unordered_map<int, int> counts;\r
    counts[0] = 1;\r
    int ans = 0;\r
    int curr = 0;\r
\r
    for (int num : arr) {\r
        // TODO: logic to change curr\r
        ans += counts[curr - k];\r
        counts[curr]++;\r
    }\r
\r
    return ans;\r
}\r
`,vb=`#include <vector>\r
#include <unordered_set>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr) {\r
    unordered_set<int> window;\r
    int ans = 0;\r
    int left = 0;\r
\r
    for (int right = 0; right < arr.size(); right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left++;\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans;\r
}\r
`,yb=`def fn(arr, k)\r
  counts    = Hash.new(0)\r
  counts[0] = 1\r
  ans       = 0\r
  curr      = 0\r
\r
  arr.each do |num|\r
    # TODO: logic to change curr\r
    ans += counts[curr - k]\r
    counts[curr] += 1\r
  end\r
\r
  ans\r
end\r
`,Tb=`require 'set'\r
\r
def fn(arr)\r
  window  = Set.new\r
  ans     = 0\r
  left    = 0\r
\r
  arr.each_with_index do |ELEMENT, right|\r
    # TODO: add arr[right] to window\r
\r
    while WINDOW_CONDITION_BROKEN\r
      # TODO: remove arr[left] from window\r
      left += 1\r
    end\r
\r
    # TODO: update ans\r
  end\r
\r
  ans\r
end\r
`,Sb=`function fn(arr, k)
    local counts = {}
    counts[0] = 1
    local ans = 0
    local curr = 0

    for _, num in ipairs(arr) do
        -- TODO: logic to change curr
        ans = ans + (counts[curr - k] or 0)
        counts[curr] = (counts[curr] or 0) + 1
    end

    return ans
end
`,jb=`function fn(arr)
    local n = #arr
    local window = 0
    local left = 1
    local ans = 0

    for right = 1, n do
        -- TODO: add arr[right] to window

        while WINDOW_CONDITION_BROKEN do
            -- TODO: remove arr[left] from window
            left = left + 1
        end

        -- TODO: update ans
    end

    return ans
end
`;function Nb(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Hash Map"}),a.jsx("section",{id:"hashmap-find-number-of-subarrays",children:a.jsxs(o,{title:"find number of subarrays that fit an exact criteria",children:[a.jsx(o.Tab,{code:hb,language:"python"}),a.jsx(o.Tab,{code:pb,language:"javascript"}),a.jsx(o.Tab,{code:bb,language:"java"}),a.jsx(o.Tab,{code:xb,language:"cpp"}),a.jsx(o.Tab,{code:yb,language:"ruby"}),a.jsx(o.Tab,{code:Sb,language:"lua"})]})}),a.jsx("section",{id:"hashmap-sliding-window",children:a.jsxs(o,{title:"sliding window",children:[a.jsx(o.Tab,{code:gb,language:"python"}),a.jsx(o.Tab,{code:mb,language:"javascript"}),a.jsx(o.Tab,{code:_b,language:"java"}),a.jsx(o.Tab,{code:vb,language:"cpp"}),a.jsx(o.Tab,{code:Tb,language:"ruby"}),a.jsx(o.Tab,{code:jb,language:"lua"})]})})]})}const Eb=`def fn(head):\r
    slow = head\r
    fast = head\r
    ans = 0\r
\r
    while fast and fast.next:\r
        # TODO: logic\r
        slow = slow.next\r
        fast = fast.next.next\r
\r
    return ans\r
`,Ab=`def fn(head):\r
    prev = None\r
    curr = head\r
\r
    while curr:\r
        nxt = curr.next\r
        curr.next = prev\r
        prev = curr\r
        curr = nxt\r
\r
    return prev\r
`,Ob=`const fn = (head) => {\r
    let ans = 0\r
    let slow = head\r
    let fast = head\r
\r
    while (fast && fast.next) {\r
        // TODO: logic\r
        slow = slow.next\r
        fast = fast.next.next\r
    }\r
\r
    return ans\r
}\r
`,wb=`const fn = (head) => {\r
    let prev = null\r
    let curr = head\r
\r
    while (curr) {\r
        let next = curr.next\r
        curr.next = prev\r
        prev = curr\r
        curr = next\r
    }\r
\r
    return prev\r
}\r
`,kb=`public int fn(ListNode head) {\r
    ListNode slow = head;\r
    ListNode fast = head;\r
    int ans = 0;\r
\r
    while (fast != null && fast.next != null) {\r
        // TODO: logic\r
        slow = slow.next;\r
        fast = fast.next.next;\r
    }\r
\r
    return ans;\r
}\r
`,Mb=`public ListNode fn(ListNode head) {\r
    ListNode curr = head;\r
    ListNode prev = null;\r
\r
    while (curr != null) {\r
        ListNode nextNode = curr.next;\r
        curr.next = prev;\r
        prev = curr;\r
        curr = nextNode;\r
    }\r
\r
    return prev;\r
}\r
`,Rb=`int fn(ListNode* head) {\r
    ListNode* slow = head;\r
    ListNode* fast = head;\r
    int ans = 0;\r
\r
    while (fast && fast->next) {\r
        // TODO: logic\r
        slow = slow->next;\r
        fast = fast->next->next;\r
    }\r
\r
    return ans;\r
}\r
`,Lb=`ListNode* fn(ListNode* head) {\r
    ListNode* prev = nullptr;\r
    ListNode* curr = head;\r
\r
    while (curr) {\r
        ListNode* nxt = curr->next;\r
        curr->next = prev;\r
        prev = curr;\r
        curr = nxt;\r
    }\r
\r
    return prev;\r
}\r
`,zb=`def fn(head)\r
  slow  = head\r
  fast  = head\r
  ans   = 0\r
\r
  until fast.nil? || fast.next.nil?\r
    # TODO: logic\r
    slow = slow.next\r
    fast = fast.next.next\r
  end\r
\r
  ans\r
end\r
`,Db=`def fn(head)\r
  prev = nil\r
  curr = head\r
\r
  until curr.nil?\r
    nxt = curr.next\r
    curr.next = prev\r
    prev = curr\r
    curr = nxt\r
  end\r
\r
  prev\r
end\r
`,Bb=`function fn(head)
    local slow = head
    local fast = head
    local ans = 0

    while fast and fast.next do
        -- TODO: logic
        slow = slow.next
        fast = fast.next.next
    end

    return ans
end
`,Cb=`function fn(head)
    local prev = nil
    local curr = head

    while curr do
        local nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    end

    return prev
end
`;function Ub(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Linked List"}),a.jsx("section",{id:"linkedlist-fast-and-slow-pointer",children:a.jsxs(o,{title:"fast and slow pointer",children:[a.jsx(o.Tab,{code:Eb,language:"python"}),a.jsx(o.Tab,{code:Ob,language:"javascript"}),a.jsx(o.Tab,{code:kb,language:"java"}),a.jsx(o.Tab,{code:Rb,language:"cpp"}),a.jsx(o.Tab,{code:zb,language:"ruby"}),a.jsx(o.Tab,{code:Bb,language:"lua"})]})}),a.jsx("section",{id:"linkedlist-reverse",children:a.jsxs(o,{title:"reverse linked list",children:[a.jsx(o.Tab,{code:Ab,language:"python"}),a.jsx(o.Tab,{code:wb,language:"javascript"}),a.jsx(o.Tab,{code:Mb,language:"java"}),a.jsx(o.Tab,{code:Lb,language:"cpp"}),a.jsx(o.Tab,{code:Db,language:"ruby"}),a.jsx(o.Tab,{code:Cb,language:"lua"})]})})]})}const Hb=`def fn(arr):\r
    stack = []\r
    ans = 0\r
\r
    for num in arr:\r
        while stack and stack[-1] > num:\r
            # TODO: logic\r
            stack.pop()\r
        stack.append(num)\r
\r
    return ans\r
`,qb=`def fn(arr):\r
    stack = []\r
    ans = 0\r
\r
    for num in arr:\r
        while stack and stack[-1] < num:\r
            # TODO: logic\r
            stack.pop()\r
        stack.append(num)\r
\r
    return ans\r
`,Yb=`const fn = (arr) => {\r
    let stack = []\r
    let ans = 0\r
\r
    for (const num of arr) {\r
        while (stack.length && stack[stack.length - 1] > num) {\r
            // TODO: logic\r
            stack.pop()\r
        }\r
\r
        stack.push(num)\r
    }\r
\r
    return ans\r
}\r
`,Gb=`const fn = (arr) => {\r
    let stack = []\r
    let ans = 0\r
\r
    for (const num of arr) {\r
        while (stack.length && stack[stack.length - 1] < num) {\r
            // TODO: logic\r
            stack.pop()\r
        }\r
\r
        stack.push(num)\r
    }\r
\r
    return ans\r
}\r
`,Vb=`import java.util.Stack;\r
\r
\r
public int fn(int[] arr) {\r
    Stack<Integer> stack = new Stack<>();\r
    int ans = 0;\r
\r
    for (int num : arr) {\r
        while (!stack.isEmpty() && stack.peek() > num) {\r
            // TODO: logic\r
            stack.pop();\r
        }\r
        stack.push(num);\r
    }\r
\r
    return ans;\r
}\r
`,Kb=`import java.util.Stack;\r
\r
\r
public int fn(int[] arr) {\r
    Stack<Integer> stack = new Stack<>();\r
    int ans = 0;\r
\r
    for (int num : arr) {\r
        while (!stack.isEmpty() && stack.peek() < num) {\r
            // TODO: logic\r
            stack.pop();\r
        }\r
        stack.push(num);\r
    }\r
\r
    return ans;\r
}\r
`,Qb=`#include <stack>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr) {\r
    stack<int> stack;\r
    int ans = 0;\r
\r
    for (int num : arr) {\r
        while (!stack.empty() && stack.top() > num) {\r
            // TODO: logic\r
            stack.pop();\r
        }\r
        stack.push(num);\r
    }\r
\r
    return ans;\r
}\r
`,Jb=`#include <stack>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr) {\r
    stack<int> stack;\r
    int ans = 0;\r
\r
    for (int num : arr) {\r
        while (!stack.empty() && stack.top() < num) {\r
            // TODO: logic\r
            stack.pop();\r
        }\r
        stack.push(num);\r
    }\r
\r
    return ans;\r
}\r
`,Xb=`def fn(arr)\r
  stack = []\r
  ans   = 0\r
\r
  arr.each do |num|\r
    while !stack.empty? && stack[-1] > num\r
      # TODO: logic\r
      stack.pop\r
    end\r
    stack << num\r
  end\r
\r
  ans\r
end\r
`,Ib=`def fn(arr)\r
  stack = []\r
  ans   = 0\r
\r
  arr.each do |num|\r
    while !stack.empty? && stack[-1] < num\r
      # TODO: logic\r
      stack.pop\r
    end\r
    stack << num\r
  end\r
\r
  ans\r
end\r
`,Zb=`function fn(arr)
    local stack = {}
    local ans = 0

    for _, num in ipairs(arr) do
        while #stack > 0 and stack[#stack] > num do
            -- TODO: logic
            table.remove(stack)
        end
        table.insert(stack, num)
    end

    return ans
end
`,Fb=`function fn(arr)
    local stack = {}
    local ans = 0

    for _, num in ipairs(arr) do
        while #stack > 0 and stack[#stack] < num do
            -- TODO: logic
            table.remove(stack)
        end
        table.insert(stack, num)
    end

    return ans
end
`;function Wb(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Stack"}),a.jsx("section",{id:"stack-monotonic-increasing",children:a.jsxs(o,{title:"monotonic increasing stack",children:[a.jsx(o.Tab,{code:Hb,language:"python"}),a.jsx(o.Tab,{code:Yb,language:"javascript"}),a.jsx(o.Tab,{code:Vb,language:"java"}),a.jsx(o.Tab,{code:Qb,language:"cpp"}),a.jsx(o.Tab,{code:Xb,language:"ruby"}),a.jsx(o.Tab,{code:Zb,language:"lua"})]})}),a.jsx("section",{id:"stack-monotonic-decreasing",children:a.jsxs(o,{title:"monotonic decreasing stack",children:[a.jsx(o.Tab,{code:qb,language:"python"}),a.jsx(o.Tab,{code:Gb,language:"javascript"}),a.jsx(o.Tab,{code:Kb,language:"java"}),a.jsx(o.Tab,{code:Jb,language:"cpp"}),a.jsx(o.Tab,{code:Ib,language:"ruby"}),a.jsx(o.Tab,{code:Fb,language:"lua"})]})})]})}const Pb=`def dfs(root):\r
    if not root:\r
        return\r
\r
    ans = 0\r
\r
    # TODO: logic\r
    dfs(root.left)\r
    dfs(root.right)\r
\r
    return ans\r
`,$b=`def dfs(root):\r
    stack = [root]\r
    ans = 0\r
\r
    while stack:\r
        node = stack.pop()\r
        # TODO: logic\r
        if node.left:\r
            stack.append(node.left)\r
        if node.right:\r
            stack.append(node.right)\r
\r
    return ans\r
`,n_=`from collections import deque\r
\r
\r
def fn(root):\r
    que = deque([root])\r
    ans = 0\r
\r
    while que:\r
        current_length = len(que)\r
        # TODO: logic for current level\r
        for _ in range(current_length):\r
            node = que.popleft()\r
            # TODO: logic\r
            if node.left:\r
                que.append(node.left)\r
            if node.right:\r
                que.append(node.right)\r
\r
    return ans\r
`,r_=`const dfs = (root) => {\r
    if (!root) {\r
        return\r
    }\r
\r
    let ans = 0\r
\r
    // TODO: logic\r
    dfs(root.left)\r
    dfs(root.right)\r
\r
    return ans\r
}\r
`,e_=`const dfs = (root) => {\r
    let stack = [root]\r
    let ans = 0\r
\r
    while (stack.length) {\r
        let node = stack.pop()\r
        // TODO: logic\r
        if (node.left) {\r
            stack.push(node.left)\r
        }\r
        if (node.right) {\r
            stack.push(node.right)\r
        }\r
    }\r
\r
    return ans\r
}\r
`,t_=`const fn = (root) => {\r
    let que = [root]\r
    let ans = 0\r
\r
    while (que.length) {\r
        let currentLength = que.length\r
        let nextQue = []\r
        // TODO: logic for current level\r
\r
        for (let i = 0; i < currentLength; i++) {\r
            let node = que[i]\r
            // TODO: logic\r
            if (node.left) {\r
                nextQue.push(node.left)\r
            }\r
            if (node.right) {\r
                nextQue.push(node.right)\r
            }\r
        }\r
\r
        que = nextQue\r
    }\r
\r
    return ans\r
}\r
`,a_=`public int dfs(TreeNode root) {\r
    if (root == null) {\r
        return 0;\r
    }\r
\r
    int ans = 0;\r
\r
    // TODO: logic\r
    ans += dfs(root.left);\r
    ans += dfs(root.right);\r
\r
    return ans;\r
}\r
`,i_=`import java.util.Stack;\r
\r
\r
public int dfs(TreeNode root) {\r
    Stack<TreeNode> stack = new Stack<>();\r
    stack.push(root);\r
    int ans = 0;\r
\r
    while (!stack.isEmpty()) {\r
        TreeNode node = stack.pop();\r
        // TODO: logic\r
        if (node.left != null) {\r
            stack.push(node.left);\r
        }\r
        if (node.right != null) {\r
            stack.push(node.right);\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,l_=`import java.util.LinkedList;\r
import java.util.Queue;\r
\r
\r
public int fn(TreeNode root) {\r
    Queue<TreeNode> que = new LinkedList<>();\r
    que.add(root);\r
    int ans = 0;\r
\r
    while (!que.isEmpty()) {\r
        int currentLength = que.size();\r
        // TODO: logic for current level\r
        for (int i = 0; i < currentLength; i++) {\r
            TreeNode node = que.remove();\r
            // TODO: logic\r
            if (node.left != null) {\r
                que.add(node.left);\r
            }\r
            if (node.right != null) {\r
                que.add(node.right);\r
            }\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,s_=`int dfs(TreeNode* root) {\r
    if (root == nullptr) {\r
        return 0;\r
    }\r
\r
    int ans = 0;\r
\r
    // TODO: logic\r
    dfs(root.left);\r
    dfs(root.right);\r
\r
    return ans;\r
}\r
`,o_=`#include <stack>\r
\r
using namespace std;\r
\r
\r
int dfs(TreeNode* root) {\r
    stack<TreeNode*> stack;\r
    stack.push(root);\r
    int ans = 0;\r
\r
    while (!stack.empty()) {\r
        TreeNode* node = stack.top();\r
        stack.pop();\r
        // TODO: logic\r
        if (node->left) {\r
            stack.push(node->left);\r
        }\r
        if (node->right) {\r
            stack.push(node->right);\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,c_=`#include <queue>\r
\r
using namespace std;\r
\r
\r
int fn(TreeNode* root) {\r
    queue<TreeNode*> que;\r
    que.push(root);\r
    int ans = 0;\r
\r
    while (!que.empty()) {\r
        int currentLength = que.size();\r
        // TODO: logic for current level\r
\r
        for (int i = 0; i < currentLength; i++) {\r
            TreeNode* node = que.front();\r
            que.pop();\r
            // TODO: logic\r
            if (node->left != nullptr) {\r
                que.push(node->left);\r
            }\r
            if (node->right != nullptr) {\r
                que.push(node->right);\r
            }\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,u_=`def dfs(root)\r
  return unless root\r
\r
  ans = 0\r
\r
  # TODO: logic\r
  dfs(root.left)\r
  dfs(root.right)\r
\r
  ans\r
end\r
`,d_=`def dfs(root)\r
  stack = [root]\r
  ans   = 0\r
\r
  until stack.empty?\r
    node = stack.pop\r
    # TODO: logic\r
\r
    stack << node.left if node.left\r
    stack << node.right if node.right\r
  end\r
\r
  ans\r
end\r
`,f_=`def fn(root)\r
  queue = [root]\r
  ans   = 0\r
\r
  until queue.empty?\r
    current_length = queue.length\r
    # TODO: logic for current level\r
\r
    current_length.times do\r
      node = queue.shift\r
      # TODO: logic\r
\r
      queue << node.left if node.left\r
      queue << node.right if node.right\r
    end\r
  end\r
\r
  ans\r
end\r
`,h_=`function dfs(root)
    if not root then
        return
    end

    local ans = 0

    -- TODO: logic
    dfs(root.left)
    dfs(root.right)

    return ans
end
`,g_=`function dfs(root)
    local stack = [root]
    local ans = 0

    while stack do
        local node = table.remove(stack)
        -- TODO: logic
        if node.left then
            table.insert(stack, node.left)
        end
        if node.right then
            table.insert(stack, node.right)

        end
    end

    return ans
end
`,p_=`function fn(root)
    local que = Deque([root])
    local ans = 0

    while que do
        local current_length = #que
        -- TODO: logic for current level
        for _ = 0, current_length - 1 do
            local node = que.popleft()
            -- TODO: logic
            if node.left then
                table.insert(que, node.left)
            end
            if node.right then
                table.insert(que, node.right)

            end
        end
    end

    return ans
end
`;function m_(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Binary Tree"}),a.jsx("section",{id:"tree-dfs-recursive",children:a.jsxs(o,{title:"DFS (recursive)",children:[a.jsx(o.Tab,{code:Pb,language:"python"}),a.jsx(o.Tab,{code:r_,language:"javascript"}),a.jsx(o.Tab,{code:a_,language:"java"}),a.jsx(o.Tab,{code:s_,language:"cpp"}),a.jsx(o.Tab,{code:u_,language:"ruby"}),a.jsx(o.Tab,{code:h_,language:"lua"})]})}),a.jsx("section",{id:"tree-dfs-iterative",children:a.jsxs(o,{title:"DFS (iterative)",children:[a.jsx(o.Tab,{code:$b,language:"python"}),a.jsx(o.Tab,{code:e_,language:"javascript"}),a.jsx(o.Tab,{code:i_,language:"java"}),a.jsx(o.Tab,{code:o_,language:"cpp"}),a.jsx(o.Tab,{code:d_,language:"ruby"}),a.jsx(o.Tab,{code:g_,language:"lua"})]})}),a.jsx("section",{id:"tree-bfs",children:a.jsxs(o,{title:"BFS",children:[a.jsx(o.Tab,{code:n_,language:"python"}),a.jsx(o.Tab,{code:t_,language:"javascript"}),a.jsx(o.Tab,{code:l_,language:"java"}),a.jsx(o.Tab,{code:c_,language:"cpp"}),a.jsx(o.Tab,{code:f_,language:"ruby"}),a.jsx(o.Tab,{code:p_,language:"lua"})]})})]})}const b_=`def fn(graph):\r
    def dfs(node):\r
        ans = 0\r
        # TODO: logic\r
        for neighbor in graph[node]:\r
            if neighbor not in seen:\r
                seen.add(neighbor)\r
                ans += dfs(neighbor)\r
\r
        return ans\r
\r
    seen = {START_NODE}\r
\r
    return dfs(START_NODE)\r
`,__=`def fn(graph):\r
    stack = [START_NODE]\r
    seen = {START_NODE}\r
    ans = 0\r
\r
    while stack:\r
        node = stack.pop()\r
        # TODO: logic\r
        for neighbor in graph[node]:\r
            if neighbor not in seen:\r
                seen.add(neighbor)\r
                stack.append(neighbor)\r
\r
    return ans\r
`,x_=`from collections import deque\r
\r
\r
def fn(graph):\r
    que = deque([START_NODE])\r
    seen = {START_NODE}\r
    ans = 0\r
\r
    while que:\r
        node = que.popleft()\r
        # TODO: logic\r
        for neighbor in graph[node]:\r
            if neighbor not in seen:\r
                seen.add(neighbor)\r
                que.append(neighbor)\r
\r
    return ans\r
`,v_=`from heapq import heappop, heappush\r
\r
\r
def dijkstras(graph: list[list[tuple[int, int]]], source: int) -> list[int]:\r
    n = len(graph)\r
    distances = [float('inf')] * n\r
    distances[source] = 0\r
    heap = [(0, source)]\r
\r
    while heap:\r
        curr_dist, node = heappop(heap)\r
\r
        if curr_dist > distances[node]:\r
            continue\r
\r
        for neighbor, weight in graph[node]:\r
            dist = curr_dist + weight\r
\r
            if dist < distances[neighbor]:\r
                distances[neighbor] = dist\r
                heappush(heap, (dist, neighbor))\r
\r
    return distances\r
`,y_=`def bellman_ford(n: int, edges: list[tuple[int, int, int]], source: int) -> list[int]:\r
    distances = [float('inf')] * n\r
    distances[source] = 0\r
\r
    for _ in range(n - 1):\r
        for u, v, w in edges:\r
            if distances[u] != float('inf') and distances[u] + w < distances[v]:\r
                distances[v] = distances[u] + w\r
\r
    for u, v, w in edges:\r
        if distances[u] != float('inf') and distances[u] + w < distances[v]:\r
            return []\r
\r
    return distances\r
`,T_=`from collections import defaultdict, deque\r
\r
\r
def kahn_topological_sort(graph: dict[int, list[int]]) -> list[int]:\r
    result = []\r
    indegree = defaultdict(int)\r
\r
    for vertices in graph.values():\r
        for v in vertices:\r
            indegree[v] += 1\r
\r
    que = deque([node for node in graph if not indegree[node]])\r
\r
    while que:\r
        node = que.popleft()\r
        result.append(node)\r
\r
        for neighbor in graph[node]:\r
            indegree[neighbor] -= 1\r
\r
            if not indegree[neighbor]:\r
                que.append(neighbor)\r
\r
    return result if len(result) == len(graph) else []\r
`,S_=`def kruskal_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:\r
    mst = []\r
    uf = UnionFind(n)\r
    edges.sort()\r
\r
    for w, u, v in edges:\r
        if not uf.connected(u, v):\r
            uf.union(u, v)\r
            mst.append((w, u, v))\r
\r
    return mst\r
`,j_=`from heapq import heappop\r
\r
\r
def prim_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:\r
    mst = []\r
    uf = UnionFind(n)\r
    edges.sort()\r
\r
    while edges:\r
        w, u, v = heappop(edges)\r
\r
        if not uf.connected(u, v):\r
            uf.union(u, v)\r
            mst.append((w, u, v))\r
\r
    return mst\r
`,N_=`const fn = (graph) => {\r
    const dfs = (node) => {\r
        let ans = 0\r
        // TODO: logic\r
        for (const neighbor of graph[node]) {\r
            if (!seen.has(neighbor)) {\r
                seen.add(neighbor)\r
                ans += dfs(neighbor)\r
            }\r
        }\r
\r
        return ans\r
    }\r
\r
    let seen = new Set([START_NODE])\r
\r
    return dfs(START_NODE)\r
}\r
`,E_=`const fn = (graph) => {\r
    let stack = [START_NODE]\r
    let seen = new Set([START_NODE])\r
    let ans = 0\r
\r
    while (stack.length) {\r
        let node = stack.pop()\r
        // TODO: logic\r
        for (const neighbor of graph[node]) {\r
            if (!seen.has(neighbor)) {\r
                seen.add(neighbor)\r
                stack.push(neighbor)\r
            }\r
        }\r
    }\r
\r
    return ans\r
}\r
`,A_=`const fn = (graph) => {\r
    let que = [START_NODE]\r
    let seen = new Set([START_NODE])\r
    let ans = 0\r
\r
    while (que.length) {\r
        let currentLength = que.length\r
        let nextQue = []\r
\r
        for (let i = 0; i < currentLength; i++) {\r
            let node = que[i]\r
            // TODO: logic\r
            for (const neighbor of graph[node]) {\r
                if (!seen.has(neighbor)) {\r
                    seen.add(neighbor)\r
                    nextQue.push(neighbor)\r
                }\r
            }\r
        }\r
\r
        que = nextQue\r
    }\r
\r
    return ans\r
}\r
`,O_=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,w_=`const bellmanFord = (n, edges, source) => {\r
    let distances = new Array(n).fill(Infinity)\r
    distances[source] = 0\r
\r
    for (let i = 0; i < n - 1; i++) {\r
        for (let j = 0; j < edges.length; j++) {\r
            let [u, v, w] = edges[j]\r
\r
            if (distances[u] !== Infinity && distances[u] + w < distances[v]) {\r
                distances[v] = distances[u] + w\r
            }\r
        }\r
    }\r
\r
    for (let i = 0; i < edges.length; i++) {\r
        let [u, v, w] = edges[i]\r
\r
        if (distances[u] !== Infinity && distances[u] + w < distances[v]) {\r
            return []\r
        }\r
    }\r
\r
    return distances\r
}\r
`,k_=`const kahnTopologicalSort = (graph) => {\r
    const result = []\r
    const queue = []\r
    const indegree = new Map()\r
\r
    for (let nodes of Object.values(graph)) {\r
        for (let node of nodes) {\r
            if (indegree.has(node)) {\r
                indegree.set(node, indegree.get(node) + 1)\r
            } else {\r
                indegree.set(node, 1)\r
            }\r
        }\r
    }\r
\r
    for (let node of Object.keys(graph)) {\r
        if (!indegree.has(node)) {\r
            queue.push(node)\r
        }\r
    }\r
\r
    while (queue.length > 0) {\r
        const node = queue.shift()\r
        result.push(node)\r
\r
        if (graph[node]) {\r
            for (let neighbor of graph[node]) {\r
                indegree.set(neighbor, indegree.get(neighbor) - 1)\r
\r
                if (indegree.get(neighbor) === 0) {\r
                    queue.push(neighbor)\r
                }\r
            }\r
        }\r
    }\r
\r
    return result.length === Object.keys(graph).length ? result : []\r
}\r
`,M_=`const kruskalMst = (n, edges) => {\r
    let mst = []\r
    let uf = new UnionFind(n)\r
\r
    edges.sort((a, b) => a[0] - b[0])\r
\r
    for (let i = 0; i < edges.length; i++) {\r
        let [w, u, v] = edges[i]\r
\r
        if (!uf.connected(u, v)) {\r
            uf.union(u, v)\r
            mst.push([w, u, v])\r
        }\r
    }\r
\r
    return mst\r
}\r
`,R_=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,L_=`import java.util.HashSet;\r
import java.util.Set;\r
\r
\r
Set<Integer> seen = new HashSet<>();\r
\r
public int fn(int[][] graph) {\r
    seen.add(START_NODE);\r
    return dfs(START_NODE, graph);\r
}\r
\r
public int dfs(int node, int[][] graph) {\r
    int ans = 0;\r
    // TODO: logic\r
    for (int neighbor: graph[node]) {\r
        if (!seen.contains(neighbor)) {\r
            seen.add(neighbor);\r
            ans += dfs(neighbor, graph);\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,z_=`import java.util.Stack;\r
import java.util.HashSet;\r
import java.util.Set;\r
\r
\r
public int fn(int[][] graph) {\r
    Stack<Integer> stack = new Stack<>();\r
    Set<Integer> seen = new HashSet<>();\r
    stack.push(START_NODE);\r
    seen.add(START_NODE);\r
    int ans = 0;\r
\r
    while (!stack.empty()) {\r
        int node = stack.pop();\r
        // TODO: logic\r
        for (int neighbor: graph[node]) {\r
            if (!seen.contains(neighbor)) {\r
                seen.add(neighbor);\r
                stack.push(neighbor);\r
            }\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,D_=`import java.util.ArrayList;\r
import java.util.HashSet;\r
import java.util.LinkedList;\r
import java.util.List;\r
import java.util.Map;\r
import java.util.Queue;\r
import java.util.Set;\r
\r
\r
public int fn(int[][] graph) {\r
    Queue<Integer> que = new LinkedList<>();\r
    Set<Integer> seen = new HashSet<>();\r
    que.offer(START_NODE);\r
    seen.add(START_NODE);\r
    int ans = 0;\r
\r
    while (!que.isEmpty()) {\r
        int node = que.remove();\r
        // TODO: Logic\r
        for (int neighbor: graph[node]) {\r
            if (!seen.contains(neighbor)) {\r
                seen.add(neighbor);\r
                que.add(neighbor);\r
            }\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,B_=`import java.util.Arrays;\r
import java.util.Comparator;\r
import java.util.PriorityQueue;\r
import java.util.Queue;\r
import java.util.List;\r
\r
\r
public int[] dijkstras(List<List<int[]>> graph, int source) {\r
    int n = graph.size();\r
    int[] distances = new int[n];\r
    Arrays.fill(distances, Integer.MAX_VALUE);\r
    distances[source] = 0;\r
\r
    PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));\r
    pq.offer(new int[]{source, 0});\r
\r
    while (!pq.isEmpty()) {\r
        int[] curr = pq.poll();\r
        int node = curr[0];\r
        int dist = curr[1];\r
\r
        if (dist > distances[node]) {\r
            continue;\r
        }\r
\r
        for (int[] edge : graph.get(node)) {\r
            int neighbor = edge[0];\r
            int weight = edge[1];\r
            int newDist = dist + weight;\r
\r
            if (newDist < distances[neighbor]) {\r
                distances[neighbor] = newDist;\r
                pq.offer(new int[]{neighbor, newDist});\r
            }\r
        }\r
    }\r
\r
    return distances;\r
}\r
`,C_=`import java.util.Arrays;\r
import java.util.List;\r
\r
\r
public int[] bellmanFord(int n, List<int[]> edges, int source) {\r
    int[] distances = new int[n];\r
    Arrays.fill(distances, Integer.MAX_VALUE);\r
    distances[source] = 0;\r
\r
    for (int i = 0; i < n - 1; i++) {\r
        for (int[] edge : edges) {\r
            int u = edge[0];\r
            int v = edge[1];\r
            int w = edge[2];\r
\r
            if (distances[u] != Integer.MAX_VALUE && distances[u] + w < distances[v]) {\r
                distances[v] = distances[u] + w;\r
            }\r
        }\r
    }\r
\r
    for (int[] edge : edges) {\r
        int u = edge[0];\r
        int v = edge[1];\r
        int w = edge[2];\r
\r
        if (distances[u] != Integer.MAX_VALUE && distances[u] + w < distances[v]) {\r
            return new int[]{};\r
        }\r
    }\r
\r
    return distances;\r
}\r
`,U_=`import java.util.ArrayList;\r
import java.util.HashMap;\r
import java.util.LinkedList;\r
import java.util.List;\r
import java.util.Map;\r
import java.util.Queue;\r
\r
\r
public static List<Integer> kahnTopologicalSort(Map<Integer, List<Integer>> graph) {\r
    List<Integer> result = new ArrayList<>();\r
    Map<Integer, Integer> indegree = new HashMap<>();\r
    Queue<Integer> que = new LinkedList<>();\r
\r
    for (List<Integer> vertices : graph.values()) {\r
        for (int v : vertices) {\r
            indegree.put(v, indegree.getOrDefault(v, 0) + 1);\r
        }\r
    }\r
\r
    for (Integer node : graph.keySet()) {\r
        if (!indegree.containsKey(node)) {\r
            que.offer(node);\r
        }\r
    }\r
\r
    while (!que.isEmpty()) {\r
        int node = que.poll();\r
        result.add(node);\r
\r
        if (graph.containsKey(node)) {\r
            for (int neighbor : graph.get(node)) {\r
                indegree.put(neighbor, indegree.get(neighbor) - 1);\r
\r
                if (indegree.get(neighbor) == 0) {\r
                    que.offer(neighbor);\r
                }\r
            }\r
        }\r
    }\r
\r
    if (result.size() != graph.size()) {\r
        return new ArrayList<>();\r
    }\r
\r
    return result;\r
}\r
`,H_=`import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.List;\r
\r
\r
public List<int[]> kruskalMST(int n, List<int[]> edges) {\r
    List<int[]> mst = new ArrayList<>();\r
    UnionFind uf = new UnionFind(n);\r
    Collections.sort(edges, (a, b) -> Integer.compare(a[0], b[0]));\r
\r
    for (int[] edge : edges) {\r
        int weight = edge[0];\r
        int u = edge[1];\r
        int v = edge[2];\r
\r
        if (!uf.connected(u, v)) {\r
            uf.union(u, v);\r
            mst.add(edge);\r
        }\r
    }\r
\r
    return mst;\r
}\r
`,q_=`import java.util.ArrayList;\r
import java.util.Comparator;\r
import java.util.List;\r
import java.util.PriorityQueue;\r
\r
\r
public List<int[]> primMST(int n, List<int[]> edges) {\r
    List<int[]> mst = new ArrayList<>();\r
    UnionFind uf = new UnionFind(n);\r
    PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(edge -> edge[0]));\r
\r
    for (int[] edge : edges) {\r
        pq.offer(edge);\r
    }\r
\r
    while (!pq.isEmpty()) {\r
        int[] edge = pq.poll();\r
        int w = edge[0];\r
        int u = edge[1];\r
        int v = edge[2];\r
\r
        if (!uf.connected(u, v)) {\r
            uf.union(u, v);\r
            mst.add(edge);\r
        }\r
    }\r
\r
    return mst;\r
}\r
`,Y_=`#include <unordered_set>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
unordered_set<int> seen;\r
\r
int fn(vector<vector<int>>& graph) {\r
    seen.insert(START_NODE);\r
    return dfs(START_NODE, graph);\r
}\r
\r
int dfs(int node, vector<vector<int>>& graph) {\r
    int ans = 0;\r
    // TODO: logic\r
    for (int neighbor: graph[node]) {\r
        if (seen.find(neighbor) == seen.end()) {\r
            seen.insert(neighbor);\r
            ans += dfs(neighbor, graph);\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,G_=`#include <stack>\r
#include <unordered_set>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<vector<int>>& graph) {\r
    stack<int> stack;\r
    unordered_set<int> seen;\r
    stack.push(START_NODE);\r
    seen.insert(START_NODE);\r
    int ans = 0;\r
\r
    while (!stack.empty()) {\r
        int node = stack.top();\r
        stack.pop();\r
        // TODO: logic\r
        for (int neighbor: graph[node]) {\r
            if (seen.find(neighbor) == seen.end()) {\r
                seen.insert(neighbor);\r
                stack.push(neighbor);\r
            }\r
        }\r
    }\r
}\r
`,V_=`#include <queue>\r
#include <unordered_set>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<vector<int>>& graph) {\r
    queue<int> que;\r
    unordered_set<int> seen;\r
    que.push(START_NODE);\r
    seen.insert(START_NODE);\r
    int ans = 0;\r
\r
    while (!que.empty()) {\r
        int node = que.front();\r
        que.pop();\r
        // TODO: logic\r
        for (int neighbor: graph[node]) {\r
            if (seen.find(neighbor) == seen.end()) {\r
                seen.insert(neighbor);\r
                que.push(neighbor);\r
            }\r
        }\r
    }\r
}\r
`,K_=`#include <limits>\r
#include <queue>\r
#include <utility>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
vector<int> dijkstra(vector<vector<pair<int, int>>>& graph, int source) {\r
    int n = graph.size();\r
    vector<int> distances(n, INT_MAX);\r
    distances[source] = 0;\r
\r
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> heap;\r
    heap.push({0, source});\r
\r
    while (!heap.empty()) {\r
        int currDist = heap.top().first;\r
        int node = heap.top().second;\r
        heap.pop();\r
\r
        if (currDist > distances[node]) {\r
            continue;\r
        }\r
\r
        for (pair<int, int> edge : graph[node]) {\r
            int neighbor = edge.first;\r
            int weight = edge.second;\r
            int dist = currDist + weight;\r
\r
            if (dist < distances[neighbor]) {\r
                distances[neighbor] = dist;\r
                heap.push({dist, neighbor});\r
            }\r
        }\r
    }\r
\r
    return distances;\r
}\r
`,Q_=`#include <vector>\r
#include <utility>\r
#include <limits>\r
\r
using namespace std;\r
\r
\r
vector<int> bellman_ford(int n, vector<pair<pair<int, int>, int>>& edges, int source) {\r
    vector<int> distances(n, numeric_limits<int>::max());\r
    distances[source] = 0;\r
\r
    for (int i = 0; i < n - 1; ++i) {\r
        for (const auto& edge : edges) {\r
            int u = edge.first.first;\r
            int v = edge.first.second;\r
            int w = edge.second;\r
\r
            if (distances[u] != numeric_limits<int>::max() && distances[u] + w < distances[v]) {\r
                distances[v] = distances[u] + w;\r
            }\r
        }\r
    }\r
\r
    for (const auto& edge : edges) {\r
        int u = edge.first.first;\r
        int v = edge.first.second;\r
        int w = edge.second;\r
\r
        if (distances[u] != numeric_limits<int>::max() && distances[u] + w < distances[v]) {\r
            return vector<int>();\r
        }\r
    }\r
\r
    return distances;\r
}\r
`,J_=`#include <vector>\r
#include <unordered_map>\r
#include <queue>\r
\r
using namespace std;\r
\r
\r
vector<int> kahn_topological_sort(unordered_map<int, vector<int>>& graph) {\r
    vector<int> result;\r
    unordered_map<int, int> indegree;\r
\r
    for (auto& [node, neighbors] : graph) {\r
        for (int neighbor : neighbors) {\r
            indegree[neighbor]++;\r
        }\r
    }\r
\r
    queue<int> que;\r
\r
    for (auto& [node, _] : graph) {\r
        if (indegree[node] == 0) {\r
            que.push(node);\r
        }\r
    }\r
\r
    while (!que.empty()) {\r
        int node = que.front();\r
        que.pop();\r
        result.push_back(node);\r
\r
        for (int neighbor : graph[node]) {\r
            indegree[neighbor]--;\r
            if (indegree[neighbor] == 0) {\r
                que.push(neighbor);\r
            }\r
        }\r
    }\r
\r
    return (result.size() == graph.size()) ? result : vector<int>();\r
}\r
`,X_=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
vector<tuple<int, int, int>> kruskal_mst(int n, vector<tuple<int, int, int>>& edges) {\r
    vector<tuple<int, int, int>> mst;\r
    UnionFind uf(n);\r
    sort(edges.begin(), edges.end());\r
\r
    for (auto& [w, u, v] : edges) {\r
        if (!uf.connected(u, v)) {\r
            uf.unionNodes(u, v);\r
            mst.emplace_back(w, u, v);\r
        }\r
    }\r
\r
    return mst;\r
}\r
`,I_=`#include <vector>\r
#include <queue>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
vector<tuple<int, int, int>> prim_mst(int n, vector<tuple<int, int, int>>& edges) {\r
    vector<tuple<int, int, int>> mst;\r
    UnionFind uf(n);\r
    make_heap(edges.begin(), edges.end());\r
\r
    while (!edges.empty()) {\r
        auto [w, u, v] = edges.front();\r
        pop_heap(edges.begin(), edges.end());\r
        edges.pop_back();\r
\r
        if (!uf.connected(u, v)) {\r
            uf.unionNodes(u, v);\r
            mst.emplace_back(w, u, v);\r
        }\r
    }\r
\r
    return mst;\r
}\r
`,Z_=`require 'set'\r
\r
def fn(graph)\r
  seen = Set.new([START_NODE])\r
\r
  dfs = lambda do |node|\r
    ans = 0\r
    # TODO: logic\r
    graph[node].each do |neighbor|\r
      unless seen.include?(neighbor)\r
        seen.add(neighbor)\r
        ans += dfs.call(neighbor)\r
      end\r
    end\r
    ans\r
  end\r
\r
  dfs.call(START_NODE)\r
end\r
`,F_=`require 'set'\r
\r
def fn(graph)\r
  stack = [START_NODE]\r
  seen  = Set.new([START_NODE])\r
  ans   = 0\r
\r
  until stack.empty?\r
    node = stack.pop\r
    # TODO: logic\r
    graph[node].each do |neighbor|\r
      unless seen.include?(neighbor)\r
        seen.add(neighbor)\r
        stack << neighbor\r
      end\r
    end\r
  end\r
\r
  ans\r
end\r
`,W_=`require 'set'\r
\r
def fn(graph)\r
  queue = [START_NODE]\r
  seen  = Set.new([START_NODE])\r
  ans   = 0\r
\r
  until queue.empty?\r
    node = queue.shift\r
    # TODO: logic\r
    graph[node].each do |neighbor|\r
      unless seen.include?(neighbor)\r
        seen.add(neighbor)\r
        queue << neighbor\r
      end\r
    end\r
  end\r
\r
  ans\r
end\r
`,P_=`require 'priority_queue'\r
\r
def dijkstras(graph, source)\r
  n         = graph.size\r
  distances = Array.new(n, Float::INFINITY)\r
\r
  distances[source] = 0\r
\r
  heap = PriorityQueue.new\r
  heap[source] = 0\r
\r
  until heap.empty?\r
    node, curr_dist = heap.delete_min\r
    next if curr_dist > distances[node]\r
\r
    graph[node].each do |neighbor, weight|\r
      dist = curr_dist + weight\r
      if dist < distances[neighbor]\r
        distances[neighbor] = dist\r
        heap[neighbor] = dist\r
      end\r
    end\r
  end\r
\r
  distances\r
end\r
`,$_=`def bellman_ford(n, edges, source)\r
  distances         = Array.new(n, Float::INFINITY)\r
  distances[source] = 0\r
\r
  (n - 1).times do\r
    edges.each do |u, v, w|\r
      if distances[u] != Float::INFINITY && distances[u] + w < distances[v]\r
        distances[v] = distances[u] + w\r
      end\r
    end\r
  end\r
\r
  edges.each do |u, v, w|\r
    if distances[u] != Float::INFINITY && distances[u] + w < distances[v]\r
      return []\r
    end\r
  end\r
\r
  distances\r
end\r
`,nx=`def kahn_topological_sort(graph)\r
  result    = []\r
  indegree  = Hash.new(0)\r
\r
  graph.each_value do |vertices|\r
    vertices.each do |v|\r
      indegree[v] += 1\r
    end\r
  end\r
\r
  queue = graph.keys.select { |node| indegree[node] == 0 }\r
\r
  until queue.empty?\r
    node = queue.shift\r
    result << node\r
\r
    graph[node].each do |neighbor|\r
      indegree[neighbor] -= 1\r
      queue << neighbor if indegree[neighbor] == 0\r
    end\r
  end\r
\r
  result.size == graph.size ? result : []\r
end\r
`,rx=`def kruskal_mst(n, edges)\r
  mst = []\r
  uf  = UnionFind.new(n)\r
  edges.sort.each do |w, u, v|\r
    unless uf.connected(u, v)\r
      uf.union(u, v)\r
      mst << [w, u, v]\r
    end\r
  end\r
\r
  mst\r
end\r
`,ex=`def prim_mst(n, edges)\r
  mst = []\r
  uf  = UnionFind.new(n)\r
  edges.sort.each do |w, u, v|\r
    unless uf.connected(u, v)\r
      uf.union(u, v)\r
      mst << [w, u, v]\r
    end\r
  end\r
\r
  mst\r
end\r
`,tx=`---@param graph table<any, table>
---@return integer
function fn(graph)
    local seen = {}
    seen[START_NODE] = true

    function dfs(node)
        local ans = 0
        -- TODO: logic
        for _, neighbor in ipairs(graph[node]) do
            if not seen[neighbor] then
                seen[neighbor] = true
                ans = ans + dfs(neighbor)
            end
        end

        return ans
    end

    return dfs(START_NODE)
end
`,ax=`---@param graph table<any, table>
---@return integer
function fn(graph)
    local stack = {START_NODE}
    local seen = {[START_NODE] = true}
    local ans = 0

    while #stack > 0 do
        local node = table.remove(stack)
        -- TODO: logic
        for _, neighbor in ipairs(graph[node]) do
            if not seen[neighbor] then
                seen[neighbor] = true
                table.insert(stack, neighbor)
            end
        end
    end

    return ans
end
`,ix=`---@param graph table<any, table>
---@return integer
function fn(graph)
    local que = Deque({START_NODE})
    local seen = {[START_NODE] = true}
    local ans = 0

    while #que > 0 do
        local node = que:popleft()
        -- TODO: logic
        for _, neighbor in ipairs(graph[node]) do
            if not seen[neighbor] then
                seen[neighbor] = true
                que:push(neighbor)
            end
        end
    end

    return ans
end
`,lx=`---@param graph table<integer, { [1]: integer, [2]: integer }[]>
---@param source integer
---@return table<integer, number>
function dijkstras(graph, source)
    local n = #graph
    local distances = {}
    for i = 1, n do distances[i] = math.huge end
    distances[source] = 0
    local heap = MinHeap()
    heap:push({0, source})

    while #heap > 0 do
        local top = heap:pop()
        local curr_dist, node = top[1], top[2]

        if curr_dist <= distances[node] then
            for _, edge in ipairs(graph[node]) do
                local neighbor, weight = edge[1], edge[2]
                local dist = curr_dist + weight

                if dist < distances[neighbor] then
                    distances[neighbor] = dist
                    heap:push({dist, neighbor})
                end
            end
        end
    end

    return distances
end
`,sx=`---@param n integer
---@param edges table<integer, { [1]: integer, [2]: integer, [3]: integer }>
---@param source integer
---@return table<integer, number>
function bellman_ford(n, edges, source)
    local distances = {}
    for i = 1, n do
        distances[i] = math.huge
    end
    distances[source] = 0

    for i = 1, n - 1 do
        for _, edge in ipairs(edges) do
            local u, v, w = edge[1], edge[2], edge[3]
            if distances[u] ~= math.huge and distances[u] + w < distances[v] then
                distances[v] = distances[u] + w
            end
        end
    end

    for _, edge in ipairs(edges) do
        local u, v, w = edge[1], edge[2], edge[3]
        if distances[u] ~= math.huge and distances[u] + w < distances[v] then
            return {}
        end
    end

    return distances
end
`,ox=`---@param graph table<integer, integer[]>
---@return integer[]
function kahn_topological_sort(graph)
    local result = {}
    local indegree = {}
    local node_count = 0

    for u, _ in pairs(graph) do
        node_count = node_count + 1
        indegree[u] = indegree[u] or 0
        for _, v in ipairs(graph[u]) do
            indegree[v] = (indegree[v] or 0) + 1
        end
    end

    local que = Deque.new()
    for node, count in pairs(indegree) do
        if count == 0 then que:push(node) end
    end

    while #que > 0 do
        local node = que:popleft()
        table.insert(result, node)

        for _, neighbor in ipairs(graph[node]) do
            indegree[neighbor] = indegree[neighbor] - 1
            if indegree[neighbor] == 0 then
                que:push(neighbor)
            end
        end
    end

    return #result == node_count and result or {}
end
`,cx=`---@param n integer
---@param edges { [1]: number, [2]: integer, [3]: integer }[]
---@return table[]
function kruskal_mst(n, edges)
    local mst = {}
    local uf = UnionFind.new(n)
    table.sort(edges, function(a, b) return a[1] < b[1] end)

    for _, edge in ipairs(edges) do
        local w, u, v = edge[1], edge[2], edge[3]
        if not uf:connected(u, v) then
            uf:union(u, v)
            table.insert(mst, {w, u, v})
        end
    end

    return mst
end
`,ux=`---@param n integer
---@param edges table
---@return table[]
function prim_mst(n, edges)
    local mst = {}
    local uf = UnionFind.new(n)
    local heap = MinHeap.new(edges)

    while #heap > 0 do
        local edge = heap:pop()
        local w, u, v = edge[1], edge[2], edge[3]

        if not uf:connected(u, v) then
            uf:union(u, v)
            table.insert(mst, {w, u, v})
        end
    end

    return mst
end
`;function dx(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Graph"}),a.jsx("section",{id:"graph-dfs-recursive",children:a.jsxs(o,{title:"DFS (recursive)",children:[a.jsx(o.Tab,{code:b_,language:"python"}),a.jsx(o.Tab,{code:N_,language:"javascript"}),a.jsx(o.Tab,{code:L_,language:"java"}),a.jsx(o.Tab,{code:Y_,language:"cpp"}),a.jsx(o.Tab,{code:Z_,language:"ruby"}),a.jsx(o.Tab,{code:tx,language:"lua"})]})}),a.jsx("section",{id:"graph-dfs-iterative",children:a.jsxs(o,{title:"DFS (iterative)",children:[a.jsx(o.Tab,{code:__,language:"python"}),a.jsx(o.Tab,{code:E_,language:"javascript"}),a.jsx(o.Tab,{code:z_,language:"java"}),a.jsx(o.Tab,{code:G_,language:"cpp"}),a.jsx(o.Tab,{code:F_,language:"ruby"}),a.jsx(o.Tab,{code:ax,language:"lua"})]})}),a.jsx("section",{id:"graph-bfs",children:a.jsxs(o,{title:"BFS",children:[a.jsx(o.Tab,{code:x_,language:"python"}),a.jsx(o.Tab,{code:A_,language:"javascript"}),a.jsx(o.Tab,{code:D_,language:"java"}),a.jsx(o.Tab,{code:V_,language:"cpp"}),a.jsx(o.Tab,{code:W_,language:"ruby"}),a.jsx(o.Tab,{code:ix,language:"lua"})]})}),a.jsx("section",{id:"graph-dijkstra",children:a.jsxs(o,{title:"Dijkstra (shortest path)",children:[a.jsx(o.Tab,{code:v_,language:"python"}),a.jsx(o.Tab,{code:O_,language:"javascript"}),a.jsx(o.Tab,{code:B_,language:"java"}),a.jsx(o.Tab,{code:K_,language:"cpp"}),a.jsx(o.Tab,{code:P_,language:"ruby"}),a.jsx(o.Tab,{code:lx,language:"lua"})]})}),a.jsx("section",{id:"graph-bellman-ford",children:a.jsxs(o,{title:"Bellman-Ford (shortest path)",children:[a.jsx(o.Tab,{code:y_,language:"python"}),a.jsx(o.Tab,{code:w_,language:"javascript"}),a.jsx(o.Tab,{code:C_,language:"java"}),a.jsx(o.Tab,{code:Q_,language:"cpp"}),a.jsx(o.Tab,{code:$_,language:"ruby"}),a.jsx(o.Tab,{code:sx,language:"lua"})]})}),a.jsx("section",{id:"graph-kahn",children:a.jsxs(o,{title:"Kahn (topological sort)",children:[a.jsx(o.Tab,{code:T_,language:"python"}),a.jsx(o.Tab,{code:k_,language:"javascript"}),a.jsx(o.Tab,{code:U_,language:"java"}),a.jsx(o.Tab,{code:J_,language:"cpp"}),a.jsx(o.Tab,{code:nx,language:"ruby"}),a.jsx(o.Tab,{code:ox,language:"lua"})]})}),a.jsx("section",{id:"graph-kruskal",children:a.jsxs(o,{title:"Kruskal (mst)",children:[a.jsx(o.Tab,{code:S_,language:"python"}),a.jsx(o.Tab,{code:M_,language:"javascript"}),a.jsx(o.Tab,{code:H_,language:"java"}),a.jsx(o.Tab,{code:X_,language:"cpp"}),a.jsx(o.Tab,{code:rx,language:"ruby"}),a.jsx(o.Tab,{code:cx,language:"lua"})]})}),a.jsx("section",{id:"graph-prim",children:a.jsxs(o,{title:"Prim (mst)",children:[a.jsx(o.Tab,{code:j_,language:"python"}),a.jsx(o.Tab,{code:R_,language:"javascript"}),a.jsx(o.Tab,{code:q_,language:"java"}),a.jsx(o.Tab,{code:I_,language:"cpp"}),a.jsx(o.Tab,{code:ex,language:"ruby"}),a.jsx(o.Tab,{code:ux,language:"lua"})]})})]})}const fx=`from heapq import heappop, heappush\r
\r
\r
def fn(arr, k):\r
    heap = []\r
\r
    for num in arr:\r
        # TODO: logic to push onto heap according to problem's criteria\r
        heappush(heap, (CRITERIA, num))\r
\r
        if len(heap) > k:\r
            heappop(heap)\r
\r
    return [num for num in heap]\r
`,hx=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,gx=`import java.util.PriorityQueue;\r
\r
\r
public int[] fn(int[] arr, int k) {\r
    PriorityQueue<Integer> heap = new PriorityQueue<>(CRITERIA);\r
\r
    for (int num: arr) {\r
        // TODO: logic to push onto heap according to problem's criteria\r
        heap.add(num);\r
\r
        if (heap.size() > k) {\r
            heap.remove();\r
        }\r
    }\r
\r
    int[] ans = new int[k];\r
\r
    for (int i = 0; i < k; i++) {\r
        ans[i] = heap.remove();\r
    }\r
\r
    return ans;\r
}\r
`,px=`#include <vector>\r
#include <queue>\r
\r
using namespace std;\r
\r
\r
vector<int> fn(vector<int>& arr, int k) {\r
    priority_queue<int, vector<int>, greater<int>> min_heap;\r
    vector<int> result;\r
\r
    for (int num : arr) {\r
        // TODO: logic to push onto heap according to problem's criteria\r
        min_heap.push(num);\r
\r
        if (min_heap.size() > k) {\r
            min_heap.pop();\r
        }\r
    }\r
\r
    while (!min_heap.empty()) {\r
        result.push_back(min_heap.top());\r
        min_heap.pop();\r
    }\r
\r
    return result;\r
}\r
`,mx=`def fn(arr, k)\r
  heap = []\r
\r
  arr.each do |num|\r
    # TODO: logic to push onto heap according to problem's criteria\r
    heap.push([CRITERIA, num])\r
\r
    if heap.size > k\r
      # TODO: pop the top element from heap\r
      heap.pop\r
    end\r
  end\r
\r
  heap.map { |item| item[1] }\r
end\r
`,bx=`function fn(arr, k)
    local heap = MinHeap.new()

    for _, num in ipairs(arr) do
        -- TODO: logic to push onto heap according to problem's criteria
        heap:push({CRITERIA, num})

        if #heap > k then
            heap:pop()
        end
    end

    local result = {}
    for i = 1, #heap do
        local entry = heap[i]
        table.insert(result, entry[2])
    end

    return result
end
`;function _x(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Heap"}),a.jsx("section",{id:"heap-find-top-k-elements",children:a.jsxs(o,{title:"find top k elements",children:[a.jsx(o.Tab,{code:fx,language:"python"}),a.jsx(o.Tab,{code:hx,language:"javascript"}),a.jsx(o.Tab,{code:gx,language:"java"}),a.jsx(o.Tab,{code:px,language:"cpp"}),a.jsx(o.Tab,{code:mx,language:"ruby"}),a.jsx(o.Tab,{code:bx,language:"lua"})]})})]})}const xx=`def fn(arr, target):\r
    left = 0\r
    right = len(arr) - 1\r
\r
    while left <= right:\r
        mid = (left + right) // 2\r
\r
        if arr[mid] == target:\r
            # TODO: logic\r
            return\r
        if arr[mid] > target:\r
            right = mid - 1\r
        else:\r
            left = mid + 1\r
\r
    return left\r
`,vx=`def fn(arr, target):\r
    left = 0\r
    right = len(arr)\r
\r
    while left < right:\r
        mid = (left + right) // 2\r
\r
        if arr[mid] >= target:\r
            right = mid\r
        else:\r
            left = mid + 1\r
\r
    return left\r
`,yx=`def fn(arr, target):\r
    left = 0\r
    right = len(arr)\r
\r
    while left < right:\r
        mid = (left + right) // 2\r
\r
        if arr[mid] > target:\r
            right = mid\r
        else:\r
            left = mid + 1\r
\r
    return left\r
`,Tx=`def fn(arr):\r
    def check(x):\r
        return BOOLEAN\r
\r
    left = MINIMUM_POSSIBLE_ANSWER\r
    right = MAXIMUM_POSSIBLE_ANSWER\r
\r
    while left <= right:\r
        mid = (left + right) // 2\r
\r
        if check(mid):\r
            right = mid - 1\r
        else:\r
            left = mid + 1\r
\r
    return left\r
`,Sx=`def fn(arr):\r
    def check(x):\r
        return BOOLEAN\r
\r
    left = MINIMUM_POSSIBLE_ANSWER\r
    right = MAXIMUM_POSSIBLE_ANSWER\r
\r
    while left <= right:\r
        mid = (left + right) // 2\r
\r
        if check(mid):\r
            left = mid + 1\r
        else:\r
            right = mid - 1\r
\r
    return right\r
`,jx=`const fn = (arr, target) => {\r
    let left = 0\r
    let right = arr.length - 1\r
\r
    while (left <= right) {\r
        let mid = Math.floor((left + right) / 2)\r
\r
        if (arr[mid] == target) {\r
            // TODO: logic\r
            return\r
        }\r
\r
        if (arr[mid] > target) {\r
            right = mid - 1\r
        } else {\r
            left = mid + 1\r
        }\r
    }\r
\r
    return left\r
}\r
`,Nx=`const fn = (arr, target) => {\r
    let left = 0\r
    let right = arr.length\r
\r
    while (left < right) {\r
        let mid = Math.floor((left + right) / 2)\r
\r
        if (arr[mid] >= target) {\r
            right = mid\r
        } else {\r
            left = mid + 1\r
        }\r
    }\r
\r
    return left\r
}\r
`,Ex=`const fn = (arr, target) => {\r
    let left = 0\r
    let right = arr.length\r
\r
    while (left < right) {\r
        let mid = Math.floor((left + right) / 2)\r
\r
        if (arr[mid] > target) {\r
            right = mid\r
        } else {\r
            left = mid + 1\r
        }\r
    }\r
\r
    return left\r
}\r
`,Ax=`const fn = (arr) => {\r
    const check = (x) => {\r
        return BOOLEAN\r
    }\r
\r
    let left = MINIMUM_POSSIBLE_ANSWER\r
    let right = MAXMIMUM_POSSIBLE_ANSWER\r
\r
    while (left <= right) {\r
        let mid = Math.floor((left + right) / 2)\r
\r
        if (check(mid)) {\r
            right = mid - 1\r
        } else {\r
            left = mid + 1\r
        }\r
    }\r
\r
    return left\r
}\r
`,Ox=`const fn = (arr) => {\r
    const check = (x) => {\r
        return BOOLEAN\r
    }\r
\r
    let left = MINIMUM_POSSIBLE_ANSWER\r
    let right = MAXMIMUM_POSSIBLE_ANSWER\r
\r
    while (left <= right) {\r
        let mid = Math.floor((left + right) / 2)\r
\r
        if (check(mid)) {\r
            left = mid + 1\r
        } else {\r
            right = mid - 1\r
        }\r
    }\r
\r
    return right\r
}\r
`,wx=`public int fn(int[] arr, int target) {\r
    int left = 0;\r
    int right = arr.length - 1;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] == target) {\r
            // TODO: logic\r
            return mid;\r
        }\r
        if (arr[mid] > target) {\r
            right = mid - 1;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,kx=`public int fn(int[] arr, int target) {\r
    int left = 0;\r
    int right = arr.length;\r
\r
    while (left < right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] >= target) {\r
            right = mid;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,Mx=`public int fn(int[] arr, int target) {\r
    int left = 0;\r
    int right = arr.length;\r
\r
    while (left < right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] > target) {\r
            right = mid;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,Rx=`public int fn(int[] arr) {\r
    int left = MINIMUM_POSSIBLE_ANSWER;\r
    int right = MAXIMUM_POSSIBLE_ANSWER;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (check(mid)) {\r
            right = mid - 1;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
\r
public boolean check(int x) {\r
    return BOOLEAN\r
}\r
`,Lx=`public int fn(int[] arr) {\r
    int left = MINIMUM_POSSIBLE_ANSWER;\r
    int right = MAXIMUM_POSSIBLE_ANSWER;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (check(mid)) {\r
            left = mid + 1;\r
        } else {\r
            right = mid - 1;\r
        }\r
    }\r
\r
    return right;\r
}\r
\r
public boolean check(int x) {\r
    return BOOLEAN\r
}\r
`,zx=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr, int target) {\r
    int left = 0;\r
    int right = arr.size() - 1;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] == target) {\r
            // TODO: logic\r
            return mid;\r
        }\r
        if (arr[mid] > target) {\r
            right = mid - 1;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,Dx=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr, int target) {\r
    int left = 0;\r
    int right = arr.size();\r
\r
    while (left < right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] >= target) {\r
            right = mid;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,Bx=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr, int target) {\r
    int left = 0;\r
    int right = arr.size();\r
\r
    while (left < right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] > target) {\r
            right = mid;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,Cx=`#include <vector>\r
\r
using namespace std;\r
\r
\r
bool check(int x) {\r
    return BOOLEAN;\r
}\r
\r
int fn(vector<int>& arr) {\r
    int left = MINIMUM_POSSIBLE_ANSWER;\r
    int right = MAXIMUM_POSSIBLE_ANSWER;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (check(mid)) {\r
            right = mid - 1;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,Ux=`#include <vector>\r
\r
using namespace std;\r
\r
\r
bool check(int x) {\r
    return BOOLEAN;\r
}\r
\r
int fn(vector<int>& arr) {\r
    int left = MINIMUM_POSSIBLE_ANSWER;\r
    int right = MAXIMUM_POSSIBLE_ANSWER;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (check(mid)) {\r
            left = mid + 1;\r
        } else {\r
            right = mid - 1;\r
        }\r
    }\r
\r
    return right;\r
}\r
`,Hx=`def fn(arr, target)\r
  left  = 0\r
  right = arr.length - 1\r
\r
  while left <= right\r
    mid = (left + right) / 2\r
\r
    if arr[mid] == target\r
      # TODO: logic\r
      return\r
    elsif arr[mid] > target\r
      right = mid - 1\r
    else\r
      left = mid + 1\r
    end\r
  end\r
\r
  left\r
end\r
`,qx=`def fn(arr, target)\r
  left  = 0\r
  right = len(arr)\r
\r
  while left < right\r
    mid = (left + right) / 2\r
\r
    if arr[mid] >= target\r
      right = mid\r
    else\r
      left = mid + 1\r
    end\r
  end\r
\r
  left\r
end\r
`,Yx=`def fn(arr, target)\r
  left  = 0\r
  right = len(arr)\r
\r
  while left < right\r
    mid = (left + right) / 2\r
\r
    if arr[mid] > target\r
      right = mid\r
    else\r
      left = mid + 1\r
    end\r
  end\r
\r
  left\r
end\r
`,Gx=`def fn(arr)\r
  left  = MINIMUM_POSSIBLE_ANSWER\r
  right = MAXIMUM_POSSIBLE_ANSWER\r
\r
  while left <= right\r
    mid = (left + right) / 2 # int div\r
\r
    if check(mid)\r
      right = mid - 1\r
    else\r
      left = mid + 1\r
    end\r
  end\r
\r
  left\r
end\r
\r
def check(x)\r
  BOOLEAN\r
end`,Vx=`def fn(arr)\r
  left  = MINIMUM_POSSIBLE_ANSWER\r
  right = MAXIMUM_POSSIBLE_ANSWER\r
\r
  while left <= right\r
    mid = (left + right) / 2 # integer division\r
\r
    if check(mid)\r
      left = mid + 1\r
    else\r
      right = mid - 1\r
    end\r
\r
  end\r
\r
  right\r
end\r
\r
def check(x)\r
  BOOLEAN\r
end\r
`,Kx=`function fn(arr, target)
    local left = 1
    local right = #arr

    while left <= right do
        local mid = math.floor((left + right) / 2)

        if arr[mid] == target then
            -- TODO: logic
            return
        end
        if arr[mid] > target then
            right = mid - 1
        else
            left = mid + 1
        end
    end

    return left
end
`,Qx=`function fn(arr, target)
    local left = 1
    local right = #arr + 1

    while left < right do
        local mid = math.floor((left + right) / 2)

        if arr[mid] >= target then
            right = mid
        else
            left = mid + 1

        end
    end

    return left
end
`,Jx=`function fn(arr, target)
    local left = 1
    local right = #arr + 1

    while left < right do
        local mid = math.floor((left + right) / 2)

        if arr[mid] > target then
            right = mid
        else
            left = mid + 1

        end
    end

    return left
end
`,Xx=`function fn(arr)
    function check(x)
        return BOOLEAN
    end

    local left = MINIMUM_POSSIBLE_ANSWER
    local right = MAXIMUM_POSSIBLE_ANSWER

    while left <= right do
        local mid = math.floor((left + right) / 2)

        if check(mid) then
            right = mid - 1
        else
            left = mid + 1

        end
    end

    return left
end
`,Ix=`function fn(arr)
    function check(x)
        return BOOLEAN
    end

    local left = MINIMUM_POSSIBLE_ANSWER
    local right = MAXIMUM_POSSIBLE_ANSWER

    while left <= right do
        local mid = math.floor((left + right) / 2)

        if check(mid) then
            left = mid + 1
        else
            right = mid - 1

        end
    end

    return right
end
`;function Zx(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Binary Search"}),a.jsx("section",{id:"binarysearch-binary-search",children:a.jsxs(o,{title:"binary search",children:[a.jsx(o.Tab,{code:xx,language:"python"}),a.jsx(o.Tab,{code:jx,language:"javascript"}),a.jsx(o.Tab,{code:wx,language:"java"}),a.jsx(o.Tab,{code:zx,language:"cpp"}),a.jsx(o.Tab,{code:Hx,language:"ruby"}),a.jsx(o.Tab,{code:Kx,language:"lua"})]})}),a.jsx("section",{id:"binarysearch-duplicate-elements-left-insertion",children:a.jsxs(o,{title:"duplicate elements, left-most insertion point",children:[a.jsx(o.Tab,{code:vx,language:"python"}),a.jsx(o.Tab,{code:Nx,language:"javascript"}),a.jsx(o.Tab,{code:kx,language:"java"}),a.jsx(o.Tab,{code:Dx,language:"cpp"}),a.jsx(o.Tab,{code:qx,language:"ruby"}),a.jsx(o.Tab,{code:Qx,language:"lua"})]})}),a.jsx("section",{id:"binarysearch-duplicate-elements-right-insertion",children:a.jsxs(o,{title:"duplicate elements, right-most insertion point",children:[a.jsx(o.Tab,{code:yx,language:"python"}),a.jsx(o.Tab,{code:Ex,language:"javascript"}),a.jsx(o.Tab,{code:Mx,language:"java"}),a.jsx(o.Tab,{code:Bx,language:"cpp"}),a.jsx(o.Tab,{code:Yx,language:"ruby"}),a.jsx(o.Tab,{code:Jx,language:"lua"})]})}),a.jsx("section",{id:"binarysearch-greedy-minimum",children:a.jsxs(o,{title:"greedy (minimum)",children:[a.jsx(o.Tab,{code:Tx,language:"python"}),a.jsx(o.Tab,{code:Ax,language:"javascript"}),a.jsx(o.Tab,{code:Rx,language:"java"}),a.jsx(o.Tab,{code:Cx,language:"cpp"}),a.jsx(o.Tab,{code:Gx,language:"ruby"}),a.jsx(o.Tab,{code:Xx,language:"lua"})]})}),a.jsx("section",{id:"binarysearch-greedy-maximum",children:a.jsxs(o,{title:"greedy (maximum)",children:[a.jsx(o.Tab,{code:Sx,language:"python"}),a.jsx(o.Tab,{code:Ox,language:"javascript"}),a.jsx(o.Tab,{code:Lx,language:"java"}),a.jsx(o.Tab,{code:Ux,language:"cpp"}),a.jsx(o.Tab,{code:Vx,language:"ruby"}),a.jsx(o.Tab,{code:Ix,language:"lua"})]})})]})}const Fx=`def backtrack(curr, OTHER_ARGUMENTS...):\r
    if (BASE_CASE):\r
        # TODO: modify answer\r
        return\r
\r
    ans = 0\r
\r
    for (ITERATE_OVER_INPUT):\r
        # TODO: modify current state\r
        ans += backtrack(curr, OTHER_ARGUMENTS...)\r
        # TODO: undo modification of current state\r
\r
    return ans\r
`,Wx=`const backtrack = (curr, OTHER_ARGUMENTS...) => {\r
    if (BASE_CASE) {\r
        // TODO: modify answer\r
        return\r
    }\r
\r
    let ans = 0\r
\r
    for (ITERATE_OVER_INPUT) {\r
        // TODO: modify current state\r
        ans += backtrack(curr, OTHER_ARGUMENTS...)\r
        // TODO: undo modification of current state\r
    }\r
\r
    return ans\r
}\r
`,Px=`public int backtrack(STATE curr, OTHER_ARGUMENTS...) {\r
    if (BASE_CASE) {\r
        // TODO: modify answer\r
        return 0;\r
    }\r
\r
    int ans = 0;\r
\r
    for (ITERATE_OVER_INPUT) {\r
        // TODO: modify current state\r
        ans += backtrack(curr, OTHER_ARGUMENTS...);\r
        // TODO: undo modification of current state\r
    }\r
\r
    return ans;\r
}\r
`,$x=`int backtrack(STATE curr, OTHER_ARGUMENTS...) {\r
    if (BASE_CASE) {\r
        // TODO: modify answer\r
        return 0;\r
    }\r
\r
    int ans = 0;\r
\r
    for (ITERATE_OVER_INPUT) {\r
        // TODO: modify current state\r
        ans += backtrack(curr, OTHER_ARGUMENTS...);\r
        // TODO: undo modification of current state\r
    }\r
\r
    return ans;\r
}\r
`,nv=`def backtrack(curr, OTHER_ARGUMENTS...)\r
  if(BASE_CASE)\r
    # TODO: modify answer\r
    return\r
  end\r
\r
  ans = 0\r
\r
  INPUTS.each do |i|\r
    # TODO: modify current state\r
    ans += backtrack(curr, OTHER_ARGUMENTS...)\r
    # TODO: undo modification of current state\r
  end\r
\r
  ans\r
end\r
`,rv=`function backtrack(curr, OTHER_ARGUMENTS...)
    if (BASE_CASE) then
        -- TODO: modify answer
        return
    end

    local ans = 0

    for (ITERATE_OVER_INPUT) do
        -- TODO: modify current state
        ans = ans + backtrack(curr, OTHER_ARGUMENTS...)
        -- TODO: undo modification of current state
    end

    return ans
end
`;function ev(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Backtracking"}),a.jsx("section",{id:"backtracking-backtracking",children:a.jsxs(o,{title:"backtracking",children:[a.jsx(o.Tab,{code:Fx,language:"python"}),a.jsx(o.Tab,{code:Wx,language:"javascript"}),a.jsx(o.Tab,{code:Px,language:"java"}),a.jsx(o.Tab,{code:$x,language:"cpp"}),a.jsx(o.Tab,{code:nv,language:"ruby"}),a.jsx(o.Tab,{code:rv,language:"lua"})]})})]})}const tv=`def fn(arr):\r
    @cache\r
    def dp(STATE):\r
        if BASE_CASE:\r
            return 0\r
        return RECURRENCE_RELATION(STATE)\r
\r
    return dp(STATE_FOR_WHOLE_INPUT)\r
`,av=`def fn(arr):\r
    if BASE_CASE:\r
        return 0\r
\r
    dp = [BASE_CASE] * (STATE_FOR_WHOLE_INPUT + 1)\r
\r
    for STATE in range(SMALLEST_SUBPROBLEM, STATE_FOR_WHOLE_INPUT + 1):\r
        if BASE_CASE:\r
            dp[STATE] = BASE_CASE\r
        else:\r
            dp[STATE] = RECURRENCE_RELATION(STATE)\r
\r
    return dp[STATE_FOR_WHOLE_INPUT]\r
`,iv=`def kadane(arr: list[int]) -> int:\r
    curr_sub = max_sub = arr[0]\r
\r
    for num in arr[1:]:\r
        curr_sub = max(curr_sub + num, num)\r
        max_sub = max(max_sub, curr_sub)\r
\r
    return max_sub\r
`,lv=`const fn = (arr) => {\r
    const dp = (STATE) => {\r
        if (BASE_CASE) {\r
            return 0\r
        }\r
\r
        if (memo[STATE] != -1) {\r
            return memo[STATE]\r
        }\r
\r
        let ans = RECURRENCE_RELATION(STATE)\r
        memo[STATE] = ans\r
\r
        return ans\r
    }\r
\r
    let memo = ARRAY_SIZED_ACCORDING_TO_STATE\r
\r
    return dp(STATE_FOR_WHOLE_INPUT)\r
}\r
`,sv=`const fn = (arr) => {\r
    const dp = new Array(STATE_FOR_WHOLE_INPUT + 1).fill(BASE_CASE)\r
\r
    for (let state = SMALLEST_SUBPROBLEM; state <= STATE_FOR_WHOLE_INPUT; state++) {\r
        if (BASE_CASE) {\r
            dp[state] = BASE_CASE\r
        } else {\r
            dp[state] = RECURRENCE_RELATION(state)\r
        }\r
    }\r
\r
    return dp[STATE_FOR_WHOLE_INPUT]\r
}\r
`,ov=`const kadane = (arr) => {\r
    let currSub = arr[0]\r
    let maxSub = arr[0]\r
\r
    for (let i = 1; i < arr.length; i++) {\r
        currSub = Math.max(currSub + arr[i], arr[i])\r
        maxSub = Math.max(maxSub, currSub)\r
    }\r
\r
    return maxSub\r
}\r
`,cv=`import java.util.HashMap;\r
import java.util.Map;\r
\r
\r
Map<STATE, Integer> memo = new HashMap<>();\r
\r
public int fn(int[] arr) {\r
    return dp(STATE_FOR_WHOLE_INPUT, arr);\r
}\r
\r
public int dp(STATE, int[] arr) {\r
    if (BASE_CASE) {\r
        return 0;\r
    }\r
\r
    if (memo.contains(STATE)) {\r
        return memo.get(STATE);\r
    }\r
\r
    int ans = RECURRENCE_RELATION(STATE);\r
    memo.put(STATE, ans);\r
    return ans;\r
}\r
`,uv=`import java.util.Arrays;\r
\r
\r
public int fn(int[] arr) {\r
    if (BASE_CASE) {\r
        return 0;\r
    }\r
\r
    int[] dp = new int[STATE_FOR_WHOLE_INPUT + 1];\r
    Arrays.fill(dp, BASE_CASE);\r
\r
    for (int STATE = SMALLEST_SUBPROBLEM; STATE <= STATE_FOR_WHOLE_INPUT; STATE++) {\r
        if (BASE_CASE) {\r
            dp[STATE] = BASE_CASE;\r
        } else {\r
            dp[STATE] = RECURRENCE_RELATION(STATE);\r
        }\r
    }\r
\r
    return dp[STATE_FOR_WHOLE_INPUT];\r
}\r
`,dv=`public int kadane(int[] arr) {\r
    int currSub = arr[0];\r
    int maxSub = arr[0];\r
\r
    for (int i = 1; i < arr.length; i++) {\r
        currSub = Math.max(currSub + arr[i], arr[i]);\r
        maxSub = Math.max(maxSub, currSub);\r
    }\r
\r
    return maxSub;\r
}\r
`,fv=`#include <unordered_map>\r
\r
using namespace std;\r
\r
\r
unordered_map<STATE, int> memo;\r
\r
int fn(vector<int>& arr) {\r
    return dp(STATE_FOR_WHOLE_INPUT, arr);\r
}\r
\r
int dp(STATE, vector<int>& arr) {\r
    if (BASE_CASE) {\r
        return 0;\r
    }\r
\r
    if (memo.find(STATE) != memo.end()) {\r
        return memo[STATE];\r
    }\r
\r
    int ans = RECURRENCE_RELATION(STATE);\r
    memo[STATE] = ans;\r
    return ans;\r
}\r
`,hv=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
int fn(int arr[], int size) {\r
    if (BASE_CASE) {\r
        return 0;\r
    }\r
\r
    vector<int> dp(STATE_FOR_WHOLE_INPUT + 1, BASE_CASE);\r
\r
    for (int state = SMALLEST_SUBPROBLEM; state <= STATE_FOR_WHOLE_INPUT; ++state) {\r
        if (BASE_CASE) {\r
            dp[state] = BASE_CASE;\r
        } else {\r
            dp[state] = RECURRENCE_RELATION(state);\r
        }\r
    }\r
\r
    return dp[STATE_FOR_WHOLE_INPUT];\r
}\r
`,gv=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
int kadane(vector<int>& arr) {\r
    int curr_sub = arr[0];\r
    int max_sub = arr[0];\r
\r
    for (size_t i = 1; i < arr.size(); ++i) {\r
        curr_sub = max(curr_sub + arr[i], arr[i]);\r
        max_sub = max(max_sub, curr_sub);\r
    }\r
\r
    return max_sub;\r
}\r
`,pv=`def fn(arr)\r
  cache = {}\r
\r
  dp = lambda do |state|\r
    return 0 if BASE_CASE\r
    return cache[state] if cache.key?(state)\r
\r
    cache[state] = RECURRENCE_RELATION(state)\r
  end\r
\r
  dp.call(STATE_FOR_WHOLE_INPUT)\r
end\r
`,mv=`def fn(arr)\r
  if BASE_CASE\r
    return 0\r
  end\r
\r
  dp = Array.new(STATE_FOR_WHOLE_INPUT + 1, BASE_CASE)\r
\r
  (SMALLEST_SUBPROBLEM..STATE_FOR_WHOLE_INPUT).each do |state|\r
    if BASE_CASE\r
      dp[state] = BASE_CASE\r
    else\r
      dp[state] = RECURRENCE_RELATION(state)\r
    end\r
  end\r
\r
  dp[STATE_FOR_WHOLE_INPUT]\r
end\r
`,bv=`def kadane(arr)\r
  curr_sub  = arr[0]\r
  max_sub   = arr[0]\r
\r
  arr[1..-1].each do |num|\r
    curr_sub = [curr_sub + num, num].max\r
    max_sub = [max_sub, curr_sub].max\r
  end\r
\r
  max_sub\r
end\r
`,_v=`function fn(arr)
    local cache = {}

    local function dp(STATE)
        if cache[STATE] then
            return cache[STATE]
        end

        if BASE_CASE then
            return 0
        end

        cache[STATE] = RECURRENCE_RELATION(STATE)
        return cache[STATE]
    end

    return dp(STATE_FOR_WHOLE_INPUT)
end
`,xv=`function fn(arr)
    if BASE_CASE then
        return 0
    end

    local dp = [BASE_CASE] * (STATE_FOR_WHOLE_INPUT + 1)

    for STATE = SMALLEST_SUBPROBLEM, STATE_FOR_WHOLE_INPUT + 1 - 1 do
        if BASE_CASE then
            dp[STATE] = BASE_CASE
        else
            dp[STATE] = RECURRENCE_RELATION(STATE)
        end
    end

    return dp[STATE_FOR_WHOLE_INPUT]
end
`,vv=`---@param arr integer[]
---@return integer
function kadane(arr)
    local curr_sub = arr[1]
    local max_sub = arr[1]

    for i = 2, #arr do
        local num = arr[i]
        curr_sub = math.max(curr_sub + num, num)
        max_sub = math.max(max_sub, curr_sub)
    end

    return max_sub
end
`;function yv(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Dynamic Programming"}),a.jsx("section",{id:"dp-top-down",children:a.jsxs(o,{title:"DP top-down",children:[a.jsx(o.Tab,{code:tv,language:"python"}),a.jsx(o.Tab,{code:lv,language:"javascript"}),a.jsx(o.Tab,{code:cv,language:"java"}),a.jsx(o.Tab,{code:fv,language:"cpp"}),a.jsx(o.Tab,{code:pv,language:"ruby"}),a.jsx(o.Tab,{code:_v,language:"lua"})]})}),a.jsx("section",{id:"dp-bottom-up",children:a.jsxs(o,{title:"DP bottom-up",children:[a.jsx(o.Tab,{code:av,language:"python"}),a.jsx(o.Tab,{code:sv,language:"javascript"}),a.jsx(o.Tab,{code:uv,language:"java"}),a.jsx(o.Tab,{code:hv,language:"cpp"}),a.jsx(o.Tab,{code:mv,language:"ruby"}),a.jsx(o.Tab,{code:xv,language:"lua"})]})}),a.jsx("section",{id:"dp-kadane",children:a.jsxs(o,{title:"Kadane (max-sum subarray)",children:[a.jsx(o.Tab,{code:iv,language:"python"}),a.jsx(o.Tab,{code:ov,language:"javascript"}),a.jsx(o.Tab,{code:dv,language:"java"}),a.jsx(o.Tab,{code:gv,language:"cpp"}),a.jsx(o.Tab,{code:bv,language:"ruby"}),a.jsx(o.Tab,{code:vv,language:"lua"})]})})]})}const Tv=`def test_kth_bit(num: int, k: int) -> bool:\r
    return num & (1 << k) != 0\r
`,Sv=`def set_kth_bit(num: int, k: int) -> int:\r
    return num | (1 << k)\r
`,jv=`def clear_kth_bit(num: int, k: int) -> int:\r
    return num & ~(1 << k)\r
`,Nv=`def toggle_kth_bit(num: int, k: int) -> int:\r
    return num ^ (1 << k)\r
`,Ev=`def get_rightmost_set_bit(num: int) -> int:\r
    return num & -num\r
`,Av=`def count_set_bits(num: int) -> int:\r
    return bin(num).count('1')\r
`,Ov=`def multiply_by_power_of_two(num: int, k: int) -> int:\r
    return num << k\r
`,wv=`def divide_by_power_of_two(num: int, k: int) -> int:\r
    return num >> k\r
`,kv=`def is_power_of_two(num: int) -> bool:\r
    return (num & (num - 1)) == 0\r
`,Mv=`def swap_variables(num1: int, num2: int) -> tuple:\r
    num1 ^= num2\r
    num2 ^= num1\r
    num1 ^= num2\r
    return num1, num2\r
`,Rv=`const testKthBit = (num, k) => {\r
    return num & (1 << k) !== 0\r
}\r
`,Lv=`const setKthBit = (num, k) => {\r
    return num | (1 << k)\r
}\r
`,zv=`const clearKthBit = (num, k) => {\r
    return num & ~(1 << k)\r
}\r
`,Dv=`const toggleKthBit = (num, k) => {\r
    return num ^ (1 << k)\r
}\r
`,Bv=`const getRightmostSetBit = (num) => {\r
    return num & -num\r
}\r
`,Cv=`const countSetBits = (num) => {\r
    return num.toString(2).split('1').length - 1\r
}\r
`,Uv=`const multiplyByPowerOfTwo = (num, k) => {\r
    return num << k\r
}\r
`,Hv=`const divideByPowerOfTwo = (num, k) => {\r
    return num >> k;\r
}\r
`,qv=`const isPowerOfTwo = (num) => {\r
    return (num & (num - 1)) === 0\r
}\r
`,Yv=`const swapVariables = (num1, num2) => {\r
    num1 ^= num2\r
    num2 ^= num1\r
    num1 ^= num2\r
    return [num1, num2]\r
}\r
`,Gv=`public boolean testKthBit(int num, int k) {\r
    return (num & (1 << k)) != 0;\r
}\r
`,Vv=`public int setKthBit(int num, int k) {\r
    return num | (1 << k);\r
}\r
`,Kv=`public int clearKthBit(int num, int k) {\r
    return num & ~(1 << k);\r
}\r
`,Qv=`public int toggleKthBit(int num, int k) {\r
    return num ^ (1 << k);\r
}\r
`,Jv=`public int getRightmostSetBit(int num) {\r
    return num & -num;\r
}\r
`,Xv=`public int countSetBits(int num) {\r
    int count = 0;\r
\r
    while (num > 0) {\r
        count += num & 1;\r
        num >>= 1;\r
    }\r
\r
    return count;\r
}\r
`,Iv=`public int multiplyByPowerOfTwo(int num, int k) {\r
    return num << k;\r
}\r
`,Zv=`public int divideByPowerOfTwo(int num, int k) {\r
    return num >> k;\r
}\r
`,Fv=`public boolean isPowerOfTwo(int num) {\r
    return (num & (num - 1)) == 0;\r
}\r
`,Wv=`public int[] swapVariables(int num1, int num2) {\r
    num1 ^= num2;\r
    num2 ^= num1;\r
    num1 ^= num2;\r
    return new int[] { num1, num2 };\r
}\r
`,Pv=`bool test_kth_bit(int num, int k) {\r
    return (num & (1 << k)) != 0;\r
}\r
`,$v=`int set_kth_bit(int num, int k) {\r
    return num | (1 << k);\r
}\r
`,ny=`int clear_kth_bit(int num, int k) {\r
    return num & ~(1 << k);\r
}\r
`,ry=`int toggle_kth_bit(int num, int k) {\r
    return num ^ (1 << k);\r
}\r
`,ey=`int get_rightmost_set_bit(int num) {\r
    return num & -num;\r
}\r
`,ty=`int count_set_bits(int num) {\r
    int count = 0;\r
\r
    while (num) {\r
        count += num & 1;\r
        num >>= 1;\r
    }\r
\r
    return count;\r
}\r
`,ay=`int multiply_by_power_of_two(int num, int k) {\r
    return num << k;\r
}\r
`,iy=`int divide_by_power_of_two(int num, int k) {\r
    return num >> k;\r
}\r
`,ly=`bool is_power_of_two(int num) {\r
    return (num & (num - 1)) == 0;\r
}\r
`,sy=`#include <tuple>\r
\r
using namespace std;\r
\r
\r
tuple<int, int> swap_variables(int num1, int num2) {\r
    num1 ^= num2;\r
    num2 ^= num1;\r
    num1 ^= num2;\r
    return std::make_tuple(num1, num2);\r
}\r
`,oy=`def test_kth_bit(num, k)\r
  num & (1 << k) != 0\r
end\r
`,cy=`def set_kth_bit(num, k)\r
  num | (1 << k)\r
end\r
`,uy=`def clear_kth_bit(num, k)\r
  num & ~(1 << k)\r
end\r
`,dy=`def toggle_kth_bit(num, k)\r
  num ^ (1 << k)\r
end\r
`,fy=`def get_rightmost_set_bit(num)\r
  num & -num\r
end\r
`,hy=`def count_set_bits(num)\r
  num.to_s(2).count('1')\r
end\r
`,gy=`def multiply_by_power_of_two(num, k)\r
  num << k\r
end\r
`,py=`def divide_by_power_of_two(num, k)\r
  num >> k\r
end\r
`,my=`def is_power_of_two(num)\r
  (num & (num - 1)) == 0\r
end\r
`,by=`# in-memory swaps\r
# unnecessary for modern languages\r
def swap_variables(num1, num2)\r
  num1 ^= num2\r
  num2 ^= num1\r
  num1 ^= num2\r
\r
  return num1, num2\r
end\r
`,_y=`---@param num integer
---@param k integer
---@return boolean
function test_kth_bit(num, k)
    return num & (1 << k) != 0
end
`,xy=`---@param num integer
---@param k integer
---@return integer
function set_kth_bit(num, k)
    return num | (1 << k)
end
`,vy=`---@param num integer
---@param k integer
---@return integer
function clear_kth_bit(num, k)
    return num & ~(1 << k)
end
`,yy=`---@param num integer
---@param k integer
---@return integer
function toggle_kth_bit(num, k)
    return num ^ (1 << k)
end
`,Ty=`---@param num integer
---@return integer
function get_rightmost_set_bit(num)
    return num & -num
end
`,Sy=`---@param num integer
---@return integer
function count_set_bits(num)
    local count = 0

    while num > 0 do
        count = count + (num & 1)
        num = num >> 1
    end

    return count
end
`,jy=`---@param num integer
---@param k integer
---@return integer
function multiply_by_power_of_two(num, k)
    return num << k
end
`,Ny=`---@param num integer
---@param k integer
---@return integer
function divide_by_power_of_two(num, k)
    return num >> k
end
`,Ey=`---@param num integer
---@return boolean
function is_power_of_two(num)
    return (num & (num - 1)) == 0
end
`,Ay=`---@param num1 integer
---@param num2 integer
---@return integer, integer
function swap_variables(num1, num2)
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
    return num1, num2
end
`;function Oy(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Bit Manipulation"}),a.jsx("section",{id:"bitmanipulation-test-kth-bit",children:a.jsxs(o,{title:"test kth-bit",children:[a.jsx(o.Tab,{code:Tv,language:"python"}),a.jsx(o.Tab,{code:Rv,language:"javascript"}),a.jsx(o.Tab,{code:Gv,language:"java"}),a.jsx(o.Tab,{code:Pv,language:"cpp"}),a.jsx(o.Tab,{code:oy,language:"ruby"}),a.jsx(o.Tab,{code:_y,language:"lua"})]})}),a.jsx("section",{id:"bitmanipulation-set-kth-bit",children:a.jsxs(o,{title:"set kth bit",children:[a.jsx(o.Tab,{code:Sv,language:"python"}),a.jsx(o.Tab,{code:Lv,language:"javascript"}),a.jsx(o.Tab,{code:Vv,language:"java"}),a.jsx(o.Tab,{code:$v,language:"cpp"}),a.jsx(o.Tab,{code:cy,language:"ruby"}),a.jsx(o.Tab,{code:xy,language:"lua"})]})}),a.jsx("section",{id:"bitmanipulation-clear-kth-bit",children:a.jsxs(o,{title:"clear kth bit",children:[a.jsx(o.Tab,{code:jv,language:"python"}),a.jsx(o.Tab,{code:zv,language:"javascript"}),a.jsx(o.Tab,{code:Kv,language:"java"}),a.jsx(o.Tab,{code:ny,language:"cpp"}),a.jsx(o.Tab,{code:uy,language:"ruby"}),a.jsx(o.Tab,{code:vy,language:"lua"})]})}),a.jsx("section",{id:"bitmanipulation-toggle-kth-bit",children:a.jsxs(o,{title:"toggle kth bit",children:[a.jsx(o.Tab,{code:Nv,language:"python"}),a.jsx(o.Tab,{code:Dv,language:"javascript"}),a.jsx(o.Tab,{code:Qv,language:"java"}),a.jsx(o.Tab,{code:ry,language:"cpp"}),a.jsx(o.Tab,{code:dy,language:"ruby"}),a.jsx(o.Tab,{code:yy,language:"lua"})]})}),a.jsx("section",{id:"bitmanipulation-get-rightmost-bit",children:a.jsxs(o,{title:"get rightmost bit",children:[a.jsx(o.Tab,{code:Ev,language:"python"}),a.jsx(o.Tab,{code:Bv,language:"javascript"}),a.jsx(o.Tab,{code:Jv,language:"java"}),a.jsx(o.Tab,{code:ey,language:"cpp"}),a.jsx(o.Tab,{code:fy,language:"ruby"}),a.jsx(o.Tab,{code:Ty,language:"lua"})]})}),a.jsx("section",{id:"bitmanipulation-count-set-bits",children:a.jsxs(o,{title:"count set bits",children:[a.jsx(o.Tab,{code:Av,language:"python"}),a.jsx(o.Tab,{code:Cv,language:"javascript"}),a.jsx(o.Tab,{code:Xv,language:"java"}),a.jsx(o.Tab,{code:ty,language:"cpp"}),a.jsx(o.Tab,{code:hy,language:"ruby"}),a.jsx(o.Tab,{code:Sy,language:"lua"})]})}),a.jsx("section",{id:"bitmanipulation-multiply-power-of-two",children:a.jsxs(o,{title:"multiply by 2^k",children:[a.jsx(o.Tab,{code:Ov,language:"python"}),a.jsx(o.Tab,{code:Uv,language:"javascript"}),a.jsx(o.Tab,{code:Iv,language:"java"}),a.jsx(o.Tab,{code:ay,language:"cpp"}),a.jsx(o.Tab,{code:gy,language:"ruby"}),a.jsx(o.Tab,{code:jy,language:"lua"})]})}),a.jsx("section",{id:"bitmanipulation-divide-power-of-two",children:a.jsxs(o,{title:"divide by 2^k",children:[a.jsx(o.Tab,{code:wv,language:"python"}),a.jsx(o.Tab,{code:Hv,language:"javascript"}),a.jsx(o.Tab,{code:Zv,language:"java"}),a.jsx(o.Tab,{code:iy,language:"cpp"}),a.jsx(o.Tab,{code:py,language:"ruby"}),a.jsx(o.Tab,{code:Ny,language:"lua"})]})}),a.jsx("section",{id:"bitmanipulation-check-power-of-two",children:a.jsxs(o,{title:"check if number is power of 2",children:[a.jsx(o.Tab,{code:kv,language:"python"}),a.jsx(o.Tab,{code:qv,language:"javascript"}),a.jsx(o.Tab,{code:Fv,language:"java"}),a.jsx(o.Tab,{code:ly,language:"cpp"}),a.jsx(o.Tab,{code:my,language:"ruby"}),a.jsx(o.Tab,{code:Ey,language:"lua"})]})}),a.jsx("section",{id:"bitmanipulation-swap-variables",children:a.jsxs(o,{title:"swap two variables",children:[a.jsx(o.Tab,{code:Mv,language:"python"}),a.jsx(o.Tab,{code:Yv,language:"javascript"}),a.jsx(o.Tab,{code:Wv,language:"java"}),a.jsx(o.Tab,{code:sy,language:"cpp"}),a.jsx(o.Tab,{code:by,language:"ruby"}),a.jsx(o.Tab,{code:Ay,language:"lua"})]})})]})}const wy=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    create_matrix = [[0 for _ in range(c)] for _ in range(r)]\r
    copy_matrix = [row[:] for row in matrix]\r
`,ky=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    main_diagonal = [matrix[i][i] for i in range(min(r, c))]\r
    anti_diagonal = [matrix[i][~i] for i in range(min(r, c))]\r
`,My=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    transpose_tuple = zip(*matrix)\r
    transpose = [list(row) for row in transpose_tuple]\r
    rotate_left = transpose[::-1]\r
    rotate_right = [row[::-1] for row in transpose]\r
`,Ry=`const fn = (matrix) => {\r
    const r = matrix.length;\r
    const c = matrix[0].length;\r
\r
    const createMatrix = Array.from({ length: r }, () => Array(c).fill(0))\r
    const copyMatrix = matrix.map(row => [...row])\r
}\r
`,Ly=`const fn = (matrix) => {\r
    const r = matrix.length\r
    const c = matrix[0].length\r
\r
    const mainDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][i])\r
    const antiDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][~i])\r
}\r
`,zy=`const fn = (matrix) => {\r
    const r = matrix.length\r
    const c = matrix[0].length\r
\r
    const transposeTuple = matrix[0].map((_, i) => matrix.map(row => row[i]))\r
    const transpose = transposeTuple.map(row => [...row])\r
    const rotateLeft = transpose.reverse()\r
    const rotateRight = transpose.map(row => row.reverse())\r
}\r
`,Dy=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public void fn(List<List<Integer>> matrix) {\r
    List<List<Integer>> createMatrix = new ArrayList<>();\r
    List<List<Integer>> copyMatrix = new ArrayList<>();\r
    int r = matrix.size();\r
    int c = matrix.get(0).size();\r
\r
    for (int i = 0; i < r; i++) {\r
        List<Integer> row = new ArrayList<>();\r
\r
        for (int j = 0; j < c; j++) {\r
            row.add(0);\r
        }\r
\r
        createMatrix.add(row);\r
    }\r
\r
    for (List<Integer> row : matrix) {\r
        copyMatrix.add(new ArrayList<>(row));\r
    }\r
}\r
`,By=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public void fn(List<List<Integer>> matrix) {\r
    List<Integer> mainDiagonal = new ArrayList<>();\r
    List<Integer> antiDiagonal = new ArrayList<>();\r
    int r = matrix.size();\r
    int c = matrix.get(0).size();\r
\r
    for (int i = 0; i < Math.min(r, c); i++) {\r
        mainDiagonal.add(matrix.get(i).get(i));\r
    }\r
\r
    for (int i = 0; i < Math.min(r, c); i++) {\r
        antiDiagonal.add(matrix.get(i).get(c - 1 - i));\r
    }\r
}\r
`,Cy=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public static void fn(List<List<Integer>> matrix) {\r
    List<List<Integer>> transpose = new ArrayList<>();\r
    List<List<Integer>> rotateLeft = new ArrayList<>();\r
    List<List<Integer>> rotateRight = new ArrayList<>();\r
    int r = matrix.size();\r
    int c = matrix.get(0).size();\r
\r
    for (int j = 0; j < c; j++) {\r
        List<Integer> newRow = new ArrayList<>();\r
\r
        for (int i = 0; i < r; i++) {\r
            newRow.add(matrix.get(i).get(j));\r
        }\r
\r
        transpose.add(newRow);\r
    }\r
\r
    for (int i = transpose.size() - 1; i >= 0; i--) {\r
        rotateLeft.add(transpose.get(i));\r
    }\r
\r
    for (List<Integer> row : transpose) {\r
        List<Integer> newRow = new ArrayList<>();\r
\r
        for (int i = row.size() - 1; i >= 0; i--) {\r
            newRow.add(row.get(i));\r
        }\r
\r
        rotateRight.add(newRow);\r
    }\r
}\r
`,Uy=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void fn(vector<vector<int>>& matrix) {\r
    int r = matrix.size();\r
    int c = matrix[0].size();\r
\r
    vector<vector<int>> create_matrix(r, vector<int>(c, 0));\r
    vector<vector<int>> copy_matrix(matrix);\r
}\r
`,Hy=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void fn(vector<vector<int>>& matrix) {\r
    int r = matrix.size();\r
    int c = matrix[0].size();\r
\r
    vector<int> main_diagonal;\r
    vector<int> anti_diagonal;\r
\r
    for (int i = 0; i < min(r, c); ++i) {\r
        main_diagonal.push_back(matrix[i][i]);\r
        anti_diagonal.push_back(matrix[i][c - i - 1]);\r
    }\r
}\r
`,qy=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void fn(vector<vector<int>>& matrix) {\r
    int r = matrix.size();\r
    int c = matrix[0].size();\r
    vector<vector<int>> transpose(c, vector<int>(r));\r
    vector<vector<int>> rotate_left(c, vector<int>(r));\r
    vector<vector<int>> rotate_right(c, vector<int>(r));\r
\r
    for (int i = 0; i < r; ++i) {\r
        for (int j = 0; j < c; ++j) {\r
            transpose[j][i] = matrix[i][j];\r
        }\r
    }\r
\r
    for (int i = 0; i < c; ++i) {\r
        for (int j = 0; j < r; ++j) {\r
            rotate_left[i][j] = transpose[c - i - 1][j];\r
        }\r
    }\r
\r
    for (int i = 0; i < c; ++i) {\r
        for (int j = 0; j < r; ++j) {\r
            rotate_right[i][j] = transpose[i][r - j - 1];\r
        }\r
    }\r
}\r
`,Yy=`def fn(matrix)\r
  r = matrix.size\r
  c = matrix[0].size\r
\r
  create_matrix = Array.new(r) { Array.new(c, 0) }\r
  copy_matrix = matrix.map(&:dup)\r
end\r
`,Gy=`def fn(matrix)\r
  r = matrix.size\r
  c = matrix[0].size\r
\r
  main_diagonal = (0...[r, c].min).map { |i| matrix[i][i] }\r
  anti_diagonal = (0...[r, c].min).map { |i| matrix[i][-i - 1] }\r
end\r
`,Vy=`def fn(matrix)\r
  r = matrix.size\r
  c = matrix[0].size\r
\r
  transpose = matrix[0].zip(*matrix[1..-1])\r
  rotate_left = transpose.reverse\r
  rotate_right = transpose.map(&:reverse)\r
end\r
`,Ky=`---@param matrix integer[][]
function fn(matrix)
    local r = #matrix
    local c = #matrix[1]

    local create_matrix = {}
    for i = 1, r do
        create_matrix[i] = {}
        for j = 1, c do
            create_matrix[i][j] = 0
        end
    end

    local copy_matrix = {}
    for i = 1, r do
        copy_matrix[i] = {}
        for j = 1, c do
            copy_matrix[i][j] = matrix[i][j]
        end
    end
end
`,Qy=`---@param matrix integer[][]
function fn(matrix)
    local r = #matrix
    local c = #matrix[1]
    local min_dim = math.min(r, c)

    local main_diagonal = {}
    local anti_diagonal = {}

    for i = 1, min_dim do
        table.insert(main_diagonal, matrix[i][i])
        table.insert(anti_diagonal, matrix[i][c - i + 1])
    end
end
`,Jy=`---@param matrix integer[][]
function fn(matrix)
    local r = #matrix
    local c = #matrix[1]

    local transpose = {}
    for j = 1, c do
        transpose[j] = {}
        for i = 1, r do
            transpose[j][i] = matrix[i][j]
        end
    end

    local rotate_left = {}
    local tr = #transpose
    for i = 1, tr do
        rotate_left[tr - i + 1] = transpose[i]
    end

    local rotate_right = {}
    for i = 1, #transpose do
        rotate_right[i] = {}
        local row_len = #transpose[i]
        for j = 1, row_len do
            rotate_right[i][j] = transpose[i][row_len - j + 1]
        end
    end
end
`;function Xy(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Matrix"}),a.jsx("section",{id:"matrix-create-copy",children:a.jsxs(o,{title:"create / copy",children:[a.jsx(o.Tab,{code:wy,language:"python"}),a.jsx(o.Tab,{code:Ry,language:"javascript"}),a.jsx(o.Tab,{code:Dy,language:"java"}),a.jsx(o.Tab,{code:Uy,language:"cpp"}),a.jsx(o.Tab,{code:Yy,language:"ruby"}),a.jsx(o.Tab,{code:Ky,language:"lua"})]})}),a.jsx("section",{id:"matrix-diagonals",children:a.jsxs(o,{title:"diagonals / anti-diagonals",children:[a.jsx(o.Tab,{code:ky,language:"python"}),a.jsx(o.Tab,{code:Ly,language:"javascript"}),a.jsx(o.Tab,{code:By,language:"java"}),a.jsx(o.Tab,{code:Hy,language:"cpp"}),a.jsx(o.Tab,{code:Gy,language:"ruby"}),a.jsx(o.Tab,{code:Qy,language:"lua"})]})}),a.jsx("section",{id:"matrix-rotate-transpose",children:a.jsxs(o,{title:"rotate / transpose",children:[a.jsx(o.Tab,{code:My,language:"python"}),a.jsx(o.Tab,{code:zy,language:"javascript"}),a.jsx(o.Tab,{code:Cy,language:"java"}),a.jsx(o.Tab,{code:qy,language:"cpp"}),a.jsx(o.Tab,{code:Vy,language:"ruby"}),a.jsx(o.Tab,{code:Jy,language:"lua"})]})})]})}const Iy=`from typing import Any\r
\r
\r
class Array:\r
    def __init__(self, size: int) -> None:\r
        self.size = size\r
        self.data = [None] * size\r
\r
    def __getitem__(self, index: int) -> Any:\r
        return self.data[index]\r
\r
    def __setitem__(self, index: int, value: Any) -> None:\r
        self.data[index] = value\r
\r
    def __len__(self) -> int:\r
        return len(self.data)\r
\r
    def __repr__(self) -> str:\r
        return repr(self.data)\r
`,Zy=`from typing import Any\r
\r
\r
class TreeNode:\r
    def __init__(self, data: Any) -> None:\r
        self.data = data\r
        self.left = None\r
        self.right = None\r
\r
\r
class BinaryTree:\r
    def __init__(self) -> None:\r
        self.root = None\r
\r
    def insert(self, data: Any) -> None:\r
        if not self.root:\r
            self.root = TreeNode(data)\r
        else:\r
            self.insert_node(self.root, data)\r
\r
    def insert_node(self, node: TreeNode | None, data: Any) -> TreeNode:\r
        if not node:\r
            return TreeNode(data)\r
\r
        if not node.left:\r
            node.left = TreeNode(data)\r
        elif not node.right:\r
            node.right = TreeNode(data)\r
        else:\r
            node.left = self.insert_node(node.left, data)\r
\r
        return node\r
\r
    def __repr__(self) -> str:\r
        return 'Empty tree' if not self.root else self._print_tree(self.root, '', True)\r
\r
    def _print_tree(self, node: TreeNode | None, prefix: str, is_left: bool) -> str:\r
        if node is None:\r
            return ''\r
\r
        result = ''\r
        result += self._print_tree(node.right, prefix + ('│   ' if is_left else '    '), False)\r
        result += prefix + ('└── ' if is_left else '┌── ') + str(node.data) + '\\n'\r
        result += self._print_tree(node.left, prefix + ('    ' if is_left else '│   '), True)\r
\r
        return result\r
`,Fy=`from typing import Any\r
\r
\r
class TreeNode:\r
    def __init__(self, data: Any) -> None:\r
        self.data = data\r
        self.left = None\r
        self.right = None\r
\r
\r
class BinarySearchTree:\r
    def __init__(self) -> None:\r
        self.root = None\r
\r
    def insert(self, data: Any) -> None:\r
        if not self.root:\r
            self.root = TreeNode(data)\r
        else:\r
            self.insert_node(self.root, data)\r
\r
    def insert_node(self, node: TreeNode | None, data: Any) -> None:\r
        if data < node.data:\r
            if not node.left:\r
                node.left = TreeNode(data)\r
            else:\r
                self.insert_node(node.left, data)\r
        else:\r
            if not node.right:\r
                node.right = TreeNode(data)\r
            else:\r
                self.insert_node(node.right, data)\r
\r
    def __repr__(self) -> str:\r
        return 'Empty tree' if not self.root else self._print_tree(self.root, '', True)\r
\r
    def _print_tree(self, node: TreeNode | None, prefix: str, is_left: bool) -> str:\r
        if node is None:\r
            return ''\r
\r
        result = ''\r
        result += self._print_tree(node.right, prefix + ('│   ' if is_left else '    '), False)\r
        result += prefix + ('└── ' if is_left else '┌── ') + str(node.data) + '\\n'\r
        result += self._print_tree(node.left, prefix + ('    ' if is_left else '│   '), True)\r
\r
        return result\r
`,Wy=`from typing import Any\r
\r
\r
class ListNode:\r
    def __init__(self, data: Any) -> None:\r
        self.data = data\r
        self.next = None\r
\r
    def __repr__(self) -> str:\r
        return f'[{self.data}]'\r
\r
\r
class LinkedList:\r
    def __init__(self) -> None:\r
        self.head = None\r
\r
    def append(self, data: Any) -> None:\r
        if not self.head:\r
            self.head = ListNode(data)\r
            return\r
\r
        curr = self.head\r
\r
        while curr.next:\r
            curr = curr.next\r
\r
        curr.next = ListNode(data)\r
\r
    def delete(self, data: Any) -> None:\r
        if not self.head:\r
            return\r
\r
        if self.head.data == data:\r
            self.head = self.head.next\r
            return\r
\r
        prev = None\r
        curr = self.head\r
\r
        while curr:\r
            if curr.data == data:\r
                prev.next = curr.next\r
                return\r
\r
            prev = curr\r
            curr = curr.next\r
\r
    def reverse(self) -> None:\r
        prev = None\r
        curr = self.head\r
\r
        while curr:\r
            nxt = curr.next\r
            curr.next = prev\r
            prev = curr\r
            curr = nxt\r
\r
        self.head = prev\r
\r
    def __repr__(self) -> str:\r
        if not self.head:\r
            return 'None'\r
\r
        nodes = []\r
        node = self.head\r
\r
        while node:\r
            nodes.append(repr(node))\r
            node = node.next\r
\r
        return ' -> '.join(nodes) + ' -> None'\r
`,Py=`from typing import Any\r
\r
\r
class ListNode:\r
    def __init__(self, data: Any) -> None:\r
        self.data = data\r
        self.prev = None\r
        self.next = None\r
\r
    def __repr__(self) -> str:\r
        return f'[{self.data}]'\r
\r
\r
class DoublyLinkedList:\r
    def __init__(self) -> None:\r
        self.head = None\r
\r
    def append(self, data: Any) -> None:\r
        if not self.head:\r
            self.head = ListNode(data)\r
            return\r
\r
        curr = self.head\r
\r
        while curr.next:\r
            curr = curr.next\r
\r
        new_node = ListNode(data)\r
        curr.next = new_node\r
        new_node.prev = curr\r
\r
    def delete(self, data: Any) -> None:\r
        if not self.head:\r
            return\r
\r
        if self.head.data == data:\r
            self.head = self.head.next\r
            if self.head:\r
                self.head.prev = None\r
            return\r
\r
        curr = self.head\r
        while curr:\r
            if curr.data == data:\r
                prev_node = curr.prev\r
                prev_node.next = curr.next\r
                if curr.next:\r
                    curr.next.prev = prev_node\r
                return\r
            curr = curr.next\r
\r
    def reverse(self) -> None:\r
        curr = self.head\r
        prev = None\r
\r
        while curr:\r
            nxt = curr.next\r
            curr.next = prev\r
            curr.prev = nxt\r
            prev = curr\r
            curr = nxt\r
\r
        self.head = prev\r
\r
    def __repr__(self) -> str:\r
        if not self.head:\r
            return 'None'\r
\r
        nodes = []\r
        curr = self.head\r
\r
        while curr:\r
            nodes.append(repr(curr))\r
            curr = curr.next\r
\r
        return ' <-> '.join(nodes) + ' <-> None'\r
`,$y=`class Graph:\r
    def __init__(self) -> None:\r
        self.graph = {}\r
\r
    def add_vertex(self, vertex: str) -> None:\r
        if vertex not in self.graph:\r
            self.graph[vertex] = []\r
\r
    def add_edge(self, a: str, b: str) -> None:\r
        self.add_vertex(a)\r
        self.add_vertex(b)\r
        self.graph[a].append(b)\r
        self.graph[b].append(a)\r
\r
    def get_neighbors(self, vertex: str) -> list[str]:\r
        return self.graph.get(vertex, [])\r
\r
    def __repr__(self) -> str:\r
        output = ''\r
\r
        for vertex, neighbors in self.graph.items():\r
            output += f'{vertex} - {' - '.join(neighbors)}\\n'\r
\r
        return output\r
`,nT=`from typing import Any\r
\r
\r
class HashMap:\r
    def __init__(self) -> None:\r
        self.size = 100000\r
        self.bucket = [None] * self.size\r
\r
    def _hash(self, key: int) -> int:\r
        return hash(key) % self.size\r
\r
    def __setitem__(self, key: int, value: Any) -> None:\r
        self.bucket[self._hash(key)] = value\r
\r
    def __getitem__(self, key: int) -> Any:\r
        return self.bucket[self._hash(key)]\r
\r
    def __delitem__(self, key: int) -> None:\r
        self.bucket[self._hash(key)] = None\r
`,rT=`class TrieNode:\r
    def __init__(self) -> None:\r
        self.children = {}\r
        self.is_word = False\r
\r
\r
class Trie:\r
    def __init__(self) -> None:\r
        self.root = TrieNode()\r
\r
    def build(self, words: list[str]) -> None:\r
        for word in words:\r
            self.insert(word)\r
\r
    def insert(self, word: str) -> None:\r
        node = self.root\r
\r
        for char in word:\r
            if char not in node.children:\r
                node.children[char] = TrieNode()\r
            node = node.children[char]\r
\r
        node.is_word = True\r
\r
    def search(self, word: str) -> bool:\r
        node = self.root\r
\r
        for char in word:\r
            if char not in node.children:\r
                return False\r
            node = node.children[char]\r
\r
        return node.is_word\r
\r
    def starts_with(self, prefix: str) -> bool:\r
        node = self.root\r
\r
        for char in prefix:\r
            if char not in node.children:\r
                return False\r
            node = node.children[char]\r
\r
        return True\r
\r
    def collect_words(self, node: TrieNode, prefix: str) -> list[str]:\r
        words = []\r
\r
        if node.is_word:\r
            words.append(prefix)\r
\r
        for char, child_node in node.children.items():\r
            words.extend(self.collect_words(child_node, prefix + char))\r
\r
        return words\r
\r
    def __repr__(self) -> str:\r
        return 'Trie:\\n' + self._print_trie(self.root)\r
\r
    def _print_trie(self, node: TrieNode | None, level: int = 0, prefix: str = '') -> str:\r
        output = ''\r
        prefix_str = '    ' * level + prefix\r
\r
        if not node:\r
            return output\r
\r
        if node.is_word:\r
            output += prefix_str + ' ├─ ' + '(*)' + '\\n'\r
\r
        for i, (char, child_node) in enumerate(node.children.items()):\r
            is_last = i == len(node.children) - 1\r
            marker = '└─ ' if is_last else '├─ '\r
            output += prefix_str + marker + char + '\\n'\r
            output += self._print_trie(child_node, level + 1, '    │' if not is_last else '     ')\r
\r
        return output\r
`,eT=`class UnionFind:\r
    def __init__(self, n: int) -> None:\r
        self.root = list(range(n))\r
\r
    def find(self, a: int) -> int:\r
        return a if a == self.root[a] else self.find(self.root[a])\r
\r
    def union(self, a: int, b: int) -> None:\r
        self.root[self.find(a)] = self.find(b)\r
\r
    def connected(self, a: int, b: int) -> bool:\r
        return self.find(a) == self.find(b)\r
\r
    def __repr__(self) -> str:\r
        n = len(self.root)\r
        lines = []\r
        components = {}\r
\r
        for i in range(n):\r
            root = self.find(i)\r
\r
            if root not in components:\r
                components[root] = []\r
\r
            components[root].append(i)\r
\r
        for component in components.values():\r
            lines.append(' - '.join(f'({node})' for node in component))\r
\r
        return '\\n'.join(lines)\r
`,tT=`class UnionFind:\r
    def __init__(self, n: int) -> None:\r
        self.root = list(range(n))\r
        self.rank = [1] * n\r
\r
    def find(self, a: int) -> int:\r
        return a if a == self.root[a] else self.find(self.root[a])\r
\r
    def union(self, a: int, b: int) -> None:\r
        root_a = self.find(a)\r
        root_b = self.find(b)\r
\r
        if root_a != root_b:\r
            if self.rank[root_a] < self.rank[root_b]:\r
                self.root[root_a] = root_b\r
            elif self.rank[root_a] > self.rank[root_b]:\r
                self.root[root_b] = root_a\r
            else:\r
                self.root[root_b] = root_a\r
                self.rank[root_a] += 1\r
\r
    def connected(self, a: int, b: int) -> bool:\r
        return self.find(a) == self.find(b)\r
\r
    def __repr__(self) -> str:\r
        n = len(self.root)\r
        lines = []\r
        components = {}\r
\r
        for i in range(n):\r
            root = self.find(i)\r
\r
            if root not in components:\r
                components[root] = []\r
\r
            components[root].append(i)\r
\r
        for component in components.values():\r
            lines.append(' - '.join(f'({node})' for node in component))\r
\r
        return '\\n'.join(lines)\r
`,aT=`class Array {\r
    constructor(size) {\r
        this.size = size\r
        this.data = new Array(size).fill(null)\r
    }\r
\r
    getItem(index) {\r
        return this.data[index]\r
    }\r
\r
    setItem(index, value) {\r
        this.data[index] = value\r
    }\r
\r
    get length() {\r
        return this.data.length\r
    }\r
\r
    toString() {\r
        return this.data.toString()\r
    }\r
}\r
`,iT=`class TreeNode {\r
    constructor(data) {\r
        this.data = data\r
        this.left = null\r
        this.right = null\r
    }\r
}\r
\r
class BinaryTree {\r
    constructor() {\r
        this.root = null\r
    }\r
\r
    insert(data) {\r
        if (!this.root) {\r
            this.root = new TreeNode(data)\r
        } else {\r
            this.insertNode(this.root, data)\r
        }\r
    }\r
\r
    insertNode(node, data) {\r
        if (!node) {\r
            return new TreeNode(data)\r
        }\r
\r
        if (!node.left) {\r
            node.left = new TreeNode(data)\r
        } else if (!node.right) {\r
            node.right = new TreeNode(data)\r
        } else {\r
            node.left = this.insertNode(node.left, data)\r
        }\r
\r
        return node\r
    }\r
\r
    toString() {\r
        return this.root ? this.printTree(this.root, '', true) : 'Empty tree'\r
    }\r
\r
    printTree(node, prefix, isLeft) {\r
        if (!node) {\r
            return ''\r
        }\r
\r
        let result = ''\r
        result += this.printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false)\r
        result += prefix + (isLeft ? '└── ' : '┌── ') + node.data + '\\n'\r
        result += this.printTree(node.left, prefix + (isLeft ? '    ' : '│   '), true)\r
\r
        return result\r
    }\r
}\r
`,lT=`class TreeNode {\r
    constructor(data) {\r
        this.data = data\r
        this.left = null\r
        this.right = null\r
    }\r
}\r
\r
class BinarySearchTree {\r
    constructor() {\r
        this.root = null\r
    }\r
\r
    insert(data) {\r
        if (!this.root) {\r
            this.root = new TreeNode(data)\r
        } else {\r
            this._insertNode(this.root, data)\r
        }\r
    }\r
\r
    _insertNode(node, data) {\r
        if (data < node.data) {\r
            if (!node.left) {\r
                node.left = new TreeNode(data)\r
            } else {\r
                this._insertNode(node.left, data)\r
            }\r
        } else {\r
            if (!node.right) {\r
                node.right = new TreeNode(data)\r
            } else {\r
                this._insertNode(node.right, data)\r
            }\r
        }\r
    }\r
\r
    toString() {\r
        return this.root ? this._printTree(this.root, '', true) : 'Empty tree'\r
    }\r
\r
    _printTree(node, prefix, isLeft) {\r
        if (!node) {\r
            return ''\r
        }\r
\r
        let result = ''\r
        result += this._printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false)\r
        result += prefix + (isLeft ? '└── ' : '┌── ') + node.data + '\\n'\r
        result += this._printTree(node.left, prefix + (isLeft ? '    ' : '│   '), true)\r
\r
        return result\r
    }\r
}\r
`,sT=`class ListNode {\r
    constructor(data) {\r
        this.data = data\r
        this.next = null\r
    }\r
\r
    toString() {\r
        return \`[\${this.data}]\`\r
    }\r
}\r
\r
class LinkedList {\r
    constructor() {\r
        this.head = null\r
    }\r
\r
    append(data) {\r
        if (!this.head) {\r
            this.head = new ListNode(data)\r
            return\r
        }\r
\r
        let curr = this.head\r
        while (curr.next) {\r
            curr = curr.next\r
        }\r
\r
        curr.next = new ListNode(data)\r
    }\r
\r
    delete(data) {\r
        if (!this.head) {\r
            return\r
        }\r
\r
        if (this.head.data === data) {\r
            this.head = this.head.next\r
            return\r
        }\r
\r
        let prev = null\r
        let curr = this.head\r
\r
        while (curr) {\r
            if (curr.data === data) {\r
                prev.next = curr.next\r
                return\r
            }\r
\r
            prev = curr\r
            curr = curr.next\r
        }\r
    }\r
\r
    reverse() {\r
        let prev = null\r
        let curr = this.head\r
\r
        while (curr) {\r
            let nxt = curr.next\r
            curr.next = prev\r
            prev = curr\r
            curr = nxt\r
        }\r
\r
        this.head = prev\r
    }\r
\r
    toString() {\r
        if (!this.head) {\r
            return 'None'\r
        }\r
\r
        let nodes = []\r
        let node = this.head\r
\r
        while (node) {\r
            nodes.push(node.toString())\r
            node = node.next\r
        }\r
\r
        return nodes.join(' -> ') + ' -> None'\r
    }\r
}\r
`,oT=`class ListNode {\r
    constructor(data) {\r
        this.data = data\r
        this.prev = null\r
        this.next = null\r
    }\r
\r
    toString() {\r
        return \`[\${this.data}]\`\r
    }\r
}\r
\r
class DoublyLinkedList {\r
    constructor() {\r
        this.head = null\r
    }\r
\r
    append(data) {\r
        if (!this.head) {\r
            this.head = new ListNode(data)\r
            return\r
        }\r
\r
        let curr = this.head\r
        while (curr.next) {\r
            curr = curr.next\r
        }\r
\r
        const new_node = new ListNode(data)\r
        curr.next = new_node\r
        new_node.prev = curr\r
    }\r
\r
    delete(data) {\r
        if (!this.head) {\r
            return\r
        }\r
\r
        if (this.head.data === data) {\r
            this.head = this.head.next\r
            if (this.head) {\r
                this.head.prev = null\r
            }\r
            return\r
        }\r
\r
        let curr = this.head\r
        while (curr) {\r
            if (curr.data === data) {\r
                const prev_node = curr.prev\r
                prev_node.next = curr.next\r
                if (curr.next) {\r
                    curr.next.prev = prev_node\r
                }\r
                return\r
            }\r
            curr = curr.next\r
        }\r
    }\r
\r
    reverse() {\r
        let curr = this.head\r
        let prev = null\r
\r
        while (curr) {\r
            const nxt = curr.next\r
            curr.next = prev\r
            curr.prev = nxt\r
            prev = curr\r
            curr = nxt\r
        }\r
\r
        this.head = prev\r
    }\r
\r
    toString() {\r
        if (!this.head) {\r
            return 'None'\r
        }\r
\r
        const nodes = []\r
        let curr = this.head\r
\r
        while (curr) {\r
            nodes.push(curr.toString())\r
            curr = curr.next\r
        }\r
\r
        return nodes.join(' <-> ') + ' <-> None'\r
    }\r
}\r
`,cT=`class Graph {\r
    constructor() {\r
        this.graph = {}\r
    }\r
\r
    addVertex(vertex) {\r
        if (!(vertex in this.graph)) {\r
            this.graph[vertex] = []\r
        }\r
    }\r
\r
    addEdge(a, b) {\r
        this.addVertex(a)\r
        this.addVertex(b)\r
        this.graph[a].push(b)\r
        this.graph[b].push(a)\r
    }\r
\r
    getNeighbors(vertex) {\r
        return this.graph[vertex] || []\r
    }\r
\r
    toString() {\r
        let output = ''\r
\r
        for (const [vertex, neighbors] of Object.entries(this.graph)) {\r
            output += \`\${vertex} - \${neighbors.join(' - ')}\\n\`\r
        }\r
\r
        return output\r
    }\r
}\r
`,uT=`class HashMap {\r
    constructor() {\r
        this.size = 100000\r
        this.bucket = new Array(this.size).fill(null)\r
    }\r
\r
    _hash(key) {\r
        return key % this.size\r
    }\r
\r
    setItem(key, value) {\r
        this.bucket[this._hash(key)] = value\r
    }\r
\r
    getItem(key) {\r
        return this.bucket[this._hash(key)]\r
    }\r
\r
    deleteItem(key) {\r
        this.bucket[this._hash(key)] = null\r
    }\r
}\r
`,dT=`class TrieNode {\r
    constructor() {\r
        this.children = {}\r
        this.isWord = false\r
    }\r
}\r
\r
class Trie {\r
    constructor() {\r
        this.root = new TrieNode()\r
    }\r
\r
    build(words) {\r
        for (const word of words) {\r
            this.insert(word)\r
        }\r
    }\r
\r
    insert(word) {\r
        let node = this.root\r
\r
        for (const char of word) {\r
            if (!(char in node.children)) {\r
                node.children[char] = new TrieNode()\r
            }\r
            node = node.children[char]\r
        }\r
\r
        node.isWord = true\r
    }\r
\r
    search(word) {\r
        let node = this.root\r
\r
        for (const char of word) {\r
            if (!(char in node.children)) {\r
                return false\r
            }\r
            node = node.children[char]\r
        }\r
\r
        return node.isWord\r
    }\r
\r
    startsWith(prefix) {\r
        let node = this.root\r
\r
        for (const char of prefix) {\r
            if (!(char in node.children)) {\r
                return false\r
            }\r
            node = node.children[char]\r
        }\r
\r
        return true\r
    }\r
\r
    collectWords(node, prefix) {\r
        const words = []\r
\r
        if (node.isWord) {\r
            words.push(prefix)\r
        }\r
\r
        for (const [char, childNode] of Object.entries(node.children)) {\r
            words.push(...this.collectWords(childNode, prefix + char))\r
        }\r
\r
        return words\r
    }\r
\r
    toString() {\r
        return 'Trie:\\n' + this._printTrie(this.root)\r
    }\r
\r
    _printTrie(node, level = 0, prefix = '') {\r
        let output = ''\r
        const prefixStr = '    '.repeat(level) + prefix\r
\r
        if (!node) {\r
            return output\r
        }\r
\r
        if (node.isWord) {\r
            output += prefixStr + ' ├─ ' + '(*)' + '\\n'\r
        }\r
\r
        const children = Object.entries(node.children)\r
        children.forEach(([char, childNode], i) => {\r
            const isLast = i === children.length - 1\r
            const marker = isLast ? '└─ ' : '├─ '\r
            output += prefixStr + marker + char + '\\n'\r
            output += this._printTrie(childNode, level + 1, isLast ? '     ' : '    │')\r
        })\r
\r
        return output\r
    }\r
}\r
`,fT=`class UnionFind {\r
    constructor(n) {\r
        this.root = [...Array(n).keys()]\r
    }\r
\r
    find(a) {\r
        return a === this.root[a] ? a : this.find(this.root[a])\r
    }\r
\r
    union(a, b) {\r
        this.root[this.find(a)] = this.find(b)\r
    }\r
\r
    connected(a, b) {\r
        return this.find(a) === this.find(b)\r
    }\r
\r
    toString() {\r
        const n = this.root.length\r
        const lines = []\r
        const components = {}\r
\r
        for (let i = 0; i < n; i++) {\r
            const root = this.find(i)\r
\r
            if (!(root in components)) {\r
                components[root] = []\r
            }\r
\r
            components[root].push(i)\r
        }\r
\r
        for (const component of Object.values(components)) {\r
            lines.push(\`(\${component.join(' - ')})\`)\r
        }\r
\r
        return lines.join('\\n')\r
    }\r
}\r
`,hT=`class UnionFind {\r
    constructor(n) {\r
        this.root = [...Array(n).keys()]\r
        this.rank = Array(n).fill(1)\r
    }\r
\r
    find(a) {\r
        return a === this.root[a] ? a : this.find(this.root[a])\r
    }\r
\r
    union(a, b) {\r
        const rootA = this.find(a)\r
        const rootB = this.find(b)\r
\r
        if (rootA !== rootB) {\r
            if (this.rank[rootA] < this.rank[rootB]) {\r
                this.root[rootA] = rootB\r
            } else if (this.rank[rootA] > this.rank[rootB]) {\r
                this.root[rootB] = rootA\r
            } else {\r
                this.root[rootB] = rootA\r
                this.rank[rootA]++\r
            }\r
        }\r
    }\r
\r
    connected(a, b) {\r
        return this.find(a) === this.find(b)\r
    }\r
\r
    toString() {\r
        const n = this.root.length\r
        const lines = []\r
        const components = {}\r
\r
        for (let i = 0; i < n; i++) {\r
            const root = this.find(i)\r
\r
            if (!(root in components)) {\r
                components[root] = []\r
            }\r
\r
            components[root].push(i)\r
        }\r
\r
        for (const component of Object.values(components)) {\r
            lines.push(component.map(node => \`(\${node})\`).join(' - '))\r
        }\r
\r
        return lines.join('\\n')\r
    }\r
}\r
`,gT=`public class Array<T> {\r
    private int size;\r
    private T[] data;\r
\r
    @SuppressWarnings("unchecked")\r
    public Array(int size) {\r
        this.size = size;\r
        this.data = (T[]) new Object[size];\r
    }\r
\r
    public T get(int index) {\r
        if (index < 0 || index >= size) {\r
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);\r
        }\r
        return data[index];\r
    }\r
\r
    public void set(int index, T value) {\r
        if (index < 0 || index >= size) {\r
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);\r
        }\r
        data[index] = value;\r
    }\r
\r
    public int size() {\r
        return size;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        StringBuilder sb = new StringBuilder("[");\r
\r
        for (int i = 0; i < size; i++) {\r
            sb.append(data[i]);\r
            if (i < size - 1) {\r
                sb.append(", ");\r
            }\r
        }\r
\r
        sb.append("]");\r
        return sb.toString();\r
    }\r
}\r
`,pT=`public class TreeNode<T> {\r
    T data;\r
    TreeNode<T> left;\r
    TreeNode<T> right;\r
\r
    public TreeNode(T data) {\r
        this.data = data;\r
        left = null;\r
        right = null;\r
    }\r
}\r
\r
public class BinaryTree<T> {\r
    TreeNode<T> root;\r
\r
    public BinaryTree() {\r
        root = null;\r
    }\r
\r
    public void insert(T data) {\r
        root = insertNode(root, data);\r
    }\r
\r
    private TreeNode<T> insertNode(TreeNode<T> node, T data) {\r
        if (node == null) {\r
            return new TreeNode<>(data);\r
        }\r
\r
        if (node.left == null) {\r
            node.left = new TreeNode<>(data);\r
        } else if (node.right == null) {\r
            node.right = new TreeNode<>(data);\r
        } else {\r
            node.left = insertNode(node.left, data);\r
        }\r
\r
        return node;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return root == null ? "Empty tree" : printTree(root, "", true);\r
    }\r
\r
    private String printTree(TreeNode<T> node, String prefix, boolean isLeft) {\r
        if (node == null) {\r
            return "";\r
        }\r
\r
        StringBuilder sb = new StringBuilder();\r
        sb.append(printTree(node.right, prefix + (isLeft ? "│   " : "    "), false));\r
        sb.append(prefix).append(isLeft ? "└── " : "┌── ").append(node.data).append("\\n");\r
        sb.append(printTree(node.left, prefix + (isLeft ? "    " : "│   "), true));\r
\r
        return sb.toString();\r
    }\r
}\r
`,mT=`public class TreeNode<T extends Comparable<T>> {\r
    T data;\r
    TreeNode<T> left;\r
    TreeNode<T> right;\r
\r
    public TreeNode(T data) {\r
        this.data = data;\r
        left = null;\r
        right = null;\r
    }\r
}\r
\r
public class BinarySearchTree<T extends Comparable<T>> {\r
    TreeNode<T> root;\r
\r
    public BinarySearchTree() {\r
        root = null;\r
    }\r
\r
    public void insert(T data) {\r
        root = insertNode(root, data);\r
    }\r
\r
    private TreeNode<T> insertNode(TreeNode<T> node, T data) {\r
        if (node == null) {\r
            return new TreeNode<>(data);\r
        }\r
\r
        if (data.compareTo(node.data) < 0) {\r
            node.left = insertNode(node.left, data);\r
        } else if (data.compareTo(node.data) > 0) {\r
            node.right = insertNode(node.right, data);\r
        }\r
\r
        return node;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return root == null ? "Empty tree" : printTree(root, "", true);\r
    }\r
\r
    private String printTree(TreeNode<T> node, String prefix, boolean isLeft) {\r
        if (node == null) {\r
            return "";\r
        }\r
\r
        StringBuilder sb = new StringBuilder();\r
        sb.append(printTree(node.right, prefix + (isLeft ? "│   " : "    "), false));\r
        sb.append(prefix).append(isLeft ? "└── " : "┌── ").append(node.data).append("\\n");\r
        sb.append(printTree(node.left, prefix + (isLeft ? "    " : "│   "), true));\r
\r
        return sb.toString();\r
    }\r
}\r
`,bT=`class ListNode {\r
    public int data;\r
    public ListNode next;\r
\r
    public ListNode(int data) {\r
        this.data = data;\r
        this.next = null;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return "[" + data + "]";\r
    }\r
}\r
\r
class LinkedList {\r
    private ListNode head;\r
\r
    public LinkedList() {\r
        this.head = null;\r
    }\r
\r
    public void append(int data) {\r
        if (head == null) {\r
            head = new ListNode(data);\r
            return;\r
        }\r
\r
        ListNode current = head;\r
\r
        while (current.next != null) {\r
            current = current.next;\r
        }\r
\r
        current.next = new ListNode(data);\r
    }\r
\r
    public void delete(int data) {\r
        if (head == null) {\r
            return;\r
        }\r
\r
        if (head.data == data) {\r
            head = head.next;\r
            return;\r
        }\r
\r
        ListNode prev = null;\r
        ListNode current = head;\r
\r
        while (current != null) {\r
            if (current.data == data) {\r
                prev.next = current.next;\r
                return;\r
            }\r
            prev = current;\r
            current = current.next;\r
        }\r
    }\r
\r
    public void reverse() {\r
        ListNode prev = null;\r
        ListNode current = head;\r
\r
        while (current != null) {\r
            ListNode next = current.next;\r
            current.next = prev;\r
            prev = current;\r
            current = next;\r
        }\r
\r
        head = prev;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        if (head == null) {\r
            return "None";\r
        }\r
\r
        StringBuilder result = new StringBuilder();\r
        ListNode current = head;\r
\r
        while (current != null) {\r
            result.append(current.toString()).append(" -> ");\r
            current = current.next;\r
        }\r
\r
        result.append("None");\r
        return result.toString();\r
    }\r
}\r
`,_T=`public class ListNode<T> {\r
    T data;\r
    ListNode<T> prev;\r
    ListNode<T> next;\r
\r
    public ListNode(T data) {\r
        this.data = data;\r
        prev = null;\r
        next = null;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return "[" + data + "]";\r
    }\r
}\r
\r
public class DoublyLinkedList<T> {\r
    ListNode<T> head;\r
\r
    public DoublyLinkedList() {\r
        head = null;\r
    }\r
\r
    public void append(T data) {\r
        if (head == null) {\r
            head = new ListNode<>(data);\r
            return;\r
        }\r
\r
        ListNode<T> curr = head;\r
\r
        while (curr.next != null) {\r
            curr = curr.next;\r
        }\r
\r
        ListNode<T> newNode = new ListNode<>(data);\r
        curr.next = newNode;\r
        newNode.prev = curr;\r
    }\r
\r
    public void delete(T data) {\r
        if (head == null) {\r
            return;\r
        }\r
\r
        if (head.data.equals(data)) {\r
            head = head.next;\r
            if (head != null) {\r
                head.prev = null;\r
            }\r
            return;\r
        }\r
\r
        ListNode<T> curr = head;\r
\r
        while (curr != null) {\r
            if (curr.data.equals(data)) {\r
                ListNode<T> prevNode = curr.prev;\r
                prevNode.next = curr.next;\r
                if (curr.next != null) {\r
                    curr.next.prev = prevNode;\r
                }\r
                return;\r
            }\r
            curr = curr.next;\r
        }\r
    }\r
\r
    public void reverse() {\r
        ListNode<T> curr = head;\r
        ListNode<T> prev = null;\r
\r
        while (curr != null) {\r
            ListNode<T> nextNode = curr.next;\r
            curr.next = prev;\r
            curr.prev = nextNode;\r
            prev = curr;\r
            curr = nextNode;\r
        }\r
\r
        head = prev;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        if (head == null) {\r
            return "None";\r
        }\r
\r
        StringBuilder sb = new StringBuilder();\r
        ListNode<T> curr = head;\r
\r
        while (curr != null) {\r
            sb.append(curr.toString()).append(" <-> ");\r
            curr = curr.next;\r
        }\r
\r
        sb.append("None");\r
        return sb.toString();\r
    }\r
}\r
`,xT=`import java.util.ArrayList;\r
import java.util.HashMap;\r
import java.util.List;\r
import java.util.Map;\r
\r
\r
public class Graph {\r
    Map<String, List<String>> graph;\r
\r
    public Graph() {\r
        graph = new HashMap<>();\r
    }\r
\r
    public void addVertex(String vertex) {\r
        if (!graph.containsKey(vertex)) {\r
            graph.put(vertex, new ArrayList<>());\r
        }\r
    }\r
\r
    public void addEdge(String a, String b) {\r
        addVertex(a);\r
        addVertex(b);\r
        graph.get(a).add(b);\r
        graph.get(b).add(a);\r
    }\r
\r
    public List<String> getNeighbors(String vertex) {\r
        return graph.getOrDefault(vertex, new ArrayList<>());\r
    }\r
\r
    @Override\r
    public String toString() {\r
        StringBuilder output = new StringBuilder();\r
\r
        for (Map.Entry<String, List<String>> entry : graph.entrySet()) {\r
            output.append(entry.getKey()).append(" - ").append(String.join(" - ", entry.getValue())).append("\\n");\r
        }\r
\r
        return output.toString();\r
    }\r
}\r
`,vT=`public class HashMap {\r
    private int size;\r
    private Object[] bucket;\r
\r
    public HashMap() {\r
        size = 100000;\r
        bucket = new Object[size];\r
    }\r
\r
    private int hash(int key) {\r
        return key % size;\r
    }\r
\r
    public void put(int key, Object value) {\r
        bucket[hash(key)] = value;\r
    }\r
\r
    public Object get(int key) {\r
        return bucket[hash(key)];\r
    }\r
\r
    public void remove(int key) {\r
        bucket[hash(key)] = null;\r
    }\r
}\r
`,yT=`import java.util.ArrayList;\r
import java.util.HashMap;\r
import java.util.List;\r
import java.util.Map;\r
\r
\r
class TrieNode {\r
    Map<Character, TrieNode> children;\r
    boolean isWord;\r
\r
    public TrieNode() {\r
        this.children = new HashMap<>();\r
        this.isWord = false;\r
    }\r
}\r
\r
class Trie {\r
    TrieNode root;\r
\r
    public Trie() {\r
        this.root = new TrieNode();\r
    }\r
\r
    public void build(String[] words) {\r
        for (String word : words) {\r
            insert(word);\r
        }\r
    }\r
\r
    public void insert(String word) {\r
        TrieNode node = root;\r
\r
        for (char ch : word.toCharArray()) {\r
            if (!node.children.containsKey(ch)) {\r
                node.children.put(ch, new TrieNode());\r
            }\r
            node = node.children.get(ch);\r
        }\r
\r
        node.isWord = true;\r
    }\r
\r
    public boolean search(String word) {\r
        TrieNode node = root;\r
\r
        for (char ch : word.toCharArray()) {\r
            if (!node.children.containsKey(ch)) {\r
                return false;\r
            }\r
            node = node.children.get(ch);\r
        }\r
\r
        return node.isWord;\r
    }\r
\r
    public boolean startsWith(String prefix) {\r
        TrieNode node = root;\r
\r
        for (char ch : prefix.toCharArray()) {\r
            if (!node.children.containsKey(ch)) {\r
                return false;\r
            }\r
            node = node.children.get(ch);\r
        }\r
\r
        return true;\r
    }\r
\r
    public List<String> collectWords(TrieNode node, String prefix) {\r
        List<String> words = new ArrayList<>();\r
\r
        if (node.isWord) {\r
            words.add(prefix);\r
        }\r
\r
        for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {\r
            words.addAll(collectWords(entry.getValue(), prefix + entry.getKey()));\r
        }\r
\r
        return words;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return "Trie:\\n" + printTrie(root, 0, null);\r
    }\r
\r
    private String printTrie(TrieNode node, int level, String prefix) {\r
        StringBuilder output = new StringBuilder();\r
        String prefixStr = "\\t".repeat(level) + prefix;\r
\r
        if (node == null) {\r
            return output.toString();\r
        }\r
\r
        if (node.isWord) {\r
            output.append(prefixStr).append(" ├─ ").append("(*)").append("\\n");\r
        }\r
\r
        int i = 0;\r
\r
        for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {\r
            boolean isLast = i == node.children.size() - 1;\r
            String marker = isLast ? "└─ " : "├─ ";\r
            output.append(prefixStr).append(marker).append(entry.getKey()).append("\\n");\r
            output.append(printTrie(entry.getValue(), level + 1, isLast ? "    │" : "     "));\r
            i++;\r
        }\r
\r
        return output.toString();\r
    }\r
}\r
`,TT=`import java.util.ArrayList;\r
import java.util.HashMap;\r
import java.util.List;\r
import java.util.Map;\r
\r
\r
public class UnionFind {\r
    private int[] root;\r
\r
    public UnionFind(int n) {\r
        this.root = new int[n];\r
        for (int i = 0; i < n; i++) {\r
            this.root[i] = i;\r
        }\r
    }\r
\r
    public int find(int a) {\r
        if (a == root[a]) {\r
            return a;\r
        }\r
        return root[a] = find(root[a]);\r
    }\r
\r
    public void union(int a, int b) {\r
        root[find(a)] = find(b);\r
    }\r
\r
    public boolean connected(int a, int b) {\r
        return find(a) == find(b);\r
    }\r
\r
    @Override\r
    public String toString() {\r
        int n = root.length;\r
        List<List<Integer>> components = new ArrayList<>();\r
        Map<Integer, List<Integer>> componentMap = new HashMap<>();\r
\r
        for (int i = 0; i < n; i++) {\r
            int root = find(i);\r
\r
            if (!componentMap.containsKey(root)) {\r
                componentMap.put(root, new ArrayList<>());\r
            }\r
\r
            componentMap.get(root).add(i);\r
        }\r
\r
        StringBuilder sb = new StringBuilder();\r
\r
        for (List<Integer> component : componentMap.values()) {\r
            sb.append(" - ").append(component);\r
        }\r
\r
        return sb.toString();\r
    }\r
}\r
`,ST=`import java.util.ArrayList;\r
import java.util.HashMap;\r
import java.util.List;\r
import java.util.Map;\r
\r
\r
class UnionFind {\r
    int[] root;\r
    int[] rank;\r
\r
    public UnionFind(int n) {\r
        this.root = new int[n];\r
        this.rank = new int[n];\r
\r
        for (int i = 0; i < n; i++) {\r
            this.root[i] = i;\r
            this.rank[i] = 1;\r
        }\r
    }\r
\r
    public int find(int a) {\r
        if (a == root[a]) {\r
            return a;\r
        }\r
        return root[a] = find(root[a]);\r
    }\r
\r
    public void union(int a, int b) {\r
        int rootA = find(a);\r
        int rootB = find(b);\r
\r
        if (rootA != rootB) {\r
            if (rank[rootA] < rank[rootB]) {\r
                root[rootA] = rootB;\r
            } else if (rank[rootA] > rank[rootB]) {\r
                root[rootB] = rootA;\r
            } else {\r
                root[rootB] = rootA;\r
                rank[rootA]++;\r
            }\r
        }\r
    }\r
\r
    public boolean connected(int a, int b) {\r
        return find(a) == find(b);\r
    }\r
\r
    @Override\r
    public String toString() {\r
        int n = root.length;\r
        Map<Integer, List<Integer>> componentMap = new HashMap<>();\r
\r
        for (int i = 0; i < n; i++) {\r
            int root = find(i);\r
\r
            if (!componentMap.containsKey(root)) {\r
                componentMap.put(root, new ArrayList<>());\r
            }\r
\r
            componentMap.get(root).add(i);\r
        }\r
\r
        StringBuilder sb = new StringBuilder();\r
\r
        for (List<Integer> component : componentMap.values()) {\r
            sb.append(" - ").append(component);\r
        }\r
\r
        return sb.toString();\r
    }\r
}\r
`,jT=`#include <iostream>\r
#include <stdexcept>\r
\r
using namespace std;\r
\r
\r
template<typename T>\r
class Array {\r
private:\r
    T* data;\r
    size_t size;\r
\r
public:\r
    Array(size_t size) : size(size) {\r
        data = new T[size];\r
    }\r
\r
    ~Array() {\r
        delete[] data;\r
    }\r
\r
    T& operator[](size_t index) {\r
        if (index >= size) {\r
            throw std::out_of_range("Index out of range");\r
        }\r
        return data[index];\r
    }\r
\r
    const T& operator[](size_t index) const {\r
        if (index >= size) {\r
            throw out_of_range("Index out of range");\r
        }\r
        return data[index];\r
    }\r
\r
    size_t len() const {\r
        return size;\r
    }\r
\r
    friend ostream& operator<<(ostream& os, const Array<T>& arr) {\r
        os << "[";\r
        for (size_t i = 0; i < arr.size; ++i) {\r
            os << arr.data[i];\r
            if (i < arr.size - 1) {\r
                os << ", ";\r
            }\r
        }\r
        os << "]";\r
        return os;\r
    }\r
};\r
`,NT=`#include <iostream>\r
#include <memory>\r
#include <string>\r
\r
using namespace std;\r
\r
\r
template<typename T>\r
class BinaryTree {\r
private:\r
    shared_ptr<TreeNode<T>> root;\r
\r
public:\r
    BinaryTree() : root(nullptr) {}\r
\r
    void insert(const T& data) {\r
        root = insertNode(root, data);\r
    }\r
\r
    shared_ptr<TreeNode<T>> insertNode(shared_ptr<TreeNode<T>> node, const T& data) {\r
        if (!node) {\r
            return make_shared<TreeNode<T>>(data);\r
        }\r
\r
        if (!node->left) {\r
            node->left = make_shared<TreeNode<T>>(data);\r
        } else if (!node->right) {\r
            node->right = make_shared<TreeNode<T>>(data);\r
        } else {\r
            node->left = insertNode(node->left, data);\r
        }\r
\r
        return node;\r
    }\r
\r
    string printTree() const {\r
        return root ? printNode(root, "", true) : "Empty tree";\r
    }\r
\r
    string printNode(const shared_ptr<TreeNode<T>>& node, const string& prefix, bool isLeft) const {\r
        string result;\r
        if (node) {\r
            result += printNode(node->right, prefix + (isLeft ? "│   " : "    "), false);\r
            result += prefix + (isLeft ? "└── " : "┌── ") + to_string(node->data) + "\\n";\r
            result += printNode(node->left, prefix + (isLeft ? "    " : "│   "), true);\r
        }\r
        return result;\r
    }\r
};\r
`,ET=`#include <iostream>\r
#include <memory>\r
#include <string>\r
\r
using namespace std;\r
\r
\r
template<typename T>\r
class BinarySearchTree {\r
private:\r
    shared_ptr<TreeNode<T>> root;\r
\r
public:\r
    BinarySearchTree() : root(nullptr) {}\r
\r
    void insert(const T& data) {\r
        if (!root) {\r
            root = make_shared<TreeNode<T>>(data);\r
        } else {\r
            insertNode(root, data);\r
        }\r
    }\r
\r
    void insertNode(shared_ptr<TreeNode<T>>& node, const T& data) {\r
        if (data < node->data) {\r
            if (!node->left) {\r
                node->left = make_shared<TreeNode<T>>(data);\r
            } else {\r
                insertNode(node->left, data);\r
            }\r
        } else {\r
            if (!node->right) {\r
                node->right = make_shared<TreeNode<T>>(data);\r
            } else {\r
                insertNode(node->right, data);\r
            }\r
        }\r
    }\r
\r
    string printTree() const {\r
        return root ? printNode(root, "", true) : "Empty tree";\r
    }\r
\r
    string printNode(const shared_ptr<TreeNode<T>>& node, const string& prefix, bool isLeft) const {\r
        string result;\r
        if (node) {\r
            result += printNode(node->right, prefix + (isLeft ? "│   " : "    "), false);\r
            result += prefix + (isLeft ? "└── " : "┌── ") + to_string(node->data) + "\\n";\r
            result += printNode(node->left, prefix + (isLeft ? "    " : "│   "), true);\r
        }\r
        return result;\r
    }\r
};\r
`,AT=`#include <iostream>\r
\r
using namespace std;\r
\r
\r
template<typename T>\r
class ListNode {\r
public:\r
    T data;\r
    ListNode* next;\r
\r
    ListNode(const T& data) : data(data), next(nullptr) {}\r
};\r
\r
template<typename T>\r
class LinkedList {\r
private:\r
    ListNode<T>* head;\r
\r
public:\r
    LinkedList() : head(nullptr) {}\r
\r
    void append(const T& data) {\r
        if (!head) {\r
            head = new ListNode<T>(data);\r
            return;\r
        }\r
\r
        ListNode<T>* curr = head;\r
\r
        while (curr->next) {\r
            curr = curr->next;\r
        }\r
\r
        curr->next = new ListNode<T>(data);\r
    }\r
\r
    void deleteNode(const T& data) {\r
        if (!head) {\r
            return;\r
        }\r
\r
        if (head->data == data) {\r
            ListNode<T>* temp = head;\r
            head = head->next;\r
            delete temp;\r
            return;\r
        }\r
\r
        ListNode<T>* prev = nullptr;\r
        ListNode<T>* curr = head;\r
\r
        while (curr) {\r
            if (curr->data == data) {\r
                prev->next = curr->next;\r
                delete curr;\r
                return;\r
            }\r
\r
            prev = curr;\r
            curr = curr->next;\r
        }\r
    }\r
\r
    void reverse() {\r
        ListNode<T>* prev = nullptr;\r
        ListNode<T>* curr = head;\r
\r
        while (curr) {\r
            ListNode<T>* nextNode = curr->next;\r
            curr->next = prev;\r
            prev = curr;\r
            curr = nextNode;\r
        }\r
\r
        head = prev;\r
    }\r
\r
    ~LinkedList() {\r
        ListNode<T>* curr = head;\r
\r
        while (curr) {\r
            ListNode<T>* temp = curr;\r
            curr = curr->next;\r
            delete temp;\r
        }\r
    }\r
\r
    void display() {\r
        ListNode<T>* curr = head;\r
\r
        while (curr) {\r
            cout << "[" << curr->data << "]";\r
            if (curr->next) {\r
                cout << " -> ";\r
            }\r
            curr = curr->next;\r
        }\r
\r
        cout << " -> None" << endl;\r
    }\r
};\r
`,OT=`#include <iostream>\r
#include <memory>\r
#include <string>\r
\r
using namespace std;\r
\r
\r
template<typename T>\r
class ListNode {\r
public:\r
    T data;\r
    shared_ptr<ListNode<T>> prev;\r
    shared_ptr<ListNode<T>> next;\r
\r
    ListNode(const T& data) : data(data), prev(nullptr), next(nullptr) {}\r
};\r
\r
template<typename T>\r
class DoublyLinkedList {\r
private:\r
    shared_ptr<ListNode<T>> head;\r
\r
public:\r
    DoublyLinkedList() : head(nullptr) {}\r
\r
    void append(const T& data) {\r
        if (!head) {\r
            head = make_shared<ListNode<T>>(data);\r
            return;\r
        }\r
\r
        auto curr = head;\r
\r
        while (curr->next) {\r
            curr = curr->next;\r
        }\r
\r
        auto new_node = make_shared<ListNode<T>>(data);\r
        curr->next = new_node;\r
        new_node->prev = curr;\r
    }\r
\r
    void deleteNode(const T& data) {\r
        if (!head) {\r
            return;\r
        }\r
\r
        if (head->data == data) {\r
            head = head->next;\r
            if (head) {\r
                head->prev = nullptr;\r
            }\r
            return;\r
        }\r
\r
        auto curr = head;\r
\r
        while (curr) {\r
            if (curr->data == data) {\r
                auto prev_node = curr->prev;\r
                prev_node->next = curr->next;\r
\r
                if (curr->next) {\r
                    curr->next->prev = prev_node;\r
                }\r
\r
                return;\r
            }\r
            curr = curr->next;\r
        }\r
    }\r
\r
    void reverse() {\r
        auto curr = head;\r
        shared_ptr<ListNode<T>> prev = nullptr;\r
\r
        while (curr) {\r
            auto next_node = curr->next;\r
            curr->next = prev;\r
            curr->prev = next_node;\r
            prev = curr;\r
            curr = next_node;\r
        }\r
\r
        head = prev;\r
    }\r
\r
    string toString() const {\r
        if (!head) {\r
            return "None";\r
        }\r
\r
        string result;\r
        auto curr = head;\r
\r
        while (curr) {\r
            result += "[" + to_string(curr->data) + "]";\r
\r
            if (curr->next) {\r
                result += " <-> ";\r
            }\r
\r
            curr = curr->next;\r
        }\r
\r
        result += " <-> None";\r
        return result;\r
    }\r
};\r
`,wT=`#include <iostream>\r
#include <unordered_map>\r
#include <vector>\r
#include <string>\r
\r
using namespace std;\r
\r
\r
class Graph {\r
private:\r
    unordered_map<string, vector<string>> graph;\r
\r
public:\r
    Graph() {}\r
\r
    void addVertex(const string& vertex) {\r
        if (graph.find(vertex) == graph.end()) {\r
            graph[vertex] = {};\r
        }\r
    }\r
\r
    void addEdge(const string& a, const string& b) {\r
        addVertex(a);\r
        addVertex(b);\r
        graph[a].push_back(b);\r
        graph[b].push_back(a);\r
    }\r
\r
    vector<string> getNeighbors(const string& vertex) {\r
        return graph[vertex];\r
    }\r
\r
    string toString() {\r
        string output;\r
\r
        for (const auto& [vertex, neighbors] : graph) {\r
            output += vertex + " - ";\r
\r
            for (const auto& neighbor : neighbors) {\r
                output += neighbor + " - ";\r
            }\r
\r
            output.pop_back();\r
            output.pop_back();\r
            output += "\\n";\r
        }\r
\r
        return output;\r
    }\r
};\r
`,kT=`#include <iostream>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
template<typename KeyType, typename ValueType>\r
class HashMap {\r
private:\r
    const size_t size = 100000;\r
    vector<pair<KeyType, ValueType>> buckets[size];\r
\r
    size_t hash(const KeyType& key) {\r
        return hash<KeyType>{}(key) % size;\r
    }\r
\r
public:\r
    HashMap() {}\r
\r
    void setItem(const KeyType& key, const ValueType& value) {\r
        size_t index = hash(key);\r
\r
        for (auto& pair : buckets[index]) {\r
            if (pair.first == key) {\r
                pair.second = value;\r
                return;\r
            }\r
        }\r
\r
        buckets[index].emplace_back(key, value);\r
    }\r
\r
    ValueType& getItem(const KeyType& key) {\r
        size_t index = hash(key);\r
\r
        for (auto& pair : buckets[index]) {\r
            if (pair.first == key) {\r
                return pair.second;\r
            }\r
        }\r
\r
        throw out_of_range("Key not found");\r
    }\r
\r
    void delItem(const KeyType& key) {\r
        size_t index = hash(key);\r
\r
        for (auto it = buckets[index].begin(); it != buckets[index].end(); ++it) {\r
            if (it->first == key) {\r
                buckets[index].erase(it);\r
                return;\r
            }\r
        }\r
    }\r
};\r
`,MT=`#include <iostream>\r
#include <unordered_map>\r
#include <vector>\r
#include <memory>\r
\r
using namespace std;\r
\r
\r
class TrieNode {\r
public:\r
    unordered_map<char, shared_ptr<TrieNode>> children;\r
    bool is_word;\r
\r
    TrieNode() : is_word(false) {}\r
};\r
\r
class Trie {\r
private:\r
    shared_ptr<TrieNode> root;\r
\r
public:\r
    Trie() : root(make_shared<TrieNode>()) {}\r
\r
    void build(const vector<string>& words) {\r
        for (const auto& word : words) {\r
            insert(word);\r
        }\r
    }\r
\r
    void insert(const string& word) {\r
        shared_ptr<TrieNode> node = root;\r
\r
        for (char ch : word) {\r
            if (node->children.find(ch) == node->children.end()) {\r
                node->children[ch] = make_shared<TrieNode>();\r
            }\r
            node = node->children[ch];\r
        }\r
\r
        node->is_word = true;\r
    }\r
\r
    bool search(const string& word) {\r
        shared_ptr<TrieNode> node = root;\r
\r
        for (char ch : word) {\r
            if (node->children.find(ch) == node->children.end()) {\r
                return false;\r
            }\r
            node = node->children[ch];\r
        }\r
\r
        return node->is_word;\r
    }\r
\r
    bool startsWith(const string& prefix) {\r
        shared_ptr<TrieNode> node = root;\r
\r
        for (char ch : prefix) {\r
            if (node->children.find(ch) == node->children.end()) {\r
                return false;\r
            }\r
            node = node->children[ch];\r
        }\r
\r
        return true;\r
    }\r
\r
    vector<string> collectWords(shared_ptr<TrieNode> node, const string& prefix) {\r
        vector<string> words;\r
\r
        if (node->is_word) {\r
            words.push_back(prefix);\r
        }\r
\r
        for (const auto& [ch, childNode] : node->children) {\r
            auto childWords = collectWords(childNode, prefix + ch);\r
            words.insert(words.end(), childWords.begin(), childWords.end());\r
        }\r
\r
        return words;\r
    }\r
\r
    vector<string> collectWords() {\r
        return collectWords(root, "");\r
    }\r
};\r
`,RT=`#include <iostream>\r
#include <string>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
class UnionFind {\r
private:\r
    vector<int> root;\r
\r
public:\r
    UnionFind(int n) : root(n) {\r
        for (int i = 0; i < n; ++i) {\r
            root[i] = i;\r
        }\r
    }\r
\r
    int find(int a) {\r
        return a == root[a] ? a : root[a] = find(root[a]);\r
    }\r
\r
    void unionSets(int a, int b) {\r
        root[find(a)] = find(b);\r
    }\r
\r
    bool connected(int a, int b) {\r
        return find(a) == find(b);\r
    }\r
\r
    string toString() {\r
        int n = root.size();\r
        vector<vector<int>> components(n);\r
\r
        for (int i = 0; i < n; ++i) {\r
            components[find(i)].push_back(i);\r
        }\r
\r
        string result;\r
\r
        for (const auto& component : components) {\r
            if (!component.empty()) {\r
                for (int node : component) {\r
                    result += "(" + to_string(node) + ") - ";\r
                }\r
                result.pop_back();\r
                result.pop_back();\r
                result += "\\n";\r
            }\r
        }\r
\r
        return result;\r
    }\r
};\r
`,LT=`#include <iostream>\r
#include <string>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
class UnionFind {\r
private:\r
    vector<int> root;\r
    vector<int> rank;\r
\r
public:\r
    UnionFind(int n) : root(n), rank(n, 1) {\r
        for (int i = 0; i < n; ++i) {\r
            root[i] = i;\r
        }\r
    }\r
\r
    int find(int a) {\r
        return a == root[a] ? a : root[a] = find(root[a]);\r
    }\r
\r
    void unionSets(int a, int b) {\r
        int rootA = find(a);\r
        int rootB = find(b);\r
\r
        if (rootA != rootB) {\r
            if (rank[rootA] < rank[rootB]) {\r
                root[rootA] = rootB;\r
            } else if (rank[rootA] > rank[rootB]) {\r
                root[rootB] = rootA;\r
            } else {\r
                root[rootB] = rootA;\r
                rank[rootA]++;\r
            }\r
        }\r
    }\r
\r
    bool connected(int a, int b) {\r
        return find(a) == find(b);\r
    }\r
\r
    string toString() {\r
        int n = root.size();\r
        vector<vector<int>> components(n);\r
\r
        for (int i = 0; i < n; ++i) {\r
            components[find(i)].push_back(i);\r
        }\r
\r
        string result;\r
\r
        for (const auto& component : components) {\r
            if (!component.empty()) {\r
                for (int node : component) {\r
                    result += "(" + to_string(node) + ") - ";\r
                }\r
                result.pop_back();\r
                result.pop_back();\r
                result += "\\n";\r
            }\r
        }\r
\r
        return result;\r
    }\r
};\r
`,zT=`\r
class Array\r
  def initialize(size)\r
    @size = size\r
    @data = Array.new(size)\r
  end\r
\r
  def [](index)\r
    @data[index]\r
  end\r
\r
  def []=(index, value)\r
    @data[index] = value\r
  end\r
\r
  def length\r
    @data.length\r
  end\r
\r
  def to_s\r
    @data.to_s\r
  end\r
end\r
`,DT=`class TreeNode\r
  attr_accessor :data, :left, :right\r
\r
  def initialize(data)\r
    @data   = data\r
    @left   = nil\r
    @right  = nil\r
  end\r
end\r
\r
class BinaryTree\r
  attr_accessor :root\r
\r
  def initialize\r
    @root = nil\r
  end\r
\r
  def insert(data)\r
    if @root.nil?\r
      @root = TreeNode.new(data)\r
    else\r
      insert_node(@root, data)\r
    end\r
  end\r
\r
  def insert_node(node, data)\r
    return TreeNode.new(data) if node.nil?\r
\r
    if node.left.nil?\r
      node.left = TreeNode.new(data)\r
    elsif node.right.nil?\r
      node.right = TreeNode.new(data)\r
    else\r
      node.left = insert_node(node.left, data)\r
    end\r
\r
    node\r
  end\r
\r
  def to_s\r
    @root.nil? ? 'Empty tree' : print_tree(@root, '', true)\r
  end\r
\r
  private\r
\r
  def print_tree(node, prefix, is_left)\r
    return '' if node.nil?\r
\r
    result = ''\r
    result += print_tree(node.right, prefix + (is_left ? '│   ' : '    '), false)\r
    result += prefix + (is_left ? '└── ' : '┌── ') + node.data.to_s + "\\n"\r
    result += print_tree(node.left, prefix + (is_left ? '    ' : '│   '), true)\r
\r
    result\r
  end\r
end\r
`,BT=`class TreeNode\r
  attr_accessor :data, :left, :right\r
\r
  def initialize(data)\r
    @data   = data\r
    @left   = nil\r
    @right  = nil\r
  end\r
end\r
\r
class BinarySearchTree\r
  attr_accessor :root\r
\r
  def initialize\r
    @root = nil\r
  end\r
\r
  def insert(data)\r
    if @root.nil?\r
      @root = TreeNode.new(data)\r
    else\r
      insert_node(@root, data)\r
    end\r
  end\r
\r
  def insert_node(node, data)\r
    if data < node.data\r
      if node.left.nil?\r
        node.left = TreeNode.new(data)\r
      else\r
        insert_node(node.left, data)\r
      end\r
    else\r
      if node.right.nil?\r
        node.right = TreeNode.new(data)\r
      else\r
        insert_node(node.right, data)\r
      end\r
    end\r
  end\r
\r
  def to_s\r
    @root.nil? ? 'Empty tree' : print_tree(@root, '', true)\r
  end\r
\r
  private\r
\r
  def print_tree(node, prefix, is_left)\r
    return '' if node.nil?\r
\r
    result = ''\r
    result += print_tree(node.right, prefix + (is_left ? '│   ' : '    '), false)\r
    result += prefix + (is_left ? '└── ' : '┌── ') + node.data.to_s + "\\n"\r
    result += print_tree(node.left, prefix + (is_left ? '    ' : '│   '), true)\r
\r
    result\r
  end\r
end\r
`,CT=`class ListNode\r
  attr_accessor :data, :next\r
\r
  def initialize(data)\r
    @data = data\r
    @next = nil\r
  end\r
\r
  def to_s\r
    "[#{@data}]"\r
  end\r
end\r
\r
class LinkedList\r
  attr_accessor :head\r
\r
  def initialize\r
    @head = nil\r
  end\r
\r
  def append(data)\r
    if @head.nil?\r
      @head = ListNode.new(data)\r
      return\r
    end\r
\r
    curr = @head\r
    curr = curr.next while curr.next\r
    curr.next = ListNode.new(data)\r
  end\r
\r
  def delete(data)\r
    return if @head.nil?\r
\r
    if @head.data == data\r
      @head = @head.next\r
      return\r
    end\r
\r
    prev = nil\r
    curr = @head\r
\r
    while curr\r
      if curr.data == data\r
        prev.next = curr.next\r
        return\r
      end\r
      prev = curr\r
      curr = curr.next\r
    end\r
  end\r
\r
  def reverse\r
    prev = nil\r
    curr = @head\r
\r
    while curr\r
      nxt = curr.next\r
      curr.next = prev\r
      prev = curr\r
      curr = nxt\r
    end\r
\r
    @head = prev\r
  end\r
\r
  def to_s\r
    return 'nil' if @head.nil?\r
\r
    nodes = []\r
    curr = @head\r
    while curr\r
      nodes << curr.to_s\r
      curr = curr.next\r
    end\r
\r
    nodes.join(' -> ') + ' -> nil'\r
  end\r
end\r
`,UT=`class ListNode\r
  attr_accessor :data, :prev, :next\r
\r
  def initialize(data)\r
    @data = data\r
    @prev = nil\r
    @next = nil\r
  end\r
\r
  def to_s\r
    "[#{@data}]"\r
  end\r
end\r
\r
class DoublyLinkedList\r
  attr_accessor :head\r
\r
  def initialize\r
    @head = nil\r
  end\r
\r
  def append(data)\r
    if @head.nil?\r
      @head = ListNode.new(data)\r
      return\r
    end\r
\r
    curr = @head\r
    curr = curr.next while curr.next\r
\r
    new_node = ListNode.new(data)\r
    curr.next = new_node\r
    new_node.prev = curr\r
  end\r
\r
  def delete(data)\r
    return if @head.nil?\r
\r
    if @head.data == data\r
      @head = @head.next\r
      @head.prev = nil if @head\r
      return\r
    end\r
\r
    curr = @head\r
    while curr\r
      if curr.data == data\r
        prev_node = curr.prev\r
        prev_node.next = curr.next\r
        curr.next.prev = prev_node if curr.next\r
        return\r
      end\r
      curr = curr.next\r
    end\r
  end\r
\r
  def reverse\r
    curr = @head\r
    prev = nil\r
\r
    while curr\r
      nxt = curr.next\r
      curr.next = prev\r
      curr.prev = nxt\r
      prev = curr\r
      curr = nxt\r
    end\r
\r
    @head = prev\r
  end\r
\r
  def to_s\r
    return 'None' if @head.nil?\r
\r
    nodes = []\r
    curr = @head\r
    while curr\r
      nodes << curr.to_s\r
      curr = curr.next\r
    end\r
\r
    nodes.join(' <-> ') + ' <-> None'\r
  end\r
end\r
`,HT=`class Graph\r
  attr_accessor :graph\r
\r
  def initialize\r
    @graph = {}\r
  end\r
\r
  def add_vertex(vertex)\r
    @graph[vertex] ||= []\r
  end\r
\r
  def add_edge(a, b)\r
    add_vertex(a)\r
    add_vertex(b)\r
    @graph[a] << b\r
    @graph[b] << a\r
  end\r
\r
  def get_neighbors(vertex)\r
    @graph.fetch(vertex, [])\r
  end\r
\r
  def to_s\r
    output = ''\r
    @graph.each do |vertex, neighbors|\r
      output += "#{vertex} - #{neighbors.join(' - ')}\\n"\r
    end\r
    output\r
  end\r
end\r
`,qT=`class HashMap\r
  def initialize\r
    @size   = 100_000\r
    @bucket = Array.new(@size)\r
  end\r
\r
  def hash_key(key)\r
    key.hash % @size\r
  end\r
\r
  def []=(key, value)\r
    @bucket[hash_key(key)] = value\r
  end\r
\r
  def [](key)\r
    @bucket[hash_key(key)]\r
  end\r
\r
  def delete(key)\r
    @bucket[hash_key(key)] = nil\r
  end\r
end\r
`,YT=`class TrieNode\r
  attr_accessor :children, :is_word\r
\r
  def initialize\r
    @children = {}\r
    @is_word  = false\r
  end\r
end\r
\r
class Trie\r
  attr_accessor :root\r
\r
  def initialize\r
    @root = TrieNode.new\r
  end\r
\r
  def build(words)\r
    words.each { |word| insert(word) }\r
  end\r
\r
  def insert(word)\r
    node = @root\r
    word.each_char do |char|\r
      node.children[char] ||= TrieNode.new\r
      node = node.children[char]\r
    end\r
    node.is_word = true\r
  end\r
\r
  def search(word)\r
    node = @root\r
    word.each_char do |char|\r
      return false unless node.children.key?(char)\r
      node = node.children[char]\r
    end\r
    node.is_word\r
  end\r
\r
  def starts_with(prefix)\r
    node = @root\r
    prefix.each_char do |char|\r
      return false unless node.children.key?(char)\r
      node = node.children[char]\r
    end\r
    true\r
  end\r
\r
  def collect_words(node = @root, prefix = '')\r
    words = []\r
    words << prefix if node.is_word\r
    node.children.each do |char, child_node|\r
      words.concat(collect_words(child_node, prefix + char))\r
    end\r
    words\r
  end\r
\r
  def to_s\r
    "Trie:\\n" + print_trie(@root)\r
  end\r
\r
  private\r
\r
  def print_trie(node, level = 0, prefix = '')\r
    return '' unless node\r
\r
    output = ''\r
    prefix_str = '    ' * level + prefix\r
    output += prefix_str + ' ├─ (*)' + "\\n" if node.is_word\r
\r
    node.children.each_with_index do |(char, child_node), i|\r
      is_last = i == node.children.size - 1\r
      marker = is_last ? '└─ ' : '├─ '\r
      output += prefix_str + marker + char + "\\n"\r
      new_prefix = is_last ? '     ' : '    │'\r
      output += print_trie(child_node, level + 1, new_prefix)\r
    end\r
\r
    output\r
  end\r
end\r
`,GT=`class UnionFind\r
  attr_accessor :root\r
\r
  def initialize(n)\r
    @root = Array.new(n) { |i| i }\r
  end\r
\r
  def find(a)\r
    return a if a == @root[a]\r
\r
    @root[a] = find(@root[a])\r
  end\r
\r
  def union(a, b)\r
    @root[find(a)] = find(b)\r
  end\r
\r
  def connected(a, b)\r
    find(a) == find(b)\r
  end\r
\r
  def to_s\r
    n = @root.size\r
    components = Hash.new { |h, k| h[k] = [] }\r
\r
    (0...n).each do |i|\r
      root_i = find(i)\r
      components[root_i] << i\r
    end\r
\r
    components.values.map { |comp| comp.map { |node| "(#{node})" }.join(' - ') }.join("\\n")\r
  end\r
end\r
`,VT=`class UnionFind\r
  attr_accessor :root, :rank\r
\r
  def initialize(n)\r
    @root = Array.new(n) { |i| i }\r
    @rank = Array.new(n, 1)\r
  end\r
\r
  def find(a)\r
    return a if a == @root[a]\r
\r
    @root[a] = find(@root[a])\r
  end\r
\r
  def union(a, b)\r
    root_a = find(a)\r
    root_b = find(b)\r
\r
    return if root_a == root_b\r
\r
    if @rank[root_a] < @rank[root_b]\r
      @root[root_a] = root_b\r
    elsif @rank[root_a] > @rank[root_b]\r
      @root[root_b] = root_a\r
    else\r
      @root[root_b] = root_a\r
      @rank[root_a] += 1\r
    end\r
  end\r
\r
  def connected(a, b)\r
    find(a) == find(b)\r
  end\r
\r
  def to_s\r
    n = @root.size\r
    components = Hash.new { |h, k| h[k] = [] }\r
\r
    (0...n).each do |i|\r
      root_i = find(i)\r
      components[root_i] << i\r
    end\r
\r
    components.values.map { |comp| comp.map { |node| "(#{node})" }.join(' - ') }.join("\\n")\r
  end\r
end\r
`,KT=`local class = require('middleclass')

---@class Array
---@field size integer
---@field data table
local Array = class('Array')

---@param size integer
function Array:initialize(size)
    self.size = size
    self.data = {}
end

---@param index integer
---@return any
function Array:get(index)
    return self.data[index]
end

---@param index integer
---@param value any
function Array:set(index, value)
    self.data[index] = value
end

---@return integer
function Array:len()
    return self.size
end

---@return string
function Array:__tostring()
    local parts = {}
    for i = 1, self.size do
        table.insert(parts, tostring(self.data[i] or 'nil'))
    end
    return '[' .. table.concat(parts, ', ') .. ']'
end
`,QT=`local class = require('middleclass')

---@class TreeNode
---@field data any
---@field left TreeNode|nil
---@field right TreeNode|nil
local TreeNode = class('TreeNode')

function TreeNode:initialize(data)
    self.data = data
    self.left = nil
    self.right = nil
end

---@class BinaryTree
---@field root TreeNode|nil
local BinaryTree = class('BinaryTree')

function BinaryTree:initialize()
    self.root = nil
end

---@param data any
function BinaryTree:insert(data)
    if not self.root then
        self.root = TreeNode:new(data)
    else
        self:_insert_node(self.root, data)
    end
end

---@param node TreeNode|nil
---@param data any
---@return TreeNode
function BinaryTree:_insert_node(node, data)
    if not node then
        return TreeNode:new(data)
    end

    if not node.left then
        node.left = TreeNode:new(data)
    elseif not node.right then
        node.right = TreeNode:new(data)
    else
        node.left = self:_insert_node(node.left, data)
    end

    return node
end

---@return string
function BinaryTree:__tostring()
    if not self.root then
        return 'Empty tree'
    end
    return self:_print_tree(self.root, '', true)
end

---@param node TreeNode|nil
---@param prefix string
---@param is_left boolean
---@return string
function BinaryTree:_print_tree(node, prefix, is_left)
    if not node then
        return ''
    end

    local result = ''

    result = result .. self:_print_tree(node.right, prefix .. (is_left and '│   ' or '    '), false)
    result = result .. prefix .. (is_left and '└── ' or '┌── ') .. tostring(node.data) .. '\\n'
    result = result .. self:_print_tree(node.left, prefix .. (is_left and '    ' or '│   '), true)

    return result
end
`,JT=`local class = require('middleclass')

---@class TreeNode
---@field data any
---@field left TreeNode|nil
---@field right TreeNode|nil
local TreeNode = class('TreeNode')

function TreeNode:initialize(data)
    self.data = data
    self.left = nil
    self.right = nil
end

---@class BinarySearchTree
---@field root TreeNode|nil
local BinarySearchTree = class('BinarySearchTree')

function BinarySearchTree:initialize()
    self.root = nil
end

---@param data any
function BinarySearchTree:insert(data)
    if not self.root then
        self.root = TreeNode:new(data)
    else
        self:_insert_node(self.root, data)
    end
end

---@param node TreeNode
---@param data any
function BinarySearchTree:_insert_node(node, data)
    if data < node.data then
        if not node.left then
            node.left = TreeNode:new(data)
        else
            self:_insert_node(node.left, data)
        end
    else
        if not node.right then
            node.right = TreeNode:new(data)
        else
            self:_insert_node(node.right, data)
        end
    end
end

---@return string
function BinarySearchTree:__tostring()
    if not self.root then
        return 'Empty tree'
    end
    return self:_print_tree(self.root, '', true)
end

---@param node TreeNode|nil
---@param prefix string
---@param is_left boolean
---@return string
function BinarySearchTree:_print_tree(node, prefix, is_left)
    if not node then
        return ''
    end

    local result = ''

    result = result .. self:_print_tree(node.right, prefix .. (is_left and '│   ' or '    '), false)
    result = result .. prefix .. (is_left and '└── ' or '┌── ') .. tostring(node.data) .. '\\n'
    result = result .. self:_print_tree(node.left, prefix .. (is_left and '    ' or '│   '), true)

    return result
end
`,XT=`local class = require('middleclass')

---@class ListNode
---@field data any
---@field next ListNode|nil
local ListNode = class('ListNode')

function ListNode:initialize(data)
    self.data = data
    self.next = nil
end

---@class LinkedList
---@field head ListNode|nil
local LinkedList = class('LinkedList')

function LinkedList:initialize()
    self.head = nil
end

---@param data any
function LinkedList:append(data)
    if not self.head then
        self.head = ListNode:new(data)
        return
    end
    local curr = self.head
    while curr.next do
        curr = curr.next
    end
    curr.next = ListNode:new(data)
end
`,IT=`local class = require('middleclass')

---@class ListNode
---@field data any
---@field prev ListNode|nil
---@field next ListNode|nil
local ListNode = class('ListNode')

function ListNode:initialize(data)
    self.data = data
    self.prev = nil
    self.next = nil
end

---@return string
function ListNode:__tostring()
    return string.format('[%s]', tostring(self.data))
end

---@class DoublyLinkedList
---@field head ListNode|nil
local DoublyLinkedList = class('DoublyLinkedList')

function DoublyLinkedList:initialize()
    self.head = nil
end

---@param data any
function DoublyLinkedList:append(data)
    if not self.head then
        self.head = ListNode:new(data)
        return
    end
    local curr = self.head
    while curr.next do
        curr = curr.next
    end
    local new_node = ListNode:new(data)
    curr.next = new_node
    new_node.prev = curr
end

---@param data any
function DoublyLinkedList:delete(data)
    if not self.head then
        return
    end
    if self.head.data == data then
        self.head = self.head.next
        if self.head then
            self.head.prev = nil
        end
        return
    end
    local curr = self.head
    while curr do
        if curr.data == data then
            local prev_node = curr.prev
            if prev_node then
                prev_node.next = curr.next
            end
            if curr.next then
                curr.next.prev = prev_node
            end
            return
        end
        curr = curr.next
    end
end

function DoublyLinkedList:reverse()
    local curr = self.head
    local prev = nil
    while curr do
        local nxt = curr.next
        curr.next = prev
        curr.prev = nxt
        prev = curr
        curr = nxt
    end
    self.head = prev
end

---@return string
function DoublyLinkedList:__tostring()
    if not self.head then
        return 'nil'
    end
    local nodes = {}
    local curr = self.head
    while curr do
        table.insert(nodes, tostring(curr))
        curr = curr.next
    end
    return table.concat(nodes, ' <-> ') .. ' <-> nil'
end
`,ZT=`local class = require('middleclass')

---@class Graph
---@field graph table<string, string[]>
local Graph = class('Graph')

function Graph:initialize()
    self.graph = {}
end

---@param vertex string
function Graph:add_vertex(vertex)
    if not self.graph[vertex] then
        self.graph[vertex] = {}
    end
end

---@param a string
---@param b string
function Graph:add_edge(a, b)
    self:add_vertex(a)
    self:add_vertex(b)
    table.insert(self.graph[a], b)
    table.insert(self.graph[b], a)
end

---@param vertex string
---@return string[]
function Graph:get_neighbors(vertex)
    return self.graph[vertex] or {}
end

---@return string
function Graph:__tostring()
    local output = ''
    for vertex, neighbors in pairs(self.graph) do
        output = output .. vertex .. ' - ' .. table.concat(neighbors, ' - ') .. '\\n'
    end
    return output
end
`,FT=`local class = require('middleclass')

---@class HashMap
---@field size integer
---@field bucket table
local HashMap = class('HashMap')

---@param size integer
function HashMap:initialize(size)
    self.size = size or 100000
    self.bucket = {}

    local mt = getmetatable(self)

    ---@param t HashMap
    ---@param k any
    ---@return any
    mt.__index = function(t, k)
        local class_member = HashMap[k]
        if class_member ~= nil then
            return class_member
        end
        return t.bucket[t:_hash(k)]
    end

    ---@param t HashMap
    ---@param k any
    ---@param v any
    mt.__newindex = function(t, k, v)
        t.bucket[t:_hash(k)] = v
    end
end

---@param key any
---@return integer
function HashMap:_hash(key)
    local s = tostring(key)
    local h = 0
    for i = 1, #s do
        h = (h * 31 + s:byte(i)) % self.size
    end
    return h + 1
end
`,WT=`local class = require('middleclass')

---@class TrieNode
---@field children table<string, TrieNode>
---@field is_word boolean
local TrieNode = class('TrieNode')

function TrieNode:initialize()
    self.children = {}
    self.is_word = false
end

---@class Trie
---@field root TrieNode
local Trie = class('Trie')

function Trie:initialize()
    self.root = TrieNode:new()
end

---@param words string[]
function Trie:build(words)
    for _, word in ipairs(words) do
        self:insert(word)
    end
end

---@param word string
function Trie:insert(word)
    local node = self.root
    for i = 1, #word do
        local char = word:sub(i, i)
        if not node.children[char] then
            node.children[char] = TrieNode:new()
        end
        node = node.children[char]
    end
    node.is_word = true
end

---@param word string
---@return boolean
function Trie:search(word)
    local node = self.root
    for i = 1, #word do
        local char = word:sub(i, i)
        if not node.children[char] then
            return false
        end
        node = node.children[char]
    end
    return node.is_word
end

---@param prefix string
---@return boolean
function Trie:starts_with(prefix)
    local node = self.root
    for i = 1, #prefix do
        local char = prefix:sub(i, i)
        if not node.children[char] then
            return false
        end
        node = node.children[char]
    end
    return true
end

---@param node TrieNode
---@param prefix string
---@return string[]
function Trie:collect_words(node, prefix)
    local words = {}
    if node.is_word then
        table.insert(words, prefix)
    end
    for char, child_node in pairs(node.children) do
        local sub_words = self:collect_words(child_node, prefix .. char)
        for _, w in ipairs(sub_words) do
            table.insert(words, w)
        end
    end
    return words
end

---@return string
function Trie:__tostring()
    return 'Trie:\\n' .. self:_print_trie(self.root, 0, '')
end

---@param node TrieNode
---@param level integer
---@param prefix string
---@return string
function Trie:_print_trie(node, level, prefix)
    if not node then return '' end
    local output = ''
    for char, child_node in pairs(node.children) do
        local suffix = child_node.is_word and ' (*)' or ''
        output = output .. string.rep('  ', level) .. '└─ ' .. char .. suffix .. '\\n'
        output = output .. self:_print_trie(child_node, level + 1, '')
    end
    return output
end
`,PT=`local class = require('middleclass')

---@class UnionFind
---@field root integer[]
local UnionFind = class('UnionFind')

---@param n integer
function UnionFind:initialize(n)
    self.root = {}
    for i = 1, n do
        self.root[i] = i
    end
end

---@param a integer
---@return integer
function UnionFind:find(a)
    if a == self.root[a] then
        return a
    end
    self.root[a] = self:find(self.root[a])
    return self.root[a]
end

---@param a integer
---@param b integer
function UnionFind:union(a, b)
    local root_a = self:find(a)
    local root_b = self:find(b)
    if root_a ~= root_b then
        self.root[root_a] = root_b
    end
end

---@param a integer
---@param b integer
---@return boolean
function UnionFind:connected(a, b)
    return self:find(a) == self:find(b)
end

---@return string
function UnionFind:__tostring()
    local components = {}
    for i = 1, #self.root do
        local root = self:find(i)
        if not components[root] then
            components[root] = {}
        end
        table.insert(components[root], '(' .. i .. ')')
    end

    local lines = {}
    for _, component in pairs(components) do
        table.insert(lines, table.concat(component, ' - '))
    end
    return table.concat(lines, '\\n')
end
`,$T=`local class = require('middleclass')

---@class UnionFind
---@field root integer[]
---@field rank integer[]
local UnionFind = class('UnionFind')

---@param n integer
function UnionFind:initialize(n)
    self.root = {}
    self.rank = {}
    for i = 1, n do
        self.root[i] = i
        self.rank[i] = 1
    end
end

---@param a integer
---@return integer
function UnionFind:find(a)
    if a == self.root[a] then
        return a
    end
    -- Path compression
    self.root[a] = self.find(self.root[a])
    return self.root[a]
end

---@param a integer
---@param b integer
function UnionFind:union(a, b)
    local root_a = self:find(a)
    local root_b = self:find(b)

    if root_a ~= root_b then
        if self.rank[root_a] < self.rank[root_b] then
            self.root[root_a] = root_b
        elseif self.rank[root_a] > self.rank[root_b] then
            self.root[root_b] = root_a
        else
            self.root[root_b] = root_a
            self.rank[root_a] = self.rank[root_a] + 1
        end
    end
end

---@param a integer
---@param b integer
---@return boolean
function UnionFind:connected(a, b)
    return self:find(a) == self:find(b)
end

---@return string
function UnionFind:__tostring()
    local components = {}
    for i = 1, #self.root do
        local r = self:find(i)
        if not components[r] then
            components[r] = {}
        end
        table.insert(components[r], '(' .. i .. ')')
    end

    local lines = {}
    for _, nodes in pairs(components) do
        table.insert(lines, table.concat(nodes, ' - '))
    end
    return table.concat(lines, '\\n')
end
`;function n2(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Data Structures"}),a.jsx("section",{id:"ds-array",children:a.jsxs(o,{title:"array",children:[a.jsx(o.Tab,{code:Iy,language:"python"}),a.jsx(o.Tab,{code:aT,language:"javascript"}),a.jsx(o.Tab,{code:gT,language:"java"}),a.jsx(o.Tab,{code:jT,language:"cpp"}),a.jsx(o.Tab,{code:zT,language:"ruby"}),a.jsx(o.Tab,{code:KT,language:"lua"})]})}),a.jsx("section",{id:"ds-hash-map",children:a.jsxs(o,{title:"hash map",children:[a.jsx(o.Tab,{code:nT,language:"python"}),a.jsx(o.Tab,{code:uT,language:"javascript"}),a.jsx(o.Tab,{code:vT,language:"java"}),a.jsx(o.Tab,{code:kT,language:"cpp"}),a.jsx(o.Tab,{code:qT,language:"ruby"}),a.jsx(o.Tab,{code:FT,language:"lua"})]})}),a.jsx("section",{id:"ds-linked-list",children:a.jsxs(o,{title:"linked list",children:[a.jsx(o.Tab,{code:Wy,language:"python"}),a.jsx(o.Tab,{code:sT,language:"javascript"}),a.jsx(o.Tab,{code:bT,language:"java"}),a.jsx(o.Tab,{code:AT,language:"cpp"}),a.jsx(o.Tab,{code:CT,language:"ruby"}),a.jsx(o.Tab,{code:XT,language:"lua"})]})}),a.jsx("section",{id:"ds-doubly-linked-list",children:a.jsxs(o,{title:"doubly linked list",children:[a.jsx(o.Tab,{code:Py,language:"python"}),a.jsx(o.Tab,{code:oT,language:"javascript"}),a.jsx(o.Tab,{code:_T,language:"java"}),a.jsx(o.Tab,{code:OT,language:"cpp"}),a.jsx(o.Tab,{code:UT,language:"ruby"}),a.jsx(o.Tab,{code:IT,language:"lua"})]})}),a.jsx("section",{id:"ds-binary-tree",children:a.jsxs(o,{title:"binary tree",children:[a.jsx(o.Tab,{code:Zy,language:"python"}),a.jsx(o.Tab,{code:iT,language:"javascript"}),a.jsx(o.Tab,{code:pT,language:"java"}),a.jsx(o.Tab,{code:NT,language:"cpp"}),a.jsx(o.Tab,{code:DT,language:"ruby"}),a.jsx(o.Tab,{code:QT,language:"lua"})]})}),a.jsx("section",{id:"ds-binary-search-tree",children:a.jsxs(o,{title:"binary search tree",children:[a.jsx(o.Tab,{code:Fy,language:"python"}),a.jsx(o.Tab,{code:lT,language:"javascript"}),a.jsx(o.Tab,{code:mT,language:"java"}),a.jsx(o.Tab,{code:ET,language:"cpp"}),a.jsx(o.Tab,{code:BT,language:"ruby"}),a.jsx(o.Tab,{code:JT,language:"lua"})]})}),a.jsx("section",{id:"ds-graph",children:a.jsxs(o,{title:"graph",children:[a.jsx(o.Tab,{code:$y,language:"python"}),a.jsx(o.Tab,{code:cT,language:"javascript"}),a.jsx(o.Tab,{code:xT,language:"java"}),a.jsx(o.Tab,{code:wT,language:"cpp"}),a.jsx(o.Tab,{code:HT,language:"ruby"}),a.jsx(o.Tab,{code:ZT,language:"lua"})]})}),a.jsx("section",{id:"ds-union-find",children:a.jsxs(o,{title:"union find",children:[a.jsx(o.Tab,{code:eT,language:"python"}),a.jsx(o.Tab,{code:fT,language:"javascript"}),a.jsx(o.Tab,{code:TT,language:"java"}),a.jsx(o.Tab,{code:RT,language:"cpp"}),a.jsx(o.Tab,{code:GT,language:"ruby"}),a.jsx(o.Tab,{code:PT,language:"lua"})]})}),a.jsx("section",{id:"ds-union-find-optimized",children:a.jsxs(o,{title:"union find optimized",children:[a.jsx(o.Tab,{code:tT,language:"python"}),a.jsx(o.Tab,{code:hT,language:"javascript"}),a.jsx(o.Tab,{code:ST,language:"java"}),a.jsx(o.Tab,{code:LT,language:"cpp"}),a.jsx(o.Tab,{code:VT,language:"ruby"}),a.jsx(o.Tab,{code:$T,language:"lua"})]})}),a.jsx("section",{id:"ds-trie",children:a.jsxs(o,{title:"trie",children:[a.jsx(o.Tab,{code:rT,language:"python"}),a.jsx(o.Tab,{code:dT,language:"javascript"}),a.jsx(o.Tab,{code:yT,language:"java"}),a.jsx(o.Tab,{code:MT,language:"cpp"}),a.jsx(o.Tab,{code:YT,language:"ruby"}),a.jsx(o.Tab,{code:WT,language:"lua"})]})})]})}const r2=`import random\r
\r
\r
def bogo_sort(arr: list) -> None:\r
    target = sorted(arr)\r
\r
    while arr != target:\r
        random.shuffle(arr)\r
`,e2=`def bubble_sort(arr: list) -> None:\r
    n = len(arr)\r
\r
    for i in range(n):\r
        swapped = False\r
\r
        for j in range(0, n - i - 1):\r
            if arr[j] > arr[j + 1]:\r
                arr[j], arr[j + 1] = arr[j + 1], arr[j]\r
                swapped = True\r
\r
        if not swapped:\r
            break\r
`,t2=`def bucket_sort(arr: list) -> list:\r
    num_buckets = 10\r
    min_num = min(arr)\r
    max_num = max(arr)\r
    bucket_size = (max_num - min_num) / num_buckets\r
    buckets = [[] for _ in range(num_buckets)]\r
\r
    for num in arr:\r
        index = min(int((num - min_num) / bucket_size), num_buckets - 1)\r
        buckets[index].append(num)\r
\r
    return [num for bucket in buckets for num in sorted(bucket)]\r
`,a2=`def counting_sort(arr: list) -> list:\r
    max_num = max(arr)\r
    min_num = min(arr)\r
    count_range = max_num - min_num + 1\r
    count = [0] * count_range\r
    output = [0] * len(arr)\r
\r
    for num in arr:\r
        count[num - min_num] += 1\r
\r
    for i in range(1, count_range):\r
        count[i] += count[i - 1]\r
\r
    for num in arr[::-1]:\r
        output[count[num - min_num] - 1] = num\r
        count[num - min_num] -= 1\r
\r
    return output\r
`,i2=`def cube_sort(arr: list, processors: int) -> None:\r
    n = len(arr)\r
    subarrays = []\r
    subarray_size = n // processors\r
\r
    for i in range(processors):\r
        subarray = arr[i * subarray_size : (i + 1) * subarray_size]\r
        subarrays.append(subarray)\r
\r
    for subarray in subarrays:\r
        subarray.sort()\r
\r
    for dimension in range(processors.bit_length() - 1):\r
        for i in range(processors):\r
            partner = i ^ (1 << dimension)\r
            if i < partner:\r
                merged = subarrays[i] + subarrays[partner]\r
            else:\r
                merged = subarrays[partner] + subarrays[i]\r
            merged.sort()\r
            subarrays[i] = merged[:subarray_size]\r
            subarrays[partner] = merged[subarray_size:]\r
\r
    arr[:] = [num for subarray in subarrays for num in subarray]\r
`,l2=`def heap_sort(arr: list) -> list:\r
    n = len(arr)\r
\r
    for i in range(n // 2 - 1, -1, -1):\r
        heapify(arr, n, i)\r
    for i in range(n - 1, 0, -1):\r
        arr[i], arr[0] = arr[0], arr[i]\r
        heapify(arr, i, 0)\r
\r
    return arr\r
\r
def heapify(arr: list, n: int, i: int) -> None:\r
    largest = i\r
    left = 2 * i + 1\r
    right = 2 * i + 2\r
\r
    if left < n and arr[left] > arr[largest]:\r
        largest = left\r
    if right < n and arr[right] > arr[largest]:\r
        largest = right\r
    if largest != i:\r
        arr[i], arr[largest] = arr[largest], arr[i]\r
        heapify(arr, n, largest)\r
`,s2=`def insertion_sort(arr: list) -> None:\r
    n = len(arr)\r
\r
    for i in range(1, n):\r
        key = arr[i]\r
\r
        while i > 0 and key < arr[i - 1]:\r
            arr[i] = arr[i - 1]\r
            i -= 1\r
\r
        arr[i] = key\r
`,o2=`def merge_sort(arr: list) -> list:\r
    n = len(arr)\r
\r
    if n <= 1:\r
        return arr\r
\r
    mid = n // 2\r
    left = merge_sort(arr[:mid])\r
    right = merge_sort(arr[mid:])\r
\r
    return merge(left, right)\r
\r
def merge(left: list, right: list) -> list:\r
    output = []\r
\r
    while left and right:\r
        min_num = left.pop(0) if left[0] <= right[0] else right.pop(0)\r
        output.append(min_num)\r
\r
    output.extend(left)\r
    output.extend(right)\r
\r
    return output\r
`,c2=`def pancake_sort(arr: list) -> None:\r
    n = len(arr)\r
\r
    for size in reversed(range(2, n + 1)):\r
        max_idx = find_max_index(arr, size)\r
\r
        if max_idx != size - 1:\r
            flip(arr, max_idx)\r
            flip(arr, size - 1)\r
\r
def flip(arr: list, i: int) -> None:\r
    left = 0\r
\r
    while left < i:\r
        arr[left], arr[i] = arr[i], arr[left]\r
        left += 1\r
        i -= 1\r
\r
def find_max_index(arr: list, n: int) -> int:\r
    max_idx = 0\r
\r
    for i in range(n):\r
        if arr[i] > arr[max_idx]:\r
            max_idx = i\r
\r
    return max_idx\r
`,u2=`def quick_sort(arr: list) -> list:\r
    n = len(arr)\r
\r
    if n <= 1:\r
        return arr\r
\r
    pivot = arr[n // 2]\r
    left = [x for x in arr if x < pivot]\r
    right = [x for x in arr if x > pivot]\r
\r
    return quick_sort(left) + [pivot] + quick_sort(right)\r
`,d2=`def radix_sort(arr: list) -> None:\r
    max_val = max(arr)\r
    exp = 1\r
\r
    while max_val // exp > 0:\r
        counting_sort(arr, exp)\r
        exp *= 10\r
\r
def counting_sort(arr: list, exp: int) -> None:\r
    n = len(arr)\r
    output = [0] * n\r
    count = [0] * 10\r
\r
    for i in range(n):\r
        idx = arr[i] // exp\r
        count[idx % 10] += 1\r
\r
    for i in range(1, 10):\r
        count[i] += count[i - 1]\r
\r
    i = n - 1\r
\r
    while i >= 0:\r
        idx = arr[i] // exp\r
        output[count[idx % 10] - 1] = arr[i]\r
        count[idx % 10] -= 1\r
        i -= 1\r
\r
    for i in range(n):\r
        arr[i] = output[i]\r
`,f2=`def selection_sort(arr: list) -> None:\r
    n = len(arr)\r
\r
    for i in range(n):\r
        min_i = i\r
\r
        for j in range(i + 1, n):\r
            if arr[j] < arr[min_i]:\r
                min_i = j\r
\r
        if min_i != i:\r
            arr[i], arr[min_i] = arr[min_i], arr[i]\r
`,h2=`def shell_sort(arr: list) -> None:\r
    n = len(arr)\r
    gaps = [701, 301, 132, 57, 23, 10, 4, 1]\r
\r
    for gap in gaps:\r
        for i in range(gap, n):\r
            tmp = arr[i]\r
            j = i\r
\r
            while j >= gap and arr[j - gap] > tmp:\r
                arr[j] = arr[j - gap]\r
                j -= gap\r
\r
            if j != i:\r
                arr[j] = tmp\r
`,g2=`from threading import Thread\r
from time import sleep\r
\r
\r
def sleep_sort(arr: list ) -> list:\r
    sorted_arr = []\r
    threads = []\r
\r
    for num in arr:\r
        thread = Thread(target=snorlax, args=(num, sorted_arr))\r
        threads.append(thread)\r
\r
    for thread in threads:\r
        thread.start( )\r
\r
    for thread in threads:\r
        thread.join()\r
\r
    return sorted_arr\r
\r
def snorlax(num: float, arr: list) -> None:\r
    sleep(num / 1000.0)\r
    arr.append(num)\r
`,p2=`def tim_sort(arr: list) -> list:\r
    n = len(arr)\r
    min_run = 32\r
\r
    for start in range(0, n, min_run):\r
        end = min(start + min_run - 1, n - 1)\r
        insertion_sort(arr, start, end)\r
\r
    size = min_run\r
\r
    while size < n:\r
        for left in range(0, n, 2 * size):\r
            mid = min(n - 1, left + size - 1)\r
            right = min((left + 2 * size - 1), (n - 1))\r
            arr[left : right + 1] = merge(arr[left : mid + 1], arr[mid + 1 : right + 1])\r
        size *= 2\r
\r
    return arr\r
\r
def insertion_sort(arr: list, left: int, right: int) -> None:\r
    for i in range(left + 1, right + 1):\r
        key = arr[i]\r
\r
        while i > 0 and key < arr[i - 1]:\r
            arr[i] = arr[i - 1]\r
            i -= 1\r
\r
        arr[i] = key\r
\r
def merge_sort(arr: list) -> list:\r
    n = len(arr)\r
\r
    if n <= 1:\r
        return arr\r
\r
    mid = n // 2\r
    left = merge_sort(arr[:mid])\r
    right = merge_sort(arr[mid:])\r
\r
    return merge(left, right)\r
\r
def merge(left: list, right: list) -> list:\r
    output = []\r
\r
    while left and right:\r
        min_num = left.pop(0) if left[0] <= right[0] else right.pop(0)\r
        output.append(min_num)\r
\r
    output.extend(left)\r
    output.extend(right)\r
\r
    return output\r
`,m2=`const bogoSort = (arr) => {\r
    const isSorted = (arr) => {\r
        for (let i = 0; i < arr.length - 1; i++) {\r
            if (arr[i] > arr[i + 1]) {\r
                return false\r
            }\r
        }\r
\r
        return true\r
    }\r
\r
    const shuffleArray = (arr) => {\r
        for (let i = arr.length - 1; i > 0; i--) {\r
            const j = Math.floor(Math.random() * (i + 1))\r
            [arr[i], arr[j]] = [arr[j], arr[i]]\r
        }\r
\r
        return arr\r
    }\r
\r
    while (!isSorted(arr)) {\r
        arr = shuffleArray(arr)\r
    }\r
}\r
`,b2=`const bubbleSort = (arr) => {\r
    const n = arr.length\r
\r
    for (let i = 0; i < n; i++) {\r
        let swapped = false\r
\r
        for (let j = 0; j < n - i - 1; j++) {\r
            if (arr[j] > arr[j + 1]) {\r
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]\r
                swapped = true\r
            }\r
        }\r
\r
        if (!swapped) {\r
            break\r
        }\r
    }\r
}\r
`,_2=`const bucketSort = (arr) => {\r
    const num_buckets = 10\r
    const min_num = Math.min(...arr)\r
    const max_num = Math.max(...arr)\r
    const bucket_size = (max_num - min_num) / num_buckets\r
    const buckets = Array.from({ length: num_buckets }, () => [])\r
\r
    for (const num of arr) {\r
        const index = Math.min(Math.floor((num - min_num) / bucket_size), num_buckets - 1)\r
        buckets[index].push(num)\r
    }\r
\r
    return buckets.flatMap(bucket => bucket.sort((a, b) => a - b))\r
}\r
`,x2=`const countingSort = (arr) => {\r
    const max_num = Math.max(...arr)\r
    const min_num = Math.min(...arr)\r
    const count_range = max_num - min_num + 1\r
    const count = Array(count_range).fill(0)\r
    const output = Array(arr.length)\r
\r
    for (const num of arr) {\r
        count[num - min_num]++\r
    }\r
\r
    for (let i = 1; i < count_range; i++) {\r
        count[i] += count[i - 1]\r
    }\r
\r
    for (let i = arr.length - 1; i >= 0; i--) {\r
        output[count[arr[i] - min_num] - 1] = arr[i]\r
        count[arr[i] - min_num]--\r
    }\r
\r
    return output\r
}\r
`,v2=`const cubeSort = (arr, processors) => {\r
    const n = arr.length\r
    const subarrays = []\r
    const subarraySize = Math.floor(n / processors)\r
\r
    for (let i = 0; i < processors; i++) {\r
        const subarray = arr.slice(i * subarraySize, (i + 1) * subarraySize)\r
        subarray.sort((a, b) => a - b)\r
        subarrays.push(subarray)\r
    }\r
\r
    for (let dimension = 0; dimension < Math.floor(Math.log2(processors)); dimension++) {\r
        for (let i = 0; i < processors; i++) {\r
            const partner = i ^ (1 << dimension)\r
            if (i < partner) {\r
                const merged = subarrays[i].concat(subarrays[partner])\r
                merged.sort((a, b) => a - b)\r
                subarrays[i] = merged.slice(0, subarraySize)\r
                subarrays[partner] = merged.slice(subarraySize)\r
            }\r
        }\r
    }\r
\r
    arr.splice(0, arr.length, ...subarrays.flat())\r
}\r
`,y2=`const heapSort = (arr) => {\r
    const n = arr.length\r
\r
    const heapify = (arr, n, i) => {\r
        let largest = i\r
        const left = 2 * i + 1\r
        const right = 2 * i + 2\r
\r
        if (left < n && arr[left] > arr[largest]) {\r
            largest = left\r
        }\r
        if (right < n && arr[right] > arr[largest]) {\r
            largest = right\r
        }\r
        if (largest !== i) {\r
            [arr[i], arr[largest]] = [arr[largest], arr[i]]\r
            heapify(arr, n, largest)\r
        }\r
    }\r
\r
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {\r
        heapify(arr, n, i)\r
    }\r
    for (let i = n - 1; i > 0; i--) {\r
        [arr[i], arr[0]] = [arr[0], arr[i]]\r
        heapify(arr, i, 0)\r
    }\r
\r
    return arr\r
}\r
`,T2=`const insertionSort = (arr) => {\r
    const n = arr.length\r
\r
    for (let i = 1; i < n; i++) {\r
        let key = arr[i]\r
        let j = i - 1\r
\r
        while (j >= 0 && key < arr[j]) {\r
            arr[j + 1] = arr[j]\r
            j--\r
        }\r
\r
        arr[j + 1] = key\r
    }\r
}\r
`,S2=`const mergeSort = (arr) => {\r
    const n = arr.length\r
\r
    if (n <= 1) {\r
        return arr\r
    }\r
\r
    const mid = Math.floor(n / 2)\r
    const left = mergeSort(arr.slice(0, mid))\r
    const right = mergeSort(arr.slice(mid))\r
\r
    return merge(left, right)\r
}\r
\r
const merge = (left, right) => {\r
    const output = []\r
\r
    while (left.length && right.length) {\r
        const minNum = left[0] <= right[0] ? left.shift() : right.shift()\r
        output.push(minNum)\r
    }\r
\r
    output.push(...left)\r
    output.push(...right)\r
\r
    return output\r
}\r
`,j2=`const pancakeSort = (arr) => {\r
    const n = arr.length\r
\r
    for (let size = n; size > 1; size--) {\r
        const maxIdx = findMaxIndex(arr, size)\r
\r
        if (maxIdx !== size - 1) {\r
            flip(arr, maxIdx)\r
            flip(arr, size - 1)\r
        }\r
    }\r
}\r
\r
const flip = (arr, i) => {\r
    let left = 0\r
\r
    while (left < i) {\r
        [arr[left], arr[i]] = [arr[i], arr[left]]\r
        left++\r
        i--\r
    }\r
}\r
\r
const findMaxIndex = (arr, n) => {\r
    let maxIdx = 0\r
\r
    for (let i = 0; i < n; i++) {\r
        if (arr[i] > arr[maxIdx]) {\r
            maxIdx = i\r
        }\r
    }\r
\r
    return maxIdx\r
}\r
`,N2=`const quickSort = (arr) => {\r
    const n = arr.length\r
\r
    if (n <= 1) {\r
        return arr\r
    }\r
\r
    const pivot = arr[Math.floor(n / 2)]\r
    const left = arr.filter(x => x < pivot)\r
    const right = arr.filter(x => x > pivot)\r
\r
    return [...quickSort(left), pivot, ...quickSort(right)]\r
}\r
`,E2=`const radixSort = (arr) => {\r
    const maxVal = Math.max(...arr)\r
    let exp = 1\r
\r
    while (maxVal / exp > 0) {\r
        countingSort(arr, exp)\r
        exp *= 10\r
    }\r
}\r
\r
const countingSort = (arr, exp) => {\r
    const n = arr.length\r
    const output = new Array(n).fill(0)\r
    const count = new Array(10).fill(0)\r
\r
    for (let i = 0; i < n; i++) {\r
        const idx = Math.floor(arr[i] / exp)\r
        count[idx % 10] += 1\r
    }\r
\r
    for (let i = 1; i < 10; i++) {\r
        count[i] += count[i - 1]\r
    }\r
\r
    let i = n - 1\r
\r
    while (i >= 0) {\r
        const idx = Math.floor(arr[i] / exp)\r
        output[count[idx % 10] - 1] = arr[i]\r
        count[idx % 10] -= 1\r
        i -= 1\r
    }\r
\r
    for (let i = 0; i < n; i++) {\r
        arr[i] = output[i]\r
    }\r
}\r
`,A2=`const selectionSort = (arr) => {\r
    const n = arr.length\r
\r
    for (let i = 0; i < n; i++) {\r
        let minIndex = i\r
\r
        for (let j = i + 1; j < n; j++) {\r
            if (arr[j] < arr[minIndex]) {\r
                minIndex = j\r
            }\r
        }\r
\r
        if (minIndex !== i) {\r
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]\r
        }\r
    }\r
}\r
`,O2=`const shellSort = (arr) => {\r
    const n = arr.length\r
    const gaps = [701, 301, 132, 57, 23, 10, 4, 1]\r
\r
    for (const gap of gaps) {\r
        for (let i = gap; i < n; i++) {\r
            const tmp = arr[i]\r
            let j = i\r
\r
            while (j >= gap && arr[j - gap] > tmp) {\r
                arr[j] = arr[j - gap]\r
                j -= gap\r
            }\r
\r
            if (j !== i) {\r
                arr[j] = tmp\r
            }\r
        }\r
    }\r
}\r
`,w2=`const sleepSort = (arr) => {\r
    const sortedArr = []\r
    const promises = []\r
\r
    for (const num of arr) {\r
        promises.push(new Promise((resolve) => setTimeout(() => {\r
            sortedArr.push(num)\r
            resolve()\r
        }, num)))\r
    }\r
\r
    return Promise.all(promises).then(() => sortedArr)\r
}\r
`,k2=`const timSort = (arr) => {\r
    const n = arr.length\r
    const minRun = 32\r
\r
    for (let start = 0; start < n; start += minRun) {\r
        const end = Math.min(start + minRun - 1, n - 1)\r
        insertionSort(arr, start, end)\r
    }\r
\r
    let size = minRun\r
\r
    while (size < n) {\r
        for (let left = 0; left < n; left += 2 * size) {\r
            const mid = Math.min(n - 1, left + size - 1)\r
            const right = Math.min((left + 2 * size - 1), (n - 1))\r
            const merged = merge(arr.slice(left, mid + 1), arr.slice(mid + 1, right + 1))\r
            arr.splice(left, right - left + 1, ...merged)\r
        }\r
        size *= 2\r
    }\r
\r
    return arr\r
}\r
\r
const insertionSort = (arr, left, right) => {\r
    for (let i = left + 1; i <= right; i++) {\r
        const key = arr[i]\r
        let j = i\r
\r
        while (j > left && key < arr[j - 1]) {\r
            arr[j] = arr[j - 1]\r
            j--\r
        }\r
\r
        arr[j] = key\r
    }\r
}\r
\r
const mergeSort = (arr) => {\r
    const n = arr.length\r
\r
    if (n <= 1) {\r
        return arr\r
    }\r
\r
    const mid = Math.floor(n / 2)\r
    const left = mergeSort(arr.slice(0, mid))\r
    const right = mergeSort(arr.slice(mid))\r
\r
    return merge(left, right)\r
}\r
\r
const merge = (left, right) => {\r
    const output = []\r
\r
    while (left.length && right.length) {\r
        const minNum = left[0] <= right[0] ? left.shift() : right.shift()\r
        output.push(minNum)\r
    }\r
\r
    return output.concat(left).concat(right)\r
}\r
`,M2=`import java.util.Arrays;\r
import java.util.Random;\r
\r
\r
public static void bogoSort(int[] arr) {\r
    int[] target = Arrays.copyOf(arr, arr.length);\r
    Arrays.sort(target);\r
\r
    while (!Arrays.equals(arr, target)) {\r
        shuffleArray(arr);\r
    }\r
}\r
\r
public static void shuffleArray(int[] arr) {\r
    Random rnd = new Random();\r
\r
    for (int i = arr.length - 1; i > 0; i--) {\r
        int index = rnd.nextInt(i + 1);\r
        int temp = arr[index];\r
        arr[index] = arr[i];\r
        arr[i] = temp;\r
    }\r
}\r
`,R2=`public static void bubbleSort(int[] arr) {\r
    int n = arr.length;\r
\r
    for (int i = 0; i < n; i++) {\r
        boolean swapped = false;\r
\r
        for (int j = 0; j < n - i - 1; j++) {\r
            if (arr[j] > arr[j + 1]) {\r
                int temp = arr[j];\r
                arr[j] = arr[j + 1];\r
                arr[j + 1] = temp;\r
                swapped = true;\r
            }\r
        }\r
\r
        if (!swapped) {\r
            break;\r
        }\r
    }\r
}\r
`,L2=`import java.util.ArrayList;\r
import java.util.Arrays;\r
import java.util.Collections;\r
import java.util.List;\r
\r
\r
public static int[] bucketSort(int[] arr) {\r
    int numBuckets = 10;\r
    int index;\r
    int[] result = new int[arr.length];\r
    int minNum = Arrays.stream(arr).min().getAsInt();\r
    int maxNum = Arrays.stream(arr).max().getAsInt();\r
    double bucketSize = (double) (maxNum - minNum) / numBuckets;\r
    List<List<Integer>> buckets = new ArrayList<>(numBuckets);\r
\r
    for (int i = 0; i < numBuckets; i++) {\r
        buckets.add(new ArrayList<>());\r
    }\r
\r
    for (int num : arr) {\r
        index = Math.min((int) ((num - minNum) / bucketSize), numBuckets - 1);\r
        buckets.get(index).add(num);\r
    }\r
\r
    index = 0;\r
\r
    for (List<Integer> bucket : buckets) {\r
        Collections.sort(bucket);\r
\r
        for (int num : bucket) {\r
            result[index++] = num;\r
        }\r
    }\r
\r
    return result;\r
}\r
`,z2=`import java.util.Arrays;\r
\r
\r
public static int[] countingSort(int[] arr) {\r
    int maxNum = Arrays.stream(arr).max().orElse(Integer.MIN_VALUE);\r
    int minNum = Arrays.stream(arr).min().orElse(Integer.MAX_VALUE);\r
    int countRange = maxNum - minNum + 1;\r
    int[] count = new int[countRange];\r
    int[] output = new int[arr.length];\r
\r
    for (int num : arr) {\r
        count[num - minNum]++;\r
    }\r
\r
    for (int i = 1; i < countRange; i++) {\r
        count[i] += count[i - 1];\r
    }\r
\r
    for (int i = arr.length - 1; i >= 0; i--) {\r
        output[count[arr[i] - minNum] - 1] = arr[i];\r
        count[arr[i] - minNum]--;\r
    }\r
\r
    return output;\r
}\r
`,D2=`import java.util.ArrayList;\r
import java.util.Arrays;\r
import java.util.List;\r
\r
\r
public static void cubeSort(int[] arr, int processors) {\r
    int n = arr.length;\r
    List<int[]> subarrays = new ArrayList<>();\r
    int subarraySize = (n + processors - 1) / processors;\r
\r
    for (int i = 0; i < processors; i++) {\r
        int[] subarray = new int[Math.min(subarraySize, n - i * subarraySize)];\r
        System.arraycopy(arr, i * subarraySize, subarray, 0, subarray.length);\r
        Arrays.sort(subarray);\r
        subarrays.add(subarray);\r
    }\r
\r
    for (int dimension = 0; dimension < Integer.SIZE - 1; dimension++) {\r
        for (int i = 0; i < processors; i++) {\r
            int partner = i ^ (1 << dimension);\r
\r
            if (i < partner && partner < processors) {\r
                int[] merged = merge(subarrays.get(i), subarrays.get(partner));\r
                System.arraycopy(merged, 0, subarrays.get(i), 0, subarraySize);\r
                System.arraycopy(merged, subarraySize, subarrays.get(partner), 0, subarraySize);\r
            }\r
        }\r
    }\r
\r
    int index = 0;\r
\r
    for (int[] subarray : subarrays) {\r
        for (int num : subarray) {\r
            arr[index++] = num;\r
        }\r
    }\r
}\r
\r
public static int[] merge(int[] arr1, int[] arr2) {\r
    int[] merged = new int[arr1.length + arr2.length];\r
    int i = 0, j = 0, k = 0;\r
\r
    while (i < arr1.length && j < arr2.length) {\r
        if (arr1[i] < arr2[j]) {\r
            merged[k++] = arr1[i++];\r
        } else {\r
            merged[k++] = arr2[j++];\r
        }\r
    }\r
\r
    while (i < arr1.length) {\r
        merged[k++] = arr1[i++];\r
    }\r
\r
    while (j < arr2.length) {\r
        merged[k++] = arr2[j++];\r
    }\r
\r
    return merged;\r
}\r
`,B2=`public static int[] heapSort(int[] arr) {\r
    int n = arr.length;\r
\r
    for (int i = n / 2 - 1; i >= 0; i--) {\r
        heapify(arr, n, i);\r
    }\r
\r
    for (int i = n - 1; i > 0; i--) {\r
        int temp = arr[0];\r
        arr[0] = arr[i];\r
        arr[i] = temp;\r
\r
        heapify(arr, i, 0);\r
    }\r
\r
    return arr;\r
}\r
\r
public static void heapify(int[] arr, int n, int i) {\r
    int largest = i;\r
    int left = 2 * i + 1;\r
    int right = 2 * i + 2;\r
\r
    if (left < n && arr[left] > arr[largest]) {\r
        largest = left;\r
    }\r
    if (right < n && arr[right] > arr[largest]) {\r
        largest = right;\r
    }\r
    if (largest != i) {\r
        int temp = arr[i];\r
        arr[i] = arr[largest];\r
        arr[largest] = temp;\r
\r
        heapify(arr, n, largest);\r
    }\r
}\r
`,C2=`public static void insertionSort(int[] arr) {\r
    int n = arr.length;\r
\r
    for (int i = 1; i < n; i++) {\r
        int key = arr[i];\r
        int j = i - 1;\r
\r
        while (j >= 0 && key < arr[j]) {\r
            arr[j + 1] = arr[j];\r
            j--;\r
        }\r
\r
        arr[j + 1] = key;\r
    }\r
}\r
`,U2=`import java.util.Arrays;\r
\r
\r
public static int[] mergeSort(int[] arr) {\r
    int n = arr.length;\r
\r
    if (n <= 1) {\r
        return arr;\r
    }\r
\r
    int mid = n / 2;\r
    int[] left = Arrays.copyOfRange(arr, 0, mid);\r
    int[] right = Arrays.copyOfRange(arr, mid, n);\r
\r
    left = mergeSort(left);\r
    right = mergeSort(right);\r
\r
    return merge(left, right);\r
}\r
\r
public static int[] merge(int[] left, int[] right) {\r
    int[] output = new int[left.length + right.length];\r
    int i = 0, j = 0, k = 0;\r
\r
    while (i < left.length && j < right.length) {\r
        if (left[i] <= right[j]) {\r
            output[k++] = left[i++];\r
        } else {\r
            output[k++] = right[j++];\r
        }\r
    }\r
\r
    while (i < left.length) {\r
        output[k++] = left[i++];\r
    }\r
\r
    while (j < right.length) {\r
        output[k++] = right[j++];\r
    }\r
\r
    return output;\r
}\r
`,H2=`public static void pancakeSort(int[] arr) {\r
    int n = arr.length;\r
\r
    for (int size = n; size >= 2; size--) {\r
        int maxIdx = findMaxIndex(arr, size);\r
\r
        if (maxIdx != size - 1) {\r
            flip(arr, maxIdx);\r
            flip(arr, size - 1);\r
        }\r
    }\r
}\r
\r
public static void flip(int[] arr, int i) {\r
    int left = 0;\r
\r
    while (left < i) {\r
        int temp = arr[left];\r
        arr[left] = arr[i];\r
        arr[i] = temp;\r
        left++;\r
        i--;\r
    }\r
}\r
\r
public static int findMaxIndex(int[] arr, int n) {\r
    int maxIdx = 0;\r
\r
    for (int i = 0; i < n; i++) {\r
        if (arr[i] > arr[maxIdx]) {\r
            maxIdx = i;\r
        }\r
    }\r
\r
    return maxIdx;\r
}\r
`,q2=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public static int[] quickSort(int[] arr) {\r
    int n = arr.length;\r
\r
    if (n <= 1) {\r
        return arr;\r
    }\r
\r
    int pivot = arr[n / 2];\r
    List<Integer> left = new ArrayList<>();\r
    List<Integer> right = new ArrayList<>();\r
\r
    for (int x : arr) {\r
        if (x < pivot) {\r
            left.add(x);\r
        } else if (x > pivot) {\r
            right.add(x);\r
        }\r
    }\r
\r
    int[] sortedLeft = quickSort(left.stream().mapToInt(i -> i).toArray());\r
    int[] sortedRight = quickSort(right.stream().mapToInt(i -> i).toArray());\r
    int[] result = new int[n];\r
\r
    System.arraycopy(sortedLeft, 0, result, 0, sortedLeft.length);\r
    result[sortedLeft.length] = pivot;\r
    System.arraycopy(sortedRight, 0, result, sortedLeft.length + 1, sortedRight.length);\r
\r
    return result;\r
}\r
`,Y2=`import java.util.Arrays;\r
\r
\r
public static void radixSort(int[] arr) {\r
    int maxVal = Arrays.stream(arr).max().getAsInt();\r
    int exp = 1;\r
\r
    while (maxVal / exp > 0) {\r
        countingSort(arr, exp);\r
        exp *= 10;\r
    }\r
}\r
\r
public static void countingSort(int[] arr, int exp) {\r
    int n = arr.length;\r
    int[] output = new int[n];\r
    int[] count = new int[10];\r
\r
    for (int i = 0; i < n; i++) {\r
        int idx = arr[i] / exp;\r
        count[idx % 10]++;\r
    }\r
\r
    for (int i = 1; i < 10; i++) {\r
        count[i] += count[i - 1];\r
    }\r
\r
    for (int i = n - 1; i >= 0; i--) {\r
        int idx = arr[i] / exp;\r
        output[count[idx % 10] - 1] = arr[i];\r
        count[idx % 10]--;\r
    }\r
\r
    System.arraycopy(output, 0, arr, 0, n);\r
}\r
`,G2=`public static void selectionSort(int[] arr) {\r
    int n = arr.length;\r
\r
    for (int i = 0; i < n; i++) {\r
        int minIdx = i;\r
\r
        for (int j = i + 1; j < n; j++) {\r
            if (arr[j] < arr[minIdx]) {\r
                minIdx = j;\r
            }\r
        }\r
\r
        if (minIdx != i) {\r
            int temp = arr[i];\r
            arr[i] = arr[minIdx];\r
            arr[minIdx] = temp;\r
        }\r
    }\r
}\r
`,V2=`public static void shellSort(int[] arr) {\r
    int n = arr.length;\r
    int[] gaps = {701, 301, 132, 57, 23, 10, 4, 1};\r
\r
    for (int gap : gaps) {\r
        for (int i = gap; i < n; i++) {\r
            int tmp = arr[i];\r
            int j = i;\r
\r
            while (j >= gap && arr[j - gap] > tmp) {\r
                arr[j] = arr[j - gap];\r
                j -= gap;\r
            }\r
\r
            if (j != i) {\r
                arr[j] = tmp;\r
            }\r
        }\r
    }\r
}\r
`,K2=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public static int[] sleepSort(int[] arr) {\r
    List<Integer> sortedArr = new ArrayList<>();\r
    List<Thread> threads = new ArrayList<>();\r
\r
    for (int num : arr) {\r
        Thread thread = new Thread(() -> snorlax(num, sortedArr));\r
        threads.add(thread);\r
    }\r
\r
    for (Thread thread : threads) {\r
        thread.start();\r
    }\r
\r
    for (Thread thread : threads) {\r
        try {\r
            thread.join();\r
        } catch (InterruptedException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
\r
    return sortedArr.stream().mapToInt(i -> i).toArray();\r
}\r
\r
public static void snorlax(int num, List<Integer> arr) {\r
    try {\r
        Thread.sleep(num);\r
    } catch (InterruptedException e) {\r
        e.printStackTrace();\r
    }\r
    arr.add(num);\r
}\r
`,Q2=`public static int[] timSort(int[] arr) {\r
    int n = arr.length;\r
    int minRun = 32;\r
\r
    for (int start = 0; start < n; start += minRun) {\r
        int end = Math.min(start + minRun - 1, n - 1);\r
        insertionSort(arr, start, end);\r
    }\r
\r
    int size = minRun;\r
\r
    while (size < n) {\r
        for (int left = 0; left < n; left += 2 * size) {\r
            int mid = Math.min(n - 1, left + size - 1);\r
            int right = Math.min(left + 2 * size - 1, n - 1);\r
            arr = merge(arr, left, mid, right);\r
        }\r
        size *= 2;\r
    }\r
\r
    return arr;\r
}\r
\r
public static void insertionSort(int[] arr, int left, int right) {\r
    for (int i = left + 1; i <= right; i++) {\r
        int key = arr[i];\r
        int j = i - 1;\r
\r
        while (j >= left && key < arr[j]) {\r
            arr[j + 1] = arr[j];\r
            j--;\r
        }\r
\r
        arr[j + 1] = key;\r
    }\r
}\r
\r
public static int[] merge(int[] arr, int left, int mid, int right) {\r
    int[] output = new int[right - left + 1];\r
    int i = left, j = mid + 1, k = 0;\r
\r
    while (i <= mid && j <= right) {\r
        if (arr[i] <= arr[j]) {\r
            output[k++] = arr[i++];\r
        } else {\r
            output[k++] = arr[j++];\r
        }\r
    }\r
\r
    while (i <= mid) {\r
        output[k++] = arr[i++];\r
    }\r
\r
    while (j <= right) {\r
        output[k++] = arr[j++];\r
    }\r
\r
    System.arraycopy(output, 0, arr, left, output.length);\r
    return arr;\r
}\r
`,J2=`#include <algorithm>\r
#include <random>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
void BogoSort(vector<int>& arr) {\r
    vector<int> target = arr;\r
    sort(target.begin(), target.end());\r
\r
    random_device rd;\r
    mt19937 g(rd());\r
\r
    while (!is_sorted(arr.begin(), arr.end())) {\r
        shuffle(arr.begin(), arr.end(), g);\r
    }\r
}\r
`,X2=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void BubbleSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    for (int i = 0; i < n; ++i) {\r
        bool swapped = false;\r
\r
        for (int j = 0; j < n - i - 1; ++j) {\r
            if (arr[j] > arr[j + 1]) {\r
                std::swap(arr[j], arr[j + 1]);\r
                swapped = true;\r
            }\r
        }\r
\r
        if (!swapped) {\r
            break;\r
        }\r
    }\r
}\r
`,I2=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
vector<int> BucketSort(vector<int>& arr) {\r
    int num_buckets = 10;\r
    int min_num = *min_element(arr.begin(), arr.end());\r
    int max_num = *max_element(arr.begin(), arr.end());\r
    double bucket_size = static_cast<double>(max_num - min_num) / num_buckets;\r
    vector<vector<int>> buckets(num_buckets);\r
    vector<int> result;\r
\r
    for (int num : arr) {\r
        int index = min(static_cast<int>((num - min_num) / bucket_size), num_buckets - 1);\r
        buckets[index].push_back(num);\r
    }\r
\r
    for (auto& bucket : buckets) {\r
        sort(bucket.begin(), bucket.end());\r
        result.insert(result.end(), bucket.begin(), bucket.end());\r
    }\r
\r
    return result;\r
}\r
`,Z2=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
vector<int> CountingSort(vector<int>& arr) {\r
    int max_num = *max_element(arr.begin(), arr.end());\r
    int min_num = *min_element(arr.begin(), arr.end());\r
    int count_range = max_num - min_num + 1;\r
    vector<int> count(count_range, 0);\r
    vector<int> output(arr.size(), 0);\r
\r
    for (int num : arr) {\r
        count[num - min_num]++;\r
    }\r
\r
    for (int i = 1; i < count_range; ++i) {\r
        count[i] += count[i - 1];\r
    }\r
\r
    for (int i = arr.size() - 1; i >= 0; --i) {\r
        output[count[arr[i] - min_num] - 1] = arr[i];\r
        count[arr[i] - min_num]--;\r
    }\r
\r
    return output;\r
}\r
`,F2=`#include <vector>\r
#include <algorithm>\r
#include <cmath>\r
\r
using namespace std;\r
\r
\r
void CubeSort(vector<int>& arr, int processors) {\r
    int n = arr.size();\r
    vector<vector<int>> subarrays;\r
    int subarray_size = n / processors;\r
\r
    for (int i = 0; i < processors; ++i) {\r
        vector<int> subarray(arr.begin() + i * subarray_size, arr.begin() + (i + 1) * subarray_size);\r
        sort(subarray.begin(), subarray.end());\r
        subarrays.push_back(subarray);\r
    }\r
\r
    for (int dimension = 0; dimension < log2(processors); ++dimension) {\r
        for (int i = 0; i < processors; ++i) {\r
            int partner = i ^ (1 << dimension);\r
            vector<int> merged;\r
            if (i < partner) {\r
                merged = subarrays[i];\r
                merged.insert(merged.end(), subarrays[partner].begin(), subarrays[partner].end());\r
            } else {\r
                merged = subarrays[partner];\r
                merged.insert(merged.end(), subarrays[i].begin(), subarrays[i].end());\r
            }\r
            sort(merged.begin(), merged.end());\r
            subarrays[i].assign(merged.begin(), merged.begin() + subarray_size);\r
            subarrays[partner].assign(merged.begin() + subarray_size, merged.end());\r
        }\r
    }\r
\r
    arr.clear();\r
    for (auto& subarray : subarrays) {\r
        arr.insert(arr.end(), subarray.begin(), subarray.end());\r
    }\r
}\r
`,W2=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void Heapify(vector<int>& arr, int n, int i) {\r
    int largest = i;\r
    int left = 2 * i + 1;\r
    int right = 2 * i + 2;\r
\r
    if (left < n && arr[left] > arr[largest]) {\r
        largest = left;\r
    }\r
    if (right < n && arr[right] > arr[largest]) {\r
        largest = right;\r
    }\r
    if (largest != i) {\r
        swap(arr[i], arr[largest]);\r
        Heapify(arr, n, largest);\r
    }\r
}\r
\r
void HeapSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    for (int i = n / 2 - 1; i >= 0; --i) {\r
        Heapify(arr, n, i);\r
    }\r
    for (int i = n - 1; i > 0; --i) {\r
        swap(arr[0], arr[i]);\r
        Heapify(arr, i, 0);\r
    }\r
}\r
`,P2=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void InsertionSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    for (int i = 1; i < n; ++i) {\r
        int key = arr[i];\r
        int j = i - 1;\r
\r
        while (j >= 0 && key < arr[j]) {\r
            arr[j + 1] = arr[j];\r
            --j;\r
        }\r
\r
        arr[j + 1] = key;\r
    }\r
}\r
`,$2=`#include <vector>\r
\r
using namespace std;\r
\r
\r
vector<int> Merge(vector<int>& left, vector<int>& right) {\r
    vector<int> output;\r
\r
    while (!left.empty() && !right.empty()) {\r
        int min_num = (left[0] <= right[0]) ? left[0] : right[0];\r
        output.push_back(min_num);\r
\r
        if (left[0] <= right[0]) {\r
            left.erase(left.begin());\r
        } else {\r
            right.erase(right.begin());\r
        }\r
    }\r
\r
    output.insert(output.end(), left.begin(), left.end());\r
    output.insert(output.end(), right.begin(), right.end());\r
\r
    return output;\r
}\r
\r
vector<int> MergeSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    if (n <= 1) {\r
        return arr;\r
    }\r
\r
    int mid = n / 2;\r
    vector<int> left(arr.begin(), arr.begin() + mid);\r
    vector<int> right(arr.begin() + mid, arr.end());\r
\r
    left = MergeSort(left);\r
    right = MergeSort(right);\r
\r
    return Merge(left, right);\r
}\r
`,nS=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int FindMaxIndex(vector<int>& arr, int n) {\r
    int max_idx = 0;\r
\r
    for (int i = 0; i < n; ++i) {\r
        if (arr[i] > arr[max_idx]) {\r
            max_idx = i;\r
        }\r
    }\r
\r
    return max_idx;\r
}\r
\r
void Flip(vector<int>& arr, int i) {\r
    int left = 0;\r
\r
    while (left < i) {\r
        swap(arr[left], arr[i]);\r
        left++;\r
        i--;\r
    }\r
}\r
\r
void PancakeSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    for (int size = n; size >= 2; --size) {\r
        int max_idx = FindMaxIndex(arr, size);\r
\r
        if (max_idx != size - 1) {\r
            Flip(arr, max_idx);\r
            Flip(arr, size - 1);\r
        }\r
    }\r
}\r
`,rS=`#include <vector>\r
\r
using namespace std;\r
\r
\r
vector<int> QuickSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    if (n <= 1) {\r
        return arr;\r
    }\r
\r
    int pivot = arr[n / 2];\r
    vector<int> left, right;\r
\r
    for (int x : arr) {\r
        if (x < pivot) {\r
            left.push_back(x);\r
        } else if (x > pivot) {\r
            right.push_back(x);\r
        }\r
    }\r
\r
    left = QuickSort(left);\r
    right = QuickSort(right);\r
\r
    left.push_back(pivot);\r
    left.insert(left.end(), right.begin(), right.end());\r
\r
    return left;\r
}\r
`,eS=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void CountingSort(vector<int>& arr, int exp) {\r
    int n = arr.size();\r
    vector<int> output(n, 0);\r
    vector<int> count(10, 0);\r
\r
    for (int i = 0; i < n; ++i) {\r
        int idx = arr[i] / exp % 10;\r
        count[idx]++;\r
    }\r
\r
    for (int i = 1; i < 10; ++i) {\r
        count[i] += count[i - 1];\r
    }\r
\r
    for (int i = n - 1; i >= 0; --i) {\r
        int idx = arr[i] / exp % 10;\r
        output[count[idx] - 1] = arr[i];\r
        count[idx]--;\r
    }\r
\r
    for (int i = 0; i < n; ++i) {\r
        arr[i] = output[i];\r
    }\r
}\r
\r
void RadixSort(vector<int>& arr) {\r
    int max_val = *max_element(arr.begin(), arr.end());\r
    int exp = 1;\r
\r
    while (max_val / exp > 0) {\r
        CountingSort(arr, exp);\r
        exp *= 10;\r
    }\r
}\r
`,tS=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void SelectionSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    for (int i = 0; i < n; ++i) {\r
        int min_i = i;\r
\r
        for (int j = i + 1; j < n; ++j) {\r
            if (arr[j] < arr[min_i]) {\r
                min_i = j;\r
            }\r
        }\r
\r
        if (min_i != i) {\r
            swap(arr[i], arr[min_i]);\r
        }\r
    }\r
}\r
`,aS=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void ShellSort(vector<int>& arr) {\r
    int n = arr.size();\r
    vector<int> gaps = {701, 301, 132, 57, 23, 10, 4, 1};\r
\r
    for (int gap : gaps) {\r
        for (int i = gap; i < n; ++i) {\r
            int tmp = arr[i];\r
            int j = i;\r
\r
            while (j >= gap && arr[j - gap] > tmp) {\r
                arr[j] = arr[j - gap];\r
                j -= gap;\r
            }\r
\r
            if (j != i) {\r
                arr[j] = tmp;\r
            }\r
        }\r
    }\r
}\r
`,iS=`#include <chrono>\r
#include <thread>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
void Snorlax(double num, vector<double>& arr) {\r
    this_thread::sleep_for(chrono::milliseconds(static_cast<int>(num)));\r
    arr.push_back(num);\r
}\r
\r
vector<double> SleepSort(vector<double>& arr) {\r
    vector<double> sorted_arr;\r
    vector<thread> threads;\r
\r
    for (double num : arr) {\r
        threads.emplace_back(Snorlax, num, ref(sorted_arr));\r
    }\r
\r
    for (thread& t : threads) {\r
        t.join();\r
    }\r
\r
    return sorted_arr;\r
}\r
`,lS=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
void InsertionSort(vector<double>& arr, int left, int right) {\r
    for (int i = left + 1; i <= right; ++i) {\r
        double key = arr[i];\r
        int j = i - 1;\r
\r
        while (j >= left && arr[j] > key) {\r
            arr[j + 1] = arr[j];\r
            --j;\r
        }\r
\r
        arr[j + 1] = key;\r
    }\r
}\r
\r
vector<double> Merge(const vector<double>& left, const vector<double>& right) {\r
    vector<double> output;\r
\r
    int left_index = 0;\r
    int right_index = 0;\r
\r
    while (left_index < left.size() && right_index < right.size()) {\r
        if (left[left_index] <= right[right_index]) {\r
            output.push_back(left[left_index++]);\r
        } else {\r
            output.push_back(right[right_index++]);\r
        }\r
    }\r
\r
    while (left_index < left.size()) {\r
        output.push_back(left[left_index++]);\r
    }\r
\r
    while (right_index < right.size()) {\r
        output.push_back(right[right_index++]);\r
    }\r
\r
    return output;\r
}\r
\r
vector<double> TimSort(vector<double>& arr) {\r
    int n = arr.size();\r
    int min_run = 32;\r
\r
    for (int start = 0; start < n; start += min_run) {\r
        int end = min(start + min_run - 1, n - 1);\r
        InsertionSort(arr, start, end);\r
    }\r
\r
    int size = min_run;\r
\r
    while (size < n) {\r
        for (int left = 0; left < n; left += 2 * size) {\r
            int mid = min(n - 1, left + size - 1);\r
            int right = min((left + 2 * size - 1), (n - 1));\r
            vector<double> merged = Merge(\r
                vector<double>(arr.begin() + left, arr.begin() + mid + 1),\r
                vector<double>(arr.begin() + mid + 1, arr.begin() + right + 1)\r
            );\r
            copy(merged.begin(), merged.end(), arr.begin() + left);\r
        }\r
        size *= 2;\r
    }\r
\r
    return arr;\r
}\r
`,sS=`def bogo_sort(arr)\r
  target = arr.sort\r
\r
  until arr == target\r
    arr.shuffle!\r
  end\r
end\r
`,oS=`def bubble_sort(arr)\r
  n = arr.size\r
\r
  n.times do |i|\r
    swapped = false\r
\r
    (0...(n - i - 1)).each do |j|\r
      if arr[j] > arr[j + 1]\r
        arr[j], arr[j + 1] = arr[j + 1], arr[j]\r
        swapped = true\r
      end\r
    end\r
\r
    break unless swapped\r
  end\r
end\r
`,cS=`def bucket_sort(arr)\r
  num_buckets = 10\r
  min_num     = arr.min\r
  max_num     = arr.max\r
  bucket_size = (max_num - min_num).to_f / num_buckets\r
  buckets     = Array.new(num_buckets) { [] }\r
\r
  arr.each do |num|\r
    index = [( (num - min_num) / bucket_size ).to_i, num_buckets - 1].min\r
    buckets[index] << num\r
  end\r
\r
  buckets.map { |bucket| bucket.sort }.flatten\r
end\r
`,uS=`\r
def counting_sort(arr)\r
  max_num     = arr.max\r
  min_num     = arr.min\r
  count_range = max_num - min_num + 1\r
  count       = Array.new(count_range, 0)\r
  output      = Array.new(arr.size, 0)\r
\r
  arr.each do |num|\r
    count[num - min_num] += 1\r
  end\r
\r
  (1...count_range).each do |i|\r
    count[i] += count[i - 1]\r
  end\r
\r
  arr.reverse_each do |num|\r
    output[count[num - min_num] - 1] = num\r
    count[num - min_num] -= 1\r
  end\r
\r
  output\r
end\r
`,dS=`def cube_sort(arr, processors)\r
  n             = arr.size\r
  subarrays     = []\r
  subarray_size = n / processors\r
\r
  (0...processors).each do |i|\r
    subarray = arr[i * subarray_size, subarray_size]\r
    subarrays << subarray\r
  end\r
\r
  subarrays.each(&:sort!)\r
\r
  (0...(processors.bit_length - 1)).each do |dimension|\r
    (0...processors).each do |i|\r
      partner = i ^ (1 << dimension)\r
      if i < partner\r
        merged = subarrays[i] + subarrays[partner]\r
      else\r
        merged = subarrays[partner] + subarrays[i]\r
      end\r
      merged.sort!\r
      subarrays[i] = merged[0...subarray_size]\r
      subarrays[partner] = merged[subarray_size, subarray_size]\r
    end\r
  end\r
\r
  arr.replace(subarrays.flatten)\r
end\r
`,fS=`def heap_sort(arr)\r
  n = arr.size\r
\r
  (n / 2 - 1).downto(0) do |i|\r
    heapify(arr, n, i)\r
  end\r
\r
  (n - 1).downto(1) do |i|\r
    arr[i], arr[0] = arr[0], arr[i]\r
    heapify(arr, i, 0)\r
  end\r
\r
  arr\r
end\r
\r
def heapify(arr, n, i)\r
  largest = i\r
  left = 2 * i + 1\r
  right = 2 * i + 2\r
\r
  largest = left if left < n && arr[left] > arr[largest]\r
  largest = right if right < n && arr[right] > arr[largest]\r
\r
  if largest != i\r
    arr[i], arr[largest] = arr[largest], arr[i]\r
    heapify(arr, n, largest)\r
  end\r
end\r
`,hS=`def insertion_sort(arr)\r
  n = arr.size\r
\r
  (1...n).each do |i|\r
    key = arr[i]\r
    j = i - 1\r
\r
    while j >= 0 && key < arr[j]\r
      arr[j + 1] = arr[j]\r
      j -= 1\r
    end\r
\r
    arr[j + 1] = key\r
  end\r
end\r
`,gS=`def merge_sort(arr)\r
  n = arr.size\r
  return arr if n <= 1\r
\r
  mid   = n / 2\r
  left  = merge_sort(arr[0...mid])\r
  right = merge_sort(arr[mid..-1])\r
\r
  merge(left, right)\r
end\r
\r
def merge(left, right)\r
  output = []\r
\r
  until left.empty? || right.empty?\r
    if left.first <= right.first\r
      output << left.shift\r
    else\r
      output << right.shift\r
    end\r
  end\r
\r
  output + left + right\r
end\r
`,pS=`def pancake_sort(arr)\r
  n = arr.size\r
\r
  (2..n).to_a.reverse.each do |size|\r
    max_idx = find_max_index(arr, size)\r
\r
    if max_idx != size - 1\r
      flip(arr, max_idx)\r
      flip(arr, size - 1)\r
    end\r
  end\r
end\r
\r
def flip(arr, i)\r
  left = 0\r
\r
  while left < i\r
    arr[left], arr[i] = arr[i], arr[left]\r
    left += 1\r
    i -= 1\r
  end\r
end\r
\r
def find_max_index(arr, n)\r
  max_idx = 0\r
\r
  n.times do |i|\r
    max_idx = i if arr[i] > arr[max_idx]\r
  end\r
\r
  max_idx\r
end\r
`,mS=`def quick_sort(arr)\r
  n = arr.size\r
  return arr if n <= 1\r
\r
  pivot = arr[n / 2]\r
  left  = arr.select { |x| x < pivot }\r
  right = arr.select { |x| x > pivot }\r
\r
  quick_sort(left) + [pivot] + quick_sort(right)\r
end\r
`,bS=`def radix_sort(arr)\r
  max_val = arr.max\r
  exp     = 1\r
\r
  while max_val / exp > 0\r
    counting_sort(arr, exp)\r
    exp *= 10\r
  end\r
end\r
\r
def counting_sort(arr, exp)\r
  n       = arr.size\r
  output  = Array.new(n, 0)\r
  count   = Array.new(10, 0)\r
\r
  n.times do |i|\r
    idx = arr[i] / exp\r
    count[idx % 10] += 1\r
  end\r
\r
  (1...10).each do |i|\r
    count[i] += count[i - 1]\r
  end\r
\r
  (n - 1).downto(0) do |i|\r
    idx = arr[i] / exp\r
    output[count[idx % 10] - 1] = arr[i]\r
    count[idx % 10] -= 1\r
  end\r
\r
  n.times do |i|\r
    arr[i] = output[i]\r
  end\r
end\r
`,_S=`def selection_sort(arr)\r
  n = arr.size\r
\r
  n.times do |i|\r
    min_i = i\r
\r
    ((i + 1)...n).each do |j|\r
      min_i = j if arr[j] < arr[min_i]\r
    end\r
\r
    arr[i], arr[min_i] = arr[min_i], arr[i] if min_i != i\r
  end\r
end\r
`,xS=`def shell_sort(arr)\r
  n     = arr.size\r
  gaps  = [701, 301, 132, 57, 23, 10, 4, 1]\r
\r
  gaps.each do |gap|\r
    (gap...n).each do |i|\r
      tmp = arr[i]\r
      j = i\r
\r
      while j >= gap && arr[j - gap] > tmp\r
        arr[j] = arr[j - gap]\r
        j -= gap\r
      end\r
\r
      arr[j] = tmp if j != i\r
    end\r
  end\r
end\r
`,vS=`def sleep_sort(arr)\r
  sorted_arr  = []\r
  threads     = []\r
\r
  arr.each do |num|\r
    threads << Thread.new do\r
      sleep(num / 1000.0)\r
      sorted_arr << num\r
    end\r
  end\r
\r
  threads.each(&:join)\r
  sorted_arr\r
end\r
`,yS=`def tim_sort(arr)\r
  n       = arr.size\r
  min_run = 32\r
\r
  (0...n).step(min_run) do |start_idx|\r
    end_idx = [start_idx + min_run - 1, n - 1].min\r
    insertion_sort(arr, start_idx, end_idx)\r
  end\r
\r
  size = min_run\r
\r
  while size < n\r
    (0...n).step(2 * size) do |left|\r
      mid = [left + size - 1, n - 1].min\r
      right = [left + 2 * size - 1, n - 1].min\r
      arr[left..right] = merge(arr[left..mid], arr[(mid + 1)..right])\r
    end\r
    size *= 2\r
  end\r
\r
  arr\r
end\r
\r
def insertion_sort(arr, left, right)\r
  (left + 1..right).each do |i|\r
    key = arr[i]\r
    j = i\r
    while j > left && key < arr[j - 1]\r
      arr[j] = arr[j - 1]\r
      j -= 1\r
    end\r
    arr[j] = key\r
  end\r
end\r
\r
def merge_sort(arr)\r
  return arr if arr.size <= 1\r
\r
  mid = arr.size / 2\r
  left = merge_sort(arr[0...mid])\r
  right = merge_sort(arr[mid..-1])\r
\r
  merge(left, right)\r
end\r
\r
def merge(left, right)\r
  output = []\r
\r
  until left.empty? || right.empty?\r
    if left.first <= right.first\r
      output << left.shift\r
    else\r
      output << right.shift\r
    end\r
  end\r
\r
  output + left + right\r
end\r
`,TS=`function bogo_sort(arr)
    local function is_sorted(t)
        for i = 1, #t - 1 do
            if t[i] > t[i + 1] then return false end
        end
        return true
    end

    local function shuffle(t)
        for i = #t, 2, -1 do
            local j = math.random(i)
            t[i], t[j] = t[j], t[i]
        end
    end

    while not is_sorted(arr) do
        shuffle(arr)
    end
end
`,SS=`function bubble_sort(arr)
    local n = #arr
    for i = 1, n do
        local swapped = false

        for j = 1, n - i do
            if arr[j] > arr[j + 1] then
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = true
            end
        end

        if not swapped then break end
    end
end
`,jS=`function bucket_sort(arr)
    local num_buckets = 10
    local min_num, max_num = math.huge, -math.huge
    for _, v in ipairs(arr) do
        if v < min_num then min_num = v end
        if v > max_num then max_num = v end
    end

    local bucket_range = (max_num - min_num) / num_buckets
    local buckets = {}
    for i = 1, num_buckets do buckets[i] = {} end

    for _, num in ipairs(arr) do
        local index = math.floor((num - min_num) / bucket_range) + 1
        if index > num_buckets then index = num_buckets end
        table.insert(buckets[index], num)
    end

    local result = {}
    for i = 1, num_buckets do
        table.sort(buckets[i])
        for _, num in ipairs(buckets[i]) do
            table.insert(result, num)
        end
    end

    return result
end
`,NS=`function counting_sort(arr)
    local max_num, min_num = -math.huge, math.huge
    for _, v in ipairs(arr) do
        if v > max_num then max_num = v end
        if v < min_num then min_num = v end
    end

    local count_range = max_num - min_num + 1
    local count = {}
    for i = 1, count_range do count[i] = 0 end
    local output = {}

    for _, num in ipairs(arr) do
        local idx = num - min_num + 1
        count[idx] = count[idx] + 1
    end

    for i = 2, count_range do
        count[i] = count[i] + count[i - 1]
    end

    for i = #arr, 1, -1 do
        local num = arr[i]
        local idx = num - min_num + 1
        output[count[idx]] = num
        count[idx] = count[idx] - 1
    end

    return output
end
`,ES=`function cube_sort(arr, processors)
    local n = #arr
    local subarrays = {}
    local subarray_size = math.floor(n / processors)

    for i = 0, processors - 1 do
        local sub = {}
        for j = 1, subarray_size do
            table.insert(sub, arr[i * subarray_size + j])
        end
        table.sort(sub)
        table.insert(subarrays, sub)
    end

    local steps = 0
    local temp_p = processors
    while temp_p > 1 do
        temp_p = temp_p >> 1
        steps = steps + 1
    end

    for dimension = 0, steps - 1 do
        for i = 0, processors - 1 do
            local partner = i ~ (1 << dimension)
            if i < partner then
                local merged = {}
                for _, v in ipairs(subarrays[i + 1]) do table.insert(merged, v) end
                for _, v in ipairs(subarrays[partner + 1]) do table.insert(merged, v) end
                table.sort(merged)

                local new_i, new_p = {}, {}
                for j = 1, subarray_size do table.insert(new_i, merged[j]) end
                for j = subarray_size + 1, #merged do table.insert(new_p, merged[j]) end

                subarrays[i + 1] = new_i
                subarrays[partner + 1] = new_p
            end
        end
    end

    local idx = 1
    for i = 1, processors do
        for j = 1, #subarrays[i] do
            arr[idx] = subarrays[i][j]
            idx = idx + 1
        end
    end
end
`,AS=`local function heapify(arr, n, i)
    local largest = i
    local left = 2 * i
    local right = 2 * i + 1

    if left <= n and arr[left] > arr[largest] then largest = left end
    if right <= n and arr[right] > arr[largest] then largest = right end

    if largest ~= i then
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)
    end
end

function heap_sort(arr)
    local n = #arr
    for i = math.floor(n / 2), 1, -1 do
        heapify(arr, n, i)
    end
    for i = n, 2, -1 do
        arr[i], arr[1] = arr[1], arr[i]
        heapify(arr, i - 1, 1)
    end
    return arr
end
`,OS=`function insertion_sort(arr)
    local n = #arr
    for i = 2, n do
        local key = arr[i]
        local j = i
        while j > 1 and key < arr[j - 1] do
            arr[j] = arr[j - 1]
            j = j - 1
        end
        arr[j] = key
    end
end
`,wS=`local function merge(left, right)
    local output = {}
    local i, j = 1, 1

    while i <= #left and j <= #right do
        if left[i] <= right[j] then
            table.insert(output, left[i])
            i = i + 1
        else
            table.insert(output, right[j])
            j = j + 1
        end
    end

    for k = i, #left do table.insert(output, left[k]) end
    for k = j, #right do table.insert(output, right[k]) end
    return output
end

function merge_sort(arr)
    local n = #arr
    if n <= 1 then return arr end

    local mid = math.floor(n / 2)
    local left, right = {}, {}
    for i = 1, mid do table.insert(left, arr[i]) end
    for i = mid + 1, n do table.insert(right, arr[i]) end

    return merge(merge_sort(left), merge_sort(right))
end
`,kS=`local function flip(arr, i)
    local left = 1
    while left < i do
        arr[left], arr[i] = arr[i], arr[left]
        left = left + 1
        i = i - 1
    end
end

local function find_max_index(arr, n)
    local max_idx = 1
    for i = 1, n do
        if arr[i] > arr[max_idx] then max_idx = i end
    end
    return max_idx
end

function pancake_sort(arr)
    local n = #arr
    for size = n, 2, -1 do
        local max_idx = find_max_index(arr, size)
        if max_idx ~= size then
            flip(arr, max_idx)
            flip(arr, size)
        end
    end
end
`,MS=`function quick_sort(arr)
    local n = #arr
    if n <= 1 then return arr end

    local pivot = arr[math.floor(n / 2) + 1]
    local left, right, middle = {}, {}, {}

    for i = 1, n do
        local x = arr[i]
        if x < pivot then
            table.insert(left, x)
        elseif x > pivot then
            table.insert(right, x)
        else
            table.insert(middle, x)
        end
    end

    local res_left = quick_sort(left)
    local res_right = quick_sort(right)

    local res = {}
    for _, v in ipairs(res_left) do table.insert(res, v) end
    for _, v in ipairs(middle) do table.insert(res, v) end
    for _, v in ipairs(res_right) do table.insert(res, v) end

    return res
end
`,RS=`local function radix_counting_sort(arr, exp)
    local n = #arr
    local output = {}
    local count = {}
    for i = 0, 9 do count[i] = 0 end

    for i = 1, n do
        local idx = math.floor(arr[i] / exp)
        local digit = idx % 10
        count[digit] = count[digit] + 1
    end

    for i = 1, 9 do
        count[i] = count[i] + count[i - 1]
    end

    for i = n, 1, -1 do
        local idx = math.floor(arr[i] / exp)
        local digit = idx % 10
        output[count[digit]] = arr[i]
        count[digit] = count[digit] - 1
    end

    for i = 1, n do
        arr[i] = output[i]
    end
end

function radix_sort(arr)
    local max_val = 0
    for i = 1, #arr do
        if arr[i] > max_val then max_val = arr[i] end
    end

    local exp = 1
    while math.floor(max_val / exp) > 0 do
        radix_counting_sort(arr, exp)
        exp = exp * 10
    end
end
`,LS=`function selection_sort(arr)
    local n = #arr
    for i = 1, n do
        local min_i = i
        for j = i + 1, n do
            if arr[j] < arr[min_i] then
                min_i = j
            end
        end
        if min_i ~= i then
            arr[i], arr[min_i] = arr[min_i], arr[i]
        end
    end
end
`,zS=`function shell_sort(arr)
    local n = #arr
    local gaps = {701, 301, 132, 57, 23, 10, 4, 1}

    for _, gap in ipairs(gaps) do
        for i = gap + 1, n do
            local tmp = arr[i]
            local j = i
            while j > gap and arr[j - gap] > tmp do
                arr[j] = arr[j - gap]
                j = j - gap
            end
            if j ~= i then
                arr[j] = tmp
            end
        end
    end
end
`,DS=`local function snorlax(num, arr)
    sleep(num / 1000.0)
    table.insert(arr, num)
end

function sleep_sort(arr)
    local sorted_arr = {}
    local threads = {}

    for _, num in ipairs(arr) do
        local t = Thread.new(snorlax, num, sorted_arr)
        table.insert(threads, t)
    end

    for _, t in ipairs(threads) do
        t:start()
    end

    for _, t in ipairs(threads) do
        t:join()
    end

    return sorted_arr
end
`,BS=`local function insertion_sort_range(arr, left, right)
    for i = left + 1, right do
        local key = arr[i]
        local j = i
        while j > left and key < arr[j - 1] do
            arr[j] = arr[j - 1]
            j = j - 1
        end
        arr[j] = key
    end
end

local function merge(left, right)
    local output = {}
    local i, j = 1, 1
    while i <= #left and j <= #right do
        if left[i] <= right[j] then
            table.insert(output, left[i])
            i = i + 1
        else
            table.insert(output, right[j])
            j = j + 1
        end
    end
    for k = i, #left do table.insert(output, left[k]) end
    for k = j, #right do table.insert(output, right[k]) end
    return output
end

function tim_sort(arr)
    local n = #arr
    local min_run = 32

    for start = 1, n, min_run do
        insertion_sort_range(arr, start, math.min(start + min_run - 1, n))
    end

    local size = min_run
    while size < n do
        for left = 1, n, 2 * size do
            local mid = math.min(n, left + size - 1)
            local right = math.min(n, left + 2 * size - 1)

            local left_part = {}
            for i = left, mid do table.insert(left_part, arr[i]) end
            local right_part = {}
            for i = mid + 1, right do table.insert(right_part, arr[i]) end

            local merged = merge(left_part, right_part)
            for i = 1, #merged do
                arr[left + i - 1] = merged[i]
            end
        end
        size = size * 2
    end

    return arr
end
`;function CS(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Sorting Algorithms"}),a.jsx("section",{id:"sort-bubble",children:a.jsxs(o,{title:"bubble sort",children:[a.jsx(o.Tab,{code:e2,language:"python"}),a.jsx(o.Tab,{code:b2,language:"javascript"}),a.jsx(o.Tab,{code:R2,language:"java"}),a.jsx(o.Tab,{code:X2,language:"cpp"}),a.jsx(o.Tab,{code:oS,language:"ruby"}),a.jsx(o.Tab,{code:SS,language:"lua"})]})}),a.jsx("section",{id:"sort-selection",children:a.jsxs(o,{title:"selection sort",children:[a.jsx(o.Tab,{code:f2,language:"python"}),a.jsx(o.Tab,{code:A2,language:"javascript"}),a.jsx(o.Tab,{code:G2,language:"java"}),a.jsx(o.Tab,{code:tS,language:"cpp"}),a.jsx(o.Tab,{code:_S,language:"ruby"}),a.jsx(o.Tab,{code:LS,language:"lua"})]})}),a.jsx("section",{id:"sort-insertion",children:a.jsxs(o,{title:"insertion sort",children:[a.jsx(o.Tab,{code:s2,language:"python"}),a.jsx(o.Tab,{code:T2,language:"javascript"}),a.jsx(o.Tab,{code:C2,language:"java"}),a.jsx(o.Tab,{code:P2,language:"cpp"}),a.jsx(o.Tab,{code:hS,language:"ruby"}),a.jsx(o.Tab,{code:OS,language:"lua"})]})}),a.jsx("section",{id:"sort-shell",children:a.jsxs(o,{title:"shell sort",children:[a.jsx(o.Tab,{code:h2,language:"python"}),a.jsx(o.Tab,{code:O2,language:"javascript"}),a.jsx(o.Tab,{code:V2,language:"java"}),a.jsx(o.Tab,{code:aS,language:"cpp"}),a.jsx(o.Tab,{code:xS,language:"ruby"}),a.jsx(o.Tab,{code:zS,language:"lua"})]})}),a.jsx("section",{id:"sort-merge",children:a.jsxs(o,{title:"merge sort",children:[a.jsx(o.Tab,{code:o2,language:"python"}),a.jsx(o.Tab,{code:S2,language:"javascript"}),a.jsx(o.Tab,{code:U2,language:"java"}),a.jsx(o.Tab,{code:$2,language:"cpp"}),a.jsx(o.Tab,{code:gS,language:"ruby"}),a.jsx(o.Tab,{code:wS,language:"lua"})]})}),a.jsx("section",{id:"sort-quick",children:a.jsxs(o,{title:"quick sort",children:[a.jsx(o.Tab,{code:u2,language:"python"}),a.jsx(o.Tab,{code:N2,language:"javascript"}),a.jsx(o.Tab,{code:q2,language:"java"}),a.jsx(o.Tab,{code:rS,language:"cpp"}),a.jsx(o.Tab,{code:mS,language:"ruby"}),a.jsx(o.Tab,{code:MS,language:"lua"})]})}),a.jsx("section",{id:"sort-tim",children:a.jsxs(o,{title:"timsort",children:[a.jsx(o.Tab,{code:p2,language:"python"}),a.jsx(o.Tab,{code:k2,language:"javascript"}),a.jsx(o.Tab,{code:Q2,language:"java"}),a.jsx(o.Tab,{code:lS,language:"cpp"}),a.jsx(o.Tab,{code:yS,language:"ruby"}),a.jsx(o.Tab,{code:BS,language:"lua"})]})}),a.jsx("section",{id:"sort-heap",children:a.jsxs(o,{title:"heap sort",children:[a.jsx(o.Tab,{code:l2,language:"python"}),a.jsx(o.Tab,{code:y2,language:"javascript"}),a.jsx(o.Tab,{code:B2,language:"java"}),a.jsx(o.Tab,{code:W2,language:"cpp"}),a.jsx(o.Tab,{code:fS,language:"ruby"}),a.jsx(o.Tab,{code:AS,language:"lua"})]})}),a.jsx("section",{id:"sort-counting",children:a.jsxs(o,{title:"counting sort",children:[a.jsx(o.Tab,{code:a2,language:"python"}),a.jsx(o.Tab,{code:x2,language:"javascript"}),a.jsx(o.Tab,{code:z2,language:"java"}),a.jsx(o.Tab,{code:Z2,language:"cpp"}),a.jsx(o.Tab,{code:uS,language:"ruby"}),a.jsx(o.Tab,{code:NS,language:"lua"})]})}),a.jsx("section",{id:"sort-bucket",children:a.jsxs(o,{title:"bucket sort",children:[a.jsx(o.Tab,{code:t2,language:"python"}),a.jsx(o.Tab,{code:_2,language:"javascript"}),a.jsx(o.Tab,{code:L2,language:"java"}),a.jsx(o.Tab,{code:I2,language:"cpp"}),a.jsx(o.Tab,{code:cS,language:"ruby"}),a.jsx(o.Tab,{code:jS,language:"lua"})]})}),a.jsx("section",{id:"sort-radix",children:a.jsxs(o,{title:"radix sort",children:[a.jsx(o.Tab,{code:d2,language:"python"}),a.jsx(o.Tab,{code:E2,language:"javascript"}),a.jsx(o.Tab,{code:Y2,language:"java"}),a.jsx(o.Tab,{code:eS,language:"cpp"}),a.jsx(o.Tab,{code:bS,language:"ruby"}),a.jsx(o.Tab,{code:RS,language:"lua"})]})}),a.jsx("section",{id:"sort-cube",children:a.jsxs(o,{title:"cubesort",children:[a.jsx(o.Tab,{code:i2,language:"python"}),a.jsx(o.Tab,{code:v2,language:"javascript"}),a.jsx(o.Tab,{code:D2,language:"java"}),a.jsx(o.Tab,{code:F2,language:"cpp"}),a.jsx(o.Tab,{code:dS,language:"ruby"}),a.jsx(o.Tab,{code:ES,language:"lua"})]})}),a.jsx("section",{id:"sort-bogo",children:a.jsxs(o,{title:"bogo sort",children:[a.jsx(o.Tab,{code:r2,language:"python"}),a.jsx(o.Tab,{code:m2,language:"javascript"}),a.jsx(o.Tab,{code:M2,language:"java"}),a.jsx(o.Tab,{code:J2,language:"cpp"}),a.jsx(o.Tab,{code:sS,language:"ruby"}),a.jsx(o.Tab,{code:TS,language:"lua"})]})}),a.jsx("section",{id:"sort-pancake",children:a.jsxs(o,{title:"pancake sort",children:[a.jsx(o.Tab,{code:c2,language:"python"}),a.jsx(o.Tab,{code:j2,language:"javascript"}),a.jsx(o.Tab,{code:H2,language:"java"}),a.jsx(o.Tab,{code:nS,language:"cpp"}),a.jsx(o.Tab,{code:pS,language:"ruby"}),a.jsx(o.Tab,{code:kS,language:"lua"})]})}),a.jsx("section",{id:"sort-sleep",children:a.jsxs(o,{title:"sleep sort",children:[a.jsx(o.Tab,{code:g2,language:"python"}),a.jsx(o.Tab,{code:w2,language:"javascript"}),a.jsx(o.Tab,{code:K2,language:"java"}),a.jsx(o.Tab,{code:iS,language:"cpp"}),a.jsx(o.Tab,{code:vS,language:"ruby"}),a.jsx(o.Tab,{code:DS,language:"lua"})]})})]})}function US(){const{isSidebarOpen:u}=Dc(),_=Zr(Lh.main,!u&&Lh.sidebarHidden);return a.jsxs("main",{className:_,children:[a.jsx(e0,{}),a.jsx(fb,{}),a.jsx(Nb,{}),a.jsx(Ub,{}),a.jsx(Wb,{}),a.jsx(m_,{}),a.jsx(dx,{}),a.jsx(_x,{}),a.jsx(Zx,{}),a.jsx(ev,{}),a.jsx(yv,{}),a.jsx(Oy,{}),a.jsx(Xy,{}),a.jsx(n2,{}),a.jsx(CS,{})]})}function HS(){return a.jsx(ds.StrictMode,{children:a.jsx(fm,{children:a.jsx(um,{children:a.jsxs("div",{className:"App",children:[a.jsx(gm,{}),a.jsx(U1,{}),a.jsx(US,{})]})})})})}cm.createRoot(document.getElementById("root")).render(a.jsx(HS,{}));
