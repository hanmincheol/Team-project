import{bE as o,bF as f,a9 as y,am as S,ap as k,a0 as C,h as N}from"./index-fc09de97.js";const i=(()=>o.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}))(),d=(()=>o.reduce((e,s)=>{const t="offset"+f(s);return e[t]={type:[String,Number],default:null},e},{}))(),m=(()=>o.reduce((e,s)=>{const t="order"+f(s);return e[t]={type:[String,Number],default:null},e},{}))(),u={col:Object.keys(i),offset:Object.keys(d),order:Object.keys(m)};function h(e,s,t){let r=e;if(!(t==null||t===!1)){if(s){const n=s.replace(e,"");r+=`-${n}`}return e==="col"&&(r="v-"+r),e==="col"&&(t===""||t===!0)||(r+=`-${t}`),r.toLowerCase()}}const L=["auto","start","end","center","baseline","stretch"],P=y()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...d,order:{type:[String,Number],default:null},...m,alignSelf:{type:String,default:null,validator:e=>L.includes(e)},...S(),...k()},setup(e,s){let{slots:t}=s;const r=C(()=>{const n=[];let a;for(a in u)u[a].forEach(l=>{const g=e[l],c=h(a,l,g);c&&n.push(c)});const b=n.some(l=>l.startsWith("v-col-"));return n.push({"v-col":!b||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return N(e.tag,{class:[r.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}});export{P as V};
