<template>
  <div class="main">
    <span style="font-size: 50px; color: #d00808">{{ demo }}</span>
    <span style="font-size: 50px; color: #d00808">{{ username }}</span>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
export default {
computed: {
...mapState({
  demo: (state)=>state.courseModule.name
}),
  ...mapGetters({
    username: "courseModule/getName",
  })

}
}
</script>

<style scoped>
.main{
  border: 1px solid #B3C1D8;
  border-radius: 11px;
  background: url("https://cdn.pixabay.com/photo/2021/11/30/13/21/vintage-camera-6835351__340.jpg") no-repeat center fixed ;
  background-size: cover;
  padding: 200px 200px;
}
</style>