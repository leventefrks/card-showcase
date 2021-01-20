<template lang="html">
  <div class="card-body">
    <div v-if="isLoading" class="card-body__wrapper">
      <loader v-for="index in 4" :key="index" :min-width="40" :max-width="95" />
    </div>
    <slot v-else />
  </div>
</template>

<script>
export default {
  name: 'CardBody',

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-body {
  flex: 1 1 auto;
  height: 188px;
  min-width: 280px;
  padding: $default-padding;
  font-family: $font-family-primary;
  line-height: 20px;
  color: $primary-color;
  user-select: none;
  overflow: hidden;

  &__wrapper {
    display: flex;
    flex-direction: column;
  }
}
</style>
