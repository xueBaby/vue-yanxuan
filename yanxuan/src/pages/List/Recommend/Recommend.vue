<template>
  <div class="wrapper">
    <Title :title="data.name"></Title>
    <div class="contentUp">
      <img :src="data.Item[0].picUrl" alt="picture">
      <div class="contentInfo">
        <div class="description">
          <span class="big">{{data.Item[0].title}}</span>
          <span class="small">{{data.Item[0].priceInfo}}元起</span>
        </div>
        <span class="down">{{data.Item[0].subTitle}}</span>
      </div>
    </div>
    <div class="contentDown">
      <div class="left">
        <span class="leftInfo">{{data.Item[1].title}}</span>
        <span class="leftPrice ellipsis" >{{data.Item[1].subTitle}}</span>
      </div>
      <div class="right">
        <img :src="data.Item[1].picUrl" alt="">
        <span>{{data.Item[1].typeName}}</span>
      </div>
    </div>
    <div class="contentDown">
      <div class="left">
        <span class="leftInfo">{{data.Item[2].title}}</span>
        <span class="leftPrice ellipsis" >{{data.Item[2].subTitle}}</span>
      </div>
      <div class="right">
        <img :src="data.Item[2].picUrl" alt="">
        <span>{{data.Item[2].typeName}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import Title from '../../../components/Title/Title.vue'
  export default {
    props:{
      data: Object
    },
    components:{
      Title
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .wrapper
    padding-bottom 300px
    .contentUp
      box-sizing border-box
      padding 20px
      width 100%
      height 600px
      /*display flex*/
      /*flex-direction column*/
      border 2px solid #f4f4f4
      border-radius 6px
      img
        width 100%
        height 80%
      .contentInfo
        width 100%
        display flex
        flex-direction column
        justify-content space-around
        .description
          display flex
          justify-content  space-between //主轴水平分布
          .big
            font-size 35px
            margin 20px 0
          .small
            font-size 35px
            margin 20px 0
        .down
          color #999
          font-size 30px
    .contentDown
      margin-top 20px
      width 100%
      display flex
      height 290px
      padding 0 20px
      box-sizing border-box
      border 1px solid #f4f4f4
      .left
        width 60%
        display flex
        flex-direction column
        justify-content center
        .leftInfo
          font-size 32px
        .leftPrice
          font-size 24px
          margin-top 30px
          color #999
          width 80%
      .right
        width 40%
        height 285px
        position relative
        img
          width 100%
          height 100%
        span
          display block
          width 200px
          height 38px
          position absolute
          top 10px
          left 18px
          background-color #fff
          border-radius 20px
          font-size 20px
          text-align center
          line-height 32px

</style>
