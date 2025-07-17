<template>
  <div style="height: 400px">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735372.7796912069!2d1.6133560098230157!3d45.71293240932314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f9b7e863de3d1f%3A0xb25ed6f50c5737f2!2s4+Guillerin%2C+19290+Sornac%2C+France!5e0!3m2!1sen!2suk!4v1542805423072"
        width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
  <div class="site-footer">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-4">
          <h3>Guillerin</h3>
          <div class="rural-camping">
            <a href="https://rural-camping.com/france/" target="_blank">
              <img class="rural-camping-img" src="../assets/ruralcamping.png">
            </a>
          </div>
        </div>
        <div class="col-md-4 footer-text">
          <h3>{{ print(text.location) }}</h3>
          <p>
            4 Guillerin | Sornac
          </p>
          <p>
            19290 | France
          </p>
        </div>
        <div class="col-md-4 footer-text">
          <h3>{{ print(text.contact) }}</h3>
          <p>
            Email: guillerin.camp@outlook.com
          </p>
          <!-- <p>
            Tel: (0033) 987 88 3535
          </p> -->
          <!-- <p>
            Mob: (0033) 645500779
          </p> -->
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-7 text-center">
          &copy; <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          Copyright &copy; 2025 All rights reserved | This template is made with <i class="fa fa-heart-o"
                                                                                    aria-hidden="true"></i> by <a
            href="https://colorlib.com" target="_blank">Colorlib</a>
          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        </div>
      </div>
      <!--          <button @click="state().setEditMode(!state().isEditable.value)">{{state().isEditable.value ? 'Edit Mode On' : 'Edit mode Off'}}</button>-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Translations } from '../core/interfaces'
import { printStr } from '../core/helper'


export default defineComponent({
  name: "CompFooter",
  data() {
    return {
      text: {
        location: () => this.$t('footer.location'),
        contact: () => this.$t('footer.contact'),
      }
    }
  },
  methods: {
    print(item: string | (() => string) | Translations | undefined): string {
      return (typeof item === 'object') ?
          (item as Translations)[this.$i18n.locale as keyof Translations] : printStr(item ? item : '')
    }
  },
});
</script>

<style scoped lang="scss">
.footer-text {
  p {
    padding: 0 !important;
    margin: 0 !important;
  }
}
</style>
