import { createPinia } from "pinia";
import { createApp } from "vue";
import { GlobalCmComponent } from "codemirror-editor-vue3";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

createApp(App).use(GlobalCmComponent).use(createPinia()).mount("#app");
