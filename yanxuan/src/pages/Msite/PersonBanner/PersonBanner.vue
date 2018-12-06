<template>
  <div class="wrap">
    <div class="swiper-container" id="banner">
      <div class="swiper-wrapper" >
        <div
          class="swiper-slide"
          v-for="(item,index) in homeData.popularItemList"
          :key="index"
          v-if="homeData.popularItemList.length>0">
          <div class="image">
            <img :src="item.primaryPicUrl" alt="">
          </div>
          <div class="perInfo">
            <span class="perInfoNme ellipsis">{{item.name}}</span>
            <span class="nameDoc ellipsis">{{item.simpleDesc}}</span>
            <span class="money">¥{{item.retailPrice}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>
<script>
  import 'swiper/dist/css/swiper.min.css'
  //引入swiper库暴露出来的构造函数
  import Swiper from 'swiper'
  import {mapState} from 'vuex';
  export default {
    computed:{
      ...mapState(['homeData'])
    },
    watch: {
      homeData(){
        this.$nextTick(() => {
          new Swiper('#banner',{
            spaceBetween: 20,
            slidesPerView: 2.4 //每页自动轮播
            /*https://www.swiper.com.cn/api/autoplay/16.html*/

          })

        })
      }

    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .wrap
    width 100%
    height 440px
    overflow hidden
    margin-bottom 20px
    background #ffffff
    .swiper-wrapper
      padding-left 30px
      .swiper-slide
        width 280px !important
        height 440px
        .image
          width 280px
          height 280px
          background #f4f4f4
          z-index 0
          img
            width 100%
            height 100%
        .perInfoNme
          width 200px
          margin 10px 0
          padding 0 10px
          color #333333
          font-size 28px
          line-height 34px
          display inline-block //span是行内元素需要转换成行内两块元素才能设置宽高
          width 300px
        .nameDoc
          margin-bottom 14px
          line-height 30px
          font-size 24px
          padding 0 10px
          color #7f7f7f
        .money
          padding 0 10px
          color red
          line-height 1
          font-size 28px
        &:last-of-type
          display inline-block
          border 8px solid #f4f4f4
          height 264px
          .price
            color red !important
          .nameDoc
            font-size 24px
            color #999
          span
            font-size 28px
            color #333333
</style>
