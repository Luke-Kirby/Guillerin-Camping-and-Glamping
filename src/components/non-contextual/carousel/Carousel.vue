<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(image, i) in items" :key="i" :class="['carousel-item', active == i ? 'active' : '']">
          <img :src="image.image" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" @click="previous()">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </button>
      <button class="carousel-control-next" type="button" @click="next()">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

interface ImageProp {
  id: number
  image: string
}

export default defineComponent({
  name: "CompCarousel",
  props: {
    items: {
      type: Array as PropType<ImageProp[]>,
      required: true
    }
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    next() {
      this.active += 1;
      if (this.active > (this.items.length - 1)) {
        this.active = 0
      }
    },
    previous() {
      this.active -= 1;
      if (this.active < 0) {
        this.active = this.items.length - 1
      }
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
