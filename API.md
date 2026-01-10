# API 接口文档

## 目录

- [用户相关](#用户相关)
- [首页相关](#首页相关)
- [分类相关](#分类相关)
- [商品相关](#商品相关)
- [购物车相关](#购物车相关)
- [订单相关](#订单相关)
- [支付相关](#支付相关)

---

## 用户相关

### 登录接口

**接口地址：** `/login`

**请求方式：** `POST`

**请求参数：** `LoginRequest`

**响应数据：** `LoginResponse`

**函数名：** `loginApi`

**文件位置：** [user.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\user.ts#L9)

---

## 首页相关

### 获取首页banner列表

**接口地址：** `/home/banner`

**请求方式：** `GET`

**请求参数：**
- `distributionSite` (可选): 投放位置，1为首页，2为分类商品页，默认是1

**响应数据：** `BannerItem[]`

**函数名：** `getHomeBannerApi`

**文件位置：** [home.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\home.ts#L9)

### 获取新鲜好物

**接口地址：** `/home/new`

**请求方式：** `GET`

**请求参数：**
- `limit`: 需要的数据条数（后台设置默认4）

**响应数据：** `NewItem[]`

**函数名：** `findNewAPI`

**文件位置：** [home.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\home.ts#L16)

### 获取人气推荐

**接口地址：** `/home/hot`

**请求方式：** `GET`

**请求参数：** 无

**响应数据：** `HotItem[]`

**函数名：** `getHotAPI`

**文件位置：** [home.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\home.ts#L21)

### 获取所有商品模块

**接口地址：** `/home/goods`

**请求方式：** `GET`

**请求参数：** 无

**响应数据：** `GoodsCategory[]`

**函数名：** `getGoodsAPI`

**文件位置：** [home.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\home.ts#L26)

### 获取分类数据

**接口地址：** `/home/category/head`

**请求方式：** `GET`

**请求参数：** 无

**响应数据：** `CategoryItem[]`

**函数名：** `getCategoryApi`

**文件位置：** [layout.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\layout.ts#L7)

---

## 分类相关

### 获取一级分类列表数据

**接口地址：** `/category`

**请求方式：** `GET`

**请求参数：**
- `id`: 分类id

**响应数据：** `Category`

**函数名：** `getCategoryAPI`

**文件位置：** [category.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\category.ts#L14)

### 获取二级分类列表数据

**接口地址：** `/category/sub/filter`

**请求方式：** `GET`

**请求参数：**
- `id`: 分类id

**响应数据：** `CategoryFilterResult`

**函数名：** `getCategoryFilterAPI`

**文件位置：** [category.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\category.ts#L20)

### 获取导航数据

**接口地址：** `/category/goods/temporary`

**请求方式：** `POST`

**请求参数：** `SubCategoryRequest`
- `categoryId`: 分类id
- `page`: 页码
- `pageSize`: 每页数量
- `sortField`: 排序字段（'publishTime' | 'orderNum' | 'evaluateNum'）

**响应数据：** `SubCategoryResult`

**函数名：** `getSubCategoryAPI`

**文件位置：** [category.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\category.ts#L32)

---

## 商品相关

### 获取商品详情

**接口地址：** `/goods`

**请求方式：** `GET`

**请求参数：**
- `id`: 商品id

**响应数据：** `DetailResult`

**函数名：** `getDetailApi`

**文件位置：** [detail.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\detail.ts#L9)

### 获取商品热榜

**接口地址：** `/goods/hot`

**请求方式：** `GET`

**请求参数：**
- `id`: 商品id
- `type`: 热榜类型，1为周榜，2为月榜，3为总榜，默认1
- `limit`: 热榜商品数量，默认3条

**响应数据：** `ProductItem[]`

**函数名：** `fetchHotGoodsAPI`

**文件位置：** [detail.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\detail.ts#L19)

### 获取商品相关推荐列表

**接口地址：** `/goods/relevant`

**请求方式：** `GET`

**请求参数：**
- `limit`: 推荐数量

**响应数据：** `Good[]`

**函数名：** `getLikeListAPI`

**文件位置：** [member.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\member.ts#L10)

---

## 购物车相关

### 添加购物车

**接口地址：** `/member/cart`

**请求方式：** `POST`

**请求参数：** `CartAddData`
- `skuId`: 商品sku的id
- `count`: 商品数量

**响应数据：** 无

**函数名：** `addCartApi`

**文件位置：** [cart.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\cart.ts#L13)

### 获取购物车列表

**接口地址：** `/member/cart`

**请求方式：** `GET`

**请求参数：** 无

**响应数据：** `CartItem[]`

**函数名：** `getCartListApi`

**文件位置：** [cart.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\cart.ts#L19)

### 合并购物车

**接口地址：** `/member/cart/merge`

**请求方式：** `POST`

**请求参数：** `MergeCartData[]`
- `count`: 商品数量
- `selected`: 商品选中状态
- `skuId`: 商品sku的id

**响应数据：** 无

**函数名：** `mergeCartApi`

**文件位置：** [cart.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\cart.ts#L33)

### 删除购物车商品

**接口地址：** `/member/cart`

**请求方式：** `DELETE`

**请求参数：**
- `ids`: 商品id数组

**响应数据：** 无

**函数名：** `deleteCartApi`

**文件位置：** [cart.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\cart.ts#L40)

### 修改-购物车全选/取消

**接口地址：** `/member/cart/selected`

**请求方式：** `PUT`

**请求参数：**
- `selected`: 选中状态
- `ids`: 商品id数组

**响应数据：** 无

**函数名：** `updateCartSelectApi`

**文件位置：** [cart.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\cart.ts#L46)

---

## 订单相关

### 订单详情

**接口地址：** `/member/order/pre`

**请求方式：** `GET`

**请求参数：** 无

**响应数据：** `CheckoutResult`

**函数名：** `getOrderDetailApi`

**文件位置：** [checkout.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\checkout.ts#L13)

### 提交订单

**接口地址：** `/member/order`

**请求方式：** `POST`

**请求参数：** `CheckoutSubmit`

**响应数据：** `CheckoutSubmitResult`

**函数名：** `submitOrderApi`

**文件位置：** [checkout.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\checkout.ts#L19)

### 获取用户订单列表

**接口地址：** `/member/order`

**请求方式：** `GET`

**请求参数：** `OrderListParams`
- `orderState`: 订单状态
- `page`: 页码
- `pageSize`: 每页数量

**响应数据：** `OrderPageResult`

**函数名：** `getOrderListAPI`

**文件位置：** [member.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\member.ts#L24)

### 添加地址

**接口地址：** `/member/address`

**请求方式：** `POST`

**请求参数：** `Address`

**响应数据：** `{ id: string }`

**函数名：** `addAddressApi`

**文件位置：** [checkout.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\checkout.ts#L26)

---

## 支付相关

### 支付基础信息

**接口地址：** `/member/order/${id}`

**请求方式：** `GET`

**请求参数：**
- `id`: 订单id（路径参数）

**响应数据：** `PayResult`

**函数名：** `getPayInfoApi`

**文件位置：** [pay.ts](file:///d:\code\Learning\vue-rabbit-ts\src\apis\pay.ts#L9)

---

## 接口统计

| 模块 | 接口数量 |
|------|---------|
| 用户相关 | 1 |
| 首页相关 | 5 |
| 分类相关 | 3 |
| 商品相关 | 3 |
| 购物车相关 | 5 |
| 订单相关 | 4 |
| 支付相关 | 1 |
| **总计** | **22** |
