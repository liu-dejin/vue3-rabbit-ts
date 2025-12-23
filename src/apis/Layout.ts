import type { CategoryItem } from '@/types/layout'
import { request } from '@/utils/request'
/**
 * 获取-分类数据
 * @returns 分类数据
 */
export const getCategoryApi = () => request<CategoryItem[]>('home/category/head')
