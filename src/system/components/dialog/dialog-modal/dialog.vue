<template>
  <teleport to="body">
    <dialog class="base-dialog" ref="dialog">
      <form method="dialog">
        <div class="dialog-container">
          <div v-if="options.isShowTitle" class="dialog-header">
            <p v-if="options.title">
              {{ options.title }}
            </p>
            <slot v-else name="title"></slot>
          </div>

          <div class="dialog-contents">
            <p v-if="options.message">
              {{ options.message }}
            </p>
            <slot v-else name="contents"></slot>
          </div>

          <div v-if="options.isShowButton" class="dialog-bottom">
            <button class="btn cancel" @click="close(true)">
              {{ options.firstButtonLabel }}
            </button>
            <button v-if="options.isShowTwoButton" class="btn confirm" @click="close(false)">
              {{ options.secondButtonLabel }}
            </button>
          </div>
        </div>
      </form>
    </dialog>
  </teleport>
</template>

<script lang="ts" setup>
/**
 * @type isShowTitle?: boolean - 타이틀 노출여부
 * @type isShowButton?: boolean - 하단버튼 노출여부
 * @type isShowTwoButton?: boolean - 버튼2개 사용여부
 * @type title?: string - 헤더 타이틀
 * @type message?: string - 본문 내용
 * @type firstButtonLabel?: string - 첫번째 버튼라벨
 * @type secondButtonLabel?: string - 두번째 버튼라벨
 * @type callbackFunction?: Function - 콜백 함수
 */
interface DialogType {
  isShowTitle?: boolean
  isShowButton?: boolean
  isShowTwoButton?: boolean
  title?: string
  message?: string
  firstButtonLabel?: string
  secondButtonLabel?: string
  callbackFunction?: Function
}

const initialOptions: DialogType = {
  isShowTitle: false,
  isShowButton: true,
  isShowTwoButton: false,
  title: undefined,
  message: undefined,
  firstButtonLabel: '확인',
  secondButtonLabel: '취소',
  callbackFunction: undefined
}

const [options, dialog] = [ref<DialogType>(initialOptions), ref()]

const open = (optionsParam: DialogType) => {
  options.value = { ...options.value, ...optionsParam }
  dialog.value.showModal()
}

const close = (isConfirm: boolean) => {
  if (options.value.callbackFunction) options.value.callbackFunction(isConfirm)
  options.value = initialOptions
  dialog.value.close()
}

defineExpose({
  open,
  close
})
</script>

<style lang="scss">
@use '~/scss/common/utils' as *;
@use '~/scss/common/index' as *;

.base-dialog {
  border: 0;
  background-color: transparent;

  // desktop
  #desktop & {
    &::backdrop {
      background: rgba(0, 0, 0, 0);
    }
  }

  &::backdrop {
    background: rgba(0, 0, 0, 0.6);
  }

  .dialog-container {
    background: var(--white);
    min-width: rem(280);
    border-radius: rem(20);
    box-shadow: 0 rem(4) rem(12) rgba(0, 0, 0, 0.3);
  }

  .dialog-header {
    position: relative;
    padding: rem(16);
    border-bottom: rem(1) solid var(--gray-600);

    .dialog-colse {
      position: absolute;
      top: rem(10);
      right: rem(10);
      bottom: rem(10);
      width: rem(30);
      height: rem(30);
      margin: auto 0;
      border: 0;
      border-radius: 50%;
      background-color: #ccc;
    }
  }

  .dialog-contents {
    padding: rem(24);
    font-size: rem(14);
    line-height: 1.5;
  }

  .dialog-bottom {
    display: flex;
    justify-content: flex-end;
    padding: 0 rem(20) rem(20);

    button {
      border: 0;
      height: rem(36);
      padding: 0 rem(20);
      font-size: rem(14);
      line-height: 1.4;
      border-radius: rem(18);
      background-color: var(--gray-900);
      color: var(--white);
      font-weight: 700;

      + button {
        margin-left: 0.8rem;
      }

      &:first-child {
        background-color: var(--white);
        border: rem(1) solid var(--gray-300);
        color: var(--gray-900);
      }

      &:last-child {
        background-color: var(--gray-900);
        color: var(--white);
      }
    }
  }
}
</style>
