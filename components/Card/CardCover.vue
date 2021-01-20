<template lang="html">
  <header class="card-cover">
    <loader v-if="isLoading" :height="'200px'" :width="'100%'" />
    <slot v-else />
  </header>
</template>

<script>
export default {
  name: 'CardCover',

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.card-cover {
  min-width: 100%;
  height: 200px;

  &__image {
    max-width: 100%;
    height: 100%;
    user-select: none;
  }
}
</style>
