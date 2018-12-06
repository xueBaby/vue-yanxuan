<template>
  <!--小轮播-->
  <div class="smallWrapper" >
    <div class="swiper-container" id="small">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item,index) in topicData.column"
          :key="index">
          <a href="javascript:;" >
            <img :src="item.picUrl" alt="">
            <span class="up">{{item.articleCount}}</span>
            <span class="down">{{item.title}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import {mapState} from 'vuex';
  import 'swiper/dist/css/swiper.min.css'
  export default {
    props:{
      topicData: Object
    },
    mounted(){
      new Swiper('#small', {
        slidesPerView: 3,
        spaceBetween: 26
      });
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .smallWrapper
    padding 30px
    .swiper-container
      .swiper-slide
        text-align: center;
        font-size: 18px;
        background: #fff;
        width 200px
        height 240px
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        /*position relative*/
        a
          width 100%
          height 100%
          /*background pink*/
          position relative
          margin 10px
          img
            width 100%
            height 85%
          .up
            position absolute
            top 0
            right 0
            color #bbb
            font-size 26px
          .down
             font-size 24px

</style>
