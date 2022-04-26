import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// global components
import BaseInput from "@/components/base/BaseInput";
import BaseTextarea from "@/components/base/BaseTextarea";

// register components
Vue.component("base-input", BaseInput);
Vue.component("base-textarea", BaseTextarea);

import "./assets/scss/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
