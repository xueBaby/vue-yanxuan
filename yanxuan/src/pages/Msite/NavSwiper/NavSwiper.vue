<template>
  <div class="nav">
    <div class="swiper-container" id="nav">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(focus,index) in homeData.focusList"
             :key="focus.id">
          <a href="javascript:;">
            <img :src="focus.picUrl" alt="">
          </a>
        </div>
      </div>
      <!-- 如果需要分页器-->
      <div class="swiper-pagination"></div>
    </div>
  </div>
  <!-- <div class="wapper">
     <div ref="mySwiper" class="mySwiper swiper">
       <div class="swiper-slide" v-for="item in homeData.focusList" :key="item.id">
         <a href="javascript:;">
           <img :src="item.picUrl" alt="">
         </a>
       </div>
       <div class="swiper-pagination" slot="pagination"></div>
     </div>
   </div>-->
</template>

<script>
  //引入swiper样式   //在node_modules里
  import 'swiper/dist/css/swiper.min.css'
  //引入swiper库暴露出来的构造函数
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default{
    computed:{
      ...mapState(['homeData'])
    },
    /*mounted(){

     /*使用Swiper   https://www.swiper.com.cn/usage/index.html
     看js 那块的代码

     //必须在列表数据显示之后再创建
     new Swiper('.swiper-container',{
     loop: true, // 循环模式选项
     // 如果需要分页器
     pagination: {
     el: '.swiper-pagination',
     },
     })
     },*/
    /*
     bug: 分类轮播有问题
     解决: watch + nextTick()
     */
    watch:{
      homeData(){
        this.$nextTick(()=>{
          new Swiper('#nav',{
            loop: true, // 循环模式选项
            autoplay:true,//等同于以下设置
            /*https://www.swiper.com.cn/api/autoplay/16.html*/
            /* autoplay: {
             delay: 3000,
             stopOnLastSlide: false,
             disableOnInteraction: true,
             },*/
            //如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .nav
    bottom-border-1px(#e4e4e4)
    height 400px
    width 100%
    .swiper-wrapper
      img
        width 100%
        height 400px
  .nav
    .swiper-pagination-bullet
      width 40px
      height 8px
      opacity .4
      .span.swiper-pagination-bullet-active
        opacity 1

  /*.wapper
    width 100%
    margin-top px2rem(148)
    .mySwiper
      width 100%
      height px2rem(400)
      .swiper-slide
        a
          display block
          height  px2rem(400)
          img
            width 100%
            height 100%
  .wapper
    .swiper-pagination-bullet
      width px2rem(40)
      height px2rem(8)
      background #ffffff
      opacity .4
      border-radius 0
    .swiper-pagination-bullet-active
      opacity 1*/
</style>
