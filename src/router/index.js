import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/home.vue'

const routes = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行

  if(to.path == '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if(tokenStr=='123') return next()
  else return next('/login')
})

export default router
