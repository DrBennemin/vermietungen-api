<template>
    <div class="container mx-auto py-24">
        <div class="max-w-5xl m-auto bg-white rounded-lg shadow-xl p-8">
            <form @submit.prevent="addOrder" class="flex flex-col space-y-4">
                <label>Vorname</label>
                <input
                    type="text"
                    v-model="order.first_name"
                    class="rounded-lg focus:border-primary focus:ring-primary"
                    required />
                <label>Nachname</label>
                <input
                    type="text"
                    v-model="order.last_name"
                    class="rounded-lg focus:border-primary focus:ring-primary"
                    required />
                <div class="flex py-4 space-x-4 items-center">
                    <div class="flex flex-col w-1/2">
                        <label>Gegenstände</label>
                        <select
                            class="rounded-lg focus:border-primary focus:ring-primary"
                            v-model="order.article_id"
                            required>
                            <option value="">-- bitte auswählen --</option>
                            <option class="text-black" v-for="(article, key) in articles" :key="key" :article="article">
                                <div class="flex space-x-4">
                                    {{ article.id }}
                                    {{ article.title }}
                                </div>
                            </option>
                        </select>
                    </div>
                    <div class="w-1/2">
                        <label>Rückgabedatum</label>
                        <input class="w-full rounded-lg" type="date" v-model="order.date_return" />
                    </div>
                </div>
                <button class="py-2 px-4 rounded-lg hover:bg-secondary bg-primary font-bold text-white" type="submit">
                    speichern
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            order: {},
            articles: {},
        }
    },
    created() {
        axios
            .get('/articles')
            .then((response) => {
                this.articles = response.data
                this.$store.dispatch('articles_updated', this.articles)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    methods: {
        addOrder() {
            axios
                .post('/orders', this.order)
                .then(() => {
                    this.$store.dispatch('order_added', this.order)
                    this.$router.push({ name: 'Orders' })
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
