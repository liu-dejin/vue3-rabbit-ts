<script setup>
import axios from 'axios'
import Sku from './components/Sku.vue'
import { onMounted, ref } from 'vue'

const changeSku = skuObj => {
  console.log('emit changeSku', skuObj)
}

const goods = ref({})
onMounted(async () => {
  const res = await axios.get(
    'http://pcapi-xiaotuxian-front-devtest.itheima.net/goods?id=1369155859933827074'
  )
  goods.value = res.data.result
})
</script>

<template>
  <Sku
    @changeSku="changeSku"
    :goods
  />
</template>

<style lang="scss" scoped></style>
