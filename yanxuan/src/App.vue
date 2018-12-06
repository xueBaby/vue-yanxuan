<template>
  <div id="app">
    <!--//读缓存-->
    <router-view />
    <FootGuide v-show="$route.meta.showFood"/>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide.vue'

export default {
  components: {
    FootGuide,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
