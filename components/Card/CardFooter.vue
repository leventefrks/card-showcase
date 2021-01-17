<template lang="html" functional>
  <footer class="card-footer">
    <slot />
  </footer>
</template>

<script>
export default {
  name: 'CardFooter'
};
</script>

<style lang="scss" scoped>
.card-footer {
  display: flex;
  min-width: 100%;
  font-family: $font-family-primary;
  font-weight: 500;
  font-size: $small-font-size;
  line-height: 20px;
  border-top: 1px solid $border-color;
  padding: $default-padding;
  color: $secondary-color;
  user-select: none;
}
</style>
