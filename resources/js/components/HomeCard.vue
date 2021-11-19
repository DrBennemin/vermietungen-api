<template>
    <div class="p-4 lg:p8 shadow-xl rounded-lg">
        <h2 class="bg-primary p-1 text-white font-bold">Objekte auf Lager</h2>
        <!-- <p>{{ item.title }}</p> -->
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
};
</script>
