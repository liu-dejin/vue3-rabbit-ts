import type { Good } from '@/types/common'
import type { OrderPageResult } from '@/types/order'
import { request } from '@/utils/request'

/**
 * 获取商品相关推荐列表
 * @param limit 推荐数量
 * @returns
 */
export const getLikeListAPI = (limit: number) =>
  request<Good[]>('/goods/relevant', 'GET', { limit })
/**
 * 获取用户订单列表
 * @param orderState 订单状态
 * @param page 页码
 * @param pageSize 每页数量
 * @returns
 */
export type OrderListParams = {
  orderState: number
  page: number
  pageSize: number
}
export const getOrderListAPI = (param: OrderListParams) =>
  request<OrderPageResult>('/member/order', 'GET', param)
