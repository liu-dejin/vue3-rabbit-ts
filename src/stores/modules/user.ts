// 管理用户模块
import { loginApi } from '@/apis/user'
import type { LoginRequest, LoginResponse } from '@/types/user'

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<LoginResponse>()
    const getUserInfo = async ({ account, password }: LoginRequest) => {
      const res = await loginApi({ account, password })
      userInfo.value = res.result
    }
    return {
      userInfo,
      getUserInfo
    }
  },
  {
    persist: true
  }
)
