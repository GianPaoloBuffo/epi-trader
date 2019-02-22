<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            v-model.number="quantity"
            type="number"
            class="form-control"
            placeholder="Quantity"
          >
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            :disabled="quantity <= 0 || !Number.isInteger(quantity)"
            @click="buyStock"
          >Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        stock: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            quantity: 0,
        };
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insufficientFunds() {
            // TODO: 2 - If there are insufficient funds:
            // 1. Disable the button
            // 2. Update the button text
            // 3. Add a red border to the input
            return false;
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
