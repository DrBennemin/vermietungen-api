<template>
    <div class="container mx-auto py-24">
        <div class="max-w-5xl m-auto bg-white rounded-lg shadow-xl p-8">
            <form @submit.prevent="updateOrder" class="flex flex-col space-y-4">
                <div class="flex justify-between">
                    <div class="w-full flex flex-col mr-4">
                        <label>Vorname</label>
                        <input
                            type="text"
                            class="rounded-lg focus:border-primary focus:ring-primary"
                            required
                            v-model="order.first_name" />
                    </div>
                    <div class="w-full flex flex-col ml-4">
                        <label>Nachname</label>
                        <input
                            type="text"
                            class="rounded-lg focus:border-primary focus:ring-primary"
                            required
                            v-model="order.last_name" />
                    </div>
                </div>
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
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            order: {},
        }
    },
    created() {
        axios
            .get('/orders/' + this.id)
            .then((response) => {
                this.order = response.data
            })
            .catch((error) => {
                console.log(error)
            })
    },
    methods: {
        updateOrder() {
            axios
                .put('orders/' + this.id, {
                    first_name: this.order.first_name,
                    last_name: this.order.last_name,
                })
                .then(() => {
                    this.$store.dispatch('order_updated', this.order)
                    this.$router.push({ name: 'Orders' })
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
