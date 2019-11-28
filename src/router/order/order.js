const Order = [
  {
    path: "/order",
    name: "我的订单",
    component: () => import("@/views/My/My_order.vue"),
    children: [
      {
        path: "index",
        name: "我的订单",
        component: () => import("@/views/My/My_index.vue")
      },
      {
        path: "wait_pay",
        name: "待付款",
        component: () => import("@/views/My/wait_pay.vue")
      },
      {
        path: "wait_send",
        name: "待付款",
        component: () => import("@/views/My/wait_send.vue")
      },
      {
        path: "wait_confirm",
        name: "待付款",
        component: () => import("@/views/My/wait_confirm.vue")
      },
      {
        path: "wait_rate",
        name: "待付款",
        component: () => import("@/views/My/wait_rate.vue")
      }
    ]
  }
];

export default Order;
