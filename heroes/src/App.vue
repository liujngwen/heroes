<template>
  <div id="app">
    <!-- 头部组件 -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏组件 -->
        <app-sliderbar></app-sliderbar>
        <!-- <hero-list></hero-list> -->
        <!-- 一级容器 -->
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 过渡动画 -->
          <transition name>
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "./components/common/app-header.vue";
import appSliderbar from "./components/common/app-sliderbar.vue";
// import heroList from "./hero-list";
export default {
  name: "app",
  components: {
    "app-header": appHeader,
    "app-sliderbar": appSliderbar
    // "hero-list": heroList
  }
};
</script>

<style>
  .v-enter {
    opacity: 0;
    color: red;
  }
  .v-enter-active {
    transition: all 1s;
  }
</style>
