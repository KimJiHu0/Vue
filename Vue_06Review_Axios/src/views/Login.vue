<template>
  <div>
      <h1>Login Component</h1>
      <button @click="getUserList">getUserList</button>
      <table border="1">
          <tr>
              <th>ID</th>
              <td><input type="text" v-model="email"/></td>
          </tr>
          <tr>
              <th>PW</th>
              <td><input type="text" v-model="password"/></td>
          </tr>
          <tr>
              <td colspan="2" align="right">
                  <button @click="login">로그인</button>
              </td>
          </tr>
      </table>
  </div>
</template>

<script>
// 우선 axios를 import합니다.
import axios from 'axios'
export default {
    // id와 pw를 data로 선언하고, 상단에 input 태그에서 v-model로 동기화를 시켜줬습니다.
    // 그 후에 login을 누르면 값을들 back api server에 전송할 수 있도록 해보겠습니다.
    data() {
        return {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }
    },
    methods: {
        getUserList() {
            // axios 요청합니다.
            axios
            // get방식으로 해당 URL로 시도합니다.
            .get('https://reqres.in/api/users?page=2')
            // 성공했을 떄
            .then((res) => {
                // 이처럼 진행하면 status가 200인 것을 확인할 수 있고 내가 요청한 것에 대한 response의 모든 것을 받을 수 있다.
                // console.log(res)
                // 아래와 같이 진행하면 해당 데이터만 출력할 수 있다.
                // console.log(res.data);
                // 정말 핗요한 데이터만 출력하기 위해서는 
                console.log(res.data.data);
            })
            // 실패했을 때
            .catch((err) => {
                // 오류를 출력.
                console.log(err)
            })
        },
        login() {
            let userInfo = {
                email: this.email,
                password: this.password
            }
            // axios하는데 
            axios
            // post방식이고, 해당 URL에 접속, 상단에서 만든 userInfo를 Parameter로 전달.
            .post('https://reqres.in/api/login', userInfo)
            // 성공시 then
            .then((res) => {
                console.log(res)
            // 실패시 catch
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>