import { createPinia } from "pinia";
import { createApp } from "vue";
import { GlobalCmComponent } from "codemirror-editor-vue3";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faArrowsUpToLine,
  faArrowUp,
  faArrowsDownToLine,
  faArrowDown,
  faArrowsToCircle,
  faArrowsUpDownLeftRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faArrowsUpToLine,
  faArrowUp,
  faArrowsDownToLine,
  faArrowDown,
  faArrowsToCircle,
  faArrowsUpDownLeftRight
);
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

import { createRouter, createWebHashHistory } from "vue-router";
import DesignView from "@/components/DesignView.vue";
import AnalysisView from "@/components/AnalysisView.vue";

const routes = [
  { path: "/", component: DesignView },
  { path: "/analysis", component: AnalysisView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(GlobalCmComponent)
  .use(createPinia())
  .use(router)
  .mount("#app");
