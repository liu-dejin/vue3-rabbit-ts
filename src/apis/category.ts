import type {
  Category,
  CategoryFilterResult,
  SubCategoryRequest,
  SubCategoryResult
} from '@/types/category'
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
/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */

export const getSubCategoryAPI = (data: SubCategoryRequest) => {
  return request<SubCategoryResult>('/category/goods/temporary', 'POST', data)
}
