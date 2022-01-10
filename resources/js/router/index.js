import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import ItemList from "../pages/ItemList.vue";
import ItemDetails from "../pages/ItemDetails.vue";
import ItemAdd from "../pages/ItemAdd.vue";
import ItemEdit from "../pages/ItemEdit.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/item-list",
        name: "ItemList",
        component: ItemList,
    },
    {
        path: "/item-add",
        name: "ItemAdd",
        component: ItemAdd,
    },
    {
        path: "/item-edit/:id",
        name: "ItemEdit",
        props: true,
        component: ItemEdit,
    },
    {
        path: "/items/:id",
        name: "ItemDetails",
        props: true,
        component: ItemDetails,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
