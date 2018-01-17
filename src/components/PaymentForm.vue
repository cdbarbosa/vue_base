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
              <li @click="target = 'rule'">1</li>
              <li @click="target = 'guest'">2</li>
              <li @click="target = 'pay'">3</li>
              <li><p>pronto!</p></li>
            </ul>
          </div>
        </section>
      </div>
      <div class="page">
        <div class="col col--1-of-2">
          <component :is="target"></component>
        </div>
        <div class="col col--1-of-2">
          <div class="detailsBox">
            <h4>Room</h4>
            <h5>check-in: ##/##/####</h5>
            <h5>check-out: ##/##/####</h5>
            <h5 v-if="target == 'pay'">Hospedes: x pessoas</h5>
            <h5>Total: R$ 000,00</h5>
            <button v-if="target == 'pay'" type="button" class="finalizar">Finalizar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rule from './Regras'
import guest from './Hospedes'
import pay from './Pay'
export default {
  name: 'payment',
  data () {
    return {
      target: 'rule'
    }
  },
  components: {
    rule,
    guest,
    pay
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
      font-size: 2rem;
      margin-top: 2rem;
      li {
        display: inline-block;
        text-decoration: none;

        p {
          border: 1px solid;
          margin-bottom: 0;
          text-align: center;
          text-transform: uppercase;
          border-radius: 10px;
          margin: 0 10px 0 10px;
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
        margin-right: 4rem;
      }
    }
  }
  .detailsBox {
    float: right;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 45%;
    h4 {
      text-align:center;
    }
    h5 {
      text-transform:uppercase;
    }
    h5:nth-child(2){
      margin-left:1rem;
    }
    h5:nth-child(3){
      margin-left:1rem;

    }
    h5:nth-child(4){
      margin-left:1rem;

    }
    h5:nth-child(5) {
      text-align: center;
      margin-top: 2rem;

    }
  }
  .finalizar {
    margin-left: 4rem;
    margin-bottom: 2rem;
    background-color: blue;
  }
</style>

