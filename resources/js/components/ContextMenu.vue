<template>
    <div>
        <button class="cursor-pointer my-auto" @click="toggleContextMenu">
            <img src="img/dots-horizontal-triple.svg" alt="context-menu-dots" class="w-8 opacity-75" />
            <ul class="absolute shadow-md rounded-lg px-8 py-4 space-y-4 bg-white z-10" v-if="contextMenuOpen">
                <li class="flex items-center space-x-4 hover:text-primary cursor-pointer" @click="deleteObject">
                    <img src="img/trash.svg" alt="delete" class="w-4 hover:text-primary" />
                    <span> Löschen </span>
                </li>
                <li>
                    <router-link
                        class="flex items-center space-x-4 hover:text-primary cursor-pointer"
                        :to="{ name: this.$route.name, params: { id: this.$route.name.id } }">
                        <img src="img/edit-pencil.svg" alt="delete" class="w-4 fill-current hover:text-primary" />
                        <span> Bearbeiten </span>
                    </router-link>
                </li>
            </ul>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    computed: {
        article() {
            return this.$store.getters.get_article(this.id)
        },
        order() {
            return this.$store.getters.get_order(this.id)
        },
        routeName() {
            return this.$route.name
        },
        routePath() {
            return this.$route.path
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
        deleteObject() {
            axios
                .delete(this.$route.path + '/' + this.id)
                .then(() => {
                    if (this.$route.name == 'Articles') {
                        this.$store.dispatch('article_deleted', this.id)
                    } else {
                        this.$store.dispatch('order_deleted', this.id)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
