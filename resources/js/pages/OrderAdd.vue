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
            <select class="rounded-lg focus:border-primary focus:ring-primary" v-model="order.item_id" required>
                <option value="">-- bitte auswählen --</option>
                <option class="text-black" v-for="(item, key) in items" :key="key" :item="item">
                    <div class="flex space-x-4">
                        {{ item.id }}
                        {{ item.title }}
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
    props: ['id'],
    data: function () {
        return {
            order: {},
            items: {},
        }
    },
    // computed: {
    //     item: function () {
    //         return this.$store.getters.get_item(this.id)
    //     },
    // },
    created() {
        axios
            .get('/items')
            .then((response) => {
                this.items = response.data
                this.$store.dispatch('items_updated', this.items)
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
                    this.$router.push({ name: 'Home' })
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
