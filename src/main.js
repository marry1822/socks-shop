import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "@/router/router";
import Vuelidate from "vuelidate";

import "./plugins/bootstrap";

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
