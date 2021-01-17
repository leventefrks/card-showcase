<template lang="html">
  <div class="thumbnail">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Thumbnail'
};
</script>

<style lang="scss" scoped>
.thumbnail {
  width: 60px;
  height: 60px;
  margin-right: 24px;
  flex-shrink: 0;

  &__image {
    max-width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
