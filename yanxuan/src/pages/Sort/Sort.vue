<template>
  <div class="sortWrap">
    <div class="header">
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品, 共9789款好物</span>
      </div>
    </div>
    <div class="content">
      <div class="navWrapper" ref="navWrapper">
        <ul class="nav">
          <li
            class="navList"
            v-for="(item,index) in navData.categoryL1List"
            :key="item.id"
            :class="{active:current === index}"
            @click="currentIndex(index)">
            <span class="listName">{{item.name}}</span>
          </li>
        </ul>
      </div>
      <!--<div-->
        <!--class="navInfo"-->
        <!--v-for="(item,index) in navData.categoryL1List"-->
        <!--:key="item.index" >-->
      <div class="navInfo">
        <div class="navInfoHead" >
          <img src="../../assets/images/nav11.jpg" alt="">
        </div>
        <div class="navName">
          <!--<div class="right"></div>-->
          <!--<span>{{item.name}}</span>-->
          <!--<div class="left"></div>-->
          <div class="right"></div>
          <span>推荐专区分类</span>
          <div class="left"></div>
        </div>
        <ul class="navList" >
          <!--<li -->
            <!--class="navItem"-->
            <!--v-for="(info,index) in item.subCateList" -->
            <!--:key="info.id" >-->
            <!--<img :src="info.bannerUrl" />-->
            <!--<span class="text">{{info.name}}</span>-->
          <!--</li>-->
          <li class="navItem">
            <img src="../../assets/images/nav11.jpg" />
            <span class="text">真丝满件折hahahhahaha</span>
          </li>
          <li class="navItem">
            <img src="../../assets/images/nav11.jpg" />
            <span class="text">真丝满件折hahahhahaha</span>
          </li>
          <li class="navItem">
            <img src="../../assets/images/nav11.jpg" />
            <span class="text">真丝满件折hahahhahaha</span>
          </li>
          <li class="navItem">
            <img src="../../assets/images/nav11.jpg" />
            <span class="text">真丝满件折hahahhahaha</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex';
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
      ...mapState(['navData'])
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
        width 30%
        height 1134px
        overflow hidden
        .nav
          border-right 1px solid #000
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
        .navList
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
