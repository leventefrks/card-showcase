<template>
  <main class="main">
    <main-title />
    <card-container>
      <card
        v-for="card in cards"
        :key="card.id"
        :cover-placement="card.coverPlacement"
        :is-loading="isLoading"
        :is-alert="card.isAlert"
        :is-navigation="card.isNavigation"
        :size="card.size"
        @show-modal="onToggleModalVisibility()"
      >
        <template v-if="card.isCoverVisible" #card-cover>
          <card-cover :is-loading="isLoading">
            <nuxt-image
              src="/images/kasa.jpg"
              class="card-cover__image"
              alt="card-cover"
            />
          </card-cover>
        </template>

        <template v-if="card.isHeaderVisible" #card-header>
          <card-header
            :is-cover-placement-top="card.coverPlacement === 'top'"
            :is-loading="isLoading"
          >
            <template #thumbnail>
              <thumbnail>
                <nuxt-image
                  src="images/kasa.jpg"
                  alt="thumbnail"
                  class="thumbnail__image"
                />
              </thumbnail>
            </template>
            <template #title>
              <card-title>{{ card.title }}</card-title>
            </template>
            <template #sub-title>
              <sub-title>{{ card.subTitle }}</sub-title>
            </template>
          </card-header>
        </template>

        <template #card-body>
          <card-body :is-loading="isLoading">
            {{ card.body }}
          </card-body>
        </template>

        <template v-if="card.isFooterVisible && !isLoading" #card-footer>
          <card-footer>
            {{ card.footer }}
          </card-footer>
        </template>
      </card>
    </card-container>
    <modal v-show="isModalVisible" @close="onToggleModalVisibility()" />
  </main>
</template>

<script>
import {
  CARD_TITLE,
  CARD_SUB_TITLE,
  CARD_BODY_DESCRIPTION,
  CARD_FOOTER,
  LOADING_DURATION,
  CARD_SETTINGS,
} from '~/assets/constants/index.js';
import Card from '~/components/Card/Card.vue';
import CardContainer from '~/components/Card/CardContainer.vue';
import CardCover from '~/components/Card/CardCover.vue';
import CardHeader from '~/components/Card/CardHeader.vue';
import CardTitle from '~/components/Card/CardTitle.vue';
import SubTitle from '~/components/Card/SubTitle.vue';
import CardBody from '~/components/Card/CardBody.vue';
import CardFooter from '~/components/Card/CardFooter.vue';
import Thumbnail from '~/components/Card/Thumbnail.vue';
import MainTitle from '~/components/MainTitle.vue';
import Modal from '~/components/Modal.vue';

export default {
  components: {
    CardContainer,
    CardHeader,
    CardFooter,
    CardCover,
    Thumbnail,
    MainTitle,
    SubTitle,
    CardBody,
    Modal,
    Card,
  },

  data() {
    return {
      cards: CARD_SETTINGS,
      isLoading: true,
      isModalVisible: false,
    };
  },

  mounted() {
    this.onLoading();
  },

  methods: {
    onLoading() {
      return setTimeout(() => {
        this.isLoading = !this.isLoading;
      }, LOADING_DURATION);
    },

    onToggleModalVisibility() {
      this.isModalVisible = !this.isModalVisible;
    },
  },
};
</script>
<style scoped>
.main {
  min-height: 100vh;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
