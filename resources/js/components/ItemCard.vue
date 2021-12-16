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
                <div class="">
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
        <button class="cursor-pointer my-auto" @click="toggleContextMenu">
            <img
                src="img/dots-horizontal-triple.svg"
                alt="context-menu-dots"
                class="w-8 opacity-75"
            />
            <ul
                class="absolute shadow-xl rounded-lg p-8 bg-white z-10"
                v-if="contextMenuOpen"
            >
                <li class="flex items-center space-x-4" @click="deleteItem">
                    <img src="img/trash.svg" alt="delete" class="w-4" />
                    <span> Löschen </span>
                </li>
            </ul>
        </button>
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
    data() {
        return {
            contextMenuOpen: false,
        };
    },
    methods: {
        toggleContextMenu: function () {
            this.contextMenuOpen = !this.contextMenuOpen;
        },
        deleteItem: function () {
            this.$emit("something");
        },
    },
};
</script>
