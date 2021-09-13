import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "workplace" */ '../views/dashboard/Workplace.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

router.beforeEach(async (to, from, next) => {
  // 等待Keycloak初始化，然后就可以安全地调用所有方法了(Keycloak初始化是异步的)
  while (router.app.$keycloak.createLoginUrl === null) {
    await sleep(100)
  }
  if (router.app.$keycloak.authenticated) {
    next()
  } else {
    if (router.app.$keycloak.createLoginUrl) {
      const loginUrl = router.app.$keycloak.createLoginUrl()
      window.location.replace(loginUrl)
    }
    // 中断当前的导航
    next(false)
  }
})

export default router
