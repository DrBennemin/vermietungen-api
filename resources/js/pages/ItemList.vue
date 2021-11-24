<template>
    <div class="container mx-auto py-24">
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
};
</script>
