import type { BannerItem, GoodsCategory, HotItem, NewItem } from '@/types/home'
import { request } from '@/utils/request'

/**
 * 获取首页banner列表
 * @returns banner列表
 */
export const getHomeBannerApi = () => request<BannerItem[]>('/home/banner')

/**
 * 获取新鲜好物
 * @param limit - 需要的数据条数（后台设置默认4）
 * @returns 新鲜好物列表
 */
export const findNewAPI = (limit: string) => request<NewItem[]>('/home/new', 'GET', { limit })
/**
 * @description: 获取人气推荐
 * @returns 人气推荐列表
 */
export const getHotAPI = () => request<HotItem[]>('home/hot')
/**
 * @description: 获取所有商品模块
 * @returns 商品模块列表
 */
export const getGoodsAPI = () => request<GoodsCategory[]>('/home/goods')
