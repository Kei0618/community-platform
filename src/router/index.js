import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import Article from '@/views/Home/article.vue'
import Edit from '@/views/Category/articleedit.vue'
import Application from '@/views/Login/application.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: '',
      component: Layout,
      children:[
        {
          // 默認的話給予空就可以
          path:'',
          component:Home
        },
        {
          path:'category',
          component:Category
        },
        {
          path:'article',
          component:Article
        },
        {
          path:'edit',
          component:Edit
        }
        ,
      ]
    },
    {
      path: '/Login',
      // name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login
    },
    {
      path: '/application',
      component: Application,
    }

  ]
})

export default router
