<template>
  <div id="app">
    <Header></Header>
    <div id="nav">
      <router-link to="/">User</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link :to="{
        name: 'Sample',
        params: {
          userId: 9969,
          name: 'jihu'
          },
          query: {
            group: 'member',
            category: 'trial'
          }
        }">Router Sample</router-link>
    </div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/include/Header.vue';
import Footer from '@/components/include/Footer.vue';

export default {
  components:{
    Header,
    Footer
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
