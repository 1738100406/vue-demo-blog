import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: () => import("../views/Home.vue"),
    children: [
      { path: '', component: () => import("@/components/showBlog") },
      { path: '/addblog', component: () => import("@/components/addBlog") },
      { path: '/blog/:id', component: () => import("@/components/blogDetal") },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
