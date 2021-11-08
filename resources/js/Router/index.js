import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../Pages/Home.vue"),
        name: "Home",
    },
    {
        path: "/storage",
        component: () => import("../Pages/Storage.vue"),
        name: "Storage",
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
