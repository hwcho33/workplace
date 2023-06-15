<template>
  <div class="text-nm">
    <div class="text-amber-200 bg-neutral pa-3 text-3xl">서론</div>
    <p>
      페이지 추가하려면 여러가지 과정을 거쳐야 합니다.<br />
      직접 페이지를 추가하고 주소로 연결하는데 도움이 되는 내용들을 다룹니다.
    </p>

    <section class="mt-20">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">파일 추가하기</div>
      <p>
        페이지 추가하는 단계에서 처음으로 해줘야하는 일은
        <code class="text-red">.vue</code>파일을 추가해줘야 합니다.<br />
        추가하는 페이지 컴포넌트 파일의 위치는
        <code class="text-red">/src/pages/</code>을 시작으로 용도에 맞는 디렉토리를 만들고 컴포넌트 파일을 만듭니다.
      </p>
      <p>
        예를들어 라우트 주소가 <code class="text-red">/foo</code>로 만드려면
        <code class="text-red">/src/pages/foo/index.vue</code>가 되고, <code class="text-red">/foo/bar</code>라면
        <code class="text-red">/src/pages/foo/bar.vue</code>로 파일을 만들면 됩니다.
      </p>
      <p>컴포넌트 파일의 구조는 다음과 같습니다.</p>
      <AddFileMd />
    </section>

    <section class="mt-20">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">라우트에 페이지 추가</div>
      <p>
        페이지 컴포넌트 파일을 추가했으면 라우터에 컴포넌트 파일을 연결해 줘야합니다. <br />라우터에 연결해줘야 하는
        이유는 원하는 URL 주소로 접속하면 페이지 컴포넌트로 열리도록 하기 위함입니다.
      </p>
      <p>
        페이지하나의 객체의 모습은 다음과 같습니다.<br />
        이런 부분을 배열속에 넣어줘야 하는 것입니다.
      </p>
      <RouteMd />
      <p>
        라우트에 관한 자세한 정보는
        <a href="https://router.vuejs.org/" rel="noopener noreferrer" target="_blank" class="text-emerald">
          Vue Router
        </a>
        프로젝트 웹사이트를 참고하세요.
      </p>
    </section>
  </div>
</template>

<script lang="ts" setup>
import AddFileMd from './md/add-file.md'
import RouteMd from './md/route.md'
</script>
