<template>
    <ul class="item-card">
        <router-link
            class="flex-grow"
            :to="{ name: 'ItemDetails', params: { id: item.id } }"
        >
            <li class="flex space-x-6 items-center">
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
        <context-menu
            class="cursor-pointer my-auto"
            :id="item.id"
        ></context-menu>
    </ul>
</template>

<script>
import ContextMenu from "./ContextMenu.vue";

export default {
    components: { ContextMenu },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
};
</script>
