<script setup lang="ts">
// 使用 type 定义 SKU 相关数据结构
export type SpecValue = {
  name: string
  picture?: string
  selected?: boolean
  disabled?: boolean
}

export type Spec = {
  id: string
  name: string
  values: SpecValue[]
}

export type SkuSpec = {
  name: string
  valueName: string
}

export type Sku = {
  id: string
  price: string
  oldPrice: string
  inventory: number
  specs: SkuSpec[]
}

export type Goods = {
  specs: Spec[]
  skus: Sku[]
}

// 定义事件传递的数据类型
export type SkuEmitPayload = {
  skuId?: string
  price?: string
  oldPrice?: string
  inventory?: number
  specsText?: string
}

// 路径字典类型
export type PathMap = Record<string, string[]>
import { computed, watchEffect } from 'vue'
import getPowerSet from './power-set'

// 1. 定义 Props
const props = defineProps<{
  goods: Goods
}>()

// 2. 定义 Emits
const emit = defineEmits<{
  (e: 'change', payload: SkuEmitPayload | Record<string, never>): void
}>()

const spliter = '★'

/**
 * 计算路径字典
 */
const pathMap = computed<PathMap>(() => {
  const map: PathMap = {}
  props.goods.skus?.forEach((sku: Sku) => {
    if (sku.inventory > 0) {
      const specs = sku.specs.map(spec => spec.valueName)
      const powerSet = getPowerSet(specs)
      powerSet.forEach((set: string[]) => {
        const key = set.join(spliter)
        if (!map[key]) map[key] = []
        map[key].push(sku.id)
      })
    }
  })
  return map
})

/**
 * 获取当前选中的规格数组（保留顺序和 undefined）
 */
const getSelectedArr = (specs: Spec[]): (string | undefined)[] => {
  return specs.map(spec => {
    const selectedVal = spec.values.find(val => val.selected)
    return selectedVal ? selectedVal.name : undefined
  })
}

/**
 * 更新按钮的禁用状态
 */
const updateDisabledStatus = (): void => {
  props.goods.specs.forEach((item, i) => {
    const selectedArr = getSelectedArr(props.goods.specs)
    item.values.forEach(val => {
      // 已经选中的按钮不需要判断禁用逻辑（或者根据业务需求决定是否可取消）
      if (val.selected) return

      // 模拟：假设用户点了这个按钮，组合后的 key 是否在 pathMap 中
      selectedArr[i] = val.name
      const key = selectedArr.filter((v): v is string => !!v).join(spliter)
      val.disabled = !pathMap.value[key]
    })
  })
}

// 初始化及 goods 变化时的处理
watchEffect(() => {
  if (props.goods.specs) {
    props.goods.specs.forEach(spec => {
      spec.values.forEach(val => {
        // 初始置灰逻辑：单个属性是否有库存
        val.disabled = !pathMap.value[val.name]
      })
    })
  }
})

/**
 * 核心点击逻辑
 */
const clickSpecs = (item: Spec, val: SpecValue): void => {
  if (val.disabled) return

  // 选中逻辑：排他思想
  if (val.selected) {
    val.selected = false
  } else {
    item.values.forEach(bv => {
      bv.selected = false
    })
    val.selected = true
  }

  // 更新所有按钮状态
  updateDisabledStatus()

  // 准备触发事件
  const rawSelected = getSelectedArr(props.goods.specs)
  const selectedNames = rawSelected.filter((v): v is string => !!v)

  if (selectedNames.length === props.goods.specs.length) {
    // 规格选全了
    const key = selectedNames.join(spliter)
    const skuId = pathMap.value[key]?.[0]
    const sku = props.goods.skus.find(s => s.id === skuId)

    if (sku) {
      emit('change', {
        skuId: sku.id,
        price: sku.price,
        oldPrice: sku.oldPrice,
        inventory: sku.inventory,
        specsText: sku.specs.reduce((p, n) => `${p} ${n.name}：${n.valueName}`, '').trim()
      })
    }
  } else {
    // 没选全，传空对象
    emit('change', {})
  }
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
          <img
            v-if="val.picture"
            :class="{ selected: val.selected, disabled: val.disabled }"
            :src="val.picture"
            :title="val.name"
            @click="clickSpecs(item, val)"
          />
          <span
            v-else
            :class="{ selected: val.selected, disabled: val.disabled }"
            @click="clickSpecs(item, val)"
          >
            {{ val.name }}
          </span>
        </template>
      </dd>
    </dl>
  </div>
</template>

<style scoped lang="scss">
/* 保持原有的样式不变 */
@mixin sku-state-mixin {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: #27ba9b; // 假设 $xtxColor 是这个
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
        @include sku-state-mixin;
      }
      > span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        @include sku-state-mixin;
      }
    }
  }
}
</style>
