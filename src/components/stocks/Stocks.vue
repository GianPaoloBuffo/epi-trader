<template>
  <div>
    <!-- TODO: 1 - Use a named slot to specify how the stock heading should be rendered, from here -->
    <!-- TODO: 2 - Use scoped slots to specify how the button should be rendered, from here -->
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
  components: {
    appStock: Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>
