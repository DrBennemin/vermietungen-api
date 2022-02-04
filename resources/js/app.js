require('./bootstrap')

import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'
import App from './layouts/App.vue'
import VModal from 'vue-js-modal'

Vue.use(VueRouter)
Vue.use(VModal, { dialog: true })

const app = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
})
