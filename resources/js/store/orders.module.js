import Vue from 'vue'

export const state = {
    orders: [],
}

export const actions = {
    ['order_added'](context, data) {
        context.commit('ADD_ORDER', data)
    },
    ['order_deleted'](context, data) {
        context.commit('DELETE_ORDER', data)
    },
    ['order_updated'](context, data) {
        context.commit('UPDATE_ORDER', data)
    },
    ['orders_updated'](context, data) {
        context.commit('UPDATE_ORDERS', data)
    },
}

export const mutations = {
    ['ADD_ORDER']: (state, order) => {
        state.orders.push(order)
    },
    ['DELETE_ORDER']: (state, orderId) => {
        let orderIndex = state.orders.findIndex((order) => order.id === orderId)
        if (orderIndex === -1) return
        const tmporders = state.orders.splice(orderIndex, 1)
        Vue.set(state.orders, tmpOrders)
    },
    ['UPDATE_ORDERS']: (state, orders) => {
        state.orders = orders
    },
    ['UPDATE_ORDER']: (state, data) => {
        let orderIndex = state.orders.findIndex((order) => order.id === data.id)
        if (orderIndex === -1) return
        const updatedOrder = { ...state.orders[orderIndex], ...data }
        Vue.set(state.orders, orderIndex, updatedorder)
    },
}

export const getters = {
    ['get_orders'](state) {
        return state.orders
    },
    ['get_order'](state) {
        return (id) => {
            return state.orders.find((order) => order.id === id)
        }
    },
}

export default {
    state,
    actions,
    mutations,
    getters,
}
