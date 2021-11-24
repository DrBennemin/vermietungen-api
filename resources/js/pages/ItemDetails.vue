<template>
    <div class="py-24">
        hallo ich bin ein item
        <div>
            {{ item }}
        </div>
    </div>
</template>

<script>
export default {
    props: ["id"],
    data: function () {
        return {
            item: {},
        };
    },
    mounted() {
        this.item = this.$store.getters.item;
    },
};
</script>
