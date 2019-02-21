import stocksData from '../../data/stocks-data';

const state = {
    stocks: [],
};

const mutations = {
    setStocks(state, stocks) {
        state.stocks = stocks;
    },
};

const actions = {
    initStocks({ commit }) {
        commit('setStocks', stocksData);
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
