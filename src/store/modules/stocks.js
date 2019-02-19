import stocks from '../../data/stocks';

const state = {
    stocks: [],
};

const mutations = {
    setStocks(state, stocks) {
        state.stocks = stocks;
    },
    rndStocks(state) {
        state.stocks.forEach((stock) => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    },
};

const actions = {
    buyStock({ commit }, order) {
        commit('buyStock', order);
    },
    initStocks({ commit }) {
        commit('setStocks', stocks);
    },
    randomiseStocks({ commit }) {
        commit('rndStocks');
    },
};

const getters = {
    stocks(state) {
        return state.stocks;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
