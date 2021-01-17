<template lang="html">
  <span
    :style="{ height, width: computedWidth }"
    :class="[
      'loader',
      {
        'loader--is-radius': isRadius,
        'loader--right-gutter': isMarginRight
      }
    ]"
  />
</template>

<script>
export default {
  name: 'Loader',

  props: {
    maxWidth: {
      default: 100,
      type: Number
    },

    isMarginRight: {
      type: Boolean,
      default: false
    },

    minWidth: {
      default: 40,
      type: Number
    },

    isRadius: {
      type: Boolean,
      default: false
    },

    width: {
      default: null,
      type: String
    },

    height: {
      default: '16px',
      type: String
    }
  },
  computed: {
    computedWidth() {
      return (
        this.width ||
        `${Math.floor(
          Math.random() * (this.maxWidth - this.minWidth) + this.minWidth
        )}%`
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.loader {
  display: inline-block;
  position: relative;
  overflow: hidden;
  background: rgba(45, 45, 45, 0.05);
  border-radius: $small-radius;
  margin-bottom: 4px;

  &--is-radius {
    border-radius: 50%;
  }

  &--right-gutter {
    margin-right: $default-padding;
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 0.9s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>
