import type { CheckoutResult } from '@/types/checkout'
import { request } from '@/utils/request'

/**
 * 订单详情
 * @returns
 */

export const getOrderDetailApi = () => request<CheckoutResult>('/member/order/pre')
