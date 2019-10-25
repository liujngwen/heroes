import Vue from 'vue';
import App from './App.vue';
// 入口 main.js 打包成 build.js
// main.js 里面所有的代码都会被打包
import "./../node_modules/bootstrap/dist/css/bootstrap.css"; // 引入 bootstarp的样式文件
import "./style/index.css";
import VueRouter from "vue-router"; // 引用router
// import router from "./router.js";
import router from "./router"; // .js 可写可不写
import axios from "axios";
Vue.prototype.$axios = axios; // 将axios赋值给Vue对象的原型属性
axios.defaults.baseURL = "http://localhost:3000"; // 设置共享的方法
Vue.use(VueRouter); // 使用router 注册路由

// 实例化Vue对象
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
