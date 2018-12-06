<template>
    <!--大轮播-->
    <div class="navWrapper">
      <div class="swiper-container" id="sw1">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item,index) in topicData.banner"
            :key="index">
            <img :src="item.picUrl" alt="">
            <div class="navInfo">
              <div class="navName">
                <div class="right"></div>
                <span>严选推荐</span>
                <div class="left"></div>
              </div>
              <span class="qin">{{item.title}}</span>
              <span class="shopInfo">{{item.desc}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import Swiper from 'swiper';
  import {mapState} from 'vuex';
  export default {
    props: {
      topicData: Object

    },
    mounted(){
      setTimeout(() => {
        new Swiper('#sw1',{
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true
        })
      },500)
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .navWrapper
    margin-top 100px
    .swiper-container
      width 100%
      height 100%
      .swiper-slide
        text-align center
        font-size 18px
        background #fff
        height 400px
        display -webkit-box
        display -ms-flexbox
        display -webkit-flex
        display flex
        -webkit-box-pack center
        -ms-flex-pack center
        -webkit-justify-content center
        justify-content center
        -webkit-box-align center
        -ms-flex-align center
        -webkit-align-items center
        align-items center
        position relative
        /*background yellowgreen*/
        img
          width 80%
          height 90%
          background skyblue
        .navInfo
          display flex
          flex-direction column
          justify-content center
          position absolute
          top 0
          bottom 0
          right 0
          left 0
          margin auto
          z-index 5
          width 340px
          height 160px
          background #fff
          opacity 0.9
          .navName
            display flex
            justify-content center
            align-items center
            .right
              width 30px
              height 4px
              background #999
            span
              font-size 22px
              margin 10px
              color #999
            .left
              width 30px
              height 4px
              background #999
          .qin
            font-size 30px
            margin 20px
          .shopInfo
            font-size 24px
            color #666

</style>
