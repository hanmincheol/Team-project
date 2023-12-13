import{a0 as B,r as T,o as d,b as x,m as a,B as t,q as w,X as _,a1 as L,a2 as $,K as v,l as f,s as c,t as u,L as g,a3 as z,c as h,F as V,a as P,x as C,a4 as R,n as b,v as E,a5 as M,a6 as F,a7 as q,j as O}from"./index-fc09de97.js";import{P as U}from"./vue3-perfect-scrollbar.esm-428e6eed.js";import{V as N,a as j}from"./VListItemAction-3e4c34bc.js";import{V as D}from"./VMenu-ef379df0.js";import{V as W}from"./VTooltip-e9d16874.js";import{V as k}from"./VDivider-9c6921fb.js";import{V as Y,a as S,b as I,c as H}from"./VList-41f3b89f.js";import"./forwardRefs-a29b5f65.js";import"./VOverlay-14eda34d.js";import"./easing-9f15041e.js";import"./dialog-transition-7beb2149.js";const K=m=>m?m.split(" ").map(s=>s.charAt(0).toUpperCase()).join(""):"";const X={key:0},G={class:"text-xs text-disabled"},J={class:"d-flex flex-column align-center gap-4"},Q={style:{"block-size":"28px","inline-size":"28px"}},Z={__name:"Notifications",props:{notifications:{type:Array,required:!0},badgeProps:{type:null,required:!1,default:void 0},location:{type:null,required:!1,default:"bottom end"}},emits:["read","unread","remove","click:notification"],setup(m,{emit:n}){const s=m,r=B(()=>s.notifications.some(l=>l.isSeen===!1)),p=()=>{const l=s.notifications.map(i=>i.id);r.value?n("read",l):n("unread",l)};return(l,i)=>{const o=T("IconBtn");return d(),x(o,{id:"notification-btn"},{default:a(()=>[t(N,w({dot:""},s.badgeProps,{"model-value":s.notifications.some(e=>!e.isSeen),color:"error",bordered:"","offset-x":"1","offset-y":"1"}),{default:a(()=>[t(_,{icon:"mdi-bell-outline"})]),_:1},16,["model-value"]),t(D,{activator:"parent",width:"380px",location:s.location,offset:"14px","close-on-content-click":!1},{default:a(()=>[t(L,{class:"d-flex flex-column"},{default:a(()=>[t($,{class:"notification-section"},{append:a(()=>[v(t(o,{onClick:p},{default:a(()=>[t(_,{icon:f(r)?"mdi-email-open-outline":"mdi-email-outline"},null,8,["icon"]),t(W,{activator:"parent",location:"start"},{default:a(()=>[c(u(f(r)?"Mark all as read":"Mark all as unread"),1)]),_:1})]),_:1},512),[[g,s.notifications.length]])]),default:a(()=>[t(z,{class:"text-lg"},{default:a(()=>[c(" Notifications ")]),_:1})]),_:1}),t(k),t(f(U),{options:{wheelPropagation:!1},style:{"max-block-size":"23.75rem"}},{default:a(()=>[t(Y,{class:"py-0"},{default:a(()=>[(d(!0),h(V,null,P(s.notifications,(e,A)=>(d(),h(V,{key:e.title},[A>0?(d(),x(k,{key:0})):C("",!0),t(S,{link:"",lines:"one","min-height":"66px",class:"list-item-hover-class",onClick:y=>l.$emit("click:notification",e)},{prepend:a(()=>[t(j,{start:""},{default:a(()=>[t(R,{size:"40",color:e.color&&e.icon?e.color:void 0,image:e.img||void 0,icon:e.icon||void 0,variant:e.img?void 0:"tonal"},{default:a(()=>[e.text?(d(),h("span",X,u(f(K)(e.text)),1)):C("",!0)]),_:2},1032,["color","image","icon","variant"])]),_:2},1024)]),append:a(()=>[b("div",J,[t(N,{dot:"",color:e.isSeen?"#a8aaae":"primary",class:E(`${e.isSeen?"visible-in-hover":""} ms-1`),onClick:M(y=>l.$emit(e.isSeen?"unread":"read",[e.id]),["stop"])},null,8,["color","class","onClick"]),b("div",Q,[t(o,{size:"x-small",class:"visible-in-hover",onClick:y=>l.$emit("remove",e.id)},{default:a(()=>[t(_,{size:"20",icon:"mdi-close"})]),_:2},1032,["onClick"])])])]),default:a(()=>[t(I,null,{default:a(()=>[c(u(e.title),1)]),_:2},1024),t(H,null,{default:a(()=>[c(u(e.subtitle),1)]),_:2},1024),b("span",G,u(e.time),1)]),_:2},1032,["onClick"])],64))),128)),v(t(S,{class:"text-center text-medium-emphasis",style:{"block-size":"56px"}},{default:a(()=>[t(I,null,{default:a(()=>[c("No Notification Found!")]),_:1})]),_:1},512),[[g,!s.notifications.length]])]),_:1})]),_:1}),t(k),v(t(F,{class:"notification-footer"},{default:a(()=>[t(q,{block:""},{default:a(()=>[c(" VIEW ALL NOTIFICATIONS ")]),_:1})]),_:1},512),[[g,s.notifications.length]])]),_:1})]),_:1},8,["location"])]),_:1})}}},ee="/assets/avatar-3-3ef9169b.png",te="/assets/avatar-4-406ee6ab.png",ae="/assets/avatar-5-bad78850.png",se="/assets/paypal-01b645d1.svg",_e={__name:"NavBarNotifications",setup(m){const n=O([{id:1,img:te,title:"Congratulation Flora! 🎉",subtitle:"Won the monthly best seller badge",time:"Today",isSeen:!0},{id:2,text:"Tom Holland",title:"New user registered.",subtitle:"5 hours ago",time:"Yesterday",isSeen:!1},{id:3,img:ae,title:"New message received 👋🏻",subtitle:"You have 10 unread messages",time:"11 Aug",isSeen:!0},{id:4,img:se,title:"Paypal",subtitle:"Received Payment",time:"25 May",isSeen:!1,color:"error"},{id:5,img:ee,title:"Received Order 📦",subtitle:"New order received from john",time:"19 Mar",isSeen:!0}]),s=i=>{n.value.forEach((o,e)=>{i===o.id&&n.value.splice(e,1)})},r=i=>{n.value.forEach(o=>{i.forEach(e=>{e===o.id&&(o.isSeen=!0)})})},p=i=>{n.value.forEach(o=>{i.forEach(e=>{e===o.id&&(o.isSeen=!1)})})},l=i=>{i.isSeen||r([i.id])};return(i,o)=>{const e=Z;return d(),x(e,{notifications:f(n),onRemove:s,onRead:r,onUnread:p,"onClick:notification":l},null,8,["notifications"])}}};export{_e as default};
