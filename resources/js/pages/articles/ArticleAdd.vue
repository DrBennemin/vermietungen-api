<template>
    <div class="container mx-auto py-24">
        <div class="max-w-5xl m-auto bg-white rounded-lg shadow-xl p-8">
            <form @submit.prevent="addArticle" class="flex flex-col space-y-4">
                <label>Titel</label>
                <input
                    type="text"
                    v-model="article.title"
                    class="rounded-lg focus:border-primary focus:ring-primary"
                    required />
                <label>Beschreibung</label>
                <input
                    type="text"
                    v-model="article.description"
                    class="rounded-lg focus:border-primary focus:ring-primary"
                    required />

                <!-- <div class="flex justify-between">
                    <div class="flex flex-col space-x-4">
                        <label>Verfügbar</label>
                        <div class="flex space-x-4 items-center">
                            <input
                                type="radio"
                                class="text-primary focus:ring-primary"
                                id="yes"
                                :value="true"
                                v-model="article.available"
                                required />
                            <label for="yes">ja</label>
                            <input
                                type="radio"
                                class="text-primary focus:ring-primary"
                                id="no"
                                :value="false"
                                v-model="article.available"
                                required />
                            <label for="no">nein</label>
                        </div>
                    </div>

                    <div v-show="!article.available" class="w-1/2">
                        <label>Rückgabedatum</label>
                        <input class="w-full rounded-lg" type="date" v-model="article.date_return" />
                    </div>
                </div> -->

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
            article: {
                title: '',
                description: '',
                available: true,
            },
        }
    },
    methods: {
        addArticle() {
            axios
                .post('/articles', this.article)
                .then(() => {
                    this.$store.dispatch('article_added', this.article)
                    this.$router.push({ name: 'Articles' })
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
