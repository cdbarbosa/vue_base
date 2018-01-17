<template lang="html">
    <div class="page" id="home">
      <div class="wrapper">
        <div class="headerContent">
          <div class="boxChoose">
            <h3>Leirbag</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
              </p>
            <div class="inputs">
              <label for="onde">Onde</label>
              <input type="text" v-model="city" name="" value="" placeholder="Destino">
              <div class="columns">
                <div class="column">
                  <label for="check-in">Check-in</label>
                  <input type="text" name="" v-model="bookingIn" v-mask="'##/##/####'" autocomplete="on" placeholder="01/12/2012" class="input">
                </div>
                <div class="column">
                  <label for="check-out">Check-out</label>
                  <input type="text" name="" v-model="bookingOut"  v-mask="'##/##/####'"autocomplete="on" placeholder="01/12/2012" class="input">
                </div>
              </div>
            </div>
            <router-link :to="{ name: 'dashboard' }">
              <button type="submit" name="button" v-on:click="changeDestiny('salvador')">Entrar</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  computed: {
    city: {
      get () {
        return this.$store.getters.booking.city
      },
      set (newVal) {
        this.setBookingData(['city', newVal])
      }
    },
    bookingIn: {
      get () {
        return this.$store.getters.booking.in
      },
      set (newVal) {
        this.setBookingData(['in', newVal])
      }
    },
    bookingOut: {
      get () {
        return this.$store.getters.booking.out
      },
      set (newVal) {
        this.setBookingData(['out', newVal])
      }
    },
    reservation () {
      console.log(this.$store.state.resevation.destino)
      return this.$store.state.resevation
    }
  },
  beforeMount () {
    this.getData()
  },
  methods: {
    ...mapActions([
      'setHotelData',
      'setBookingData'
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
    },
    changeDestiny () {
      // this.$store.state.resevation.destino = this.destino
      // console.log(this.$store.state.resevation.destino)
    }
  }
}
</script>

<style media="screen">
  #home {
    background-image: url("../assets/img/room.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
