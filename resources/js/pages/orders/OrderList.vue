<template>
    <div class="container mx-auto py-24">
        <div class="bg-white rounded-lg shadow-md mx-4">
            <order-item v-for="(order, key) in orders" :key="key" :order="order" class="border-b-2"></order-item>
        </div>
    </div>
</template>

<script>
import OrderItem from '@/components/orders/OrderItem.vue'
export default {
    components: { OrderItem },
    data() {
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
        deleteOrders() {
            axios.delete('/orders/' + id)
        },
    },
}
</script>
