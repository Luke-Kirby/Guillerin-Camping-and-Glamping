<template>
  <!--  <template v-if="state">-->
  <!--    <div v-if="state().loading.value" class="loading">-->
  <!--      <div class="spinner-border" role="status">-->
  <!--        <span class="visually-hidden">Loading...</span>-->
  <!--      </div>-->
  <!--    </div>-->
  <div class="home"> <!--    <div class="home" v-else>-->
    <Header v-bind="header"/>
    <router-view/>
    <ImageSection v-bind="book"/>
  </div>
  <CompFooter />
  <!--  </template>-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/non-contextual/header/Header.vue";
import ImageSection from "@/components/non-contextual/image-section/ImageSection.vue";
import { shellHeaderConfig } from "./shell.config";
import CompFooter from "@/components/Footer.vue";

export default defineComponent({
  name: "ViewShell",
  components: {CompFooter, Header, ImageSection},
  data() {
    return {
      // state: this.$state,
      header: shellHeaderConfig,
      book: {
        imagePath: "images/home/book.jpg",
        title: "",
        subTitle: {
          en: "",
          fr: ""
        },
        action: {
          label: {
            en: 'Book Now',
            fr: 'Reserve maintenant'
          },
          press: () => {
            if(this.$i18n.locale === 'fr'){
             return window.open("https://guillerin-caravan-and-glamping.amenitiz.io/fr/booking/room", '_blank')
            } else {
              return window.open("https://guillerin-caravan-and-glamping.amenitiz.io/en/booking/room", '_blank')
            }
          }
        },
      }
    }
  },
  async mounted() {
    // await this.state().loadPage()
  }
});
</script>
<style lang="scss">
.home {
  overflow: hidden;
}

.rural-camping {
  .rural-camping-img {
    width: 150px
  }
}
</style>
