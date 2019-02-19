const state = {
    funds: 10000,
    stocks: [],
};

const mutations = {
    buyStock(state, { stockId, quantity, stockPrice }) {
        const stock = state.stocks.find(stock => stock.id === stockId);

        if (stock) {
            stock.quantity += 1;
        } else {
            state.stocks.push({
                id: stockId,
                quantity,
            });
        }

        state.funds -= stockPrice * quantity;
    },
    sellStock(state, { stockId, quantity, stockPrice }) {
        const stock = state.stocks.find(stock => stock.id === stockId);

        if (stock.quantity > quantity) {
            stock.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(stock), 1);
        }

        state.funds += stockPrice * quantity;
    },
    setPortfolio(state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    },
};

const actions = {
    sellStock({ commit }, order) {
        commit('sellStock', order);
    },
};

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map((stock) => {
            const record = getters.stocks.find(el => el.id === stock.id);

            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price,
            };
        });
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
