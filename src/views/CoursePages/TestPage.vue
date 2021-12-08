<template>
  <div class="control-buttons">
    <div class="btn cancel"><span>Bekor qilish</span></div>
    <div class="btn submit"><span>Topshirish</span></div>
  </div>
  <div class="result-slider">
    <div class="btn">1</div>
    <div class="btn">2</div>
    <div class="btn">3</div>
    <div class="btn">4</div>
  </div>
  <!--        Question box-->
  <div class="question-box">
          <span>7. Panelning sarlavha  satrida  bir tugma joylashgan bo’lib,  bu tugmaning vazifasi uni  ikkiga bo’lib  yana birlashtirib qo’yadi .
                Shu tugmani nomini toping ?  </span>
  </div>

  <!--        Answers box-->
  <div class="answer-box">
    <div class="check-box"></div>
    <div class="text"><span>A. Qo’sholoq uchburchak ko’rinishidagi tugma</span></div>
  </div>
  <div class="answer-box">
    <div class="check-box"></div>
    <div class="text"><span>B. Qo’sholoq beshburchak ko’rinishidagi tugma  </span></div>
  </div>
  <div class="answer-box">
    <div class="check-box"></div>
    <div class="text"><span>C. Qo’sholoq uchburchak ko’rinishidagi tugma  </span></div>
  </div>
  <div class="answer-box">
    <div class="check-box"></div>
    <div class="text"><span>D. Qo’sholoq uchburchak ko’rinishidagi tugma</span></div>
  </div>
  <!--      Submit Button-->
  <div class="answer-submit">
    <span>Topshirish</span>
  </div>
</template>

<script>
export default {

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
  box-shadow: 0px 1px 0px #2B62AB;
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
  border: 1px solid #B3C1D8;
  border-radius: 11px;
  background: #FFFFFF;
  padding: 8px 237px;
  margin-bottom: 13px;
}
.result-slider .btn{
  background: #AECBF8;
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
  box-shadow: 0px 1px 0px #2B62AB;
  border-radius: 16px;
  padding: 10px 10px;
  text-align: center;
}
.answer-submit span{
  font-size: 33px;
  color: #FFFFFF;
}

</style>