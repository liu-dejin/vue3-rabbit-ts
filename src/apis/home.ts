// 获取-轮播图数据

import type { BannerItem } from '@/types/banner'
import { request } from '@/utils/request'

export const getHomeBannerApi = () => request<BannerItem[]>('/home/banner')
