<template lang="html">
  <div
    :class="[
      'card-header',
      { 'card-header--extra-gutter': isCoverPlacementTop },
    ]"
  >
    <slot name="card-header">
      <loader
        v-if="isLoading"
        :width="'60px'"
        :height="'60px'"
        :is-radius="true"
        :is-margin-right="true"
      />
      <slot v-else name="thumbnail" />
      <div class="card-header__wrapper">
        <loader v-if="isLoading" :width="'80px'" :height="'20px'" />
        <slot v-else name="title" />
        <loader v-if="isLoading" :min-width="40" :max-width="60" />
        <slot v-else name="sub-title" />
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'CardHeader',

  props: {
    isCoverPlacementTop: {
      type: Boolean,
      default: 'bottom',
    },

    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  align-items: center;
  min-width: 100%;
  padding: $default-padding $default-padding 0;
  user-select: none;

  &--extra-gutter {
    padding-bottom: $default-padding;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
  }
}
</style>
