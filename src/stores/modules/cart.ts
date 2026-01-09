import type { CartItem } from '@/types/cart'
import { useUserStore } from './user'
import { addCartApi, deleteCartApi, getCartListApi } from '@/apis/cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo?.token)
    // 购物车列表
    const cartList = ref<CartItem[]>([])
    const addCart = async (goods: CartItem) => {
      if (isLogin.value) {
        await addCartApi({ skuId: goods.skuId, count: goods.count })
        await getCartList()
      } else {
        const item = cartList.value.find(item => item.skuId === goods.skuId)
        item ? (item.count += goods.count) : cartList.value.push(goods)
      }
    }
    // 删除购物车
    const delCart = async (skuId: string) => {
      if (isLogin.value) {
        await deleteCartApi([skuId])
        await getCartList()
      } else {
        const index = cartList.value.findIndex(item => item.skuId === skuId)
        cartList.value.splice(index, 1)
      }
    }
    // 获取最新购物车列表
    const getCartList = async () => {
      const res = await getCartListApi()
      cartList.value = res.result
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

    // 已选择数量
    const checkedCount = computed(() =>
      cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0)
    )
    // 已选择商品价格合计
    const checkedPrice = computed(() =>
      cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0)
    )
    // 清空购物车
    const clearCart = () => {
      cartList.value = []
    }
    return {
      isLogin,
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      isAll,
      isIndeterminate,
      allCheck,
      checkedCount,
      checkedPrice,
      getCartList,
      clearCart
    }
  },
  {
    persist: true
  }
)
