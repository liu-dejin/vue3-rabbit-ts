/** 订单属性 */
export type OrderProperty = {
  /** 属性主名称 */
  propertyMainName: string
  /** 属性值名称 */
  propertyValueName: string
}

/** 订单商品 SKU 信息 */
export type OrderSku = {
  /** SKU ID */
  id: string
  /** SPU ID */
  spuId: string
  /** 商品名称 */
  name: string
  /** 购买数量 */
  quantity: number
  /** 商品图片地址 */
  image: string
  /** 实付金额 */
  realPay: number
  /** 当前单价 */
  curPrice: number
  /** 总金额 (可能为 null) */
  totalMoney: number | null
  /** 属性列表 */
  properties: OrderProperty[]
  /** 属性文本描述 */
  attrsText: string
}

/** 订单项信息 */
export type OrderItem = {
  /** 订单 ID */
  id: string
  /** 创建时间 */
  createTime: string
  /** 支付类型 */
  payType: number
  /** 订单状态 (1为待付款等) */
  orderState: number
  /** 最晚支付时间 */
  payLatestTime: string
  /** 邮费 */
  postFee: number
  /** 应付金额 */
  payMoney: number
  /** 商品总价 */
  totalMoney: number
  /** 商品总数量 */
  totalNum: number
  /** 商品 SKU 列表 */
  skus: OrderSku[]
  /** 支付渠道 */
  payChannel: number
  /** 倒计时(秒)，-1 表示已结束 */
  countdown: number
}

/** 分页查询结果 */
export type OrderPageResult = {
  /** 总记录数 */
  counts: number
  /** 每页大小 */
  pageSize: number
  /** 总页数 */
  pages: number
  /** 当前页码 */
  page: number
  /** 订单列表数据 */
  items: OrderItem[]
}
