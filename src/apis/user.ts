import type { LoginRequest, LoginResponse } from '@/types/user'
import { request } from '@/utils/request'

/**
 * 登录接口
 * @param data 登录请求参数
 * @returns 登录响应参数
 */
export const loginApi = (data: LoginRequest) => {
  return request<LoginResponse>('/login', 'POST', data)
}
