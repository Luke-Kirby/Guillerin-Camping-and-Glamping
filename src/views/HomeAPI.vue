<template>
    <CompRenderApiComponents v-if="pageData" :pageData="pageData" />
    <Accommodation v-bind="accommodation"/>
    <Tiles v-bind="facilities"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Accommodation from "@/components/contextual/Accomodation.vue";
import Tiles from "@/components/Tiles.vue";
import { PageService } from "../core/services/page.service";
import CompRenderApiComponents from "@/components/render-api-components/RenderApiComponents.vue";
import pageState from "../core/store/global";

const pageService = new PageService();

export default defineComponent({
  name: "ViewHomeAPI",
  components: {
    CompRenderApiComponents,
    Accommodation,
    Tiles
  },
  data() {
    return {
      pageData: null as null | object,
      accommodation: {
        title: () => this.$t('home.accommodation.title'),
        subTitle: () => this.$t('home.accommodation.sub-title'),
        main: {
          title: () => this.$t('home.accommodation.main.title'),
          subTitle: () => this.$t('home.accommodation.main.sub-title'),
          imagePath: "images/home/fixed-caravans.jpeg",
          content: [
            () => this.$t('home.accommodation.main.content'),
          ],
          details: [() => this.$t('home.accommodation.main.detail')],
          action: {label: () => this.$t('home.accommodation.main.action')},
        },
        second: {
          title: () => this.$t('home.accommodation.second.title'),
          imagePath: "images/home/glamps.jpeg",
          action: {label: () => this.$t('home.accommodation.second.action')},
        },
        third: {
          title: () => this.$t('home.accommodation.third.title'),
          imagePath: "images/home/pitches.png",
          action: {label: () => this.$t('home.accommodation.third.action')},
        },
      },
      facilities: {
        title: () => this.$t('home.facilities.title'),
        subTitle: () => this.$t('home.facilities.sub-title'),
        cards: [
          {
            imagePath: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/guillerin/7848a114-10a4-435d-a22b-8d18974f919a.jpeg',
            title: () => this.$t('home.facilities.cards.bathrooms.title'),
            subTitle: () => this.$t('home.facilities.cards.bathrooms.sub-title'),
            content: [() => this.$t('home.facilities.cards.bathrooms.content')]
          },
          {
            imagePath: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/guillerin/872bae67-d226-4bea-8857-3ba91c4ba8a8.png',
            title: () => this.$t('home.facilities.cards.pool.title'),
            subTitle: () => this.$t('home.facilities.cards.pool.sub-title'),
            content: [() => this.$t('home.facilities.cards.pool.content')]
          },
          {
            imagePath: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/guillerin/bbd085cf-6c86-46bc-a944-0920bf9e33c9.png',
            title: () => this.$t('home.facilities.cards.food.title'),
            subTitle: () => this.$t('home.facilities.cards.food.sub-title'),
            content: [() => this.$t('home.facilities.cards.food.content')]
          }
        ]
      }
    };
  },
  async mounted() {
    window.scrollTo(0, 0)
    this.pageData = pageState().page.value
  }
});
</script>
