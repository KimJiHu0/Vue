!<template>
  <div class="UserDetailUpdate">
      <h3 align="left">UserDetailUpdate Component ( 자식 )</h3>

        <table border="1">
            <col width="300px">
            <col width="300px">
            <tr>
                <th>이름</th>
                <td>
                    <input type="text" v-model="user.name">
                </td>
            </tr>
            <tr>
                <th>나이</th>
                <td>
                    <input type="text" v-model="user.age">
                </td>
            </tr>
            <tr>
                <th>거주지</th>
                <td>
                    <input type="text" v-model="user.addr">
                </td>
            </tr>
            <tr>
                <th>반려동물 유/무</th>
                <td>
                    <select v-model="user.hasDog">
                        <option value="true">有</option>
                        <option value="false">無</option>
                    </select>
                </td>
            </tr>
        </table>
        <button @click="changeInfo()">수정 완료</button>
  </div>
</template>

<script>

import { eventBus } from '../../main';

export default {
    props: ['goDetailUpdate'],
    data() {
        return {
            user: {}
        }
    },
    // props로 넘어왔을 때 data에 user라는 객체를 선언하여 값을 담아준 후에 수정을 해야 오류나지 않는다.
    // 오류의 내용은 부모컴포넌트에서 전달해준 값을 자식 컴포넌트에서 마음대로 수정하지 말라는 에러이다.
    // user 객체를 선언 후, 수정한 값을 user에 담아주고, 이를 부모컴포넌트에 전달해준 다음에 부모컴포넌트에서
    // 수정을 진행하면 문제가 없다.
    created() {
        console.log('부모컴포넌트에서 받은 값 user에 담기');
        this.user.name = this.goDetailUpdate.name;
        this.user.age = this.goDetailUpdate.age;
        this.user.addr = this.goDetailUpdate.addr;
        this.user.hasDog = this.goDetailUpdate.hasDog;
        console.log(this.user);
    },
    methods: {
        changeInfo(){
            // 부모 컴포넌트에 user를 보내준다.
            this.$emit("goParent", this.user);
            console.log("자식 -> 부모 값 전달.");

            // 형제 컴포넌트인 UserDetail.vue에 수정 날짜 보내주기.
            eventBus.$emit('brotherCom', new Date());
        }
    }
}
</script>

<style>
    .UserDetailUpdate{
        background-color: aquamarine;
        margin: auto;
    }
</style>