import{f as w}from"./forwardRefs-a29b5f65.js";import{a9 as M,aa as O,ab as b,ac as D,a0 as m,j as v,Q as x,O as A,w as j,q as f,ad as I,B as V,aA as R}from"./index-8cb37f11.js";import{m as T,u as U,a as g,V as p}from"./VOverlay-bbefb5aa.js";import{V as $}from"./dialog-transition-4d6464b9.js";const Q=M()({name:"VMenu",props:{id:String,...O(T({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:$}}),["absolute"])},emits:{"update:modelValue":a=>!0},setup(a,P){let{slots:t}=P;const o=b(a,"modelValue"),{scopeId:y}=U(),C=D(),i=m(()=>a.id||`v-menu-${C}`),u=v(),e=x(g,null),s=v(0);A(g,{register(){++s.value},unregister(){--s.value},closeParents(){setTimeout(()=>{s.value||(o.value=!1,e==null||e.closeParents())},40)}}),j(o,l=>{l?e==null||e.register():e==null||e.unregister()});function S(){e==null||e.closeParents()}const h=m(()=>f({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-owns":i.value},a.activatorProps));return I(()=>{const[l]=p.filterProps(a);return V(p,f({ref:u,class:["v-menu",a.class],style:a.style},l,{modelValue:o.value,"onUpdate:modelValue":r=>o.value=r,absolute:!0,activatorProps:h.value,"onClick:outside":S},y),{activator:t.activator,default:function(){for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return V(R,{root:!0},{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t,...c)]}})}})}),w({id:i,ΨopenChildren:s},u)}});export{Q as V};
