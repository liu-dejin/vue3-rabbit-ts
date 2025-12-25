<script setup lang="ts">
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/modules/category'

const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategoryList())
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <!-- 解决路由缓存问题 方法1 破坏复用性,强制销毁重建 性能开销大 -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  <RouterView />
  <LayoutFooter />
  <LayoutFixed />
</template>
