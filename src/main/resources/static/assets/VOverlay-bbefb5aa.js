import{aJ as q,aT as W,j as C,a0 as p,Q as Ee,w as L,af as ie,aB as Q,bh as Ae,a_ as le,bi as Se,aM as R,aS as Te,bj as se,bk as Le,bl as ue,bm as X,bn as Z,bo as fe,bp as Fe,bq as ve,br as B,bs as de,bt as Be,H as Re,bu as xe,O as Ie,a$ as De,aW as Me,am as _e,b4 as He,aq as Ne,ar as We,a9 as Ve,ab as qe,b9 as je,bv as ze,as as $e,W as Ue,bc as Ye,bw as Ge,ad as Ke,B as _,q as U,bx as ee,by as Je,az as Qe,K as Xe,L as Ze,aP as et,F as tt,T as nt,bz as ot}from"./index-8cb37f11.js";import{B as te,g as me,n as at,a as rt,s as it}from"./easing-9f15041e.js";function ke(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function lt(e){for(;e;){if(ce(e))return e;e=e.parentElement}return document.scrollingElement}function K(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(ce(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function ce(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function st(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const ct=q({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function ut(e,t){const n={},o=r=>()=>{if(!W)return Promise.resolve(!0);const l=r==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(s=>{const i=parseInt(e[r]??0,10);n[r]=window.setTimeout(()=>{t==null||t(l),s(l)},i)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const ft=Symbol.for("vuetify:v-menu"),vt=q({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...ct()},"v-overlay-activator");function dt(e,t){let{isActive:n,isTop:o}=t;const r=C();let l=!1,s=!1,i=!0;const u=p(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=p(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:c,runCloseDelay:y}=ut(e,a=>{a===(e.openOnHover&&l||u.value&&s)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==a&&(i=!0),n.value=a)}),h={click:a=>{a.stopPropagation(),r.value=a.currentTarget||a.target,n.value=!n.value},mouseenter:a=>{var A;(A=a.sourceCapabilities)!=null&&A.firesTouchEvents||(l=!0,r.value=a.currentTarget||a.target,c())},mouseleave:a=>{l=!1,y()},focus:a=>{Te&&!a.target.matches(":focus-visible")||(s=!0,a.stopPropagation(),r.value=a.currentTarget||a.target,c())},blur:a=>{s=!1,a.stopPropagation(),y()}},P=p(()=>{const a={};return f.value&&(a.click=h.click),e.openOnHover&&(a.mouseenter=h.mouseenter,a.mouseleave=h.mouseleave),u.value&&(a.focus=h.focus,a.blur=h.blur),a}),d=p(()=>{const a={};if(e.openOnHover&&(a.mouseenter=()=>{l=!0,c()},a.mouseleave=()=>{l=!1,y()}),e.closeOnContentClick){const A=Ee(ft,null);a.click=()=>{n.value=!1,A==null||A.closeParents()}}return a}),v=p(()=>{const a={};return e.openOnHover&&(a.mouseenter=()=>{i&&(l=!0,i=!1,c())},a.mouseleave=()=>{l=!1,y()}),a});L(o,a=>{a&&(e.openOnHover&&!l&&(!u.value||!s)||u.value&&!s&&(!e.openOnHover||!l))&&(n.value=!1)});const O=C();ie(()=>{O.value&&Q(()=>{const a=O.value;r.value=Ae(a)?a.$el:a})});const k=le("useActivator");let w;return L(()=>!!e.activator,a=>{a&&W?(w=Se(),w.run(()=>{mt(e,k,{activatorEl:r,activatorEvents:P})})):w&&w.stop()},{flush:"post",immediate:!0}),R(()=>{w==null||w.stop()}),{activatorEl:r,activatorRef:O,activatorEvents:P,contentEvents:d,scrimEvents:v}}function mt(e,t,n){let{activatorEl:o,activatorEvents:r}=n;L(()=>e.activator,(u,f)=>{if(f&&u!==f){const c=i(f);c&&s(c)}u&&Q(()=>l())},{immediate:!0}),L(()=>e.activatorProps,()=>{l()}),R(()=>{s()});function l(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&(Object.entries(r.value).forEach(c=>{let[y,h]=c;u.addEventListener(y,h)}),Object.keys(f).forEach(c=>{f[c]==null?u.removeAttribute(c):u.setAttribute(c,f[c])}))}function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&(Object.entries(r.value).forEach(c=>{let[y,h]=c;u.removeEventListener(y,h)}),Object.keys(f).forEach(c=>{u.removeAttribute(c)}))}function i(){var c,y;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,f;if(u)if(u==="parent"){let h=(y=(c=t==null?void 0:t.proxy)==null?void 0:c.$el)==null?void 0:y.parentNode;for(;h.hasAttribute("data-no-activator");)h=h.parentNode;f=h}else typeof u=="string"?f=document.querySelector(u):"$el"in u?f=u.$el:f=u;return o.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:null,o.value}}const yt=q({eager:Boolean},"lazy");function gt(e,t){const n=C(!1),o=p(()=>n.value||e.eager||t.value);L(t,()=>n.value=!0);function r(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:o,onAfterLeave:r}}function ne(e,t){return{x:e.x+t.x,y:e.y+t.y}}function ht(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ye(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,r=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,l=n==="top"?0:n==="bottom"?t.height:n;return ne({x:r,y:l},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,r=n==="left"?0:n==="right"?t.width:n,l=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return ne({x:r,y:l},t)}return ne({x:t.width/2,y:t.height/2},t)}const Oe={static:Et,connected:xt},bt=q({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Oe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function wt(e,t){const n=C({}),o=C();W&&(se(()=>!!(t.isActive.value&&e.locationStrategy),l=>{var s,i;L(()=>e.locationStrategy,l),R(()=>{o.value=void 0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(t,e,n))==null?void 0:s.updateLocation:o.value=(i=Oe[e.locationStrategy](t,e,n))==null?void 0:i.updateLocation}),window.addEventListener("resize",r,{passive:!0}),R(()=>{window.removeEventListener("resize",r),o.value=void 0}));function r(l){var s;(s=o.value)==null||s.call(o,l)}return{contentStyles:n,updateLocation:o}}function Et(){}function St(e,t){const n=at(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function xt(e,t,n){st(e.activatorEl.value)&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:r,preferredOrigin:l}=Le(()=>{const d=ue(t.location,e.isRtl.value),v=t.origin==="overlap"?d:t.origin==="auto"?X(d):ue(t.origin,e.isRtl.value);return d.side===v.side&&d.align===Z(v).align?{preferredAnchor:fe(d),preferredOrigin:fe(v)}:{preferredAnchor:d,preferredOrigin:v}}),[s,i,u,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>p(()=>{const v=parseFloat(t[d]);return isNaN(v)?1/0:v})),c=p(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const d=t.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let y=!1;const h=new ResizeObserver(()=>{y&&P()});L([e.activatorEl,e.contentEl],(d,v)=>{let[O,k]=d,[w,a]=v;w&&h.unobserve(w),O&&h.observe(O),a&&h.unobserve(a),k&&h.observe(k)},{immediate:!0}),R(()=>{h.disconnect()});function P(){if(y=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>y=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const d=e.activatorEl.value.getBoundingClientRect(),v=St(e.contentEl.value,e.isRtl.value),O=K(e.contentEl.value),k=12;O.length||(O.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const w=O.reduce((S,E)=>{const m=E.getBoundingClientRect(),b=new te({x:E===document.documentElement?0:m.x,y:E===document.documentElement?0:m.y,width:E.clientWidth,height:E.clientHeight});return S?new te({x:Math.max(S.left,b.left),y:Math.max(S.top,b.top),width:Math.min(S.right,b.right)-Math.max(S.left,b.left),height:Math.min(S.bottom,b.bottom)-Math.max(S.top,b.top)}):b},void 0);w.x+=k,w.y+=k,w.width-=k*2,w.height-=k*2;let a={anchor:r.value,origin:l.value};function A(S){const E=new te(v),m=ye(S.anchor,d),b=ye(S.origin,E);let{x:T,y:F}=ht(m,b);switch(S.anchor.side){case"top":F-=c.value[0];break;case"bottom":F+=c.value[0];break;case"left":T-=c.value[0];break;case"right":T+=c.value[0];break}switch(S.anchor.align){case"top":F-=c.value[1];break;case"bottom":F+=c.value[1];break;case"left":T-=c.value[1];break;case"right":T+=c.value[1];break}return E.x+=T,E.y+=F,E.width=Math.min(E.width,u.value),E.height=Math.min(E.height,f.value),{overflows:me(E,w),x:T,y:F}}let D=0,H=0;const N={x:0,y:0},j={x:!1,y:!1};let z=-1;for(;;){if(z++>10){Fe("Infinite loop detected in connectedLocationStrategy");break}const{x:S,y:E,overflows:m}=A(a);D+=S,H+=E,v.x+=S,v.y+=E;{const b=ve(a.anchor),T=m.x.before||m.x.after,F=m.y.before||m.y.after;let V=!1;if(["x","y"].forEach(x=>{if(x==="x"&&T&&!j.x||x==="y"&&F&&!j.y){const g={anchor:{...a.anchor},origin:{...a.origin}},I=x==="x"?b==="y"?Z:X:b==="y"?X:Z;g.anchor=I(g.anchor),g.origin=I(g.origin);const{overflows:Y}=A(g);(Y[x].before<=m[x].before&&Y[x].after<=m[x].after||Y[x].before+Y[x].after<(m[x].before+m[x].after)/2)&&(a=g,V=j[x]=!0)}}),V)continue}m.x.before&&(D+=m.x.before,v.x+=m.x.before),m.x.after&&(D-=m.x.after,v.x-=m.x.after),m.y.before&&(H+=m.y.before,v.y+=m.y.before),m.y.after&&(H-=m.y.after,v.y-=m.y.after);{const b=me(v,w);N.x=w.width-b.x.before-b.x.after,N.y=w.height-b.y.before-b.y.after,D+=b.x.before,v.x+=b.x.before,H+=b.y.before,v.y+=b.y.before}break}const M=ve(a.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${a.anchor.side} ${a.anchor.align}`,transformOrigin:`${a.origin.side} ${a.origin.align}`,top:B(oe(H)),left:e.isRtl.value?void 0:B(oe(D)),right:e.isRtl.value?B(oe(-D)):void 0,minWidth:B(M==="y"?Math.min(s.value,d.width):s.value),maxWidth:B(ge(de(N.x,s.value===1/0?0:s.value,u.value))),maxHeight:B(ge(de(N.y,i.value===1/0?0:i.value,f.value)))}),{available:N,contentBox:v}}return L(()=>[r.value,l.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>P()),Q(()=>{const d=P();if(!d)return;const{available:v,contentBox:O}=d;O.height>v.y&&requestAnimationFrame(()=>{P(),requestAnimationFrame(()=>{P()})})}),{updateLocation:P}}function oe(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function ge(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ae=!0;const J=[];function kt(e){!ae||J.length?(J.push(e),re()):(ae=!1,e(),re())}let he=-1;function re(){cancelAnimationFrame(he),he=requestAnimationFrame(()=>{const e=J.shift();e&&e(),J.length?re():ae=!0})}const G={none:null,close:Pt,block:Ct,reposition:At},Ot=q({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in G}},"v-overlay-scroll-strategies");function pt(e,t){if(!W)return;let n;ie(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=Se(),await Q(),n.active&&n.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(o=G[e.scrollStrategy])==null||o.call(G,t,e,n)}))}),R(()=>{n==null||n.stop()})}function Pt(e){function t(n){e.isActive.value=!1}pe(e.activatorEl.value??e.contentEl.value,t)}function Ct(e,t){var s;const n=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...K(e.activatorEl.value,t.contained?n:void 0),...K(e.contentEl.value,t.contained?n:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),r=window.innerWidth-document.documentElement.offsetWidth,l=(i=>ce(i)&&i)(n||document.documentElement);l&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,u)=>{i.style.setProperty("--v-body-scroll-x",B(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",B(-i.scrollTop)),i.style.setProperty("--v-scrollbar-offset",B(r)),i.classList.add("v-overlay-scroll-blocked")}),R(()=>{o.forEach((i,u)=>{const f=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),c=parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-f,i.scrollTop=-c}),l&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function At(e,t,n){let o=!1,r=-1,l=-1;function s(i){kt(()=>{var c,y;const u=performance.now();(y=(c=e.updateLocation).value)==null||y.call(c,i),o=(performance.now()-u)/(1e3/60)>2})}l=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{n.run(()=>{pe(e.activatorEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(r),r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{s(i)})})):s(i)})})}),R(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(l),cancelAnimationFrame(r)})}function pe(e,t){const n=[document,...K(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),R(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}function Tt(){if(!W)return C(!1);const{ssr:e}=Be();if(e){const t=C(!1);return Re(()=>{t.value=!0}),t}else return C(!0)}function Lt(){const t=le("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const be=Symbol.for("vuetify:stack"),$=xe([]);function Ft(e,t,n){const o=le("useStack"),r=!n,l=Ee(be,void 0),s=xe({activeChildren:new Set});Ie(be,s);const i=C(+t.value);se(e,()=>{var y;const c=(y=$.at(-1))==null?void 0:y[1];i.value=c?c+10:+t.value,r&&$.push([o.uid,i.value]),l==null||l.activeChildren.add(o.uid),R(()=>{if(r){const h=Me($).findIndex(P=>P[0]===o.uid);$.splice(h,1)}l==null||l.activeChildren.delete(o.uid)})});const u=C(!0);r&&ie(()=>{var y;const c=((y=$.at(-1))==null?void 0:y[0])===o.uid;setTimeout(()=>u.value=c)});const f=p(()=>!s.activeChildren.size);return{globalTop:De(u),localTop:f,stackStyles:p(()=>({zIndex:i.value}))}}function Bt(e){return{teleportTarget:p(()=>{const n=e.value;if(n===!0||!W)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let r=o.querySelector(":scope > .v-overlay-container");return r||(r=document.createElement("div"),r.className="v-overlay-container",o.appendChild(r)),r})}}function Rt(){return!0}function Pe(e,t,n){if(!e||Ce(e,n)===!1)return!1;const o=ke(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const r=(typeof n.value=="object"&&n.value.include||(()=>[]))();return r.push(t),!r.some(l=>l==null?void 0:l.contains(e.target))}function Ce(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Rt)(e)}function It(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Pe(e,t,n)&&setTimeout(()=>{Ce(e,n)&&o&&o(e)},0)}function we(e,t){const n=ke(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Dt={mounted(e,t){const n=r=>It(r,e,t),o=r=>{e._clickOutside.lastMousedownWasOutside=Pe(r,e,t)};we(e,r=>{r.addEventListener("click",n,!0),r.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(we(e,n=>{var l;if(!n||!((l=e._clickOutside)!=null&&l[t.instance.$.uid]))return;const{onClick:o,onMousedown:r}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",r,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Mt(e){const{modelValue:t,color:n,...o}=e;return _(nt,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&_("div",U({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const _t=q({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...vt(),..._e(),...He(),...yt(),...bt(),...Ot(),...Ne(),...We()},"v-overlay"),Wt=Ve()({name:"VOverlay",directives:{ClickOutside:Dt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,..._t()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:r}=t;const l=qe(e,"modelValue"),s=p({get:()=>l.value,set:g=>{g&&e.disabled||(l.value=g)}}),{teleportTarget:i}=Bt(p(()=>e.attach||e.contained)),{themeClasses:u}=je(e),{rtlClasses:f,isRtl:c}=ze(),{hasContent:y,onAfterLeave:h}=gt(e,s),P=$e(p(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:v,stackStyles:O}=Ft(s,Ue(e,"zIndex"),e._disableGlobalStack),{activatorEl:k,activatorRef:w,activatorEvents:a,contentEvents:A,scrimEvents:D}=dt(e,{isActive:s,isTop:v}),{dimensionStyles:H}=Ye(e),N=Tt(),{scopeId:j}=Lt();L(()=>e.disabled,g=>{g&&(s.value=!1)});const z=C(),M=C(),{contentStyles:S,updateLocation:E}=wt(e,{isRtl:c,contentEl:M,activatorEl:k,isActive:s});pt(e,{root:z,contentEl:M,activatorEl:k,isActive:s,updateLocation:E});function m(g){r("click:outside",g),e.persistent?x():s.value=!1}function b(){return s.value&&d.value}W&&L(s,g=>{g?window.addEventListener("keydown",T):window.removeEventListener("keydown",T)},{immediate:!0});function T(g){g.key==="Escape"&&d.value&&(e.persistent?x():s.value=!1)}const F=Ge();se(()=>e.closeOnBack,()=>{ot(F,g=>{d.value&&s.value?(g(!1),e.persistent?x():s.value=!1):g()})});const V=C();L(()=>s.value&&(e.absolute||e.contained)&&i.value==null,g=>{if(g){const I=lt(z.value);I&&I!==document.scrollingElement&&(V.value=I.scrollTop)}});function x(){e.noClickAnimation||M.value&&rt(M.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:it})}return Ke(()=>{var g;return _(tt,null,[(g=n.activator)==null?void 0:g.call(n,{isActive:s.value,props:U({ref:w},ee(a.value),e.activatorProps)}),N.value&&_(Je,{disabled:!i.value,to:i.value},{default:()=>[y.value&&_("div",U({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},u.value,f.value,e.class],style:[O.value,{top:B(V.value)},e.style],ref:z},j,o),[_(Mt,U({color:P,modelValue:s.value&&!!e.scrim},ee(D.value)),null),_(Qe,{appear:!0,persisted:!0,transition:e.transition,target:k.value,onAfterLeave:()=>{h(),r("afterLeave")}},{default:()=>{var I;return[Xe(_("div",U({ref:M,class:["v-overlay__content",e.contentClass],style:[H.value,S.value]},ee(A.value),e.contentProps),[(I=n.default)==null?void 0:I.call(n,{isActive:s})]),[[Ze,s.value],[et("click-outside"),{handler:m,closeConditional:b,include:()=>[k.value]}]])]}})])]})])}),{activatorEl:k,animateClick:x,contentEl:M,globalTop:d,localTop:v,updateLocation:E}}});export{Wt as V,ft as a,_t as m,Lt as u};
