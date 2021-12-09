<template>
  <div class="control-buttons">
    <div class="btn cancel"><span>Bekor qilish</span></div>
    <div class="btn submit"><span>Topshirish</span></div>
  </div>
  <div class="result-slider">
    <div class="btn primary"><i class='fas fa-less-than'></i></div>
    <div v-for="n in tests.length" :key="n">
      <div class="btn"
           :class="[{'correctStyle' : done[n-1]==='correct'},{'incorrectStyle' : done[n-1]==='incorrect'},{'active': n===(currentQuestion+1) && done.length < tests.length}]">
           {{n}}
      </div>
    </div>
    <div class="btn primary"><i class='fas fa-greater-than'></i></div>
  </div>
  <!--        Question box-->
  <div v-if="done.length < tests.length">
    <div class="question-box">
      <span>{{ tests[currentQuestion].question }}</span>
    </div>
    <div class="answer-box" v-for="(option, index) in tests[currentQuestion].variants" :key="index">
      <input type="radio" class="check-box"  v-model="pick" :value="option">
      <div class="text"><span>{{ option }}</span></div>
    </div>
    <!--      Submit Button-->
    <div class="answer-submit" @click.prevent="submit" :class="{'disabled': !pick}">
      <span>Topshirish</span>
    </div>
  </div>
  <div v-else>
    <div class="question-box"  style="padding: 150px; text-align: center">
      <span style="font-size: 40px; color: #42b983">Congratulations You complete!</span>
    </div>
    <!--      Submit Button-->
    <div class="answer-submit"  :class="{'disabled': !pick}">
      <span>Go to Next Class</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data(){
    return {
      currentQuestion: 0,
      pick: '',

      done: []
    }
  },
computed: {
  ...mapState({
    tests: (state)=>state.courseModule.lesson1.tests
  }),
},
  mounted() {
    console.log('in mounted',this.tests.length-1)
  // console.log(this.demo.test[0].question)
  },
  methods:{
    submit(){
    if(this.pick[0] === '@'){
      this.done.push('correct')
    }else{
      this.done.push('incorrect')
    }
      this.pick = ''
      if(this.currentQuestion < this.tests.length-1){
        this.currentQuestion += 1
      }
      console.log('current ques', this.currentQuestion)
      console.log('test lenght', this.tests.length-1)
      console.log('done info', this.done)
    }

  }
}
</script>

<style scoped>
.control-buttons {
  display: flex;
  justify-content: right;
  margin-bottom: 11px;
}
.control-buttons .btn{
  background: #5F6F8B;
  box-shadow: 0 1px 0 #2B62AB;
  border-radius: 16px;
  padding: 16px 29px;
  margin-right: 10px;
}
.control-buttons .btn:last-child{
  margin-right: 0;
  background: #0068F7;
}
.control-buttons .btn span{
  font-size: 22px;
  color: #FFFFFF;
}

.result-slider{
  display: flex;
  justify-content: center;
  border: 1px solid #B3C1D8;
  border-radius: 11px;
  background: #FFFFFF;
  padding: 8px 237px;
  margin-bottom: 13px;
}
.result-slider .primary{
  background: #0068F7;
  color: #FFFFFF !important;
}
.result-slider .btn{
  /*background: #AECBF8;*/
  border-radius: 8px;
  padding: 7px 18px;
  margin-right: 5px;
  font-size: 22px;
  color: #0068F7;
}
/*Question Box*/
.question-box{
  border: 1px solid #B3C1D8;
  border-radius: 11px;
  background: #FFFFFF;
  padding: 24px 27px;
  margin-bottom: 37px;
}
.question-box span{
  font-size: 22px;
}
/*Answers box*/
.answer-box{
  display: flex;
  border: 1px solid #B3C1D8;
  border-radius: 11px;
  background: #FFFFFF;
  padding: 11px 14px;
  margin-bottom: 19px;
}
.answer-box .check-box{
  width: 54px;
  height: 50px;
  border: 2px solid #0068F7;
  border-radius: 8px;
  margin-right: 13px;
}
.answer-box .text{
  align-self: center;
}
.answer-box .tex span{
  font-size: 22px;
}
/*Answer Submit button style*/
.answer-submit{
  background: #0068F7;
  box-shadow: 0 1px 0 #2B62AB;
  border-radius: 16px;
  padding: 10px 10px;
  text-align: center;
}
.answer-submit span{
  font-size: 33px;
  color: #FFFFFF;
}
.incorrectStyle{
  background: #F890BC !important;
}
.correctStyle{
  background: #aadec9 !important;
}
.active{
  background: #0068F7 !important;
  color: #FFFFFF !important;
}
.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>