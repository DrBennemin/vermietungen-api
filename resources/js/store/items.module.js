export const state = {
    items: [],
};

export const actions = {
    ["item_added"](context, data) {
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
    ["get_items"](state) {
        return state.items;
    },
    ["get_item"](state) {
        return (id) => {
            return state.items.find((item) => item.id === id);
        };
    },
    ["get_available"](state) {
        return state.items.filter((item) => item.available);
    },
    ["get_unavailable"](state) {
        return state.items.filter((item) => !item.available);
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};
