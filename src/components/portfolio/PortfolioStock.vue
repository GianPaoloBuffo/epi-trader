<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
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
            @click="sellStock"
          >Sell</button>
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
    methods: {
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };

            // TODO: 6 - Let's sell the stock!
            console.log(order);

            this.quantity = 0;
        },
    },
};
</script>
