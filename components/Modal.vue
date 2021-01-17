<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" role="dialog">
      <div class="modal" ref="modal">
        <header class="modal__header">
          <slot name="header">
            <h2>
              {{ title }}
            </h2>
          </slot>
        </header>

        <section class="modal__body">
          <slot name="body">
            {{ description }}
          </slot>
        </section>

        <footer class="modal__footer">
          <slot name="footer">
            <button
              type="button"
              class="modal__button"
              @click="close()"
              aria-label="Close modal"
            >
              {{ button }}
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import {
  MODAL_TITLE,
  MODAL_BODY_DESCRIPTION,
  MODAL_BUTTON
} from '@/assets/constants/index.js';

export default {
  name: 'Modal',

  data() {
    return {
      title: MODAL_TITLE,
      description: MODAL_BODY_DESCRIPTION,
      button: MODAL_BUTTON
    };
  },

  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(0.8px);
  background-color: rgba(0, 0, 0, 0.6);
}

.modal {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: $default-radius;
  overflow-x: auto;
  min-width: 300px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);

  &__header,
  &__footer {
    display: flex;
    padding: $default-padding;
  }

  &__header {
    align-items: center;
    justify-content: space-between;
    color: $color-blue;
    font-family: $font-family-secondary;
    user-select: none;
  }

  &__footer {
    justify-content: flex-end;
  }

  &__body {
    position: relative;
    padding: $default-padding;
    font-family: $font-family-primary;
    user-select: none;
  }

  &__button {
    padding: $half-padding;
    background-color: $color-blue;
    color: white;
    font-size: $small-font-size;
    border: 1px solid $color-blue;
    border-radius: $default-radius;
    cursor: pointer;
    user-select: none;
    transition: background 0.35s ease-in;

    &:hover {
      background-color: $color-blue-hover;
    }
  }
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
