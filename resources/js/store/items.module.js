export const state = {
    items: [],
};

export const actions = {
    ["add_item"](context, data) {
        context.commit("ADD_ITEM", data);
    },
};

export const mutations = {
    ["ADD_ITEM"]: (state, item) => {
        state.items.push(item);
    },
    ["UPDATE_ITEMS"]: (state, items) => {
        state.items = items;
    },
};

export const getters = {
    ["items"](state) {
        return state.items;
    },
    ["item"](state) {
        return (id) => {
            return state.items.find((item) => item.id === id);
        };
    },
    ["in_stock"](state) {
        return state.items.filter((item) => item.in_stock);
    },
    ["out_of_stock"](state) {
        return state.items.filter((item) => item.in_stock === false);
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};
