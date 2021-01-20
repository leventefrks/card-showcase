<template lang="html" functional>
  <div class="title">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CardTitle',
};
</script>

<style lang="scss" scoped>
.title {
  font-family: $font-family-secondary;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: $primary-color;
}
</style>
