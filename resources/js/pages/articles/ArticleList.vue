<template>
    <div class="container mx-auto py-24">
        <div class="flex items-center space-x-4 mx-4 py-4">
            <img src="/img/filter.svg" alt="filter" class="w-4 h-4" />
            <div
                class="
                    flex
                    items-center
                    space-x-2
                    border border-primary
                    hover:border-secondary
                    text-primary
                    hover:text-secondary
                    rounded-lg
                    px-3
                    py-1
                ">
                <div class="rounded-full bg-tertiary w-4 h-4"></div>
                <button class="font-bold cursor-pointer" @click="showAvailableArticles">Verfügbare Artikel</button>
            </div>
            <div
                class="
                    flex
                    items-center
                    space-x-2
                    border border-primary
                    hover:border-secondary
                    text-primary
                    hover:text-secondary
                    rounded-lg
                    px-3
                    py-1
                ">
                <div class="rounded-full bg-primary w-4 h-4"></div>
                <button class="font-bold cursor-pointer" @click="showUnavailableArticles">Verliehene Artikel</button>
            </div>
            <div
                class="
                    flex
                    items-center
                    space-x-2
                    border border-primary
                    hover:border-secondary
                    text-primary
                    hover:text-secondary
                    rounded-lg
                    px-3
                    py-1
                ">
                <img src="/img/close-primary.svg" class="w-4 h-4" alt="close-filter" />
                <button class="font-bold cursor-pointer" @click="showAllArticles">Filter zurücksetzen</button>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-md mx-4">
            <article-item
                v-for="(article, key) in articles"
                :key="key"
                :article="article"
                class="border-b-2"></article-item>
        </div>
    </div>
</template>

<script>
import ArticleItem from '@/components/articles/ArticleItem.vue'

export default {
    components: { ArticleItem },
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
        showAvailableArticles() {
            this.articles = this.$store.getters.get_available
        },
        showUnavailableArticles() {
            this.articles = this.$store.getters.get_unavailable
        },
        showAllArticles() {
            this.articles = this.$store.getters.get_articles
        },
        deleteArticles() {
            axios.delete('/articles/' + id)
        },
    },
}
</script>
