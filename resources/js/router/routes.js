const routes = [
    {
        path: "/",
        component: () => import("../views/Home.vue"),
        name: "Home",
    },
    {
        path: "/about",
        component: () => import("../views/About.vue"),
        name: "About",
    },
];

export default routes;
