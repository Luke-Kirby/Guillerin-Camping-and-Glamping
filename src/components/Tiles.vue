<template>
  <section class="site-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-12 heading-wrap text-center">
          <h4 class="sub-heading">{{ print(subTitle) }}</h4>
          <h2 class="heading">{{ print(title) }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4" v-for="(card, i) in cards" :key="`tiles-${i}`">
          <div class="post-entry">
            <div class="tiles-image-height">
              <img
                v-if="card.imagePath"
                :src="card.imagePath"
                class="img-fluid"
              />
            </div>
            <div class="body-text">
              <div class="category">{{ print(card.subTitle) }}</div>
              <h3 class="mb-3 tiles-header-color">{{ print(card.title) }}</h3>
              <template v-if="card.content">
                <p class="mb-4" v-for="(cont, j) in card.content" :key="`tile-${i}-content-${j}`">
                  {{ print(cont) }}
                </p>
              </template>
              <p v-if="card.action">
                <a href="#" class="btn btn-primary btn-outline-primary btn-sm"
                >Read More</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {Tile} from "./Tile.vue";
import {printStr} from "../core/helper";

export default defineComponent({
  name: "CompTiles",
  props: {
    subTitle: [String, Function] as PropType<(() => string) | string>,
    title: [String, Function] as PropType<(() => string) | string>,
    content: [Array, Function] as PropType<(() => string)[] | string[]>,
    cards: [Array] as PropType<Tile[]>
  },
  methods: {
    print(item: string | (() => string)): string {
      return printStr(item)
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
