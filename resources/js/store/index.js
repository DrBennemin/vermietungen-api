import Vue from 'vue'
import Vuex from 'vuex'
import articles from './articles.module'
import orders from './orders.module'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        articles,
        orders,
    },
})

export default store
