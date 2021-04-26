<template>
  <div>
      <h1>Router Sample</h1>
      <!-- 해당 userId를 뿌려주면 잘 나오게 됩니다. -->
      <!-- 대신 URL에 직접 입력해야하도록 설정이 잡혀있습니다. -->
      <p>유저의 ID는 {{ userId }}입니다.</p>
      <p>{{ $route.params.name }}</p>
      <p>Query : {{ $route.query }}</p>
      <p>Query.group : {{ $route.query.group }}</p>
      <p>Query.category : {{ $route.query.category }}</p>
  </div>
</template>

<script>
export default {
    // 계산된 속성인 computed를 사용합니다.
    computed: {
        userId(){
            // route에 params로 userId를 return합니다.
            return this.$route.params.userId
        }
    },
    created() {
        // router 와 route의 차이.
        // router는 route들의 모든 집합과 mode 등등 설정
        // route는 해당 Component의 path나 name 등등 설정
        console.log('router', this.$router)
        console.log('route', this.$route)
    }
}
</script>

<style>

</style>