<template>
    <div class="container mx-auto my-32">
        <div class="block md:grid grid-cols-2 gap-4">
            <div
                class="
                    p-8
                    rounded-md
                    shadow-xl
                    border-t-4 border-red-500
                    space-y-4
                "
            >
                <h2 class="font-bold text-xl text-center">
                    Gegenstände auf Lager
                </h2>
                <p class="text-8xl text-center font-bold text-red-500">
                    {{ itemsInStock }}
                </p>
            </div>
            <div class="p-8 rounded-md shadow-xl border-t-4 border-red-500">
                <h2 class="font-bold text-xl text-center">
                    Gegenstände verliehen
                </h2>
                <p class="text-8xl text-center font-bold text-red-500">
                    {{ outOfStock }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            itemsInStock: null,
            outOfStock: null,
        };
    },
    mounted() {
        this.itemsInStock = this.$store.getters.inStock.length;
        this.outOfStock = this.$store.getters.outOfStock.length;
    },
};
</script>
