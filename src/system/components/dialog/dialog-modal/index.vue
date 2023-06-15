<template>
  <teleport to="body">
    <dialog class="base-dialog" :id="props.optionProps.addSelector" :class="props.optionProps.addSelector">
      <form method="dialog">
        <div class="dialog-container">
          <div class="dialog-header" v-if="isHeader">
            <slot name="header"></slot>
          </div>

          <div class="dialog-contents">
            <p v-if="props.optionProps.message">
              {{ props.optionProps.message }}
            </p>
            <slot name="contents" v-else></slot>
          </div>

          <div class="dialog-bottom" v-if="isBottom">
            <button class="btn cancel" @click="close">
              {{ firstButton }}
            </button>
            <button class="btn confirm" @click="close" v-if="props.optionProps.secondButton !== undefined">
              {{ secondButton }}
            </button>
          </div>
        </div>
      </form>
    </dialog>
  </teleport>
</template>

<script lang="ts" setup>
interface OptionPropsType {
  optionProps: {
    addSelector: string
    message: string | boolean
    header: boolean
    bottom: boolean
    firstButton: string | boolean
    secondButton: string | boolean
  }
}

const props = defineProps<OptionPropsType>()

const isHeader = props.optionProps.header !== undefined ? props.optionProps.header : ref(false)

const isBottom = props.optionProps.bottom !== undefined ? props.optionProps.bottom : ref(true)

const firstButton = props.optionProps.firstButton !== undefined ? props.optionProps.firstButton : ref('확인')

const secondButton = props.optionProps.secondButton !== undefined ? props.optionProps.secondButton : ref('취소')

const open = () => {
  const targetDialog = document.getElementById(`${props.optionProps.addSelector}`) as HTMLDialogElement
  targetDialog.showModal()
}

const close = () => {
  const targetDialog = document.getElementById(`${props.optionProps.addSelector}`) as HTMLDialogElement
  targetDialog.close()
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
