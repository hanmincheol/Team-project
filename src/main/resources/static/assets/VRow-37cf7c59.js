import"./VCol-176126b9.js";import{a9 as S,am as b,ap as k,a0 as p,h as V,bE as w,bF as E}from"./index-fc09de97.js";const i=["start","end","center"],g=["space-between","space-around","space-evenly"];function o(t,s){return w.reduce((e,a)=>{const n=t+E(a);return e[n]=s(),e},{})}const L=[...i,"baseline","stretch"],d=t=>L.includes(t),f=o("align",()=>({type:String,default:null,validator:d})),N=[...i,...g],y=t=>N.includes(t),C=o("justify",()=>({type:String,default:null,validator:y})),A=[...i,...g,"stretch"],j=t=>A.includes(t),m=o("alignContent",()=>({type:String,default:null,validator:j})),r={align:Object.keys(f),justify:Object.keys(C),alignContent:Object.keys(m)},P={align:"align",justify:"justify",alignContent:"align-content"};function h(t,s,e){let a=P[t];if(e!=null){if(s){const n=s.replace(t,"");a+=`-${n}`}return a+=`-${e}`,a.toLowerCase()}}const $=S()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...f,justify:{type:String,default:null,validator:y},...C,alignContent:{type:String,default:null,validator:j},...m,...b(),...k()},setup(t,s){let{slots:e}=s;const a=p(()=>{const n=[];let l;for(l in r)r[l].forEach(c=>{const v=t[c],u=h(l,c,v);u&&n.push(u)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return V(t.tag,{class:["v-row",a.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}});export{$ as V};
