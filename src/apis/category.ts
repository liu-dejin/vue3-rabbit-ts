import type { Category, CategoryFilterResult } from '@/types/category'
import { request } from '@/utils/request'

/**
 * @description: 获取一级分类列表数据
 * @param  id 分类id
 * @returns 一级分类列表数据
 */
export const getCategoryAPI = (id: string) => request<Category>('/category', 'GET', { id })
/**
 * @description: 获取二级分类列表数据
 * @param  id 分类id
 * @returns 二级分类列表数据
 */
export const getCategoryFilterAPI = (id: string) =>
  request<CategoryFilterResult>('/category/sub/filter', 'GET', { id })
