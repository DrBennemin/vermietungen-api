<template>
    <div class="container mx-auto py-24">
        <div>
            <div class="flex space-x-4 items-center">
                <p>Filter:</p>
                <div class="filter-btn" @click="showAvailable">Auf Lager</div>
                <div class="filter-btn" @click="showUnavailable">Vermietet</div>
                <div class="filter-btn" @click="showAll">Alle Gegenstände</div>
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
import Api from "../services/api.js";
export default {
    components: { ItemCard },
    data: function () {
        return {
            items: {},
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
        // showAvailable: function () {
        //     return this.$store.getters.in_stock;
        // },
        // showUnavailable: function () {
        //     return this.$store.getters.out_of_stock;
        // },
        // showAll: function () {
        //     return this.$store.getters.items;
        // },
    },
    methods: {
        showAvailable: function () {
            this.items = this.$store.getters.get_available;
        },
        showUnavailable: function () {
            this.items = this.$store.getters.get_unavailable;
        },
        showAll: function () {
            this.items = this.$store.getters.items;
        },
    },
};
</script>
