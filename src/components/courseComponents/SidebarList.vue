<template>
  <div class="sidebar-list-card">
    <div class="list-items"
         v-for="(lesson, i) in lessons"
         :key="i"
         :class="{ 'active-list': i === activeItem}"
         @click="selectItem([lesson,i])"
    >
      <span>{{i.toUpperCase()}} </span>
    </div>
  </div>
</template>

<script>
import {mapState } from 'vuex';
export default {
data() {
  return{
    activeItem: null,

  }
},
  computed: {
    ...mapState({
      lessons: (state)=>state.courseModule.lessons
    }),

  },

  methods:{
    selectItem(val){
      console.log('Lesson info',val[1])
      this.$store.commit("courseModule/removeDoneItem")
      this.$store.commit("courseModule/setActiveLesson", val[0]);
      this.activeItem = val[1]
    }
  }
}
</script>

<style scoped>
.sidebar-list-card {
  min-width: 470px;
  min-height: 600px;
  border: 1px solid #B3C1D8;
  background: #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 22px 24px 22px 14px;

}
.sidebar-list-card .list-items{
  /*background: #E7F0FE;*/
  border-radius: 15px;
  padding: 12px 25px;
  margin-bottom: 2px;
}
.sidebar-list-card .list-items:hover{
  background: #42b983;
  color: #FFFFFF;
}
.active-list{
  background: #E7F0FE;

}
</style>