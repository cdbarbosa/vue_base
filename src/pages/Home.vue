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
              <input type="text" v-model="destino" name="" value="" placeholder="Destino">
              <div class="columns">
                <div class="column">
                  <label for="check-in">Check-in</label>
                  <input type="text" name="" v-model="dataChegada" v-mask="'##/##/####'" autocomplete="on" placeholder="01/12/2012" class="input">
                </div>
                <div class="column">
                  <label for="check-out">Check-out</label>
                  <input type="text" name="" v-model="dataSaida"  v-mask="'##/##/####'"autocomplete="on" placeholder="01/12/2012" class="input">
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
// import {mapActions} from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      destino: null,
      dataChegada: null,
      dataSaida: null
    }
  },
  computed: {
    reservation () {
      console.log(this.$store.state.resevation.destino)
      return this.$store.state.resevation
    }
  },

  methods: {
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
