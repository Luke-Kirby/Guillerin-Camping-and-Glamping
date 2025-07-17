import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from 'vue-i18n'
import router from "./core/router";
import { messages, defaultLocale } from "./core/i18n";
import pageState from "./core/store/global";

const i18n = createI18n({
    messages,
    locale: defaultLocale,
    fallbackLocale: defaultLocale
});

const app = createApp(App)
    .use(router)
    .use(i18n);

app.config.globalProperties.$state = pageState

app.mount("#app");

export default {
    inject: ['$state']
}