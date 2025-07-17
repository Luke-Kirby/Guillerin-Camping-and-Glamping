<template>
  <template v-if="isEditMode()">
    <textarea class="et-input" :value="value" placeholder="write something..." @input="resize()" ref="textarea"></textarea>
  </template>
  <template v-else>{{ value }}</template>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import pageState from "../../../core/store/global";

export default defineComponent({
  name: "CompEditableText",
  props: {
    value: String,
    fieldRef: String
  },
  data() {
    return {
      isEditMode: (() => false) as () => boolean
    }
  },
  mounted() {
    this.isEditMode = () => pageState().isEditable.value
  },
  updated() {
    this.resize()
  },
  methods: {
    resize() {
      let element: any = this.$refs["textarea"];
      if(element && element.style){
        element.style.height = "18px";
        element.style.height = element.scrollHeight + "px";
      }
    },
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.et-input {
  background: none;
  color: inherit;
  font-size: inherit;
  text-transform: inherit;
  border: 1px dashed white;
  text-align: center;
  padding: 0;
  margin: 0;
  width: 100%;
}
</style>
