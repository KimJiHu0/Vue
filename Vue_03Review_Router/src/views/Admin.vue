<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 
      첫번째 방법
      router에서 지정한 name과 동일하게 작성합니다.
      router name:User라는 객체를 push하게 되며, router에서 작성한 name과 맞는 화면이 보여지게 됩니다.
    -->
    <button @click="$router.push({
      name: 'User'
    })">User 1</button>

    <!--
      두번째 방법
      router에서 지정한 path와 동일하게 작성합니다.
      router에 path:/ 라는 객체를 push하게 되며, router에서 작성한 path와 동일한 화면이 보여지게 됩니다.
    -->
    <button @click="$router.push({
      path:'/'
    })">User 2</button>

    <!--
      세번째 방법
      그냥 path를 바로 보내줄 수 있는데, 이러한 방법보다는 객체의 형태를 추천한다.
      그 이유는 path 뿐만아니라 params, query 등 여러 값을 보낸 수 있기 때문이다.
      그리고 헷갈리기 때문이다.
    -->
    <button @click="$router.push('/')">User 3</button>

    <!-- 
      tag : 이 속성은 router-link의 태그가 어떤 태그로 만들지 선택한다. a태그 혹은 button으로 가능하다.
      :to="" : 해당 속성에는 바로 path를 입력할 수 있고, 객체로 name: User 등등의 값ㅂ을 넗을 수 있다.
     -->
    <router-link tag="button" :to="{name: 'User'}">Click Sample</router-link>
  </div>
</template>
