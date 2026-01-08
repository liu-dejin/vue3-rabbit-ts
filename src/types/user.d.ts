export type LoginRequest = {
  /** 用户名或手机号 */
  account: string
  /** 密码 */
  password: string
}
export type LoginResponse = {
  /** 用户名 */
  account: string
  /** 用户头像 */
  avatar: string
  /** 用户生日 */
  birthday: string
  /** 用户所在城市编码 */
  cityCode: string
  /** 用户性别 */
  gender: string
  /** 用户id */
  id: string
  /** 用户手机号 */
  mobile: string
  /** 用户昵称 */
  nickname: string
  /** 用户职业 */
  profession: string
  /** 用户所在省份编码 */
  provinceCode: string
  /** 用户token */
  token: string
}
