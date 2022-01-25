import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Inventory from '../pages/Inventory.vue'
import ItemDetails from '../pages/ItemDetails.vue'
import ItemAdd from '../pages/ItemAdd.vue'
import ItemUpdate from '../pages/ItemUpdate.vue'
import OrderAdd from '../pages/OrderAdd.vue'
import Orders from '../pages/Orders.vue'
import OrderDetails from '../pages/OrderDetails.vue'
import OrderUpdate from '../pages/OrderUpdate.vue'
import SearchResults from '../pages/SearchResults.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/inventory',
        name: 'Inventory',
        component: Inventory,
    },
    {
        path: '/item-add',
        name: 'ItemAdd',
        component: ItemAdd,
    },
    {
        path: '/items/:id/update',
        name: 'ItemUpdate',
        props: true,
        component: ItemUpdate,
    },
    {
        path: '/items/:id',
        name: 'ItemDetails',
        props: true,
        component: ItemDetails,
    },
    {
        path: '/order-add',
        name: 'OrderAdd',
        props: true,
        component: OrderAdd,
    },
    {
        path: '/orders',
        name: 'Orders',
        props: true,
        component: Orders,
    },
    {
        path: '/orders/:id',
        name: 'OrderDetails',
        props: true,
        component: OrderDetails,
    },
    {
        path: '/orders/:id/update',
        name: 'OrderUpdate',
        props: true,
        component: OrderUpdate,
    },
    {
        path: '/search',
        name: 'SearchResults',
        props: true,
        component: SearchResults,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active',
})

export default router
