<template lang="html">
  <div id="reserva" class="">
    <div class="banner" :style="{
      background: `url(/static/img/h${$route.query.id + 1}.jpg) no-repeat`,
      backgroundSize: 'cover', backgroundPosition: 'top'
    }">
        <div class="content">
          <div class="wrapper">
          <h2>Hotel {{ hotelData[$route.query.id].surname }}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="" style="">
      </div>
      <div class="cols" id="rooms">
        <div class="room col" v-for="room, index in items" style="">
          <header>
            <img :src="`/static/img/${index+1}.jpg`" alt=""/>
          </header>
          <div class="body">
            <router-link :to="{ name: 'quarto'}">
              <h4 style="">Quarto {{ index+1 }}</h4>
            </router-link>
            <p>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'reserva',
  data () {
    return {
      items: 10
    }
  },
  computed: {
    ...mapGetters([
      'hotelData'
    ])
  }
}
</script>
