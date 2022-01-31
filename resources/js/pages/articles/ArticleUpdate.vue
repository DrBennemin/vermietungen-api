<template>
    <div class="container mx-auto py-24">
        <div class="max-w-5xl m-auto bg-white rounded-lg shadow-xl p-8">
            <form @submit.prevent="updateArticle" class="flex flex-col space-y-4">
                <label>Titel</label>
                <input
                    type="text"
                    class="rounded-lg focus:border-primary focus:ring-primary"
                    required
                    v-model="article.title" />
                <label>Beschreibung</label>
                <input
                    type="text"
                    class="rounded-lg focus:border-primary focus:ring-primary"
                    required
                    v-model="article.description" />
                <div class="flex justify-between">
                    <div class="flex flex-col space-x-4">
                        <label>Verfügbar</label>
                        <div class="flex space-x-4 items-center">
                            <input
                                type="radio"
                                class="text-primary focus:ring-primary"
                                :value="true"
                                v-model="article.available" />
                            <label for="yes">ja</label>
                            <input
                                type="radio"
                                class="text-primary focus:ring-primary"
                                :value="false"
                                v-model="article.available" />
                            <label for="no">nein</label>
                        </div>
                    </div>

                    <div class="w-1/2" v-if="!article.available">
                        <label>Rückgabedatum</label>
                        <input class="w-full rounded-lg" type="date" v-model="article.date_return" />
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
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    data: function () {
        return {
            article: {},
        }
    },
    // computed: {
    //     article: function () {
    //         return this.$store.getters.get_article(this.id);
    //     },
    // },
    created() {
        axios
            .get('/articles/' + this.id)
            .then((response) => {
                this.article = response.data
            })
            .catch((error) => {
                console.log(error)
            })
    },
    methods: {
        updateArticle() {
            axios
                .put('articles/' + this.id, {
                    title: this.article.title,
                    description: this.article.description,
                    available: this.article.available,
                    date_return: this.article.date_return,
                })
                .then(() => {
                    this.$store.dispatch('article_updated', this.article)
                    this.$router.push({ name: 'Articles' })
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
