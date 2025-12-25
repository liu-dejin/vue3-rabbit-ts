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
/** 分类筛选结果 */
export type CategoryFilterResult = {
  /** 分类 id */
  id: string
  /** 分类名称 */
  name: string
  /** 分类图片（可能为空） */
  picture: string | null
  /** 父级分类 id */
  parentId: string
  /** 父级分类名称 */
  parentName: string
  /** 商品列表 */
  goods: Good[]
  /** 子分类列表 */
  categories: CategoryItem[]
  /** 品牌列表 */
  brands: BrandItem[]
  /** 销售属性列表 */
  saleProperties: SalePropertyItem[]
}

/** 子分类项 */
export type CategoryItem = {
  /** 分类 id */
  id: string
  /** 分类名称 */
  name: string
  /** 层级深度 */
  layer: number
  /** 父节点（此处固定为 null） */
  parent: null
}

/** 品牌项 */
export type BrandItem = {
  /** 品牌 id */
  id: string
  /** 品牌中文名 */
  name: string
  /** 品牌英文名 */
  nameEn: string
  /** 品牌 logo */
  logo: string
  /** 品牌图片 */
  picture: string
  /** 类型（此处固定为 null） */
  type: null
  /** 品牌描述 */
  desc: string
  /** 品牌产地 */
  place: string
}

/** 销售属性项 */
export type SalePropertyItem = {
  /** 属性组 id */
  id: string
  /** 属性组名称 */
  name: string
  /** 属性列表 */
  properties: PropertyItem[]
}

/** 属性项 */
export type PropertyItem = {
  /** 属性 id */
  id: string
  /** 属性名称 */
  name: string
}
/** 子分类请求参数 */
export type SubCategoryRequest = {
  categoryId: string
  page: number
  pageSize: number
  sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
}
/** 子分类响应结果 */
export type SubCategoryResult = {
  /** 总数 */
  counts: number
  /** 每页大小 */
  pageSize: number
  /** 总页数 */
  pages: number
  /** 当前页码 */
  page: number
  /** 商品列表 */
  items: Good[]
}
