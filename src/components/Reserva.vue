<template lang="html">
  <div id="reserva" class="">
    <div class="wrapper">
      <div class="content">
        <div class="col col--1-of-2" style="display: inline-block; position: fixed;">
          <h1>Hotel 'item'</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="col col--1-of-2" style="float: right; padding-left: 4rem; padding-top: 4rem">
          <div class="col col--1-of-2" v-for="i in items" style="  border-radius: 0.4rem;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
            <router-link :to="{ name: 'quarto'}">
              <h4 style="cursor: pointer; color: black">Room {{ i }}</h4>
            </router-link>
            <p>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reserva',
  data () {
    return {
      items: 10
    }
  }
}
</script>

<style lang="css">
</style>
