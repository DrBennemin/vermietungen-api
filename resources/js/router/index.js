import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import ArticleList from '../pages/articles/ArticleList.vue'
import ArticleDetails from '../pages/articles/ArticleDetails.vue'
import ArticleAdd from '../pages/articles/ArticleAdd.vue'
import ArticleUpdate from '../pages/articles/ArticleUpdate.vue'
import OrderAdd from '../pages/orders/OrderAdd.vue'
import OrderList from '../pages/orders/OrderList.vue'
import OrderDetails from '../pages/orders/OrderDetails.vue'
import OrderUpdate from '../pages/orders/OrderUpdate.vue'
import SearchResults from '../pages/SearchResults.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/articles',
        name: 'Articles',
        component: ArticleList,
    },
    {
        path: '/article-add',
        name: 'ArticleAdd',
        component: ArticleAdd,
    },
    {
        path: '/articles/:id/update',
        name: 'ArticleUpdate',
        props: true,
        component: ArticleUpdate,
    },
    {
        path: '/articles/:id',
        name: 'ArticleDetails',
        props: true,
        component: ArticleDetails,
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
        component: OrderList,
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
