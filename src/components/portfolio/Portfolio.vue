<template>
  <div>
    <app-portfolio-stock v-for="stock in stocks" :key="stock.id" :stock="stock">
      <div class="panel-heading" slot="heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
        </h3>
      </div>
      <template v-slot="{ insufficient, quantity, clickHandler }">
        <div class="pull-right">
          <button
            class="btn btn-success"
            :disabled="insufficient || quantity <= 0 || !Number.isInteger(quantity)"
            @click="clickHandler"
          >{{ insufficient ? 'Not Enough' : 'Sell' }}</button>
        </div>
      </template>
    </app-portfolio-stock>
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
