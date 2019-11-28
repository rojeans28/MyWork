const Wishdeal = [
  {
    path: "/wishdeal",
    name: "我的心愿单",
    component: () => import("../../views/My/Wishdeal.vue"),
    children: [
      {
        path: "/wishdeal/onsale",
        name: "我的心愿单",
        component: () => import("../../views/My/Onsale.vue")
      }
    ]
  }
];
export default Wishdeal;
