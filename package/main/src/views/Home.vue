<template>
  <div>
    <h1>这是首页 {{ data.msg }}</h1>
    <el-button type="primary">点击跳转</el-button>
  </div>
</template>

<script setup>
const route = useRoute()
console.log(route)
const data = reactive({
  msg: 'hello world',
})
</script>

<style scoped></style>
