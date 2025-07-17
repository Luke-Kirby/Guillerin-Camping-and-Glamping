<template>
  <div v-for="(com, i) in pageComponents" :key="i" class="comp-main">
    <div class="comp-editable">
      <component :is="com.component" v-bind="com"/>
    </div>
    <div v-if="state().isEditable.value" :class="[i == 0 ? 'pt-5 mt-5' : '', 'edit-mode']">
      <div class="p-1">
        <!-- <pre>{{ com }}</pre>-->
        <div v-for="(editable, ii) in getEditProps(com.component)" :key="ii">
          <div v-if="editable.translations">
            <h4>{{ editable.label }}</h4>
            <template v-if="editable.isArray">
              <div class="mb-1">
                <label class="form-label mb-0">English</label>
                <div v-for="(c, iii) in com[editable.field].en" :key="`${iii}`">
                  <textarea v-if="editable.type === 'textarea'" v-model="com[editable.field].en[iii]" class="form-control"></textarea>
                  <input v-if="editable.type === 'text'" v-model="com[editable.field].en[iii]" class="form-control">
                </div>
              </div>
              <div class="mb-1">
                <label class="form-label mb-0">French</label>
                <div v-for="(c, iii) in com[editable.field].fr" :key="`${iii}`">
                  <textarea v-if="editable.type === 'textarea'" v-model="com[editable.field].fr[iii]" class="form-control"></textarea>
                  <input v-if="editable.type === 'text'" v-model="com[editable.field].fr[iii]" class="form-control">
                </div>
              </div>
            </template>
            <template v-else>
            <div class="mb-1">
              <label class="form-label mb-0">English</label>
              <textarea v-if="editable.type === 'textarea'" v-model="com[editable.field].en" class="form-control"></textarea>
              <input v-if="editable.type === 'text'" v-model="com[editable.field].en" class="form-control">
            </div>
            <div class="mb-1">
              <label class="form-label mb-0">French</label>
              <textarea v-if="editable.type === 'textarea'" v-model="com[editable.field].fr" class="form-control"></textarea>
              <input v-if="editable.type === 'text'" v-model="com[editable.field].fr" class="form-control">
            </div>
            </template>
          </div>
        </div>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, defineAsyncComponent, PropType} from "vue";

const ImageSection = defineAsyncComponent(() => import('@/components/non-contextual/image-section/ImageSection.vue'))
const TextImage = defineAsyncComponent(() => import('@/components/non-contextual/test-image/TextImage.vue'))

import {
  DynamicComponentTypes,
  ImageSectionApi,
  PageData,
  StaticProps,
  Translations
} from "../../core/interfaces";

export default defineComponent({
  name: "CompRenderApiComponents",
  components: {
    ImageSection,
    TextImage
  },
  props: {
    pageData: Object as PropType<PageData>
  },
  data() {
    return {
      state: this.$state,
      pageComponents: [] as DynamicComponentTypes[],
      editComponents: {
        ImageSection: [
          {
            label: 'Title',
            field: 'title',
            type: 'text',
            translations: true
          },
          {
            label: 'Content',
            field: 'subTitle',
            type: 'textarea',
            translations: true
          }
        ],
        TextImage: [
          {
            label: 'Title',
            field: 'title',
            type: 'text',
            translations: true
          },
          {
            label: 'Sub Title',
            field: 'subTitle',
            type: 'text',
            translations: true
          },
          {
            label: 'Content',
            field: 'content',
            type: 'textarea',
            isArray: true,
            translations: true
          }
        ]
      }
    }
  },
  mounted() {
    console.log(this.pageData)
    this.pageData?.components.forEach((comp: ImageSectionApi) => {
      this.pageComponents.push(this.provideProps(comp))
    })
  },
  methods: {
    provideProps(component: ImageSectionApi): DynamicComponentTypes {
      // if (component.component == 'ImageSection') {
      return this.parseComponentProps(component)
      // }
    },
    parseComponentProps(component: ImageSectionApi): DynamicComponentTypes {
      const currentProps: StaticProps = component.props.static
      const currentActions = component.props.actions.action

      let props = {
        component: component.component,
        ...currentProps as any
      } as DynamicComponentTypes

      if (currentActions) {
        props.action = {
          label: () => currentActions.label[this.$i18n.locale as keyof Translations],
          press: () => {
            // todo - handle all actions will need to be done here - this will need to be refactored
            if (currentActions.press.isExternal) {
              window.open(currentActions.press.source[this.$i18n.locale as keyof Translations], currentActions.press.isExternal ? '_blank' : '');
            } else {
              this.$router.push(currentActions.press.source[this.$i18n.locale as keyof Translations])
            }
          }
        }
      }

      return props
    },
    getEditProps(componentName: string) {
      const comp = (this.editComponents as any)[componentName]
      if (comp) {
        return comp
      } else {
        return []
      }

    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.comp-main {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.comp-editable {
  flex: 1;
  overflow: hidden;
}

.edit-mode {
  width: 300px;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
}

.edit-textarea {
  width: 100%;
}
</style>
