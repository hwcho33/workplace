# build-test 방법
build 후 결과물 dist 폴더를 http-server 의존성 brotli 방식을 통해 로컬에서 기동 후 웹브라우저와 콘솔에서 검증합니다.

<br />
<br />

## 작업 순서
1 > pnpm build 명령어를 실행
```bash
pnpm build
```

2 > pnpm test:br 명령어를 실행
```bash
pnpm test:br
```

3> 콘솔 창과 웹 브라우저를 통해 검수 진행
