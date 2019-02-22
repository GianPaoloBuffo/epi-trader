<template>
  <div class="container">
    <app-header/>
    <div class="row">
      <div class="col-xs-12">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
    components: {
        appHeader: Header,
    },
    created() {
        this.$store.dispatch('initStocks');
    },
};
</script>

<style>
body {
  padding: 30px;
  background-color: rgba(77, 186, 135, 0.1);
}
</style>
