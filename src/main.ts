import App from "./App.vue";
import router from "@/router";
import { initFaLibrary, FontAwesomeIcon } from "@/plugins/fontAwesome";
import pinia from "@/store";

const app = createApp(App);

initFaLibrary();

app.use(pinia);
app.use(router);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
