import{d as e,at as l,o as a,c as i,u as t,aO as n,ai as s,b as c,am as o,aW as p,a$ as r,a as u}from"./index-e42e774a.js";const d={class:"mobile-identity-wrap"},v={key:0,class:"page-title"},b={class:"inner-wrap"},h={class:"join-form-wrap"},m=u('<div class="join-input-wrap"><div class="input-text-wrap"><input type="text" placeholder="이름" title="이름 입력" required><div class="btns-wrap"><button type="button" class="del-btn">삭제</button></div></div><p class="info-msg is-error">이미 가입된 이메일 주소입니다. 다른 이메일을 입력해 주세요.</p></div><div class="identify-wrap"><div class="join-input-wrap identify is-complete"><div class="input-text-wrap"><input type="tel" placeholder="주민등록번호 앞 6자리" maxlength="6" title="주민등록번호 앞 6자리 입력" value="910101" required><div class="btns-wrap"><button type="button" class="del-btn">삭제</button></div></div><span class="util">-</span><div class="input-text-wrap"><input type="tel" placeholder="0" maxlength="1" title="주민등록번호 뒤 1자리 입력" required><span class="identity-num-after"><code class="blind">23456</code><i></i><i></i><i></i><i></i><i></i><i></i></span></div></div><p class="info-msg is-error">비밀번호는 8~16자 이내로 입력해 주세요.</p></div>',2),y={class:"carrier-radio-wrap"},k=c("span",null,"SKT",-1),f=c("span",null,"KT",-1),w=c("span",null,"LGU+",-1),x=c("span",null,"SKT 알뜰폰",-1),g=c("span",null,"KT 알뜰폰",-1),P=c("span",null,"LGU+ 알뜰폰",-1),K=c("p",{class:"info-msg is-error"},"이용 중인 통신사를 선택해 주세요.",-1),T={class:"join-agree-wrap"},U=c("div",{class:"agree"},[c("input",{id:"allCheck",name:"all-check",type:"checkbox",value:""}),c("label",{for:"allCheck"},"휴대폰 인증 전체동의")],-1),j={class:"agree"},C={class:"agree-list-wrap"},V={class:"agree-list"},G=c("input",{id:"check1",name:"checkbox",type:"checkbox",value:""},null,-1),L=c("label",{for:"check1"},"[필수] 개인정보이용동의",-1),S={class:"agree-list"},q=c("input",{id:"check2",name:"checkbox",type:"checkbox",value:""},null,-1),R=c("label",{for:"check2"},"[필수] 고유식별정보처리동의",-1),F={class:"agree-list"},_=c("input",{id:"check3",name:"checkbox",type:"checkbox",value:""},null,-1),O=c("label",{for:"check3"},"[필수] 서비스이용약관동의",-1),W={class:"agree-list"},$=c("input",{id:"check4",name:"checkbox",type:"checkbox",value:""},null,-1),z=c("label",{for:"check4"},"[필수] 통신사이용약관동의",-1),A={class:"agree-list"},B=c("input",{id:"check5",name:"checkbox",type:"checkbox",value:""},null,-1),D=c("label",{for:"check5"},"[필수] 제3자 정보제공 동의",-1),E=c("p",{class:"info-msg is-error"},"필수약관 동의 후 서비스를 이용할 수 있습니다.",-1),H=u('<div class="join-input-wrap is-complete"><div class="input-text-wrap"><input type="tel" placeholder="휴대폰 번호(‘-’ 없이 입력)" title="휴대폰 번호 입력"><div class="btns-wrap"><button type="button" class="del-btn">삭제</button></div></div><p class="info-msg is-warning">입력하신 번호로 인증번호가 발송 되었습니다.</p><div class="button-group-wrap"><button type="button" class="certify-btn">인증번호 전송</button></div></div><div class="join-input-wrap certification is-active"><div class="input-text-wrap"><input type="text" placeholder="인증번호 4자리 입력" title="인증번호 4자리 입력"><div class="cert-num-wrap"><span>04:59</span></div><p class="info-msg is-error">인증번호 입력 시간이 초과하였습니다. 다시 시도해 주세요.</p><div class="button-group-wrap active"><button type="button" class="retry-btn disable">재전송</button><button type="button" class="certify-btn disable">인증하기</button></div></div></div>',2),I=e({__name:"mobile-identity-verification",setup(e){const u=l({cellPhone:"KTF"});return(e,l)=>(a(),i("div",d,["desktop"===t(n)()?(a(),i("h2",v,"휴대폰 본인인증하기")):s("",!0),c("div",b,[c("div",h,[m,c("div",y,[c("label",null,[o(c("input",{type:"radio","onUpdate:modelValue":l[0]||(l[0]=e=>t(u).cellPhone=e),name:"radio",value:"SKT"},null,512),[[p,t(u).cellPhone]]),k]),c("label",null,[o(c("input",{type:"radio","onUpdate:modelValue":l[1]||(l[1]=e=>t(u).cellPhone=e),name:"radio",value:"KTF"},null,512),[[p,t(u).cellPhone]]),f]),c("label",null,[o(c("input",{type:"radio","onUpdate:modelValue":l[2]||(l[2]=e=>t(u).cellPhone=e),name:"radio",value:"LGT"},null,512),[[p,t(u).cellPhone]]),w]),c("label",null,[o(c("input",{type:"radio","onUpdate:modelValue":l[3]||(l[3]=e=>t(u).cellPhone=e),name:"radio",value:"SKR"},null,512),[[p,t(u).cellPhone]]),x]),c("label",null,[o(c("input",{type:"radio","onUpdate:modelValue":l[4]||(l[4]=e=>t(u).cellPhone=e),name:"radio",value:"KTR"},null,512),[[p,t(u).cellPhone]]),g]),c("label",null,[o(c("input",{type:"radio","onUpdate:modelValue":l[5]||(l[5]=e=>t(u).cellPhone=e),name:"radio",value:"LGR"},null,512),[[p,t(u).cellPhone]]),P]),K]),c("div",T,[U,c("div",j,[c("ul",C,[c("li",null,[c("div",V,[G,L,c("a",{href:"#",onClick:l[6]||(l[6]=r((()=>{}),["prevent"]))},"약관보기")])]),c("li",null,[c("div",S,[q,R,c("a",{href:"#",onClick:l[7]||(l[7]=r((()=>{}),["prevent"]))},"약관보기")])]),c("li",null,[c("div",F,[_,O,c("a",{href:"#",onClick:l[8]||(l[8]=r((()=>{}),["prevent"]))},"약관보기")])]),c("li",null,[c("div",W,[$,z,c("a",{href:"#",onClick:l[9]||(l[9]=r((()=>{}),["prevent"]))},"약관보기")])]),c("li",null,[c("div",A,[B,D,c("a",{href:"#",onClick:l[10]||(l[10]=r((()=>{}),["prevent"]))},"약관보기")])])])]),E]),H])])]))}});export{I as default};
