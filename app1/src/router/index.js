import {createRouter, createWebHistory} from 'vue-router'

// const router = createRouter({
//   history: createWebHistory(),
//   routes: 
// })

import view1 from '@/views/view1.vue'
import view2 from '@/views/view2.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/1',
  },
  {
    path: '/1',
    name: '1',
    meta: {
      title: '1',
    },
    component: () => import('../views/view1.vue'),
  },
  {
    path: '/2',
    name: '2',
    meta: {
      title: '2',
    },
    component: () => import('../views/view2.vue'),
  },
]

export default routes
