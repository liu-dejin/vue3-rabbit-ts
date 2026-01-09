/**响应结果 */
export type CheckoutResult = {
  /**订单商品集合 */
  goods: Good[]
  /**订单总计信息 */
  summary: Summary
  /**订单内用户地址列表 */
  userAddresses: UserAddress[]
}
export type Good = {
  /**商品属性 */
  attrsText: string
  /**商品数量，购买数量 */
  count: number
  /**商品id */
  id: string
  /**商品名字 */
  name: string
  /**商品实付单价 */
  payPrice: string
  /**商品图片 */
  picture: string
  /**商品价格 */
  price: string
  /**商品sku的id */
  skuId: string
  /**商品实付价格小计 */
  totalPayPrice: string
  /**商品小计总价 */
  totalPrice: string
}

/**订单总计信息 */
export type Summary = {
  /**订单总折扣 */
  discountPrice: number
  /**订单总件数 */
  goodsCount: number
  /**订单总邮费 */
  postFee: number
  /**订单总价格实付 */
  totalPayPrice: number
  /**订单总价格 */
  totalPrice: number
}

export type UserAddress = {
  /**收货详细地址 */
  address: string
  /**收货地址标签，用英文逗号分割 */
  addressTags: null | string
  /**收货地址-城市编码 */
  cityCode: string
  /**收货人-联系方式 */
  contact: string
  /**收货地址-地区编码 */
  countyCode: string
  /**收货完整地址 */
  fullLocation: string
  /**收货地址id */
  id: string
  /**是否为默认，0是, 1不是 */
  isDefault: number
  /**收货方-邮政编码 */
  postalCode: null | string
  /**收货地址-省份编码 */
  provinceCode: string
  /**收货人-名字 */
  receiver: string
}
