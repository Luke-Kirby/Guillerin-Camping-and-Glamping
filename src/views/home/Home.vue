<template>
  <div>
    <ImageSection v-bind="cover"/>
    <TextImage v-bind="gallery"/>
    <Accommodation v-bind="accommodation"/>
    <Tiles v-bind="facilities"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ImageSection from "@/components/non-contextual/image-section/ImageSection.vue";
import TextImage from "@/components/non-contextual/test-image/TextImage.vue";
import Accommodation from "@/components/contextual/Accomodation.vue";
import Tiles from "@/components/Tiles.vue";
import {homeCoverConfig} from "./home.config";

export default defineComponent({
  name: "ViewHome",
  data() {
    return {
      cover: {
        isFullPage: true,
        imagePath: "images/home/cover.jpeg",
        title: {
          en: 'Welcome to Nature Camping Guillerin',
          fr: 'Bienvenue au Camping Nature Guillerin'
        },
        subTitle: {
          en: 'Discover Our Remote Glamp And Caravan Experience',
          fr: 'Découvrez nos hébergements en pleine nature'
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
        }
      },
      gallery: {
        imagePath: "images/home/collection.png",
        title: () => this.$t('home.gallery.title'),
        subTitle: () => this.$t('home.gallery.sub-title'),
        content: [
          () => this.$t('home.gallery.content'),
        ],
        action: {
          label: () => this.$t('home.gallery.action'),
          press: () => this.$router.push("gallery")
        },
      },
      accommodation: {
        title: () => this.$t('home.accommodation.title'),
        subTitle: () => this.$t('home.accommodation.sub-title'),
        main: {
          title: () => this.$t('home.accommodation.main.title'),
          subTitle: () => this.$t('home.accommodation.main.sub-title'),
          imagePath: "https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/home-acom/a39c179a-ae09-46de-9a02-9c3f798c574e.jpeg",
          content: [
            () => this.$t('home.accommodation.main.content.0'),
            () => this.$t('home.accommodation.main.content.1'),
            () => this.$t('home.accommodation.main.content.2'),
            () => this.$t('home.accommodation.main.content.3'),
            () => this.$t('home.accommodation.main.content.4'),
            () => this.$t('home.accommodation.main.content.5'),

          ],
          details: [() => this.$t('home.accommodation.main.detail')],
          action: {
            label: () => this.$t('home.accommodation.main.action'),
            press: () => {
              if(this.$i18n.locale === 'fr'){
                return window.open("https://guillerin-caravan-and-glamping.amenitiz.io/fr/booking/room", '_blank')
              } else {
                return window.open("https://guillerin-caravan-and-glamping.amenitiz.io/en/booking/room", '_blank')
              }
            }
          },
        },
        second: {
          title: () => this.$t('home.accommodation.second.title'),
          imagePath: "https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/home-acom/83fccea5-578d-41be-a039-aa491d91223f.jpeg",
          action: {
            label: () => this.$t('home.accommodation.second.action'),
            press: () => {
              if(this.$i18n.locale === 'fr'){
                return window.open("https://guillerin-caravan-and-glamping.amenitiz.io/fr/booking/room", '_blank')
              } else {
                return window.open("https://guillerin-caravan-and-glamping.amenitiz.io/en/booking/room", '_blank')
              }
            }
          },
        },
        third: {
          title: () => this.$t('home.accommodation.third.title'),
          imagePath: "https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/home-acom/db847a87-2c34-47e0-8001-85eb539ab6e2.jpeg",
          action: {
            label: () => this.$t('home.accommodation.third.action'),
            press: () => {
              window.open("https://guillerin-caravan-and-glamping.amenitiz.io/en/booking/room", '_blank');
            }
          },
        },
        fourth: {
          title: () => this.$t('home.accommodation.fourth.title'),
          imagePath: "https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/home-acom/33bc32b0-4baa-4fad-a835-75b37806774d.jpeg",
          action: {
            label: () => this.$t('home.accommodation.fourth.action'),
            press: () => {
              window.open("https://guillerin-caravan-and-glamping.amenitiz.io/en/booking/room", '_blank');
            }
          },
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
  components: {
    ImageSection,
    TextImage,
    Accommodation,
    Tiles
  },
  mounted() {
    window.scrollTo(0, 0)
  }
});
</script>