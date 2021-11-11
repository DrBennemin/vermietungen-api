<template>
    <div class="container mx-auto py-24">
        <storage-items
            v-for="(item, key) in items"
            :key="key"
            :item="item"
        ></storage-items>
    </div>
</template>

<script>
import StorageItems from "../components/StorageItems.vue";
export default {
    components: { StorageItems },
    name: "Storage",
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
