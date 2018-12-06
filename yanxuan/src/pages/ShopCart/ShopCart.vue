<template>
  <div class="shopContanier" >
    <header class="header">
      <span class="cardHeader" >购物车</span>
      <a class="coupon" href="javascript:;">领劵</a>
    </header>
    <div class="content">
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
      <div class="card">
        <div class="shopCardImg">
          <img src="../../assets/images/cart.png" alt="购物车">
        </div>
        <span class="add">去添加点什么吧</span>
        <div class="login" @click="$router.replace('/profile')"> 登录</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shopContanier
    width 100%
    height 100%
    display flex
    justify-content center
    .header
      bottom-border-1px(#eee)
      position fixed
      top 0
      left 0
      right 0
      z-index 3
      height 90px
      background #fff
      .cardHeader
        /*float left */
        display flex
        align-items center
        justify-content center
        height 90px
        line-height 90px
        font-size 40px
      .coupon
        font-size 30px
        line-height 90px
        color red
        position absolute
        top 0px
        bottom 0px
        right 60px
    .content
      width 100%
      height 100%
      box-sizing border-box
      margin-top 90px
      background #eee
      position relative
      .salary
        box-sizing border-box
        width 100%
        heigth 72px
        display flex
        flex-direction row
        flex-wrap nowrap
        align-items center
        justify-content space-around//三个距离等分
        padding 20px
        .salary-contanier
          margin-rigth 20px
          i
            font-size 25px
          span
            font-size 23px

      .card
        margin-top 350px
        display flex
        align-items center
        justify-content center
        flex-direction column
        height 728px
        .shopCardImg
          margin-top -300px
          width 270px
          height 270px
          display flex
          flex-direction column
          align-items center
          img
            width 100%
            height 100%
        .add
          color #7e8c8d
          font-size 24px
        .login
          width 480px
          height 92px
          line-height 92px
          text-align: center
          background darkred
          color #fff
          margin-top 60px

</style>
