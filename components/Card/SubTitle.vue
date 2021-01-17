<template lang="html" functional>
  <h3 class="sub-title"><slot /></h3>
</template>

<script>
export default {
  name: 'SubTitle'
};
</script>

<style lang="scss" scoped>
.sub-title {
  font-family: $font-family-primary;
  font-weight: 500;
  font-size: $small-font-size;
  line-height: 20px;
  color: $secondary-color;
}
</style>
