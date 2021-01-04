<template>
  <div id="app">
    <ul>
      <li>
        <router-link :to="{ name: 'login', params: {id: this.id, pw: this.pw} }">Login</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'hello' }">HelloWorld</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Login from "./components/Login";
import { routers } from "./vueRouter";

export default {
  name: "App",
  router: routers,
  components: {
    HelloWorld
  },
  data: function() {
    return {
      id: '',
      pw: ''
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
