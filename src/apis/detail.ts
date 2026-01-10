import type { DetailResult, ProductItem } from '@/types/detail'
import { request } from '@/utils/request'

/**
 * 获取商品详情
 * @param id 商品id
 * @returns 商品详情数据
 */
export const getDetailApi = (id: string) => {
  return request<DetailResult>('/goods', 'GET', { id })
}
/**
 * 获取商品热榜
 * @param id 商品id
 * @param type 热榜类型，1为周榜，2为月榜，3为总榜
 * @param limit 热榜商品数量，默认3条
 * @returns 热榜商品数据
 */
export const fetchHotGoodsAPI = ({ id = '', type = 1, limit = 3 }) =>
  request<ProductItem[]>('/goods/hot', 'GET', {
    id,
    type,
    limit
  })
