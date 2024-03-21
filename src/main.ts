import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoSpeedometer, MdAutorenew, MdBarchart, MdBikescooter, MdDirectionsbikeTwotone, MdMapRound, MdQrcodeRound  } from "oh-vue-icons/icons";
import router from "./util/router";
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

addIcons(MdBarchart, MdMapRound, MdQrcodeRound, MdDirectionsbikeTwotone, IoSpeedometer, MdBikescooter, MdAutorenew);

createApp(App).component("v-icon", OhVueIcon).use(router).mount("#app");
