<template>
  <div class="section">
    <h1>User Component ( 부모 )</h1>
    <div class="componentdiv">
      <user-detail v-bind:goDetail="userInfo"></user-detail>
      <!-- 수정한 user를 받아주는 명렁어 작성 -->
      <user-detail-update v-bind:goDetailUpdate="userInfo" @goParent="changeInfo"></user-detail-update>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserDetail from "@/components/user/UserDetail.vue";
import UserDetailUpdate from '../components/user/UserDetailUpdate.vue';

export default {
  components: { 
    UserDetail,
    UserDetailUpdate
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
  },
  methods: {
    changeInfo(user) {
      console.log('부모가 받았습니다.')
      console.log(user)
      this.userInfo.name = user.name;
      this.userInfo.age = user.age;
      this.userInfo.addr = user.addr;
      this.userInfo.hasDog = user.hasDog;
    }
  }
}
</script>
<style>
  .section{
    background-color: blanchedalmond;
    height: 500px;
  }
  .componentdiv{
    display: flex;
  }
</style>

