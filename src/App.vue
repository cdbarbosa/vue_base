<template>
  <div id="app">
    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>
