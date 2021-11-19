import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Storage from "../pages/Storage.vue";
import Item from "../pages/Item.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/storage",
        name: "Storage",
        component: Storage,
    },
    {
        path: "/item/:id",
        name: "Item",
        component: Item,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
