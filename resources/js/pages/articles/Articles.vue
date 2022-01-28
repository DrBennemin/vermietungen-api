<template>
    <div class="container mx-auto py-24">
        <div class="flex space-x-4 mx-4 py-4">
            <button
                class="py-1 px-3 font-bold rounded-lg text-white bg-primary hover:bg-secondary cursor-pointer"
                @click="showAll">
                Alle Gegenstände
            </button>
            <button
                class="py-1 px-3 font-bold rounded-lg text-white bg-primary hover:bg-secondary cursor-pointer"
                @click="showAvailable">
                Verfügbare Gegenstände
            </button>
            <button
                class="py-1 px-3 font-bold rounded-lg text-white bg-primary hover:bg-secondary cursor-pointer"
                @click="showUnavailable">
                Verliehene Gegenstände
            </button>
        </div>
        <div class="bg-white rounded-lg shadow-md mx-4">
            <article-card
                v-for="(article, key) in articles"
                :key="key"
                :article="article"
                class="border-b-2"></article-card>
        </div>
    </div>
</template>

<script>
import ArticleCard from '@/components/articles/ArticleCard.vue'

export default {
    components: { ArticleCard },
    data() {
        return {
            articles: {},
        }
    },
    created() {
        axios
            .get('/articles?_sort=id&_order=desc')
            .then((response) => {
                this.articles = response.data
                this.$store.dispatch('articles_updated', this.articles)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    methods: {
        showAvailable() {
            this.articles = this.$store.getters.get_available
        },
        showUnavailable() {
            this.articles = this.$store.getters.get_unavailable
        },
        showAll() {
            this.articles = this.$store.getters.get_articles
        },
        deleteArticles() {
            axios.delete('/articles/' + id)
        },
    },
}
</script>
