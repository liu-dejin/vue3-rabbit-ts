import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化样式
import '@/styles/common.scss'

const app = createApp(App)
// 引入懒加载插件并注册
import { lazyLoad } from './directives'
app.use(lazyLoad)

app.use(createPinia())
app.use(router)

app.mount('#app')
