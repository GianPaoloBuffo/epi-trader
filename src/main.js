import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

import routes from './routes';
import store from './store/store';

Vue.use(VueRouter);

// TODO: 3 - Create a filter to format funds as a currency

const router = new VueRouter({
    mode: 'history',
    routes,
});

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
