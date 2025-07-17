<template>
  <div class="upload">
    <input
      type="file"
      id="file"
      ref="file"
      style="display: none"
      v-on:change="handleFileUpload()"
    />
    <input
      type="button"
      value="Upload Image"
      onclick="document.getElementById('file').click();"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MediaService } from "../../../core/services/media.service";

const media = new MediaService();

interface UploadFileData {
  file: File | null | string;
  image: string | null;
  $refs: { file: HTMLInputElement };
}

export default defineComponent({
  name: "CompUploadFile",
  emits: ["uploaded"],
  data() {
    return {
      file: null,
      image: null,
    } as UploadFileData;
  },
  methods: {
    handleFileUpload(): void {
      if (this.$refs.file && this.$refs.file.files)
        this.file = this.$refs.file.files[0];
      this.submitFile();
    },
    submitFile: async function () {
      const formData: FormData = new FormData();
      formData.append("file", this.file as string);
      this.image = await media.uploadImage(formData);
      console.log(this.image)
      this.$emit("uploaded", this.image);
    },
  },
});
</script>

<style scoped lang="scss">
.upload {
  float: left;
}
</style>
