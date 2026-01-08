import { useUserStore } from '@/stores'

import axios, { type Method } from 'axios'

// 1. axios实例，基础配置
const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 10000 // 请求超过10秒就报错
})

// axios请求拦截器
instance.interceptors.request.use(
  config => {
    const userStore = useUserStore()
    if (userStore.userInfo?.token) {
      config.headers.Authorization = `Bearer ${userStore.userInfo?.token}`
    }
    return config
  },
  e => Promise.reject(e)
)

// axios响应式拦截器
instance.interceptors.response.use(
  res => res.data,
  e => {
    // 统一错误提示
    ElMessage({
      type: 'error',
      message: e.response?.data?.msg ?? '请求失败'
    })
    const userStore = useUserStore()
    const router = useRouter()
    if (e.response?.status === 401) {
      userStore.clearUserInfo()
      router.push('/login')
    }
    return Promise.reject(e)
  }
)

/**
 * 定义响应数据的类型结构
 *
 * @template T - 数据部分的类型
 */
type Data<T> = {
  code: string
  msg: string
  result: T
}

/**
 * 请求工具函数
 *
 * 发送HTTP请求并返回响应数据
 *
 * @template T - 响应数据的类型
 * @param url - 请求地址
 * @param method - 请求方法，默认为'get'
 * @param submitData - 提交的数据，可选
 * @returns Promise对象，解析为响应数据
 */
const request = <T>(url: string, method: Method = 'get', submitData?: object) => {
  return instance.request<T, Data<T>>({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

export { baseURL, instance, request }
