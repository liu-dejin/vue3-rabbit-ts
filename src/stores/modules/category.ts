import { getCategoryApi } from '@/apis/layout'
import type { CategoryItem } from '@/types/layout'
export const useCategoryStore = defineStore('category', () => {
  // 全部分类
  const categoryList = ref<CategoryItem[]>([])
  // 获取全部分类
  const getCategoryList = async () => {
    const res = await getCategoryApi()
    categoryList.value = res.result
  }
  return {
    categoryList,
    getCategoryList
  }
})
