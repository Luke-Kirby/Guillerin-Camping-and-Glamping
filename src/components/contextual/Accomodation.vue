<template>
  <section class="site-section bg-light">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-12 heading-wrap text-center">
<!--          <h4 class="sub-heading" v-if="subTitle">{{ print(subTitle) }}</h4>-->
          <h2 class="heading">{{ print(title) }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          <div class="media d-block room mb-0">
            <figure class="w-100">
              <img
                  :src="main.imagePath"
                  alt="Generic placeholder image"
                  class="img-fluid w-100"
              />
              <div class="overlap-text">
                <span>
                  {{ print(main.subTitle) }}
                  <span class="ion-ios-star"></span>
                  <span class="ion-ios-star"></span>
                  <span class="ion-ios-star"></span>
                </span>
              </div>
            </figure>
            <div class="media-body">
              <h3 class="mt-0">
                <a href="#">{{ print(main.title) }}</a>
              </h3>
              <template v-if="main.content && main.content.length > 0">
                <p
                    class="mb-2"
                    v-for="(c, i) in main.content"
                    :key="`accommodation-cont-${i}`"
                >
                  {{ print(c) }}
                </p>
              </template>
            </div>
          </div>
        </div>
        <div class="col-md-5 room-thumbnail-absolute">
          <a
              href="#"
              class="media d-block room bg first-room"
              :style="`background-image: url(${second.imagePath});`"
          >
            <!-- <figure> -->
            <div class="overlap-text">
              <span>
                {{ print(second.title) }}
                <span class="ion-ios-star"></span>
                <span class="ion-ios-star"></span>
                <span class="ion-ios-star"></span>
              </span>
              <!--              <span class="pricing-from">{{ print(second.action.label) }}</span>-->
              <span> | {{ print(second.action.label) }}</span>
            </div>
            <!-- </figure> -->
          </a>

          <a
              href="#"
              class="media d-block room bg second-room"
              :style="`background-image: url(${third.imagePath});`"
          >
            <!-- <figure> -->
            <div class="overlap-text">
              <span>
                {{ print(third.title) }}
                <span class="ion-ios-star"></span>
                <span class="ion-ios-star"></span>
                <span class="ion-ios-star"></span>
              </span>
              <!--              <span class="pricing-from">{{ print(third.action.label) }}</span>-->
              <span> | {{ print(third.action.label) }}</span>
            </div>
            <!-- </figure> -->
          </a>

          <a
              href="#"
              class="media d-block room bg second-room"
              :style="`background-image: url(${fourth.imagePath});`"
          >
            <!-- <figure> -->
            <div class="overlap-text">
              <span>
                {{ print(fourth.title) }}
                <span class="ion-ios-star"></span>
                <span class="ion-ios-star"></span>
                <span class="ion-ios-star"></span>
              </span>
              <!--              <span class="pricing-from">{{ print(fourth.action.label) }}</span>-->
              <span> | {{ print(fourth.action.label) }}</span>
            </div>
            <!-- </figure> -->
          </a>
        </div>
      </div>
      <div class="text-center pt-5">
        <button class="btn btn-primary" @click="viewAll()">
          {{ print(viewButton) }}
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {printStr} from "../../core/helper";
import {DynamicString, Translations} from "../../core/interfaces";

interface Options {
  title: (() => string) | string;
  subTitle?: (() => string) | string;
  actions: {
    label: (() => string) | string;
  };
  details?: (() => string)[] | string[];
  content?: (() => string)[] | string[];
}

export default defineComponent({
  name: "CompAccommodation",
  props: {
    imagePath: String,
    title: [String, Function] as PropType<(() => string) | string>,
    subTitle: [String, Function] as PropType<(() => string) | string>,
    main: Object as PropType<Options>,
    second: Object as PropType<Options>,
    third: Object as PropType<Options>,
    fourth: Object as PropType<Options>,
    action: Object as PropType<{
      label: string;
    }>,
  },
  data() {
    return {
      viewButton: {
        en: 'View All',
        fr: 'Voir tout'
      }
    }
  },
  methods: {
    getStyle() {
      return `background: url(${this.imagePath}) no-repeat center center fixed;
              background-repeat: no-repeat;
              background-size: cover;
      `;
    },
    print(item: DynamicString | undefined): string {
      return (typeof item === 'object') ?
          (item as Translations)[this.$i18n.locale as keyof Translations] : printStr(item ? item : '')
    },
    viewAll() {
      this.$router.push('accommodation')
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
