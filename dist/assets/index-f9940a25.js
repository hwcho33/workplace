import{d as t,at as o,a2 as a,aJ as e,_ as n,o as s,aD as i,af as r,am as c,b as l,aB as d,aE as u,a6 as p,an as m,ah as f,aK as v,aL as y}from"./index-e42e774a.js";const E=t({setup(){const t=o({content:"",delay:0,position:"",positionValue:0}),n=a(!1);let s;const i=()=>{clearTimeout(s),n.value=!1,s=null};return{...e(t),visible:n,open:()=>(s&&clearTimeout(s),n.value=!0,s=setTimeout(i,t.delay),i),close:i}}}),b={class:"toast-content"};const w=n(E,[["render",function(t,o,a,e,n,v){return s(),i(f,{name:"fade"},{default:r((()=>[c(l("div",{class:d(["toast",`toast-${t.position}`]),style:u(`${t.position}: ${t.positionValue}px`)},[l("div",b,p(t.content),1)],6),[[m,t.visible]])])),_:1})}],["__scopeId","data-v-c83d12f2"]]);let T;const _=t=>{T?function(t,o=new Error){if(!t)throw"string"==typeof o?new Error(o):o}(void 0!==T,new Error("Instance Setting Error")):(()=>{const t=document.createElement("div");T=y(w).mount(t),document.body.appendChild(t)})();const o={content:"",delay:2e3,position:"bottom",positionValue:0};for(const a in v(o,t||{}))T[a]=t[a];return T.open()};export{_ as T};
