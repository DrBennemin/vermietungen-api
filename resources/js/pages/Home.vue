<template>
    <div class="container mx-auto py-24">
        <div class="grid grid-cols-4 gap-12 py-12">
            <div class="col-span-1 space-y-4">
                <div
                    class="
                        flex
                        justify-between
                        py-2
                        px-4
                        cursor-pointer
                        rounded-r-lg
                    "
                    :class="{ activeFilter: availableTabActive }"
                    @click="showAvailable"
                >
                    <h2 class="font-bold text-lg text-gray-500">
                        Gegenstände auf Lager
                    </h2>
                    <p class="bg-white w-8 h-8 rounded-full text-gray-500">
                        {{ inStock }}
                    </p>
                </div>
                <div
                    class="flex justify-between py-2 px-4 cursor-pointer"
                    :class="{ activeFilter: notAvailableTabActive }"
                    @click="showUnavailable"
                >
                    <h2 class="font-bold text-lg text-gray-500">
                        Gegenstände verliehen
                    </h2>
                    <p class="bg-white w-8 h-8 rounded-full text-gray-500">
                        {{ outOfStock }}
                    </p>
                </div>
                <div
                    class="flex justify-between py-2 px-4 cursor-pointer"
                    :class="{ activeFilter: allTabActive }"
                    @click="showAll"
                >
                    <h2 class="font-bold text-lg text-gray-500">
                        Gegenstände insgesamt
                    </h2>
                    <p class="bg-white w-8 h-8 rounded-full text-gray-500">
                        {{ stock }}
                    </p>
                </div>
            </div>
            <div class="col-span-3">
                <div class="bg-white rounded-lg shadow-xl mb-4">
                    <item-card
                        v-for="(item, key) in items"
                        :key="key"
                        :item="item"
                        class="border-b-2"
                    ></item-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ItemCard from "../components/ItemCard.vue";
import Api from "../services/api.js";

export default {
    components: { ItemCard },
    data: function () {
        return {
            items: {},
            availableTabActive: true,
            notAvailableTabActive: false,
            allTabActive: false,
        };
    },
    created() {
        Api.getItems()
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
            return this.$store.getters.get_available.length;
        },
        outOfStock: function () {
            return this.$store.getters.get_unavailable.length;
        },
        stock: function () {
            return this.$store.getters.get_items.length;
        },
    },
    methods: {
        showAvailable: function () {
            this.items = this.$store.getters.get_available;
        },
        showUnavailable: function () {
            this.items = this.$store.getters.get_unavailable;
            this.notAvailableTabActive = true;
        },
        showAll: function () {
            this.items = this.$store.getters.get_items;
        },
        deleteItems: function () {
            Api.deleteItem();
        },
    },
};
</script>
