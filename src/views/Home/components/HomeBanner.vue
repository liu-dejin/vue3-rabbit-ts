<script setup lang="ts">
import { getHomeBannerApi } from '@/apis/home'
import type { BannerItem } from '@/types/home'

const bannerList = ref<BannerItem[]>()

const getBannerList = async () => {
  const res = await getHomeBannerApi('1')
  bannerList.value = res.result
}

onMounted(() => getBannerList())
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item
        v-for="item in bannerList"
        :key="item.id"
      >
        <img
          :src="item.imgUrl"
          alt=""
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
