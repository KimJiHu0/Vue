<template>
  <div class="inputBox shadow">
	  <!-- input 태그에 placeholder를 통해서 꾸며주었고, v-on:keyup.enter을 통해서 엔터를 쳐도 addTodo함수가 실행되게 정의합니다. -->
	  <input type="text" v-model="newTodoItem" placeholder="할 일을 작성하세요." v-on:keyup.enter="addTodo">
	  <!-- button태그를 span태그로 변경하고 class를 추가합니다. -->
	  <span class="addContainer" v-on:click="addTodo">
		  <!-- 그 안에 i태그를 이용해서 +  아이콘을 추가합니다. -->
		  <i class="addBtn fas fa-plus" aria-hidden="true"></i>
	  </span>
  </div>
</template>

<script>
export default {
	data(){
		return {
			newTodoItem: ''
		}
	},
	methods: {
		addTodo: function(){
			// 조건을 추가해줬습니다. 만일 newTodoItem에 아무것도 작성하지 않고
			// 추가버튼을 눌렀을 떄에는 작동하지 않습니다.
			// input태그에 한 글자라도 작성해야 저장할 수 있습니다.
			if(this.newTodoItem !== ""){
				// 그리고 value라는 변수에, this.newTodoItem의 공백을 제거한 후 담아줍니다.
				var value = this.newTodoItem.trim();
				// 로컬스토리지에 데이터를 저장하는 코드입니다.

				// localStorage.setItem(value, value) <== 이 부분 주석처리( 삭제 )
				this.$emit('addTodo', value);

				// 마지막으로 clearInput이라는 함수를 실행시킵니다.
				this.clearInput();
			}
		},
		// clearInput이라는 함수를 methods속성 내에서 정의합니다.
		clearInput: function(){
			// newTodoItem의 값을 빈칸으로 바꿔줍니다.
			this.newTodoItem = ''
		}
	}
}
</script>

<style scoped>
	/* 할일 입력하는 인풋 박사의 선 스타일 지정 */
	input:focus{
		outline: none;
	}

	/* 큰 div박스는 꾸며주는 css */
	.inputBox{
		background: white;
		height: 50px;
		line-height: 50px;
		border-radius: 5px;
	}

	/* class이름이 inputBox인 div태그 밑에 있는 input태그의 CSS */
	.inputBox input{
		border-style: none;
		font-size: 0.9rem;
	}

	/* SPAN 태그를 꾸며주는 CSS  */
	.addContainer{
		float: right;
		background: linear-gradient(to right, #6478FB, #8763FB);
		display: block;
		width: 3rem;
		border-radius: 0 5px 5px 0;
	}
	.addContainer:hover{
		cursor: pointer;
	}
	/* 아이콘이 들어간 태그를 꾸며주는 CSS */
	.addBtn{
		color: white;
		/* 추가할 아이콘의 수직정렬 CSS */
		vertical-align: middle;
	}

</style>

