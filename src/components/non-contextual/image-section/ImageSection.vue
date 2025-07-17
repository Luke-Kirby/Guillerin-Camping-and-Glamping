<template>
  <section
      :class="`site-hero overlay ${this.isFullPage ? 'site-hero-full-page' : 'site-hero-section'}`"
      data-stellar-background-ratio="0.5"
      :style="getStyle()"
  >
    <div class="container">
      <div
          class="row align-items-center site-hero-inner justify-content-center"
      >
        <div class="col-md-12 text-center">
          <div class="mb-5 animate__animated animate__fadeInUp">
            <h1>
              {{ print(title) }}
            </h1>
            <p v-if="subTitle">
              {{ print(subTitle) }}
            </p>
            <slot></slot>
            <template v-if="action">
              <button class="btn btn-primary" @click="pressed">
                {{ print(action.label) }}
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {printStr} from "../../../core/helper";
import {Translations} from "../../../core/interfaces";
// import EditableText from "@/components/non-contextual/editable-text/EditableText.vue";

export default defineComponent({
  name: "CompImageSection",
  emits: ['buttonClicked'],
  props: {
    imagePath: {
      type: [String, Function] as PropType<(() => string) | string>,
      required: true
    },
    title: [String, Function, Object] as PropType<(() => string) | string | Translations>,
    subTitle: [String, Function, Object] as PropType<(() => string) | string | Translations>,
    isFullPage: Boolean,
    action: Object as PropType<{
      label: (() => string) | string | Translations;
      press: () => void;
    }>,
  },
  methods: {
    getStyle() {
      return `background: url(${this.print(this.imagePath)}) no-repeat center center fixed;
              background-repeat: no-repeat;
              background-size: cover;
      `;
    },
    pressed() {
      if (this.action && this.action.press) {
        this.action.press()
      }
      this.$emit("buttonClicked", true);
    },
    print(item: string | (() => string) | Translations | undefined): string {
      return (typeof item === 'object') ?
          (item as Translations)[this.$i18n.locale as keyof Translations] : printStr(item ? item : '')
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
