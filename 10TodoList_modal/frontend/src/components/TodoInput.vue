<template>
  <div class="inputBox shadow">
	  <!-- input 태그에 placeholder를 통해서 꾸며주었고, v-on:keyup.enter을 통해서 엔터를 쳐도 addTodo함수가 실행되게 정의합니다. -->
	  <input type="text" v-model="newTodoItem" placeholder="할 일을 작성하세요." v-on:keyup.enter="addTodo">
	  <!-- button태그를 span태그로 변경하고 class를 추가합니다. -->
	  <span class="addContainer" v-on:click="addTodo">
		  <!-- 그 안에 i태그를 이용해서 +  아이콘을 추가합니다. -->
		  <i class="addBtn fas fa-plus" aria-hidden="true"></i>
	  </span>


	  <!-- 모달창이 뜨는 부분 -->
	  <modal v-if="showModal" @close="showModal = false">
		  <!-- 모달창의 header -->
		  <h3 slot="header">경고</h3>

			<span slot="body">
				할 일을 아무것도 입력하지 않았습니다.<br/>
				할 일을 입력하세요.
			</span>

		  <!-- 모달창의 footer -->
		  <span slot="footer" @click="showModal = false">
			<i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
		  </span>
	  </modal>
  </div>
</template>

<script>
// 모달창을 import
import Modal from './common/Modal.vue'

export default {
	// 모달 컴포넌트 등록
	components: {
		Modal: Modal
	},
	data(){
		return {
			newTodoItem: '',
			showModal: false
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
			} else {
				this.showModal = true;
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
	.addContainer:hover, .closeModalBtn:hover{
		cursor: pointer;
	}
	/* 아이콘이 들어간 태그를 꾸며주는 CSS */
	.addBtn{
		color: white;
		/* 추가할 아이콘의 수직정렬 CSS */
		vertical-align: middle;
	}
</style>

