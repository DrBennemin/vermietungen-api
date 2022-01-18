<template>
    <div class="flex flex-col justify-between border-r bg-white shadow-md space-y-4 pt-24">
        <div>
            <div class="flex justify-between py-2 px-4 cursor-pointer" @click="showAvailable">
                <h2 class="font-bold text-lg text-gray-500">Gegenstände auf Lager</h2>
                <p class="bg-white w-8 h-8 rounded-full text-gray-500">
                    {{ inStock }}
                </p>
            </div>
            <div class="flex justify-between py-2 px-4 cursor-pointer" @click="showUnavailable">
                <h2 class="font-bold text-lg text-gray-500">Gegenstände verliehen</h2>
                <p class="bg-white w-8 h-8 rounded-full text-gray-500">
                    {{ outOfStock }}
                </p>
            </div>
            <div class="flex justify-between py-2 px-4 cursor-pointer" @click="showAll">
                <h2 class="font-bold text-lg text-gray-500">Gegenstände insgesamt</h2>
                <p class="bg-white w-8 h-8 rounded-full text-gray-500">
                    {{ stock }}
                </p>
            </div>
        </div>

        <div class="flex justify-center">
            <img src="/img/user.svg" alt="user" class="w-6 m-6" />
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            items: {},
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
    },
}
</script>
