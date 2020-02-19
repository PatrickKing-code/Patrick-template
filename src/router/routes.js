const routes = [
  {
    path: "/",
    redirect: "login"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/dashboard.vue")
  }
];
export default routes;
