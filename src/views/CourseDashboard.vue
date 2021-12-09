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
        <div class="sidebar-list-card">
          <div class="list-items"
               v-for="(lesson, i) in lessons"
               :key="i"
               :class="{ 'active-list': i === activeItem}"
               @click="selectItem(i)"
          ><span>{{i.toUpperCase()}} </span></div>
<!--          <div class="list-items"><span>Ikkinchi Dars</span></div>-->
<!--          <div class="list-items"><span>Uchinchi Dars</span></div>-->
        </div>

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
    activeItem: 0,
    lessons: {
      lesson_1:{
        rasmlar:[
          "m.jpg","k.jpg"
        ],
        test:[
          {
            savol:"Nima?",
            variant:["Bilmiman","^Hechnima","Nimadur","Vapshe bilmiman"]
          }
        ]
      },
      lesson_2:{
        rasmlar:[
          "m.jpg","k.jpg"
        ],
        test:[
          {
            savol:"Nima?",
            variant:["Bilmiman","^Hechnima","Nimadur","Vapshe bilmiman"]
          },
          {
            savol:"Nima?",
            variant:["Bilmiman","^Hechnima","Nimadur","Vapshe bilmiman"]
          }
        ]
      },
      lesson_3:{
        rasmlar:[
          "m.jpg","k.jpg"
        ],
        test:[
          {
            savol:"Nima?",
            variant:["Bilmiman","^Hechnima","Nimadur","Vapshe bilmiman"]
          }
        ]
      },
    }
  }
},
  components: {
    "nav-links": require("@/components/courseComponents/NavbarLink.vue").default,
  },
  methods: {
    selectItem(val){
      this.activeItem = val
    }
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
.content{
  border: 1px solid green;
  min-width: 1365px;

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