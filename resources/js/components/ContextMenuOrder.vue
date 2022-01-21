<template>
    <button class="cursor-pointer my-auto" @click="toggleContextMenu">
        <img src="img/dots-horizontal-triple.svg" alt="context-menu-dots" class="w-8 opacity-75" />
        <ul class="absolute shadow-md rounded-lg px-8 py-4 space-y-4 bg-white z-10" v-if="contextMenuOpen">
            <li class="flex items-center space-x-4 hover:text-primary cursor-pointer" @click="deleteOrder">
                <img src="img/trash.svg" alt="delete" class="w-4 hover:text-primary" />
                <span> Löschen </span>
            </li>
            <li>
                <router-link
                    class="flex items-center space-x-4 hover:text-primary cursor-pointer"
                    :to="{ name: 'OrderUpdate', params: { id: order.id } }">
                    <img src="img/edit-pencil.svg" alt="delete" class="w-4 fill-current hover:text-primary" />
                    <span> Bearbeiten </span>
                </router-link>
            </li>
        </ul>
    </button>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        order: function () {
            return this.$store.getters.get_order(this.id)
        },
    },
    data() {
        return {
            contextMenuOpen: false,
        }
    },
    methods: {
        toggleContextMenu: function () {
            this.contextMenuOpen = !this.contextMenuOpen
        },
        deleteOrder() {
            axios
                .delete('/orders/' + this.id)
                .then(() => {
                    this.$store.dispatch('order_deleted', this.id)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
