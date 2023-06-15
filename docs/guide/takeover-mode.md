## Takeover Mode 개요

<br />

현재 본 프로젝트에서는 `Typescript` 와 `Volar` 를 함께 사용합니다.

또한, `Vite` 기반의 `Typescript` 지원 `Vue` 프로젝트를 스캐폴딩 하는 옵션을 제공한다.

`Vue` 공식문서에서도 `Volar` 의 기능을 추천하는 만큼 `VSCode` 와 `Volar Extention` 의 조합을 권장한다.

본 프로젝트는 수동으로 `tsconfig.json` 을 작성하였으며, 이로 인해 권장하는 `config` 옵션을 충족한 상태입니다.

관련 링크 : [https://vuejs.org/guide/typescript/overview.html#configuring-tsconfig-json](https://vuejs.org/guide/typescript/overview.html#configuring-tsconfig-json)

## Takeover Mode 란 무엇인가?

<br />

위에서 작성했던 내용에도 포함되어 있지만, `Vue` 진영에서는 `Volar` 를 통해서 `Typescript` 언어 서비스 인스턴스를 만들고 `Vue SFC` 에서 사용합니다.

하지만, 동시에 우리가 `IDE` 로 `VScode` 를 사용하게 되면 `VScode` 자체적으로 제공하는 내장 `Typescript` 언어 서비스에서 중복으로 처리가 되게 됩니다.

이는 `VScode` 에서 두가지 `Typescript` 서비스 인스턴스를 실행하기 때문에 `비효율적` 이며 문제가 발생될 수 있습니다.

이러한 부분을 해결하고 `Volar` 의 성능을 향상시키기 위해서 `Takerover Mode` 를 제공합니다.

이는 `Volar` 에서 `Vue` 및 `Typescript` 에 대한 지원을 단일 인스턴스에서 지원하게 됩니다.

## Takeover Mode 활성화 방법

<br />

`Takeover Mode` 를 활성화 하기 위해서 `VScode`에 내장 되어 있는 `TS 언어 서비스` 를 비활성화 해야 합니다.

1. `Ctrl + Shift + P` 를 통해 명령 팔레트를 불러온다.

<img width="721" alt="image" src="https://user-images.githubusercontent.com/56063287/217677575-1bc73491-4067-40f6-bd07-894882d69b2c.png">

2. 나타나는 `Extension` 에서 `@builtin typescript` 를 입력 후 현 프로젝트 내에서 `Disable` 처리 한다.

<img width="412" alt="image" src="https://user-images.githubusercontent.com/56063287/217677780-7eff01af-ce74-474c-8562-c499a6dd1c66.png">

3. `Vscode` 를 재기동 하면 완료된다.