import { getCategoryAPI } from '@/apis/category'
import type { Category } from '@/types/category'
export const useCategory = () => {
  const route = useRoute()

  const CategoryData = ref<Category>()

  const getCategory = async (id: string = route.params.id as string) => {
    const res = await getCategoryAPI(id)
    CategoryData.value = res.result
  }

  onMounted(() => getCategory())
  // 解决路由缓存问题 方法3
  // watch(
  //   () => route.params.id,
  //   newId => {
  //     getCategory(newId as string)
  //   }
  // )

  // 解决路由缓存问题 方法2 路由参数变化,分类数据接口重新发送
  onBeforeRouteUpdate(to => {
    getCategory(to.params.id as string)
  })
  return {
    CategoryData
  }
}
