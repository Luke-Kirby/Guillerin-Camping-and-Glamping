<template>
  <section class="site-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <div class="heading-wrap text-center">
            <h4 class="sub-heading" v-if="subTitle">
              {{ print(subTitle) }}
            </h4>
            <h2 class="heading">
              {{ print(title) }}
            </h2>
            <template v-if="content">
              <p
                  class="mb-5"
                  v-for="(c, i) in getContent()"
                  :key="`text-image-cont-${i}`"
              >
                {{ print(c) }}
              </p>
            </template>
            <slot></slot>
            <template v-if="action">
              <button class="btn btn-primary btn-sm" @click="pressed()">
                {{ print(action.label) }}
              </button>
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
import {printStr} from "../../../core/helper";
import {Translations, TranslationsArray} from "../../../core/interfaces";

export default defineComponent({
  name: "CompFullImageText",
  props: {
    imagePath: String,
    title: [String, Function, Object] as PropType<(() => string) | string | Translations>,
    subTitle: [String, Function, Object] as PropType<(() => string) | string | Translations>,
    content: [Function, Array, Object] as PropType<(() => string[]) | string[] | TranslationsArray>,
    action: Object as PropType<{
      label: (() => string) | string
      press: () => void
    }>,
  },
  data() {
    return {
      state: this.$state
    }
  },
  methods: {
    print(item: string | (() => string) | Translations | undefined): string {
      return (typeof item === 'object') ?
          (item as Translations)[this.$i18n.locale as keyof Translations] : printStr(item ? item : '')
    },
    getContent(): string[] {
      if (this.content && (this.content as TranslationsArray).en) {
        return (this.content as TranslationsArray)[this.$i18n.locale as keyof Translations]
      }
      return ((this.content) ? ((typeof this.content == 'function') ? this.content() : this.content) : []) as string[]
    },
    pressed() {
      if (this.action && this.action.press)
        this.action.press()
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
