<template>
  <div id="hospede">
    <div class="wrapper">
      <div class="hospQuant">
        <h4>quantidade de hospedes:</h4>
        <input type="text" v-bind="hosp">
      </div>
      <div class="servico">
        <h4>serviços extras:</h4>
        <div class="col col--1-of-4 types" v-for="i in quant">
          <h5>serviço {{i}}</h5>
          <p>Take on me, take me on</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hospede',
  data () {
    return {
      quant: 4,
      hosp: null
    }
  }
}
</script>

<style lang="scss">
  .col {
    padding-left: 0;
  }
  h4 {
    text-transform: uppercase;
  }
  .hospQuant {
    input {
      margin-bottom: 2rem;
    }
  }
  .types {
    padding-left: 1rem;
  }
</style>
