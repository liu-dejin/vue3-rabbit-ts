import type { CartItem } from '@/types/cart'
import { request } from '@/utils/request'

/**
 * 添加购物车
 * @param data
 * @returns
 */
export type CartAddData = {
  skuId: string
  count: number
}
export const addCartApi = (data: CartAddData) => request('/member/cart', 'POST', data)
/**
 * 获取购物车列表
 * @param data
 * @returns
 */
export const getCartListApi = () => request<CartItem[]>('/member/cart', 'GET')
/**
 * 合并购物车
 * @param data
 * @returns
 */
export type MergeCartData = {
  /** 商品数量 */
  count: number
  /** 商品选中状态 */
  selected: boolean
  /** 商品sku的id */
  skuId: string
}
export const mergeCartApi = (data: MergeCartData[]) => request('/member/cart/merge', 'POST', data)

/**
 * 删除购物车商品
 * @param data
 * @returns
 */
export const deleteCartApi = (ids: string[]) => request('/member/cart', 'DELETE', { ids })
