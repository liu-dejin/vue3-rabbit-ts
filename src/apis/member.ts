import type { Good } from '@/types/common'
import { request } from '@/utils/request'

/**
 * 获取商品相关推荐列表
 * @param limit 推荐数量
 * @returns
 */
export const getLikeListAPI = (limit: number) =>
  request<Good[]>('/goods/relevant', 'GET', { limit })
