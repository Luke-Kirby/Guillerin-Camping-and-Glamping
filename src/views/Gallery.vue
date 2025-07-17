<template>
  <div class="gallery">
    <ImageSection v-bind="cover"/>
    <section class="site-section">
      <div class="container">
        <template v-if="!loading">
          <div v-for="(image, ci) in pictureLoop" :key="`images-${ci}`">
            <template v-if="image && image.length > 0">
              <div class="image image-1">
                <div :style="getStyle(image[0].src)"></div>
              </div>
              <div v-if="image[1]" class="image image-2">
                <div :style="getStyle(image[1].src)"></div>
              </div>
              <div v-if="image[2]" class="image image-3">
                <div :style="getStyle(image[2].src)"></div>
              </div>
              <div v-if="image[3]" class="image image-4">
                <div :style="getStyle(image[3].src)"></div>
              </div>
              <div v-if="image[4]" class="image image-5">
                <div :style="getStyle(image[4].src)"></div>
              </div>
            </template>
          </div>
        </template>
        <template v-else>
          Loading...
        </template>
<!--        <div>-->
<!--          <UploadFile @uploaded="update('profileImage', $event)"/>-->
<!--          <div v-for="(image, im) in images" :key="`images-list-${im}`">-->
<!--            <img :src="image.src" class="image"/>-->
<!--            {{ image.src }}-->
<!--          </div>-->
<!--        </div>-->
        <div style="clear: both"></div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {MediaService} from "../core/services/media.service";
import ImageSection from "@/components/non-contextual/image-section/ImageSection.vue";
import { Data } from "../core/interfaces/image.js"

const media = new MediaService();

export default defineComponent({
  name: "ViewGallery",
  components: {
    // UploadFile,
    ImageSection
  },
  data() {
    return {
      cover: {
        imagePath: "images/home/cover.jpeg",
        title: "Gallery"//() => this.$t('home.cover.title'),
      },
      url: "https://ryan-sermons.s3.eu-west-2.amazonaws.com",
      images: [],
      pictureLoop: [
        [
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/1.jpg'},
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/2.jpg'},
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/3.jpg'},
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/4.jpg'},
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/5.jpg'}
        ],
        [
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/6.jpg'},
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/7.jpg'},
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/8.jpg'},
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/9.jpg'},
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/10.jpg'}
        ],
        [
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/11.jpg'},
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/12.jpg'},
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/13.jpg'},
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/14.jpg'},
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/15.jpg'}
        ],
        [
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/17.jpg'},
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/19.jpg'},
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/20.jpg'},
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/21.jpg'},
          {src: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/gallery/22.jpg'}
        ]
      ],
      loading: false
    } as Data;
  },
  async mounted() {
    window.scrollTo(0, 0)
    const data = await media.getImages()
    console.log(data)
    // data?.splice(0, 1)
    let counter = 0;
    data?.forEach((image: string) => {
      this.pictureLoop[this.pictureLoop.length - 1].push({src: `${this.url}/${image}`})
      counter += 1
      if (counter === 5) {
        counter = 0
        this.pictureLoop.push([])
      }
      this.images.push({src: `${this.url}/${image}`})
    })
    this.loading = false
  },
  methods: {
    update(
        value: string
    ): void {
      console.log(value)
    },
    getStyle(image: string): string {
      return `background: url(${image})no-repeat center center;
              background-repeat: no-repeat;
              background-size: cover;
              width: 100%;
              height: 100%;
              `;
    },
  }
});
</script>
<style lang="scss">
.gallery {
  //border-top: black solid 100px;

  .image {
    float: left;
    padding: 4px;
    width: 50%;
    height: 350px;
  }

  .image-5 {
    width: 100%;
    height: 600px;
  }

  img {
    width: 100%;
  }

  .gallery-column {
    height: 500px;
    width: 300px;
    overflow-y: scroll;
  }
}

@media (max-width: 992px) {
  .gallery {
    .image {
      height: 250px;
    }

    .image-5 {
      height: 500px;
    }
  }
}


@media (max-width: 767px) {
  .gallery {
    .image {
      width: 100%;
      height: 350px;
    }

    .image-5 {
      width: 100%;
      height: 350px;
    }
  }
}

@media (max-width: 400px) {
  .gallery {
    .image {
      width: 100%;
      height: 250px;
    }

    .image-5 {
      width: 100%;
      height: 250px;
    }
  }
}
</style>
