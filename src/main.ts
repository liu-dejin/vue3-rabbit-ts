import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// 引入初始化样式
import '@/styles/common.scss'

import 'element-plus/theme-chalk/src/message.scss'

import pinia from './stores'

const app = createApp(App)
// 引入懒加载插件并注册
import { lazyLoad } from './directives'
app.use(lazyLoad)
// 引入组件插件并注册 有自动导入插件用不上
// import { componentPlugins } from './components'
// app.use(componentPlugins)

app.use(pinia)
app.use(router)

app.mount('#app')
