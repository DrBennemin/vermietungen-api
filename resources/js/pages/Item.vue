<template>
    <div class="py-32 text-8xl">
        hallo ich bin ein item
        <div v-for="(item, key) in items" :key="key">
            {{ item.title }}
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            item: {},
        };
    },
    mounted() {
        this.item = this.$store.this.state.items;
    },
};
</script>
