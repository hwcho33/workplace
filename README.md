<h1>NS Mall Common Front Office Framework</h1>

## Tech Stack
| Name                |  Description                                             
| ------------------- |  -------------------------------------------------------
| vue-router          |  라우팅
| pinia               |  상태 관리
| type-script         |  작성 언어
| vite                |  환경 구성 관련 (번들링, 플러그인 등)
| node-js             |  18 이상 (18 미만에서 구동 시 warning 노출)
| pnpm                |  의존성 관리
| unocss              |  on-demand atomic css 엔진


<br />

---


<br />

## Install and use

<br />

✅ pnpm 설치 방법 (독립형 스크립트)
<p>POSIX 시스템에서는 Node.js가 설치되어 있지 않아도 아래 스크립트를 사용하여 pnpm을 설치할 수 있습니다.</p>

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```
<br />

<p>curl이 설치되어 있지 않은 경우에는 wget을 사용할 수 있습니다.</p>

```bash
wget -qO- https://get.pnpm.io/install.sh | sh -
```
<br />

<p>윈도우 (PowerShell)</p>

```bash
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

<br />

---

<br />

✅ pnpm 설치 방법 (Corepack 사용)
<p>최신 Node.js에서는 패키지 관리자 관리를 Corepack을 통해 하고 있습니다.</p>

<br />

<p>코어팩 활성화</p>

```bash
corepack enable
```
<br />

<p>최신화 및 활성화</p>

```bash
corepack prepare pnpm@latest --activate
```
<br />

---

<br />


✅ 의존성 설치 (<strong>pnpm `설치 작업` 선행 후 진행</strong>)
> npm이 아닌 pnpm을 사용합니다. ( https://pnpm.io/ko/installation )

```bash
pnpm install
```

<br />

✅ 프로젝트 기동 (의존성 설치 후 진행 가능)
```bash
pnpm dev
```

<br />

✅ 프로젝트 빌드
```bash
pnpm build
```

<br />

✅ 의존성 재설치
```bash
pnpm reinstall
```


<br />

✅ dependencies에 추가
```bash
pnpm add (명칭)
```

<br />

✅ dev devDependencies에 추가
```bash
pnpm add -D (명칭)
```
<br />

---
## pnpm 명령어 모음

| Command                                   | Meaning                                  |
|-------------------------------------------|------------------------------------------|
| `pnpm add (명칭)`                         | `dependencies` 속성에 저장                |
| `pnpm add -D (명칭)`                      | `devDependencies` 속성에 저장             |
| `pnpm add -O (명칭)`                      | `optionalDependencies` 속성에 저장        |
| `pnpm add (명칭)@3.0.0`                   | `3.0.0` 특정 버전 명시하여 저장(OPTIONAL)  |

<br />

---

## 예외 사항
>  reason: self-signed certificate in certificate chain

위의 오류 메시지 발생 시 아래 커맨드 입력 후 재시도. (망 관련 이슈)

```bash
npm config set strict-ssl false -g
```


<br />

---

<br />

## Browser support
본 프로젝트 개발 브라우저 환경은 `Chrome 80+` 이상 사용을 권장합니다.

>상용 환경은 IE가 아닌 최신 버전의 브라우저만 지원합니다.

| IE  | Edge | Firefox | Chrome | Safari |
| :-: | :-:  | :-:     | :-:    | :-:    |
| 지원하지 않음 | 최신 2버전 | 최신 2버전 | 최신 2버전 | 최신 2버전 |
