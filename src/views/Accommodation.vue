<template>
  <div>
    <ImageSection v-bind="cover"/>
    <div class="acc container">
      <div class="list-group list-group-flush">
        <button v-for="item in items"
                @click="select(item.id)"
                :class="['list-group-item list-group-item-action', active == item.id ? 'active' : '']" :key="item.id">
          {{ item.label() }}
        </button>
      </div>
      <div class="acc-main">
        <div class="acc-content">
          <div class="card">
            <div class="card-img-top">
              <Carousel v-bind="carousel"/>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ details.intro.title() }}</h5>
              <p class="card-text" v-for="(p, i) in details.intro.content()" :key="i">
                {{ p() }}
              </p>
              <template v-if="details.prices">
                <h5 class="card-title">{{ details.prices.title() }}</h5>
                <p class="card-text" v-for="(p, ii) in details.prices.content()" :key="ii">
                  {{ p() }}
                </p>
              </template>
              <template v-if="details.peakSeason">
                <h5 class="card-title">{{ details.peakSeason.title() }}</h5>
                <p class="card-text" v-for="(p, ii) in details.peakSeason.content()" :key="ii">
                  {{ p() }}
                </p>
              </template>
              <template v-if="details.lowSeason">
                <h5 class="card-title">{{ details.lowSeason.title() }}</h5>
                <p class="card-text" v-for="(p, ii) in details.lowSeason.content()" :key="ii">
                  {{ p() }}
                </p>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageSection from "@/components/non-contextual/image-section/ImageSection.vue";
import Carousel from "@/components/non-contextual/carousel/Carousel.vue";

