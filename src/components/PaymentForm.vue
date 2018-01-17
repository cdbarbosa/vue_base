<template>
  <div id="payment">
    <div class="wrapper">
      <div class="content">
        <section>
          <div class="title">
            <h2>reserva</h2>
          </div>
          <div class="list-content">
            <ul>
              <li @click="target = 'regra'">1</li>
              <li @click="target = 'hospedes'">2</li>
              <li @click="target = 'pay'">3</li>
              <li><p>pronto!</p></li>
            </ul>
          </div>
        </section>
        <component :is="componentID()"></component>
      </div>

    </div>
  </div>
</template>

<script>
import regra from './Regras.vue'
import hospedes from './Hospedes.vue'
import pay from './Pay.vue'
export default {
  name: 'payment',
  data () {
    return {
      target: ' '
    }
  },
  component: {
    regra,
    hospedes,
    pay
  },
  methods: {
    componentID () {
      if (this.target === 'regra') {
        console.log(this.target)
        return 'regra'
      }
      // else if (this.target === 'hospedes') return 'hospedes'
      // else if (this.target === 'pay') return 'pay'
    }
  }
}
</script>

<style lang="scss">
  #payment {
    min-height: 100vh;
  }
  .title {
    display: inline-block;
    margin-top: 2rem;
    h2 {
      text-transform: uppercase;
    }
  }
  .list-content {
    float: right;
    ul {
      float: right;
      font-size: 3rem;
      margin-top: 0;
      li {
        display: inline-block;
        text-decoration: none;

        p {
          border: 1px solid;
          margin-bottom: 0;
          text-align: center;
          text-transform: uppercase;
          border-radius: 10px;
        }
      }
      li:nth-child(1){
        margin-right: 8rem;
        border: 1px solid;
        border-radius: 35px;
        text-align:center;
        width: 50px;
        cursor: pointer;
      }
      li:nth-child(2){
        margin-right: 8rem;
        border-radius: 35px;
        border: 1px solid;
        text-align:center;
        width: 50px;
        cursor: pointer;
      }
      li:nth-child(3){
        margin-right: 8rem;
        border: 1px solid;
        border-radius: 35px;
        text-align:center;
        width: 50px;
        cursor: pointer;
      }
      li:nth-child(4){
        margin-right: 0;
      }
    }
  }
</style>

