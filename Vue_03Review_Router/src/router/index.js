import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const User = () => import("../views/User.vue");
const Admin = () => import("../views/Admin.vue");
const Sample = () => import("../views/Sample.vue");

const routes = [
  {
    path: '/',
    name: 'User',
    component: User
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  },
  {
    // 해당 path는 /sample/파라미터 가 꼭 와야지 Sample라는 Component를 보여줍니다.
    // 마지막에 :userId 라고 하면 파라미터가 꼭 와야합니다.
    path: '/sample/:userId',
    name: 'Sample',
    component: Sample
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


