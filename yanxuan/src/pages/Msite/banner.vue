<template>
  <!--商品导航-->
  <nav class="goods">
    <div
      class="goodsItem"
      v-for="(item,index) in homeData.cateList"
      :key="item.id">
      <a class="goodsLink" href="javascript:;">
        <div class="goods_container">
          <img :src="item.bannerUrl">
        </div>
        <span class="goodsName">{{item.name}}</span>
      </a>
    </div>
  </nav>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .goods
    width 100%
    height 440px
    display flex
    .goodsItem
      width 100%
      height 200px
      .goodsLink
        width 20%
        height 200px
        display flex
        flex-direction column
        justify-content center
        .goods_container
          display flex
          flex 1
          width 110px
          height 110px
          img
            width 100%
            height 100%
        .goodsName
          font-size 20px


</style>
