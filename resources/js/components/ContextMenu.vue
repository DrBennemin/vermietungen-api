<template>
    <div>
        <button class="cursor-pointer my-auto" @click="toggleContextMenu">
            <img src="img/dots-horizontal-triple.svg" alt="context-menu-dots" class="w-8 opacity-75" />
            <ul class="absolute shadow-md rounded-lg px-8 py-4 space-y-4 bg-white z-10" v-if="contextMenuOpen">
                <li class="flex items-center space-x-4 hover:text-primary cursor-pointer" @click="openDialog">
                    <img src="img/trash.svg" alt="delete" class="w-4 hover:text-primary" />
                    <span> Löschen </span>
                </li>
                <li v-if="isArticle">
                    <router-link
                        class="flex items-center space-x-4 hover:text-primary cursor-pointer"
                        :to="{ name: 'ArticleUpdate', params: { id: article.id } }">
                        <img src="img/edit-pencil.svg" alt="delete" class="w-4 fill-current hover:text-primary" />
                        <span> Bearbeiten </span>
                    </router-link>
                </li>
                <li v-else>
                    <router-link
                        class="flex items-center space-x-4 hover:text-primary cursor-pointer"
                        :to="{ name: 'OrderUpdate', params: { id: order.id } }">
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
        isArticle() {
            return this.$route.name === 'Articles'
        },
        isOrder() {
            return this.$route.name === 'Orders'
        },
    },
    data() {
        return {
            contextMenuOpen: false,
        }
    },
    methods: {
        toggleContextMenu() {
            this.contextMenuOpen = !this.contextMenuOpen
        },
        openDialog() {
            this.$emit('openDialog')
        },
        // deleteObject() {
        //     axios
        //         .delete(this.$route.path + '/' + this.id)
        //         .then(() => {
        //             if (this.$route.name == 'articles') {
        //                 this.$store.dispatch('article_deleted', this.id)
        //             } else {
        //                 this.$store.dispatch('order_deleted', this.id)
        //             }
        //         })
        //         .catch((error) => {
        //             console.log(error)
        //         })
        // },
    },
}
</script>
