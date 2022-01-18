import Vue from 'vue'
import Vuex from 'vuex'
import items from './items.module'
import orders from './orders.module'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        items,
        orders,
    },
})

export default store
