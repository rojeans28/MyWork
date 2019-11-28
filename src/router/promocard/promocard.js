const Promocard = [
  {
    path: "/promocard",
    name: "现金券",
    component: () => import("@/views/Promocard.vue"),
    children: [
      {
        path: "new",
        name: "现金券",
        component: () => import("@/views/My/new.vue")
      }
    ]
  }
];
export default Promocard;
