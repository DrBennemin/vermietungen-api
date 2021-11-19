<template>
    <div class="container mx-auto">
        <div class="flex flex-col justify-center items-center my-32">
            <home-card
                v-for="(itemInStock, key) in itemsInStock"
                :key="key"
                :itemsInStock="itemsInStock"
            ></home-card>
        </div>
    </div>
</template>

<script>
import HomeCard from "../components/HomeCard.vue";
export default {
    name: "home",
    components: {
        HomeCard,
    },
    data: function () {
        return {
            itemsInStock: {},
        };
    },
    mounted() {
        this.itemsInStock = this.$store.getters.items;
    },
};
</script>
