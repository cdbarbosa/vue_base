<template lang="html">
  <header class="top">
    <div class="wrapper">
      <div class="logo">
        <router-link :to="{name: 'home'}">
          <img src="../../assets/img/logo.png" alt="">
        </router-link>
      </div>
      <div class="links">
        <!-- <p v-for="reserva in getDestiny">{{reseva.destino}}</p> -->
        <ul>
          <li>Cadastro</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'vueHeader',
  methods: {
    checkRoutes () {
      if (this.$route.path.substring(1, 10) === '') return false
      else return true
    }
  }
}
</script>

<style lang="css">
</style>
