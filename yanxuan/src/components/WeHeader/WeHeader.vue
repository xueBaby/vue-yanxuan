<template>
  <header>
    <i
      class="similary iconfont icon-shouye_huaban_huaban"
      @click="$router.push('/msite')" ></i>
    <span class="headName">网易严选</span>
    <i class="similary iconfont icon-sousuo"></i>
    <i
      class="similary iconfont icon-gouwuche-01"
      @click="$router.replace('/shopcard')" ></i>
  </header>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /*@import '../../common/stylus/mixins.styl'*/
  header
    width 100%
    height 100px
    background #fff
    display flex
    position fixed
    padding 0 20px
    box-sizing border-box
    z-index 100
    .headName
      top 0
      bottom 0
      left 0
      right 0
      margin 0 auto
      font-size 40px
      line-height 100px
      text-align center
    .similary
      font-size 55px !important
      line-height 100px
      color #999


</style>
