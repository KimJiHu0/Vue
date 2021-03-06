import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const User = () => import("../views/User.vue");
const Admin = () => import("../views/Admin.vue");
const Sample = () => import("../views/Sample.vue");
const Child = () => import("../views/Child.vue");

const Child_First = () => import("@/components/child/Child_First.vue");
const Child_Update = () => import("@/components/child/Child_Update.vue");

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
    path: '/sample/:userId',
    name: 'Sample',
    component: Sample
  },
  {
    path: '/child',
    name: 'Child',
    component: Child,
    children: [
      {
        path:'/child/first/:userId',
        name:'Child_First',
        component: Child_First
      },
      {
        path: '/child/first/:userId/update',
        name: 'Child_Update',
        component: Child_Update
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


