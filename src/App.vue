<template>
  <ViewShell />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ViewShell from "@/views/Shell.vue";

export default defineComponent({
  name: "App",
  components: {
    ViewShell,
  },
});
</script>

<style lang="scss">
@import "./scss/bootstrap";
@import "./scss/style";
@import "~animate.css/animate.min.css";
</style>
