<template>
  <div>
    <h1>这是vue子应用的首页 {{ data.msg }}</h1>

    <el-button type="primary" @click="jumpOtherSubapp">点击跳转到其他子应用</el-button>
  </div>
</template>

<script setup>
const route = useRoute()
// const router = useRouter()
console.log(route)
const data = reactive({
  msg: 'hello world',
})
const jumpOtherSubapp = () => {
  // router.push('/vue3')
  window.history.pushState(
    {
      use: 111,
    },
    '',
    '/vue3'
  )
}
</script>

<style scoped></style>
