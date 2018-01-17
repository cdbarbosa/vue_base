<template lang="html">
  <div id="reservaquarto" class="page">
    <div class="wrapper">
      <div class="login">
        <label for="E-MAIL">E-MAIL</label>
        <input type="text" name="" v-model="email" autocomplete="on" placeholder="example@gmail.com" class="input">
        <label for="SENHA">SENHA</label>
        <input type="text" name="" v-model="senha" autocomplete="on" placeholder="123456789" class="input">
        <router-link :to="{name: 'pagamento'}" tag="button" class="__small">
          LOGIN
          </router-link>
          <span>Esqueceu a senha?</span> <span>Cadastre-se</span>
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
