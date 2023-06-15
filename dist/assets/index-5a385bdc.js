import{d as s,al as a,am as n,an as l,o,c as p,b as e,aE as t,u as r,_ as i,a as c,e as y,aj as F,ak as E}from"./index-e42e774a.js";const d={class:"v-spinner"},u=i(s({__name:"beat",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#999999"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(s){const i=s,c=a((()=>({backgroundColor:i.color,height:i.size,width:i.size,margin:i.margin,borderRadius:i.radius})));return(a,i)=>n((o(),p("div",d,[e("div",{class:"v-beat v-beat-odd",style:t(r(c))},null,4),e("div",{class:"v-beat v-beat-even",style:t(r(c))},null,4),e("div",{class:"v-beat v-beat-odd",style:t(r(c))},null,4)],512)),[[l,s.loading]])}}),[["__scopeId","data-v-8eebf5a1"]]),C={class:"v-spinner"},B=i(s({__name:"bounce",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#999999"},size:{type:String,default:"60px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(s){const i=s,c=a((()=>({backgroundColor:i.color,height:i.size,width:i.size,borderRadius:i.radius,opacity:.6,position:"absolute",top:0,left:0}))),y=a((()=>({height:i.size,width:i.size,position:"relative"})));return(a,i)=>n((o(),p("div",C,[e("div",{class:"v-bounce v-bounce1",style:t(r(y))},[e("div",{class:"v-bounce v-bounce2",style:t(r(c))},null,4),e("div",{class:"v-bounce v-bounce3",style:t(r(c))},null,4)],4)],512)),[[l,s.loading]])}}),[["__scopeId","data-v-dc35f326"]]),D={class:"v-spinner"},g=i(s({__name:"clip",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#999999"},size:{type:String,default:"35px"},radius:{type:String,default:"100%"}},setup(s){const i=s,c=a((()=>({height:i.size,width:i.size,borderWidth:"2px",borderStyle:"solid",borderColor:i.color+""+i.color+" transparent",borderRadius:i.radius,background:"transparent"})));return(a,i)=>n((o(),p("div",D,[e("div",{class:"v-clip",style:t(r(c))},null,4)],512)),[[l,s.loading]])}}),[["__scopeId","data-v-0161b003"]]),v={class:"v-spinner"},m=i(s({__name:"dot",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#999999"},size:{type:String,default:"60px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(s){const i=s,c=a((()=>({backgroundColor:i.color,height:parseFloat(i.size)/2+"px",width:parseFloat(i.size)/2+"px",borderRadius:i.radius}))),y=a((()=>({height:i.size,width:i.size,position:"relative"})));return(a,i)=>n((o(),p("div",v,[e("div",{class:"v-dot v-dot1",style:t(r(y))},[e("div",{class:"v-dot v-dot2",style:t(r(c))},null,4),e("div",{class:"v-dot v-dot3",style:t(r(c))},null,4)],4)],512)),[[l,s.loading]])}}),[["__scopeId","data-v-c0a33e21"]]),f={class:"v-spinner",style:{position:"relative",fontSize:0}},q=i(s({__name:"fade",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#999999"},height:{type:String,default:"15px"},width:{type:String,default:"5px"},margin:{type:String,default:"2px"},radius:{type:String,default:"20px"}},setup(s){const i=s,c=a((()=>({backgroundColor:i.color,height:i.height,width:i.width,margin:i.margin,borderRadius:i.radius}))),y=a((()=>"-"+i.radius)),F=a((()=>parseFloat(i.radius)/2+parseFloat(i.radius)/5.5+"px")),E=a((()=>"-"+F.value)),d=a((()=>({top:i.radius,left:0,animationDelay:"0.12s"}))),u=a((()=>({top:F.value,left:F.value,animationDelay:"0.24s",transform:"rotate(-45deg)"}))),C=a((()=>({top:0,left:i.radius,animationDelay:"0.36s",transform:"rotate(90deg)"}))),B=a((()=>({top:E.value,left:F.value,animationDelay:"0.48s",transform:"rotate(45deg)"}))),D=a((()=>({top:y.value,left:0,animationDelay:"0.60"}))),g=a((()=>({top:E.value,left:E.value,animationDelay:"0.72s",transform:"rotate(-45deg)"}))),v=a((()=>({top:0,left:E.value,animationDelay:"0.84s",transform:"rotate(90deg)"}))),m=a((()=>({top:F.value,left:E.value,animationDelay:"0.96s",transform:"rotate(45deg)"})));return(a,i)=>n((o(),p("div",f,[e("div",{class:"v-fade",style:t([r(c),r(d)])},null,4),e("div",{class:"v-fade",style:t([r(c),r(u)])},null,4),e("div",{class:"v-fade",style:t([r(c),r(C)])},null,4),e("div",{class:"v-fade",style:t([r(c),r(B)])},null,4),e("div",{class:"v-fade",style:t([r(c),r(D)])},null,4),e("div",{class:"v-fade",style:t([r(c),r(g)])},null,4),e("div",{class:"v-fade",style:t([r(c),r(v)])},null,4),e("div",{class:"v-fade",style:t([r(c),r(m)])},null,4)],512)),[[l,s.loading]])}}),[["__scopeId","data-v-3f3eb53c"]]),h=s({__name:"grid",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#999999"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(s){const i=s,c=a((()=>({backgroundColor:i.color,width:i.size,height:i.size,margin:i.margin,borderRadius:i.radius}))),y=a((()=>({animationName:"v-gridStretchDelay",animationIterationCount:"infinite",animationTimingFunction:"ease",animationFillMode:"both",display:"inline-block"}))),F=a((()=>({animationDelay:q(),animationDuration:h()}))),E=a((()=>({animationDelay:q(),animationDuration:h()}))),d=a((()=>({animationDelay:q(),animationDuration:h()}))),u=a((()=>({animationDelay:q(),animationDuration:h()}))),C=a((()=>({animationDelay:q(),animationDuration:h()}))),B=a((()=>({animationDelay:q(),animationDuration:h()}))),D=a((()=>({animationDelay:q(),animationDuration:h()}))),g=a((()=>({animationDelay:q(),animationDuration:h()}))),v=a((()=>({animationDelay:q(),animationDuration:h()}))),m=a((()=>({width:3*parseFloat(i.size)+6*parseFloat(i.margin)+"px",fontSize:0})));function f(s){return Math.random()*s}function q(){return f(100)/100-.2+"s"}function h(){return f(100)/100+.6+"s"}return(a,i)=>n((o(),p("div",{class:"v-spinner",style:t(r(m))},[e("div",{class:"v-grid",style:t([r(c),r(y),r(F)])},null,4),e("div",{class:"v-grid",style:t([r(c),r(y),r(E)])},null,4),e("div",{class:"v-grid",style:t([r(c),r(y),r(d)])},null,4),e("div",{class:"v-grid",style:t([r(c),r(y),r(u)])},null,4),e("div",{class:"v-grid",style:t([r(c),r(y),r(C)])},null,4),e("div",{class:"v-grid",style:t([r(c),r(y),r(B)])},null,4),e("div",{class:"v-grid",style:t([r(c),r(y),r(D)])},null,4),e("div",{class:"v-grid",style:t([r(c),r(y),r(g)])},null,4),e("div",{class:"v-grid",style:t([r(c),r(y),r(v)])},null,4)],4)),[[l,s.loading]])}}),A={class:"v-spinner"},z=i(s({__name:"moon",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#999999"},size:{type:String,default:"60px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(s){const i=s,c=a((()=>({height:i.size,width:i.size,borderRadius:i.radius}))),y=a((()=>parseFloat(i.size)/7)),F=a((()=>({height:y.value+"px",width:y.value+"px",borderRadius:i.radius}))),E=a((()=>({top:parseFloat(i.size)/2-y.value/2+"px",backgroundColor:i.color}))),d=a((()=>({border:y.value+"px solid "+i.color})));return(a,i)=>n((o(),p("div",A,[e("div",{class:"v-moon v-moon1",style:t(r(c))},[e("div",{class:"v-moon v-moon2",style:t([r(F),r(E)])},null,4),e("div",{class:"v-moon v-moon3",style:t([r(c),r(d)])},null,4)],4)],512)),[[l,s.loading]])}}),[["__scopeId","data-v-8d88999b"]]),b={class:"v-spinner",style:{position:"relative",fontSize:0}},x=s({__name:"pacman",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#999999"},size:{type:String,default:"25px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(s){const i=s,c=a((()=>({backgroundColor:i.color,width:i.size,height:i.size,margin:i.margin,borderRadius:i.radius}))),y=a((()=>i.size+" solid transparent")),F=a((()=>i.size+" solid "+i.color)),E=a((()=>({width:0,height:0,borderTop:F.value,borderRight:y.value,borderBottom:F.value,borderLeft:F.value,borderRadius:i.size}))),d=a((()=>({width:"10px",height:"10px",transform:"translate(0, "+-parseFloat(i.size)/4+"px)",position:"absolute",top:"25px",left:"100px",animationName:"v-pacmanStretchDelay",animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationFillMode:"both"}))),u=a((()=>({animationDelay:"0.25s"}))),C=a((()=>({animationDelay:"0.5s"}))),B=a((()=>({animationDelay:"0.75s"}))),D=a((()=>({animationDelay:"1s"})));return(a,i)=>n((o(),p("div",b,[e("div",{class:"v-pacman v-pacman1",style:t(r(E))},null,4),e("div",{class:"v-pacman v-pacman2",style:t([r(c),r(d),r(u)])},null,4),e("div",{class:"v-pacman v-pacman3",style:t([r(c),r(d),r(C)])},null,4),e("div",{class:"v-pacman v-pacman4",style:t([r(c),r(d),r(B)])},null,4),e("div",{class:"v-pacman v-pacman5",style:t([r(c),r(d),r(D)])},null,4)],512)),[[l,s.loading]])}}),S={class:"v-spinner"},_=s({__name:"pulse",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#999999"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(s){const i=s,c=a((()=>({backgroundColor:i.color,width:i.size,height:i.size,margin:i.margin,borderRadius:i.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"}))),y=a((()=>({animationDelay:"0.12s"}))),F=a((()=>({animationDelay:"0.24s"}))),E=a((()=>({animationDelay:"0.36s"})));return(a,i)=>n((o(),p("div",S,[e("div",{class:"v-pulse v-pulse1",style:t([r(c),r(y)])},null,4),e("div",{class:"v-pulse v-pulse2",style:t([r(c),r(F)])},null,4),e("div",{class:"v-pulse v-pulse3",style:t([r(c),r(E)])},null,4)],512)),[[l,s.loading]])}}),w={class:"v-spinner"},k=i(s({__name:"ring",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#999999"},size:{type:String,default:"60px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(s){const i=s,c=a((()=>({height:i.size,width:i.size,border:parseFloat(i.size)/10+"px solid"+i.color,opacity:.4,borderRadius:i.radius}))),y=a((()=>({height:i.size,width:i.size,position:"relative"})));return(a,i)=>n((o(),p("div",w,[e("div",{class:"v-ring v-ring1",style:t(r(y))},[e("div",{class:"v-ring v-ring2",style:t(r(c))},null,4),e("div",{class:"v-ring v-ring3",style:t(r(c))},null,4)],4)],512)),[[l,s.loading]])}}),[["__scopeId","data-v-acdd73a4"]]),R={class:"v-spinner"},I=i(s({__name:"rise",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#999999"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(s){const i=s,c=a((()=>({backgroundColor:i.color,height:i.size,width:i.size,margin:i.margin,borderRadius:i.radius})));return(a,i)=>n((o(),p("div",R,[e("div",{class:"v-rise v-rise-odd",style:t(r(c))},null,4),e("div",{class:"v-rise v-rise-even",style:t(r(c))},null,4),e("div",{class:"v-rise v-rise-odd",style:t(r(c))},null,4),e("div",{class:"v-rise v-rise-even",style:t(r(c))},null,4),e("div",{class:"v-rise v-rise-odd",style:t(r(c))},null,4)],512)),[[l,s.loading]])}}),[["__scopeId","data-v-947733c9"]]),M={class:"v-spinner"},T=i(s({__name:"rotate",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#999999"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(s){const i=s,c=a((()=>({backgroundColor:i.color,height:i.size,width:i.size,margin:i.margin,borderRadius:i.radius})));return(a,i)=>n((o(),p("div",M,[e("div",{class:"v-rotate v-rotate1",style:t(r(c))},[e("div",{class:"v-rotate v-rotate2",style:t(r(c))},null,4),e("div",{class:"v-rotate v-rotate3",style:t(r(c))},null,4)],4)],512)),[[l,s.loading]])}}),[["__scopeId","data-v-21805e5f"]]),N={class:"v-spinner"},P=s({__name:"scale",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#999999"},height:{type:String,default:"35px"},width:{type:String,default:"4px"},margin:{type:String,default:"2px"},radius:{type:String,default:"2px"}},setup(s){const i=s,c=a((()=>({backgroundColor:i.color,height:i.height,width:i.width,margin:i.margin,borderRadius:i.radius,display:"inline-block",animationName:"v-scaleStretchDelay",animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"}))),y=a((()=>({animationDelay:"0.1s"}))),F=a((()=>({animationDelay:"0.2s"}))),E=a((()=>({animationDelay:"0.3s"}))),d=a((()=>({animationDelay:"0.4s"}))),u=a((()=>({animationDelay:"0.5s"})));return(a,i)=>n((o(),p("div",N,[e("div",{class:"v-scale v-scale1",style:t([r(c),r(y)])},null,4),e("div",{class:"v-scale v-scale2",style:t([r(c),r(F)])},null,4),e("div",{class:"v-scale v-scale3",style:t([r(c),r(E)])},null,4),e("div",{class:"v-scale v-scale4",style:t([r(c),r(d)])},null,4),e("div",{class:"v-scale v-scale5",style:t([r(c),r(u)])},null,4)],512)),[[l,s.loading]])}}),j={class:"v-spinner"},G=i(s({__name:"skew",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#999999"},size:{type:String,default:"20px"}},setup(s){const i=s,c=a((()=>({height:0,width:0,borderLeft:i.size+" solid transparent",borderRight:i.size+" solid transparent",borderBottom:i.size+" solid "+i.color})));return(a,i)=>n((o(),p("div",j,[e("div",{class:"v-skew",style:t(r(c))},null,4)],512)),[[l,s.loading]])}}),[["__scopeId","data-v-b6835907"]]),L={class:"v-spinner"},W=i(s({__name:"square",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#999999"},size:{type:String,default:"50px"}},setup(s){const i=s,c=a((()=>({backgroundColor:i.color,height:i.size,width:i.size})));return(a,i)=>n((o(),p("div",L,[e("div",{class:"v-square",style:t(r(c))},null,4)],512)),[[l,s.loading]])}}),[["__scopeId","data-v-83ef1058"]]),H={class:"v-spinner"},J=s({__name:"sync",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#999999"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(s){const i=s,c=a((()=>({backgroundColor:i.color,height:i.size,width:i.size,margin:i.margin,borderRadius:i.radius,display:"inline-block",animationName:"v-syncStretchDelay",animationDuration:"0.6s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationFillMode:"both"}))),y=a((()=>({animationDelay:"0.07s"}))),F=a((()=>({animationDelay:"0.14s"}))),E=a((()=>({animationDelay:"0.21s"})));return(a,i)=>n((o(),p("div",H,[e("div",{class:"v-sync v-sync1",style:t([r(c),r(y)])},null,4),e("div",{class:"v-sync v-sync2",style:t([r(c),r(F)])},null,4),e("div",{class:"v-sync v-sync3",style:t([r(c),r(E)])},null,4)],512)),[[l,s.loading]])}}),K={class:"prose prose-sm text-left"},O=[c('<pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code class="language-html"><span class="line"><span style="color:#81A1C1;">&lt;template&gt;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">Beat</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:loading</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true | false</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:color</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#color</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:size</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">size px</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">Bounce</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:loading</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true | false</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:color</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#color</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:size</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">size px</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">Clip</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:loading</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true | false</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:color</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#color</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:size</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">size px</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">Dot</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:loading</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true | false</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:color</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#color</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:size</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">size px</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">Fade</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:loading</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true | false</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:color</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#color</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:height</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">height</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:width</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">width</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">Grid</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:loading</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true | false</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:color</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#color</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:size</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">size px</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">Moon</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:loading</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true | false</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:color</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#color</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:size</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">size px</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">Pacman</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:loading</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true | false</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:color</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#color</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:size</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">size px</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">Pulse</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:loading</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true | false</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:color</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#5dc596</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:size</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">15px</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:margin</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">2px</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:radius</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">100%</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">Ring</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:loading</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true | false</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:color</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#color</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:size</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">size px</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">Rise</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:loading</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true | false</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:color</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#color</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:size</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">size px</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">Rotate</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:loading</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true | false</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:color</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#color</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:size</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">size px</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">Scale</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:loading</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true | false</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:color</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#color</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:height</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">height</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:width</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">width</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">Skew</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:loading</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true | false</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:color</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#color</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:size</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">size px</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">Square</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:loading</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true | false</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:color</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#color</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:size</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">size px</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">Sync</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:loading</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true | false</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:color</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#color</span><span style="color:#ECEFF4;">&quot;</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">:size</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">size px</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>\n<span class="line"><span style="color:#81A1C1;">&lt;/template&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#81A1C1;">&lt;script</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">lang</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">ts</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">setup</span><span style="color:#81A1C1;">&gt;</span></span>\n<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">Beat</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">Bounce</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">Clip</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">Dot</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">Fade</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">Grid</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">Moon</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">Pacman</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">Pulse</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">Ring</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">Rise</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">Rotate</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">Scale</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">Skew</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">Square</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">Sync</span></span>\n<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">@/components/spinner</span><span style="color:#ECEFF4;">&#39;</span></span>\n<span class="line"><span style="color:#81A1C1;">&lt;/script&gt;</span></span>\n<span class="line"></span></code></pre>',1)],Q={__name:"index",setup:(s,{expose:a})=>(a({frontmatter:{}}),(s,a)=>(o(),p("div",K,O)))},U=s=>(F("data-v-855e47df"),s=s(),E(),s),V={class:"px-40"},X=U((()=>e("div",{class:"text-amber-200 bg-neutral pa-3 mb-5 text-3xl"},"옵션 조절",-1))),Y={class:"text-nm mb-30"},Z=U((()=>e("div",{class:"text-amber-200 bg-neutral pa-3 mb-5 text-3xl"},"예시",-1))),$={class:"list-container"},ss={class:"spinner-list"},as={class:"spinner-list"},ns={class:"spinner-list"},ls={class:"spinner-list"},os={class:"spinner-list"},ps={class:"spinner-list"},es={class:"spinner-list"},ts={class:"spinner-list"},rs={class:"spinner-list"},is={class:"spinner-list"},cs={class:"spinner-list"},ys={class:"spinner-list"},Fs={class:"spinner-list"},Es={class:"spinner-list"},ds={class:"spinner-list"},us={class:"spinner-list"},Cs=i(s({__name:"index",setup:s=>(s,a)=>(o(),p("div",V,[X,e("div",Y,[y(r(Q))]),Z,e("ul",$,[e("li",ss,[y(r(u),{loading:!0,color:"#999999",size:"15px",margin:"2px",radius:"100%"})]),e("li",as,[y(r(B))]),e("li",ns,[y(r(g))]),e("li",ls,[y(r(m))]),e("li",os,[y(r(q))]),e("li",ps,[y(r(h))]),e("li",es,[y(r(z))]),e("li",ts,[y(r(x))]),e("li",rs,[y(r(_))]),e("li",is,[y(r(k))]),e("li",cs,[y(r(I))]),e("li",ys,[y(r(T))]),e("li",Fs,[y(r(P))]),e("li",Es,[y(r(G))]),e("li",ds,[y(r(W))]),e("li",us,[y(r(J))])])]))}),[["__scopeId","data-v-855e47df"]]);export{Cs as default};
