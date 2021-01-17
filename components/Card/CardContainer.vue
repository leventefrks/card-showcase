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
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-template-rows: auto;
  grid-gap: 24px;
  justify-items: center;
  margin-top: 20px;
  padding: 10px;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(327px, 1fr));
  }
}
</style>
