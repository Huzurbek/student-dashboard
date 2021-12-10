<template>
  <div class="main">

    <nav>
<!--      Navbar Links-->
      <nav-links></nav-links>

<!--      Night Day switch Model Button-->
      <div class="night-switch">
        <div class="btn btn-night">
          <i class="fa fa-moon-o"></i>
        </div>
        <div class="btn btn-day">
          <i class="fas fa-sun"></i>
        </div>
      </div>
    </nav>

<!--    Body part-->
    <div class="body">
      <div class="sidebar">
        <div class="search-panel">
          <span>Qidirish...</span>
        </div>

        <sidebar-list></sidebar-list>
      </div>
      <div class="content">
        <div>
          <router-view></router-view>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

export default {
data(){
  return{

  }
},
  components: {
    "nav-links": require("@/components/courseComponents/NavbarLink.vue").default,
    "sidebar-list": require("@/components/courseComponents/SidebarList.vue").default,
  },
  methods: {

  }
}
</script>

<style scoped>





.body{
  display: flex;
}
.sidebar{
  margin-right: 14px;
}
.search-panel{
  min-width: 470px;
  background: #FFFFFF;
  border: 1px solid #B3C1D8;
  box-sizing: border-box;
  border-radius: 11px;
  padding: 18px 20px;
  margin-bottom: 13px;
}
.search-panel span{
  font-size: 18px;
  color: #A6A6A6;;
}

.content{
  /*border: 1px solid green;*/
  min-width: 1370px;

}


.main{
  border: 1px solid red;
  padding: 11px 19px;
  background: #F5F7FB;

}
nav{
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border: 1px solid #B3C1D8;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
  background: #FFFFFF;
  padding: 7px 8px 9px 8px;
  margin-bottom: 29px;
}

/*Night Day Switch button style*/
.night-switch{
  display: flex;
  padding: 3px;
  border: 1px solid red;
}
.night-switch .btn{
  display: flex;
  border: 1px solid #0068F7;
  box-shadow: 0px 1px 0px #2B62AB;
  border-radius: 16px;
  background: #0068F7;
  padding: 9px 19px 8px 19px;
  align-items: center;
}
.night-switch .btn-night{
  margin-right: 3px;
}
.fa-moon-o{
  color: #FFFFFF; font-size:24px
}
.fa-sun{
  color: #FFFFFF; font-size:24px
}
</style>