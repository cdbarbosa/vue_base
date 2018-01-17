<template>
  <div id="pay">
    <div class="wrapper">
      <h4>Pagamento/Cartao de crédito</h4>
      <section class="creditCard">
        <h5>Bandeira do Cartão</h5>
        <hr style="margin-bottom: 1rem">
        <ul class="master">
          <li><img src="../assets/img/master.png" alt=""></li>
          <li><img src="../assets/img/visa.png" alt=""></li>
          <li><img src="../assets/img/hipercard.png" alt=""></li>
          <li><img src="../assets/img/elo.png" style="margin-top: -1.5rem;"></li>
        </ul>
        <hr>
        <div class="col col--2-of-3 inputsCard">
          <label>Número do Cartão de Crédito</label>
          <input type="text" v-model="cartao" v-mask="'################'" autocomplete="on" placeholder="12345678910111213141516">
          <label for="">Nome </label>
          <input type="text" v-model="nome" placeholder="Fulano de tal" atucomplete="on">
        </div>
        <div class="col col--1-of-3 inputsDados">
          <label for="">Código</label>
          <input type="text" name="" v-model="codigo" v-mask="'###'" autocomplete="on" placeholder="123" class="input">
          <label for="">Data</label>
          <input type="text" name="" v-model="dataVenc" v-mask="'##/##/####'" autocomplete="on" placeholder="01/12/2012" class="input">
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pay',
  data () {
    return {
      cartao: null,
      dataVenc: null,
      codigo: null,
      nome: ''
    }
  }
}
</script>

<style lang="scss">
  .creditCard {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    h5 {
      padding: 1rem ;
      padding-bottom: 0;
      margin-bottom: 0;
      font-size: 20px;
    }

  }
  .master {
    ul {
      display: inline-flex;
    }
    li {
    display: inline-block;
      img {
        width: 40%;
        cursor: pointer;
        margin-top: -1rem;
      }
    }
  }
  .inputsCard {
    width:60%;
    font-size:15px;
    margin-left:15px;
  }
  .inputsDados {
    font-size: 15px;
    margin-left: 15px;
  }
</style>
