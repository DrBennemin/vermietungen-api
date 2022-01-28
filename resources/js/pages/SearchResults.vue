<template>
    <div class="container mx-auto py-24">
        <div>
            <h2>Suchergebnisse</h2>
        </div>
        <div v-if="items.length" class="bg-white rounded-lg shadow-md mx-4">
            <item-card v-for="(item, key) in items" :key="key" :item="item" class="border-b-2"></item-card>
        </div>
        <!-- <div v-if="orders.length" class="bg-white rounded-lg shadow-md mx-4">
            <item-card v-for="(order, key) in orders" :key="key" :order="order" class="border-b-2"></item-card>
        </div>
        <div v-else>Deine Suchanfrage hat keine Ergebnisse geliefert...</div> -->
    </div>
</template>

<script>
import ItemCard from '@/components/items/ItemCard.vue'

export default {
    props: {
        searchTerm: {
            type: String,
            required: true,
        },
    },
    components: { ItemCard },
    data() {
        return {
            items: {},
            // orders: {},
        }
    },
    created() {
        axios
            .get('/items?q=' + this.$route.params.searchTerm)
            .then((response) => {
                this.items = response.data
                this.$store.dispatch('items_updated', this.items)
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
