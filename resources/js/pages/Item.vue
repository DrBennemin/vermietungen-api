<template>
    <div v-if="item" class="py-32 text-8xl">
        hallo ich bin ein item
        <div>
            {{ item.title }}
        </div>
    </div>
</template>

<script>
export default {
    props: ["id"],
    data: function () {
        return {
            item: null,
        };
    },
    mounted() {
        this.item = this.$store.this.state.items;
    },
};
</script>
