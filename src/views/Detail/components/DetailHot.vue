<script setup lang="ts">
// 24小时热榜数据
import { fetchHotGoodsAPI } from '@/apis/detail'
import type { ProductItem } from '@/types/detail'

const props = defineProps<{
  hotType: 1 | 2
}>()
const titleMap = {
  1: '24小时热榜',
  2: '周榜'
}
const title = computed(() => titleMap[props.hotType])

const hotGoods = ref<ProductItem[]>([])
const route = useRoute()
const fetchHotGoods = async () => {
  const res = await fetchHotGoodsAPI({
    id: route.params.id as string,
    type: props.hotType
  })
  hotGoods.value = res.result
}
onMounted(() => fetchHotGoods())
</script>

<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink
      v-for="item in hotGoods"
      :key="item.id"
      to="/"
      class="goods-item"
    >
      <img
        :src="item.picture"
        alt=""
      />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>
