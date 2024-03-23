import { createApp } from "vue";
import App from "./App.vue";

// Control Lib
import ArcoVue from "@arco-design/web-vue";
import ArcoVueIcon from "@arco-design/web-vue/es/icon/arco-vue-icon";

// Module
// None

// Styles
import "@arco-design/web-vue/dist/arco.css";

const app = createApp(App);

app.use(ArcoVue);
app.use(ArcoVueIcon);

app.mount("#app");
