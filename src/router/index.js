import { createRouter, createWebHistory } from 'vue-router';



const routes = [
  {
    path: '',
    name: 'app',
    redirect: { name: 'products' }
  },
  {
    path: '/products',
    name: 'products',
    // route level code-splitting
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "products" */ '../views/ProductsView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cart" */ '../views/CartView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
