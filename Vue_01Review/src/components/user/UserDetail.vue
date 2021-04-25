!<template>
  <div class="userInfo">
      <h3 align="left">UserDetail Component ( 자식 )</h3>

      <p>{{ goChild.name }}님의 회원 정보 입니다.</p>

      <table border="1">
          <col width="300px">
          <col width="300px">
          <tr>
              <th>이름</th>
              <td>{{ goChild.name }}</td>
          </tr>
          <tr>
              <th>나이</th>
              <td>{{ goChild.age }}</td>
          </tr>
          <tr>
              <th>거주지</th>
              <td>{{ goChild.addr }}</td>
          </tr>
          <tr>
              <th>반려동물 유/무</th>
              <td>{{ hasDogKor }}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    props: ['goChild'],
    computed: {
        hasDogKor() {
            return this.goChild.hasDog === true ? '있다.' : '없다.'
        }
    }
}
</script>

<style>
    .userInfo{
        background-color: cornflowerblue;
    }
</style>