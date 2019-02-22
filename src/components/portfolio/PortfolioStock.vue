<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <slot name="heading"/>
      <div class="panel-body">
        <div class="pull-left">
          <input
            v-model.number="quantity"
            type="number"
            class="form-control"
            placeholder="Quantity"
            :class="{ danger: insufficientQuantity }"
          >
        </div>
        <slot :quantity="quantity" :insufficient="insufficientQuantity" :click-handler="sellStock" />
      </div>
    </div>
  </div>
</template>

<script>
import stockMixin from '../mixins/stock-mixin';

export default {
    mixins: [stockMixin],
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity;
        },
    },
    methods: {
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };

            this.$store.dispatch('sellStock', order);

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
