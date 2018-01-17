<template lang="html">
  <header class="top">
    <div class="wrapper">
      <div class="logo">
        <router-link :to="{name: 'home'}">
          <img src="../../assets/img/logo.png" alt="">
        </router-link>
      </div>
      <div class="links">
        <div class="cidade" v-if="$route.name != 'home'">
          <h2>{{ booking.city }} / {{ hotelData[$route.params.id].surname ? `Hotel ${hotelData[$route.params.id].surname}` : '' }}</h2>
        </div>
        <ul>
          <li>Cadastro</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'vueHeader',
  methods: {
    checkRoutes () {
      if (this.$route.path.substring(1, 10) === '') return false
      else return true
    }
  },
  computed: {
    ...mapGetters([
      'hotelData',
      'booking'
    ])
  }
}
</script>

