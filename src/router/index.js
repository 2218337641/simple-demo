import Vue from "vue";
import Router from "vue-router";


//解决重复点击链接路由报错问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/postion",
    name: "目的地详情",
    component: ()=>import("@/views/Postion"),
  },
  {
    path: "/echar",
    name: "数据统计",
    component: ()=>import("@/views/Echar"),
  },
  {
    path: "/home",
    name: "首页",
    component: ()=>import("@/views/Homepage"),
  },
  
  {
    path: "/setting",
    name: "设置",
    component: ()=>import("@/views/Setting"),
  },
];

const createRouter=()=>
  new Router({
    routes,
  })

  const router = createRouter();

  export function resetRouter(){
    const newRouter=createRouter();
    router.matcher=newRouter.matcher;
  }

export default router;
