<template>
    <div class="relative">
        <ul class="absolute top-6 right-0 shadow-md rounded-lg px-8 py-4 space-y-4 bg-white z-50" v-if="isActive">
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
        <div class="cursor-pointer my-auto" @click="toggleContextMenu">
            <img src="img/dots-horizontal-triple.svg" alt="context-menu-dots" class="w-8 opacity-75" />
        </div>
        <div v-if="isActive" class="fixed top-0 left-0 z-40 w-screen h-screen" @click="toggleContextMenu"></div>
        <v-dialog />
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
            isActive: false,
        }
    },
    methods: {
        toggleContextMenu() {
            this.isActive = !this.isActive
        },
        openDialog() {
            this.$modal.show('dialog', {
                title: 'Mit dem Löschen fortfahren?',
                buttons: [
                    {
                        title: 'Abbrechen',
                        handler: () => {
                            this.$modal.hide('dialog')
                            this.isActive = !this.isActive
                        },
                    },
                    {
                        title: 'Ja, löschen!',
                        handler: () => {
                            if ((this.isArticle = true)) {
                                deleteArticle
                            } else {
                                deleteOrder
                            }
                            this.$modal.hide('dialog')
                        },
                    },
                ],
            })
        },
        deleteArticle() {
            axios
                .delete(this.$route.path + '/' + this.id)
                .then(() => {
                    this.$store.dispatch('article_deleted', this.id)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        deleteOrder() {
            axios
                .delete(this.$route.path + '/' + this.id)
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
