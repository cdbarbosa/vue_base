<template lang="html">
  <div class="page" id="dashboard">
    <div class="wrapper">
      <div class="content">
        <div class="rejector">
          <ul>
            <li>Entrada</li>
            <li>Saida</li>
          </ul>
          <!-- <div class="material&#45;icons"> -->
          <!--   <i class="material&#45;icons">filter_list</i> -->
          <!-- </div> -->
          <hr>
        </div>
        <div class="hotels">
          <div class="hotel" v-for="h, index in hotelData">
            <router-link :to="{name : 'reserva'}">
              <h3 style="color: black; margin-bottom: 0;">Hotel {{ h.surname }}</h3>
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
import { mapGetters, mapActions } from 'vuex'
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
      'hotelData'
    ])
  },
  beforeMount () {
    this.getData()
  },
  methods: {
    ...mapActions([
      'setHotelData'
    ]),
    getData () {
      this.$http.get('https://uinames.com/api', {
        params: {
          amount: 12,
          ext: ''
        }
      }).then(response => {
        this.setHotelData(response.data)
      })
    }
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
