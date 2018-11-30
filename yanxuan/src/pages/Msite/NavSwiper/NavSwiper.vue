<template>
  <div class="wraper">
    <div clsaa="swiper-contanier">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="" alt="">
        </div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

  </div>
</template>
<script>
  import Swiper from 'swiper';
  import "swiper/dist/css/swiper.min.css" //引入swiper的css样式
  new Swiper('.swiper-contanier',{
    //配置对象
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  })

  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .wraper
    padding-top 152px
</style>
