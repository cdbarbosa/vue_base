<template>
  <div id="app">
    <vueHeader></vueHeader>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import vueHeader from './components/common/VueHeader.vue'
export default {
  name: 'app',
  components: {
    vueHeader
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>
