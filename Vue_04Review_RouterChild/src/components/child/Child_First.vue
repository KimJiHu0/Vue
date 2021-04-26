<template>
  <div>
      <h2>Child_First Component</h2>
      <p>유저의 번호1 : {{ $route.params.userId }}</p>
      <p>유저의 번호2 : {{ userId }}</p>
      <button @click="update">수정</button>
  </div>
</template>

<script>
export default {
    computed: {
        userId(){
            return this.$route.params.userId
        }
    },
    methods: {
        update() {
            this.$router.push({name: 'Child_Update'})
        }
    }
}
</script>

<style>

</style>