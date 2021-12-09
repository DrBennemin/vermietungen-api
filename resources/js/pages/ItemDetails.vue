<template>
    <div class="py-24">
        <div>
            {{ item.title }}
        </div>
        <div>
            {{ item.description }}
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
