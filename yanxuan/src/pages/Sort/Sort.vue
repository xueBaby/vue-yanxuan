<template>
  <div class="sortWrap">
    <div class="header">
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品, 共9789款好物</span>
      </div>
    </div>
    <div class="content" v-if="navInfo">
      <div class="navWrapper" ref="navWrapper">
        <ul class="nav">
          <li
            class="navList"
            v-for="(item,index) in navData"
            :key="item.index"
            :class="{active:current === index}"
            @click="currentIndex(index)">
            <span class="listName">{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="navInfo"  v-if="navInfo">
        <div class="navInfoHead" >
          <img :src="navs.url" alt="">
        </div>
        <div class="navName">
          <div class="right"></div>
          <span>{{navs.name}}</span>
          <div class="left"></div>
        </div>
        <ul class="navImg" >
          <li
            class="navItem"
            v-for="(item,index) in navs.list">
            <img :src="item.wapBannerUrl" />
            <span class="text">{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState,mapGetters} from 'vuex';
  import {reqNavData} from '../../api/index';
  export default {
    data(){
      return {
        current: 0
      }
    },
    mounted(){
      this.$store.dispatch('getNavData'); //分发
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.navWrapper,{
          scrollY: true,//横向滑动
          click: true
        })
      })
    },
    computed:{
      //需要先分发再获取
      ...mapState(['navData']),
      ...mapGetters(['navInfo']),
      navs(){ //当前index对应的ul
        return this.navInfo[this.current] //当前的 url
      }

    },
    methods: {
      currentIndex(index){
        this.current = index
      }
    }




  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
 @import '../../common/stylus/mixins.styl'
  .sortWrap
    width 100%
    height 100%
    .header
      height 100px
      display flex
      justify-content center
      align-items center
      bottom-border-1px(#f2f2f2)
      .search
        display flex
        align-items center
        justify-content center
        width 100%
        height 70px
        background-color #ededed
        border-radius 10px
        margin 0 20px
        i
          width 28px
          height 28px
          margin-right 6px
          color #999
        span
          color #666666
          font-size 26px

    .content
      width 100%
      height 100%
      display flex
      .navWrapper
        width 26%
        margin-bottom 200px
        overflow hidden
        .nav
          border-right 1px solid #999
          height 1272px
          .navList
            height 100px
            /*background pink*/
            text-align center
            line-height 80px
            position relative
            &.active
              span
                color red
                font-weight bold
                font-size 41px
              &:after{
                content ''
                top 0
                left 0
                position absolute
                width 4px
                height 100%
                background-color red
              }
            span
              font-size 34px
      .navInfo
        width 62%
        display inline-block
        flex-direction column
        justify-content center
        margin-left 30px
        .navInfoHead
          width 100%
          height 260px
          background yellowgreen
          img
            width 100%
            height 100%
            background pink
        .navName
          display flex
          justify-content center
          align-items center
          .right
            width 40px
            height 4px
            background #f4f4f4
          span
            font-size 26px
            margin 10px
          .left
            width 40px
            height 4px
            background #f4f4f4
        .navImg
          width 100%
          height 500px
          display flex
          flex-wrap wrap //换行
          li
            width 33.33%
            height 250px
            display flex

            flex-direction column
            justify-content center
            img
              width 100%
              height 70%
            span
              font-size 25px
              text-align center
</style>
