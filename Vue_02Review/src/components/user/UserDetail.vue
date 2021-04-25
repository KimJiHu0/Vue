!<template>
  <div class="UserDetail">
      <h3 align="left">UserDetail Component ( 자식 )</h3>

      <p>{{ goDetail.name }}님의 회원 정보 입니다.</p>

      <table border="1">
          <col width="300px">
          <col width="300px">
          <tr>
              <th>이름</th>
              <td>{{ goDetail.name }}</td>
          </tr>
          <tr>
              <th>나이</th>
              <td>{{ goDetail.age }}</td>
          </tr>
          <tr>
              <th>거주지</th>
              <td>{{ goDetail.addr }}</td>
          </tr>
          <tr>
              <th>반려동물 유/무</th>
              <td>{{ hasDogKor }}</td>
          </tr>
      </table>
      <p>수정 날짜 : {{ updateTime }}</p>
      <button @click="changeName()">이름 변경</button>
  </div>
</template>

<script>

import { eventBus } from '../../main';

export default {
    props: ['goDetail'],
    data() {
        return {
            updateTime: null
        }
    },
    computed: {
        hasDogKor() {
            return this.goDetail.hasDog == true ? '有' : '無'
        }
    },
    methods: {
        changeName() {
            this.goDetail.name = '강여림';
        }
    },
    created() {
        eventBus.$on('brotherCom', (date) => {
            this.updateTime = date;
        });
    }
}
</script>

<style>
    .UserDetail{
        background-color: cornflowerblue;
        margin: auto;
    }
</style>