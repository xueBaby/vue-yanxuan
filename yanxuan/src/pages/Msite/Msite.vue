<template>
  <div id="msite">
    <section class="head">
      <header>
        <div class="logo"></div>
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品, 共9789款好物</span>
        </div>
        <div class="login" @click="$router.replace('/profile')">登录</div>
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
      <Block />
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
        <PersonBanner />
      </div>
      <Block />
      <!--严选倒计时-->
      <div class="timer">
        <div class="left">
          <h3>严选限时购</h3>
          <div class="time">
            <span class="number">11</span>
            <span class="colon">:</span>
            <span class="number">30</span>
            <span class="colon">:</span>
            <span class="number">11</span>
          </div>
          <div>下一场22:00开始</div>
        </div>
        <div class="right">
          <img src="../../assets/images/test2.png" alt="">
          <div class="price">
            <span class="now">¥42</span>
            <span class="old">¥49</span>
          </div>
        </div>
      </div>
      <Block />
      <div class="morePalary">
        <img src="../../assets/images/move.jpg" alt="福利">
      </div>
      <div class="footer">
        <div class="footerUp">
          <span class="com download">下载APP</span>
          <span class="com computer">电脑版</span>
        </div>
        <div class="copyright">
          <span class="company">网易公司版权所有 © 1997-2018</span>
          <span class="company">食品经营许可证: JY13301080111719</span>
        </div>
        <div class="upArrow">
          <i class="iconfont icon-up"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import NavScroll from './NavScroll/NavScroll.vue';
  import NavSwiper from './NavSwiper/NavSwiper.vue';
  import {reqHomedata} from '../../api/index';
  import {mapState} from 'vuex';
//  import Block from '../../components/Block/Block.vue'
  import PersonBanner from './PersonBanner/PersonBanner.vue'
  export default {
     mounted(){
      this.$store.dispatch('getHomedata')
    },
    components: {
      NavScroll,
      NavSwiper,
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
        display flex
        padding 16px 30px
        display flex
        align-items center
        position: fixed
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
            font-size 100% !important
            line-height 28px
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
        flex-direction column
        .personHead
          display flex
          flex-direction column
          justify-content center
          align-items center
          width 100%
          height 300px
          background-image url('../../assets/images/hot.png')
          background-size 100% //图片大小为 多大
          margin-bottom 50px
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
              .icon-arrow-right
                font-size 50px
                color #CBCCC2
      .timer
        display flex
        .left
          width 50%
          height 400px
          display flex
          flex-direction column
          justify-content center
          align-items center
          .time
            margin 30px
            .number
              color #fff
              display inline-block
              width 60px
              height 60px
              line-height 60px
              background gray
              text-align: center
        .right
          width 50%
          height 400px
          position relative
          img
            width 100%
            height 100%
          .price
            position absolute
            right 40px
            bottom 60px
            width 100px
            height 100px
            background #EDC567
            border-radius 50%
            text-align center
            display flex
            flex-direction column
            justify-content center //换轴垂直居中
            .now
              color #fff
            .old
              color #fff
      .morePalary
        width 100%
        height 400px
        img
          width 100%
          height 100%

    .footer
      display flex
      flex-direction column
      width 100%
      height 300px
      background #414141
      .footerUp
        display flex
        justify-content center
        align-items center
        .com
          font-size 30px
          margin 40px
          color #fff
          display flex
          justify-content center
          align-items center
          &.download
           width 200px
           height 50px
           border 1px solid gainsboro
          &.computer
            width 150px
            height 50px
            border 1px solid gainsboro
      .copyright
        display flex
        flex-direction column
        justify-content center
        align-items center
        .company
          margin 10px
      .upArrow
        position fixed
        bottom 100px
        right 0
        width 100px
        height 100px
        background #fff
        border-radius 50%
        display flex
        justify-content  center
        text-align center
        .icon-up
          font-size 60px
          color #999
</style>
