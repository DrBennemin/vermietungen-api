<template>
    <div class="container mx-auto py-24">
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
        deleteItems: function () {
            axios.delete('/items/' + id)
        },
    },
}
</script>
