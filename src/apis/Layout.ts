import type { CategoryItem } from '@/types/category'
import { request } from '@/utils/request'
export const getCategoryApi = () => request<CategoryItem[]>('home/category/head')
