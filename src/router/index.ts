import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: 'category/:id',
        component: () => import('@/views/Category/index.vue')
      },
      {
        path: 'category/sub/:id',
        component: () => import('@/views/SubCategory/index.vue')
      },
      {
        path: 'detail/:id',
        component: () => import('@/views/Detail/index.vue')
      },
      {
        path: 'cartlist',
        component: () => import('@/views/CartList/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // 路由行为配置
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
