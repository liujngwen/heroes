<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <router-link class="btn btn-success" to="/heroes/add">添加英雄</router-link>
    <!-- <a class="btn btn-success" href="add.html">添加英雄</a> -->
    <div class="table-responsive">
      <router-view></router-view>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <!-- v-for进行渲染 -->
          <tr v-for="item in list" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <!-- 动态路由传参 -->
              <router-link :to="`/heroes/edit/${item.id}`">编辑</router-link>&nbsp;&nbsp;
              <!-- <a href="edit.html">编辑</a> -->
              <a @click.prevent="delHero(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import axios from "axios"; // 引入axios
export default {
  // 定义数据
  data() {
    return {
      list: []
    };
  },
  methods: {
    loadData() {
      this.$axios({
        url: "/heroes"
      }).then(result => {
        this.list = result.data;
      });
    },
    // 删除英雄的方法
    delHero(id) {
      // 询问一下是否删除
      if (confirm("您确定要删除此条记录吗?")) {
        this.$axios({
          url: `/heroes/${id}`,
          method: "delete"
        }).then(result => {
          this.loadData(); // 重新渲染
        });
      }
    }
  },
  // 页面渲染完成执行
  mounted() {},
  // Vue实例创建完成执行 页面还没渲染
  created() {
    this.loadData(); // 请求数据
  }
};
</script>

<style>
</style>