import { createApp } from "vue";
import "./style.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import MyPreset from "./mypreset";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";

const app = createApp(App);

app.component("ThemeSwitcher", ThemeSwitcher);
app.component("Dialog", Dialog);
app.component("Button", Button);
app.component("InputText", InputText);
app.use(PrimeVue, {
    unstyled: true,
    pt: MyPreset,
});
app.mount("#app");
