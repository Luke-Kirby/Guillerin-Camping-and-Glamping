<template>
  <section class="site-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <div class="heading-wrap text-center">
            <h4 class="sub-heading" v-if="subTitle">{{ subTitle }}</h4>
            <h2 class="heading">{{ title }}</h2>
            <template v-if="content && content.length > 0">
              <p
                class="mb-5"
                v-for="(c, i) in content"
                :key="`text-image-cont-${i}`"
              >
                {{ c }}
              </p>
            </template>
            <slot></slot>
            <template v-if="action">
              <button class="btn btn-primary btn-sm" @click="action.press()">{{ action.label }}</button>
            </template>
          </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-7">
          <img
            :src="imagePath"
            alt="Image placeholder"
            class="img-md-fluid"
            width="700"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export interface Tile{
  imagePath: string
  title: (() => string) | string
  subtitles: (() => string) | string
  content: (() => string)[] | string[]
  action?: {
    label: (() => string) | string
    press: () => void
  }
}

export default defineComponent({
  name: "CompFullImageText",
  props: {
    imagePath: String,
    title: String,
    subTitle: String,
    content: Array as PropType<string[]>,
    action: Object as PropType<{
      label: string
      press: () => void
    }>,
  },
  methods: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
