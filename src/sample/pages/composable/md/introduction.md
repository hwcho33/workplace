기존 AS-IS 앱에서 우리는 **mixin** 을 활용하여 도메인적인 부분의 함수 로직 혹은 재사용가능한 함수를 작성하였습니다.

이번 프로젝트에서 **Vue3** 로 버전업을 진행하게 되면서 더이상 **Mixin** 의 방식의 복잡한 함수 재사용이 아닌 이를 대체하기 위해 새로운 개발방식인 **Composable(컴포저블)** 을 통해서 재사용하기를 권고 하고 있습니다.

<img width="834" alt="image" src="https://user-images.githubusercontent.com/56063287/211442067-22743307-db64-4b78-80fc-af30825720f7.png">

우리는 기존의 **Optional API** 가 아닌 **Composition API** 를 사용함에 따라 이러한 **Mixin** 또한 **Composable** 한 방식으로 변경하게 되었습니다.

