import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../pages/Home.vue"),
        name: "Home",
    },
    {
        path: "/storage",
        component: () => import("../pages/Storage.vue"),
        name: "Storage",
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
