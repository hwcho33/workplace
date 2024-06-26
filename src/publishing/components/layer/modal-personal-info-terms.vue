<template>
  <Layer
    v-model="state.isShow"
    layer-type="full"
    class="layer-terms-wrap"
    @onClose="_callbackClose"
    @onOpen="_callbackOpen"
  >
    <template #header>개인정보이용동의</template>
    <template #contents>
      <!-- skt 개인정보이용동의 약관 -->
      <div class="area-terms" v-if="cellPhone === 'SKT' || cellPhone === 'SKR'">
        <dl>
          <dt>SK텔레콤(주) 귀중</dt>
          <dd>
            본인은 SK텔레콤(주)(이하 ‘회사’라 합니다)가 제공하는 본인확인서비스(이하 ‘서비스’라 합니다)를 이용하기 위해,
            다음과 같이 ‘회사’가 본인의 개인정보를 수집/이용하고, 개인정보의 취급을 위탁하는 것에 동의합니다.
          </dd>
          <dd>
            <dl class="mark-dash">
              <dt>1. 수집항목</dt>
              <dd>이용자의 성명, 이동전화번호, 가입한 이동전화 회사, 생년월일, 성별</dd>
              <dd>연계정보(CI), 중복가입확인정보(DI)</dd>
              <dd>이용자가 이용하는 웹사이트 또는 Application 정보, 이용일시</dd>
              <dd>내외국인 여부</dd>
              <dd>가입한 이동전화회사 및 이동전화브랜드</dd>
            </dl>
            <dl class="mark-dash">
              <dt>2. 이용목적</dt>
              <dd>이용자가 웹사이트 또는 Application에 입력한 본인확인정보의 정확성 여부 확인(본인확인서비스 제공)</dd>
              <dd>해당 웹사이트 또는 Application에 연계정보(CI)/중복가입확인정보(DI) 전송</dd>
              <dd>서비스 관련 상담 및 불만 처리 등</dd>
              <dd>이용 웹사이트/Application 정보 등에 대한 분석 및 세분화를 통한, 이용자의 서비스 이용 선호도 분석</dd>
            </dl>
            <dl class="mark-dash">
              <dt>3. 개인정보의 보유기간 및 이용기간</dt>
              <dd>이용자가 서비스를 이용하는 기간에 한하여 보유 및 이용. 다만, 아래의 경우는 제외</dd>
              <dd>법령에서 정하는 경우 해당 기간까지 보유(상세 사항은 회사의 개인정보처리방침에 기재된 바에 따름)</dd>
            </dl>
            <dl>
              <dt>4. 본인확인서비스 제공을 위한 개인정보의 취급위탁</dt>
              <dd>
                수탁자: NICE평가정보(주), (주)다날, (주)드림시큐리티, SCI평가정보(주), NHN한국사이버결제(주),
                (주)KG모빌리언스, 코리아크레딧뷰로(주), 한국모바일인증(주)
              </dd>
              <dd>
                취급위탁 업무: 본인확인정보의 정확성 여부 확인(본인확인서비스 제공), 연계정보(CI)/중복가입확인정보(DI)
                생성 및 전송, 서비스 관련 상담 및 불만 처리, 휴대폰인증보호 서비스, 이용자의 서비스 이용 선호도 분석정보
                제공관련 시스템 구축·광고매체 연동 및 위탁영업 등
              </dd>
              <dd>
                ※ 수탁자의 상세 개인정보 취급 위탁 내용은 각 수탁자가 정하는 절차와 방법에 따라 수탁자 홈페이지 등에
                게시된 수탁자의 개인정보 처리방침 및 제3자 제공 동의 방침 등에 따릅니다.
              </dd>
            </dl>
            <dl>
              <dt>5. 위 개인정보 수집·이용 및 취급위탁에 동의하지 않으실 경우, 서비스를 이용하실 수 없습니다.</dt>
              <dd>
                회사가 제공하는 서비스와 관련된 개인정보의 취급과 관련된 사항은, 회사의 개인정보처리방침(회사 홈페이지
                <a href="http://www.sktelecom.com" target="_blank">www.sktelecom.com</a>)에 따릅니다.
              </dd>
            </dl>
          </dd>
        </dl>
        <dl>
          <dt>[NICE평가정보(주) 귀중]</dt>
          <dd>
            NICE평가정보(주)(이하 ‘회사’)는 SK텔레콤(주)의 업무를 대행하여 휴대폰본인확인서비스를 제공함에 있어
            고객으로부터 개인정보를 수집하고 이용하기 위해 ‘정보통신망 이용촉진 및 정보보호에 관한 법률’에 따라서 다음과
            같이 본인의 동의를 받습니다.
          </dd>
          <dd>
            <dl class="mark-kor">
              <dt>1. 개인정보의 내용</dt>
              <dd>
                <em>정보항목</em>
                <div class="mark-dash">생년월일, 성명, 성별, 내/외국인 구분, 휴대폰번호, 가입한 이동통신사, IP주소</div>
              </dd>
              <dd>
                <em>수집방법</em>
                <ul class="mark-dash">
                  <li>본인인증 요청시 회원사 서비스 페이지 또는 본인인증 팝업창 페이지에서 이용자가 직접 입력</li>
                  <li>본인인증 과정에서 시스템에서 생성되는 정보 수집(Ex. IP주소)</li>
                </ul>
              </dd>
            </dl>
            <dl class="mark-kor">
              <dt>2. 개인정보의 이용목적과 제공정보</dt>
              <dd>
                <em>이용 목적</em>
                <ul class="mark-dash">
                  <li>고객의 회원가입, ID/PW찾기, 거래동의 등을 위한 휴대폰 본인확인 결과</li>
                  <li>휴대폰 소지 확인을 위한 SMS 인증번호 전송</li>
                  <li>부정 이용 방지 및 수사의뢰</li>
                  <li>휴대폰번호보호서비스 해제(서비스 가입자에 한함)</li>
                  <li>기타 법률에서 정한 목적</li>
                </ul>
              </dd>
              <dd>
                <em>제공하는 개인정보</em>
                <ul class="mark-dash">
                  <li>
                    성명, 성별, 생년월일, 내/외국인, 휴대폰번호, 이동통신사, IP주소, CI, DI [제공사: 서비스회원사(업체별
                    선택 및 이용방식에 따라 전부 또는 일부를 제공)]
                  </li>
                  <li>성명, 성별, 생년월일, 휴대폰번호, 이동통신사 [제공사: SKT, KT, LGU+]</li>
                  <li>휴대폰번호 [제공사: SKT, KT, LGU+]</li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>3. 개인정보의 보유 및 이용기간</dt>
              <dd>
                이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체없이 파기합니다. 단, 다음의
                정보에 대해서는 아래의 이유로 명기한 기간 동안 보유합니다.
                <dl>
                  <dt>가. 회사 내부 방침에 의한 정보보유 사유</dt>
                  <dd>본인확인 발생 및 차단기록, 휴대폰번호</dd>
                  <dd>보유 이유: 부정 이용 방지 및 민원 처리</dd>
                  <dd>보유 기간: 1년</dd>
                </dl>
                <dl>
                  <dt>나. 관계법령에 의한 정보보유 사유</dt>
                  <dd>이용자 불만 또는 분쟁 처리에 관한 기록</dd>
                  <dd>보유 이유: 전자상거래 등에서의 소비자보호에 관한 법률</dd>
                  <dd>보유 기간: 3년</dd>
                </dl>
              </dd>
            </dl>
          </dd>
        </dl>
      </div>

      <!-- kt 개인정보이용동의 약관 -->
      <div class="area-terms" v-if="cellPhone === 'KTF' || cellPhone === 'KTR'">
        <dl>
          <dt>(주)케이티 귀중</dt>
          <dd>
            (주)케이티(이하 ‘회사’라 함)가 제공하는 본인확인서비스를 이용하기 위해, 다음과 같이 ‘회사’가 본인의
            개인정보를 수집 및 이용하고, 개인정보의 취급을 위탁하는 것에 동의합니다.
          </dd>
          <dd>
            <dl class="mark-dash">
              <dt>1. 수집항목</dt>
              <dd>이용자가 가입한 이동통신사, 휴대폰번호, 성명, 성별, 생년월일, 내/외국인 구분</dd>
              <dd>연계정보(CI), 중복가입확인정보(DI)</dd>
              <dd>이용자가 본인확인을 요청한 서비스명 및 URL정보, 본인확인 이용일시, IP 주소</dd>
            </dl>
            <dl class="mark-dash">
              <dt>2. 이용목적</dt>
              <dd>
                인터넷사업자의 서비스(회원가입, ID/PW찾기 등) 이용에 필요한 이용자 본인확인 여부 및 정보 전달
                <div>(※ 이용자가 본인확인을 요청한 인터넷사업자에 한합니다.)</div>
              </dd>
              <dd>(주)케이티 등 이동통신사에 이용자 정보를 전송하여 본인확인 및 휴대폰 정보의 일치 여부 확인</dd>
              <dd>휴대폰 사용자 확인을 위한 SMS 인증번호 전송</dd>
              <dd>부정 이용 방지 및 수사의뢰</dd>
              <dd>이용자 본인 요청에 의한 본인확인 이력정보 제공</dd>
              <dd>휴대폰번호보호서비스 가입여부 확인(서비스 가입자에 한함)</dd>
            </dl>
            <dl>
              <dt>3. 개인정보의 보유 및 이용기간</dt>
              <dd>
                "회사"는 이용자의 개인정보를 이용목적이 달성되거나 보유 및 보존기간이 종료하면 해당 정보를 지체없이 파기
                하며 별도의 보관을 하지 않습니다. 단, 관련 법령 및 회사방침에 따라 보존하는 목적과 기간은 아래와
                같습니다.
              </dd>
              <dd>
                <div class="mark-dash">
                  소비자의 불만 또는 분쟁처리에 관한 기록: 3년(전자상거래등에서의 소비자보호에 관한 법률)
                </div>
              </dd>
            </dl>
            <dl class="mark-dash">
              <dt>4. 본인확인서비스 제공을 위한 개인정보의 취급 위탁</dt>
              <dd>수탁자: NICE평가정보</dd>
              <dd>
                취급위탁 업무: 본인확인정보의 정확성 여부 확인, 연계정보(CI) 및 중복가입확인정보(DI) 전송, 서비스 관련
                상담 및 불만 처리 등
              </dd>
            </dl>
            <dl>
              <dt>5. 상기 개인정보 수집 및 이용과 취급위탁에 동의하지 않는 경우, 서비스를 이용할 수 없습니다.</dt>
              <dd>
                ‘회사’가 제공하는 서비스의 개인정보 취급과 관련된 사항은 아래의 ‘회사’ 홈페이지에 기재된
                개인정보처리방침에 따릅니다.
              </dd>
              <dd>
                <div class="mark-dash">(주)케이티: <a href="http://www.kt.com" target="_blank">www.kt.com</a></div>
              </dd>
              <dd>본인은 상기 내용을 숙지하였으며 이에 동의합니다.</dd>
            </dl>
          </dd>
        </dl>
        <dl>
          <dt>[NICE평가정보(주) 귀중]</dt>
          <dd>
            NICE평가정보(주)(이하 ‘회사’)는 (주)케이티의 업무를 대행하여 휴대폰본인확인서비스를 제공함에 있어
            고객으로부터 개인정보를 수집하고 이용하기 위해 ‘정보통신망 이용촉진 및 정보보호에 관한 법률’에 따라서 다음과
            같이 본인의 동의를 받습니다.
          </dd>
          <dd>
            <dl class="mark-kor">
              <dt>1. 개인정보의 내용</dt>
              <dd>
                <em>정보항목</em>
                <div class="mark-dash">생년월일, 성명, 성별, 내/외국인 구분, 휴대폰번호, 가입한 이동통신사, IP주소</div>
              </dd>
              <dd>
                <em>수집방법</em>
                <ul class="mark-dash">
                  <li>본인인증 요청시 회원사 서비스 페이지 또는 본인인증 팝업창 페이지에서 이용자가 직접 입력</li>
                  <li>본인인증 과정에서 시스템에서 생성되는 정보 수집(Ex. IP주소)</li>
                </ul>
              </dd>
            </dl>
            <dl class="mark-kor">
              <dt>2. 개인정보의 이용목적과 제공정보</dt>
              <dd>
                <em>이용 목적</em>
                <ul class="mark-dash">
                  <li>고객의 회원가입, ID/PW찾기, 거래동의 등을 위한 휴대폰 본인확인 결과</li>
                  <li>휴대폰 소지 확인을 위한 SMS 인증번호 전송</li>
                  <li>부정 이용 방지 및 수사의뢰</li>
                  <li>휴대폰번호보호서비스 해제(서비스 가입자에 한함)</li>
                  <li>기타 법률에서 정한 목적</li>
                </ul>
              </dd>
              <dd>
                <em>제공하는 개인정보</em>
                <ul class="mark-dash">
                  <li>
                    성명, 성별, 생년월일, 내/외국인, 휴대폰번호, 이동통신사, IP주소, CI, DI [제공사: 서비스회원사(업체별
                    선택 및 이용방식에 따라 전부 또는 일부를 제공]
                  </li>
                  <li>성명, 성별, 생년월일, 휴대폰번호, 이동통신사 [제공사: SKT, KT, LGU+]</li>
                  <li>휴대폰번호 [제공사: SKT, KT, LGU+]</li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>3. 개인정보의 보유 및 이용기간</dt>
              <dd>
                이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체없이 파기합니다. 단, 다음의
                정보에 대해서는 아래의 이유로 명기한 기간 동안 보유합니다.
                <dl>
                  <dt>가. 회사 내부 방침에 의한 정보보유 사유</dt>
                  <dd>본인확인 발생 및 차단기록, 휴대폰번호</dd>
                  <dd>보유 이유: 부정 이용 방지 및 민원 처리</dd>
                  <dd>보유 기간: 1년</dd>
                </dl>
                <dl>
                  <dt>나. 관계법령에 의한 정보보유 사유</dt>
                  <dd>이용자 불만 또는 분쟁 처리에 관한 기록</dd>
                  <dd>보유 이유: 전자상거래 등에서의 소비자보호에 관한 법률</dd>
                  <dd>보유 기간: 3년</dd>
                </dl>
              </dd>
            </dl>
          </dd>
        </dl>
      </div>

      <!-- LGU+ 개인정보이용동의 약관 -->
      <div class="area-terms" v-if="cellPhone === 'LGT' || cellPhone === 'LGR'">
        <dl>
          <dt>LG유플러스(주) 귀중</dt>
          <dd>
            LG유플러스(주) (이하 ‘회사’라 함)가 제공하는 본인확인서비스를 이용하기 위해, 다음과 같이 ‘회사’가 본인의
            개인정보를 수집 및 이용하고, 개인정보의 취급을 위탁하는 것에 동의합니다.
          </dd>
          <dd>
            <dl class="mark-dash">
              <dt>1. 수집항목</dt>
              <dd>고객의 생년월일, 이동전화번호, 성명, 성별, 내/외국인 구분</dd>
              <dd>연계정보(CI), 중복가입확인정보(DI)</dd>
              <dd>고객이 이용하는 웹사이트 등</dd>
            </dl>
            <dl class="mark-dash">
              <dt>2. 이용목적</dt>
              <dd>고객이 웹사이트 또는 Application 등에 입력한 본인확인정보의 정확성 여부 확인</dd>
              <dd>해당 웹사이트 또는 Application 등에 연계정보(CI)와 중복가입확인정보)DI) 전송</dd>
              <dd>서비스 관련 상담 및 불만 처리</dd>
              <dd>기타 법룰에서 정한 목적</dd>
            </dl>
            <dl class="mark-dash">
              <dt>3. 개인정보의 보유 및 이용기간</dt>
              <dd>
                고객이 서비스를 이용하는 기간에 한하여 보유 및 이용을 원칙으로 하되, 법률에서 정하는 경우 해당 기간까지
                보유 및 이용(세부사항은 ‘회사’의 개인정보처리방침에 따름)
              </dd>
            </dl>
            <dl>
              <dt>4. 본인확인서비스 제공을 위한 개인정보의 취급 위탁</dt>
              <dd>
                <div>
                  <table>
                    <caption>
                      수탁자, 위탁업무내용에 관한 표
                    </caption>
                    <colgroup>
                      <col style="width: 40%" />
                      <col style="width: 60%" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">수탁자</th>
                        <th scope="col">위탁업무내용</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>NICE평가정보(주)</td>
                        <td>본인확인 서비스 중계 업무 제공</td>
                      </tr>
                      <tr>
                        <td>CS리더, LB휴넷, 아이알링크 주식회사, (주)씨에스원파트너</td>
                        <td>고객센터 운영</td>
                      </tr>
                      <tr>
                        <td>미디어로그</td>
                        <td>PASS 어플리케이션 및 웹사이트 운영/관리</td>
                      </tr>
                      <tr>
                        <td>아톤</td>
                        <td>PASS 서비스 장애 및 VOC 처리</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>5. 상기 개인정보 수집 및 이용과 취급위탁에 동의하지 않는 경우, 서비스를 이용할 수 없습니다.</dt>
              <dd>
                ‘회사’가 제공하는 서비스의 개인정보 취급과 관련된 사항은 아래의 ‘회사’ 홈페이지에 기재된
                개인정보처리방침에 따릅니다.
              </dd>
              <dd>
                <div class="mark-dash">
                  LG유플러스(주): <a href="www.lguplus.co.kr" target="_blank">www.lguplus.co.kr</a>
                </div>
              </dd>
              <dd>본인은 상기 내용을 숙지하였으며 이에 동의합니다.</dd>
            </dl>
          </dd>
        </dl>
        <dl>
          <dt>[NICE평가정보(주) 귀중]</dt>
          <dd>
            NICE평가정보(주)(이하 ‘회사’)는 LG유플러스(주) 의 업무를 대행하여 휴대폰본인확인서비스를 제공함에 있어
            고객으로부터 개인정보를 수집하고 이용하기 위해 ‘정보통신망 이용촉진 및 정보보호에 관한 법률’에 따라서 다음과
            같이 본인의 동의를 받습니다.
          </dd>
          <dd>
            <dl class="mark-kor">
              <dt>1. 개인정보의 내용</dt>
              <dd>
                <em>정보항목</em>
                <div class="mark-dash">생년월일, 성명, 성별, 내/외국인 구분, 휴대폰번호, 가입한 이동통신사, IP주소</div>
              </dd>
              <dd>
                <em>수집방법</em>
                <ul class="mark-dash">
                  <li>본인인증 요청시 회원사 서비스 페이지 또는 본인인증 팝업창 페이지에서 이용자가 직접 입력</li>
                  <li>본인인증 과정에서 시스템에서 생성되는 정보 수집(Ex. IP주소)</li>
                </ul>
              </dd>
            </dl>
            <dl class="mark-kor">
              <dt>2. 개인정보의 이용목적과 제공정보</dt>
              <dd>
                <em>이용 목적</em>
                <ul class="mark-dash">
                  <li>고객의 회원가입, ID/PW찾기, 거래동의 등을 위한 휴대폰 본인확인 결과</li>
                  <li>휴대폰 소지 확인을 위한 SMS 인증번호 전송</li>
                  <li>부정 이용 방지 및 수사의뢰</li>
                  <li>휴대폰번호보호서비스 해제(서비스 가입자에 한함)</li>
                  <li>기타 법률에서 정한 목적</li>
                </ul>
              </dd>
              <dd>
                <em>제공하는 개인정보</em>
                <ul class="mark-dash">
                  <li>
                    성명, 성별, 생년월일, 내/외국인, 휴대폰번호, 이동통신사, IP주소, CI, DI [제공사: 서비스회원사(업체별
                    선택 및 이용방식에 따라 전부 또는 일부를 제공)]
                  </li>
                  <li>성명, 성별, 생년월일, 휴대폰번호, 이동통신사 [제공사: SKT, KT, LGU+]</li>
                  <li>휴대폰번호 [제공사: SKT, KT, LGU+]</li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>3. 개인정보의 보유 및 이용기간</dt>
              <dd>
                이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체없이 파기합니다. 단, 다음의
                정보에 대해서는 아래의 이유로 명기한 기간 동안 보유합니다.
                <dl>
                  <dt>가. 회사 내부 방침에 의한 정보보유 사유</dt>
                  <dd>본인확인 발생 및 차단기록, 휴대폰번호</dd>
                  <dd>보유 이유: 부정 이용 방지 및 민원 처리</dd>
                  <dd>보유 기간: 1년</dd>
                </dl>
                <dl>
                  <dt>나. 관계법령에 의한 정보보유 사유</dt>
                  <dd>이용자 불만 또는 분쟁 처리에 관한 기록</dd>
                  <dd>보유 이유: 전자상거래 등에서의 소비자보호에 관한 법률</dd>
                  <dd>보유 기간: 3년</dd>
                </dl>
              </dd>
            </dl>
          </dd>
        </dl>
      </div>
    </template>
    <template #bottom>
      <div class="button-wrapper">
        <button type="button" class="button" @click="_callbackClose">확인</button>
      </div>
    </template>
  </Layer>
</template>

<script setup lang="ts">
import { Layer } from '@/components/layer'
export interface Props {
  modelValue: boolean
  cellPhone: string
}

const props = withDefaults(defineProps<Props>(), {})

const state = reactive({
  isShow: props.modelValue
})

const emit = defineEmits<{
  (event: 'update:modelValue', result: boolean): void
}>()

watch(
  () => props.modelValue,
  newItems => {
    if (newItems) {
      state.isShow = true
    } else {
      state.isShow = false
    }
  },
  { immediate: true }
)

const _callbackClose = () => {
  emit('update:modelValue', false)
  console.log('레이어 닫기 콜백')
}
const _callbackOpen = () => {
  console.log('레이어 열기 콜백')
}
</script>

<style lang="scss">
@use '~/pages/common/terms/scss/terms';
</style>
