import { createApp } from "vue";
import { Quasar } from "quasar";
import App from "./App.vue";
import router from "@/router";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.css";
import "@/styles/scss/main.scss";

const app = createApp(App);

app.use(router);
app.use(Quasar, {});

app.mount("#app");
