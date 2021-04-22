<template>
  <div id="app">
    <div id="nav">
      <!-- Home Button을 클릭하면 Project의 Main인 /로 오게 되고 -->
      <router-link to="/addcount">Home</router-link> |
      <!-- About button을 클릭하면 Project의 /about로 가게 됩니다. -->
      <router-link to="/subcount">About</router-link>
    </div>
    <!-- rotuer-view란 router-link를 통해서 변경되는 Component가 보여질 부분입니다. -->
    <router-view/>

    <!-- 
      상태 관리( 중앙 저장소 )에 존재하는 변수를 관리하는 state에 접근하기 위해서는
      $를 사용합니다. $store에 있는 state 안에 count라는 변수를 가져와서 사용하겠다는 의미입니다.
      만일 상태 관리소인 Vuex에 아무것도 작성하지 않았다면 화면단에는 아무것도 표시되지 않습니다.
     -->
    <b> count : {{ this.$store.state.count }}</b>
    <br/>
    <!--
      +버튼을 클릭하게 되면 increment라는 function을
      -버튼을 클릭하게 되면 decrement라는 function을 실행합니다.
    -->
    <input type="button" @click="increment()" value="+">
    <input type="button" @click="decrement()" value="-">
  </div>
</template>

<script>
export default {
  methods: {
    // Vuex인 stroe을 사용하기 위해서 $store를 사용합니다.
    // 특정 Vuex에서 state에 존재하는 변수를 변경할 수 있는 Mutations에 함수를
    // 실행시키고 싶다면 commit을 사용합니다.
    // 그 후에 Mutations에 작성한 function명과 동일하게 작성합니다.
    increment: function(){
      this.$store.commit('increment');
    },
    decrement: function(){
      this.$store.commit('decrement');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
