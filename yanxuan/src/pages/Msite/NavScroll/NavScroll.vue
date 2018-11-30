<template>
  <div class="wrapper" ref="wrapper">
    <ul>
      <li
        class="navItem"
        v-for="(item,index) in navList"
        :key="index"
        :class="{'active':current === index}"
        @click="currentIndex(index)">
        <span>{{item}}</span>
      </li>
    </ul>
    <!--<div class="iconBlock">-->
      <!--<i class="iconfont icon-35_xiangxiajiantou"></i>-->
    <!--</div>-->
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        navList: ['推荐','居家','鞋包配饰','服装','电器','洗护','饮食','餐厨','婴童','文体','特色区',],
        current: 0
      }
    },
    methods:{
      currentIndex(index){
        this.current = index
      }
    },
    mounted(){
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper,{
          scrollX: true,//横向滑动
          click: true
        })
      })
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .wrapper
    width 100%
    height 100%
    overflow hidden
    display flex
    flex-direction row
    flex-flow nowrap
    ul
      display flex
      flex-direction row
      flex-wrap nowrap
      justify-content space-between
      padding 0 30px
      background #ffffff
      height 60px
      align-items center
      li
        width 135px
        height 60px
        display flex
        flex-direction row
        flex-wrap nowrap
        justify-content space-between
        &.active
          span
            color red
            position relative
            &:after{
              content ''
              left 0
              bottom 0
              position absolute
              width 100%
              height 4px
              background-color red
            }
        span
          display inline-block
          letter-spacing 2px
          padding 0 16px
          line-height 60px
          font-size 26px
          text-align center
          color #333333
    /*.iconBlock*/
      /*width 120px*/
      /*height 60px*/
      /*position relative*/
      /*i*/
        /*position absolute*/
        /*right 0*/
        /*top 0*/
        /*color red*/
</style>
