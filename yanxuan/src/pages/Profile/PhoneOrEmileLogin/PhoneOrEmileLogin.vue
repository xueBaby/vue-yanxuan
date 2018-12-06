<template>
  <div class="phoneWrapper">
    <WeHeader />
    <div id="procontent">
      <div class="logo">
        <img src="../../../assets/images/logo.png" alt="">
      </div>
      <div class="inputWrapper">
        <div class="we telephone">
          <input class="deleteOutline" type="text" placeholder="请输入手机号">
        </div>
        <div class="we message">
          <input class="deleteOutline" type="text" placeholder="请输入短信验证码">
          <div class="code">获取验证码 </div>
        </div>
        <div class="we problem">
          <span class="problemText">遇到问题？</span>
          <span class="secret">使用密码验证登录</span>
        </div>
      </div>
      <div id="loginType">
        <div class="login">登录</div>
        <div class="others">其他登录方式</div>
      </div>
      <div class="phoneRegister">
        <span>注册账号</span>
        <i class="iconfont icon-xiangzuojiantou"></i>
      </div>
    </div>
  </div>
</template>
<script>
  import WeHeader  from '../../../components/WeHeader/WeHeader.vue'
  export default {
    props:{
      isPhone: Boolean
    },
    components:{
      WeHeader
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .phoneWrapper
    #procontent
      padding-top 100px
      width 100%
      height 1432px //再加100px
      position relative
      background-color #f4f4f4
      .logo
        width 100%
        height 300px
        text-align center
        line-height 500px
        /*background-color #f4f4f4*/
        img
          width 30%
          height 30%
      .inputWrapper
        box-sizing border-box
        padding 0 15px
        width 100%
        .we
          width 100%
          height 100px
           /*background pink*/
          line-height 100px
          font-size 28px
          border-bottom 1px solid #ccc
          &.problem
            display flex
            justify-content space-between
            /*border-bottom none*/
            .problemText
              color #848484
          &.message
            position relative
            .code
              position absolute
              right 0
              bottom 16px
              width 170px
              height 56px
              border 1px solid #000
              border-radius 6px
              font-size 28px
              line-height  60px
              text-align center
          .deleteOutline
            outline none
            background #f4f4f4



      #loginType
        padding 0 16px
        .login
          width 100%
          height 90px
          background-color #B4282D
          color #fff
          text-align center
          line-height 90px
          border-radius 10px
        .others
          margin-top 20px
          width 100%
          height 90px
          border 1px solid #B4282D
          color #B4282D
          text-align center
          line-height 90px
          border-radius 10px
      .phoneRegister
        padding 0 16px
        width 100%
        height 90px
        line-height 90px
        text-align center
        span
          font-size 28px
        i
          font-size 32px
</style>
