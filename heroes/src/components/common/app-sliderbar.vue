<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <router-link to="/heroes" tag="li">
        <a href="#">英雄列表</a>
      </router-link>
      <router-link to="/weapon" tag="li">
        <a href="#">武器列表</a>
      </router-link>
      <router-link to="/equip" tag="li">
        <a href="#">装备列表</a>
      </router-link>
      <router-link to="/live" tag="li">
        <a href="#">生命周期</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>