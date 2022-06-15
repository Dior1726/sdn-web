import { TokenService } from 'src/services/token.service'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.required)) {
    if (TokenService.getToken()) {
      next()
      return
    }
    next('/login')
  }
  next()
})


export default router