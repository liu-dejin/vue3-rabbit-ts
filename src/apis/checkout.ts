import type {
  Address,
  CheckoutResult,
  CheckoutSubmit,
  CheckoutSubmitResult
} from '@/types/checkout'
import { request } from '@/utils/request'

/**
 * 订单详情
 * @returns
 */

export const getOrderDetailApi = () => request<CheckoutResult>('/member/order/pre')
/**
 * 提交订单
 * @param data
 * @returns
 */
export const submitOrderApi = (data: CheckoutSubmit) =>
  request<CheckoutSubmitResult>('/member/order', 'post', data)
/**
 * 添加地址
 * @param data
 * @returns
 */
export const addAddressApi = (data: Address) =>
  request<{ id: string }>('/member/address', 'post', data)
