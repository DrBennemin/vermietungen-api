<template>
    <ul class="item-card">
        <router-link class="flex-grow" :to="{ name: 'ItemDetails', params: { id: item.id } }">
            <li class="flex space-x-6 items-center">
                <div class="min-w-max">
                    <div v-if="item.available" class="rounded-full bg-tertiary w-4 h-4"></div>
                    <div v-else class="rounded-full bg-primary w-4 h-4"></div>
                </div>
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
        <context-menu-item class="cursor-pointer my-auto min-w-max" :id="item.id"></context-menu-item>
    </ul>
</template>

<script>
import ContextMenuItem from './ContextMenuItem.vue'

export default {
    components: { ContextMenuItem },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
}
</script>
