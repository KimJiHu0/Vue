<template>
  <div>
    <h1>Router Children</h1>
    <h3>유저를 검색해주세요.</h3>
    <input type="text" v-model="userId"/><button @click="$router.push({name: 'Child_First', params: {userId: userId}})">검색</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: null
    }
  }

};
</script>
<style>
</style>