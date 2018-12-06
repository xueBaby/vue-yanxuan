<template>
    <div class="title">{{title}}</div>
</template>
<script>
  export default {
    props:{
      title: String
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .title
      background pink
      width 100%
      height 100px
      font-size 28px
      text-align center
      line-height 100px
</style>
