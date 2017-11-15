<template>
  <button :type="nativeType" :disabled="loading" class="btn" :class="{
    [`btn--${type}`]: true,
    'btn--block': block,
    'btn--large': large,
    'btn--loading': loading
  }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'v-button',

  props: {
    type: {
      type: String,
      default: 'primary'
    },

    nativeType: {
      type: String,
      default: 'submit'
    },

    loading: {
      type: Boolean,
      default: false
    },

    block: Boolean,
    large: Boolean
  }
}
</script>

<style lang="scss">
@import '~global-sass';

.btn {
    &--primary {

    }
    &--block {
        display: block;
    }
    &--loading {

    }

    &--large {

    }
    &--medium {

    }
    &--small {

    }
}
</style>
