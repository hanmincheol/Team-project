import{a9 as S,aa as h,ab as O,ac as x,a0 as e,j as T,q as u,ad as w,B as A}from"./index-fc09de97.js";import{m as B,u as C,V as d}from"./VOverlay-14eda34d.js";import{f as I}from"./forwardRefs-a29b5f65.js";const j=S()({name:"VTooltip",props:{id:String,text:String,...h(B({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},emits:{"update:modelValue":t=>!0},setup(t,v){let{slots:a}=v;const n=O(t,"modelValue"),{scopeId:m}=C(),f=x(),r=e(()=>t.id||`v-tooltip-${f}`),l=T(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),b=e(()=>u({"aria-describedby":r.value},t.activatorProps));return w(()=>{const[y]=d.filterProps(t);return A(d,u({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},y,{modelValue:n.value,"onUpdate:modelValue":o=>n.value=o,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:b.value,_disableGlobalStack:!0},m),{activator:a.activator,default:function(){var c;for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return((c=a.default)==null?void 0:c.call(a,...s))??t.text}})}),I({},l)}});export{j as V};
