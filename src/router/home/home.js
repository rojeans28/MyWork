const Home = [
  {
    path: "/home",
    name: "首页",
    component: () => import("../../views/Home.vue"), //首页
    children: [
      {
        path: "index",
        name: "首页",
        component: () => import("../../views/Home/index.vue")
      },
      {
        path: "fast",
        name: "极速免税店",
        component: () => import("../../views/Home/Fast.vue")
      },
      {
        path: "mother",
        name: "母婴",
        component: () => import("../../views/Home/Mother.vue")
      },
      {
        path: "price",
        name: "轻奢",
        component: () => import("../../views/Home/Price.vue")
      },
      {
        path: "brand",
        name: "名品特卖",
        component: () => import("../../views/Home/Brand.vue")
      }
    ]
  }
];

export default Home;
