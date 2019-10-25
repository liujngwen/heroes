<template>
  <div>
    <h2 class="sub-header">编辑英雄</h2>
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
      <button @click.prevent="saveHero" class="btn btn-success">编辑</button>
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
    saveHero() {
      const { heroid } = this.$route.params;
      // 修改接口
      if (this.formData.name && this.formData.gender) {
        // 修改接口
        this.$axios({
          url: `/heroes/${heroid}`,
          method: "put",
          data: this.formData
        }).then(() => {
            // 回到列表
            this.$router.push("/heroes");
        })
      } else {
        alert("姓名和性别不能为空");
      }
    }
  },
  created() {
    // 取参数
    const { heroid } = this.$route.params;
    if (heroid) {
      // 有id的情况下 =>
      this.$axios({
        url: `/heroes/${heroid}`
      }).then(result => {
        this.formData = result.data;
      });
    }
  }
};
</script>

<style>
</style>