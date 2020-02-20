import Layout from '../components/Layout'
const routes = [
  {
    path: "/",
    redirect: "login",
    meta: {
      name: '主页'
    },
    hidden: true
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      name: '登录'
    },
    hidden: true,
    component: () => import("../views/login.vue")
  },
  {
    path: "/console",
    name: "Console",
    meta: {
      name: '控制台'
    },
    redirect: 'dashboard',
    component: Layout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        meta: {
          name: '首页'
        },
        component: () => import('../views/dashboard.vue')
      }
    ]
  },
  {
    path: "/info",
    name: "Info",
    meta: {
      name: '信息管理'
    },
    component: Layout,
    children: [
      {
        path: "/infoList",
        name: "InfoList",
        meta: {
          name: '新闻列表'
        },
        component: () => import('../views/info/infoList.vue')
      },
      {
        path: "/infoCategory",
        name: "InfoCategory",
        meta: {
          name: '信息分类'
        },
        component: () => import('../views/info/infoCategory.vue')
      }
    ]
  },
  {
    path: "/user",
    name: "User",
    meta: {
      name: '用户管理'
    },
    component: Layout,
    children: [
      {
        path: "/userList",
        name: "UserList",
        meta: {
          name: '用户列表'
        },
        component: () => import('../views/user/userList.vue')
      }
    ]
  }
];
export default routes;
