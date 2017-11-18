<template lang="html">
  <div class="page" id="home">
    <div class="wrapper">
      <h1>Hello from Home</h1>
      <div v-for="product, index in saleProducts">
        {{ product.price }}
      </div>
      <button @click="reducePrice(5)">Reduce</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapGetters([
      'saleProducts'
    ])
  },
  mounted () {},
  methods: {
    ...mapActions([
      'reducePrice'
    ])
  },
  components: {
  }
}
</script>
