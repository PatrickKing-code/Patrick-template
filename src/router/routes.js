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
      name: '控制台',
      icon: 'one'
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
      name: '信息管理',
      icon: 'nine'
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
      name: '用户管理',
      icon: 'ten'
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
  },
  {
    path: "/icon",
    name: "Icon",
    meta: {
      name: '字体图标',
      icon: 'six'
    },
    component: Layout,
    children: [
      {
        path: "/iconComponent",
        name: "IconComponent",
        meta: {
          name: '封装组件'
        },
        component: () => import('../views/icon/iconComponent.vue')
      }
    ]
  },
  {
    path: "/table",
    name: "Table",
    meta: {
      name: '表格',
      icon: 'five'
    },
    component: Layout,
    children: [
      {
        path: "/baseTable",
        name: "BaseTable",
        meta: {
          name: '基础表格'
        },
        component: () => import('../views/table/baseTable.vue')
      },
      {
        path: "/complexTable",
        name: "ComplexTable",
        meta: {
          name: '对象key是变量传参'
        },
        component: () => import('../views/table/conplexTable.vue')
      }
    ]
  },
  {
    path: "/upload",
    name: "Upload",
    meta: {
      name: '上传文件',
      icon: 'seven'
    },
    component: Layout,
    children: [
      {
        path: "/formDataUpload",
        name: "FormDataUpload",
        meta: {
          name: 'formData'
        },
        component: () => import('../views/upload/formDataUpload.vue')
      },
      {
        path: "/base64aUpload",
        name: "Base64aUpload",
        meta: {
          name: 'base64'
        },
        component: () => import('../views/upload/base64Upload.vue')
      }
    ]
  },
  {
    path: "/componentsPackage",
    name: "ComponentsPackage",
    meta: {
      name: '全局组件',
      icon: 'eight'
    },
    component: Layout,
    children: [
      {
        path: "/selectComponent",
        name: "SelectComponent",
        meta: {
          name: '下拉组件'
        },
        component: () => import('../views/componentsPackage/selCom.vue')
      },
      {
        path: "/tableComponent",
        name: "TableComponent",
        meta: {
          name: '表单组件'
        },
        component: () => import('../views/componentsPackage/tableCom.vue')
      }
    ]
  },
  {
    path: "/componentsPackage",
    name: "ComponentsPackage",
    meta: {
      name: '全局组件api',
      icon: 'nine'
    },
    component: Layout,
    children: [
      {
        path: "/selectComponent2",
        name: "SelectComponent2",
        meta: {
          name: '下拉组件api'
        },
        component: () => import('../views/componentsPackage2/selCom.vue')
      },
      {
        path: "/tableComponent2",
        name: "TableComponent2",
        meta: {
          name: '表单组件api'
        },
        component: () => import('../views/componentsPackage2/tableCom.vue')
      }
    ]
  }
];
export default routes;
