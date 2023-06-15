**깊은 복사**(deep)는 객체를 복사 할 때, **객체**와 **인스턴스 변수**까지 복사하는 방식입니다.

**얕은 복사**(shallow)와 달리 주소 값을 **참조**하는것이 아니라 **새 주소 값**에 담기 떄문에 주소 값이 **공유**되지 않습니다.

깊은 복사하는 방법으로 **Object.assign()**, **spread** 연산으로도 진행 할 수 있지만, 깊은 **depth** 까지 완벽하게 되지 않는 경우가 있습니다.

프로젝트 구성으로 **lodash-es** 의존성을 탑재했으니, 다음 예제를 참고하시면 됩니다.