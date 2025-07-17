<template>
  <div class="camping">
    <ImageSection v-bind="cover"/>
    <section class="site-section">
      <div class="container">
        <div class="text-container">
          <h2>{{ content.section1.subHeading() }}</h2>
          <p>{{ content.section1.paragraph() }}</p>
          <button class="btn btn-primary camp-btn">{{ content.bookBtn() }}</button>
          <h2>{{ content.section2.subHeading() }}</h2>
          <p>{{ content.section2.paragraph() }}</p>
        </div>
        <template v-if="!loading">
          <div v-for="(image, ci) in pictureLoop" :key="`images-${ci}`">
            <template v-if="image && image.length > 0">
              <div class="image image-1">
                <div :style="getStyle(image[0].src)"></div>
              </div>
              <div v-if="image[1]" class="image image-2">
                <div :style="getStyle(image[1].src)"></div>
              </div>
            </template>
          </div>
        </template>
        <template v-else>
          Loading...
        </template>
        <div style="clear: both"></div>
        <div class="text-container" style="margin-top: 2rem;">
          <h2>{{ content.section3.subHeading() }}</h2>
          <ul>
            <li>{{ content.section3.bullet1() }}</li>
            <li>{{ content.section3.bullet2() }}</li>
            <li>{{ content.section3.bullet3() }}</li>
            <li>{{ content.section3.bullet4() }}</li>
            <li>{{ content.section3.bullet5() }}</li>
            <li>{{ content.section3.bullet6() }}</li>
          </ul>
        </div>
        <div class="text-container" style="margin-top: 2rem;">
          <h2>{{ content.section4.subHeading() }}</h2>
          <p>{{ content.section4.paragraph() }}</p>
          <ul>
            <li>{{ content.section4.bullet1() }}</li>
            <li>{{ content.section4.bullet2() }}</li>
            <li>{{ content.section4.bullet3() }}</li>
            <li>{{ content.section4.bullet4() }}</li>
            <li>{{ content.section4.bullet5() }}</li>
            <li>{{ content.section4.bullet6() }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {MediaService} from "../../core/services/media.service";
import { CampingData } from "../../core/interfaces/image.js"
import { pictureLoop } from "./data"
import ImageSection from "@/components/non-contextual/image-section/ImageSection.vue";



const media = new MediaService();

export default defineComponent({
  name: "ViewCamping",
  components: {
    ImageSection
  },
  data() {
    return {
      cover: {
        imagePath: "images/home/cover.jpeg",
        title: "Camping"//() => this.$t('home.cover.title'),
      },
      url: "https://ryan-sermons.s3.eu-west-2.amazonaws.com",
      images: [],
      pictureLoop,
      loading: false,
      content: {
        section1: {
          subHeading: () => this.$t('camping.section1.subHeading'),
          paragraph: () => this.$t('camping.section1.paragraph')
        },
        section2: {
          subHeading: () => this.$t('camping.section2.subHeading'),
          paragraph: () => this.$t('camping.section2.paragraph')
        },
        section3: {
          subHeading: () => this.$t('camping.section3.subHeading'),
          bullet1: () => this.$t('camping.section3.bullet1'),
          bullet2: () => this.$t('camping.section3.bullet2'),
          bullet3: () => this.$t('camping.section3.bullet3'),
          bullet4: () => this.$t('camping.section3.bullet4'),
          bullet5: () => this.$t('camping.section3.bullet5'),
          bullet6: () => this.$t('camping.section3.bullet6')
        },
        section4: {
          subHeading: () => this.$t('camping.section4.subHeading'),
          paragraph: () => this.$t('camping.section4.paragraph'),
          bullet1: () => this.$t('camping.section4.bullet1'),
          bullet2: () => this.$t('camping.section4.bullet2'),
          bullet3: () => this.$t('camping.section4.bullet3'),
          bullet4: () => this.$t('camping.section4.bullet4'),
          bullet5: () => this.$t('camping.section4.bullet5'),
          bullet6: () => this.$t('camping.section4.bullet6')
        },
        bookBtn: () => this.$t('camping.bookBtn')
      }
    } as CampingData;
  },
  async mounted() {
    window.scrollTo(0, 0)
    const data = await media.getImages()
    console.log(data)
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
 .camping {

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
    p {
      width: 100%;
      padding-left: 2rem;
    }

    h2 {
      width: 100%;
      margin-bottom: 1rem;
    }

    ul {
      padding-left: 4rem;
      width: 100%;
    }

    .camp-btn {
      margin: 2rem 0rem;
    }
  }

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
