<template>
  <div class="section">
    <h1>User Component ( 부모 )</h1>
    <user-detail v-bind:goChild="userInfo"></user-detail>
  </div>
</template>

<script>
// @ is an alias to /src
import UserDetail from "@/components/user/UserDetail.vue";

export default {
  components: { 
    UserDetail
  },
  
  data() {
    return {
      userInfo: {
        name: '김지후',
        age: 25,
        addr: '인천광역시',
        hasDog: true
      }
    }
  }
}
</script>
<style>
  .section{
    background-color: blanchedalmond;
    height: 500px;
  }
</style>

