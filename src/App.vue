<template>
  <div id="nav" style="text-align: center; margin-bottom: 10px">
    <router-link to="/">Home</router-link> |
    <router-link to="/courseDashboard">CourseDashboard</router-link>


  </div>
  <hr>
  <router-view />
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: "Segoe UI";

}
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
