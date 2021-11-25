<template lang="html">
  <li
    :class="[
      'card',
      {
        'card--focused': isFocused,
        'card--medium': isMedium,
        'card--large': isLarge,
        'card--not-allowed': !isAlert && !isNavigation
      }
    ]"
    @click="onToggle"
  >
    <div
      :class="[
        'card__header-wrapper',
        { 'card__header-wrapper--reverse': isCoverPlacementTop }
      ]"
    >
      <slot name="card-cover" />
      <slot name="card-header" />
    </div>
    <slot name="card-body" />
    <slot name="card-footer" />
  </li>
</template>

<script>
import {
  COVER_PLACEMENT_TOP,
  COVER_PLACEMENT_BOTTOM,
  MODAL_SIZE_SMALL,
  MODAL_SIZE_MEDIUM,
  MODAL_SIZE_LARGE
} from '~/assets/constants/index.js';

export default {
  name: 'Card',

  props: {
    isLoading: {
      type: Boolean,
      default: false
    },

    coverPlacement: {
      type: String,
      default: COVER_PLACEMENT_BOTTOM
    },

    index: {
      type: Number,
      default: 0
    },

    isNavigation: {
      type: Boolean,
      default: false
    },

    isAlert: {
      type: Boolean,
      default: false
    },

    isLoading: {
      type: Boolean,
      default: false
    },

    size: {
      type: String,
      default: MODAL_SIZE_SMALL
    }
  },

  data() {
    return {
      isFocused: false
    };
  },

  computed: {
    isCoverPlacementTop() {
      return this.coverPlacement === COVER_PLACEMENT_TOP;
    },

    isMedium() {
      return this.size === MODAL_SIZE_MEDIUM;
    },

    isLarge() {
      return this.size === MODAL_SIZE_LARGE;
    }
  },

  methods: {
    onToggle() {
      if (this.isLoading || (!this.isAlert && !this.isNavigation)) return;

      this.isFocused = !this.isFocused;

      if (this.isAlert) {
        this.$emit('show-modal');
      } else if (this.isNavigation) {
        this.$router.push({
          path: '/booking'
        });
      } else {
        return;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  flex: 1 1 auto;
  max-width: 327px;
  cursor: pointer;
  border-radius: $default-radius;
  background-color: #fff;
  border: 1px solid $border-color;
  overflow: hidden;
  transition: border 0.1s ease-in, background 0.25s ease-in;

  @media screen and (min-width: 500px) {
    max-width: 544px;
  }

  &:hover {
    background: rgba(45, 45, 45, 0.04);
  }

  &--focused {
    border: 1px solid $color-blue;
    box-shadow: 0 0 0 4px rgba(47, 42, 141, 0.2);
  }

  &--not-allowed {
    cursor: not-allowed;
  }

  &--medium {
    width: 541px;
  }

  &--large {
    width: 544px;
  }

  &__header-wrapper {
    display: flex;
    flex-direction: column;

    &--reverse {
      flex-direction: column-reverse;
    }
  }
}
</style>
