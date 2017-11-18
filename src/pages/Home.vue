<template lang="html">
  <div class="page" id="home">
    <div class="wrapper">
      <h1>Hello from Home</h1>
      <input type="text" name="some_name" value="" v-model="text">
      <div v-for="product, index in saleProducts">
        {{ product.price }}
      </div>
      <button @click="reducePrice(5)">Reduce</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import _ from 'lodash'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  computed: {
    text: {
      get () {
        return this.$store.getters.text
      },
      set: _.debounce(function (newVal) {
        this.changeText(newVal)
      }, 300)
    },
    ...mapGetters([
      'saleProducts'
    ])
  },
  mounted () {},
  methods: {
    ...mapActions([
      'changeText',
      'reducePrice'
    ])
  },
  components: {
  }
}
</script>
