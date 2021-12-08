<template>
  <div class="menu" >
    <div
      v-for="item in items"
      :key="item"
      class="list"
    >
      <router-link class="list-item" :to="{path: item.to}">{{ item.header }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
data(){
  return{
    items: [
      {
        header: 'Asosiy',
        to: '/mainPage'
      },
      {
        header: 'Darslar',
        to: '/lessonPage'
      },
      {
        header: 'Slaydlar',
        to: '/slaydPage'
      },
      {
        header: 'Testlar',
        to:"/testPage",
      },
      {
        header: "Lug'atlar",
        to:"/vocabularyPage",
      },
    ]
  }
}
}
</script>

<style scoped>
.menu {
  margin: 0;
  padding: 0;
}
.list{
  float: left;
}
.list-item {
  text-decoration: none;
  display: block;
  padding: 16px 53px;
  margin-right: 14px;
  font-size: 22px;
  line-height: 26px;
  list-style-type: none;
  color:  #5F6F8B;
}
.list-item:hover{
  box-shadow: 0px 1px 0px #2B62AB;
  border-radius: 16px;
  background: #0068F7;
  color:white;
}
.router-link-active {
  box-shadow: 0px 1px 0px #2B62AB;
  border-radius: 16px;
  background: #0068F7;
  color: #FFFFFF;
}


</style>