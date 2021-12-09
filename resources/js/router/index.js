import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import ItemList from "../pages/ItemList.vue";
import ItemDetails from "../pages/ItemDetails.vue";
import ItemForm from "../pages/ItemForm.vue";

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
        path: "/item-form",
        name: "ItemForm",
        component: ItemForm,
    },
    {
        path: "/item/:id",
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
