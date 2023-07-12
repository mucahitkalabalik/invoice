// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Create',
        component: () => import('@/views/Create.vue'),
        meta: { transition: 'fade' },
      },
      {
        path: '/list',
        name: 'List',
        meta: { transition: 'fade' },
        component: () => import('@/views/List.vue'),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
