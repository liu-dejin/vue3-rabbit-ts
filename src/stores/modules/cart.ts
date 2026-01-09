import type { CartItem } from '@/types/cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    // 购物车列表
    const cartList = ref<CartItem[]>([])
    // 添加购物车
    const addCart = (goods: CartItem) => {
      const item = cartList.value.find(item => item.skuId === goods.skuId)
      if (item) {
        item.count += goods.count
      } else {
        cartList.value.push(goods)
      }
    }
    // 删除购物车
    const delCart = (skuId: string) => {
      const index = cartList.value.findIndex(item => item.skuId === skuId)
      cartList.value.splice(index, 1)
    }
    // 总商品数量
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    // 总价钱
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    // 单选功能
    const singleCheck = (skuId: string, selected: boolean) => {
      const item = cartList.value.find(item => item.skuId === skuId)
      if (item) {
        item.selected = selected
      }
    }
    // 全选功能
    const isAll = computed(() => cartList.value.every(item => item.selected))
    const allCheck = (selected: boolean) => {
      cartList.value.forEach(item => (item.selected = selected))
    }
    // 中间状态
    const isIndeterminate = computed(() => {
      const checkedCount = cartList.value.filter(item => item.selected).length
      return checkedCount > 0 && checkedCount < cartList.value.length
    })

    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      isAll,
      isIndeterminate,
      allCheck
    }
  },
  {
    persist: true
  }
)
