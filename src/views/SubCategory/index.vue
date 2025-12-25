<script setup lang="ts">
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category'
import type { CategoryFilterResult, Good, SubCategoryRequest } from '@/types/category'
import GoodsItem from '../Home/components/GoodsItem.vue'

const CategoryData = ref<CategoryFilterResult>()

const route = useRoute()

const getCategoryData = async (id: string) => {
  const res = await getCategoryFilterAPI(id)
  CategoryData.value = res.result
}

onMounted(() => getCategoryData(route.params.id as string))

const goodList = ref<Good[]>()
const reqData = ref<SubCategoryRequest>()
const getGoodList = async (id: string) => {
  reqData.value = {
    categoryId: id,
    page: 1,
    pageSize: 10,
    sortField: 'publishTime'
  }
  const res = await getSubCategoryAPI(reqData.value)
  goodList.value = res.result.items
}

onMounted(() => getGoodList(route.params.id as string))
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${CategoryData?.parentId}` }"
          >{{ CategoryData?.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ CategoryData?.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs>
        <el-tab-pane
          label="最新商品"
          name="publishTime"
        ></el-tab-pane>
        <el-tab-pane
          label="最高人气"
          name="orderNum"
        ></el-tab-pane>
        <el-tab-pane
          label="评论最多"
          name="evaluateNum"
        ></el-tab-pane>
      </el-tabs>
      <div class="body">
        <!-- 商品列表-->
        <GoodsItem
          v-for="goods in goodList"
          :key="goods.id"
          :goods="goods"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
