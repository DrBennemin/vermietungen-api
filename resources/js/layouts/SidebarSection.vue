<template>
    <div class="flex flex-col justify-between border-r bg-white shadow-md space-y-4 pt-24">
        <div>
            <router-link :to="{ name: 'Articles' }">
                <div class="flex justify-between items-center px-6 py-4 border-b-2 cursor-pointer space-x-12">
                    <h2 class="text-lg">Inventar</h2>
                    <div class="bg-primary p-2 text-white text-xs rounded-full">
                        {{ articles.length }}
                    </div>
                </div>
            </router-link>
            <router-link :to="{ name: 'Orders' }">
                <div class="flex justify-between items-center px-6 py-4 border-b-2 cursor-pointer space-x-12">
                    <h2 class="text-lg">Vermierungen</h2>
                    <div class="bg-primary p-2 text-white text-xs rounded-full">
                        {{ orders.length }}
                    </div>
                </div>
            </router-link>
        </div>

        <div class="mt-12 border-t-2">
            <img
                src="https://ca.slack-edge.com/TTHG21AH3-U017CGPPY6L-5aaa3aab049a-512"
                alt="user"
                class="w-12 h-12 my-4 ml-6 rounded-full border-4 border-tertiary cursor-pointer" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articles: {},
            orders: {},
        }
    },
    computed: {
        // items() {
        //     return this.$store.getters.get_items
        // },
        // orders() {
        //     return this.$store.getters.get_orders
        // },
    },
    created() {
        // if (this.items && this.orders == null) {
        this.loadArticles()
        this.loadOrders()
        // } else {
        // }
    },
    methods: {
        loadArticles: function () {
            axios
                .get('/articles')
                .then((response) => {
                    this.articles = response.data
                    this.$store.dispatch('articles_loaded', this.articles)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        loadOrders: function () {
            axios
                .get('/orders')
                .then((response) => {
                    this.orders = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
