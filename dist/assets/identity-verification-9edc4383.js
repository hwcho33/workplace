import{d as s,aV as t,aS as a,al as l,ab as e,o as i,c as n,u as o,aO as c,ai as u,b as r,a9 as p,f as b}from"./index-e42e774a.js";const d={class:"identity-wrap"},m={key:0,class:"page-title"},y={class:"inner-wrap"},v={class:"info-title-wrap"},f=r("h3",{class:"title"},"NSmall 통합회원 가입을 위해 인증을 진행해 주세요.",-1),k=r("p",{class:"text"},"상담사 또는 리모컨으로 가입하신 고객님은 본인인증이 필요합니다.",-1),h=r("h3",{class:"title"},"본인 확인을 위해 인증 절차를 진행해 주세요.",-1),x=r("p",{class:"text"},"비회원 구매 시 본인 확인을 위해 인증이 필요합니다.",-1),w=r("i",{class:"icon-adult"},"성인",-1),S=r("h3",{class:"title"},[b("본 상품은 19세 미만의"),r("br"),b("청소년 접근이 제한 되었습니다.")],-1),g=r("p",{class:"text"},"성인 확인을 위해 인증이 필요합니다.",-1),j={class:"button-group-wrap"},O={key:0,class:"info-text"},C=r("strong",null,"정보통신망 이용촉진 및 정보보호 등에 관한 법률",-1),N=r("strong",null,"청소년 보호법",-1),_=r("em",null,"본인인증 연령 확인결과는 1년 동안 적용됩니다.",-1),q=r("div",{class:"info-list-wrap"},[r("ul",{class:"bullet-list"},[r("li",null," 본인인증을 위해 입력하신 개인정보는 본인인증기관에서 수집하는 정보이며, 이때 수집된 정보는 본인인증 외 어떠한 용도로도 이용되거나 별도 저장되지 않습니다. "),r("li",null,' 정보통신망 이용촉진 및 정보보호 등의 관한 법률 제 23조 2. “주민등록번호의 사용 제한"에 따라 NSmall은 고객님의 주민등록번호를 수집, 이용하지 않습니다. ')])],-1),A=s({__name:"identity-verification",setup(s){const A=t(),M=a(),P=l((()=>A.query)),V=l((()=>Object.keys(P.value).some((s=>"adult"===s)))),z=l((()=>Object.keys(P.value).some((s=>"nonMember"===s)))),B=l((()=>!1===V.value&&!1===z.value));function D(){M.push({path:"/customer/member/mobile-identity-verification"})}function E(){}return e((()=>{})),(s,t)=>(i(),n("div",d,["desktop"===o(c)()?(i(),n("h2",m,"본인인증")):u("",!0),r("div",y,[r("div",v,[o(B)?(i(),n(p,{key:0},[f,k],64)):o(z)?(i(),n(p,{key:1},[h,x],64)):o(V)?(i(),n(p,{key:2},[w,S,g],64)):u("",!0)]),r("div",j,[r("button",{type:"button",class:"button",onClick:D},"본인 휴대폰(문자) 인증하기"),r("button",{type:"button",class:"button",onClick:E},"PASS로 인증하기"),o(V)?(i(),n("p",O,[b(" 이 정보 내용은 청소년 유해매체물로서 "),C,b(" 및 "),N,b("에 따라 19세 미만의 청소년이 이용할 수 없습니다. "),_])):u("",!0)]),q])]))}});export{A as default};
