<template lang="html">
  <div class="page" id="dashboard">
    <div class="wrapper">
      <div class="content">
        <div class="rejector">
          <ul>
            <li>{{ booking.in }}</li>
            <li>{{ booking.out }}</li>
          </ul>
          <!-- <div class="material&#45;icons"> -->
          <!--   <i class="material&#45;icons">filter_list</i> -->
          <!-- </div> -->
          <hr>
        </div>
        <div class="hotels">
          <div class="hotel" v-for="h, index in hotelData">
            <header>
              <img :src="`/static/img/h${index+1}.jpg`" alt=""/>
            </header>
            <router-link :to="{name : 'hotel', params: {id: index}}">
              <h3 v-model="hotel">Hotel {{ h.surname }}</h3>
            </router-link>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
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
      'hotelData',
      'booking'
    ])

    // hotel: {
    //   get () {
    //     return this.$store.getters.booking.hotel
    //   },
    //   set (newVal) {
    //     this.setBookingData(['hotel', newVal])
    //   }
    // }
  },
  methods: {

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
