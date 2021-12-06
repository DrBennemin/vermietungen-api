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
    computed: {
        item: function () {
            return this.$store.getters.item(this.id);
        },
    },
};
</script>
