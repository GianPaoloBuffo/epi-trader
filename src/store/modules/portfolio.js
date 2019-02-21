const state = {
    funds: 10000,
    portfolioStocks: [],
};

const mutations = {
    buyStock(state, { stockId, quantity, stockPrice }) {
        const portfolioStock = state.portfolioStocks.find(stock => stock.id === stockId);

        if (portfolioStock) {
            portfolioStock.quantity += quantity;
        } else {
            state.portfolioStocks.push({
                id: stockId,
                quantity,
            });
        }

        state.funds -= stockPrice * quantity;
    },
    sellStock(state, { stockId, quantity, stockPrice }) {
        const portfolioStock = state.portfolioStocks.find(stock => stock.id === stockId);

        if (portfolioStock.quantity > quantity) {
            portfolioStock.quantity -= quantity;
        } else {
            state.portfolioStocks.splice(state.portfolioStocks.indexOf(portfolioStock), 1);
        }

        state.funds += stockPrice * quantity;
    },
    setPortfolio(state, portfolio) {
        state.funds = portfolio.funds;
        state.portfolioStocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
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
        return state.portfolioStocks.map((portfolioStock) => {
            const stock = getters.stocks.find(el => el.id === portfolioStock.id);

            return {
                id: portfolioStock.id,
                quantity: portfolioStock.quantity,
                name: stock.name,
                price: stock.price,
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
