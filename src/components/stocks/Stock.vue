<template>
  <!-- TODO: 4 - Display individual stock details -->
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          NAME
          <small>(Price: PRICE)</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <!-- TODO: 5 - Create a 'quantity' data property and bind it to the <input> -->
          <input type="number" class="form-control" placeholder="Quantity">
        </div>
        <div class="pull-right">
          <!-- TODO: 7 - Disable the button if the quanity is negative or not an integer -->
          <button class="btn btn-success">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    buyStock() {
      // TODO: 6 - Complete the 'order' object and bind this method to the button's click event
      const order = {
        stockId: null,
        stockPrice: null,
        quantity: this.quantity,
      }

      console.log(order);

      this.quantity = 0;
    },
  },
};
</script>
