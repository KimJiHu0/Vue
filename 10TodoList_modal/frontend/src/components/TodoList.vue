<template>
  <section>
    <!-- Vue 자체에서 지원하는 애니메이션 기능 -->
    <!-- 애니메이션 추가할 때 사용하는 태그 -->
    <transition-group name="list" tag="ul">
      <!-- v-for 반복문을 통해서 todoItems에 있는 애를 하나씩 todoitem에 담아주고 이를 출력합니다. -->
      <li v-for="(todoitem, index) in propsdata" :key="todoitem" class="shadow">
        <!-- 할 일이 출력되는 왼쪽에 체크표시 아이콘 -->
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        <!-- 할일 출력 -->
        {{ todoitem }}
        <!-- 삭제버튼 만들기 -->
        <span class="removeBtn" type="button" @click="removeTodo(todoitem, index)">
          <!-- 할 일 출력 우측에 쓰레기통 아이콘 -->
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
export default {
  props: ['propsdata'],
  /*
  todoItems는 App.vue에 선언하였기 떄문에 삭제합니다.

  data() {
    return {
      // 로컬 스토리지에서 할일 목록을 가져와서 담아줄 빈 배열을 선언합니다.
      todoItems: []
    }
  },

  // 이 코드는 App.vue에 옮겨줍니다.
  created(){
    // 로컬스토리지의 길이가 0 이상이면. 즉, 로컬스토리지에 할 일이 하나 이상 있으면 로직 실행
    if(localStorage.length > 0){
      // 로컬스토리지의 길이만큼 반복문을 돌면서,
      for(var i = 0; i < localStorage.length; i++){
        // todoItems의 배열에 push를 해줍니다. 로컬스토리지에 있는 값 중에 key값이 i인 애들.(전부다)
        this.todoItems.push(localStorage.key(i))
      }
    }
  },
  */
  methods: {
    // 할 일 삭제하는 함수
    removeTodo: function(todoitem, index){
      // 로컬 스토리지에서 해당 todoitem을 삭제하고,
      // localStorage.removeItem(todoitem)
      // todoItems라는 배열 내에서 특정 index에서 부여한 숫자만큼의 index를 삭제합니다.
      // this.todoItems.splice(index, 1)
      this.$emit('removeone', todoitem, index);
    }
  }
}
</script>

<style scoped>
  /* ul태그 CSS */
  ul{
    /* 목록 아이템의 스타일 지정 */
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  /* li태그 CSS */
  li{
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  /* 체크 아이콘 CSS */
  .checkBtn{
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  /* 삭제 아이콘 CSS */
  .removeBtn{
    margin-left: auto;
    color: #de4343;
  }

  .removeBtn:hover{
    cursor: pointer;
  }

  .list-enter-active, .list-leave-active{
    transition: all 1s;
  }

  /* 값이 들어가고 나가는 것을 꾸며주는 CSS */
  .list-enter, .liet-leave-to{
    opacity: 0;
    transform: translateY(30px);
  }
</style>