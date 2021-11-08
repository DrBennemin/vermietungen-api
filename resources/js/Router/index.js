import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../Pages/Home.vue"),
        name: "Home",
    },
    {
        path: "/about",
        component: () => import("../Pages/About.vue"),
        name: "About",
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
