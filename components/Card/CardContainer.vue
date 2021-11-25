<template>
  <ul class="card-container">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'CardContainer'
};
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  justify-items: center;
  gap: 25px;
  min-height: 100%;
  margin-top: 20px;
  padding: 10px;

  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 20px;
  }
}
</style>
