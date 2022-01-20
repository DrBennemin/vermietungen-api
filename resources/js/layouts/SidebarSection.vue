<template>
    <div class="flex flex-col justify-between border-r bg-white shadow-md space-y-4 pt-24">
        <div>
            <router-link :to="{ name: 'Inventory' }">
                <div
                    class="flex justify-between px-6 py-4 border-b-2 cursor-pointer space-x-12"
                    :class="{ 'menu-sidebar-active': isActive }"
                    @click="
                        showAll()
                        updateActiveState()
                    ">
                    <h2 class="text-lg">Inventar</h2>
                    <p class="bg-primary py-1 px-4 text-white font-bold rounded-full">
                        {{ stock }}
                    </p>
                </div>
            </router-link>
            <router-link :to="{ name: 'Orders' }">
                <div
                    class="flex justify-between px-6 py-4 border-b-2 cursor-pointer space-x-12"
                    :class="{ 'menu-sidebar-active': isActive }"
                    @click="
                        showAll()
                        updateActiveState()
                    ">
                    <h2 class="text-lg">Vorgänge</h2>
                    <p class="bg-primary py-1 px-4 text-white font-bold rounded-full">
                        {{ orders }}
                    </p>
                </div>
            </router-link>
        </div>

        <div class="ml-6">
            <img src="/img/user.svg" alt="user" class="w-6 m-6" />
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            items: {},
            isActive: false,
        }
    },
    computed: {
        inStock: function () {
            return this.$store.getters.get_available.length
        },
        outOfStock: function () {
            return this.$store.getters.get_unavailable.length
        },
        stock: function () {
            return this.$store.getters.get_items.length
        },
        orders: function () {
            return this.$store.getters.get_orders.length
        },
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
        updateActiveState: function () {
            this.isActive = !this.isActive
        },
    },
}
</script>
