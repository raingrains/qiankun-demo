<template>
  <h1>这是about页面</h1>
  <el-button @click="dialogVisible = true">打开弹窗</el-button>
  <el-dialog title="弹窗" v-model="dialogVisible">
    <p>这是弹窗内容</p>
    <el-button @click="dialogVisible = false">关闭</el-button>
  </el-dialog>
</template>

<script setup>
// import { ref } from 'vue'

const dialogVisible = ref(false)
</script>

<style scoped></style>
