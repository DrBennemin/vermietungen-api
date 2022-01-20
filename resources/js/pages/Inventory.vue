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
            <item-card v-for="(item, key) in items" :key="key" :item="item" class="border-b-2"></item-card>
        </div>
    </div>
</template>

<script>
import ItemCard from '../components/ItemCard.vue'

export default {
    components: { ItemCard },
    data: function () {
        return {
            items: {},
        }
    },
    created() {
        axios
            .get('/items?_sort=id&_order=desc')
            .then((response) => {
                this.items = response.data
                this.$store.dispatch('items_updated', this.items)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    methods: {
        showAvailable: function () {
            this.items = this.$store.getters.get_available
        },
        showUnavailable: function () {
            this.items = this.$store.getters.get_unavailable
        },
        showAll: function () {
            this.items = this.$store.getters.get_items
        },
        deleteItems: function () {
            axios.delete('/items/' + id)
        },
    },
}
</script>
