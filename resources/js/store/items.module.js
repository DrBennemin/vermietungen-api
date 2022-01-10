import Vue from "vue";

export const state = {
    items: [],
};

export const actions = {
    ["item_added"](context, data) {
        context.commit("ADD_ITEM", data);
    },
    ["item_deleted"](context, data) {
        context.commit("DELETE_ITEM", data);
    },
};

export const mutations = {
    ["ADD_ITEM"]: (state, item) => {
        state.items.push(item);
    },
    ["DELETE_ITEM"]: (state, itemId) => {
        let itemIndex = state.items.findIndex((item) => item.id === itemId);
        if (itemIndex === -1) return;
        const tmpItems = state.items.splice(itemIndex, 1);
        Vue.set(state.items, tmpItems);
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
