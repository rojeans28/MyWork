const RouterMain = [
  // 引导页 ---> 默认跳转/重定向
  {
    path: "/",
    redirect: "/pilot"
  },
  // 引导页
  {
    path: "/pilot",
    name: "pilot",
    component: () => import("../../views/Pilot.vue")
  },
  // 广告路由
  {
    path: "/advert",
    name: "advert",
    component: () => import("../../views/Advert.vue")
  },
  // 拼团路由
  {
    path: "/shop",
    name: "拼团",
    component: () => import("../../views/Shop.vue")
  },
  // 购物车路由
  {
    path: "/car",
    name: "购物车",
    component: () => import("../../views/Car.vue")
  },
  //   个人中心路由
  {
    path: "/my",
    name: "个人中心",
    component: () => import("../../views/My.vue")
  },
  //   注册路由
  {
    path: "/register",
    name: "注册",
    component: () => import("../../views/Register.vue")
  },
  //   登录路由
  {
    path: "/login",
    name: "登录",
    component: () => import("../../views/Login.vue")
  },
  {
    path: "/detail",
    name: "商品详情",
    component: () => import("../../views/Detail.vue")
  },
  {
    path: "/feedback",
    name: "意见反馈",
    component: () => import("../../views/My/Feedback.vue")
  },
  {
    path: "/address",
    name: "地址管理",
    component: () => import("../../views/My/Address.vue")
  },
  {
    path: "/settle",
    name: "结算中心",
    component: () => import("../../views/Settle.vue")
  },
  {
    path: "/createaddress",
    name: "新增地址",
    component: () => import("../../views/My/CreateAddress.vue")
  },
  {
    path: "/changeaddress",
    name: "修改地址",
    component: () => import("../../views/My/ChangeAddress.vue")
  },
  {
    path: "/money",
    name: "收银台",
    component: () => import("../../views/Money.vue")
  }
];

export default RouterMain;
