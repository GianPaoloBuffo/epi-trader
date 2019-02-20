// TODO: 1 - Import/use vue-resource, and set up resource root

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

import routes from './routes';
import store from './store/store';

Vue.use(VueRouter);

Vue.filter('currency', value => `EC ${value.toLocaleString()}`);

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
