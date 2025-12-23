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
  discount: null
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
