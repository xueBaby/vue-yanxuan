<template>
  <div class="proWrapper">
    <WeHeader :u="isPhone"/>
    <div class="procontent">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="">
      </div>
      <div class="login" >
        <div class="phone" @click="$router.replace('/phoneoremilelogin')" >
          <i class="iconfont icon-shouji"></i>
          <span >手机号码登录</span>
        </div>
        <div class="email" @click="!isPhone">
          <i class="iconfont icon-youxiang"></i>
          <span >邮箱账号登录</span>
        </div>
      </div>
    <div class="phoneRegister">
      <span>手机号快捷注册</span>
      <i class="iconfont icon-xiangzuojiantou"></i>
    </div>
    <div class="footIcon">
      <div class="info">
        <i class="size iconfont icon-z-weixin2"></i>
        <span class="inter">微信</span>
      </div>
      <div class="smallBlock"></div>
       <div class="info">
         <i class="size iconfont icon-qq"></i>
         <span class="inter">QQ</span>
       </div>
       <div class="smallBlock"></div>
       <div class="info">
         <i class="size iconfont icon-weibo"></i>
         <span class="inter">微博</span>
       </div>
      </div>
    </div>
  </div>
</template>
<script>
  import WeHeader  from '../../components/WeHeader/WeHeader.vue'
  export default {
    data(){
      return {
        isPhone: true //true 是手机 false
      }

    },
    components:{
      WeHeader
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .proWrapper
    .procontent
      padding-top 100px
      width 100%
      height 1132px //再加100px
      position relative
      background-color #f4f4f4
      .logo
        top-border-1px(#999)
        width 100%
        height 400px
        text-align center
        line-height 500px
        /*background-color #f4f4f4*/
        img
          width 40%
          height 30%
     .login
       marign-top 40px
       height 280px
       display flex
       flex-direction column
       padding-bottom 40px
       /*box-sizing border-box*/
       justify-content center
       align-items center
       .phone
         margin-top 40px
         width 90%
         height 50%
         background-color #B4282D
         border 2px solid #B4282D
         border-radius 12px
         display flex
         justify-content center
         align-items center
         i
           font-size 60px
           color #fff
         span
           color #fff
       .email
         border-radius 12px
         display flex
         justify-content center
         align-items center
         margin-top 40px
         width 90%
         height 50%
         background-color #fff
         border 2px solid #B4282D
         i
           font-size 60px
           color  #B4282D
         span
           color  #B4282D
     .phoneRegister
       display flex
       justify-content center
       span
         font-size 28px
       i
         font-size 32px
     .footIcon
       width 100%
       display flex
       justify-content space-around
       position absolute
       bottom  0px
       .info
         .size
           font-size 28px
           color #7e8c8d
         .inter
           font-size 26px
           color #7e8c8d
       .smallBlock
         width 4px
         height 40px
         background-color #7e8c8d
</style>

