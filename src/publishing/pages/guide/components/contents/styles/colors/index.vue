<template>
  <ContentBox v-if="checkMapId(id)" :id="id" :title="id">
    <template #description>
      <!-- NS Main Colors -->
      <MainColorMd />
      <ColorList :items="itemsList1_1" />
      <br />
      <ColorList :items="itemsList1_2" />
      <br /><br />
      <!--// NS Main Colors -->

      <!-- NS Grayscale -->
      <GrayscaleColorMd />
      <ColorList :items="itemsList2_1" />
      <br /><br />
      <!--// NS Grayscale -->

      <!-- NS Semantic Color -->
      <SemanticColorMd />
      <ColorList :items="itemsList3_1" />
      <br /><br />
      <!--// NS Semantic Color -->
    </template>
  </ContentBox>
</template>
<script lang="ts">
export default {
  name: 'StylesColors'
}
</script>
<script lang="ts" setup>
import ContentBox from '&/pages/guide/components/content-box/index.vue'
import ColorList from './color-list.vue'
import useMapId from '&/pages/guide/use-map-id'
import MainColorMd from './md/main-color.md'
import GrayscaleColorMd from './md/grayscale-color.md'
import SemanticColorMd from './md/semantic-color.md'
const { addIter, checkMapId } = useMapId()

// id
const id = 'color'
addIter({
  category: 'styles',
  id
})

const itemsList1_1 = [
  {
    title: 'RED-900',
    variableName: 'var(--red-900)',
    hexColorCode: '#5C0101'
  },
  {
    title: 'RED-800',
    variableName: 'var(--red-800)',
    hexColorCode: '#820101'
  },
  {
    title: 'RED-700',
    variableName: 'var(--red-700)',
    hexColorCode: '#A00303'
  },
  {
    title: 'RED-600',
    variableName: 'var(--red-600)',
    hexColorCode: '#C20404'
  },
  {
    title: 'RED-500',
    variableName: 'var(--red-500)',
    hexColorCode: '#DC0A0A'
  },
  {
    title: 'RED-400',
    variableName: 'var(--red-400)',
    hexColorCode: '#F20E0E'
  },
  {
    title: 'RED-300',
    variableName: 'var(--red-300)',
    hexColorCode: '#F63846'
  },
  {
    title: 'RED-200',
    variableName: 'var(--red-200)',
    hexColorCode: '#FF6873'
  },
  {
    title: 'RED-100',
    variableName: 'var(--red-100)',
    hexColorCode: '#FFBBC0'
  },
  {
    title: 'RED-50',
    variableName: 'var(--red-50)',
    hexColorCode: '#FFE5E7'
  }
]

const itemsList1_2 = [
  {
    title: 'NS 서비스의 메인 컬러',
    variableName: 'var(--ns-red)',
    hexColorCode: '#DC0A0A'
  },
  {
    title: 'NS coral-200',
    variableName: 'var(--ns-coral-200)',
    hexColorCode: '#f63846'
  },
  {
    title: 'NS coral-100',
    variableName: 'var(--ns-coral-100)',
    hexColorCode: '#fc5460'
  }
]

const itemsList2_1 = [
  {
    title: 'Black',
    variableName: 'var(--black)',
    hexColorCode: '#000'
  },
  {
    title: 'Gray-900',
    variableName: 'var(--gray-900)',
    hexColorCode: '#111111'
  },
  {
    title: 'Gray-800',
    variableName: 'var(--gray-800)',
    hexColorCode: '#3F3F3F'
  },
  {
    title: 'Gray-700',
    variableName: 'var(--gray-700)',
    hexColorCode: '#585858'
  },
  {
    title: 'Gray-600',
    variableName: 'var(--gray-600)',
    hexColorCode: '#757575'
  },
  {
    title: 'Gray-500',
    variableName: 'var(--gray-500)',
    hexColorCode: '#9e9e9e'
  },
  {
    title: 'Gray-400',
    variableName: 'var(--gray-400)',
    hexColorCode: '#B1B1B1'
  },
  {
    title: 'Gray-300',
    variableName: 'var(--gray-300)',
    hexColorCode: '#DDDDDD'
  },
  {
    title: 'Gray-200',
    variableName: 'var(--gray-200)',
    hexColorCode: '#ECECEC'
  },
  {
    title: 'Gray-100',
    variableName: 'var(--gray-100)',
    hexColorCode: '#f6f6f6'
  },
  {
    title: 'Gray-50',
    variableName: 'var(--gray-50)',
    hexColorCode: '#f8f8f8'
  },
  {
    title: 'White',
    variableName: 'var(--white)',
    hexColorCode: '#fff'
  }
]
const itemsList3_1 = [
  {
    title: '실패 색상',
    variableName: 'var(--ns-error)',
    hexColorCode: '#fa3307'
  },
  {
    title: '신뢰성 정보 색상',
    variableName: 'var(--ns-info)',
    hexColorCode: '#2a81fd'
  },
  {
    title: '액션 성공 색상',
    variableName: 'var(--ns-success)',
    hexColorCode: '#41aa0f'
  },
  {
    title: '경고, 주의 색상',
    variableName: 'var(--ns-warning)',
    hexColorCode: '#f7b42a'
  },
  {
    title: 'Ns ssing',
    variableName: 'var(--ns-ssing)',
    hexColorCode: '#0c8cef'
  },
  {
    title: 'Ns happy deal',
    variableName: 'var(ns-happy-deal)',
    hexColorCode: '#db6f00'
  }
]
</script>
<style lang="scss" scoped></style>
