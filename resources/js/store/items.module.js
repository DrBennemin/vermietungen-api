export const state = {
    items: [],
};

export const actions = {
    // ["item_added"](context, item) {
    //     context.commit("ADD_ITEM", item);
    // },
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
    ["inStock"](state) {
        return state.items.filter((item) => item.in_stock);
    },
    ["outOfStock"](state) {
        return state.items.filter((item) => item.in_stock === false);
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};
