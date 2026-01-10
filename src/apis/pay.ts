import type { PayResult } from '@/types/pay'
import { request } from '@/utils/request'

/**
 * 支付基础信息
 * @param id 订单id
 * @returns 支付基础信息
 */
export const getPayInfoApi = (id: string) => request<PayResult>(`/member/order/${id}`)
