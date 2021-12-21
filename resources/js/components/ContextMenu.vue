<template>
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
            <li class="flex items-center space-x-4">
                <img src="img/trash.svg" alt="delete" class="w-4" />
                <span> Löschen </span>
            </li>
        </ul>
    </button>
</template>

<script>
export default {
    props: ["id"],
    computed: {
        item: function () {
            return this.$store.getters.get_item(this.id);
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
            console.log(this.item.id);
        },
    },
};
</script>
