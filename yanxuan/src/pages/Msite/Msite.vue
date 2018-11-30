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
    <NavSwiper />
  </div>
</template>
<script>
  import NavScroll from './NavScroll/NavScroll.vue';
  import NavSwiper from './NavSwiper/NavSwiper.vue';
  export default {
    components: {
      NavScroll,
      NavSwiper
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #msite
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


</style>
