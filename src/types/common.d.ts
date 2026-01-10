/** 核心商品模型 */
export type Good = {
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
