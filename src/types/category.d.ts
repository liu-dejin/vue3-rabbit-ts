/** 商品简要信息 */
export type Good = {
  /** 商品 id */
  id: string
  /** 商品名字 */
  name: string
  /** 商品描述 */
  desc: string
  /** 商品价格 */
  price: string
  /** 商品图片 */
  picture: string
  /** 商品订单数(销量) */
  orderNum: number
  /** 商品折扣 */
  discount?: string // 改为可选属性
}

/** 二级分类 */
export type Child = {
  /** 二级分类 id */
  id: string
  /** 二级分类名字 */
  name: string
  /** 二级分类图片 */
  picture: string
  /** 二级分类下属商品 */
  goods: Good[]
  /** 二级分类父级分类 id */
  parentId?: string
  /** 二级分类父级分类名字 */
  parentName?: string
  /** 推荐品牌 */
  brands?: string
  /** 分类集合 */
  categories?: string
  /** 销售属性 */
  saleProperties?: string
}

/** 响应结果：一级分类 */
export type Category = {
  /** 一级分类 id */
  id: string
  /** 一级分类名字 */
  name: string
  /** 一级分类图片 */
  picture?: string
  /** 下属二级分类数组 */
  children: Child[]
}
