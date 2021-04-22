import Vue from 'vue'
// Vue 전반적인 설정을 잡아준다.
// App.vue와 router, store를 사용할 수 있게 import를 한다.
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 그리고 Vue에 추가를 해준 후 render를 하여 app라는 id를 가진 요소와 mount를 한다.
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
