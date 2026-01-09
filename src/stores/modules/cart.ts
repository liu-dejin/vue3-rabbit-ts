import type { CartItem } from '@/types/cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cartList = ref<CartItem[]>([])
    const addCart = (goods: CartItem) => {
      const item = cartList.value.find(item => item.skuId === goods.skuId)
      if (item) {
        item.count += goods.count
      } else {
        cartList.value.push(goods)
      }
    }
    return {
      cartList,
      addCart
    }
  },
  {
    persist: true
  }
)
