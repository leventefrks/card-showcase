<template>
  <div class="not-found">
    <h1 class="not-found__title">404</h1>
    <p class="not-found__description">
      Sorry We can't find the page! Don't worry though, everything is still
      AWESOME!
    </p>
    <nuxt-link to="/" class="not-found__link">Back to the home page</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',

  props: ['error'],
};
</script>

<style lang="scss" scoped>
.not-found {
  min-width: 100vw;
  min-height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;

  &__title {
    padding-bottom: $default-padding;
    font-size: $jumbo-font-size;
    font-weight: 700;
    font-family: $font-family-secondary;
    color: $color-blue;
  }

  &__description {
    padding-bottom: $half-padding;
    font-size: $big-font-size;
    font-family: $font-family-primary;

    @media screen and (min-width: 500px) {
      font-size: $large-font-size;
    }
  }

  &__link {
    color: $color-blue;
    font-size: $small-font-size;
    font-family: $font-family-primary;
    transition: color 0.35s ease-in;

    &:hover {
      color: $color-blue-hover;
    }
  }
}
</style>
