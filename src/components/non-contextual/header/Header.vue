<template>
  <header role="banner">
    <nav
        :class="[classes && classes.container ? classes.container : 'navbar navbar-expand-md navbar-dark', isFixed ? 'is-fixed' : '']">
      <div :class="isWide ? 'container-fluid' : 'container'">
        <div v-if="logo"
             :class="logo.classes && logo.classes.container ? logo.classes.container : 'navbar-brand clickable'"
             @click="$router.push(logo.redirect)">
          <template v-if="logo.label">{{ print(logo.label) }}</template>
        </div>
        <button @click="show = !show" class="navbar-toggler">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div :class="{'collapse navbar-collapse navbar-light': true, 'show': show}">
          <ul class="navbar-nav ml-auto pl-lg-5 pl-0">
            <li @click="show = false"
                v-for="(item, i) in navItems"
                :class="item.classes && item.classes.container ? item.classes.container : 'nav-item'"
                :key="i">
              <template v-if="item.isExternal">
                <a :class="[item.classes && item.classes.item ? item.classes.item : 'nav-link', getActive(item.redirect)]"
                   :href="this.print(item.redirect)"
                   target="_blank">
                  <span>{{ print(item.label) }}</span>
                </a>
              </template>
              <template v-else>
                <router-link
                    :class="[
                        item.classes && item.classes.item ? item.classes.item : 'nav-link',
                        getActive(item.redirect)]"
                    :to="item.redirect">
                  {{ item.classes }}
                  {{ print(item.label) }}
                </router-link>
              </template>
            </li>

            <li class="nav-item dropdown">
              <p class="nav-link dropdown-toggle">{{ $t(`header.lang.${$i18n.locale}`) }}</p>
              <div class="dropdown-menu" aria-labelledby="dropdown04" @click="show = false">
                <a class="dropdown-item" @click="lang('fr')">{{ $t(`header.lang.fr`) }}</a>
                <a class="dropdown-item" @click="lang('en')">{{ $t(`header.lang.en`) }}</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {DynamicString, Translations} from "../../../core/interfaces";
import {printStr} from "../../../core/helper";
import {HeaderClasses, HeaderNavItem, HeaderProps} from "./header.interfaces";

export default defineComponent({
  name: "CompHeader",
  props: {
    classes: {
      type: Object as PropType<HeaderClasses>,
      required: false
    },
    logo: {
      type: Object as PropType<HeaderProps>,
      required: false
    },
    navItems: {
      type: Array as PropType<HeaderNavItem[]>,
      required: true
    },
    isWide: {
      type: Boolean,
      required: false
    },
    isFixed: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      show: Boolean
    }
  },
  methods: {
    getActive(route: string): string {
      return this.$route.path == route ? 'active' : ''
    },
    lang(lang: string): void {
      this.$i18n.locale = lang
    },
    print(item: DynamicString | undefined): string {
      return (typeof item === 'object') ?
          (item as Translations)[this.$i18n.locale as keyof Translations] : printStr(item ? item : '')
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.is-fixed {
  position: fixed;
  width: 100%;
}
</style>
