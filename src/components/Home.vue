<template>
  <div>
    <h1>Welcome to EPI-Trader!</h1>
    <hr>
    <h6>You may Save &amp; Load your data</h6>
    <h6>Click on 'End Day' to begin a new day!</h6>
    <hr>
    <p>Your funds : {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
    },
};
</script>
