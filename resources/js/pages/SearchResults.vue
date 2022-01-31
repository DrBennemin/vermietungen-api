<template>
    <div class="container mx-auto py-24">
        <div class="m-4">
            <h2 class="text-2xl font-bold">Suchergebnisse</h2>
        </div>
        <div v-if="articles.length" class="bg-white rounded-lg shadow-md mx-4">
            <article-item
                v-for="(article, key) in articles"
                :key="key"
                :article="article"
                class="border-b-2"></article-item>
        </div>
        <!-- <div v-if="orders.length" class="bg-white rounded-lg shadow-md mx-4">
            <article-card v-for="(order, key) in orders" :key="key" :order="order" class="border-b-2"></article-card>
        </div>
        <div v-else>Deine Suchanfrage hat keine Ergebnisse geliefert...</div> -->
    </div>
</template>

<script>
import ArticleItem from '@/components/articles/ArticleItem.vue'

export default {
    props: {
        searchTerm: {
            type: String,
            required: true,
        },
    },
    components: { ArticleItem },
    data() {
        return {
            articles: {},
            // orders: {},
        }
    },
    created() {
        axios
            .get('/articles?q=' + this.$route.params.searchTerm)
            .then((response) => {
                this.articles = response.data
                this.$store.dispatch('articles_updated', this.articles)
            })
            .catch((error) => {
                console.log(error)
            })
        // .get('/orders?q=' + this.$route.params.searchTerm)
        // .then((response) => {
        //     this.orders = response.data
        //     this.$store.dispatch('orders_updated', this.orders)
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
    },
}
</script>
