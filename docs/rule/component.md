# 컴포넌트 규칙
컴포넌트는 Pascal Case를 사용한다.

## Pascal Case가 Kebab Case보다 유리한 부분
- 템플릿에서 웹 구성 요소와 같은 비 Vue 사용자 지정 요소를 사용하는 경우 PascalCase는 Vue 구성 요소가 명확하게 표시되도록 합니다.
- PascalCase는 JavaScript에서도 사용되기 때문에 템플릿에서 구성 요소 이름을 자동 완성할 수 있습니다.

## 잘 작성된 예시
```html
<template>
  <VideoPlayer />
</template>

<script lang="ts" setup>
import { VideoPlayer } from '@videojs-player/vue'
</script>
```

## 잘못 작성된 예시A
```html
<template>
  <video-player />
</template>

<script lang="ts" setup>
import { VideoPlayer } from '@videojs-player/vue'
</script>
```

## 잘못 작성된 예시B
```html
<template>
  <VideoPlayer></VideoPlayer>
</template>

<script lang="ts" setup>
import { VideoPlayer } from '@videojs-player/vue'
</script>
```
