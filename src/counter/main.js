import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createI18n } from 'vue-i18n';

// Control Lib
import ArcoVue from "@arco-design/web-vue";
import ArcoVueIcon from "@arco-design/web-vue/es/icon/arco-vue-icon";

// Module
// None

// Styles
import "@arco-design/web-vue/dist/arco.css";

import en from '@/public/lang/en'
import zh from '@/public/lang/zh'

const i18n = createI18n({
    locale: localStorage.getItem('language') || 'en',
    messages: {
        en: en,
        zh: zh
    }
})

const app = createApp(App);

const pinia = createPinia()
app.use(pinia);

app.use(i18n);
app.use(ArcoVue);
app.use(ArcoVueIcon);

app.mount("#app");
