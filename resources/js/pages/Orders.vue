<template>
    <div class="container mx-auto py-24">
        <div class="bg-white rounded-lg shadow-md mx-4">
            <order-card v-for="(order, key) in orders" :key="key" :order="order" class="border-b-2"></order-card>
        </div>
    </div>
</template>

<script>
import OrderCard from '../components/OrderCard.vue'
export default {
    components: { OrderCard },
    data: function () {
        return {
            orders: {},
        }
    },
    created() {
        axios
            .get('/orders?_sort=id&_order=desc')
            .then((response) => {
                this.orders = response.data
                this.$store.dispatch('orders_updated', this.orders)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    methods: {
        deleteOrders: function () {
            axios.delete('/orders/' + id)
        },
    },
}
</script>
