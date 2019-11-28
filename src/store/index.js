import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import Cart from "./modules/Cart.js";
import Address from "./modules/Address.js";
import WaitConfirm from "./modules/WaitConfirm.js";
import WaitPay from "./modules/Waitpay.js";
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Cart,
    Address,
    WaitConfirm,
    WaitPay
  }
});
