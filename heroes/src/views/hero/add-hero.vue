<template>
  <div>
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input
          v-model="formData.name"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="请输入姓名"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <input
          v-model="formData.gender"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入性别"
        />
      </div>
      <button @click.prevent="addHero" class="btn btn-success">添加</button>
    </form>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      // name: "",
      // gender:""
      formData: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
    addHero() {
      // 提交
      if (this.formData.name && this.formData.gender) {
        // 判断是否为空
        this.$axios({
          url: "/heroes",
          method: "post",
          data: this.formData
        }).then(() => {
          // 回列表页
          this.$router.push("/heroes");
        });
      } else {
        alert("姓名和性别不能为空");
      }
    }
  }
};
</script>

<style>
</style>