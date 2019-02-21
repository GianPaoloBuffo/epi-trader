import Vue from 'vue';
import Vuex from 'vuex';

// TODO: 4 - Add portfolio module
import stocks from './modules/stocks';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks,
    },
});
