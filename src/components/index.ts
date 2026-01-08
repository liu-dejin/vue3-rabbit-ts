// components 所有组件全局注册
// 插件 有自动导入插件用不上
import type { App } from 'vue'
import ImageView from './ImageView/index.vue'
import XtxSku from './XtxSku/index.vue'
export const componentPlugins = {
  install(app: App) {
    // app.component('组件名称', 组件配置对象)
    app.component('XtxImageView', ImageView)
    app.component('XtxSku', XtxSku)
  }
}
