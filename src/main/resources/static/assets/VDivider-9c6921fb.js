import{a9 as c,am as v,aq as d,b9 as h,av as m,W as u,a0 as g,br as i,ad as C,B as b}from"./index-fc09de97.js";const f=c()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...d()},setup(e,r){let{attrs:t}=r;const{themeClasses:s}=h(e),{textColorClasses:l,textColorStyles:n}=m(u(e,"color")),o=g(()=>{const a={};return e.length&&(a[e.vertical?"maxHeight":"maxWidth"]=i(e.length)),e.thickness&&(a[e.vertical?"borderRightWidth":"borderTopWidth"]=i(e.thickness)),a});return C(()=>b("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,l.value,e.class],style:[o.value,n.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{f as V};
