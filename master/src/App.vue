<template>
  <el-config-provider :locale="zhCn" size="small">
    <el-container>
      <el-header>
        <router-link to="/app1">app1</router-link>
        <router-link to="/app2">app2</router-link>
      </el-header>
      <el-main>
        <RouterView></RouterView>
        <div id="app1"></div>
        <div id="app2"></div>
      </el-main>
    </el-container>
    
  </el-config-provider>

</template>

<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<style lang="less">
body{
  margin: 0;
}
</style>