<template>
    <ul>
        <router-link :to="{ name: 'ItemDetails', params: { id: item.id } }">
            <li
                class="
                    flex
                    items-center
                    space-x-4
                    p-4
                    my-4
                    shadow-lg
                    rounded-lg
                "
            >
                <div
                    v-if="item.available"
                    class="rounded-full bg-tertiary w-4 h-4"
                ></div>
                <div v-else class="rounded-full bg-primary w-4 h-4"></div>
                <div>
                    <p class="font-bold">
                        {{ item.title }}
                    </p>
                    <p>
                        {{ item.description }}
                    </p>
                    <p v-if="!item.available">
                        Artikel wird am
                        <b>{{ item.date_return }}</b> zurückgegeben.
                    </p>
                </div>
            </li>
        </router-link>
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
