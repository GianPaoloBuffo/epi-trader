import stocksData from '../../data/stocks-data';

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
    initStocks({ commit }) {
        commit('setStocks', stocksData);
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
