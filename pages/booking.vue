<template lang="html">
  <div class="booking">
    <div class="message">
      <h1 class="booking__title">{{ title }}</h1>
      <p class="booking__description">
        {{ description }}
      </p>
      <nuxt-link to="/" class="booking__link">{{ link }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import {
  BOOKING_TITLE,
  BOOKING_DESCRIPTION,
  BOOKING_LINK,
} from '~/assets/constants/index.js';

export default {
  name: 'Booking',

  data() {
    return {
      title: BOOKING_TITLE,
      description: BOOKING_DESCRIPTION,
      link: BOOKING_LINK,
    };
  },
};
</script>

<style lang="scss" scoped>
.booking {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;

  .message {
    background-color: #f2f2f2;
    max-width: 300px;
    padding: $default-padding;

    @media screen and (min-width: 500px) {
      max-width: 350px;
    }
  }

  &__title {
    font-family: $font-family-secondary;
    font-size: $big-font-size;
    margin-bottom: 24px;
  }

  &__description {
    font-family: $font-family-secondary;
    line-height: 1.5;
    font-weight: 300;
    font-size: 20px;
    padding-bottom: $default-padding;
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
