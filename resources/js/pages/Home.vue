<template>
    <div class="container mx-auto my-32">
        <div class="block md:grid grid-cols-2 gap-4 space-y-8 lg:space-y-0">
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
                    {{ itemsOutOfStock }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import ItemsService from "../services/Items.js";

export default {
    data: function () {
        return {
            items: [],
            itemsInStock: null,
            itemsOutOfStock: null,
        };
    },
    created() {
        ItemsService.getItems()
            .then((response) => {
                this.items = response.data;
                this.$store.commit("UPDATE_ITEMS", this.items);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    computed: {
        inStock: function () {
            return (this.itemsInStock = this.$store.getters.in_stock.length);
        },
        outOfStock: function () {
            return (this.itemsOutOfStock =
                this.$store.getters.out_of_stock.length);
        },
    },
};
</script>