export default defineComponent({
  name: "ViewHome",
  data() {
    return {
      active: 1,
      cover: {
        isFullPage: false,
        imagePath: "images/home/cover.jpeg",
        title: () => this.$t('accommodation.cover.title'),
      },
      items: [
        // {
        //   id: 0,
        //   label: () => this.$t('accommodation.0.label'),
        //   carousel: {
        //     items: [
        //       {
        //         id: 0,
        //         image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/safari-600/2047fd57-c195-4c1c-9c87-1cb0190a01b6.jpeg'
        //       },
        //       {
        //         id: 1,
        //         image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/safari-600/f04c2cf1-7f65-493b-830b-fdc736032d9f.jpeg'
        //       },
        //       {
        //         id: 2,
        //         image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/safari-600/b5f04091-973e-40aa-8cf4-282aa70a2a9a.jpeg'
        //       },
        //       {
        //         id: 3,
        //         image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/safari-600/b7675a12-bb42-4c9e-b3b0-20b72443ba98.jpeg'
        //       },
        //       {
        //         id: 4,
        //         image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/safari-600/c57eda03-25dc-4ea5-9d3a-77dc86e7c159.jpeg'
        //       },
        //       {
        //         id: 5,
        //         image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/safari-600/2f496d45-9feb-423b-9c65-06cfd38b6a40.jpeg'
        //       },
        //     ]
        //   },
        //   details: {
        //     intro: {
        //       title: () => this.$t('accommodation.0.intro.title'),
        //       content: () => [(() => this.$t('accommodation.0.intro.content.0'))],
        //     },
        //     prices: {
        //       title: () => this.$t('accommodation.0.prices.title'),
        //       content: () => [
        //         (() => this.$t('accommodation.0.prices.content.0')),
        //         (() => this.$t('accommodation.0.prices.content.1'))
        //       ],
        //     },
        //     peakSeason: {
        //       title: () => this.$t('accommodation.0.peak_season.title'),
        //       content: () => [
        //         (() => this.$t('accommodation.0.peak_season.content.0')),
        //         (() => this.$t('accommodation.0.peak_season.content.1'))
        //       ],
        //     },
        //     lowSeason: {
        //       title: () => this.$t('accommodation.0.low_season.title'),
        //       content: () => [
        //         (() => this.$t('accommodation.0.low_season.content.0')),
        //         (() => this.$t('accommodation.0.low_season.content.1'))
        //       ],
        //     }
        //   }
        // },
        // {
        //   id: 7,
        //   label: () => this.$t('accommodation.8.label'),
        //   carousel: {
        //     items: [
        //       {
        //         id: 4,
        //         image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bohemian/d5026284-b42d-4084-aa8d-54d73f2fe614.jpeg'
        //       },
        //       {
        //         id: 5,
        //         image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bohemian/e42e9fa6-602f-4106-b291-d0c815ffcfdb.jpeg'
        //       },
        //       {
        //         id: 0,
        //         image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bohemian/52e64b28-ec76-40bc-8315-3e1a2223f0ee.jpeg'
        //       },
        //       {
        //         id: 1,
        //         image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bohemian/5ee7e6eb-56bf-40dd-a65d-0f27441ec29a.jpeg'
        //       },
        //       {
        //         id: 2,
        //         image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bohemian/7b2ad89b-89c1-4945-bfb2-b60f06178fda.jpeg'
        //       },
        //       {
        //         id: 3,
        //         image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bohemian/bad12d76-aee5-4f88-9fa3-0af1f99da3c2.jpeg'
        //       },
        //       // { id: 4, image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bohemiin-600-v2/ba4cbfcb-7073-4482-900d-f0a02583cd44.jpeg' },
        //       // { id: 0, image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bohemiin-600-v2/68ba4970-141e-40a0-836b-97f24b294e19.jpeg' },
        //       // { id: 1, image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bohemiin-600-v2/752cef75-5601-48eb-b93c-52ead8c13d31.jpeg' },
        //       // { id: 2, image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bohemiin-600-v2/a52654bd-133d-499d-ab72-7d8264894c8f.jpeg' },
        //       // { id: 3, image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bohemiin-600-v2/a9c752bc-9f2a-4c35-8e76-9d5bf9a26cbf.jpeg' },
        //       // { id: 5, image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bohemiin-600-v2/c788ae18-b297-49dc-90c3-ed36b5f5c81d.jpeg' },
        //       // { id: 6, image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bohemiin-600-v2/e41b2f2b-cbd5-4dca-8c81-227f143c5e89.jpeg' },
        //       // { id: 7, image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bohemiin-600-v2/e557356e-95b6-4adb-adf2-23b1c81e9792.jpeg' },
        //       // { id: 8, image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bohemiin-600-v2/f0c8f5b2-881c-425e-a1fa-7d7cbee148a8.jpeg' },
        //     ]
        //   },
        //   details: {
        //     intro: {
        //       title: () => this.$t('accommodation.8.intro.title'),
        //       content: () => [
        //         (() => this.$t('accommodation.8.intro.content.0')),
        //         (() => this.$t('accommodation.8.intro.content.1')),
        //         (() => this.$t('accommodation.8.intro.content.2'))
        //       ],
        //     },
        //     prices: {
        //       title: () => this.$t('accommodation.8.prices.title'),
        //       content: () => [(() => this.$t('accommodation.7.prices.content.0'))],
        //     },
        //     peakSeason: {
        //       title: () => this.$t('accommodation.8.peak_season.title'),
        //       content: () => [
        //         (() => this.$t('accommodation.8.peak_season.content.0')),
        //         (() => this.$t('accommodation.8.peak_season.content.1')),
        //         (() => this.$t('accommodation.8.peak_season.content.2'))
        //       ],
        //     },
        //     lowSeason: {
        //       title: () => this.$t('accommodation.8.low_season.title'),
        //       content: () => [(() => this.$t('accommodation.8.low_season.content.0'))],
        //     }
        //   }
        // },
        {
          id: 1,
          label: () => this.$t('accommodation.1.label'),
          carousel: {
            items: [
              {
                id: 1,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/field-tent-600-v2/0ed65b54-ce25-423b-a6e9-ce0722c14955.jpeg'
              },
              {
                id: 0,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/field-tent-600-v2/05509c78-b640-4a47-9f29-445dbd044d18.jpeg'
              },
              {
                id: 2,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/field-tent-600-v2/667e6950-b17c-442f-b173-47712cee6b0d.jpeg'
              },
              {
                id: 3,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/field-tent-600-v2/b850bc2a-f91b-4c69-b1e1-e58aeecd87ac.jpeg'
              },
              {
                id: 4,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/field-tent-600-v2/be8aa2cd-b413-43ef-a11f-23d9978d2edf.jpeg'
              },
              {
                id: 5,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/field-tent-600-v2/e9b4de73-c970-4885-a072-b6e483fb49fc.jpeg'
              },
              // {
              //   id: 0,
              //   image: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/tent/tent-1.png'
              // },
              // {
              //   id: 1,
              //   image: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/tent/tent-2.png'
              // },
              // {
              //   id: 2,
              //   image: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/tent/tent-3.png'
              // },
              // {
              //   id: 3,
              //   image: 'https://s3.eu-west-2.amazonaws.com/guillerin.com/img/tent/tent-4.png'
              // },
            ]
          },
          details: {
            intro: {
              title: () => this.$t('accommodation.1.intro.title'),
              content: () => [(() => this.$t('accommodation.1.intro.content.0'))],
            },
            prices: {
              title: () => this.$t('accommodation.1.prices.title'),
              content: () => [
                (() => this.$t('accommodation.1.prices.content.0')),
                (() => this.$t('accommodation.1.prices.content.1'))
              ],
            },
            peakSeason: {
              title: () => this.$t('accommodation.1.peak_season.title'),
              content: () => [
                (() => this.$t('accommodation.1.peak_season.content.0')),
                (() => this.$t('accommodation.1.peak_season.content.1'))
              ],
            },
          }
        },
        {
          id: 2,
          label: () => this.$t('accommodation.2.label'),
          carousel: {
            items: [
              {
                id: 2,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-1-600-v2/a051cfb9-09b5-4692-a3b3-c582978b84d7.jpeg'
              },
              {
                id: 0,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-1-600-v2/0735109c-a120-4d2a-aca8-ba63044c1a53.jpeg'
              },
              {
                id: 1,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-1-600-v2/38eb4fe5-b7da-49e7-a59b-b0af147b36d9.jpeg'
              },
              {
                id: 3,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-1-600-v2/daa06742-b8d5-4db7-b67b-1e008e36b32d.jpeg'
              },
              {
                id: 4,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-1-600/087aa90a-ebd2-4258-90c9-d9770a15a652.jpeg'
              },
              {
                id: 5,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-1-600/219043c6-45be-459a-96be-2ff04a88dc13.jpeg'
              },
              {
                id: 6,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-1-600/3be0b7b5-6727-4150-bab0-8188ce3cda06.jpeg'
              },
              {
                id: 7,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-1-600/8bf1150b-84c2-424e-8c65-7efd1af3d2d3.jpeg'
              },
              {
                id: 8,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-1-600/b0d0c90a-0696-42be-ade3-c0aeb82154f8.jpeg'
              },
            ]
          },
          details: {
            intro: {
              title: () => this.$t('accommodation.2.intro.title'),
              content: () => [(() => this.$t('accommodation.2.intro.content.0'))],
            },
            prices: {
              title: () => this.$t('accommodation.2.prices.title'),
              content: () => [
                (() => this.$t('accommodation.2.prices.content.0')),
                (() => this.$t('accommodation.2.prices.content.1'))
              ],
            },
            peakSeason: {
              title: () => this.$t('accommodation.2.peak_season.title'),
              content: () => [
                (() => this.$t('accommodation.2.peak_season.content.0')),
                (() => this.$t('accommodation.2.peak_season.content.1'))
              ],
            },
            lowSeason: {
              title: () => this.$t('accommodation.2.low_season.title'),
              content: () => [
                (() => this.$t('accommodation.2.low_season.content.0')),
                (() => this.$t('accommodation.2.low_season.content.1'))
              ],
            }
          }
        },
        {
          id: 3,
          label: () => this.$t('accommodation.3.label'),
          carousel: {
            items: [
              {
                id: 2,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-2-600-v2/2754e8d9-d733-4525-b581-d518d6dc9633.jpeg'
              },
              {
                id: 0,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-2-600-v2/19d040fe-d30d-4519-9e79-40b84aa95e48.jpeg'
              },
              {
                id: 1,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-2-600-v2/2682030e-85db-4d57-a93f-a82c547f59cb.jpeg'
              },
              {
                id: 3,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-2-600-v2/40e7cb41-eac7-4c00-9bab-b8f3aefd26d4.jpeg'
              },
              {
                id: 4,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-2-600-v2/57917d1b-f728-4dcd-91a7-45e52aea89d8.jpeg'
              },
              {
                id: 5,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-2-600-v2/7580caa1-288a-4c02-9040-9f7f1846ad64.jpeg'
              },
              {
                id: 6,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-2-600-v2/7991bebe-50ce-4702-84ca-c6e17e3dfec4.jpeg'
              },
              {
                id: 0,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-2-600/56d5ac46-5655-40c5-8239-e423c31cf711.jpeg'
              },
              {
                id: 1,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-2-600/6f43a321-fa76-4662-b36f-460acba2dcb3.jpeg'
              },
              {
                id: 2,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-2-600/a1327fef-5b13-4fb1-9303-2b499f746e49.jpeg'
              },
              {
                id: 3,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-2-600/a649ca81-8350-4001-8c5e-51e934d3cdd5.jpeg'
              },
              {
                id: 4,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-2-600/a6542dba-86ab-4f08-8d92-1b210748a551.jpeg'
              },
              {
                id: 5,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-2-600/a866ebfa-fba7-427e-9a16-5c706fb4f238.jpeg'
              },
              {
                id: 6,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-2-600/d672cb8d-12ab-4760-bc21-155251928340.jpeg'
              },
              {
                id: 7,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-2-600/fdd829bd-19cc-4ad1-9651-67359e9338d7.jpeg'
              }
            ]
          },
          details: {
            intro: {
              title: () => this.$t('accommodation.3.intro.title'),
              content: () => [(() => this.$t('accommodation.3.intro.content.0'))],
            },
            prices: {
              title: () => this.$t('accommodation.3.prices.title'),
              content: () => [
                (() => this.$t('accommodation.3.prices.content.0')),
                (() => this.$t('accommodation.3.prices.content.1'))
              ],
            },
            peakSeason: {
              title: () => this.$t('accommodation.3.peak_season.title'),
              content: () => [
                (() => this.$t('accommodation.3.peak_season.content.0')),
                (() => this.$t('accommodation.3.peak_season.content.1'))
              ],
            },
            lowSeason: {
              title: () => this.$t('accommodation.3.low_season.title'),
              content: () => [
                (() => this.$t('accommodation.3.low_season.content.0')),
                (() => this.$t('accommodation.3.low_season.content.1'))
              ],
            }
          }
        },
        {
          id: 4,
          label: () => this.$t('accommodation.4.label'),
          carousel: {
            items: [
              {
                id: 3,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-3-600-v2/4f26f36b-676b-4d3d-89f4-bf4fbb142fca.jpeg'
              },
              {
                id: 4,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-3-600-v2/c61f22e4-3b9d-475e-97c7-ed5401426d62.jpeg'
              },
              {
                id: 5,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-3-600-v2/c7f0f255-2704-473a-8798-f120c23c093d.jpeg'
              },
              {
                id: 0,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-3-600-v2/1cbcdf8e-3740-423d-a3f5-a6901dbdb04d.jpeg'
              },
              {
                id: 1,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-3-600-v2/39a3bb84-aab2-4f3c-b261-38646af6d902.jpeg'
              },
              {
                id: 2,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-3-600-v2/40744b3d-be6f-441c-8ac6-6a79e0932a71.jpeg'
              },
              {
                id: 6,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-3-600-v2/cdf352c0-0037-48d2-acdb-ed9ff359782e.jpeg'
              }
            ]
          },
          details: {
            intro: {
              title: () => this.$t('accommodation.4.intro.title'),
              content: () => [
                (() => this.$t('accommodation.4.intro.content.0')),
                (() => this.$t('accommodation.4.intro.content.1'))
              ],
            },
            prices: {
              title: () => this.$t('accommodation.4.prices.title'),
              content: () => [
                (() => this.$t('accommodation.4.prices.content.0')),
                (() => this.$t('accommodation.4.prices.content.1'))
              ],
            },
            peakSeason: {
              title: () => this.$t('accommodation.4.peak_season.title'),
              content: () => [
                (() => this.$t('accommodation.4.peak_season.content.0')),
                (() => this.$t('accommodation.4.peak_season.content.1'))
              ],
            },
            lowSeason: {
              title: () => this.$t('accommodation.4.low_season.title'),
              content: () => [
                (() => this.$t('accommodation.4.low_season.content.0')),
                (() => this.$t('accommodation.4.low_season.content.1'))
              ],
            }
          }
        },
        {
          id: 5,
          label: () => this.$t('accommodation.5.label'),
          carousel: {
            items: [
              {
                id: 0,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-4-600-v2/010cb610-2777-4ea8-8637-f31874734e4f.jpeg'
              },
              {
                id: 1,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-4-600-v2/2dbd1553-a6d4-4a41-b631-297fc7dc69b9.jpeg'
              },
              {
                id: 5,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-4-600-v2/96ea4694-1980-4447-82fc-f49da2be91b9.jpeg'
              },
              {
                id: 2,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-4-600-v2/2f6fde68-09dc-456a-b8bf-fc8d945d0142.jpeg'
              },
              {
                id: 3,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-4-600-v2/32f4bef7-26eb-42ed-823e-048b6643f903.jpeg'
              },
              {
                id: 4,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-4-600-v2/82e25a70-f6b4-4a3e-acad-eac1502cc210.jpeg'
              },
              {
                id: 6,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-4-600-v2/dac1b2aa-188f-496f-99c2-1cfe5401530c.jpeg'
              },
              {
                id: 7,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/caravan-4-600-v2/de30044b-c4df-4361-804a-99e41a54168c.jpeg'
              },
            ]
          },
          details: {
            intro: {
              title: () => this.$t('accommodation.5.intro.title'),
              content: () => [(() => this.$t('accommodation.5.intro.content.0'))],
            },
            prices: {
              title: () => this.$t('accommodation.5.prices.title'),
              content: () => [
                (() => this.$t('accommodation.5.prices.content.0')),
                (() => this.$t('accommodation.5.prices.content.1'))
              ],
            },
            peakSeason: {
              title: () => this.$t('accommodation.5.peak_season.title'),
              content: () => [
                (() => this.$t('accommodation.5.peak_season.content.0')),
                (() => this.$t('accommodation.5.peak_season.content.1'))
              ],
            },
            lowSeason: {
              title: () => this.$t('accommodation.5.low_season.title'),
              content: () => [
                (() => this.$t('accommodation.5.low_season.content.0')),
                (() => this.$t('accommodation.5.low_season.content.1'))
              ],
            }
          }
        },
        {
          id: 6,
          label: () => this.$t('accommodation.6.label'),
          carousel: {
            items: [
              { id: 0, image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/pitches/1ec136a2-b862-44d5-8147-81fae160fd41.jpeg' },
            ]
          },
          details: {
            intro: {
              title: () => this.$t('accommodation.6.intro.title'),
              content: () => [
                (() => this.$t('accommodation.6.intro.content.0')),
                (() => this.$t('accommodation.6.intro.content.1')),
                (() => this.$t('accommodation.6.intro.content.2'))

              ],
            },
            prices: {
              title: () => this.$t('accommodation.6.prices.title'),
              content: () => [
                (() => this.$t('accommodation.6.prices.content.0')),
                (() => this.$t('accommodation.6.prices.content.1'))
              ],
            },
            peakSeason: {
              title: () => this.$t('accommodation.6.peak_season.title'),
              content: () => [
                (() => this.$t('accommodation.6.peak_season.content.0')),
                (() => this.$t('accommodation.6.peak_season.content.1'))
              ],
            },
            lowSeason: {
              title: () => this.$t('accommodation.6.low_season.title'),
              content: () => [
                (() => this.$t('accommodation.6.low_season.content.0')),
                (() => this.$t('accommodation.6.low_season.content.1'))
              ],
            }
          }
        },
        {
          id: 8,
          label: () => this.$t('accommodation.7.label'),
          carousel: {
            items: [
              {
                id: 0,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/food-600/212c7ced-a732-46e3-b500-3ac7b825c657.jpeg'
              },
              {
                id: 1,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/food-600/5f13686f-4e69-4b9c-8d9c-bec320a9e19c.jpeg'
              },
              {
                id: 2,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/food-600/984760c7-8a13-4c07-9a8a-a7d79169bbae.jpeg'
              },
              {
                id: 3,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/food-600/9d2533fe-86d6-4dec-a427-76ad6b2939cb.jpeg'
              },
              {
                id: 4,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/food-600/d8df4104-dfdd-4703-b104-b4a702847d9c.jpeg'
              },
              {
                id: 5,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bathroom-600/0937ea0b-6060-4f36-b488-d915086de59b.jpeg'
              },
              {
                id: 6,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bathroom-600/34ab9dd3-8123-4dbf-a221-59544a8c8fe2.jpeg'
              },
              {
                id: 7,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bathroom-600/435a2a54-11fc-481e-b9b9-7fafbd2b04d1.jpeg'
              },
              {
                id: 8,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bathroom-600/4eeb6d5b-0357-454d-924b-e9fb74750594.jpeg'
              },
              {
                id: 9,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bathroom-600/62ed92ba-80b5-45d4-824c-34dedf8fdcea.jpeg'
              },
              {
                id: 10,
                image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/bathroom-600/fb2b67fb-ecf2-49bc-a0f5-94462afd0786.jpeg'
              }
            ]
          },
          details: {
            intro: {
              title: () => this.$t('accommodation.7.intro.title'),
              content: () => [
                (() => this.$t('accommodation.7.intro.content.0')),
                (() => this.$t('accommodation.7.intro.content.1')),
                (() => this.$t('accommodation.7.intro.content.2'))
              ],
            },
            prices: {
              title: () => this.$t('accommodation.7.prices.title'),
              content: () => [(() => this.$t('accommodation.7.prices.content.0'))],
            },
            peakSeason: {
              title: () => this.$t('accommodation.7.peak_season.title'),
              content: () => [
                (() => this.$t('accommodation.7.peak_season.content.0')),
                (() => this.$t('accommodation.7.peak_season.content.1')),
                (() => this.$t('accommodation.7.peak_season.content.2'))
              ],
            },
            lowSeason: {
              title: () => this.$t('accommodation.7.low_season.title'),
              content: () => [(() => this.$t('accommodation.7.low_season.content.0'))],
            }
          }
        }
      ],
      details: {
        intro: {
          title: () => this.$t('accommodation.1.intro.title'),
          content: () => [(() => this.$t('accommodation.1.intro.content.0'))],
        },
        prices: {
          title: () => this.$t('accommodation.1.prices.title'),
          content: () => [
            (() => this.$t('accommodation.1.prices.content.0')),
            (() => this.$t('accommodation.1.prices.content.1'))
          ],
        },
        peakSeason: {
          title: () => this.$t('accommodation.1.peak_season.title'),
          content: () => [
            (() => this.$t('accommodation.1.peak_season.content.0')),
            (() => this.$t('accommodation.1.peak_season.content.1'))
          ],
        },
        lowSeason: {
          title: () => this.$t('accommodation.1.low_season.title'),
          content: () => [
            (() => this.$t('accommodation.1.low_season.content.0')),
            (() => this.$t('accommodation.1.low_season.content.1'))
          ],
        }
      },
      carousel: {
        items: [
          {
            id: 0,
            image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/field-tent-600-v2/0ed65b54-ce25-423b-a6e9-ce0722c14955.jpeg'
          },
          {
            id: 1,
            image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/safari-600/f04c2cf1-7f65-493b-830b-fdc736032d9f.jpeg'
          },
          {
            id: 2,
            image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/safari-600/b5f04091-973e-40aa-8cf4-282aa70a2a9a.jpeg'
          },
          {
            id: 3,
            image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/safari-600/b7675a12-bb42-4c9e-b3b0-20b72443ba98.jpeg'
          },
          {
            id: 4,
            image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/safari-600/c57eda03-25dc-4ea5-9d3a-77dc86e7c159.jpeg'
          },
          {
            id: 5,
            image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/safari-600/2f496d45-9feb-423b-9c65-06cfd38b6a40.jpeg'
          },
        ]
      },
    };
  },
  components: {
    ImageSection, Carousel
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    select(id: number) {
      this.active = id
      this.items.forEach((item: any) => {
        if (id === item.id) {
          this.carousel = item.carousel
          this.details = item.details
        }
      })
    }
  }
});
</script>
<style lang="scss">
.acc {
  display: flex;

  .acc-sidebar {
    width: 300px
  }

  .acc-main {
    flex: 1
  }

  .acc-content {
    max-width: 600px;
    margin: 24px auto 24px auto;
  }
}

@media only screen and (max-width: 768px) {
  .acc {
    display: block;

    .acc-sidebar {
      width: 100%
    }

    .acc-main {
      width: 100%
    }
  }
}
</style>

<!--{ id: 0, image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/teepee-600/311ff57c-8b70-4ca5-bad7-8ed2f0916991.jpeg' },-->
<!--{ id: 1, image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/teepee-600/35217e38-4c45-4c5e-8686-e8347a47d8f6.jpeg' },-->
<!--{ id: 2, image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/teepee-600/39460a63-e341-49a4-841d-7803be651581.jpeg' },-->
<!--{ id: 3, image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/teepee-600/784f2ada-04cb-4e39-ad5a-be63e7726a25.jpeg' },-->
<!--{ id: 4, image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/teepee-600/a9ba578b-858a-4168-9232-2209ee24278e.jpeg' },-->
<!--{ id: 5, image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/teepee-600/b63a7a67-9bd2-4a6e-a9bd-df4ce40fd19e.jpeg' },-->
<!--{ id: 6, image: 'https://ryan-sermons.s3.eu-west-2.amazonaws.com/media/guillerin/teepee-600/c04a0fb0-65c4-4326-8ffd-96d9233df83b.jpeg' },-->