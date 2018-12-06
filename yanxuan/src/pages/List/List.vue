<template>
  <div class="listWrap">
    <WeHeader />
    <!--轮播组件-->
    <NavSwiper :topicData=topicData />
    <!--小轮播-->
    <SmallSwiper :topicData=topicData />
    <Block/>
    <!--为你推荐-->
    <Recommend :data=topicData.recommend />
  </div>
</template>
<script>
  import WeHeader from '../../components/WeHeader/WeHeader.vue';
  import NavSwiper from './NavSwiper/NavSwiper.vue'
  import SmallSwiper from './SmallSwiper/SmallSwiper.vue'
  import Recommend from './Recommend/Recommend.vue'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getTopicData')
    },
    components:{
      NavSwiper,
      WeHeader,
      SmallSwiper,
      Recommend
    },
    computed: {
      ...mapState(['topicData'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .listWrap
    display flex
    flex-direction column

</style>
