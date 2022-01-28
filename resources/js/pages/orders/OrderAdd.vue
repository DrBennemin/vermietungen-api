<template>
    <div class="container mx-auto py-24">
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
            <label>Gegenstände</label>
            <select class="rounded-lg focus:border-primary focus:ring-primary" v-model="order.article_id" required>
                <option value="">-- bitte auswählen --</option>
                <option class="text-black" v-for="(article, key) in articles" :key="key" :article="article">
                    <div class="flex space-x-4">
                        {{ article.id }}
                        {{ article.title }}
                    </div>
                </option>
            </select>

            <button class="py-2 px-4 rounded-lg hover:bg-secondary bg-primary font-bold text-white" type="submit">
                speichern
            </button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    data: function () {
        return {
            order: {},
            articles: {},
        }
    },
    // computed: {
    //     item: function () {
    //         return this.$store.getters.get_item(this.id)
    //     },
    // },
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
                    this.$router.push({ name: 'Order' })
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
