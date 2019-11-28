import Vue from "vue";
// 引入mint-ui
import Vuex from "vuex";
import Mint from "mint-ui";
Vue.use(Mint);
// 引入Vant
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
// 引入swiper
import "swiper/dist/css/swiper.css";
// 引入 animate.css
import "animate.css";
// 引入axios
import axios from "axios";
Vue.use(Vuex);
axios.defaults.baseURL = "http://192.168.54.56:3000";
Vue.prototype.$axios = axios;
// 引入vue-jsonp
import VueJsonp from "vue-jsonp";
Vue.use(VueJsonp);
import { Lazyload } from "vant";
Vue.use(Lazyload, { lazyComponent: true });
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
