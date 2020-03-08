import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { getToken, removeToken, removeUsername } from "../utils/login";
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 路由白名单
// const whileRouter = ["/login"];
// // 路由守卫
// router.beforeEach((to, from, next) => {
//   if (getToken()) {
//     if (to.path == "/login") {
//       removeToken()
//       removeUsername()
//       next();
//     } else {
//       next();
//     }
//   } else {
//     if (whileRouter.indexOf(to.path) != -1) {
//       next();
//     } else {
//       next("/login");
//     }
//   }
// });

export default router;
