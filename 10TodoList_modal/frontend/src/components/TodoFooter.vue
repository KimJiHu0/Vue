<template>
  <div class="clearAllContainer">
    <!-- Clear All이라는 버튼을 클릭하게 되면 clearTodo 라는 함수가 실행됩니다. -->
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    // clearTodo 함수를 정의합니다.
    clearTodo: function(){
      // 로컬 스토리지에 있는 모든 것을 clear(삭제)합니다.
      // localStorage.clear(); <== 기존에 로컬스토리지를 clear하는 로직 삭제.
      this.$emit("clearAll")      
    }
  }
}
</script>

<style scoped>
  .clearAllContainer{
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }

  .clearAllBtn{
    color: #e20303;
    display: black;
  }

  .clearAllContainer:hover{
    cursor: pointer;
  }
</style>
