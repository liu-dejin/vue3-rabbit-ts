import type { Category } from '@/types/category'
import { request } from '@/utils/request'

// 修正版
export const getCategoryAPI = (id: string) => request<Category>('/category', 'GET', { id })
