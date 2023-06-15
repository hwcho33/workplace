<template>
  <div id="file-upload">
    <div class="text-nm">
      <div class="text-amber-200 bg-neutral pa-3 text-3xl">File Upload 컴포넌트</div>
      <div class="my-6">
        <button type="button" @click="onPickClick" class="pa-3 bg-white mr-4">파일 선택하기</button>
        <button type="button" @click="onClickToDelete" class="pa-3 bg-amber">삭제</button>
      </div>
      <ul>
        <!-- 이미지 미리보기 -->
        <li v-for="file in files" :key="file.name">
          <img :src="callImage(file)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFileDialog } from '@/components/file-upload'

const { openDialog, files } = useFileDialog()

function onPickClick() {
  openDialog({
    accept: ['jpeg', 'png', 'jpg', 'giff'], // 파일 형식
    multiple: true // 다중 업로드
  })
}

function onClickToDelete() {
  files.value = []
}

function callImage(file) {
  return URL.createObjectURL(file)
}
</script>

<style lang="scss" scoped>
#file-upload {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
