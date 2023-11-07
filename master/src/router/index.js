import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/app1'
    },
    // {
    //   path: '/app1',
    //   name: 'app1',
    //   meta: {
    //     title: '首页',
    //   },
    //   component: () => import('@/layout/MiddlePage.vue'),
    //   children: [
    //     {
    //       path: '/app1/1',
    //       component: () => import('@/layout/MiddlePage.vue'),
    //     }
    //   ]
    // },
    // {
    //   path: '/app2',
    //   name: 'app2',
    //   meta: {
    //     title: '首页',
    //   },
    //   component: () => import('@/views/view2.vue'),
    // },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/layout/MiddlePage.vue'),
    },
  ],
})

export default router
