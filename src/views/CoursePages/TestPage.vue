<template>
  <div class="control-buttons">

    <div class="btn cancel"><span>Poinsts-{{points}}</span></div>
    <div class="btn submit"><span>Topshirish</span></div>
  </div>
  <div class="result-slider">
    <div class="btn outside-btn" @click.prevent="swipeLeft"><i class='fas fa-less-than'></i></div>

    <div class="center" id="content" ref="content">
      <div v-for="(n,index) in tests" :key="n" class="internal">
        <div class="btn internal-btn btn-current"
             :class="[{'correctStyle' : done['q'+index] && done['q'+index][0] == '@'},
                    {'incorrectStyle' : done['q'+index] && done['q'+index][0] !== '@'},
                   {'active-btn': index===currentQuestion }]"
             @click="showTest(index)">
          {{ index+1 }}
        </div>
      </div>
    </div>
        <div class="btn outside-btn" @click.prevent="swipeRight"><i class='fas fa-greater-than'></i></div>
  </div>
  <!--        Question box-->
  <div v-if="!done[tests.length]">
    <div class="question-box">
      <span>{{ tests[currentQuestion]?.question }}</span>
    </div>
<!--    @change="(pick=pick==option?null:option)"-->
    <div class="answer-box" v-for="(option, index) in tests[currentQuestion]?.variants" :key="index">
      <input type="checkbox" class="check-box" :checked="option===(done['q'+currentQuestion]?pick=done['q'+currentQuestion]:pick)" @change="(pick=(pick===option?null:option))">
      <div class="text"><span>{{ option }}</span></div>
    </div>
    <span>Pick info-{{pick}}</span>
    <!--      Submit Button-->

    <div class="answer-submit" @click.prevent="submit"  :class="{'disabled': !pick}" >
      <span>Topshirish</span>
    </div>
  </div>
  <div v-if="done.length >= tests.length">
    <div class="question-box" style="padding: 150px; text-align: center">
      <span style="font-size: 40px; color: #42b983">Congratulations You complete!</span>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
// import {CORRECT, WRONG, isCorrect} from "@/constants/questionTypes";
export default {
  data() {
    return {
      currentQuestion: 0,
      pick: null,
      points:0
    }
  },
  computed: {
    ...mapState({
      testResult: (state) => state.courseModule.activeLesson?.tests || state.courseModule.lessons.lesson_1.tests,
      done: (state) => state.courseModule.done,
    }),
    tests() {
      return this.testResult
    }
  },
  methods: {
    submit() {
      console.log("@Pick info-", this.pick)
      this.$store.commit("courseModule/pushDone", {key:'q'+this.currentQuestion, score: this.pick});
      if(this.pick[0]==='@'){
        this.points += 5;
      }
      this.pick = ''
      if (this.currentQuestion < this.tests.length - 1) {
        this.currentQuestion += 1
        const content = this.$refs.content;
        this.scrollTo(content, 40, 800);
      }
    },
    showTest(val){
      if(val>this.currentQuestion){
        const content = this.$refs.content;
        this.scrollTo(content, 50, 800);
      }else{
        const content = this.$refs.content;
        this.scrollTo(content, -50, 800);
      }
      this.currentQuestion = val


    },
   // swip is starting
    scrollTo(element, scrollPixels, duration) {
      const scrollPos = element.scrollLeft;
      // Condition to check if scrolling is required
      if ( !( (scrollPos === 0 || scrollPixels > 0) && (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0)))
      {
        // Get the start timestamp
        const startTime =
            "now" in window.performance
                ? performance.now()
                : new Date().getTime();

        // eslint-disable-next-line no-inner-declarations
        function scroll(timestamp) {
          //Calculate the timeelapsed
          const timeElapsed = timestamp - startTime;
          //Calculate progress
          const progress = Math.min(timeElapsed / duration, 1);
          //Set the scrolleft
          element.scrollLeft = scrollPos + scrollPixels * progress;
          //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit
          if (timeElapsed < duration) {
            //Request for animation
            window.requestAnimationFrame(scroll);
          } else {
            return;
          }
        }
        //Call requestAnimationFrame on scroll function first time
        window.requestAnimationFrame(scroll);
      }
    },
    swipeLeft() {
      const content = this.$refs.content;
      this.scrollTo(content, -150, 800);
    },
    swipeRight() {
      const content = this.$refs.content;
      this.scrollTo(content, 150, 800);
    }
    // swip is ending
  },
  watch:{
    testResult:function(){
      this.currentQuestion=0
      this.pick=null
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

.control-buttons .btn {
  background: #5F6F8B;
  box-shadow: 0 1px 0 #2B62AB;
  border-radius: 16px;
  padding: 16px 29px;
  margin-right: 10px;
}

.control-buttons .btn:last-child {
  margin-right: 0;
  background: #0068F7;
}

.control-buttons .btn span {
  font-size: 22px;
  color: #FFFFFF;
}
/*Result slider-----------------------*/

.result-slider {
  display: flex;
  justify-content: center;
  border: 1px solid #B3C1D8;
  border-radius: 11px;
  background: #FFFFFF;
  padding: 8px 8px;
  margin-bottom: 13px;
}
.result-slider .btn {
  border-radius: 8px;
  padding: 7px 18px;
  margin-right: 5px;
  font-size: 22px;
}
.outside-btn{
  background: #0068F7;
  color: #FFFFFF;
}
.internal{
  display: inline-block;
}
.internal-btn{
  border: 1px solid #AECBF8;
  color: #0068F7;
}
.center{
  float: left;
  max-width: 22%;
  margin: 1px;
  overflow: hidden;
  white-space: nowrap;
}

.result-slider .btn-current:hover{
  border: 1px solid transparent;
  background: #0068F7 !important;
  color: #FFFFFF !important;
}
.active-btn {
  border: 1px solid transparent !important;
  background: #0068F7 !important;
  color: #FFFFFF !important;
}

/*Question Box*/
.question-box {
  border: 1px solid #B3C1D8;
  border-radius: 11px;
  background: #FFFFFF;
  padding: 24px 27px;
  margin-bottom: 37px;
}

.question-box span {
  font-size: 22px;
}

/*Answers box*/
.answer-box {
  display: flex;
  border: 1px solid #B3C1D8;
  border-radius: 11px;
  background: #FFFFFF;
  padding: 11px 14px;
  margin-bottom: 19px;
}

.answer-box .check-box {
  width: 54px;
  height: 50px;
  border: 2px solid #0068F7;
  border-radius: 8px;
  margin-right: 13px;
}

.answer-box .text {
  align-self: center;
}

.answer-box .tex span {
  font-size: 22px;
}

/*Answer Submit button style*/
.answer-submit {
  background: #0068F7;
  box-shadow: 0 1px 0 #2B62AB;
  border-radius: 16px;
  padding: 10px 10px;
  text-align: center;
}

.answer-submit span {
  font-size: 33px;
  color: #FFFFFF;
}

.incorrectStyle {
  border: 1px solid #ef74ab;
  background: #F890BC
}

.correctStyle {
  border: 1px solid #5fd4ad;
  background: #aadec9;
}



.disabled {
  pointer-events:none;
  opacity: 0.6;
  cursor: pointer;
  user-select: none
}
</style>