import Vue from 'vue'
// router를 사용하기 위해서 vue-router을 import합니다.
import VueRouter from 'vue-router'
// src 밑에 views 밑에 Home.vue 파일을 사용하기 위해 import합니다.
import AddCount from '../views/AddCount.vue'

// Vue에서 VueRouter을 사용할 수 있게 설정을 잡습니다.
Vue.use(VueRouter)

// Router 설정
// router를 등록하는 방법은 2가지가 있습니다.
// 1. 위와 같이 import를 먼저 해준 후 사용한다.
// 2. 아래와 같이 사용과 동시에 import를 해준다.
const routes = [
  {
    // /라는 path로 요청이 들어오면
    path: '/addcount',
    // Home이라는 이름으로 지정하고
    name: 'AddCount',
    // Component Home을 보여줍니다.
    component: AddCount
  },
  {
    // /about라는 요청이 들어오면
    path: '/subcount',
    // About라는 이름으로
    name: 'SubCount',
    // 방금 import를 한 따끈한 About.vue를 보여줍니다.
    component: () => import(/* webpackChunkName: "about" */ '../views/SubCount.vue')
  }
]
// 위서 설정한 routes를 등록합니다.
const router = new VueRouter({
  routes
})

export default router

