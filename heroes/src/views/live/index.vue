<template>
  <div>
      我是生命周期
      <input type="text" v-model="name">
      <input type="text" v-model="age">
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: "张三",
            age: 18
        }
    },
    // 实例创建阶段
    beforeCreate() {
        console.log("组件创建之前执行beforeCreate");
        console.log(this); // this虽然有内容，但是一般不在beforeCreate中做任何操作
        // 事件和数据都还没被初始化
    },
    created() {
        console.log("实例创建完成之后执行created");
        // 加载数据 因为事件和数据都已经被初始化 但是这里不能用ref来获取dom元素
        // 因为此时还未渲染页面
        // console.log(this);
    },
    beforeMount() {
        console.log("页面渲染前执行beforeMount");
        // 依然不能获取dom元素，但是可以加载数据
    },
    mounted() {
        // 也可以获取dom元素，也可以加载数据，因为此时页面已经渲染
        console.log("页面渲染完成后执行mounted");
    },
    beforeUpdate(){
        console.log("数据更新前执行beforeUpdate");
    },
    updated() {
        console.log("数据更新后执行updated");
    },
    // 非常有用
    beforeDestory() {
        // 可以将Vue组件中定义的所有定时器给清除掉
        console.log("销毁前执行beforeDistory");
    },
    // 鸡肋
    destoryed() {
        console.log("销毁后执行destoryed");
    }
}
</script>

<style>

</style>