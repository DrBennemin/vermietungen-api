import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import ItemDetails from '../pages/ItemDetails.vue'
import ItemAdd from '../pages/ItemAdd.vue'
import ItemUpdate from '../pages/ItemUpdate.vue'
import OrderAdd from '../pages/OrderAdd.vue'
import SearchResults from '../pages/SearchResults.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
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
        path: '/search',
        name: 'SearchResults',
        props: true,
        component: SearchResults,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
