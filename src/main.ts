import { createApp } from "vue";

import "./style.css";
import "@mdi/font/css/materialdesignicons.css";
import "../node_modules/vuetify/_styles.scss";
import { createVuetify } from "vuetify";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "@mdi",
  },
});

createApp(App).use(vuetify).mount("#app");
