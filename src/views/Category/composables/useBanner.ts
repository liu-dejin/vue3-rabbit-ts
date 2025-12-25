import { getHomeBannerApi } from '@/apis/home'
import type { BannerItem } from '@/types/home'
export const useBanner = () => {
  const bannerList = ref<BannerItem[]>()

  const getBannerList = async () => {
    const res = await getHomeBannerApi('2')
    bannerList.value = res.result
  }

  onMounted(() => getBannerList())
  return {
    bannerList
  }
}
