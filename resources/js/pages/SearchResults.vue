<template>
    <div class="container mx-auto py-24">
        <form @submit.prevent="searchQuiry">
            <input type="text" v-model="quiry" />
        </form>
        <div>
            {{ quiry }}
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
    data() {
        return {
            items: {},
            quiry: '',
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
        searchQuiry: function () {
            axios
                .get('/items?q=' + this.quiry)
                .then((response) => {
                    this.items = response.data
                    this.$store.dispatch('items_updated', this.items)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
