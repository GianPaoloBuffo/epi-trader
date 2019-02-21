const state = {
    funds: 10000,
    portfolioStocks: [],
};

const mutations = {
    buyStock(state, { stockId, quantity, stockPrice }) {
        // TODO: 1 - Find stock, update its quantity, update portfolio funds
    },
    sellStock(state, { stockId, quantity, stockPrice }) {
        // TODO: 2 - Find stock, update its quantity, update portfolio funds
    },
};

const actions = {
    buyStock({ commit }, order) {
        commit('buyStock', order);
    },
    sellStock({ commit }, order) {
        commit('sellStock', order);
    },
};

const getters = {
    stockPortfolio(state, getters) {
        // TODO: 3 - For each portfolio stock, find the related market stock and merge the 2 to create a stock portfolio
        // in the form { id, quantity, name, price }
    },
    funds(state) {
        return state.funds;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
