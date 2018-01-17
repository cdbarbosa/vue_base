<template lang="html">
  <div id="reservation">
    <div class="wrapper">
      <div class="detailsRoom" :style="{background: `url(/static/img/5.jpg) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'top'
    }">
        <div class="content">
          <h1>Quarto </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
      </div>
      <div class="col">
        <div class="col col--1-of-2 coluna_details">
          </div>
          <!-- <div class="col col--1-of-2 coluns_price">
            <div class="list">
              <h4>Check-in: ##/##/####</h4>
              <h4>Check-out: ##/##/####</h4>
              <h4>Preço: R$###,##</h4>
            </div>
          </div> -->
      </div>
      <!-- <div class="buttons_reserve">
        <router-link :to=" {name: 'cadastro'}">
          <button type="button" name="button">RESERVA</button>
        </router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'reservation'
}
</script>
