require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";
import router from "../js/Router/index";
import App from "../js/App.vue";

Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router,
    components: { App },
});
