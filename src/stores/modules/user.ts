// 管理用户模块
import { loginApi } from '@/apis/user'
import type { LoginRequest, LoginResponse } from '@/types/user'
import { useCartStore } from './cart'

export const useUserStore = defineStore(
  'user',
  () => {
    const cartStore = useCartStore()
    const userInfo = ref<LoginResponse>()
    const getUserInfo = async ({ account, password }: LoginRequest) => {
      const res = await loginApi({ account, password })
      userInfo.value = res.result
    }
    // 退出登录
    const clearUserInfo = () => {
      userInfo.value = undefined
      // 清空购物车
      cartStore.clearCart()
    }
    return {
      userInfo,
      getUserInfo,
      clearUserInfo
    }
  },
  {
    persist: true
  }
)
