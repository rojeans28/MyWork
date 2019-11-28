import Vue from "vue";
import RouterMain from "./Routermain/routermain.js";
import Home from "./home/home.js";
import Order from "./order/order.js";
import Promocard from "./promocard/promocard.js";
import Wishdeal from "./wishdeal/wishdeal.js";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  // 主路由文件
  ...RouterMain,
  // 首页主路由
  ...Home,
  // 订单路由
  ...Order,
  // 现金券路由
  ...Promocard,
  //
  ...Wishdeal
];

const router = new VueRouter({
  routes
});

export default router;
