<template>
  <div id="pay">
    <div class="wrapper">
      <h4>Pagamento/Cartao de crédito</h4>
      <section>
        <h5>Badeira</h5>
        <div class="col col--1-of-4 master">
          <img src="../assets/img/master.png" alt="">
        </div>
        <div class="col col--1-of-4"></div>
        <div class="col col--1-of-4"></div>
        <div class="col col--1-of-4"></div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pay'
}
</script>

<style lang="scss">
  .master {
    img {
      width: 55%;
    }
  }
</style>
