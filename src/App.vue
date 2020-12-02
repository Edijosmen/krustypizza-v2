<template>
  <div id="app">   
    <Navbaru />
    <router-view/>
  </div>
</template>

<script>
import Navbaru from "./components/Navbaru";
export default {
  name: "App",
  components:{
    Navbaru
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
