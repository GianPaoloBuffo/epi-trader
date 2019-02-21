<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>

<script>
import stocks from '../../data/stocks-data.js';

import Stock from './Stock.vue';

export default {
  data() {
    return {
      stocks: stocks
    };
  },
  components: {
    appStock: Stock,
  },
};
</script>
