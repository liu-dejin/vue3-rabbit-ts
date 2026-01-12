<script setup>
import { toRefs, watch } from 'vue'

import { bwPowerSet } from '@/components/XtxSku/power-set'

// 抛出sku对象
const emit = defineEmits(['changeSku'])

// 接受父组件获取的商品数据
// 1.defineProps  响应式解构后 不用加.value
const {goods} = defineProps({
  goods: {
    type: Object,
    default: () => ({})
  }
})
console.log(goods)

// 2.defineModel 父组件v-model:goods 绑定商品数据 子组件要加.value
// const goods = defineModel('goods')

let pathMap = {}
const getGoods = async () => {
  // 1135076  初始化就有无库存的规格
  // 1369155859933827074 更新之后有无库存项（蓝色-20cm-中国）

  pathMap = getPathMap(goods)
  console.log(pathMap)
  initDisableStatus(goods.specs, pathMap)
}
watch(() => goods, getGoods)

// 切换规格项函数
const changeSku = (item, val) => {
  // 禁用项不能点击
  if (val.disabled) return

  // item 同排的对象
  // val 当前点击项
  if (val.selected) {
    val.selected = false
  } else {
    // 先取消同排的选中
    item.values.forEach(item => (item.selected = false))
    // 再选中当前项
    val.selected = true
  }
  // 更新禁用状态
  updateDisabledStatus(goods.specs, pathMap)
  const index = getSelectedValue(goods.specs).findIndex(item => item === undefined)
  if (index > -1) {
    console.log('找到了，信息不完整')
  } else {
    console.log('没有找到，信息完整，可以产出')
    const key = getSelectedValue(goods.specs).join('-')
    const skuIds = pathMap[key]
    console.log(skuIds)

    const skuObj = goods.skus.find(item => item.id === skuIds[0])
    // console.log(skuObj)
    emit('changeSku', skuObj)
  }
}

// 生成有效路径字典函数
const getPathMap = goods => {
  const pathMap = {}
  // 有效sku
  const effectiveSku = goods.skus.filter(sku => sku.inventory > 0)

  effectiveSku.forEach(sku => {
    // 规格名数组
    const SkuvalueName = sku.specs.map(item => item.valueName)
    // 规格名的所有子集
    const SkuvalueNamePowset = bwPowerSet(SkuvalueName)
    // 遍历所有子集，生成路径
    SkuvalueNamePowset.forEach(arr => {
      const key = arr.join('-')
      // 如果路径已存在，添加当前sku id
      if (pathMap[key]) {
        pathMap[key].push(sku.id)
      } else {
        // 否则创建新路径，包含当前sku id
        pathMap[key] = [sku.id]
      }
    })
  })

  return pathMap
}

// 初始化禁用状态
const initDisableStatus = (specs, pathMap) => {
  specs.forEach(spec => {
    spec.values.forEach(val => {
      if (pathMap[val.name]) {
        val.disabled = false
      } else {
        val.disabled = true
      }
    })
  })
}

// 获取选中项数据
const getSelectedValue = specs => {
  const arr = []
  specs.forEach(spec => {
    const selectedValue = spec.values.find(item => item.selected)
    arr.push(selectedValue ? selectedValue.name : undefined)
  })
  return arr
}

// 切换时更新禁用状态
const updateDisabledStatus = (specs, pathMap) => {
  specs.forEach((spec, index) => {
    const selectedValues = getSelectedValue(specs)
    spec.values.forEach(val => {
      selectedValues[index] = val.name
      const key = selectedValues.filter(value => value).join('-')
      if (pathMap[key]) {
        val.disabled = false
      } else {
        val.disabled = true
      }
    })
  })
}
</script>

<template>
  <div class="goods-sku">
    <dl
      v-for="item in goods.specs"
      :key="item.id"
    >
      <dt>{{ item.name }}</dt>
      <dd>
        <template
          v-for="val in item.values"
          :key="val.name"
        >
          <!-- 图片类型规格 -->
          <img
            @click="changeSku(item, val)"
            :class="{ selected: val.selected, disabled: val.disabled }"
            v-if="val.picture"
            :src="val.picture"
            :title="val.name"
          />
          <!-- 文字类型规格 -->
          <span
            @click="changeSku(item, val)"
            :class="{ selected: val.selected, disabled: val.disabled }"
            v-else
            >{{ val.name }}</span
          >
        </template>
      </dd>
    </dl>
  </div>
</template>

<style scoped lang="scss">
@mixin sku-state-mixin {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;

  &.selected {
    border-color: #27ba9b;
  }

  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}

.goods-sku {
  padding-left: 10px;
  padding-top: 20px;

  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;

    dt {
      width: 50px;
      color: #999;
    }

    dd {
      flex: 1;
      color: #666;

      > img {
        width: 50px;
        height: 50px;
        margin-bottom: 4px;
        @include sku-state-mixin;
      }

      > span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        margin-bottom: 4px;
        @include sku-state-mixin;
      }
    }
  }
}
</style>
