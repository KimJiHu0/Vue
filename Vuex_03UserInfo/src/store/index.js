import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state는 Vue에서 사용할 변수들을 의미합니다.
  // 각 Compontne에서는 state에 지정된 변수를
  // this.$store.state.??? 를 통해서 사용할 수 있습니다.
  state: {
    count: 0
  },
  // state를 조작할 수 있는 함수를 의미합니다.
  // state에 존재하는 count를 변경하고 싶다면 Mutation을 조작해야합니다.
  // 각 Component에서 mutations에 작성된 function을 사용하고 싶다면
  // this.$stroe.commit('mutations에 작성된 function명과 동일하게 작성') 하면 됩니다.
  mutations: {
    increment(state) {
      // increment가 실행되면 state에 있는 count를 ++하고
      state.count++
    },
    decrement(state) {
      // decrement가 실행되면 state에 있는 count를 --합니다.
      state.count--
    }
  }
})
