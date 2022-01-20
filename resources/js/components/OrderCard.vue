<template>
    <ul class="order-card">
        <router-link class="flex-grow" :to="{ name: 'OrderDetails', params: { id: order.id } }">
            <li class="flex space-x-6 items-center">
                <!-- <div v-if="item.available" class="rounded-full bg-tertiary w-4 h-4"></div>
                <div v-else class="rounded-full bg-primary w-4 h-4"></div> -->
                <div>
                    <p class="font-bold">{{ order.first_name }} {{ order.last_name }}</p>

                    <!-- <p v-if="!item.available">
                        Artikel wird am
                        <b>{{ item.date_return }}</b> zurückgegeben.
                    </p> -->
                </div>
            </li>
        </router-link>
        <context-menu class="cursor-pointer my-auto" :id="order.id"></context-menu>
    </ul>
</template>

<script>
import ContextMenu from './ContextMenu.vue'

export default {
    components: { ContextMenu },
    props: {
        order: {
            type: Object,
            required: true,
        },
    },
}
</script>
