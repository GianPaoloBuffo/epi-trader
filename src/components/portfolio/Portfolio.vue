<template>
  <div>
    <app-portfolio-stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PortfolioStock from './PortfolioStock.vue';

export default {
    components: {
        appPortfolioStock: PortfolioStock,
    },
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio',
        }),
    },
};
</script>
