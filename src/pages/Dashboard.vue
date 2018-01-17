<template lang="html">
  <div class="page" id="dashboard">
    <div class="wrapper">
      <div class="content">
        <div class="rejector">
          <ul>
            <li>Entrada</li>
            <li>Saida</li>
          </ul>
          <div class="material-icons">
            <i class="material-icons">filter_list</i>
          </div>
          <hr>
        </div>
        <div class="row">
          <div class="col col--1-of-3 hotels" v-for="item in items">
            <router-link :to="{name : 'reserva'}">
              <h3 style="color: black; margin-bottom: 0;">Hotel {{ item }}</h3>
            </router-link>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapActions} from 'vuex
import {mapGetters} from 'vuex'
export default {
  name: 'dashboard',
  data () {
    return {
      items: 12
    }
  },
  computed: {
    reservation () {
      return this.$store.state.resevation
    },
    ...mapGetters([
      'getDestiny'
    ])
  }
}
</script>

<style media="screen">
  #dashboard {
    background-image: url("../assets/img/room.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
