import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import BaseButton from "./components/ui/BaseButton.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.component("BaseButton", BaseButton);

app.mount("#app");
