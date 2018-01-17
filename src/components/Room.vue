<template lang="html">
  <div id="reservation" class="page">
    <div class="wrapper">
      <img :src="`/static/img/${parseInt($route.params.id) + 1}.jpg`" alt=""/>
      <div class="cols":style="{}">
        <div class="col">
          <h2>Quarto </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="col" id="bookingInfo">
          <div class="list">
            <h4>Check-in: <span class="__opaque">{{ booking.in }}</span></h4>
            <h4>Check-out: <span class="__opaque">{{ booking.out }}</span></h4>
            <h4>Preço: <span class="__opaque">R$ 100,00 {{  }}</span></h4>
          </div>
          <div class="buttons_reserve">
            <router-link class="__small" tag="button" :to=" {name: 'cadastro'}">
              RESERVAR
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'reservation',
  computed: {
    ...mapGetters([
      'booking'
    ])
  }
}
</script>
<<<<<<< HEAD
=======

<style lang="scss">
</style>

>>>>>>> 523fab69b1eb76fe075db3e0b7e8533171a6c264
