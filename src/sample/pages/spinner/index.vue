<template>
  <div class="px-40">
    <div class="text-amber-200 bg-neutral pa-3 mb-5 text-3xl">옵션 조절</div>
    <div class="text-nm mb-30">
      <IndexMd />
    </div>
    <div class="text-amber-200 bg-neutral pa-3 mb-5 text-3xl">예시</div>
    <ul class="list-container">
      <li class="spinner-list">
        <Beat :loading="true" color="#999999" size="15px" margin="2px" radius="100%" />
      </li>
      <li class="spinner-list">
        <Bounce />
      </li>
      <li class="spinner-list">
        <Clip />
      </li>
      <li class="spinner-list">
        <Dot />
      </li>
      <li class="spinner-list">
        <Fade />
      </li>
      <li class="spinner-list">
        <Grid />
      </li>
      <li class="spinner-list">
        <Moon />
      </li>
      <li class="spinner-list">
        <Pacman />
      </li>
      <li class="spinner-list">
        <Pulse />
      </li>
      <li class="spinner-list">
        <Ring />
      </li>
      <li class="spinner-list">
        <Rise />
      </li>
      <li class="spinner-list">
        <Rotate />
      </li>
      <li class="spinner-list">
        <Scale />
      </li>
      <li class="spinner-list">
        <Skew />
      </li>
      <li class="spinner-list">
        <Square />
      </li>
      <li class="spinner-list">
        <Sync />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {
  Beat,
  Bounce,
  Clip,
  Dot,
  Fade,
  Grid,
  Moon,
  Pacman,
  Pulse,
  Ring,
  Rise,
  Rotate,
  Scale,
  Skew,
  Square,
  Sync
} from '@/components/spinner'

import IndexMd from './md/index.md'
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.list-container {
  border: 1px solid #eee;
  border-radius: 2px;
  background: #fff;

  display: -webkit-flex;
  display: flex;

  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;

  -webkit-align-items: center;
  align-items: center;

  -webkit-justify-content: space-around;
  justify-content: space-around;
}

.spinner-list {
  display: -webkit-flex;
  display: flex;

  flex: 0 2 auto;

  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;

  width: 220px;
  height: 220px;
  align-items: center;
  justify-content: center;
}
</style>
