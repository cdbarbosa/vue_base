<template lang="html">
  <div class="top">
    <div class="wrapper">
      <div class="logo">
        <router-link :to="{name: 'home'}">
          <img src="../../assets/img/logo.png" alt="">
        </router-link>
      </div>
      <div class="links" v-if="checkRoutes()">
        <!-- <p v-for="reserva in getDestiny">{{reseva.destino}}</p> -->
        <ul>
          <li style="margin-right: 3rem">cadastro</li>
          <li>login</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vueHeader',
  methods: {
    checkRoutes () {
      if (this.$route.path.substring(1, 10) === 'dashboard' || this.$route.path.substring(1, 8) === 'reserva' || this.$route.path.substring(1, 7) === 'quarto') return true
      else return false
    }
  }
}
</script>

<style lang="css">
</style>
