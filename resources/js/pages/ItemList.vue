<template>
    <div class="container mx-auto py-24">
        <div>
            <p>Filter:</p>
            <div class="flex space-x-4">
                <div
                    class="
                        bg-primary
                        hover:bg-secondary
                        cursor-pointer
                        text-white
                        font-bold
                        py-1
                        px-3
                        rounded-lg
                        shadow-xl
                    "
                    @click="showInStock"
                >
                    in stock
                </div>
                <div
                    class="
                        bg-primary
                        hover:bg-secondary
                        cursor-pointer
                        text-white
                        font-bold
                        py-1
                        px-3
                        rounded-lg
                        shadow-xl
                    "
                    @click="showOutOfStock"
                >
                    out of stock
                </div>
                <div
                    class="
                        bg-primary
                        hover:bg-secondary
                        cursor-pointer
                        text-white
                        font-bold
                        py-1
                        px-3
                        rounded-lg
                        shadow-xl
                    "
                    @click="showAll"
                >
                    all items
                </div>
            </div>
        </div>
        <item-card
            v-for="(item, key) in items"
            :key="key"
            :item="item"
        ></item-card>
    </div>
</template>

<script>
import ItemCard from "../components/ItemCard.vue";
export default {
    components: { ItemCard },
    data: function () {
        return {
            items: {},
        };
    },
    mounted() {
        this.items = this.$store.getters.items;
    },
    methods: {
        showInStock: function () {
            this.items = this.$store.getters.inStock;
        },
        showOutOfStock: function () {
            this.items = this.$store.getters.outOfStock;
        },
        showAll: function () {
            this.items = this.$store.getters.items;
        },
    },
};
</script>
