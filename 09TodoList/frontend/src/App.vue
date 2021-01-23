<template>
  <div id="main">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems"></TodoList>
    <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
// import 불러올 파일의 내용이 담길 객체 from 불러올 파일 위치
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  // 모든 컴포넌트에서 공통적으로 사용하는 todoItmes를 App.vue에 선언합니다.
  data() {
    return {
      todoItems: []
    };
  },
  created() {
    // 로컬스토리지의 길이가 0 이상이면. 즉, 로컬스토리지에 할 일이 하나 이상 있으면 로직 실행
    if (localStorage.length > 0) {
      // 로컬스토리지의 길이만큼 반복문을 돌면서,
      for (var i = 0; i < localStorage.length; i++) {
        // todoItems의 배열에 push를 해줍니다. 로컬스토리지에 있는 값 중에 key값이 i인 애들.(전부다)
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  // 추가 버튼을 눌렀을 때 실행되는 함수를 정의합니다.
  methods: {
    addTodo: function(todoItem) {
      // 로컬스토리지에 추가하는 로직
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    clearAll: function(){
      // 이것만 작성하면 로컬스토리지만 삭제가 됩니다.
      // 그래서 배열인 todoItems도 빈 배열로 만들어줘야합니다.
      localStorage.clear();
      this.todoItems = [];
    }
  },

  // 지역 컴포넌트 등록과 동일한 방법으로 진행합니다.
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
