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
          <h2>{{ booking.city }}{{ $route.params.id !== undefinedc ? ` / Hotel ${hotelData[$route.params.id].surname}` : '' }}</h2>
        </div>
        <ul v-if="$route.name !== 'pagamento'">
          <li>Cadastro</li>
          <li>Login</li>
        </ul>
        <ul v-else class="user">
          <li class="userName">{{ user.name }} {{ user.surname }}</li>
          <li class="userPhoto" :style="{
            background: `url(/static/img/user.jpg)`,
            backgroundSize: 'cover'
          }">
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'vueHeader',
  computed: {
    user () {
      return this.$store.getters.hotelData[0]
    },
    ...mapGetters([
      'hotelData',
      'booking'
    ])
  },
  methods: {
    checkRoutes () {
      if (this.$route.path.substring(1, 10) === '') return false
      else return true
    }
  }
}
</script>

