import type { Good } from './common'

export type CategoryItem = {
  /** 子分类数组 */
  children: ChildItem[]
  /** 分类下属商品 */
  goods: GoodItem[]
  /** 分类id */
  id: string
  /** 分类名字 */
  name: string
  /** 分类图片 */
  picture: string
}

export type ChildItem = {
  /** 三级分类数组，三级分类数组(暂无) */
  children?: ChildItem[]
  /** 二级级分类下属商品数组，二级分类商品数组(暂无) */
  goods?: GoodItem[]
  /** 二级分类id */
  id: string
  /** 二级分类名字 */
  name: string
  /** 二级分类图片 */
  picture: string
}

export type GoodItem = Good
