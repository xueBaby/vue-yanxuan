<template>
  <div id="msite">
    <section class="head">
      <header>
        <div class="logo"></div>
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品, 共9789款好物</span>
        </div>
        <div class="login">登录</div>
      </header>
      <NavScroll />
    </section>
    <div class="content">
      <!--头部下的轮播图-->
      <NavSwiper />
      <!--//文字介绍-->
      <div class="salary">
        <div class="salary-contanier">
          <i class="iconfont icon-duihao"></i>
          <span>网易自营品牌</span>
        </div>
        <div class="salary-contanier">
          <i class="iconfont icon-duihao"></i>
          <span>30天无忧退货</span>
        </div>
        <div class="salary-contanier">
          <i class="iconfont icon-duihao"></i>
          <span>48小时速退款</span>
        </div>
      </div>
      <Block />
      <!--品牌制造商直供-->
      <div class="product">
        <div class="proHeader">
          <span class="proText">品牌制造商直供</span>
          <div class="proMore">
            <span>更多</span>
            <i class="iconfont icon-arrow-right"></i>
          </div>
        </div>
        <ul class="production">
          <li
            class="proImg"
            v-for="(item,index) in homeData.tagList"
            :key="item.id"
            v-if="index<=3">
            <a href="javascript:;">
              <div class="proInfo">
                <h5>{{item.name}}</h5>
                <span>{{item.floorPrice}}元起</span>
              </div>
              <img :src="item.picUrl" alt="">
            </a>
          </li>
        </ul>
      </div>
      <!--新品首发-->
      <Block />
      <div class="newGoodsContanier">
        <a class="newHeader">
          <span class="new">新品首发</span>
          <div class="newInfo">
            <span>更多</span>
            <i class="iconfont icon-arrow-right"></i>
          </div>
        </a>
        <ul class="newContainer">
          <li
            class="newImg"
            v-for="(item,index) in homeData.newItemNewUserList"
            :key="item.id"
            v-if="index<=5">
            <img :src="item.primaryPicUrl" alt="">
            <div class="newImgInfo">
              <span class="imgName ellipsis">{{item.name}}</span>
              <span class="money">¥{{item.retailPrice}}</span>
            </div>
          </li>
        </ul>

      </div>
      <!--人气推荐好物首发-->
      <div class="personGoods">
        <div class="personHead">
          <span class="headName">人气推荐.好物精选</span>
          <div class="lookAll">
            <span class="allImg">
              查看全部
              <i class="iconfont icon-arrow-right"></i>
            </span>
          </div>
        </div>
        <PersonBaner></PersonBaner>

      </div>
    </div>
  </div>
</template>
<script>
  import NavScroll from './NavScroll/NavScroll.vue';
  import NavSwiper from './NavSwiper/NavSwiper.vue';
  import {reqHomedata} from '../../api/index';
  import {mapState} from 'vuex';
  import Block from '../../components/Block/Block.vue'
  import PersonBanner from './PersonBanner/PersonBanner.vue'
  export default {
     mounted(){
      this.$store.dispatch('getHomedata')
    },
    components: {
      NavScroll,
      NavSwiper,
      Block,
      PersonBanner
    },
    computed: {
      ...mapState(['homeData'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  #msite
    width 100%
    letter-spacing 1px
    margin-bottom 100px
    .head
      background-color #ffffff
      position fixed
      top 0
      left 0
      right 0
      z-index 5
      header
        height 56px
        display flex
        padding 16px 30px
        display flex
        align-items center
        .logo
          width 140px
          height 40px
          background url('../../assets/images/icons.png')
          background-position -6px 230px
          background-size 108%
          margin-right 20px
          display inline-block
        .search
          flex-grow 1
          display flex
          flex-flow row nowrap
          align-items center
          justify-content center
          width 432px
          height 56px
          background-color #ededed
          border-radius 6px
          margin 0 20px
          i
            width 28px
            height 28px
            margin-right 6px
            color #999
          span
            color #666666
            font-size 26px
        .login
          font-size 27px
          color red
          border 1px solid red
          width 80px
          text-align center
          padding 6px
          box-sizing border-box
    .content
      position absolute
      top 148px
      left 0px
      width 100%
      background #fff
      margin-bottom 50px
      .salary
        box-sizing border-box
        width 100%
        heigth 72px
        display flex
        flex-direction row
        /*flex-wrap nowrap*/
        /*align-items center*/
        justify-content space-around//三个距离等分
        padding 20px
        .salary-contanier
          margin-rigth 20px
          i
            font-size 28px
            color red
          span
            font-size 25px
            color red
      .product
        background #fff
        padding  15px 30px
        .proHeader
          display flex
          align-items center
          height 80px
          position relative
          .proText
            font-size 38px
            color #999
          .proMore
            position absolute
            top 0
            right 0
            height 80px
            display flex
            align-items center
            i
              font-size 70px
              color #7e8c8d
              margin-right -22px
            span
              font-size 30px
              color #666
              margin-right -20px
        .production
          background #fff
          height 554px
          width 100%
          float left
          margin-bottom 30px
          .proImg
            float left
            width 48.5%
            height 48.2%
            margin 5px
            background #f4f4f4
            a
              width 100%
              height 100%
              position relative
              .proInfo
                position absolute
                h5
                  color #000
                span
                  font-size 25px
                  color #7e8c8d
              img
                width 100%
                height 100%
      .newGoodsContanier
        padding  15px 30px
        margin-bottom 20px
        display flex
        flex-direction column
        .newHeader
          display flex
          align-items center
          height 80px
          position relative
          .new
            font-size 34px
            line-height 100px
          .newInfo
            position absolute
            top 0
            right 0
            height 80px
            display flex
            align-items center
            i
              font-size 70px
              color #7e8c8d
              margin-right -22px
            span
              font-size 30px
              color #666
              margin-right -20px
        .newContainer
          background #fff
          height 690px
          width 100%
          float left
          .newImg
            float left
            width 31%
            height 50%
            margin 7px
            background #f4f4f4
            img
              width 100%
              height 80%
            .newImgInfo
              width 220px
              .imgName
                /*width 30px*/
                display inline-block
                width 100%
                font-size 28px
              .money
                color red




      .personGoods
        display flex
        .personHead
          display flex
          flex-direction column
          justify-content center
          align-items center
          width 100%
          height 300px
          background-image url('../../assets/images/hot.png')
          background-size 100% //图片大小为 多大
          .headName
            font-size 42px
            color #D6C7A8
          .lookAll
            width 300px
            height 80px
            background #F4E9CB
            margin-top 20px
            display flex
            justify-content center
            align-items center
            .allImg
              color #CCBB97
              display inline-block
              height 80px
              line-height 80px
              font-size 32px
              i
                font-size 50px
                color #CBCCC2
</style>
