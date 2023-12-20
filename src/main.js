import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseButton from "./ui/BaseButton.vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const app = createApp(App);

app.use(router);

app.use(store);

app.component("BaseButton", BaseButton);
app.component("QuillEditor", QuillEditor);

app.mount("#app");
