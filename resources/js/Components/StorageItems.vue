<template>
    <ul>
        <li class="flex items-center space-x-4 p-4 my-4 shadow-lg rounded-lg">
            <p v-if="item.in_stock">🟢</p>
            <p v-else>🔴</p>
            <div>
                <p class="font-bold">
                    {{ item.title }}
                </p>
                <p>
                    {{ item.description }}
                </p>
                <p v-if="!item.in_stock">
                    Artikel wird am
                    <b>{{ item.date_return }}</b> zurückgegeben.
                </p>
            </div>
        </li>
    </ul>
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
