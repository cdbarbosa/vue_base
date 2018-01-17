<template lang="html">
  <div id="reservaquarto">
    <div class="wrapper">
      <div class="col col_area">
        <div class="col col--1-of-2 col_cadastro">
          <div class="login">
            <h4>Já é cadastrado?</h4>
            <label for="E-MAIL">E-MAIL</label>
            <input type="text" name="" v-model="email" v-mask="'#######@#######.com'" autocomplete="on" placeholder="example@gmail.com" class="input">
            <label for="SENHA">SENHA</label>
            <input type="text" name="" v-model="senha" v-mask="'#########'" autocomplete="on" placeholder="123456789" class="input">
            <router-link :to="{name: 'pagamento'}">
              <button type="button" name="button">LOGIN</button>
            </router-link>
          </div>
        </div>
        <div class="col col--1-of-2 col_login">
          <div class="cadastro">
            <h4>Não é cadastrado?</h4>
            <h5>Cadastre-se para fazer a reserva</h5>
            <button type="button" name="button">CADASTRAR</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reservaquarto',
  data () {
    return {
      email: '',
      senha: ''
    }
  }
}
</script>
