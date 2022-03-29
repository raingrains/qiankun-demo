<template>
  <div class="header">
    <!--<router-view />-->
    <el-button type="primary" size="small" @click="jumpRoute('/sub-vue')">sub-vue</el-button>
    <el-button type="primary" size="small" @click="jumpRoute('/vue3')">vue3</el-button>

    {{ $store.state.globalMessage }}
  </div>
  <div id="subapp-viewport"></div>
</template>

<script>
export default {
  name: 'App',
  setup() {
    const jumpRoute = url => {
      // window.location.href = window.location.origin + url
      history.pushState(null, url, url)
    }
    onMounted(() => {
      console.log(1111)
    })
    return {
      jumpRoute,
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  padding: 10px;
  background-color: #999;
  border-bottom: 1px solid #333;
}
</style>
