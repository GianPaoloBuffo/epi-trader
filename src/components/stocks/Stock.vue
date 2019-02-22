<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <slot name="heading"/>
      <div class="panel-body">
        <div class="pull-left">
          <input
            v-model.number="quantity"
            type="number"
            class="form-control"
            placeholder="Quantity"
            :class="{ danger : insufficientFunds }"
          >
        </div>
        <slot :quantity="quantity" :insufficient="insufficientFunds" :click-handler="buyStock" />
      </div>
    </div>
  </div>
</template>

<script>
import stockMixin from '../mixins/stock-mixin';

export default {
    mixins: [stockMixin],
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds;
        },
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };

            this.$store.dispatch('buyStock', order);

            this.quantity = 0;
        },
    },
};
</script>

<style scoped>
  .danger {
    border: 2px solid red;
  }
</style>
