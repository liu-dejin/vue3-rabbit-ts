export type BannerItem = {
  /** 轮播图跳转链接 */
  hrefUrl: string
  /** 轮播图id */
  id: string
  /** 轮播图地址 */
  imgUrl: string
  /** 轮播图跳转类型，跳转类型: 1、页面2、H5 3、小程序（小程序使用） */
  type: string
}
export type NewItem = {
  /** 商品描述 */
  desc: string
  /** 商品折扣 */
  discount?: string
  /** 商品id */
  id: string
  /** 商品名字 */
  name: string
  /** 商品订单数(销量) */
  orderNum: number
  /** 商品图片 */
  picture: string
  /** 商品价格 */
  price: string
}
export type HotItem = {
  /** 推荐别名 */
  alt: string
  /** 推荐id */
  id: string
  /** 推荐图片 */
  picture: string
  /** 推荐标题 */
  title: string
}
/** 包含商品的分类对象 */
export type GoodsCategory = {
  /** 分类ID */
  id: string
  /** 分类名称 */
  name: string
  /** 分类图片 */
  picture: string
  /** 促销信息 */
  saleInfo: string
  /** 子级分类 */
  children: CategoryChild[]
  /** 商品列表 */
  goods: GoodsItem[]
}

/** 子分类模型 */
export type CategoryChild = {
  /** 子分类ID */
  id: string
  /** 子分类名称 */
  name: string
  /** 层级 */
  layer: number
  /** 父级节点 */
  parent?: string
}

/** 核心商品模型 */
export type GoodsItem = {
  /** 商品唯一ID */
  id: string
  /** 商品名称 */
  name: string
  /** 商品详细描述 */
  desc: string
  /** 商品价格（字符串格式） */
  price: string
  /** 商品图片URL */
  picture: string
  /** 销量/已订购数量 */
  orderNum: number
}
