// 路由模块
import Vue from "vue";
import VueRouter from "vue-router";
import heroList from "./views/hero/hero-list.vue";
import weaponList from "./views/weapon/weapon-list.vue";
import equipList from "./views/equip/equip-list.vue";

import addHero from "./views/hero/add-hero.vue";
import appContainer from "./views/hero/app-container.vue";
import editHero from "./views/hero/edit-hero.vue";
// import live from "./views/live/index.vue"; // 与下相同
import live from "./views/live";
Vue.use(VueRouter);
export default new VueRouter({
// var router = new VueRouter({ // 实例化路由

// 改变当前默认的激活样式的class名称  router-link-active 改为 active
linkActiveClass:'active',
  routes: [
    {
        path: "/",
        redirect: "/heroes"
    },
    {
      path: "/live",
      component: live
    },
    {
      path: "/heroes",
      component: appContainer,
      children: [
        {
          path: "", // 代表二级路由的默认组件
          component: heroList
        },
        {
          path: "add",
          component: addHero
        },
        {
          path: "edit/:heroid", // 动态路由参数
          component: editHero
        }
      ]
    },
    {
      path: "/weapon",
      component: weaponList
    },
    {
      path: "/equip",
      component: equipList
    }
  ]
});
// export default router;