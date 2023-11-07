<template>
  <el-container>
    <el-aside width="auto">
      <AppLogo></AppLogo>
      <el-menu
        :collapse="collapse"
        router
        :default-openeds="defaultOpeneds"
        :defaultActive="defaultActive"
        :class="['scrollbar', 'scroll-style-15']"
      >
        <RenderMenu v-for="menus of menu.menu" :key="menus.path" :node="menus"></RenderMenu>
      </el-menu>
      <ExtraLink :collapse="collapse" @collapse="onCollapse"></ExtraLink>
    </el-aside>
    <el-container>
      <el-header height="48px">Header</el-header>
      <el-main>
        <el-button>哈哈</el-button>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppLogo from './AppLogo.vue'
import RenderMenu from './RenderMenu.vue'
import ExtraLink from './ExtraLink.vue'
import useMenu from '@/store/modules/menu'
import { useRoute } from 'vue-router'
const route = useRoute()

const menu = useMenu()
let defaultOpeneds = ref([])
let defaultActive = ref('')
let collapse = ref(false)
const onCollapse = (val) => {
  console.log('po')
  collapse.value = val
}

onMounted(() => {
  const path = route.path
  const arr = path.split('/')
  !arr[0] && arr.shift()
  const lp = arr.reduce((cals, current) => {
    const pre = cals.at(-1) || ''
    const item = `${pre}/${current}`.replace(/\/+/, '/')
    cals.push(item)
    return cals
  }, [])
  defaultOpeneds.value = lp
  defaultActive.value = lp.at(-1)
})
</script>

<style lang="scss">
.el-aside {
  transition: width 0.2s linear;
  overflow-x: hidden;

  .el-menu{
    height: calc(100% - 64px - 40px);
  }
}
</style>
